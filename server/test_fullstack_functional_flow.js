const fs = require('fs');
const path = require('path');
const http = require('http');

// Make sure .env is loaded
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
require('dotenv').config();

const { initDatabase, get, all, run } = require('../server/config/db');
const { parseClinicalDocument } = require('../server/services/clinicalParser');
const { extractTextFromFile } = require('../server/services/ocrService');
const whatsappService = require('../server/services/whatsappService');
const aiService = require('../server/services/aiService');

async function runTests() {
  console.log('====================================================');
  console.log('🧪 RUNNING MEDIGUID FULLSTACK FUNCTIONAL TEST SUITE');
  console.log('====================================================');

  let passed = 0;
  let failed = 0;

  function assert(condition, message) {
    if (condition) {
      console.log(`  ✅ PASS: ${message}`);
      passed++;
    } else {
      console.error(`  ❌ FAIL: ${message}`);
      failed++;
    }
  }

  try {
    // 1. Database Schema Test
    console.log('\n--- 1. Testing Database & Schema Initialization ---');
    await initDatabase();
    const tables = await all(`SELECT name FROM sqlite_master WHERE type='table'`);
    const tableNames = tables.map(t => t.name);
    
    assert(tableNames.includes('hospitals'), 'hospitals table exists');
    assert(tableNames.includes('patients'), 'patients table exists');
    assert(tableNames.includes('discharge_summaries'), 'discharge_summaries table exists');
    assert(tableNames.includes('medicines'), 'medicines table exists');
    assert(tableNames.includes('guidance_messages'), 'guidance_messages table exists');
    assert(tableNames.includes('whatsapp_messages'), 'whatsapp_messages table exists');
    assert(tableNames.includes('conversations'), 'conversations table exists');

    // 2. Clinical Parser & Zero-Fake-Data Integrity Test
    console.log('\n--- 2. Testing Clinical Parser & Zero-Fake-Data Integrity ---');
    const realSampleDischarge = `
MEDIGUID CENTRAL MULTI-SPECIALTY HOSPITAL
DEPARTMENT OF CARDIOLOGY & INTERNAL MEDICINE
DISCHARGE SUMMARY

Patient Name: Rajesh Kumar
Patient ID: MG-TEST-9921
Age: 58 Years | Gender: Male
Mobile: +91 98401 23456
Admission Date: 01-09-2026
Discharge Date: 07-09-2026
Attending Consultant: Dr. S. K. Narayanan, MD, DM (Cardiology)

FINAL DIAGNOSIS:
Acute Coronary Syndrome - NSTEMI, Type 2 Diabetes Mellitus, Essential Hypertension

DISCHARGE MEDICATIONS:
1. Tab Aspirin 75mg - 1 tab once daily in morning (After food) - 90 Days
2. Tab Clopidogrel 75mg - 1 tab once daily at night (After food) - 90 Days
3. Tab Atorvastatin 40mg - 1 tab at bedtime (After food) - 90 Days
4. Tab Metoprolol Succinate 25mg - 1 tab once daily (After food) - 30 Days
5. Tab Metformin 500mg - 1 tab twice daily with meals (After food) - 60 Days

DIETARY & LIFESTYLE ADVICE:
Strict low salt (< 3g/day), low fat, diabetic diet. Avoid all fried snacks, pickles, and sweets. 30 minutes brisk walking daily once stable.

FOLLOW UP:
Cardiology review in 2 weeks on 21-09-2026. Bring ECG and blood sugar reports.

EMERGENCY WARNING SIGNS:
Chest pain radiating to left arm or jaw, severe shortness of breath, sudden sweating or dizziness. Rush to Emergency immediately.
Emergency Contact: +91 44 2836 9000
    `;

    const parsed = parseClinicalDocument(realSampleDischarge);
    assert(parsed !== null, 'Clinical parser successfully parsed realistic discharge document');
    assert(parsed.name === 'Rajesh Kumar', `Patient Name extracted accurately: ${parsed.name}`);
    assert(parsed.id === 'MG-TEST-9921', `Patient ID extracted accurately: ${parsed.id}`);
    assert(parsed.age === 58, `Patient Age extracted: ${parsed.age}`);
    assert(parsed.gender === 'Male', `Patient Gender: ${parsed.gender}`);
    assert(parsed.phone.replace(/\s+/g, '') === '+919840123456', `Patient Phone: ${parsed.phone}`);
    assert(parsed.diagnosis.includes('Coronary Syndrome'), `Diagnosis extracted: ${parsed.diagnosis}`);
    assert(parsed.medicines.length === 5, `Extracted all 5 structured medicines (found: ${parsed.medicines.length})`);
    assert(parsed.medicines[0].name.toLowerCase().includes('aspirin'), 'Medicine 1 is Aspirin');
    assert(parsed.medicines[1].name.toLowerCase().includes('clopidogrel'), 'Medicine 2 is Clopidogrel');

    // Test rejection of empty / unreadable documents
    const emptyParsed = parseClinicalDocument('Hello world, no clinical data here.');
    assert(emptyParsed === null, 'Parser correctly returned null on document lacking clinical parameters');

    // 3. Database Persistence Test
    console.log('\n--- 3. Testing Patient Database Record Creation ---');
    // Save parsed patient to database
    const patientController = require('../server/controllers/patientController');
    const mockReq = {
      body: {
        patientId: parsed.id,
        patientName: parsed.name,
        age: parsed.age,
        gender: parsed.gender,
        phoneNumber: parsed.phone,
        whatsappNumber: parsed.phone,
        diagnosis: parsed.diagnosis,
        doctorName: parsed.doctor,
        hospitalName: parsed.hospital,
        admissionDate: parsed.admissionDate,
        dischargeDate: parsed.dischargeDate,
        followUpDate: parsed.followUpDate,
        dietInstructions: parsed.foodInstructions,
        dischargeInstructions: parsed.dailyCare,
        warningSigns: parsed.warningSigns,
        medicines: parsed.medicines
      }
    };

    let confirmResult = null;
    const mockRes = {
      status: function (s) {
        this.statusCode = s;
        return this;
      },
      json: function (data) {
        confirmResult = data;
        return this;
      }
    };

    await patientController.confirmPatientData(mockReq, mockRes);
    assert(confirmResult?.success === true, 'Patient saved to database successfully');
    assert(confirmResult?.patient?.medicines?.length === 5, 'Medicines saved with patient');

    // 4. Test Dashboard Stats
    console.log('\n--- 4. Testing Real Dashboard Stats Query ---');
    let statsResult = null;
    await patientController.getDashboardStats({}, {
      status: function (s) { return this; },
      json: function (data) { statsResult = data; return this; }
    });
    assert(statsResult?.success === true, 'Dashboard stats query executed');
    assert(statsResult?.stats?.totalPatients >= 1, `Real patient count reflects stored patient: ${statsResult?.stats?.totalPatients}`);

    // 5. Test WhatsApp Business API Configuration Detection
    console.log('\n--- 5. Testing WhatsApp Business API Status & Test Mode ---');
    const isConfigured = whatsappService.isConfigured();
    console.log(`  ℹ️ WhatsApp API Configured: ${isConfigured}`);
    const sendResult = await whatsappService.sendTextMessage('+91 98401 23456', 'Test Guidance', parsed.id);
    if (!isConfigured) {
      assert(sendResult.success === false, 'Refused to simulate delivery when credentials missing');
      assert(sendResult.isTestMode === true, 'Reported Test Mode flag correctly');
      assert(sendResult.error && sendResult.error.includes('credentials are not configured'), 'Reported explicit unconfigured error notice');
    } else {
      assert(sendResult.success === true, 'Successfully dispatched guidance with configured API credentials');
      assert(sendResult.isConfirmed === true, 'WhatsApp dispatch confirmed');
    }

    // 6. Test Webhook Verification
    console.log('\n--- 6. Testing Meta Webhook Verification Handshake ---');
    const whatsappWebhook = require('../server/controllers/whatsappWebhook');
    let webhookStatus = null;
    let webhookBody = null;
    const verifyReq = {
      query: {
        'hub.mode': 'subscribe',
        'hub.verify_token': process.env.WHATSAPP_VERIFY_TOKEN || 'mediguid_webhook_token_2026',
        'hub.challenge': 'CHALLENGE_ACCEPTED_12345'
      }
    };
    const verifyRes = {
      status: function(s) { webhookStatus = s; return this; },
      send: function(body) { webhookBody = body; return this; },
      json: function(j) { webhookBody = j; return this; }
    };
    whatsappWebhook.handleWebhookVerification(verifyReq, verifyRes);
    assert(webhookStatus === 200, 'Webhook verification returned HTTP 200');
    assert(webhookBody === 'CHALLENGE_ACCEPTED_12345', 'Echoed back hub.challenge to Meta');

    // 7. Test Inbound Patient WhatsApp Message & Grounded AI
    console.log('\n--- 7. Testing Inbound Patient Message & Grounded AI QA ---');
    const aiAnswer = await aiService.answerPatientQuestion(parsed.id, 'When should I take Aspirin and can I take it on an empty stomach?');
    assert(aiAnswer.success === true, 'AI answered question based on patient discharge medicines');
    assert(aiAnswer.response.toLowerCase().includes('aspirin'), 'AI response mentions Aspirin');
    assert(aiAnswer.response.toLowerCase().includes('food'), 'AI response correctly cites after food');

    // Test Medical Safety Guardrail
    const unsafeAnswer = await aiService.answerPatientQuestion(parsed.id, 'Can I stop taking all my medicines now?', 'en');
    assert(unsafeAnswer.source === 'safety_guardrail', 'Medical safety guardrail triggered for stop-medication question');
    assert(unsafeAnswer.response.toLowerCase().includes('stop') || unsafeAnswer.response.toLowerCase().includes('alert'), 'Safety response warned against stopping prescribed medications');

    // Test Tamil Support
    const tamilAnswer = await aiService.answerPatientQuestion(parsed.id, 'மருந்துகளை எப்படி உட்கொள்வது?', 'ta');
    assert(tamilAnswer.success === true, 'Grounded AI produced Tamil response');
    assert(tamilAnswer.language === 'ta', 'Language tagged as Tamil');

    console.log('\n====================================================');
    console.log(`📊 TEST RESULTS: ${passed} PASSED, ${failed} FAILED`);
    console.log('====================================================');

    if (failed > 0) {
      process.exit(1);
    }
  } catch (err) {
    console.error('Fatal test error:', err);
    process.exit(1);
  }
}

runTests();
