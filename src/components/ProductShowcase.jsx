import React from 'react';
import { Pill, HeartHandshake, AlertOctagon, CheckCircle2 } from 'lucide-react';

export default function ProductShowcase() {
  return (
    <section className="product-showcase-section" id="showcase">
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        <span className="section-tag">Physical Product Mockup</span>
        <h2 className="section-heading">
          Real Physical Healthcare Cards
        </h2>
        <p className="section-subtext" style={{ margin: '0 auto' }}>
          From hospital report to a card patients can actually use.
        </p>
      </div>

      {/* Table Mockup Canvas */}
      <div className="table-scene-canvas">
        <div className="cards-table-grid">
          
          {/* Card 1: Daily Medicine */}
          <div className="table-card-item">
            <div className="table-card-type-badge" style={{ background: '#CCFBF1', color: '#0F766E' }}>
              Daily Medicine Card
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
              <strong style={{ fontSize: '1.05rem', color: '#0F172A' }}>Ravi Kumar (Hypertension)</strong>
              <Pill size={18} color="#0D9488" />
            </div>

            <div style={{ background: '#F8FAFC', borderRadius: '10px', padding: '12px', marginBottom: '10px', fontSize: '0.8rem', border: '1px solid #E2E8F0' }}>
              <div style={{ fontWeight: 800, color: '#0D9488' }}>🌅 Morning (After Food)</div>
              <div>1 Tablet Amlodipine 5mg</div>
              <div style={{ fontWeight: 800, color: '#4F46E5', marginTop: '6px' }}>🌙 Night (Before Sleep)</div>
              <div>1 Tablet Telmisartan 40mg</div>
            </div>

            <div style={{ fontSize: '0.74rem', color: '#64748B', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <CheckCircle2 size={13} color="#10B981" /> Color-coded time blocks
            </div>
          </div>

          {/* Card 2: Discharge Care */}
          <div className="table-card-item">
            <div className="table-card-type-badge" style={{ background: '#E0F2FE', color: '#0369A1' }}>
              Discharge Care Card
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
              <strong style={{ fontSize: '1.05rem', color: '#0F172A' }}>John David (Knee Surgery)</strong>
              <HeartHandshake size={18} color="#0284C7" />
            </div>

            <div style={{ background: '#F8FAFC', borderRadius: '10px', padding: '12px', marginBottom: '10px', fontSize: '0.8rem', border: '1px solid #E2E8F0' }}>
              <div style={{ fontWeight: 800, color: '#0284C7' }}>🚶 Movement Target</div>
              <div>10 minutes walker steps 3x daily</div>
              <div style={{ fontWeight: 800, color: '#16A34A', marginTop: '6px' }}>📅 Suture Removal</div>
              <div>18 Sept 2026 • OPD Room 102</div>
            </div>

            <div style={{ fontSize: '0.74rem', color: '#64748B', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <CheckCircle2 size={13} color="#10B981" /> Durable laminated plastic finish
            </div>
          </div>

          {/* Card 3: Emergency Information */}
          <div className="table-card-item">
            <div className="table-card-type-badge" style={{ background: '#FEE2E2', color: '#991B1B' }}>
              Emergency Information
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
              <strong style={{ fontSize: '1.05rem', color: '#0F172A' }}>Meera Patel (Asthma)</strong>
              <AlertOctagon size={18} color="#E11D48" />
            </div>

            <div style={{ background: '#FFF1F2', borderRadius: '10px', padding: '12px', marginBottom: '10px', fontSize: '0.8rem', border: '1px solid #FECDD3' }}>
              <div style={{ fontWeight: 800, color: '#BE123C' }}>⚠️ Danger Symptoms</div>
              <div>Blue lips or severe wheezing</div>
              <div style={{ fontWeight: 800, color: '#9F1239', marginTop: '6px' }}>📞 Emergency Dispatch</div>
              <div>Call 108 / 044-2450-8800</div>
            </div>

            <div style={{ fontSize: '0.74rem', color: '#64748B', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <CheckCircle2 size={13} color="#10B981" /> Fits standard wallet & cardholder
            </div>
          </div>

        </div>

        <div style={{ marginTop: '30px', fontSize: '0.94rem', fontWeight: 700, color: '#475569' }}>
          ✨ Sized at standard pocket / cardholder dimensions (85mm × 54mm) with rounded 3mm safety corners.
        </div>
      </div>
    </section>
  );
}
