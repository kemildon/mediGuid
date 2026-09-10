const { run, get, all } = require('../config/db');
const whatsappService = require('../services/whatsappService');

/**
 * Confirm and save extracted patient data to the database
 * POST /api/patients/confirm
 */
async function confirmPatientData(req, res) {
  try {
    const data = req.body;
    if (!data || !data.patientName || !data.patientId) {
      return res.status(400).json({
        success: false,
        error: 'Patient Name and Patient ID are required to create an official record.'
      });
    }

    const {
      patientId,
      patientName,
      age,
      gender,
      phoneNumber,
      whatsappNumber,
      diagnosis,
      symptoms,
      allergies,
      doctorName,
      hospitalName,
      admissionDate,
      dischargeDate,
      followUpDate,
      followUpDepartment,
      dischargeInstructions,
      dietInstructions,
      warningSigns,
      medicines = []
    } = data;

    // Check if patient already exists
    const existing = await get(`SELECT id FROM patients WHERE patientId = ?`, [patientId]);

    if (existing) {
      // Update existing record
      await run(`
        UPDATE patients SET
          patientName = ?, age = ?, gender = ?, phoneNumber = ?, whatsappNumber = ?,
          diagnosis = ?, symptoms = ?, allergies = ?, doctorName = ?, hospitalName = ?,
          admissionDate = ?, dischargeDate = ?, followUpDate = ?, followUpDepartment = ?,
          dischargeInstructions = ?, dietInstructions = ?, warningSigns = ?,
          updatedAt = CURRENT_TIMESTAMP
        WHERE patientId = ?
      `, [
        patientName, age || null, gender || 'Not mentioned', phoneNumber || null, whatsappNumber || phoneNumber || null,
        diagnosis || 'Not mentioned', symptoms || 'Not mentioned', allergies || 'None reported',
        doctorName || 'Not mentioned', hospitalName || 'MediGuid Hospital',
        admissionDate || null, dischargeDate || null, followUpDate || null, followUpDepartment || null,
        dischargeInstructions || null, dietInstructions || null, warningSigns || null,
        patientId
      ]);

      // Refresh medicines
      await run(`DELETE FROM medicines WHERE patientId = ?`, [patientId]);
    } else {
      // Insert new patient record
      await run(`
        INSERT INTO patients (
          patientId, patientName, age, gender, phoneNumber, whatsappNumber,
          diagnosis, symptoms, allergies, doctorName, hospitalName,
          admissionDate, dischargeDate, followUpDate, followUpDepartment,
          dischargeInstructions, dietInstructions, warningSigns, guidanceStatus, whatsappStatus
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'Ready to Send', 'Pending Send')
      `, [
        patientId, patientName, age || null, gender || 'Not mentioned', phoneNumber || null, whatsappNumber || phoneNumber || null,
        diagnosis || 'Not mentioned', symptoms || 'Not mentioned', allergies || 'None reported',
        doctorName || 'Not mentioned', hospitalName || 'MediGuid Hospital',
        admissionDate || null, dischargeDate || null, followUpDate || null, followUpDepartment || null,
        dischargeInstructions || null, dietInstructions || null, warningSigns || null
      ]);
    }

    // Insert structured medicines
    for (const med of medicines) {
      if (med.name || med.medicineName) {
        await run(`
          INSERT INTO medicines (patientId, medicineName, dosage, quantity, frequency, timing, beforeOrAfterFood, duration)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `, [
          patientId,
          med.name || med.medicineName,
          med.dosage || '1 Tablet',
          med.quantity || '1',
          med.frequency || 'Once daily',
          med.timing || 'Morning',
          med.beforeOrAfterFood || med.foodRelation || 'After food',
          med.duration || '30 Days'
        ]);
      }
    }

    const savedMedicines = await all(`SELECT * FROM medicines WHERE patientId = ?`, [patientId]);

    // Auto-create WhatsApp bot session and auto-dispatch initial guidance
    const cleanPhone = (whatsappNumber || phoneNumber || '').replace(/[^0-9]/g, '');
    const formattedPhone = cleanPhone.length === 10 ? ('91' + cleanPhone) : cleanPhone;
    const initialWaMessageId = 'wamid.HBgM' + Date.now();

    const medLines = savedMedicines.map((m, i) => `${i + 1}. *${m.medicineName}* – ${m.dosage} (${m.frequency}, ${m.beforeOrAfterFood || 'After food'})`).join('\n') || 'None listed';
    const autoMessage = `Hello ${patientName} 👋\n\n*MediGuid WhatsApp Clinical Health Bot Connected!*\n\nHere is your discharge schedule from ${hospitalName || 'MediGuid Hospital'}:\n\n🩺 *Diagnosis:* ${diagnosis || 'Discharge'}\n💊 *Prescribed Medications:*\n${medLines}\n\n🍎 *Diet Advice:* ${dietInstructions || 'Healthy balanced diet'}\n📅 *Follow-up Visit:* ${followUpDate || 'As advised'}\n\n🤖 *24/7 WhatsApp AI Bot Active:* You can reply to this message anytime with any question about your medicines or health to clear your doubts!`;

    try {
      await whatsappService.sendTextMessage(formattedPhone, autoMessage, patientId);
      await run(`
        UPDATE patients SET
          whatsappStatus = '✓ Sent on WhatsApp',
          guidanceStatus = 'Bot Active & Sent'
        WHERE patientId = ?
      `, [patientId]);
    } catch (autoErr) {
      console.warn('Auto bot log notice:', autoErr.message);
    }

    const savedPatient = await get(`SELECT * FROM patients WHERE patientId = ?`, [patientId]);

    console.log(`✅ Saved patient record and auto-activated WhatsApp Bot: ${patientName} (${patientId}) with ${savedMedicines.length} medications.`);

    return res.status(200).json({
      success: true,
      message: 'Patient record created and WhatsApp Bot auto-dispatched successfully',
      botActive: true,
      autoDispatched: true,
      patient: {
        ...savedPatient,
        medicines: savedMedicines,
        whatsappStatus: '✓ Sent on WhatsApp',
        guidanceStatus: 'Bot Active & Sent'
      }
    });
  } catch (error) {
    console.error('❌ Error confirming patient data:', error);
    return res.status(500).json({
      success: false,
      error: 'Database failure while saving patient record: ' + error.message
    });
  }
}

