import React from 'react';
import { 
  History, 
  FileText, 
  CheckCircle2, 
  Clock, 
  ExternalLink, 
  Eye, 
  ScanLine,
  Send,
  Download
} from 'lucide-react';

export default function DischargeHistory({ 
  patients = [], 
  onViewPatient 
}) {
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
              {patients.map((p) => {
                const isSent = p.whatsappStatus?.includes('Sent');
                return (
                  <tr key={p.id}>
                    <td>
                      <div className="font-semibold text-slate-800">{p.name}</div>
                      <div className="text-xs text-slate-400">{p.diagnosis}</div>
                    </td>
                    <td className="font-mono text-teal-800 font-medium">{p.id}</td>
                    <td className="text-sm text-slate-600">
                      {p.uploadDate || '08 September 2026, 11:30 AM'}
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
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
