const path = require('path');
const { extractTextFromFile } = require('../services/ocrService');
const { parseClinicalDocument } = require('../services/clinicalParser');
const { run, all } = require('../config/db');

/**
 * Process uploaded discharge summary (PDF, JPG, JPEG, PNG)
 * POST /api/discharge-summary/upload
 */
async function uploadDischargeSummary(req, res) {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        error: 'No file uploaded. Please provide a PDF or image document.'
      });
    }

    const { path: filePath, originalname, mimetype, size } = req.file;
    console.log(`📄 Received discharge document: ${originalname} (${(size / 1024).toFixed(1)} KB, ${mimetype})`);

    // 1. Extract raw text via PDF parser or OCR
    let rawText = '';
    try {
      rawText = await extractTextFromFile(filePath, mimetype);
    } catch (ocrErr) {
      console.error('❌ OCR Extraction Error:', ocrErr.message);
      return res.status(422).json({
        success: false,
        error: 'Unable to extract patient information from this document.'
      });
    }

    if (!rawText || rawText.trim().length < 20) {
      return res.status(422).json({
        success: false,
        error: 'Unable to extract patient information from this document.'
      });
    }

    // 2. Parse clinical entities
    const extractedData = parseClinicalDocument(rawText);
    if (!extractedData) {
      return res.status(422).json({
        success: false,
        error: 'Unable to extract patient information from this document.'
      });
    }

    // 3. Log to discharge_summaries table
    const result = await run(`
      INSERT INTO discharge_summaries (patientId, originalFileName, fileType, fileSize, rawExtractedText, processingStatus)
      VALUES (?, ?, ?, ?, ?, 'OCR Extraction Complete')
    `, [
      extractedData.patientId,
      originalname,
      mimetype,
      size,
      rawText
    ]);

    return res.status(200).json({
      success: true,
      message: 'Discharge Summary Processed',
      summaryId: result.lastID,
      fileName: originalname,
      rawText,
      extractedData
    });
  } catch (error) {
    console.error('❌ Unexpected upload controller error:', error);
    return res.status(500).json({
      success: false,
      error: 'An internal error occurred while processing the discharge summary: ' + error.message
    });
  }
}

/**
 * Get audit history of uploaded discharge summaries
 * GET /api/discharge-summary/history
 */
async function getDischargeHistory(req, res) {
  try {
    const records = await all(`
      SELECT 
        d.id,
        d.patientId,
        COALESCE(p.patientName, d.patientId) AS patientName,
        COALESCE(p.diagnosis, 'Clinical Report') AS diagnosis,
        d.originalFileName,
        d.fileType,
        d.fileSize,
        d.processingStatus,
        d.uploadDate,
        COALESCE(p.guidanceStatus, 'Pending') AS guidanceStatus,
        COALESCE(p.whatsappStatus, 'Pending Send') AS whatsappStatus
      FROM discharge_summaries d
      LEFT JOIN patients p ON d.patientId = p.patientId
      ORDER BY d.id DESC
    `);

    return res.status(200).json({
      success: true,
      records
    });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
}

module.exports = {
  uploadDischargeSummary,
  getDischargeHistory
};
