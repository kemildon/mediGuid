import React, { useState } from 'react';
import { 
  Heart, 
  Sun, 
  Moon, 
  Apple, 
  Footprints, 
  Calendar, 
  AlertTriangle, 
  ShieldCheck, 
  QrCode, 
  RotateCw, 
  User, 
  Clock, 
  PhoneCall,
  Activity,
  CheckCircle2,
  XCircle,
  Pill
} from 'lucide-react';
import { MULTILINGUAL_DICTIONARY } from '../data/sampleCards';

export default function SmartCard({ 
  cardData, 
  isFlipped = false, 
  onFlip, 
  lang = 'en',
  isPrintMode = false 
}) {
  const [internalFlip, setInternalFlip] = useState(false);
  const flipped = onFlip ? isFlipped : internalFlip;
  const toggleFlip = () => {
    if (onFlip) {
      onFlip(!isFlipped);
    } else {
      setInternalFlip(!internalFlip);
    }
  };

  const t = MULTILINGUAL_DICTIONARY[lang] || MULTILINGUAL_DICTIONARY.en;
  const data = cardData;

  return (
    <div className="card-3d-stage">
      <div className={`card-flipper-container ${flipped ? 'is-flipped' : ''}`}>
        
        {/* ================================================================
            FRONT SIDE: PATIENT ESSENTIAL IDENTIFICATION & HEALTH CONDITION
            ================================================================ */}
        <div className="physical-smart-card card-front" onClick={toggleFlip} title="Click to flip to back">
          <div className="card-sheen-overlay"></div>
          
          {/* Top Banner */}
          <div className="card-top-banner">
            <div className="card-top-brand">
              <span className="card-brand-logo">CARE CARD</span>
              <span className="card-hosp-seal">{data.hospitalName}</span>
            </div>
            <div className="card-auth-chip">
              <ShieldCheck size={16} />
              <span>OFFICIAL</span>
            </div>
          </div>

          <div className="card-inner-body">
            {/* Patient Header */}
            <div className="card-patient-summary">
              <div>
                <span className="card-id-label">{t.patient}</span>
                <h3 className="card-patient-name">{data.patientName}</h3>
                <div className="card-patient-meta">
                  <span>{t.age}: <strong>{data.age} yrs</strong></span> • 
                  <span> {data.gender}</span> • 
                  <span> Blood: <strong>{data.bloodGroup}</strong></span>
                </div>
              </div>

              <div className="card-id-pill">
                <span className="card-id-label">{t.id}</span>
                <span className="card-id-val">{data.id}</span>
              </div>
            </div>

            {/* Health Condition (Big, Clear, No Jargon) */}
            <div className="card-condition-box">
              <div className="card-condition-lbl">
                <Heart size={16} className="text-teal-600" />
                <span>{t.condition}</span>
              </div>
              <h4 className="card-condition-name">{data.healthCondition}</h4>
              <p className="card-condition-simple">{data.conditionSimple}</p>
            </div>

            {/* Quick Overview Summary Row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '12px' }}>
              <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '12px' }}>
                <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Pill size={14} color="#0D9488" /> Key Prescriptions
                </span>
                <div style={{ fontSize: '0.86rem', fontWeight: 700, color: '#0F172A', marginTop: '4px' }}>
                  {data.medicines.morning.count} Morning • {data.medicines.night.count} Night
                </div>
                <div style={{ fontSize: '0.75rem', color: '#64748B' }}>
                  Follow timetable on reverse side
                </div>
              </div>

              <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '12px' }}>
                <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Calendar size={14} color="#0284C7" /> {t.nextVisit}
                </span>
                <div style={{ fontSize: '0.86rem', fontWeight: 800, color: '#0284C7', marginTop: '4px' }}>
                  {data.nextVisit.date}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#64748B' }}>
                  {data.nextVisit.time}
                </div>
              </div>
            </div>

            {/* Verification Footer with Attending Doctor & QR */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #E2E8F0', paddingTop: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: '#CCFBF1', color: '#0D9488', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <User size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.84rem', fontWeight: 800, color: '#0F172A' }}>{data.doctorName}</div>
                  <div style={{ fontSize: '0.74rem', color: '#64748B' }}>{data.department}</div>
                </div>
              </div>

              {/* Scannable Audio/Helpline QR */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#F1F5F9', padding: '4px 10px', borderRadius: '8px' }}>
                <QrCode size={24} color="#334155" />
                <span style={{ fontSize: '0.68rem', fontWeight: 700, color: '#475569', lineHeight: 1.1 }}>
                  Scan for<br/>Audio Read
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Flip Indicator Strip */}
          <div className="card-footer-strip">
            <span>🛡️ Valid Discharge Card • Non-Transferable</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#0D9488', fontWeight: 700, cursor: 'pointer' }}>
              <RotateCw size={14} /> Tap to view medicines & instructions
            </span>
          </div>
        </div>

        {/* ================================================================
            BACK SIDE: MEDICINES, FOOD, ACTIVITY & EMERGENCY
            ================================================================ */}
        <div className="physical-smart-card card-back" onClick={toggleFlip} title="Click to flip to front">
          <div className="card-sheen-overlay"></div>

          {/* Top Banner */}
          <div className="card-top-banner" style={{ background: 'linear-gradient(135deg, #0F766E 0%, #115E59 100%)' }}>
            <div className="card-top-brand">
              <span className="card-brand-logo">CARE CARD</span>
              <span className="card-hosp-seal">DAILY ACTION PLAN</span>
            </div>
            <div className="card-auth-chip" style={{ background: 'rgba(255,255,255,0.18)' }}>
              <span>REVERSE</span>
            </div>
          </div>

          <div className="card-inner-body" style={{ gap: '14px', padding: '20px 24px' }}>
            
            {/* 1. MEDICINES TIMELINE (MORNING & NIGHT) */}
            <div>
              <span style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#0D9488', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                <Pill size={15} /> {t.medicines}
              </span>

              <div className="card-doses-grid">
                {/* Morning */}
                <div className={`dose-slot ${data.medicines.morning.enabled ? 'active' : ''}`}>
                  <div className="dose-time-header">
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Sun size={15} color="#D97706" /> {t.morning}
                    </span>
                  </div>
                  <div className="dose-count-badge">🌅 {data.medicines.morning.count}</div>
                  <div className="dose-med-name">{data.medicines.morning.name}</div>
                  <div className="dose-instructions">{data.medicines.morning.instructions}</div>
                </div>

                {/* Afternoon */}
                <div className="dose-slot" style={{ opacity: data.medicines.afternoon.enabled ? 1 : 0.65 }}>
                  <div className="dose-time-header">
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Clock size={15} color="#0284C7" /> {t.afternoon}
                    </span>
                  </div>
                  <div className="dose-count-badge" style={{ color: data.medicines.afternoon.enabled ? '#0284C7' : '#94A3B8' }}>
                    ☀️ {data.medicines.afternoon.count}
                  </div>
                  <div className="dose-med-name">{data.medicines.afternoon.name}</div>
                  <div className="dose-instructions">{data.medicines.afternoon.instructions}</div>
                </div>

                {/* Night */}
                <div className={`dose-slot ${data.medicines.night.enabled ? 'active' : ''}`}>
                  <div className="dose-time-header">
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Moon size={15} color="#6366F1" /> {t.night}
                    </span>
                  </div>
                  <div className="dose-count-badge" style={{ color: '#4F46E5' }}>🌙 {data.medicines.night.count}</div>
                  <div className="dose-med-name">{data.medicines.night.name}</div>
                  <div className="dose-instructions">{data.medicines.night.instructions}</div>
                </div>
              </div>
            </div>

            {/* 2. FOOD & ACTIVITY ROW */}
            <div className="card-lifestyle-row">
              {/* Food */}
              <div className="lifestyle-card">
                <div className="lifestyle-lbl" style={{ color: '#0D9488' }}>
                  <Apple size={15} /> {t.food}
                </div>
                <div className="lifestyle-val" style={{ color: '#065F46', marginBottom: '4px' }}>
                  <span style={{ fontWeight: 800 }}>✓ Eat:</span> {data.food.eat}
                </div>
                <div className="lifestyle-val" style={{ color: '#9F1239' }}>
                  <span style={{ fontWeight: 800 }}>✗ Avoid:</span> {data.food.avoid}
                </div>
              </div>

              {/* Activity */}
              <div className="lifestyle-card">
                <div className="lifestyle-lbl" style={{ color: '#0284C7' }}>
                  <Footprints size={15} /> {t.activity}
                </div>
                <div style={{ fontSize: '0.96rem', fontWeight: 800, color: '#0F172A', marginBottom: '3px' }}>
                  🚶 {data.activity.title}
                </div>
                <div className="lifestyle-val">
                  {data.activity.description}
                </div>
              </div>
            </div>

            {/* 3. NEXT VISIT BAR */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#F0F9FF', border: '1px solid #BAE6FD', padding: '10px 14px', borderRadius: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Calendar size={18} color="#0284C7" />
                <div>
                  <span style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', color: '#0369A1' }}>{t.nextVisit}</span>
                  <div style={{ fontSize: '0.92rem', fontWeight: 800, color: '#0F172A' }}>
                    📅 {data.nextVisit.date} at {data.nextVisit.time}
                  </div>
                </div>
              </div>
              <span style={{ fontSize: '0.76rem', color: '#0369A1', fontWeight: 700 }}>
                {data.nextVisit.location}
              </span>
            </div>

            {/* 4. EMERGENCY INSTRUCTIONS (Critical Safety Bar) */}
            <div className="card-emergency-strip">
              <AlertTriangle className="emergency-icon" size={20} />
              <div style={{ flex: 1 }}>
                <div className="emergency-text-bold">
                  ⚠️ {t.emergency}: {data.emergency.warning}
                </div>
                <div className="emergency-phone-tag">
                  📞 {data.emergency.action}
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Flip Indicator Strip */}
          <div className="card-footer-strip">
            <span>Hospital Support: <strong>{data.emergency.hotline}</strong></span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#0D9488', fontWeight: 700, cursor: 'pointer' }}>
              <RotateCw size={14} /> Tap to flip to front
            </span>
          </div>

        </div>

      </div>

      {/* Manual Flip Action Button */}
      {!isPrintMode && (
        <div className="card-flip-btn-wrap">
          <button 
            type="button" 
            className="btn btn-secondary btn-pill-sm"
            onClick={toggleFlip}
            aria-label="Flip Medical Card"
          >
            <RotateCw size={15} />
            <span>{flipped ? t.frontSide : t.backSide}</span>
          </button>
        </div>
      )}
    </div>
  );
}
