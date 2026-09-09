import React from 'react';
import { 
  Users, 
  BookOpen, 
  Eye, 
  MessageSquare, 
  Languages, 
  PhoneOff, 
  CheckCircle,
  Printer
} from 'lucide-react';

export default function AccessibilitySection({ onTriggerPrint }) {
  const features = [
    {
      icon: "👴",
      title: "Elderly People",
      desc: "Specially formulated with 16pt+ high-contrast type and distinct colored timing blocks so aging eyes can read it effortlessly."
    },
    {
      icon: "📖",
      title: "Low Health Literacy",
      desc: "Pictograms (Sunrise, Moon, Footsteps, Salad) communicate meaning without needing formal medical comprehension."
    },
    {
      icon: "👁",
      title: "Easy-to-Read Typography",
      desc: "WCAG AAA compliant text contrast, clean sans-serif letterforms, and zero tiny confusing pharmaceutical footnotes."
    },
    {
      icon: "🗣",
      title: "Simple Language",
      desc: "All clinical terminology translated to a 5th-grade reading level. No 'hypertension' or 'q.d.'—only 'High Blood Pressure' and '1 Tablet'."
    },
    {
      icon: "🌐",
      title: "Multiple Languages",
      desc: "Cards can be printed in regional mother tongues (Tamil, Hindi, Spanish, Telugu) so family members understand every instruction."
    },
    {
      icon: "📱",
      title: "No Smartphone Required",
      desc: "Zero mobile app downloads, no passwords, no internet connection, and no batteries required. A physical tangible card in hand."
    }
  ];

  return (
    <section className="accessibility-section" id="accessibility">
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>
          <span className="section-tag">Universal Accessibility</span>
          <h2 className="section-heading">
            Designed for Everyone
          </h2>
          <p className="section-subtext" style={{ margin: '0 auto' }}>
            Healthcare instructions must not be locked behind confusing portals or digital privilege. CareCard bridges the gap.
          </p>
        </div>

        {/* 6 Accessibility Cards */}
        <div className="accessibility-grid">
          {features.map((f, idx) => (
            <div key={idx} className="access-card">
              <div className="access-icon-box">{f.icon}</div>
              <div>
                <h3 className="access-title">{f.title}</h3>
                <p className="access-desc">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Callout: Physical Printed Card Emphasis */}
        <div className="no-phone-callout">
          <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: '#CCFBF1', color: '#0D9488', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <PhoneOff size={28} />
            </div>
            <div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>
                100% Tangible Physical Product
              </h4>
              <p style={{ fontSize: '0.92rem', color: '#475569', margin: 0, maxWidth: '680px' }}>
                Because CareCard is printed on durable cardstock or laminated plastic before hospital departure, patients don't need a smartphone or internet connection to understand their daily life-saving routine.
              </p>
            </div>
          </div>

          <button 
            type="button" 
            className="btn btn-primary btn-pill-sm no-print"
            onClick={onTriggerPrint}
            style={{ flexShrink: 0 }}
          >
            <Printer size={15} />
            <span>Test Print Layout</span>
          </button>
        </div>
      </div>
    </section>
  );
}
