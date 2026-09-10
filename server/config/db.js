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

    console.log('✅ Database tables initialized successfully.');
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
