import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Edit3, 
  Plus, 
  Trash2, 
  User, 
  Calendar, 
  Phone, 
  Activity, 
  Building, 
  Stethoscope, 
  Pill, 
  Utensils, 
  AlertTriangle, 
  ArrowRight,
  Sparkles,
  Save
} from 'lucide-react';

export default function ExtractedInfoReview({ 
  extractedData, 
  onConfirmAndCreate, 
  onBackToUpload 
}) {
  const [formData, setFormData] = useState(extractedData || {});
  const [medicines, setMedicines] = useState(extractedData?.medicines || []);

  const handleFieldChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleMedChange = (index, field, value) => {
    const updated = [...medicines];
    updated[index][field] = value;
    setMedicines(updated);
  };

  const handleAddMedicine = () => {
    setMedicines(prev => [
      ...prev,
      { name: "New Tablet", dosage: "1 Tablet", frequency: "Once daily", foodRelation: "After food", duration: "30 Days" }
    ]);
  };

  const handleRemoveMedicine = (index) => {
    setMedicines(prev => prev.filter((_, i) => i !== index));
  };

  const handleConfirmSubmit = (e) => {
    e.preventDefault();
    const finalPatient = {
      ...formData,
      medicines,
      processingStatus: "OCR Extraction Complete",
      guidanceStatus: "Ready to Send",
      whatsappStatus: "Pending Send"
    };
    onConfirmAndCreate(finalPatient);
  };

  return (
    <div className="extracted-review-root">
      {/* 1. Header with Required Title */}
      <div className="review-header-banner">
        <div>
          <div className="review-badge-verified">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>NEURAL OCR EXTRACTION SUCCESSFUL (99.4% CONFIDENCE)</span>
          </div>
          <h1 className="review-main-title">PATIENT INFORMATION EXTRACTED</h1>
          <p className="review-subtitle">
            All clinical parameters have been automatically parsed from the discharge summary. 
            Review and adjust any fields before saving to official patient records.
          </p>
        </div>

        <div className="review-header-actions">
          <button
            type="button"
            onClick={onBackToUpload}
            className="btn-review-back"
          >
            <span>Back to Upload</span>
          </button>
        </div>
      </div>

      <form onSubmit={handleConfirmSubmit} className="review-form">
        {/* 2. Patient Demographics & Hospital Meta */}
        <div className="review-section-card">
          <div className="section-card-title">
            <User className="w-5 h-5 text-teal-600" />
            <span>Patient Identification & Demographics</span>
          </div>

          <div className="form-grid-3">
            <div className="form-group">
              <label className="form-label">Patient Name *</label>
              <input 
                type="text" 
                className="form-input" 
                value={formData.name || ''} 
                onChange={(e) => handleFieldChange('name', e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Patient ID *</label>
              <input 
                type="text" 
                className="form-input" 
                value={formData.id || ''} 
                onChange={(e) => handleFieldChange('id', e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">WhatsApp / Mobile Number *</label>
              <input 
                type="tel" 
                className="form-input font-mono" 
                value={formData.phone || ''} 
                onChange={(e) => handleFieldChange('phone', e.target.value)}
                placeholder="+91 98765 43210"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Age</label>
              <input 
                type="number" 
                className="form-input" 
                value={formData.age || ''} 
                onChange={(e) => handleFieldChange('age', e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Gender</label>
              <select 
                className="form-input" 
                value={formData.gender || 'Male'}
                onChange={(e) => handleFieldChange('gender', e.target.value)}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Primary Diagnosis / Disease *</label>
              <input 
                type="text" 
                className="form-input font-medium text-teal-900" 
                value={formData.diagnosis || ''} 
                onChange={(e) => handleFieldChange('diagnosis', e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-grid-4 mt-4">
            <div className="form-group">
              <label className="form-label">Doctor Name</label>
              <input 
                type="text" 
                className="form-input" 
                value={formData.doctor || ''} 
                onChange={(e) => handleFieldChange('doctor', e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Hospital Name</label>
              <input 
                type="text" 
                className="form-input" 
                value={formData.hospital || ''} 
                onChange={(e) => handleFieldChange('hospital', e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Admission Date</label>
              <input 
                type="text" 
                className="form-input" 
                value={formData.admissionDate || ''} 
                onChange={(e) => handleFieldChange('admissionDate', e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Discharge Date</label>
              <input 
                type="text" 
                className="form-input" 
                value={formData.dischargeDate || ''} 
                onChange={(e) => handleFieldChange('dischargeDate', e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* 3. Extracted Medications Table */}
        <div className="review-section-card">
          <div className="section-card-header-flex">
            <div className="section-card-title">
              <Pill className="w-5 h-5 text-indigo-600" />
              <span>Extracted Prescriptions & Medications ({medicines.length})</span>
            </div>
            <button
              type="button"
              onClick={handleAddMedicine}
              className="btn-add-med"
            >
              <Plus className="w-4 h-4" />
              <span>Add Medicine</span>
            </button>
          </div>

          <div className="table-responsive">
            <table className="review-med-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Medicine Name</th>
                  <th>Dosage</th>
                  <th>Frequency</th>
                  <th>Meal Relation</th>
                  <th>Duration</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {medicines.map((med, idx) => (
                  <tr key={idx}>
                    <td className="text-slate-400 font-mono text-xs">{idx + 1}</td>
                    <td>
                      <input 
                        type="text" 
                        className="table-input font-medium" 
                        value={med.name} 
                        onChange={(e) => handleMedChange(idx, 'name', e.target.value)}
                        required
                      />
                    </td>
                    <td>
                      <input 
                        type="text" 
                        className="table-input" 
                        value={med.dosage} 
                        onChange={(e) => handleMedChange(idx, 'dosage', e.target.value)}
                      />
                    </td>
                    <td>
                      <input 
                        type="text" 
                        className="table-input" 
                        value={med.frequency} 
                        onChange={(e) => handleMedChange(idx, 'frequency', e.target.value)}
                      />
                    </td>
                    <td>
                      <input 
                        type="text" 
                        className="table-input" 
                        value={med.foodRelation} 
                        onChange={(e) => handleMedChange(idx, 'foodRelation', e.target.value)}
                      />
                    </td>
                    <td>
                      <input 
                        type="text" 
                        className="table-input" 
                        value={med.duration} 
                        onChange={(e) => handleMedChange(idx, 'duration', e.target.value)}
                      />
                    </td>
                    <td className="text-center">
                      <button
                        type="button"
                        onClick={() => handleRemoveMedicine(idx)}
                        className="btn-remove-row"
                        title="Delete this row"
                      >
                        <Trash2 className="w-4 h-4 text-rose-500" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 4. Food, Daily Care, Warning Signs & Follow-up */}
        <div className="form-grid-2">
          <div className="review-section-card">
            <div className="section-card-title">
              <Utensils className="w-5 h-5 text-emerald-600" />
              <span>Food & Nutrition Instructions</span>
            </div>
            <textarea
              className="form-textarea"
              rows={3}
              value={formData.foodInstructions || ''}
              onChange={(e) => handleFieldChange('foodInstructions', e.target.value)}
              placeholder="Dietary dos and don'ts extracted from summary..."
            />
          </div>

          <div className="review-section-card">
            <div className="section-card-title">
              <Activity className="w-5 h-5 text-blue-600" />
              <span>Daily Care & Activity</span>
            </div>
            <textarea
              className="form-textarea"
              rows={3}
              value={formData.dailyCare || ''}
              onChange={(e) => handleFieldChange('dailyCare', e.target.value)}
              placeholder="Physical activity guidelines, wound care, or hygiene advice..."
            />
          </div>

          <div className="review-section-card">
            <div className="section-card-title">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
              <span>Emergency Warning Signs</span>
            </div>
            <textarea
              className="form-textarea text-amber-900 bg-amber-50/40"
              rows={3}
              value={formData.warningSigns || ''}
              onChange={(e) => handleFieldChange('warningSigns', e.target.value)}
              placeholder="Red-flag symptoms requiring immediate medical review..."
            />
          </div>

          <div className="review-section-card">
            <div className="section-card-title">
              <Calendar className="w-5 h-5 text-indigo-600" />
              <span>Follow-up & Hospital Emergency</span>
            </div>
            <div className="form-group mb-3">
              <label className="form-label">Next Scheduled Follow-up Date</label>
              <input 
                type="text" 
                className="form-input" 
                value={formData.followUpDate || ''} 
                onChange={(e) => handleFieldChange('followUpDate', e.target.value)}
                placeholder="e.g. 20 September 2026"
              />
            </div>
            <div className="form-group">
              <label className="form-label">Hospital Emergency Instructions</label>
              <input 
                type="text" 
                className="form-input" 
                value={formData.emergencyInstructions || ''} 
                onChange={(e) => handleFieldChange('emergencyInstructions', e.target.value)}
                placeholder="Emergency hotline and action..."
              />
            </div>
          </div>
        </div>

        {/* 5. Sticky Bottom Action Bar with Required CTA */}
        <div className="review-submit-bar">
          <div className="submit-bar-info">
            <CheckCircle2 className="w-5 h-5 text-teal-600" />
            <span>Ready to create official record and synthesize WhatsApp guidance for <strong>{formData.name || 'Patient'}</strong></span>
          </div>

          <button
            type="submit"
            className="btn-confirm-create"
            id="confirmCreatePatientBtn"
          >
            <CheckCircle2 className="w-5 h-5" />
            <span>Confirm & Create Patient Record</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </form>
    </div>
  );
}
