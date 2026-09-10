import React, { useState } from 'react';
import { 
  Users, 
  Search, 
  Filter, 
  Send, 
  Eye, 
  CheckCircle2, 
  Clock, 
  Pill, 
  Utensils, 
  Calendar, 
  AlertTriangle, 
  X,
  FileText,
  Phone,
  User
} from 'lucide-react';

export default function PatientRecords({ 
  patients = [], 
  onSendWhatsApp,
  onViewSummary 
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('ALL');
  const [selectedPatientModal, setSelectedPatientModal] = useState(null);

  const getPatientName = (p) => p.name || p.patientName || 'Patient';
  const getPatientId = (p) => p.id || p.patientId || '';
  const getPatientDiag = (p) => p.diagnosis || 'Clinical Diagnosis';
  const getPatientPhone = (p) => p.phone || p.phoneNumber || p.whatsappNumber || '';

  const filteredPatients = patients.filter(p => {
    const pName = getPatientName(p).toLowerCase();
    const pId = getPatientId(p).toLowerCase();
    const pDiag = getPatientDiag(p).toLowerCase();
    const q = searchQuery.toLowerCase();

    const matchesSearch = pName.includes(q) || pId.includes(q) || pDiag.includes(q);
    if (!matchesSearch) return false;

    if (filterStatus === 'SENT') {
      return (p.whatsappStatus || '').includes('Sent');
    }
    if (filterStatus === 'PENDING') {
      return !(p.whatsappStatus || '').includes('Sent');
    }
    return true;
  });

  const handleOpenPatientModal = (patient) => {
    setSelectedPatientModal(patient);
  };

  const handleCloseModal = () => {
    setSelectedPatientModal(null);
  };

  return (
    <div className="patient-records-root">
      {/* 1. Header with Required Section Title */}
      <div className="section-header-row">
        <div>
          <div className="section-pre-badge">
            <Users className="w-4 h-4 text-teal-600" />
            <span>ELECTRONIC HEALTH ARCHIVE</span>
          </div>
          <h1 className="section-main-heading">PATIENT RECORDS</h1>
          <p className="section-sub-text">
            Searchable registry of all discharged patients with extracted clinical parameters and WhatsApp transmission logs.
          </p>
        </div>
      </div>

      {/* 2. Search and Filter Bar */}
      <div className="records-control-bar">
        <div className="search-box-wrap">
          <Search className="w-4 h-4 text-slate-400" />
          <input
            type="text"
            className="search-input"
            placeholder="Search by Patient Name, ID, or Diagnosis..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="filter-pill-group">
          <button
            onClick={() => setFilterStatus('ALL')}
            className={`filter-btn ${filterStatus === 'ALL' ? 'active' : ''}`}
          >
            All Patients ({patients.length})
          </button>
          <button
            onClick={() => setFilterStatus('SENT')}
            className={`filter-btn ${filterStatus === 'SENT' ? 'active' : ''}`}
          >
            ✓ Sent ({patients.filter(p => p.whatsappStatus?.includes('Sent')).length})
          </button>
          <button
            onClick={() => setFilterStatus('PENDING')}
            className={`filter-btn ${filterStatus === 'PENDING' ? 'active' : ''}`}
          >
            Pending Send ({patients.filter(p => !p.whatsappStatus?.includes('Sent')).length})
          </button>
        </div>
      </div>

      {/* 3. Searchable Patient Records Table */}
      <div className="records-table-card">
        <div className="table-responsive">
          <table className="patient-records-table">
            <thead>
              <tr>
                <th>Patient ID</th>
                <th>Patient Name</th>
                <th>Disease</th>
                <th>Discharge Date</th>
                <th>Guidance Status</th>
                <th>WhatsApp Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredPatients.length === 0 ? (
                <tr>
                  <td colSpan="7" className="text-center py-8 text-slate-400">
                    No matching patient records found.
                  </td>
                </tr>
              ) : (
                filteredPatients.map((p) => {
                  const isSent = (p.whatsappStatus || '').includes('Sent');
                  const pId = getPatientId(p);
                  const pName = getPatientName(p);
                  const pPhone = getPatientPhone(p);
                  const pDiag = getPatientDiag(p);
                  return (
                    <tr 
                      key={pId || p.id}
                      onClick={() => handleOpenPatientModal(p)}
                      className="cursor-pointer hover:bg-slate-50 transition-colors"
                    >
                      <td className="font-mono text-teal-800 font-semibold">{pId}</td>
                      <td>
                        <div className="font-semibold text-slate-900">{pName}</div>
                        <div className="text-xs text-slate-400 font-mono">{pPhone} &bull; {p.age || '45'} Yrs ({p.gender?.charAt(0) || 'M'})</div>
                      </td>
                      <td>
                        <span className="disease-tag">{pDiag}</span>
                      </td>
                      <td className="text-slate-600 text-sm">{p.dischargeDate || 'Recent'}</td>
                      <td>
                        <span className={`status-pill-small ${(p.guidanceStatus || 'Ready to Send') === 'Ready to Send' ? 'ready' : 'complete'}`}>
                          {p.guidanceStatus || 'Ready to Send'}
                        </span>
                      </td>
                      <td>
                        {isSent ? (
                          <span className="status-badge sent">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>✓ Sent on WhatsApp</span>
                          </span>
                        ) : (
                          <span className="status-badge ready">
                            <Clock className="w-3.5 h-3.5" />
                            <span>Pending Send</span>
                          </span>
                        )}
                      </td>
                      <td>
                        <div className="table-actions-group" onClick={(e) => e.stopPropagation()}>
                          <button
                            onClick={() => onSendWhatsApp(p)}
                            className="btn-sm-action whatsapp"
                            title="Open WhatsApp Guidance Sender"
                          >
                            <Send className="w-3.5 h-3.5" />
                            <span>{isSent ? 'Re-send' : 'Send'}</span>
                          </button>
                          <button
                            onClick={() => handleOpenPatientModal(p)}
                            className="btn-sm-action view"
                            title="Inspect Complete Discharge Details"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            <span>Details</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* 4. Complete Extracted Discharge Information Modal */}
      {selectedPatientModal && (
        <div className="modal-backdrop" onClick={handleCloseModal}>
          <div className="patient-detail-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-top-bar">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-teal-600" />
                <h2 className="modal-title">Extracted Discharge Summary Details</h2>
              </div>
              <button onClick={handleCloseModal} className="btn-close-modal">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="modal-content-scroll">
              {/* Header Info Banner */}
              <div className="patient-card-banner">
                <div>
                  <h3 className="patient-banner-name">{getPatientName(selectedPatientModal)}</h3>
                  <div className="patient-banner-meta">
                    <span>ID: {getPatientId(selectedPatientModal)}</span> &bull; 
                    <span>{selectedPatientModal.age || '45'} Yrs, {selectedPatientModal.gender || 'Patient'}</span> &bull; 
                    <span>WhatsApp: {getPatientPhone(selectedPatientModal)}</span>
                  </div>
                </div>
                <div className="banner-status-box">
                  <span className="text-xs uppercase tracking-wider text-slate-400">Diagnosis</span>
                  <div className="font-semibold text-teal-900">{getPatientDiag(selectedPatientModal)}</div>
                </div>
              </div>

              {/* Hospital Metadata */}
              <div className="grid-2-col mb-4">
                <div className="info-box">
                  <span className="info-label">Attending Physician:</span>
                  <span className="info-value">{selectedPatientModal.doctor || selectedPatientModal.doctorName || 'Attending Physician'}</span>
                </div>
                <div className="info-box">
                  <span className="info-label">Hospital:</span>
                  <span className="info-value">{selectedPatientModal.hospital || selectedPatientModal.hospitalName || 'MediGuid Hospital'}</span>
                </div>
                <div className="info-box">
                  <span className="info-label">Admission Date:</span>
                  <span className="info-value">{selectedPatientModal.admissionDate || 'N/A'}</span>
                </div>
                <div className="info-box">
                  <span className="info-label">Discharge Date:</span>
                  <span className="info-value">{selectedPatientModal.dischargeDate || 'N/A'}</span>
                </div>
              </div>

              {/* Prescribed Medications */}
              <div className="modal-section-card">
                <div className="modal-section-title">
                  <Pill className="w-4 h-4 text-indigo-600" />
                  <span>Prescribed Medications ({selectedPatientModal.medicines?.length || 0})</span>
                </div>
                <div className="modal-meds-list">
                  {selectedPatientModal.medicines?.map((m, idx) => (
                    <div key={idx} className="modal-med-row">
                      <div className="font-semibold text-slate-800">{m.name || m.medicineName}</div>
                      <div className="text-sm text-slate-600">
                        {m.dosage} &bull; {m.frequency} &bull; {m.foodRelation || m.beforeOrAfterFood || 'After food'} (Duration: {m.duration || '30 Days'})
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Food & Lifestyle Advice */}
              <div className="modal-section-card">
                <div className="modal-section-title">
                  <Utensils className="w-4 h-4 text-emerald-600" />
                  <span>Food & Dietary Instructions</span>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {selectedPatientModal.foodInstructions || selectedPatientModal.dietInstructions || 'Follow a balanced nutritious diet as advised.'}
                </p>
              </div>

              {/* Daily Care & Activity */}
              <div className="modal-section-card">
                <div className="modal-section-title">
                  <Calendar className="w-4 h-4 text-blue-600" />
                  <span>Daily Care & Next Follow-Up</span>
                </div>
                <p className="text-sm text-slate-700 mb-2">
                  {selectedPatientModal.dailyCare}
                </p>
                <div className="followup-alert-chip">
                  Scheduled Hospital Review: <strong>{selectedPatientModal.followUpDate}</strong>
                </div>
              </div>

              {/* Emergency Instructions */}
              <div className="modal-section-card emergency-border">
                <div className="modal-section-title text-rose-700">
                  <AlertTriangle className="w-4 h-4 text-rose-600" />
                  <span>Emergency Signs & Action</span>
                </div>
                <p className="text-sm text-rose-900 font-medium">
                  {selectedPatientModal.warningSigns}
                </p>
              </div>
            </div>

            {/* Modal Bottom Actions */}
            <div className="modal-bottom-bar">
              <button
                type="button"
                onClick={handleCloseModal}
                className="btn-modal-cancel"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  handleCloseModal();
                  onSendWhatsApp(selectedPatientModal);
                }}
                className="btn-modal-send"
              >
                <Send className="w-4 h-4" />
                <span>Send WhatsApp Guidance</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
