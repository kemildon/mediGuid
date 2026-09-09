import React from 'react';
import { CreditCard, Sparkles, Heart, Shield } from 'lucide-react';

export default function Footer({ onOpenGenerator }) {
  return (
    <>
      {/* 9. FINAL CTA SECTION */}
      <section className="final-cta-section no-print">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 className="final-cta-heading">
            Make Healthcare Easier to Understand.
          </h2>
          <p className="final-cta-text">
            Important medical information should not be difficult to understand.
          </p>
          <button 
            type="button" 
            className="btn btn-white-cta"
            onClick={onOpenGenerator}
          >
            <Sparkles size={18} />
            <span>Create a CareCard</span>
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer-wrap no-print">
        <div className="footer-container">
          {/* Brand Col */}
          <div style={{ maxWidth: '340px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#FFFFFF', marginBottom: '8px' }}>
              <div style={{ width: '34px', height: '34px', borderRadius: '10px', background: '#0D9488', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <CreditCard size={18} color="#FFFFFF" />
              </div>
              <span style={{ fontSize: '1.25rem', fontWeight: 800 }}>CareCard</span>
            </div>
            <p style={{ fontSize: '0.86rem', color: '#94A3B8', lineHeight: 1.5 }}>
              "Your Health. Made Simple."<br/>
              A physical medical information card prototype designed for health literacy and universal patient accessibility.
            </p>
          </div>

          {/* Quick Links */}
          <div style={{ display: 'flex', gap: '50px', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#FFFFFF', textTransform: 'uppercase', marginBottom: '12px' }}>
                Product
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.86rem' }}>
                <li><a href="#about" style={{ color: '#94A3B8', textDecoration: 'none' }}>About CareCard</a></li>
                <li><a href="#how-it-works" style={{ color: '#94A3B8', textDecoration: 'none' }}>How It Works</a></li>
                <li><a href="#preview" style={{ color: '#94A3B8', textDecoration: 'none' }}>Card Preview</a></li>
                <li><a href="#showcase" style={{ color: '#94A3B8', textDecoration: 'none' }}>Physical Showcase</a></li>
              </ul>
            </div>

            <div>
              <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#FFFFFF', textTransform: 'uppercase', marginBottom: '12px' }}>
                Inclusion
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.86rem' }}>
                <li><a href="#accessibility" style={{ color: '#94A3B8', textDecoration: 'none' }}>Accessibility</a></li>
                <li><a href="#problem" style={{ color: '#94A3B8', textDecoration: 'none' }}>The Literacy Gap</a></li>
                <li><a href="#solution" style={{ color: '#94A3B8', textDecoration: 'none' }}>4 Pillars of Care</a></li>
                <li><span style={{ color: '#0D9488' }}>No Smartphone Required</span></li>
              </ul>
            </div>

            <div>
              <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#FFFFFF', textTransform: 'uppercase', marginBottom: '12px' }}>
                Hospital Contact
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.86rem' }}>
                <li>Helpline: 108 / 044-2450</li>
                <li>Email: carecard@hospital.org</li>
                <li>Clinical Handover Dept.</li>
                <li>OPD Block 1, Floor 2</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Medical Disclaimer as required */}
        <div className="footer-disclaimer-card">
          <p>
            ⚠️ <strong>Medical Disclaimer:</strong> CareCard simplifies information provided by healthcare professionals. It does not replace professional medical advice.
          </p>
          <div style={{ marginTop: '10px', fontSize: '0.74rem', color: '#475569' }}>
            CareCard Product Prototype • Designed for Healthcare Innovation & Design Thinking Presentations • © 2026 CareCard Health.
          </div>
        </div>
      </footer>
    </>
  );
}
