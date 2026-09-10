import React from 'react';
import { 
  Pill, 
  Utensils, 
  Heart, 
  AlertTriangle, 
  Calendar, 
  MessageSquare, 
  Sparkles, 
  ArrowRight,
  User,
  CheckCircle2
} from 'lucide-react';

export default function GeneratedGuidanceView({ 
  patient, 
  onProceedToWhatsApp 
}) {
  if (!patient) return null;

  return (
    <div className="generated-guidance-root">
      {/* 1. Header Banner */}
      <div className="guidance-header-banner">
        <div>
          <div className="guidance-badge">
            <Sparkles className="w-4 h-4 text-teal-600" />
            <span>AI CLINICAL SYNTHESIS COMPLETE</span>
          </div>
          <h1 className="guidance-main-title">Personalized Medical Guidance Generated</h1>
          <p className="guidance-subtitle">
            Short, patient-friendly health instructions synthesized specifically for <strong>{patient.name}</strong> ({patient.diagnosis}).
          </p>
        </div>

        <button
          onClick={() => onProceedToWhatsApp(patient)}
          className="btn-proceed-whatsapp"
          id="proceedToWhatsAppBtn"
        >
          <MessageSquare className="w-5 h-5" />
          <span>Proceed to WhatsApp Guidance</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* 2. Patient Summary Strip */}
      <div className="patient-meta-strip">
        <div className="meta-item">
          <span className="meta-lbl">Patient:</span>
          <span className="meta-val font-semibold">{patient.name}</span>
        </div>
        <div className="meta-item">
          <span className="meta-lbl">ID:</span>
          <span className="meta-val font-mono">{patient.id}</span>
        </div>
        <div className="meta-item">
          <span className="meta-lbl">Diagnosis:</span>
          <span className="meta-val text-teal-700 font-medium">{patient.diagnosis}</span>
        </div>
        <div className="meta-item">
          <span className="meta-lbl">WhatsApp:</span>
          <span className="meta-val font-mono text-emerald-700">{patient.phone}</span>
        </div>
      </div>

      {/* 3. The 5 Core Patient-Friendly Guidance Dimensions */}
      <div className="guidance-cards-grid">
        {/* Dimension 1: Medicine Guidance */}
        <div className="guidance-dimension-card">
          <div className="dim-card-header bg-blue-50 text-blue-800">
            <div className="dim-icon bg-blue-600 text-white">
              <Pill className="w-5 h-5" />
            </div>
            <div>
              <h2 className="dim-title">Medicine Guidance</h2>
              <span className="dim-sub">Dosage, timing & meal relationship</span>
            </div>
          </div>
          <div className="dim-card-body">
            <div className="meds-simple-list">
              {patient.medicines?.map((m, idx) => (
                <div key={idx} className="simple-med-item">
                  <div className="med-num-circle">{idx + 1}</div>
                  <div className="med-details">
                    <div className="med-name-bold">{m.name}</div>
                    <div className="med-routine">
                      <span className="med-dosage-tag">{m.dosage}</span>
                      <span className="med-timing-text">&bull; {m.frequency} &bull; {m.foodRelation}</span>
                    </div>
                    <div className="med-duration-text">Duration: {m.duration}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dimension 2: Food Guidance */}
        <div className="guidance-dimension-card">
          <div className="dim-card-header bg-emerald-50 text-emerald-800">
            <div className="dim-icon bg-emerald-600 text-white">
              <Utensils className="w-5 h-5" />
            </div>
            <div>
              <h2 className="dim-title">Food Guidance</h2>
              <span className="dim-sub">Condition-specific nutrition advice</span>
            </div>
          </div>
          <div className="dim-card-body">
            <p className="dim-text-content">
              {patient.foodInstructions}
            </p>
            <div className="dim-pill-badge bg-emerald-50 text-emerald-700">
              <CheckCircle2 className="w-4 h-4 inline mr-1" />
              Low sugar / low sodium patient-friendly diet
            </div>
          </div>
        </div>

        {/* Dimension 3: Daily Care */}
        <div className="guidance-dimension-card">
          <div className="dim-card-header bg-rose-50 text-rose-800">
            <div className="dim-icon bg-rose-600 text-white">
              <Heart className="w-5 h-5" />
            </div>
            <div>
              <h2 className="dim-title">Daily Care & Recovery</h2>
              <span className="dim-sub">Simple daily routine instructions</span>
            </div>
          </div>
          <div className="dim-card-body">
            <p className="dim-text-content">
              {patient.dailyCare}
            </p>
            <div className="dim-pill-badge bg-rose-50 text-rose-700">
              <CheckCircle2 className="w-4 h-4 inline mr-1" />
              Easy to follow without medical terminology
            </div>
          </div>
        </div>

        {/* Dimension 4: Warning Signs */}
        <div className="guidance-dimension-card">
          <div className="dim-card-header bg-amber-50 text-amber-800">
            <div className="dim-icon bg-amber-600 text-white">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <h2 className="dim-title">Warning Signs & Red Flags</h2>
              <span className="dim-sub">Symptoms requiring emergency review</span>
            </div>
          </div>
          <div className="dim-card-body">
            <p className="dim-text-content text-amber-900 font-medium">
              {patient.warningSigns}
            </p>
            <div className="emergency-contact-box">
              <span>Immediate Hotline:</span>
              <strong className="text-rose-600">+91 44 2836 9000</strong>
            </div>
          </div>
        </div>

        {/* Dimension 5: Follow-up Appointment */}
        <div className="guidance-dimension-card">
          <div className="dim-card-header bg-indigo-50 text-indigo-800">
            <div className="dim-icon bg-indigo-600 text-white">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h2 className="dim-title">Follow-up Consultation</h2>
              <span className="dim-sub">Next scheduled hospital appointment</span>
            </div>
          </div>
          <div className="dim-card-body">
            <div className="followup-date-highlight">
              <span className="date-large">{patient.followUpDate}</span>
              <span className="location-small">{patient.hospital}</span>
            </div>
            <p className="dim-text-content mt-2 text-xs text-slate-600">
              Bring previous blood test records and current medication strips during this review visit.
            </p>
          </div>
        </div>
      </div>

      {/* 4. Bottom CTA Bar */}
      <div className="guidance-footer-bar">
        <div className="text-slate-600 text-sm">
          Everything is set! Dispatch this guidance directly to <strong>{patient.phone}</strong> on WhatsApp.
        </div>
        <button
          onClick={() => onProceedToWhatsApp(patient)}
          className="btn-proceed-whatsapp"
        >
          <MessageSquare className="w-5 h-5" />
          <span>SEND GUIDANCE ON WHATSAPP</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
