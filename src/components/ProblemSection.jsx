import React from 'react';
import { AlertCircle, HelpCircle, FileX, ArrowRight, UserX } from 'lucide-react';

export default function ProblemSection() {
  return (
    <section className="problem-section" id="problem">
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <span className="section-tag">The Reality Patients Face</span>
        <h2 className="section-heading">
          Why Traditional Medical Reports Fail Patients
        </h2>
        <p className="section-subtext" style={{ margin: '0 auto' }}>
          Medical reports can contain complex terminology, long instructions and information that is difficult to remember.
        </p>
      </div>

      <div className="problem-grid">
        {/* Left: Complex Hospital Discharge Summary */}
        <div style={{ background: '#FFFFFF', border: '1.5px solid #E2E8F0', borderRadius: '20px', padding: '30px', boxShadow: '0 8px 30px rgba(0,0,0,0.06)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#E11D48', fontWeight: 800, fontSize: '0.94rem', marginBottom: '16px' }}>
            <FileX size={20} />
            <span>Unreadable Discharge Papers</span>
          </div>

          <div style={{ background: '#F8FAFC', border: '1px dashed #CBD5E1', borderRadius: '12px', padding: '16px', fontFamily: 'Courier New, monospace', fontSize: '0.8rem', color: '#475569', lineHeight: 1.6 }}>
            <div style={{ borderBottom: '1px solid #CBD5E1', paddingBottom: '6px', marginBottom: '8px', fontWeight: 700 }}>
              DISCHARGE PROTOCOL: REF #904-B
            </div>
            • <em>"Pt presented with acute symptomatic cephalalgia secondary to stage-II essential systemic arterial hypertension..."</em><br/>
            • <em>"Administer anti-hypertensive regimen: T. Amlodipine 5mg PO mane q.d. & T. Telmisartan 40mg nocte p.c..."</em><br/>
            • <em>"Electrolyte balance monitoring recommended. Strictly contraindicate sodium-heavy foodstuffs..."</em>
          </div>

          <div style={{ marginTop: '16px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <span style={{ background: '#FEE2E2', color: '#991B1B', fontSize: '0.74rem', fontWeight: 700, padding: '4px 10px', borderRadius: '999px' }}>
              Microscopic 8pt Font
            </span>
            <span style={{ background: '#FEE2E2', color: '#991B1B', fontSize: '0.74rem', fontWeight: 700, padding: '4px 10px', borderRadius: '999px' }}>
              Confusing Latin Abbreviations
            </span>
            <span style={{ background: '#FEE2E2', color: '#991B1B', fontSize: '0.74rem', fontWeight: 700, padding: '4px 10px', borderRadius: '999px' }}>
              No Visual Guidance
            </span>
          </div>
        </div>

        {/* Right: Confused Patient Illustration / Experience */}
        <div className="problem-visual-card">
          <div className="confused-patient-box">
            <UserX size={56} />
          </div>

          <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#92400E', marginBottom: '8px' }}>
            "Which medicine was for night? Can I eat regular meals?"
          </h3>

          <p style={{ fontSize: '0.94rem', color: '#78350F', lineHeight: 1.5, maxWidth: '420px', margin: '0 auto' }}>
            Over <strong>75% of elderly patients</strong> cannot recall discharge instructions within 24 hours of returning home. Family caregivers are left guessing dosages.
          </p>

          <div style={{ marginTop: '20px', background: 'rgba(255, 255, 255, 0.7)', borderRadius: '12px', padding: '12px', display: 'flex', justifyContent: 'space-around', textAlign: 'center' }}>
            <div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#B45309' }}>1 in 3</div>
              <div style={{ fontSize: '0.72rem', color: '#78350F' }}>Readmissions Due to Misunderstood Meds</div>
            </div>
            <div style={{ borderLeft: '1px solid #FCD34D' }}></div>
            <div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#B45309' }}>80%</div>
              <div style={{ fontSize: '0.72rem', color: '#78350F' }}>Patients Forget Paper Instructions</div>
            </div>
          </div>
        </div>
      </div>

      {/* The Chain: Complex words -> Confusion -> Missed instructions */}
      <div className="problem-chain-flow">
        <div className="chain-step">
          <span>📜 Complex Medical Words</span>
        </div>
        <div className="chain-arrow">→</div>
        <div className="chain-step">
          <span>🤔 Patient & Family Confusion</span>
        </div>
        <div className="chain-arrow">→</div>
        <div className="chain-step" style={{ background: '#FEE2E2', borderColor: '#FCA5A5', color: '#991B1B' }}>
          <span>⚠️ Missed Instructions & Relapse</span>
        </div>
      </div>
    </section>
  );
}
