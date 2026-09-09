import React, { useState } from 'react';
import { X, Sparkles, Printer, Check, SlidersHorizontal, RefreshCw } from 'lucide-react';
import SmartCard from './SmartCard';
import { CLINICAL_PRESETS } from '../data/sampleCards';

export default function CardGeneratorModal({ 
  isOpen, 
  onClose, 
  currentCard, 
  onSaveCard, 
  onTriggerPrint 
}) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({ ...currentCard });
  const [activeTab, setActiveTab] = useState('front');

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleMedicineChange = (timing, field, value) => {
    setFormData(prev => ({
      ...prev,
      medicines: {
        ...prev.medicines,
        [timing]: {
          ...prev.medicines[timing],
          [field]: value
        }
      }
    }));
  };

  const handleFoodChange = (type, value) => {
    setFormData(prev => ({
      ...prev,
      food: {
        ...prev.food,
        [type]: value
      }
    }));
  };

  const handleActivityChange = (value) => {
    setFormData(prev => ({
      ...prev,
      activity: {
        ...prev.activity,
        title: value
      }
    }));
  };

  const handleEmergencyChange = (value) => {
    setFormData(prev => ({
      ...prev,
      emergency: {
        ...prev.emergency,
        warning: value
      }
    }));
  };

  const handleNextVisitChange = (value) => {
    setFormData(prev => ({
      ...prev,
      nextVisit: {
        ...prev.nextVisit,
        date: value
      }
    }));
  };

  const loadPreset = (presetData) => {
    setFormData({ ...presetData });
    onSaveCard({ ...presetData });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSaveCard(formData);
    onClose();
  };

  return (
    <div className="modal-backdrop-wrap no-print" onClick={onClose}>
      <div className="generator-modal-dialog" onClick={(e) => e.stopPropagation()}>
        
        {/* Modal Header */}
        <div className="modal-header-bar">
          <div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0F172A', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Sparkles size={20} color="#0D9488" /> CareCard Prototype Generator
            </h3>
            <p style={{ fontSize: '0.84rem', color: '#64748B', margin: '2px 0 0' }}>
              Enter patient discharge data or pick a 1-click clinical preset to generate an instant physical CareCard.
            </p>
          </div>

          <button 
            type="button" 
            className="modal-close-icon"
            onClick={onClose}
            aria-label="Close generator modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body: Split Form Left & Live Card Preview Right */}
        <div className="generator-split-grid">
          
          {/* Left Column: Form Fields */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            
            {/* 1-Click Presets */}
            <div>
              <span className="form-group-label" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <SlidersHorizontal size={14} /> Quick Clinical Presets:
              </span>
              <div className="presets-chips-row">
                {CLINICAL_PRESETS.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    className={`preset-chip-btn ${formData.healthCondition === p.data.healthCondition ? 'active' : ''}`}
                    onClick={() => loadPreset(p.data)}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Patient Name & Age Row */}
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '12px' }}>
              <div>
                <label className="form-group-label">Patient Name</label>
                <input 
                  type="text" 
                  className="form-input-text"
                  value={formData.patientName} 
                  onChange={(e) => handleInputChange('patientName', e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="form-group-label">Age</label>
                <input 
                  type="number" 
                  className="form-input-text"
                  value={formData.age} 
                  onChange={(e) => handleInputChange('age', parseInt(e.target.value, 10) || 1)}
                  required
                />
              </div>
            </div>

            {/* Health Condition */}
            <div>
              <label className="form-group-label">Health Condition (Plain Words)</label>
              <input 
                type="text" 
                className="form-input-text"
                value={formData.healthCondition} 
                onChange={(e) => handleInputChange('healthCondition', e.target.value)}
                placeholder="e.g. High Blood Pressure, Knee Surgery, Type 2 Diabetes"
                required
              />
            </div>

            {/* Medicines Timings */}
            <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '14px' }}>
              <span className="form-group-label" style={{ color: '#0D9488' }}>Medicine Name & Timing</span>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '6px' }}>
                <div>
                  <span style={{ fontSize: '0.74rem', fontWeight: 800, color: '#D97706' }}>🌅 Morning Dose</span>
                  <input 
                    type="text" 
                    className="form-input-text"
                    value={formData.medicines.morning.count}
                    onChange={(e) => handleMedicineChange('morning', 'count', e.target.value)}
                    placeholder="e.g. 1 Tablet"
                  />
                  <input 
                    type="text" 
                    className="form-input-text"
                    style={{ marginTop: '6px', fontSize: '0.82rem' }}
                    value={formData.medicines.morning.name}
                    onChange={(e) => handleMedicineChange('morning', 'name', e.target.value)}
                    placeholder="Medicine Name (e.g. Amlodipine 5mg)"
                  />
                </div>

                <div>
                  <span style={{ fontSize: '0.74rem', fontWeight: 800, color: '#4F46E5' }}>🌙 Night Dose</span>
                  <input 
                    type="text" 
                    className="form-input-text"
                    value={formData.medicines.night.count}
                    onChange={(e) => handleMedicineChange('night', 'count', e.target.value)}
                    placeholder="e.g. 1 Tablet"
                  />
                  <input 
                    type="text" 
                    className="form-input-text"
                    style={{ marginTop: '6px', fontSize: '0.82rem' }}
                    value={formData.medicines.night.name}
                    onChange={(e) => handleMedicineChange('night', 'name', e.target.value)}
                    placeholder="Medicine Name (e.g. Telmisartan 40mg)"
                  />
                </div>
              </div>
            </div>

            {/* Diet Instructions */}
            <div>
              <label className="form-group-label">Diet Instructions (What to Eat or Avoid)</label>
              <input 
                type="text" 
                className="form-input-text"
                value={formData.food.avoid} 
                onChange={(e) => handleFoodChange('avoid', e.target.value)}
                placeholder="e.g. Reduce salt strictly. Avoid pickles and oily snacks."
              />
            </div>

            {/* Activity Instructions */}
            <div>
              <label className="form-group-label">Activity Instructions</label>
              <input 
                type="text" 
                className="form-input-text"
                value={formData.activity.title} 
                onChange={(e) => handleActivityChange(e.target.value)}
                placeholder="e.g. Walk 20–30 minutes"
              />
            </div>

            {/* Warning Signs & Emergency */}
            <div>
              <label className="form-group-label">Warning Signs (Emergency Trigger)</label>
              <input 
                type="text" 
                className="form-input-text"
                value={formData.emergency.warning} 
                onChange={(e) => handleEmergencyChange(e.target.value)}
                placeholder="e.g. Call hospital immediately if severe chest pain or difficulty breathing."
              />
            </div>

            {/* Next Visit Date */}
            <div>
              <label className="form-group-label">Next Visit Date & Time</label>
              <input 
                type="text" 
                className="form-input-text"
                value={formData.nextVisit.date} 
                onChange={(e) => handleNextVisitChange(e.target.value)}
                placeholder="e.g. 15 September 2026"
              />
            </div>

            {/* Submit & Print Buttons */}
            <div style={{ display: 'flex', gap: '12px', marginTop: '10px' }}>
              <button 
                type="submit" 
                className="btn btn-primary"
                style={{ flex: 1 }}
              >
                <Check size={16} /> Apply to Card
              </button>

              <button 
                type="button" 
                className="btn btn-secondary"
                onClick={() => {
                  onSaveCard(formData);
                  onTriggerPrint();
                }}
              >
                <Printer size={16} /> Print CareCard
              </button>
            </div>
          </form>

          {/* Right Column: Live Card Preview */}
          <div style={{ background: '#F8FAFC', borderRadius: '18px', padding: '20px', border: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
              <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#0F172A', textTransform: 'uppercase' }}>
                Live Physical Card Preview
              </span>
              <span style={{ fontSize: '0.72rem', background: '#CCFBF1', color: '#0D9488', padding: '2px 8px', borderRadius: '999px', fontWeight: 700 }}>
                Real-Time Updates
              </span>
            </div>

            <div style={{ width: '100%', maxWidth: '480px' }}>
              <SmartCard 
                cardData={formData}
              />
            </div>

            <p style={{ fontSize: '0.76rem', color: '#64748B', marginTop: '16px', textAlign: 'center' }}>
              Card dimensions and proportions reflect an actual printed medical card (85mm × 54mm standard).
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
