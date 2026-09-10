/**
 * MediGuid API Client Service
 * Connects frontend directly to Express backend endpoints.
 */

const API_BASE = '/api';

/**
 * Upload a real discharge document (PDF, PNG, JPG, JPEG)
 * Returns OCR extracted data and raw text
 */
export async function uploadDischargeFile(file) {
  const formData = new FormData();
  formData.append('file', file);

  const response = await fetch(`${API_BASE}/discharge-summary/upload`, {
    method: 'POST',
    body: formData,
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error || 'Failed to process discharge summary.');
  }
  return data;
}

/**
 * Fetch discharge upload audit history from database
 */
export async function fetchDischargeHistory() {
  const response = await fetch(`${API_BASE}/discharge-summary/history`);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error || 'Failed to fetch discharge history.');
  }
  return data.history || [];
}

/**
 * Confirm and save patient record + medicines to database
 */
export async function confirmPatient(patientData) {
  const response = await fetch(`${API_BASE}/patients/confirm`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(patientData),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error || 'Failed to confirm patient data.');
  }
  return data;
}

/**
 * Get all patients from database
 */
export async function fetchPatients(search = '') {
  const query = search ? `?search=${encodeURIComponent(search)}` : '';
  const response = await fetch(`${API_BASE}/patients${query}`);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error || 'Failed to fetch patients.');
  }
  return data.patients || [];
}

/**
 * Get single patient details
 */
export async function fetchPatientById(id) {
  const response = await fetch(`${API_BASE}/patients/${id}`);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error || 'Failed to fetch patient details.');
  }
  return data.patient;
}

/**
 * Get live dashboard statistics computed from database
 */
export async function fetchDashboardStats() {
  const response = await fetch(`${API_BASE}/dashboard/stats`);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error || 'Failed to fetch dashboard stats.');
  }
  return data.stats;
}

/**
 * Check Meta WhatsApp Business API status
 */
export async function fetchWhatsAppStatus() {
  const response = await fetch(`${API_BASE}/whatsapp/status`);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error || 'Failed to check WhatsApp status.');
  }
  return data;
}

/**
 * Send personalized guidance message to patient WhatsApp
 */
export async function sendPatientGuidance(payload) {
  const response = await fetch(`${API_BASE}/guidance/send`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  const data = await response.json();
  return data;
}

/**
 * Fetch chat message history for patient
 */
export async function fetchPatientMessages(patientId) {
  const response = await fetch(`${API_BASE}/whatsapp/messages/${patientId}`);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error || 'Failed to fetch conversation history.');
  }
  return data.messages || [];
}

/**
 * Ask grounded clinical AI assistant
 */
export async function askClinicalAI(patientId, question, language = 'en') {
  const response = await fetch(`${API_BASE}/ai/patient-response`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ patientId, question, language }),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error || 'Failed to get AI clinical response.');
  }
  return data;
}

/**
 * Synthesize voice audio
 */
export async function synthesizeVoice(text, language = 'en') {
  const response = await fetch(`${API_BASE}/voice/generate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text, language }),
  });

  const data = await response.json();
  return data;
}
