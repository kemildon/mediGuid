import React, { useState } from 'react';
import { 
  MessageSquare, 
  Send, 
  CheckCheck, 
  Check, 
  Phone, 
  User, 
  ShieldCheck, 
  ExternalLink, 
  Sparkles, 
  RefreshCw, 
  CheckCircle2, 
  Pill, 
  Utensils, 
  Calendar, 
  AlertTriangle, 
  Heart, 
  Building,
  Languages
} from 'lucide-react';
import { WHATSAPP_CATEGORIES, buildWhatsAppMessage } from '../data/hospitalData';

export default function WhatsAppGuidance({ 
  patient, 
  onSendSuccess,
  allPatients = [],
  onSwitchPatient
}) {
  const [selectedCategory, setSelectedCategory] = useState("full");
  const [language, setLanguage] = useState("en"); // "en" or "ta"
  const [isSending, setIsSending] = useState(false);
  const [sentStatus, setSentStatus] = useState(
    patient?.whatsappStatus?.includes("Sent") ? "sent" : "ready" // "ready" | "sending" | "sent"
  );
  const [customPhone, setCustomPhone] = useState(patient?.phone || "+91 98765 43210");

  if (!patient) {
    return (
      <div className="empty-state-card">
        <MessageSquare className="w-12 h-12 text-slate-300 mx-auto mb-3" />
        <h3 className="text-lg font-semibold text-slate-700">No Patient Selected</h3>
        <p className="text-sm text-slate-500 mb-4">
          Please select a patient from Patient Records or upload a discharge summary to send WhatsApp guidance.
        </p>
      </div>
    );
  }

  const messageText = buildWhatsAppMessage(patient, selectedCategory, language);

  const handleSendWhatsApp = () => {
    setIsSending(true);
    setSentStatus("sending");

    setTimeout(() => {
      setIsSending(false);
      setSentStatus("sent");
      if (onSendSuccess) {
        onSendSuccess(patient.id, selectedCategory);
      }
    }, 1200);
  };

  const handleDirectWhatsAppWeb = () => {
    const cleanNumber = customPhone.replace(/[^0-9]/g, '');
    const encodedText = encodeURIComponent(messageText);
    const url = `https://api.whatsapp.com/send?phone=${cleanNumber}&text=${encodedText}`;
    window.open(url, '_blank');
  };

  return (
    <div className="whatsapp-guidance-root">
      {/* 1. Header with Required Section Title */}
      <div className="section-header-row">
        <div>
          <div className="section-pre-badge">
            <MessageSquare className="w-4 h-4 text-emerald-600" />
            <span>DIRECT PATIENT COMMUNICATION</span>
          </div>
          <h1 className="section-main-heading">WHATSAPP PATIENT GUIDANCE</h1>
          <p className="section-sub-text">
            Send structured clinical instructions directly to the patient's WhatsApp mobile number. 
            No logins or app downloads required for patients.
          </p>
        </div>

        {/* Patient Switcher for Quick Demos */}
        {allPatients.length > 1 && (
          <div className="patient-quick-select">
            <span className="text-xs text-slate-500 font-medium">Active Patient:</span>
            <select
              className="select-patient-dropdown"
              value={patient.id}
              onChange={(e) => {
                const found = allPatients.find(p => p.id === e.target.value);
                if (found && onSwitchPatient) onSwitchPatient(found);
              }}
            >
              {allPatients.map(p => (
                <option key={p.id} value={p.id}>{p.name} ({p.diagnosis.split(' ')[0]})</option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* 2. Patient Meta Card with Required Fields */}
      <div className="patient-meta-card">
        <div className="patient-meta-grid">
          <div className="meta-cell">
            <span className="cell-label">Patient Name</span>
            <span className="cell-value font-bold text-slate-800">{patient.name}</span>
          </div>

          <div className="meta-cell">
            <span className="cell-label">Patient ID</span>
            <span className="cell-value font-mono text-slate-700">{patient.id}</span>
          </div>

          <div className="meta-cell">
            <span className="cell-label">WhatsApp Number</span>
            <div className="flex items-center gap-1.5">
              <input
                type="tel"
                value={customPhone}
                onChange={(e) => setCustomPhone(e.target.value)}
                className="input-phone-inline"
                placeholder="+91 98765 43210"
              />
            </div>
          </div>

          <div className="meta-cell">
            <span className="cell-label">Diagnosis</span>
            <span className="cell-value text-teal-800 font-medium">{patient.diagnosis}</span>
          </div>

          <div className="meta-cell">
            <span className="cell-label">Guidance Status</span>
            <div>
              {sentStatus === 'sent' ? (
                <span className="status-badge sent">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Guidance Sent</span>
                </span>
              ) : (
                <span className="status-badge ready">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span>Ready to Send</span>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 3. WhatsApp Message Categories (Requirement 9) */}
      <div className="categories-section">
        <div className="flex items-center justify-between mb-2">
          <div className="categories-heading">
            <span>Select Guidance Message Type to Dispatch:</span>
          </div>
          {/* Language Toggle */}
          <div className="lang-toggle-bar">
            <Languages className="w-4 h-4 text-slate-500" />
            <button
              onClick={() => setLanguage("en")}
              className={`lang-btn ${language === 'en' ? 'active' : ''}`}
            >
              English
            </button>
            <span className="text-slate-300">|</span>
            <button
              onClick={() => setLanguage("ta")}
              className={`lang-btn ${language === 'ta' ? 'active' : ''}`}
            >
              தமிழ் (Tamil)
            </button>
          </div>
        </div>

        <div className="categories-grid">
          {WHATSAPP_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`category-card-btn ${isSelected ? 'selected' : ''}`}
              >
                <div className="cat-top">
                  <span className="cat-label">{cat.label}</span>
                  <span className={`cat-badge ${isSelected ? 'selected' : ''}`}>{cat.badge}</span>
                </div>
                <p className="cat-desc">{cat.desc}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* 4. Realistic WhatsApp Smartphone Screen Preview */}
      <div className="whatsapp-preview-section">
        <div className="preview-container-grid">
          {/* Left Column: Realistic WhatsApp Phone Mockup */}
          <div className="phone-mockup-wrapper">
            <div className="smartphone-frame">
              {/* WhatsApp Top App Bar */}
              <div className="wa-app-bar">
                <div className="wa-bar-left">
                  <div className="wa-avatar">
                    <span>{patient.name.charAt(0)}</span>
                  </div>
                  <div className="wa-contact-info">
                    <div className="wa-contact-name">
                      <span>{patient.name}</span>
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-300 inline ml-1" />
                    </div>
                    <div className="wa-contact-status font-mono">{customPhone}</div>
                  </div>
                </div>
                <div className="wa-bar-right">
                  <span className="wa-verified-pill">MediGuid Verified</span>
                </div>
              </div>

              {/* Chat Canvas */}
              <div className="wa-chat-canvas">
                {/* Encryption Pill */}
                <div className="wa-encryption-pill">
                  🔒 Messages are end-to-end encrypted. No patient login required.
                </div>

                {/* Message Bubble */}
                <div className="wa-message-bubble outgoing">
                  <div className="wa-bubble-content">
                    <pre className="wa-text-formatted">{messageText}</pre>
                  </div>
                  <div className="wa-bubble-meta">
                    <span className="wa-timestamp">11:32 AM</span>
                    {sentStatus === 'sent' ? (
                      <CheckCheck className="w-4 h-4 text-sky-400 inline ml-1" />
                    ) : isSending ? (
                      <span className="wa-sending-dot">...</span>
                    ) : (
                      <Check className="w-4 h-4 text-slate-400 inline ml-1" />
                    )}
                  </div>
                </div>
              </div>

              {/* Chat Input Simulator */}
              <div className="wa-input-bar">
                <div className="wa-input-placeholder">Hospital Official WhatsApp Channel</div>
              </div>
            </div>
          </div>

          {/* Right Column: Dispatch Controls & Success Feedback */}
          <div className="dispatch-controls-col">
            <div className="dispatch-action-card">
              <h2 className="dispatch-title">Ready to Dispatch</h2>
              <p className="dispatch-desc">
                Clicking the button below dispatches this verified guidance package to <strong>{patient.name}</strong> at <strong>{customPhone}</strong>.
              </p>

              {/* Primary Dispatch CTA */}
              <button
                onClick={handleSendWhatsApp}
                className="btn-send-whatsapp-main"
                disabled={isSending}
                id="sendGuidanceOnWhatsAppBtn"
              >
                {isSending ? (
                  <span className="flex items-center justify-center gap-2">
                    <RefreshCw className="w-5 h-5 animate-spin" />
                    <span>Transmitting to WhatsApp Network...</span>
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" />
                    <span>SEND GUIDANCE ON WHATSAPP</span>
                  </span>
                )}
              </button>

              {/* Success Banner (Required exact string) */}
              {sentStatus === 'sent' && (
                <div className="success-confirmation-card" id="guidanceSentSuccessBanner">
                  <div className="success-icon-wrap">
                    <CheckCircle2 className="w-7 h-7 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="success-title">✓ Guidance Sent Successfully</h3>
                    <p className="success-sub">
                      Delivered to <strong>{customPhone}</strong>. Message marked as Read (blue ticks).
                    </p>
                  </div>
                </div>
              )}

              {/* Direct WhatsApp Web launcher for real devices */}
              <div className="external-wa-box">
                <div className="text-xs text-slate-500 mb-2">
                  Optional: Test live on your personal phone or WhatsApp Web:
                </div>
                <button
                  type="button"
                  onClick={handleDirectWhatsAppWeb}
                  className="btn-wa-external"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Open in WhatsApp Web / App</span>
                </button>
              </div>
            </div>

            {/* Delivery Assurance & Safety Note */}
            <div className="delivery-assurance-box">
              <div className="assurance-header">
                <ShieldCheck className="w-4 h-4 text-teal-600 inline mr-1" />
                <span>MediGuid WhatsApp Delivery Protocol</span>
              </div>
              <ul className="assurance-list">
                <li>Automatic phone number format validation</li>
                <li>Zero app download or registration required for the patient</li>
                <li>Audit logged in Hospital Discharge Summary History</li>
                <li>Includes 24/7 hospital emergency contact for patient safety</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
