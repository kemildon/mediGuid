import React, { useState, useEffect } from 'react';
import { 
  History, 
  FileText, 
  CheckCircle2, 
  Clock, 
  ExternalLink, 
  Eye, 
  ScanLine, 
  Send, 
  Download,
  UploadCloud
} from 'lucide-react';
import { fetchDischargeHistory } from '../services/api';

export default function DischargeHistory({ 
  patients = [], 
  onViewPatient 
}) {
  const [historyRecords, setHistoryRecords] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    fetchDischargeHistory()
      .then(records => {
        if (mounted) {
          setHistoryRecords(records || []);
          setLoading(false);
        }
      })
      .catch(err => {
        console.warn('Could not load discharge history from server:', err);
        if (mounted) setLoading(false);
      });
    return () => { mounted = false; };
  }, [patients]);

  const displayList = historyRecords.length > 0 ? historyRecords : patients;

  return (
    <div className="discharge-history-root">
      {/* 1. Header with Required Title */}
      <div className="section-header-row">
        <div>
          <div className="section-pre-badge">
            <History className="w-4 h-4 text-teal-600" />
            <span>INGESTION AUDIT LOG</span>
          </div>
          <h1 className="section-main-heading">DISCHARGE SUMMARY HISTORY</h1>
          <p className="section-sub-text">
            Audit trail of all previously uploaded clinical discharge summaries, neural OCR recognition states, and WhatsApp dispatch statuses.
          </p>
        </div>
      </div>

      {/* 2. History Table */}
      <div className="history-card-wrap">
        <div className="table-responsive">
          <table className="history-table">
            <thead>
              <tr>
                <th>Patient Name</th>
                <th>Patient ID</th>
                <th>Upload Date</th>
                <th>Processing Status</th>
                <th>Guidance Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {displayList.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center py-10 text-slate-400">
                    No discharge summaries recorded in database yet.
                  </td>
                </tr>
              ) : (
                displayList.map((p, idx) => {
                  const isSent = (p.whatsappStatus || '').includes('Sent');
                  const pName = p.patientName || p.name || 'Patient';
                  const pId = p.patientId || p.id || `MG-PAT-${idx + 1}`;
                  const uploadTime = p.uploadDate ? new Date(p.uploadDate).toLocaleString() : 'Recent';
                  return (
                    <tr key={p.id || idx}>
                      <td>
                        <div className="font-semibold text-slate-800">{pName}</div>
                        <div className="text-xs text-slate-400">{p.diagnosis || p.originalFileName || 'Discharge Document'}</div>
                      </td>
                      <td className="font-mono text-teal-800 font-medium">{pId}</td>
                      <td className="text-sm text-slate-600">
                        {uploadTime}
                      </td>
                      <td>
                        <span className="status-badge complete">
                          <ScanLine className="w-3.5 h-3.5 text-teal-600" />
                          <span>{p.processingStatus || 'OCR Extraction Complete'}</span>
                        </span>
                      </td>
                      <td>
                        {isSent ? (
                          <span className="status-badge sent">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>Sent on WhatsApp</span>
                          </span>
                        ) : (
                          <span className="status-badge ready">
                            <Clock className="w-3.5 h-3.5" />
                            <span>Ready to Send</span>
                          </span>
                        )}
                      </td>
                      <td>
                        <button
                          onClick={() => onViewPatient(p)}
                          className="btn-history-view"
                          title="View Extracted Summary"
                        >
                          <Eye className="w-4 h-4" />
                          <span>View Summary</span>
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
