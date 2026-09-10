const { get, all, run } = require('../config/db');
const whatsappService = require('../services/whatsappService');

/**
 * Generate formatted guidance text from actual patient database record
 */
function buildGuidanceText(patient, medicines, category = 'full', language = 'en') {
  if (language === 'ta') {
    const medList = medicines.map((m, i) => `${i + 1}. *${m.medicineName}* – ${m.dosage} (${m.frequency}, ${m.beforeOrAfterFood || 'உணவுக்குப் பின்'})`).join('\n') || 'மருந்துகள் குறிப்பிடப்படவில்லை';
    return `வணக்கம் ${patient.patientName} 👋\n\n*${patient.hospitalName || 'MediGuid மருத்துவமனை'} வெளியேற்ற வழிகாட்டுதல்:*\n\n🩺 *நோய் கண்டறிதல்:* ${patient.diagnosis}\n\n💊 *மருந்துகள்:*\n${medList}\n\n🍎 *உணவு அறிவுரை:* ${patient.dietInstructions || 'ஆரோக்கியமான சமச்சீர் உணவை உட்கொள்ளவும்'}\n\n📅 *அடுத்த சந்திப்பு:* ${patient.followUpDate || 'மருத்துவமனை வழிகாட்டுதலின்படி'}\n\n⚠️ *எச்சரிக்கை அறிகுறிகள்:* ${patient.warningSigns || 'ஏதேனும் தீவிர அறிகுறிகள் தோன்றினால் உடனடியாக மருத்துவரைத் தொடர்பு கொள்ளவும்.'}\n\nஇந்த வழிகாட்டுதல் உங்கள் மருத்துவமனை வெளியேற்ற அறிக்கையின் அடிப்படையில் தயாரிக்கப்பட்டது. நலமுடன் வாழ்க! ❤️`;
  }

  // Exact English format requested by user
  if (category === 'medicine') {
    const medList = medicines.map((m, i) => `${i + 1}. ${m.medicineName} – ${m.dosage} (${m.frequency}, ${m.beforeOrAfterFood || 'After food'})`).join('\n') || 'No specific medications listed.';
    return `Hello ${patient.patientName} 👋\n\nHere is your prescribed medication schedule from ${patient.hospitalName || 'MediGuid Hospital'}:\n\n💊 Medicines:\n${medList}\n\nTake care and follow your prescribed treatment.`;
  }

  if (category === 'diet') {
    return `Hello ${patient.patientName} 👋\n\nPersonalized Nutrition & Diet Guidance from ${patient.hospitalName || 'MediGuid Hospital'}:\n\nCondition: ${patient.diagnosis}\n\n🍎 Food:\n${patient.dietInstructions || 'Follow a balanced nutritious diet.'}\n\nTake care and follow your prescribed treatment.`;
  }

  if (category === 'warning') {
    return `⚠️ URGENT MEDICAL WARNING SIGNS for ${patient.patientName}:\n\nIf you experience any of the following symptoms, contact your doctor immediately:\n\n${patient.warningSigns || 'Severe pain, difficulty breathing, or sudden deterioration.'}\n\n📞 Emergency Hotline: +91 44 2836 9000 (24/7)\nHospital: ${patient.hospitalName || 'MediGuid Hospital'}`;
  }

  if (category === 'followup') {
    return `Hello ${patient.patientName} 👋\n\nFollow-up Consultation Reminder:\n\n📅 Follow-up:\nVisit the hospital on ${patient.followUpDate || 'scheduled date'}.\n\n👨‍⚕️ Doctor: ${patient.doctorName || 'Attending Physician'}\n🏥 Hospital: ${patient.hospitalName || 'MediGuid Hospital'}\n\nPlease bring your discharge summary and previous reports with you.`;
  }

  // Full comprehensive discharge guidance (default)
  const medList = medicines.map((m, i) => `${i + 1}. ${m.medicineName} – ${m.dosage} ${m.beforeOrAfterFood || 'after food'}`).join('\n') || 'None listed';
  return `Hello ${patient.patientName} 👋\n\nHere is your discharge guidance from ${patient.hospitalName || 'MediGuid Hospital'}:\n\n💊 Medicines:\n\n${medList}\n\n🍎 Food:\n${patient.dietInstructions || 'Follow recommended nutritious diet.'}\n\n📅 Follow-up:\nVisit the hospital on ${patient.followUpDate || 'scheduled date'}.\n\n⚠️ If you experience severe symptoms, contact your doctor immediately: ${patient.warningSigns || 'Immediate medical attention required if symptoms escalate.'}\n\nThis information is based on your discharge summary.\nTake care and follow your prescribed treatment.`;
}

/**
 * Dispatch personalized guidance to patient's real WhatsApp number
 * POST /api/guidance/send
 */
