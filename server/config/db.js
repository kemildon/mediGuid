const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');

const dataDir = path.resolve(__dirname, '../../data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const dbPath = path.join(dataDir, 'mediguid.db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('❌ Failed to connect to SQLite database:', err.message);
  } else {
    console.log('✅ Connected to SQLite database at:', dbPath);
  }
});

// Promisified query helper functions
const run = (sql, params = []) => {
  return new Promise((resolve, reject) => {
    db.run(sql, params, function (err) {
      if (err) reject(err);
      else resolve({ lastID: this.lastID, changes: this.changes });
    });
  });
};

const get = (sql, params = []) => {
  return new Promise((resolve, reject) => {
    db.get(sql, params, (err, row) => {
      if (err) reject(err);
      else resolve(row);
    });
  });
};

const all = (sql, params = []) => {
  return new Promise((resolve, reject) => {
    db.all(sql, params, (err, rows) => {
      if (err) reject(err);
      else resolve(rows || []);
    });
  });
};

// Initialize schema
const initDatabase = async () => {
  try {
    // 1. Hospitals table
    await run(`
      CREATE TABLE IF NOT EXISTS hospitals (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        hospitalId TEXT UNIQUE NOT NULL,
        phone TEXT,
        whatsappNumber TEXT,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // 2. Patients table
    await run(`
      CREATE TABLE IF NOT EXISTS patients (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        patientId TEXT UNIQUE NOT NULL,
        patientName TEXT NOT NULL,
        age INTEGER,
        gender TEXT,
        phoneNumber TEXT,
        whatsappNumber TEXT,
        diagnosis TEXT,
        symptoms TEXT,
        allergies TEXT,
        doctorName TEXT,
        hospitalName TEXT,
        admissionDate TEXT,
        dischargeDate TEXT,
        followUpDate TEXT,
        followUpDepartment TEXT,
        dischargeInstructions TEXT,
        dietInstructions TEXT,
        warningSigns TEXT,
        languagePreference TEXT DEFAULT 'en',
        guidanceStatus TEXT DEFAULT 'Ready to Send',
        whatsappStatus TEXT DEFAULT 'Pending Send',
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
        updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // 3. Discharge Summaries table
    await run(`
      CREATE TABLE IF NOT EXISTS discharge_summaries (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        patientId TEXT,
        originalFileName TEXT,
        fileType TEXT,
        fileSize INTEGER,
        rawExtractedText TEXT,
        processingStatus TEXT DEFAULT 'OCR Extraction Complete',
        uploadDate DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // 4. Medicines table
    await run(`
      CREATE TABLE IF NOT EXISTS medicines (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        patientId TEXT NOT NULL,
        medicineName TEXT NOT NULL,
        dosage TEXT,
        quantity TEXT,
        frequency TEXT,
        timing TEXT,
        beforeOrAfterFood TEXT,
        duration TEXT,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // 5. Guidance Messages table
    await run(`
      CREATE TABLE IF NOT EXISTS guidance_messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        patientId TEXT NOT NULL,
        category TEXT NOT NULL,
        messageBody TEXT NOT NULL,
        language TEXT DEFAULT 'en',
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // 6. WhatsApp Messages table
    await run(`
      CREATE TABLE IF NOT EXISTS whatsapp_messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        patientId TEXT,
        waMessageId TEXT UNIQUE,
        recipientPhone TEXT NOT NULL,
        messageType TEXT DEFAULT 'text',
        messageBody TEXT NOT NULL,
        status TEXT DEFAULT 'sent',
        errorDetails TEXT,
        sentAt DATETIME DEFAULT CURRENT_TIMESTAMP,
        deliveredAt DATETIME,
        readAt DATETIME
      )
    `);

    // 7. Conversations table
    await run(`
      CREATE TABLE IF NOT EXISTS conversations (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        patientId TEXT,
        sender TEXT NOT NULL,
        messageText TEXT NOT NULL,
        messageType TEXT DEFAULT 'text',
        waMessageId TEXT,
        timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Ensure default hospital record exists
    const defaultHospital = await get(`SELECT * FROM hospitals WHERE hospitalId = ?`, ['HOSP-ADMIN-01']);
    if (!defaultHospital) {
      await run(`
        INSERT INTO hospitals (name, hospitalId, phone, whatsappNumber)
        VALUES (?, ?, ?, ?)
      `, [
        'MediGuid Central Multi-Specialty Hospital',
        'HOSP-ADMIN-01',
        '+91 44 2836 9000',
        '+91 98765 00000'
      ]);
    }

    // Ensure default patient records and medicines exist so all WhatsApp and Bot requests resolve
    const seedPatients = [
      {
        patientId: 'MG-PAT-2026-081',
        patientName: 'Arun',
        age: 52,
        gender: 'Male',
        phoneNumber: '+919876543210',
        whatsappNumber: '+919876543210',
        diagnosis: 'Type 2 Diabetes Mellitus',
        doctorName: 'Dr. R. K. Sharma, MD (Endocrinology)',
        hospitalName: 'MediGuid Central Multi-Specialty Hospital',
        admissionDate: '02 September 2026',
        dischargeDate: '08 September 2026',
        followUpDate: '20 September 2026',
        dischargeInstructions: 'Check fasting blood sugar twice weekly. Engage in 30 minutes of brisk walking.',
        dietInstructions: 'Follow a low carbohydrate and low sugar diet. Avoid sweetened beverages and fried snacks.',
        warningSigns: 'Sudden extreme dizziness, tremors, heavy sweating, confusion (hypoglycemia).',
        guidanceStatus: 'Ready to Send',
        whatsappStatus: 'Pending Send',
        medicines: [
          { medicineName: 'Metformin 500mg', dosage: '1 Tablet', frequency: 'Twice daily', beforeOrAfterFood: 'After breakfast & dinner', duration: '90 Days' },
          { medicineName: 'Glimepiride 1mg', dosage: '1 Tablet', frequency: 'Once daily', beforeOrAfterFood: 'Before breakfast', duration: '90 Days' },
          { medicineName: 'Atorvastatin 10mg', dosage: '1 Tablet', frequency: 'Once daily at night', beforeOrAfterFood: 'After dinner', duration: '90 Days' }
        ]
      },
      {
        patientId: 'MG-PAT-2026-075',
        patientName: 'Priya Sharma',
        age: 46,
        gender: 'Female',
        phoneNumber: '+919841234567',
        whatsappNumber: '+919841234567',
        diagnosis: 'Essential Hypertension (Stage 2)',
        doctorName: 'Dr. Arvind Swaminathan, MD (Cardiology)',
        hospitalName: 'MediGuid Central Multi-Specialty Hospital',
        admissionDate: '03 September 2026',
        dischargeDate: '07 September 2026',
        followUpDate: '18 September 2026',
        dischargeInstructions: 'Record blood pressure daily morning and evening. Avoid sudden posture changes.',
        dietInstructions: 'Strict low sodium (DASH) diet. Strictly limit salt to under 1 teaspoon daily.',
        warningSigns: 'Severe throbbing headache, blurred vision, chest tightness, shortness of breath.',
        guidanceStatus: 'Guidance Sent',
        whatsappStatus: '✓ Sent on WhatsApp',
        medicines: [
          { medicineName: 'Amlodipine 5mg', dosage: '1 Tablet', frequency: 'Every morning', beforeOrAfterFood: 'After breakfast', duration: '60 Days' },
          { medicineName: 'Telmisartan 40mg', dosage: '1 Tablet', frequency: 'Every night', beforeOrAfterFood: 'After dinner', duration: '60 Days' }
        ]
      },
      {
        patientId: 'MG-TEST-9921',
        patientName: 'Rajesh Kumar',
        age: 58,
        gender: 'Male',
        phoneNumber: '+919840123456',
        whatsappNumber: '+919840123456',
        diagnosis: 'Acute Coronary Syndrome - NSTEMI, Type 2 Diabetes Mellitus, Essential Hypertension',
        doctorName: 'Dr. K. Swaminathan, MD, DM (Cardiology)',
        hospitalName: 'Apollo Speciality Hospitals, Chennai',
        admissionDate: '02 September 2026',
        dischargeDate: '07 September 2026',
        followUpDate: '15 September 2026',
        dischargeInstructions: 'Rest adequately for 2 weeks. Avoid lifting heavy weights (>5kg). Daily morning walk 20 minutes.',
        dietInstructions: 'Strict diabetic and low-salt DASH diet (less than 2g sodium/day).',
        warningSigns: 'Recurrent chest pain, radiating discomfort to left arm, acute shortness of breath.',
        guidanceStatus: 'Ready to Send',
        whatsappStatus: 'Pending Send',
        medicines: [
          { medicineName: 'Aspirin (Ecosprin)', dosage: '75mg', frequency: '1-0-0', beforeOrAfterFood: 'After food', duration: 'Life-long' },
          { medicineName: 'Clopidogrel (Clopilet)', dosage: '75mg', frequency: '1-0-0', beforeOrAfterFood: 'After food', duration: '12 Months' },
          { medicineName: 'Atorvastatin (Atorva)', dosage: '40mg', frequency: '0-0-1', beforeOrAfterFood: 'At bedtime', duration: 'Life-long' },
          { medicineName: 'Metoprolol Succinate (Betaloc)', dosage: '25mg', frequency: '1-0-0', beforeOrAfterFood: 'After breakfast', duration: '6 Months' },
          { medicineName: 'Metformin', dosage: '500mg', frequency: '1-0-1', beforeOrAfterFood: 'After food', duration: 'Ongoing' }
        ]
      }
    ];

    for (const sp of seedPatients) {
      const existing = await get(`SELECT id FROM patients WHERE patientId = ?`, [sp.patientId]);
      if (!existing) {
        await run(`
          INSERT INTO patients (
            patientId, patientName, age, gender, phoneNumber, whatsappNumber,
            diagnosis, doctorName, hospitalName, admissionDate, dischargeDate,
            followUpDate, dischargeInstructions, dietInstructions, warningSigns,
            guidanceStatus, whatsappStatus
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `, [
          sp.patientId, sp.patientName, sp.age, sp.gender, sp.phoneNumber, sp.whatsappNumber,
          sp.diagnosis, sp.doctorName, sp.hospitalName, sp.admissionDate, sp.dischargeDate,
          sp.followUpDate, sp.dischargeInstructions, sp.dietInstructions, sp.warningSigns,
          sp.guidanceStatus, sp.whatsappStatus
        ]);

        for (const m of sp.medicines) {
          await run(`
            INSERT INTO medicines (patientId, medicineName, dosage, frequency, beforeOrAfterFood, duration)
            VALUES (?, ?, ?, ?, ?, ?)
          `, [sp.patientId, m.medicineName, m.dosage, m.frequency, m.beforeOrAfterFood, m.duration]);
        }
      }
    }

    console.log('✅ Database tables and patient records initialized successfully.');
  } catch (error) {
    console.error('❌ Database initialization error:', error);
  }
};

module.exports = {
  db,
  run,
  get,
  all,
  initDatabase
};
