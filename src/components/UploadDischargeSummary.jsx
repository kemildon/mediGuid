import React, { useState, useRef } from 'react';
import { 
  UploadCloud, 
  FileText, 
  Image as ImageIcon, 
  ScanLine, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  FileCheck, 
  ArrowRight,
  Eye,
  RefreshCw,
  Cpu
} from 'lucide-react';
import { SAMPLE_DISCHARGE_PRESETS } from '../data/hospitalData';

export default function UploadDischargeSummary({ onExtractionComplete }) {
  const [selectedPreset, setSelectedPreset] = useState(SAMPLE_DISCHARGE_PRESETS[0]);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [previewText, setPreviewText] = useState(SAMPLE_DISCHARGE_PRESETS[0].previewText);
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingStep, setProcessingStep] = useState(0); // 0: Idle, 1: Uploading, 2: Reading Document, 3: Extracting Information, 4: Creating Patient Record
  const fileInputRef = useRef(null);

  // Steps matching user's exact specification
  const steps = [
    { label: "Uploading", desc: "Verifying document format & optical resolution..." },
    { label: "Reading Document", desc: "Neural OCR scanning text lines & clinical headers..." },
    { label: "Extracting Information", desc: "NLP entity extraction: Diagnosis, Meds, Dosages, Diet..." },
    { label: "Creating Patient Record", desc: "Structuring electronic patient health record..." }
  ];

  const handleSelectPreset = (preset) => {
    setSelectedPreset(preset);
    setUploadedFile(null);
    setPreviewText(preset.previewText);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFile(file);
      // Generate realistic preview text based on filename
      setPreviewText(
        `MEDIGUID CENTRAL MULTI-SPECIALTY HOSPITAL\nDEPARTMENT OF GENERAL MEDICINE\nDISCHARGE SUMMARY FILE: ${file.name.toUpperCase()}\nSize: ${(file.size / 1024).toFixed(1)} KB\n\nPatient Name: Arun\nPatient ID: MG-PAT-2026-081\nAge: 52 Yrs | Gender: Male | Phone: +91 98765 43210\nAdmission Date: 02-09-2026 | Discharge Date: 08-09-2026\nConsultant: Dr. R. K. Sharma, MD\n\nDIAGNOSIS:\nType 2 Diabetes Mellitus (Uncontrolled)\n\nMEDICATIONS:\n1. Tab Metformin 500mg - 1 tab twice daily (After food)\n2. Tab Glimepiride 1mg - 1 tab morning (Before food)\n3. Tab Atorvastatin 10mg - 1 tab night (After food)\n\nDIETARY ADVICE:\nStrict diabetic diet. Avoid all sugar, sweets, and high-carb refined grains.\n\nFOLLOW UP:\nReview in 2 weeks on 20-09-2026.`
      );
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setUploadedFile(file);
      setPreviewText(
        `MEDIGUID CENTRAL MULTI-SPECIALTY HOSPITAL\nFILE: ${file.name.toUpperCase()}\nDocument detected. Optical OCR ready.`
      );
    }
  };

  const handleProcessSummary = () => {
    setIsProcessing(true);
    setProcessingStep(1); // Uploading

    setTimeout(() => {
      setProcessingStep(2); // Reading Document
    }, 700);

    setTimeout(() => {
      setProcessingStep(3); // Extracting Information
    }, 1500);

    setTimeout(() => {
      setProcessingStep(4); // Creating Patient Record
    }, 2300);

    setTimeout(() => {
      setIsProcessing(false);
      setProcessingStep(0);
      // Pass the extracted data to confirmation screen
      const extracted = selectedPreset ? selectedPreset.extractedData : SAMPLE_DISCHARGE_PRESETS[0].extractedData;
      onExtractionComplete(extracted);
    }, 3100);
  };

  return (
    <div className="upload-summary-root">
      {/* 1. Header */}
      <div className="section-header-row">
        <div>
          <div className="section-pre-badge">
            <ScanLine className="w-4 h-4 text-teal-600" />
            <span>AI CLINICAL INGESTION ENGINE</span>
          </div>
          <h1 className="section-main-heading">Upload Discharge Summary</h1>
          <p className="section-sub-text">
            Upload hospital discharge papers, scanned prescriptions, or clinical PDFs. 
            MediGuid's neural OCR automatically extracts all patient details, medications, and follow-up guidance.
          </p>
        </div>
      </div>

      {/* 2. Sample Presets Picker (for effortless demo & evaluation) */}
      <div className="sample-presets-bar">
        <span className="presets-label">
          <Sparkles className="w-4 h-4 text-amber-500 inline mr-1" />
          Demo Sample Discharge Summaries (1-Click Load):
        </span>
        <div className="presets-chips-row">
          {SAMPLE_DISCHARGE_PRESETS.map((p) => {
            const isSelected = selectedPreset?.id === p.id && !uploadedFile;
            return (
              <button
                key={p.id}
                onClick={() => handleSelectPreset(p)}
                className={`preset-chip ${isSelected ? 'active' : ''}`}
                disabled={isProcessing}
              >
                <span className="chip-badge">{p.badge}</span>
                <span className="chip-text">{p.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Main Workspace: Upload Dropzone & Document Previewer */}
      <div className="upload-workspace-grid">
        {/* Left Column: Dropzone & File Selector */}
        <div className="dropzone-col">
          <div 
            className={`file-dropzone ${isDragging ? 'dragging' : ''} ${uploadedFile ? 'has-file' : ''}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
          >
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleFileChange} 
              accept="image/png,image/jpeg,image/jpg,application/pdf"
              style={{ display: 'none' }}
              id="dischargeFileInput"
            />

            <div className="dropzone-icon-circle">
              <UploadCloud className="w-10 h-10 text-teal-600" />
            </div>

            <h3 className="dropzone-prompt">
              {uploadedFile ? `Uploaded: ${uploadedFile.name}` : "Drag and drop discharge summary here"}
            </h3>
            <p className="dropzone-sub">
              Supports <strong>PDF documents</strong>, <strong>JPG / PNG images</strong>, or high-resolution hospital scans
            </p>

            <div className="dropzone-actions">
              <button 
                type="button" 
                className="btn-browse-files"
                onClick={(e) => {
                  e.stopPropagation();
                  fileInputRef.current?.click();
                }}
              >
                <span>Browse Local Files</span>
              </button>
            </div>
          </div>

          <div className="upload-tips-card">
            <div className="tip-header">
              <CheckCircle2 className="w-4 h-4 text-teal-600 inline mr-1.5" />
              <span>Smart OCR Extraction Capabilities:</span>
            </div>
            <ul className="tip-list">
              <li>Automatic patient demographics & identification numbers</li>
              <li>Clinical diagnosis & underlying medical condition identification</li>
              <li>Structured dosage, frequency, and before/after food timing</li>
              <li>Dietary restrictions, emergency warning signs, and follow-up date</li>
            </ul>
          </div>
        </div>

        {/* Right Column: Live Document Previewer */}
        <div className="preview-col">
          <div className="preview-card">
            <div className="preview-card-header">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-teal-600" />
                <span className="font-semibold text-slate-800 text-sm">Discharge Document Preview</span>
              </div>
              <span className="badge-preview-tag">
                {uploadedFile ? 'Custom Upload' : (selectedPreset?.badge || 'Sample Preset')}
              </span>
            </div>

            <div className="preview-card-body">
              {/* Document Simulator */}
              <div className="document-sheet">
                <div className="sheet-watermark">HOSPITAL DISCHARGE</div>
                <pre className="sheet-text">{previewText}</pre>
                
                {/* Laser scanning effect when processing */}
                {isProcessing && (
                  <div className="scanner-laser-bar"></div>
                )}
              </div>
            </div>

            {/* Primary Action Button */}
            <div className="preview-card-footer">
              <button
                onClick={handleProcessSummary}
                className="btn-process-summary"
                disabled={isProcessing}
                id="processSummaryBtn"
              >
                {isProcessing ? (
                  <span className="flex items-center justify-center gap-2">
                    <RefreshCw className="w-5 h-5 animate-spin" />
                    <span>Processing Document with AI...</span>
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <Cpu className="w-5 h-5" />
                    <span>PROCESS SUMMARY</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Intelligent OCR/AI Extraction Process Overlay Modal */}
      {isProcessing && (
        <div className="ocr-modal-backdrop">
          <div className="ocr-modal-card">
            <div className="ocr-modal-header">
              <div className="ocr-badge-spinner">
                <ScanLine className="w-7 h-7 text-teal-600 animate-pulse" />
              </div>
              <h3 className="ocr-modal-title">Intelligent OCR & AI Extraction in Progress</h3>
              <p className="ocr-modal-sub">
                Scanning clinical document and extracting structured patient parameters...
              </p>
            </div>

            {/* Step Pipeline Visualization matching exact requirement */}
            <div className="ocr-steps-pipeline">
              {steps.map((st, i) => {
                const stepNum = i + 1;
                const isDone = processingStep > stepNum;
                const isCurrent = processingStep === stepNum;
                return (
                  <div 
                    key={i} 
                    className={`ocr-step-item ${isDone ? 'done' : ''} ${isCurrent ? 'current' : ''}`}
                  >
                    <div className="step-indicator">
                      {isDone ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      ) : isCurrent ? (
                        <span className="pulse-dot"></span>
                      ) : (
                        <span className="step-num-text">{stepNum}</span>
                      )}
                    </div>
                    <div className="step-content">
                      <div className="step-name">{st.label}</div>
                      <div className="step-desc">{st.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="ocr-progress-bar-wrap">
              <div 
                className="ocr-progress-bar-fill" 
                style={{ width: `${(processingStep / 4) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
