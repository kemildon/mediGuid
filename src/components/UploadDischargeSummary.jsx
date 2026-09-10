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
import { uploadDischargeFile } from '../services/api';

export default function UploadDischargeSummary({ onExtractionComplete }) {
  const [selectedPreset, setSelectedPreset] = useState(SAMPLE_DISCHARGE_PRESETS[0]);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [previewText, setPreviewText] = useState(SAMPLE_DISCHARGE_PRESETS[0].previewText);
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingStep, setProcessingStep] = useState(0); // 0: Idle, 1: Uploading, 2: Reading Document, 3: Extracting Information, 4: Creating Patient Record
  const [errorMessage, setErrorMessage] = useState(null);
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
    setErrorMessage(null);
    setPreviewText(preset.previewText);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFile(file);
      setErrorMessage(null);
      if (file.type === 'text/plain' || file.name.endsWith('.txt')) {
        const reader = new FileReader();
        reader.onload = (evt) => {
          setPreviewText(evt.target.result);
        };
        reader.readAsText(file);
      } else {
        setPreviewText(
          `MEDIGUID CENTRAL MULTI-SPECIALTY HOSPITAL\nFILE: ${file.name.toUpperCase()}\nType: ${file.type || 'Clinical Document'}\nSize: ${(file.size / 1024).toFixed(1)} KB\n\nReady for optical neural OCR extraction and clinical NLP parsing.\nClick "PROCESS SUMMARY" below to begin.`
        );
      }
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
      setErrorMessage(null);
      if (file.type === 'text/plain' || file.name.endsWith('.txt')) {
        const reader = new FileReader();
        reader.onload = (evt) => {
          setPreviewText(evt.target.result);
        };
        reader.readAsText(file);
      } else {
        setPreviewText(
          `MEDIGUID CENTRAL MULTI-SPECIALTY HOSPITAL\nFILE: ${file.name.toUpperCase()}\nType: ${file.type || 'Clinical Document'}\nSize: ${(file.size / 1024).toFixed(1)} KB\n\nReady for optical neural OCR extraction and clinical NLP parsing.\nClick "PROCESS SUMMARY" below to begin.`
        );
      }
    }
  };

  const handleProcessSummary = async () => {
    setIsProcessing(true);
    setErrorMessage(null);
    setProcessingStep(1); // Uploading

    const stepTimer1 = setTimeout(() => setProcessingStep(2), 600); // Reading Document
    const stepTimer2 = setTimeout(() => setProcessingStep(3), 1200); // Extracting Information

    try {
      let fileToUpload = uploadedFile;
      if (!fileToUpload && selectedPreset) {
        // Use selected preset's text as a real file
        const blob = new Blob([selectedPreset.previewText], { type: 'text/plain' });
        fileToUpload = new File([blob], `${selectedPreset.id}.txt`, { type: 'text/plain' });
      }

      if (!fileToUpload) {
        throw new Error('Please select a sample summary or upload a discharge file.');
      }

      const result = await uploadDischargeFile(fileToUpload);
      clearTimeout(stepTimer1);
      clearTimeout(stepTimer2);
      setProcessingStep(4); // Creating Patient Record

      setTimeout(() => {
        setIsProcessing(false);
        setProcessingStep(0);
        onExtractionComplete(result.extractedData);
      }, 500);
    } catch (err) {
      clearTimeout(stepTimer1);
      clearTimeout(stepTimer2);
      setIsProcessing(false);
      setProcessingStep(0);
      setErrorMessage(err.message || 'Unable to extract patient information from this document.');
    }
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

      {/* Ingestion Error Alert Display */}
      {errorMessage && (
        <div className="mb-4 p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3 text-red-800 shadow-sm" role="alert">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <h4 className="font-semibold text-sm">Clinical Extraction Notice</h4>
            <p className="text-sm mt-0.5">{errorMessage}</p>
          </div>
          <button 
            type="button" 
            onClick={() => setErrorMessage(null)} 
            className="text-red-600 hover:text-red-800 text-xs font-semibold px-2 py-1 rounded bg-red-100 hover:bg-red-200 transition-colors"
          >
            Dismiss
          </button>
        </div>
      )}

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