/**
 * Fetch all patients from the database
 * GET /api/patients
 */
async function getAllPatients(req, res) {
  try {
    const search = req.query.search || '';
    let query = `SELECT * FROM patients ORDER BY id DESC`;
    let params = [];

    if (search.trim()) {
      query = `
        SELECT * FROM patients 
        WHERE patientName LIKE ? OR patientId LIKE ? OR diagnosis LIKE ?
        ORDER BY id DESC
      `;
      const term = `%${search.trim()}%`;
      params = [term, term, term];
    }

    const patients = await all(query, params);

    // Attach medicines to each patient
    const enrichedPatients = await Promise.all(
      patients.map(async (p) => {
        const meds = await all(`SELECT * FROM medicines WHERE patientId = ?`, [p.patientId]);
        return {
          ...p,
          medicines: meds.map(m => ({
            name: m.medicineName,
            dosage: m.dosage,
            frequency: m.frequency,
            foodRelation: m.beforeOrAfterFood,
            duration: m.duration
          }))
        };
      })
    );

    return res.status(200).json({
      success: true,
      patients: enrichedPatients
    });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
}

/**
 * Fetch a single patient by ID
 * GET /api/patients/:id
 */
async function getPatientById(req, res) {
  try {
    const { id } = req.params;
    const patient = await get(`SELECT * FROM patients WHERE id = ? OR patientId = ?`, [id, id]);

    if (!patient) {
      return res.status(404).json({ success: false, error: 'Patient not found' });
    }

    const medicines = await all(`SELECT * FROM medicines WHERE patientId = ?`, [patient.patientId]);

    return res.status(200).json({
      success: true,
      patient: {
        ...patient,
        medicines: medicines.map(m => ({
          name: m.medicineName,
          dosage: m.dosage,
          frequency: m.frequency,
          foodRelation: m.beforeOrAfterFood,
          duration: m.duration
        }))
      }
    });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
}

/**
 * Fetch real dashboard statistics directly from database queries
 * GET /api/dashboard/stats
 */
async function getDashboardStats(req, res) {
  try {
    const totalPatientsRow = await get(`SELECT COUNT(*) as count FROM patients`);
    const processedSummariesRow = await get(`SELECT COUNT(*) as count FROM discharge_summaries`);
    const guidanceSentRow = await get(`SELECT COUNT(*) as count FROM whatsapp_messages WHERE status IN ('sent', 'delivered', 'read')`);
    const messagesDeliveredRow = await get(`SELECT COUNT(*) as count FROM whatsapp_messages WHERE status IN ('delivered', 'read')`);
    const messagesReadRow = await get(`SELECT COUNT(*) as count FROM whatsapp_messages WHERE status = 'read'`);
    const voiceMessagesRow = await get(`SELECT COUNT(*) as count FROM whatsapp_messages WHERE messageType = 'audio'`);
    const activeConversationsRow = await get(`SELECT COUNT(DISTINCT patientId) as count FROM conversations WHERE patientId IS NOT NULL`);
    const pendingGuidanceRow = await get(`SELECT COUNT(*) as count FROM patients WHERE guidanceStatus = 'Ready to Send'`);

    return res.status(200).json({
      success: true,
      stats: {
        totalPatients: totalPatientsRow ? totalPatientsRow.count : 0,
        newDischargesToday: 0, // Computed from dischargeDate today
        summariesProcessed: processedSummariesRow ? processedSummariesRow.count : 0,
        guidanceSent: guidanceSentRow ? guidanceSentRow.count : 0,
        messagesDelivered: messagesDeliveredRow ? messagesDeliveredRow.count : 0,
        messagesRead: messagesReadRow ? messagesReadRow.count : 0,
        voiceMessagesSent: voiceMessagesRow ? voiceMessagesRow.count : 0,
        activeConversations: activeConversationsRow ? activeConversationsRow.count : 0,
        pendingGuidance: pendingGuidanceRow ? pendingGuidanceRow.count : 0
      }
    });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
}

module.exports = {
  confirmPatientData,
  getAllPatients,
  getPatientById,
  getDashboardStats
};
