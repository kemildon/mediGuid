import React, { useState } from 'react';
import { RotateCw, Globe, Printer, Sparkles, Sliders } from 'lucide-react';
import SmartCard from './SmartCard';
import { CLINICAL_PRESETS } from '../data/sampleCards';

export default function CardPreviewer({ 
  activeCard, 
  onSelectPreset, 
  onOpenGenerator, 
  onTriggerPrint 
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [lang, setLang] = useState('en');

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'ta', label: 'தமிழ் (Tamil)' },
    { code: 'hi', label: 'हिंदी (Hindi)' },
    { code: 'es', label: 'Español' }
  ];

  return (
    <section className="solution-section" id="preview" style={{ background: '#FFFFFF', borderTop: '1px solid #E2E8F0' }}>
      <div className="solution-container" style={{ textAlign: 'center' }}>
        <span className="section-tag">Interactive Product Experience</span>
        <h2 className="section-heading">
          Explore the Physical CareCard
        </h2>
        <p className="section-subtext" style={{ margin: '0 auto 30px' }}>
          Interact with the live card prototype below. Flip between front and back, switch languages, or try different medical condition presets.
        </p>

        {/* Workbench Controls Row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', flexWrap: 'wrap', marginBottom: '30px' }} className="no-print">
          {/* Preset Selector */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#F8FAFC', padding: '6px 12px', borderRadius: '999px', border: '1px solid #CBD5E1' }}>
            <Sliders size={15} color="#0D9488" />
            <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#334155' }}>Sample Patient:</span>
            {CLINICAL_PRESETS.map((p) => (
              <button
                key={p.id}
                type="button"
                className={`preset-chip-btn ${activeCard.healthCondition === p.data.healthCondition ? 'active' : ''}`}
                onClick={() => onSelectPreset(p.data)}
                style={{ padding: '4px 10px', fontSize: '0.76rem' }}
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* Language Switcher */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#F8FAFC', padding: '6px 12px', borderRadius: '999px', border: '1px solid #CBD5E1' }}>
            <Globe size={15} color="#0284C7" />
            {languages.map((l) => (
              <button
                key={l.code}
                type="button"
                className={`preset-chip-btn ${lang === l.code ? 'active' : ''}`}
                onClick={() => setLang(l.code)}
                style={{ padding: '4px 10px', fontSize: '0.76rem' }}
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* Direct Print Button */}
          <button
            type="button"
            className="btn btn-secondary btn-pill-sm"
            onClick={onTriggerPrint}
          >
            <Printer size={15} />
            <span>Print This Card</span>
          </button>
        </div>

        {/* The Live Interactive Smart Card */}
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <SmartCard 
            cardData={activeCard} 
            isFlipped={isFlipped} 
            onFlip={setIsFlipped}
            lang={lang}
          />
        </div>

        {/* Bottom Feature Hint */}
        <div style={{ marginTop: '30px', fontSize: '0.86rem', color: '#64748B' }} className="no-print">
          💡 <strong>Tip for Evaluators:</strong> Click anywhere on the card or use the button above to flip between <strong>Front (ID & Condition)</strong> and <strong>Back (Timetable & Diet)</strong>.
        </div>
      </div>
    </section>
  );
}
