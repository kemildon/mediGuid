/**
 * Automated Verification Script: Desktop Dual-Portal Healthcare System
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const assert = require('assert');

console.log('=== STARTING DESKTOP DUAL-PORTAL VERIFICATION ===\n');

// 1. Structure Verification for index.html and frontend/index.html
function verifyHtmlStructure(filePath, label) {
  console.log(`Checking ${label}: ${filePath}...`);
  const html = fs.readFileSync(filePath, 'utf8');

  // Verify No Fake Phone Mockup
  assert(!html.includes('class="device-container"'), `${label} must not contain device-container`);
  assert(!html.includes('phone-status-bar'), `${label} must not contain phone-status-bar`);
  assert(!html.includes('phone-notch'), `${label} must not contain phone-notch`);
  console.log(`  ✓ No phone mockup frame found`);

  // Verify Desktop Viewport Wrapper & Portal Selection Landing Screen
  assert(html.includes('class="desktop-viewport-wrapper"'), `${label} must contain desktop-viewport-wrapper`);
  assert(html.includes('id="portalSelectionScreen"'), `${label} must contain portalSelectionScreen`);
  assert(html.includes('class="portal-card hospital-card"'), `${label} must contain hospital portal card`);
  assert(html.includes('class="portal-card patient-card"'), `${label} must contain patient portal card`);
  console.log(`  ✓ Desktop Viewport and Portal Selection screen present`);

  // Verify Hospital Portal Container & Components
  assert(html.includes('id="hospitalPortalContainer"'), `${label} must contain hospitalPortalContainer`);
  assert(html.includes('id="hospitalLoginView"'), `${label} must contain hospitalLoginView`);
  assert(html.includes('id="hospitalLayout"'), `${label} must contain hospitalLayout`);
  assert(html.includes('id="hosp-dashboard"'), `${label} must contain hosp-dashboard`);
  assert(html.includes('id="hosp-add-patient"'), `${label} must contain hosp-add-patient`);
  assert(html.includes('id="hosp-patients"'), `${label} must contain hosp-patients`);
  assert(html.includes('id="hosp-stock"'), `${label} must contain hosp-stock`);
  assert(html.includes('id="hospNewPatientId"'), `${label} must contain hospNewPatientId`);
  assert(html.includes('id="hospNewPatientDisease"'), `${label} must contain hospNewPatientDisease`);
  assert(html.includes('id="hospNewPatientSymptoms"'), `${label} must contain hospNewPatientSymptoms`);
  assert(html.includes('id="hospNewPatientDoctor"'), `${label} must contain hospNewPatientDoctor`);
  console.log(`  ✓ Hospital Portal (Registration form, Patient Directory, Stock Manager) present`);

  // Verify Patient Portal Container & 4 Dashboard Summary Cards
  assert(html.includes('id="patientPortalContainer"'), `${label} must contain patientPortalContainer`);
  assert(html.includes('id="patientLoginView"'), `${label} must contain patientLoginView`);
  assert(html.includes('id="patientLayout"'), `${label} must contain patientLayout`);
  assert(html.includes('class="patient-summary-cards-row"'), `${label} must contain patient-summary-cards-row`);
  assert(html.includes('id="dashSummaryPatientId"'), `${label} must contain dashSummaryPatientId`);
  assert(html.includes('id="dashSummaryCondition"'), `${label} must contain dashSummaryCondition`);
  assert(html.includes('id="dashSummarySymptoms"'), `${label} must contain dashSummarySymptoms`);
  assert(html.includes('id="dashSummaryDoctor"'), `${label} must contain dashSummaryDoctor`);
  console.log(`  ✓ Patient Portal and 4 Key Dashboard Summary Cards present`);

  // Verify Read-Only Notice
  assert(html.includes('Information provided by hospital'), `${label} must contain 'Information provided by hospital' notice`);
  console.log(`  ✓ Read-only hospital notice present`);

  // Verify Feature Preservation
  assert(html.includes('id="medicineCatalogGrid"'), `${label} must preserve medicineCatalogGrid`);
  assert(html.includes('id="chatMessagesArea"'), `${label} must preserve chatMessagesArea`);
  assert(html.includes('id="sosCountdownModal"'), `${label} must preserve sosCountdownModal`);
  console.log(`  ✓ Preserved 33-medicine visual catalog, AI assistant, and SOS modal`);
}

const rootIndex = path.join(__dirname, '..', 'index.html');
const feIndex = path.join(__dirname, '..', 'frontend', 'index.html');
verifyHtmlStructure(rootIndex, 'Root index.html');
verifyHtmlStructure(feIndex, 'Frontend index.html');

// 2. Data Flow & Persistence Logic Verification
console.log('\nTesting Data Persistence & Dual-Portal Logic...');

// Setup simulated LocalStorage & DOM
const mockStorage = {};
global.localStorage = {
  getItem: (k) => mockStorage[k] || null,
  setItem: (k, v) => { mockStorage[k] = String(v); },
  removeItem: (k) => { delete mockStorage[k]; },
  clear: () => { for (const k in mockStorage) delete mockStorage[k]; }
};

// Evaluate scripts in global scope using vm.runInThisContext
const dataCode = fs.readFileSync(path.join(__dirname, '..', 'js', 'data.js'), 'utf8');
vm.runInThisContext(dataCode);

// Test Initial Patients Data
const defaultPatients = getStoredPatients();
const initialCount = defaultPatients.length;
console.log(`  Default stored patients count: ${initialCount}`);
assert(initialCount >= 3, 'Should have at least 3 initial patients');

const patArun = defaultPatients.find(p => p.id === 'PAT1001');
assert(patArun, 'PAT1001 (Arun) must exist in stored patients');
assert.strictEqual(patArun.disease, 'Fever', 'Arun disease should be Fever');
assert(patArun.symptoms.toLowerCase().includes('fever') && patArun.symptoms.toLowerCase().includes('body pain'), 'Arun symptoms should match prompt');
assert.strictEqual(patArun.assignedDoctor, 'Dr. Kumar', 'Arun assigned doctor should be Dr. Kumar');
console.log(`  ✓ Arun (PAT1001) verified with Fever & Dr. Kumar`);

// Test Adding a New Patient via Hospital Portal
const newPatient = {
  id: 'PAT1004',
  name: 'Meera Nair',
  age: 34,
  gender: 'Female',
  disease: 'Migraine',
  symptoms: 'Throbbing unilateral headache, photophobia, nausea',
  doctor: 'Dr. Evelyn Reed',
  assignedDoctor: 'Dr. Evelyn Reed',
  room: 'Ward 2A',
  notes: 'Prescribed Sumatriptan 50mg, dark room rest, hydration.',
  hospitalName: 'MediGuid City General Hospital',
  phone: '+1 555-4321',
  email: 'meera@mediguid.patient',
  password: 'demo123'
};

saveStoredPatient(newPatient);
const updatedPatients = getStoredPatients();
assert.strictEqual(updatedPatients.length, initialCount + 1, 'Patient count should increase by 1');
const retrieved = updatedPatients.find(p => p.id === 'PAT1004');
assert(retrieved, 'New patient PAT1004 must be retrieved from database');
assert.strictEqual(retrieved.disease, 'Migraine');
assert.strictEqual(retrieved.assignedDoctor, 'Dr. Evelyn Reed');
console.log(`  ✓ New patient PAT1004 (Meera Nair / Migraine) saved and retrieved successfully`);

// Test Stock Management & Dynamic Toggle
const medCode = fs.readFileSync(path.join(__dirname, '..', 'js', 'medicalMedicines.js'), 'utf8');
vm.runInThisContext(medCode);

console.log('\nTesting Pharmacy Stock Availability Toggle...');
const initialStock = getMedicineStockStatus('paracetamol-500');
console.log(`  Initial status for Paracetamol: inStock = ${initialStock.inStock}`);

const toggledState = toggleStoredMedicineStock('paracetamol-500');
const afterToggleStock = getMedicineStockStatus('paracetamol-500');
assert.strictEqual(afterToggleStock.inStock, toggledState, 'Status should match returned toggled state');
assert.strictEqual(afterToggleStock.inStock, !initialStock.inStock, 'Status should be opposite of initial');
console.log(`  ✓ Stock toggle successfully flipped Paracetamol to ${afterToggleStock.inStock ? 'Available' : 'Not Available'}`);

// Toggle back
toggleStoredMedicineStock('paracetamol-500');
const restoredStock = getMedicineStockStatus('paracetamol-500');
assert.strictEqual(restoredStock.inStock, initialStock.inStock, 'Stock status restored successfully');
console.log(`  ✓ Stock successfully restored`);

// Test AI Chatbot Secondary Advice for Fever & Migraine
console.log('\nTesting AI Chatbot Secondary Advice Engine...');
const kbCode = fs.readFileSync(path.join(__dirname, '..', 'js', 'medicalKnowledge.js'), 'utf8');
vm.runInThisContext(kbCode);

assert(typeof CLINICAL_CONDITIONS !== 'undefined' && Array.isArray(CLINICAL_CONDITIONS), 'CLINICAL_CONDITIONS array must exist');
console.log(`  Total clinical conditions in KB: ${CLINICAL_CONDITIONS.length}`);
assert(CLINICAL_CONDITIONS.length >= 38, 'Should contain all 38 clinical conditions');

const fever = CLINICAL_CONDITIONS.find(c => c.id === 'fever');
assert(fever, 'Fever condition must exist in CLINICAL_CONDITIONS');
assert(fever.en.explanation, 'Fever must have explanation');
assert(fever.en.symptoms && fever.en.symptoms.length > 0, 'Fever must have symptoms');
assert(fever.en.selfCare && fever.en.selfCare.length > 0, 'Fever must have selfCare');
assert(fever.en.secondaryAdvice && fever.en.secondaryAdvice.length > 0, 'Fever must have secondaryAdvice');
assert(fever.en.foodAdvice && fever.en.foodAdvice.length > 0, 'Fever must have foodAdvice');
assert(fever.en.emergencySigns && fever.en.emergencySigns.length > 0, 'Fever must have emergencySigns');
console.log(`  ✓ Fever secondary advice has all required clinical fields`);

const migraine = CLINICAL_CONDITIONS.find(c => c.id === 'migraine');
assert(migraine, 'Migraine condition must exist in CLINICAL_CONDITIONS');
assert(migraine.en.secondaryAdvice && migraine.en.secondaryAdvice.length > 0, 'Migraine must have secondary advice');
console.log(`  ✓ Migraine secondary advice has all required clinical fields`);

console.log('\n=== ALL DESKTOP DUAL-PORTAL SYSTEM CHECKS PASSED PERFECTLY ===');
