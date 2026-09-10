import React from 'react';
import { 
  Users, 
  UserPlus, 
  FileCheck2, 
  MessageSquareCheck, 
  Clock, 
  UploadCloud, 
  ArrowRight, 
  ScanLine, 
  Sparkles, 
  ShieldAlert, 
  CheckCircle2, 
  ChevronRight,
  Send,
  Eye
} from 'lucide-react';

import { fetchDashboardStats } from '../services/api';

export default function DashboardOverview({ 
  patients = [], 
  onNavigateTab, 
  onSelectPatient 
}) {
  const [stats, setStats] = React.useState(null);

  React.useEffect(() => {
    let mounted = true;
    fetchDashboardStats()
      .then(data => {
        if (mounted && data) setStats(data);
      })
      .catch(err => console.warn('Could not load server dashboard stats:', err));
    return () => { mounted = false; };
  }, [patients]);

  // Compute live statistics based on real patient records & DB queries
  const totalPatients = stats ? stats.totalPatients : patients.length;
  const newDischarges = stats ? stats.newDischargesToday : 0;
  const summariesProcessed = stats ? stats.summariesProcessed : patients.length;
  const guidanceSentCount = stats ? stats.guidanceSent : patients.filter(p => p.whatsappStatus?.includes('Sent')).length;
  const pendingGuidanceCount = stats ? stats.pendingGuidance : patients.filter(p => p.guidanceStatus === 'Ready to Send' || p.whatsappStatus?.includes('Pending')).length;

  const kpis = [
    {
      title: 'Total Patients',
      value: totalPatients,
      subtitle: 'Registered in MediGuid Database',
      icon: Users,
      color: 'blue'
    },
    {
      title: 'New Discharges',
      value: newDischarges,
      subtitle: 'Discharged in last 24h',
      icon: UserPlus,
      color: 'teal'
    },
    {
      title: 'Summaries Processed',
      value: summariesProcessed,
      subtitle: 'Discharge records ingested',
      icon: FileCheck2,
      color: 'indigo'
    },
    {
      title: 'Guidance Sent',
      value: guidanceSentCount,
      subtitle: 'Delivered via WhatsApp',
      icon: MessageSquareCheck,
      color: 'emerald'
    },
    {
      title: 'Pending Guidance',
      value: pendingGuidanceCount,
      subtitle: 'Awaiting WhatsApp dispatch',
      icon: Clock,
      color: 'amber',
      alert: pendingGuidanceCount > 0
    }
  ];

  return (
    <div className="dashboard-overview-root">
      {/* 1. Header with Hospital Welcome & Quick CTA */}
      <div className="dashboard-header-banner">
        <div>
          <div className="banner-greeting">
            <span>Welcome back, <strong>Dr. R. K. Sharma</strong></span>
            <span className="badge-hospital-status">Central Multi-Specialty</span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-300 shadow-sm" id="dashboardApiStatusBadge">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              API Confirmed & Active
            </span>
          </div>
          <h1 className="dashboard-title">Hospital Discharge & Guidance Dashboard</h1>
          <p className="dashboard-subtitle">
            Upload clinical discharge summaries to automatically extract electronic records and dispatch personalized WhatsApp guidance.
          </p>
        </div>

        <div className="dashboard-header-actions">
          <button 
            onClick={() => onNavigateTab('upload')}
            className="btn-primary-action"
            id="overviewUploadBtn"
          >
            <UploadCloud className="w-5 h-5" />
            <span>Upload Discharge Summary</span>
          </button>
        </div>
      </div>

      {/* 2. Key Performance Indicators (5 Required Metrics) */}
      <div className="kpi-grid">
        {kpis.map((kpi, idx) => {
          const Icon = kpi.icon;
          return (
            <div key={idx} className={`kpi-card kpi-${kpi.color} ${kpi.alert ? 'kpi-alert-pulse' : ''}`}>
              <div className="kpi-card-top">
                <span className="kpi-title">{kpi.title}</span>
                <div className={`kpi-icon-box bg-${kpi.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
              </div>
              <div className="kpi-value">{kpi.value}</div>
              <div className="kpi-subtitle">
                {kpi.subtitle}
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. Core Workflow Visual Pipeline Banner */}
      <div className="pipeline-visual-container">
        <div className="pipeline-header">
          <div className="pipeline-pill">CORE AUTOMATED WORKFLOW</div>
          <h2 className="pipeline-title">Discharge Summary to WhatsApp Pipeline</h2>
        </div>

        <div className="pipeline-nodes-grid">
          <div className="pipeline-node" onClick={() => onNavigateTab('upload')}>
            <div className="node-icon bg-blue-100 text-blue-700">
              <UploadCloud className="w-6 h-6" />
            </div>
            <div className="node-info">
              <div className="node-step">Step 1</div>
              <div className="node-label">Upload Summary</div>
              <div className="node-sub">PDF / Scanned Paper</div>
            </div>
          </div>

          <div className="pipeline-connector">
            <ArrowRight className="w-5 h-5 text-slate-400" />
          </div>

          <div className="pipeline-node" onClick={() => onNavigateTab('upload')}>
            <div className="node-icon bg-indigo-100 text-indigo-700">
              <ScanLine className="w-6 h-6" />
            </div>
            <div className="node-info">
              <div className="node-step">Step 2</div>
              <div className="node-label">AI OCR Extraction</div>
              <div className="node-sub">Meds, Diagnosis, Follow-up</div>
            </div>
          </div>

          <div className="pipeline-connector">
            <ArrowRight className="w-5 h-5 text-slate-400" />
          </div>

          <div className="pipeline-node" onClick={() => onNavigateTab('records')}>
            <div className="node-icon bg-teal-100 text-teal-700">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div className="node-info">
              <div className="node-step">Step 3</div>
              <div className="node-label">Record Created</div>
              <div className="node-sub">Staff Verified & Stored</div>
            </div>
          </div>

          <div className="pipeline-connector">
            <ArrowRight className="w-5 h-5 text-slate-400" />
          </div>

          <div className="pipeline-node highlight" onClick={() => onNavigateTab('whatsapp')}>
            <div className="node-icon bg-emerald-100 text-emerald-700">
              <Send className="w-6 h-6" />
            </div>
            <div className="node-info">
              <div className="node-step">Step 4</div>
              <div className="node-label">WhatsApp Guidance</div>
              <div className="node-sub">Direct to Patient Phone</div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Active Queue & Recent Patients */}
      <div className="dashboard-grid-split">
        {/* Left Column: Recent Discharge Summaries */}
        <div className="dashboard-card">
          <div className="card-header-flex">
            <div>
              <h2 className="card-heading">Recent Discharged Patients</h2>
              <p className="card-subheading">Patients ready for or sent WhatsApp personalized guidance</p>
            </div>
            <button 
              onClick={() => onNavigateTab('records')}
              className="btn-text-action"
            >
              <span>View All Records</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="table-responsive">
            <table className="dashboard-table">
              <thead>
                <tr>
                  <th>Patient</th>
                  <th>Diagnosis</th>
                  <th>Discharge Date</th>
                  <th>WhatsApp Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {patients.slice(0, 4).map((p) => {
                  const isSent = p.whatsappStatus?.includes('Sent');
                  return (
                    <tr key={p.id}>
                      <td>
                        <div className="patient-name-col">
                          <span className="p-name">{p.name}</span>
                          <span className="p-id">{p.id} &bull; {p.phone}</span>
                        </div>
                      </td>
                      <td>
                        <span className="diagnosis-pill">{p.diagnosis}</span>
                      </td>
                      <td>{p.dischargeDate}</td>
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
                        <div className="action-buttons-row">
                          <button
                            onClick={() => onSelectPatient(p, 'whatsapp')}
                            className="btn-table-action whatsapp"
                            title="Open WhatsApp Guidance Sender"
                          >
                            <Send className="w-3.5 h-3.5" />
                            <span>{isSent ? 'Re-send' : 'Send WhatsApp'}</span>
                          </button>
                          <button
                            onClick={() => onSelectPatient(p, 'records')}
                            className="btn-table-action inspect"
                            title="View Extracted Details"
                          >
                            <Eye className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Column: Fast Shortcuts & Assistant Highlights */}
        <div className="dashboard-sidebar-col">
          {/* Quick Upload CTA Card */}
          <div className="shortcut-card upload-shortcut">
            <div className="shortcut-icon-circle bg-teal-500 text-white">
              <UploadCloud className="w-6 h-6" />
            </div>
            <h3 className="shortcut-title">Process New Discharge</h3>
            <p className="shortcut-desc">
              Have a printed or digital discharge sheet? Upload it to extract medications and follow-up guidance in seconds.
            </p>
            <button 
              onClick={() => onNavigateTab('upload')}
              className="btn-shortcut-action"
            >
              <span>Launch OCR Scanner</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* AI Staff Clinical Assistant Card */}
          <div className="shortcut-card ai-shortcut">
            <div className="flex items-center gap-2 mb-2">
              <span className="badge-ai-pill">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Staff AI Tool</span>
              </span>
              <span className="text-xs text-slate-500 font-medium">English | தமிழ்</span>
            </div>
            <h3 className="shortcut-title">Hospital Staff AI Assistant</h3>
            <p className="shortcut-desc">
              Simplify medical terms into patient-friendly explanations, summarize discharge instructions, and translate to Tamil.
            </p>
            <button 
              onClick={() => onNavigateTab('assistant')}
              className="btn-shortcut-ai"
            >
              <span>Consult AI Assistant</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
