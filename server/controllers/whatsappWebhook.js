const { run, get } = require('../config/db');
const whatsappService = require('../services/whatsappService');
const aiService = require('../services/aiService');

/**
 * Handle Meta Webhook Verification Handshake
 * GET /api/whatsapp/webhook
 */
function handleWebhookVerification(req, res) {
  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];

  const expectedToken = process.env.WHATSAPP_VERIFY_TOKEN || 'mediguid_webhook_token_2026';

  if (mode && token) {
    if (mode === 'subscribe' && token === expectedToken) {
      console.log('✅ Meta Webhook verified successfully!');
      return res.status(200).send(challenge);
    } else {
      console.warn('⚠️ Webhook verification token mismatch.');
      return res.status(403).json({ error: 'Verification token mismatch' });
    }
  }

  return res.status(400).json({ error: 'Missing hub.mode or hub.verify_token' });
}

/**
 * Handle Incoming Webhook Events (Statuses & Inbound Messages)
 * POST /api/whatsapp/webhook
 */
async function handleWebhookEvent(req, res) {
  const body = req.body;

  // Immediately acknowledge receipt to Meta (required to prevent timeout)
  res.status(200).send('EVENT_RECEIVED');

  if (!body || body.object !== 'whatsapp_business_account') {
    return;
  }

  const entries = body.entry || [];
  for (const entry of entries) {
    const changes = entry.changes || [];
    for (const change of changes) {
      const value = change.value;
      if (!value) continue;

      // 1. Process Delivery Status Updates (sent, delivered, read, failed)
      if (value.statuses && Array.isArray(value.statuses)) {
        for (const statusObj of value.statuses) {
          const waMessageId = statusObj.id;
          const status = statusObj.status; // 'sent', 'delivered', 'read', 'failed'
          const timestamp = statusObj.timestamp ? new Date(parseInt(statusObj.timestamp, 10) * 1000).toISOString() : new Date().toISOString();

          console.log(`📡 WhatsApp Status Update: Message ${waMessageId} is now ${status.toUpperCase()}`);

          try {
            if (status === 'delivered') {
              await run(`
                UPDATE whatsapp_messages 
                SET status = 'delivered', deliveredAt = ? 
                WHERE waMessageId = ?
              `, [timestamp, waMessageId]);
            } else if (status === 'read') {
              await run(`
                UPDATE whatsapp_messages 
                SET status = 'read', readAt = ? 
                WHERE waMessageId = ?
              `, [timestamp, waMessageId]);
            } else if (status === 'failed') {
              const errMsg = statusObj.errors?.[0]?.message || 'Delivery failed';
              await run(`
                UPDATE whatsapp_messages 
                SET status = 'failed', errorDetails = ? 
                WHERE waMessageId = ?
              `, [errMsg, waMessageId]);
            }
          } catch (dbErr) {
            console.error('⚠️ Failed to update message delivery status in DB:', dbErr.message);
          }
        }
      }

      // 2. Process Inbound Messages from Patients
      if (value.messages && Array.isArray(value.messages)) {
        for (const msg of value.messages) {
          const fromPhone = msg.from; // e.g. "919876543210"
          const waMessageId = msg.id;
          const msgType = msg.type;

          let userText = '';
          if (msgType === 'text') {
            userText = msg.text?.body || '';
          } else if (msgType === 'audio') {
            userText = '[Voice Message received]';
          } else {
            userText = `[${msgType} message received]`;
          }

          console.log(`💬 Inbound WhatsApp message from ${fromPhone}: "${userText}"`);

          try {
            // Find patient matching this phone number
            // Normalize phone matching: match last 10 digits
            const last10 = fromPhone.slice(-10);
            const patient = await get(`
              SELECT * FROM patients 
              WHERE whatsappNumber LIKE ? OR phoneNumber LIKE ?
              ORDER BY id DESC LIMIT 1
            `, [`%${last10}%`, `%${last10}%`]);

            const patientId = patient ? patient.patientId : null;

            // Store incoming message in conversations
            await run(`
              INSERT INTO conversations (patientId, sender, messageText, messageType, waMessageId)
              VALUES (?, 'patient', ?, ?, ?)
            `, [patientId, userText, msgType, waMessageId]);

            // If patient recognized and text available, synthesize grounded AI response
            if (patient && userText && msgType === 'text') {
              const aiResult = await aiService.answerPatientQuestion(patient.patientId, userText);
              const replyText = aiResult.response;

              // Send response back to patient via WhatsApp Cloud API
              const sendResult = await whatsappService.sendTextMessage(fromPhone, replyText, patient.patientId);
              console.log(`🤖 Dispatched grounded AI reply to ${fromPhone} (Success: ${sendResult.success})`);
            } else if (!patient && msgType === 'text') {
              // Unrecognized patient phone
              const unknownReply = 'Hello! MediGuid could not find an active hospital discharge record associated with this phone number. Please contact the hospital helpdesk at +91 44 2836 9000.';
              await whatsappService.sendTextMessage(fromPhone, unknownReply);
            }
          } catch (msgErr) {
            console.error('❌ Error processing inbound patient WhatsApp message:', msgErr);
          }
        }
      }
    }
  }
}

module.exports = {
  handleWebhookVerification,
  handleWebhookEvent
};
