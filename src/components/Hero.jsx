import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  FileText, 
  CreditCard, 
  CheckCircle2, 
  ArrowDown, 
  Zap,
  Printer
} from 'lucide-react';
import SmartCard from './SmartCard';

export default function Hero({ cardData, onOpenGenerator, onTriggerPrint }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [viewMode, setViewMode] = useState('both'); // 'both', 'report', 'card'

  return (
    <section className="hero-section">
      {/* Category Pill */}
      <div className="hero-pill-badge">
        <Sparkles size={15} />
        <span>Physical Health Card Product Prototype</span>
      </div>

      {/* Main Headings */}
      <h1 className="hero-heading">
        Medical Information Everyone Can Understand
      </h1>

      <p className="hero-subheading">
        CareCard transforms complex discharge information into a simple visual health card that patients can understand and follow.
      </p>

      {/* Call to Action Buttons */}
      <div className="hero-cta-row no-print">
        <button 
          type="button" 
          className="btn btn-primary"
          onClick={onOpenGenerator}
        >
          <Sparkles size={18} />
          <span>Create CareCard</span>
        </button>

        <a 
          href="#how-it-works" 
          className="btn btn-secondary"
        >
          <span>See How It Works</span>
          <ArrowRight size={17} />
        </a>

        <button
          type="button"
          className="btn btn-secondary"
          onClick={onTriggerPrint}
          title="Print official physical medical card"
        >
          <Printer size={17} />
          <span>Print Prototype Card</span>
        </button>
      </div>

      {/* ====================================================================
          HERO CENTERPIECE: LARGE REALISTIC SMART MEDICAL CARD MOCKUP
          ==================================================================== */}
      <div className="hero-card-display-container">
        <SmartCard 
          cardData={cardData} 
          isFlipped={isFlipped} 
          onFlip={setIsFlipped} 
        />
      </div>

      {/* ====================================================================
          ANIMATED TRANSFORMATION VISUAL:
          "Complex Medical Report → Simple CareCard"
          ==================================================================== */}
      <div className="transformation-section-wrap no-print">
        <div className="transformation-header">
          <span className="transformation-tag">✨ Visual Transformation</span>
          <h3 className="transformation-title">Complex Medical Report → Simple CareCard</h3>
          <p style={{ fontSize: '0.92rem', color: '#64748B', maxWidth: '600px', margin: '6px auto 0' }}>
            Watch how confusing clinical reports with latin acronyms are distilled into a clear, pocket-sized action card.
          </p>
        </div>

        <div className="transformation-grid">
          {/* Complex Discharge Report Left */}
          <div className="complex-report-mockup">
            <div className="report-header-dense">
              <span>DISCHARGE SUMMARY [ICD-10 I10.9]</span>
              <span>EPISODE #8942-A</span>
            </div>
            
            <div style={{ fontSize: '0.7rem', color: '#64748B', marginBottom: '8px' }}>
              PT: KUMAR, RAVI • AGE: 58 • ATTENDING: SHARMA, A. MD<br/>
              DX: PRIMARY ESSENTIAL HYPERTENSION W/ CEPHALALGIA
            </div>

            <table className="report-dense-table">
              <thead>
                <tr>
                  <th>Rx (Pharmaceutical)</th>
                  <th>Dose / Route</th>
                  <th>Sig (Frequency)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>T. Amlodipine Besylate</td>
                  <td>5 mg PO</td>
                  <td>q.d. mane p.c. (08:00)</td>
                </tr>
                <tr>
                  <td>T. Telmisartan</td>
                  <td>40 mg PO</td>
                  <td>q.d. nocte p.c. (21:00)</td>
                </tr>
              </tbody>
            </table>

            <div className="report-warning-dense">
              <strong>CLINICAL NOTE:</strong> Restrict NaCL ingestion &lt;2g/die. Aerobic exercise 30m q.d. Advise immediate ER consult if acute retrosternal distress or dyspnea occurs.
            </div>

            <div style={{ marginTop: '10px', fontSize: '0.68rem', color: '#94A3B8', textAlign: 'right' }}>
              Signed Electronically • Form 44-B Hospital Standard
            </div>
          </div>

          {/* Transformation Arrow & AI Beam */}
          <div className="transformation-arrow-center">
            <div className="transformation-pulse-circle">
              <Zap size={22} />
            </div>
            <span style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Simplified
            </span>
          </div>

          {/* Clean CareCard Summary Preview Right */}
          <div style={{ background: '#FFFFFF', border: '2px solid #0D9488', borderRadius: '16px', padding: '18px', textAlign: 'left', boxShadow: '0 8px 24px rgba(13, 148, 136, 0.12)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #E2E8F0', paddingBottom: '8px', marginBottom: '10px' }}>
              <strong style={{ color: '#0D9488', fontSize: '0.94rem' }}>CareCard (What Patient Sees)</strong>
              <span style={{ background: '#CCFBF1', color: '#0F766E', fontSize: '0.72rem', fontWeight: 800, padding: '2px 8px', borderRadius: '999px' }}>100% Clear</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.84rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} color="#0D9488" />
                <span><strong>High Blood Pressure:</strong> Healthy daily heart plan</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} color="#0D9488" />
                <span><strong>Morning:</strong> 1 Tablet (Amlodipine after breakfast)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} color="#0D9488" />
                <span><strong>Night:</strong> 1 Tablet (Telmisartan before sleep)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} color="#0D9488" />
                <span><strong>Food:</strong> Reduce salt, avoid pickles & papads</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} color="#0D9488" />
                <span><strong>Next Visit:</strong> 15 September 2026 (Room 204)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