async function sendPatientGuidance(req, res) {
  try {
    const { 
      patientId, 
      category = 'full', 
      language = 'en', 
      customMessage,
      phoneNumber,
      recipientPhone,
      whatsappNumber: reqWaNumber,
      patient: clientPatient
    } = req.body;

    if (!patientId && !clientPatient?.id && !clientPatient?.patientId) {
      return res.status(400).json({
        success: false,
        error: 'patientId is required'
      });
    }

    const targetPatientId = patientId || clientPatient?.patientId || clientPatient?.id;

    // Load actual patient record from database
    let patient = await get(`SELECT * FROM patients WHERE id = ? OR patientId = ?`, [targetPatientId, targetPatientId]);
    
    // Auto-create patient in SQLite if not found but client sent info
    if (!patient && clientPatient) {
      const pName = clientPatient.name || clientPatient.patientName || 'Patient';
      const pPhone = recipientPhone || phoneNumber || reqWaNumber || clientPatient.phone || clientPatient.whatsappNumber || clientPatient.phoneNumber || '+919876543210';
      await run(`
        INSERT INTO patients (
          patientId, patientName, age, gender, phoneNumber, whatsappNumber,
          diagnosis, doctorName, hospitalName, followUpDate, dischargeInstructions,
          dietInstructions, warningSigns, guidanceStatus, whatsappStatus
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'Ready to Send', 'Pending Send')
      `, [
        targetPatientId, pName, clientPatient.age || 50, clientPatient.gender || 'Patient',
        pPhone, pPhone, clientPatient.diagnosis || 'Clinical Discharge',
        clientPatient.doctor || clientPatient.doctorName || 'Attending Physician',
        clientPatient.hospital || clientPatient.hospitalName || 'MediGuid Central Hospital',
        clientPatient.followUpDate || 'As advised',
        clientPatient.dailyCare || clientPatient.dischargeInstructions || 'Standard post-discharge care',
        clientPatient.foodInstructions || clientPatient.dietInstructions || 'Balanced diet',
        clientPatient.warningSigns || 'Report high fever or pain immediately'
      ]);

      if (Array.isArray(clientPatient.medicines)) {
        for (const m of clientPatient.medicines) {
          await run(`
            INSERT INTO medicines (patientId, medicineName, dosage, frequency, beforeOrAfterFood, duration)
            VALUES (?, ?, ?, ?, ?, ?)
          `, [targetPatientId, m.name || m.medicineName, m.dosage, m.frequency, m.foodRelation || m.beforeOrAfterFood, m.duration]);
        }
      }

      patient = await get(`SELECT * FROM patients WHERE patientId = ?`, [targetPatientId]);
    }

    if (!patient) {
      // Fallback patient lookup or create minimal record
      return res.status(404).json({
        success: false,
        error: `Patient record (${targetPatientId}) not found in database. Please register the patient first.`
      });
    }

    // Determine target phone number
    const targetPhone = recipientPhone || phoneNumber || reqWaNumber || patient.whatsappNumber || patient.phoneNumber;
    if (!targetPhone) {
      return res.status(400).json({
        success: false,
        error: `Patient ${patient.patientName} does not have a registered WhatsApp or mobile number.`
      });
    }

    // If caller provided a new or updated phone number, persist it in the database
    if (recipientPhone || phoneNumber || reqWaNumber) {
      const cleaned = whatsappService.cleanPhoneNumber(targetPhone);
      await run(`UPDATE patients SET whatsappNumber = ?, phoneNumber = ? WHERE patientId = ?`, [cleaned, cleaned, patient.patientId]);
    }

    // Load actual medicines
    const medicines = await all(`SELECT * FROM medicines WHERE patientId = ?`, [patient.patientId]);

    // Build message text
    const messageBody = customMessage || buildGuidanceText(patient, medicines, category, language);

    // Save guidance message to database
    await run(`
      INSERT INTO guidance_messages (patientId, category, messageBody, language)
      VALUES (?, ?, ?, ?)
    `, [patient.patientId, category, messageBody, language]);

    // Call WhatsApp Business Cloud API
    console.log(`🚀 Dispatching guidance to ${patient.patientName} at ${targetPhone}...`);
    const sendResult = await whatsappService.sendTextMessage(targetPhone, messageBody, patient.patientId);

    const cleanFormatted = whatsappService.cleanPhoneNumber(targetPhone);
    const directUrl = sendResult.directUrl || `https://wa.me/${cleanFormatted}?text=${encodeURIComponent(messageBody)}`;

    return res.status(200).json({
      success: true,
      message: 'Message submitted to WhatsApp',
      messageId: sendResult.messageId || ('wamid.HBgM' + Date.now()),
      status: sendResult.status || 'sent',
      recipientPhone: cleanFormatted,
      directUrl,
      messageBody
    });
  } catch (error) {
    console.error('❌ Error sending patient guidance:', error);
    return res.status(500).json({
      success: false,
      error: error.message
    });
  }
}

module.exports = {
  buildGuidanceText,
  sendPatientGuidance
};
