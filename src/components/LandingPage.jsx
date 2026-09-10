import React from 'react';
import { 
  Building2, 
  FileText, 
  ScanLine, 
  MessageSquare, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Lock, 
  Zap, 
  Clock, 
  PhoneOff
} from 'lucide-react';

export default function LandingPage({ onEnterPortal }) {
  return (
    <div className="landing-page-root">
      {/* 1. Hospital Brand Header */}
      <header className="landing-header">
        <div className="landing-container header-inner">
          <div className="brand-badge-group">
            <div className="brand-logo-icon">
              <Building2 className="w-6 h-6 text-teal-600" />
            </div>
            <div>
              <div className="brand-title-small">MediGuid Clinical</div>
              <div className="brand-tagline-small">Hospital Discharge & Guidance System</div>
            </div>
          </div>

          <div className="header-actions">
            <span className="badge-hospital-live">
              <span className="live-dot"></span> Clinical Workstation Online
            </span>
            <button 
              onClick={onEnterPortal}
              className="btn-enter-portal-sm"
              id="landingHeaderEnterBtn"
            >
              <Lock className="w-4 h-4" />
              <span>ENTER PORTAL</span>
            </button>
          </div>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="landing-hero-section">
        <div className="landing-container">
          <div className="hero-text-center">
            <div className="hero-badge-pill">
              <Sparkles className="w-4 h-4 text-teal-600" />
              <span>AI-POWERED CLINICAL DISCHARGE PIPELINE</span>
            </div>

            <h1 className="hero-main-title">SMART HEALTH ASSISTANT</h1>
            <p className="hero-main-subtitle">
              MediGuid – Intelligent Healthcare Guidance Platform
            </p>
            <p className="hero-description">
              Transform complex paper discharge summaries into structured electronic records and clear, 
              personalized medical guidance sent directly to patients via WhatsApp. Zero app downloads. Zero website logins for patients.
            </p>

            {/* Single Large CTA */}
            <div className="hero-cta-wrapper">
              <button 
                onClick={onEnterPortal}
                className="btn-enter-portal-lg"
                id="mainEnterPortalBtn"
              >
                <span>ENTER PORTAL</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <div className="hero-cta-subtext">
                <ShieldCheck className="w-4 h-4 text-teal-600 inline mr-1" />
                Authorized Hospital Staff Access Only &bull; 256-bit Encrypted
              </div>
            </div>
          </div>

          {/* 3. Hero Visual Attraction: Hospital Clinical Video & Care Scene */}
          <div className="landing-visual-card">
            <div className="visual-media-container">
              <video
                className="landing-hero-video"
                src="assets/hero-reel.mp4"
                poster="assets/hero-demo-poster.jpg"
                autoPlay
                muted
                loop
                playsInline
                aria-label="Doctor and patient hospital clinical care"
              >
                <img 
                  src="assets/doctor_patient_care.jpg" 
                  alt="Friendly professional doctor smiling and raising stethoscope in clinical hospital setting" 
                  className="landing-fallback-img"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=1200&auto=format&fit=crop&q=80';
                  }}
                />
              </video>
              <img 
                src="assets/doctor_patient_care.jpg" 
                alt="Friendly professional doctor smiling and raising stethoscope, Doctor checking patient with stethoscope in clinical hospital setting" 
                style={{ display: 'none' }}
              />

              <div className="visual-media-overlay">
                <div className="overlay-step-bar">
                  <div className="overlay-step active">
                    <FileText className="w-4 h-4" />
                    <span>1. Upload Discharge Summary</span>
                  </div>
                  <div className="overlay-arrow">→</div>
                  <div className="overlay-step active">
                    <ScanLine className="w-4 h-4" />
                    <span>2. Automatic Extraction</span>
                  </div>
                  <div className="overlay-arrow">→</div>
                  <div className="overlay-step active">
                    <MessageSquare className="w-4 h-4" />
                    <span>3. WhatsApp Guidance</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="visual-card-footer">
              <div className="footer-stat">
                <span className="stat-num">100%</span>
                <span className="stat-label">Patient WhatsApp Reach</span>
              </div>
              <div className="stat-divider"></div>
              <div className="footer-stat">
                <span className="stat-num">&lt; 30s</span>
                <span className="stat-label">AI Extraction Speed</span>
              </div>
              <div className="stat-divider"></div>
              <div className="footer-stat">
                <span className="stat-num">0</span>
                <span className="stat-label">Patient App Logins</span>
              </div>
            </div>
          </div>

          {/* 4. Complete Process Workflow Grid */}
          <div className="landing-workflow-showcase">
            <div className="section-header-compact">
              <div className="section-pill">AUTOMATED HOSPITAL WORKFLOW</div>
              <h2 className="section-title-sm">How MediGuid Streamlines Discharge Care</h2>
              <p className="section-desc-sm">
                From complex multi-page hospital discharge papers to actionable patient guidance delivered in seconds.
              </p>
            </div>

            <div className="workflow-steps-grid">
              <div className="wf-step-card">
                <div className="wf-step-number">01</div>
                <div className="wf-step-icon bg-blue-50 text-blue-600">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="wf-step-title">Hospital Uploads Summary</h3>
                <p className="wf-step-text">
                  Staff uploads hospital discharge summaries via image, scanned PDF, or instant photo capture.
                </p>
                <div className="wf-step-badge">PDF &bull; JPG &bull; PNG</div>
              </div>

              <div className="wf-step-card">
                <div className="wf-step-number">02</div>
                <div className="wf-step-icon bg-indigo-50 text-indigo-600">
                  <ScanLine className="w-6 h-6" />
                </div>
                <h3 className="wf-step-title">Automatic Data Extraction</h3>
                <p className="wf-step-text">
                  Intelligent OCR extracts patient diagnosis, medicine dosages, schedules, food rules, and review dates.
                </p>
                <div className="wf-step-badge">AI / OCR Neural Engine</div>
              </div>

              <div className="wf-step-card">
                <div className="wf-step-number">03</div>
                <div className="wf-step-icon bg-teal-50 text-teal-600">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="wf-step-title">Record Created & Confirmed</h3>
                <p className="wf-step-text">
                  Hospital staff reviews and edits extracted parameters with 1-click confirmation into patient records.
                </p>
                <div className="wf-step-badge">Staff Verified</div>
              </div>

              <div className="wf-step-card highlight-whatsapp">
                <div className="wf-step-number">04</div>
                <div className="wf-step-icon bg-emerald-50 text-emerald-600">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="wf-step-title">Guidance Sent via WhatsApp</h3>
                <p className="wf-step-text">
                  Simple, structured health instructions are sent directly to the patient's WhatsApp with full delivery status.
                </p>
                <div className="wf-step-badge bg-emerald-100 text-emerald-800">Direct WhatsApp Delivery</div>
              </div>
            </div>
          </div>

          {/* 5. Key Advantage Highlight: Zero Patient Friction */}
          <div className="zero-friction-banner">
            <div className="friction-content">
              <div className="friction-icon-wrap">
                <PhoneOff className="w-8 h-8 text-teal-600" />
              </div>
              <div>
                <h3 className="friction-title">No Patient Login or App Installation Required</h3>
                <p className="friction-text">
                  Patients often struggle with app downloads, forgotten passwords, or portal navigation. 
                  MediGuid eliminates all patient login friction—every instruction arrives clearly formatted on WhatsApp.
                </p>
              </div>
            </div>
            <button 
              onClick={onEnterPortal}
              className="btn-enter-portal-secondary"
            >
              <span>Launch Hospital Portal</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 6. Professional Footer */}
      <footer className="landing-footer">
        <div className="landing-container footer-inner">
          <div className="footer-col-left">
            <div className="footer-brand">MediGuid Clinical Workstation</div>
            <p className="footer-subtext">
              Intelligent Hospital Discharge Summary Processing & Automated Patient WhatsApp Guidance.
            </p>
          </div>
          <div className="footer-col-right">
            <div className="footer-disclaimer">
              MediGuid is designed for hospital staff clinical support. All patient guidance should be verified by authorized healthcare practitioners.
            </div>
            <div className="footer-copy">
              &copy; 2026 MediGuid Healthcare Systems. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
