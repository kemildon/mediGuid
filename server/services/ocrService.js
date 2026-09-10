const fs = require('fs');
const path = require('path');
const pdfParse = require('pdf-parse');
const { createWorker } = require('tesseract.js');

/**
 * Extract raw text from an uploaded file (PDF or image).
 * @param {string} filePath - Path to file on disk.
 * @param {string} mimeType - MIME type of the file.
 * @returns {Promise<string>} - Extracted plain text.
 */
async function extractTextFromFile(filePath, mimeType) {
  if (!fs.existsSync(filePath)) {
    throw new Error('Uploaded file does not exist on server.');
  }

  const isTxt = mimeType === 'text/plain' || filePath.toLowerCase().endsWith('.txt');
  if (isTxt) {
    return fs.readFileSync(filePath, 'utf8');
  }

  const isPdf = mimeType === 'application/pdf' || filePath.toLowerCase().endsWith('.pdf');

  if (isPdf) {
    try {
      const dataBuffer = fs.readFileSync(filePath);
      const pdfData = await pdfParse(dataBuffer);
      const text = (pdfData.text || '').trim();
      
      if (text.length > 30) {
        return text;
      }
      // If digital text is very short, the PDF might be a scanned document image
      console.log('ℹ️ PDF text sparse (< 30 chars), checking image OCR fallback...');
    } catch (pdfErr) {
      console.warn('⚠️ pdf-parse error, falling back to OCR:', pdfErr.message);
    }
  }

  // Perform optical character recognition via Tesseract.js
  let worker = null;
  try {
    worker = await createWorker('eng');
    const ret = await worker.recognize(filePath);
    await worker.terminate();
    return (ret.data.text || '').trim();
  } catch (ocrErr) {
    if (worker) {
      try { await worker.terminate(); } catch (e) {}
    }
    throw new Error('OCR recognition failed: ' + ocrErr.message);
  }
}

module.exports = {
  extractTextFromFile
};
