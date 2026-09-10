import React, { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage';
import PortalLogin from './components/PortalLogin';
import PortalNavbar from './components/PortalNavbar';
import DashboardOverview from './components/DashboardOverview';
import UploadDischargeSummary from './components/UploadDischargeSummary';
import ExtractedInfoReview from './components/ExtractedInfoReview';
import GeneratedGuidanceView from './components/GeneratedGuidanceView';
import WhatsAppGuidance from './components/WhatsAppGuidance';
import PatientRecords from './components/PatientRecords';
import DischargeHistory from './components/DischargeHistory';
import StaffAIAssistant from './components/StaffAIAssistant';
import { INITIAL_PATIENTS } from './data/hospitalData';
import { fetchPatients } from './services/api';
import confetti from 'canvas-confetti';

export default function App() {
  // Navigation: 'landing' | 'login' | 'dashboard'
  const [currentView, setCurrentView] = useState('landing');
  
  // Dashboard Tabs: 'overview' | 'upload' | 'extracted' | 'guidance' | 'whatsapp' | 'records' | 'history' | 'assistant'
  const [activeTab, setActiveTab] = useState('overview');

  // Hospital staff authentication state
  const [staff, setStaff] = useState({
    staffName: 'Dr. R. K. Sharma',
    hospital: 'MediGuid Central Hospital'
  });

  // Patient database state
  const [patients, setPatients] = useState(() => {
    try {
      const saved = localStorage.getItem('mediguid_patients');
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return INITIAL_PATIENTS;
  });

  // Load from backend SQLite database on mount
  useEffect(() => {
    let mounted = true;
    fetchPatients()
      .then(dbPatients => {
        if (mounted && Array.isArray(dbPatients) && dbPatients.length > 0) {
          const normalized = dbPatients.map(p => ({
            ...p,
            id: p.patientId,
            name: p.patientName,
            phone: p.whatsappNumber || p.phoneNumber,
            doctor: p.doctorName,
            hospital: p.hospitalName,
            foodInstructions: p.dietInstructions,
            dailyCare: p.dischargeInstructions
          }));
          setPatients(normalized);
        }
      })
      .catch(err => {
        console.warn('Backend API not reachable, using local storage cache:', err);
      });
    return () => { mounted = false; };
  }, []);

  // Current patient in focus
  const [extractedPatient, setExtractedPatient] = useState(null);
  const [activePatient, setActivePatient] = useState(patients[0]);
  const [toastMessage, setToastMessage] = useState(null);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('mediguid_patients', JSON.stringify(patients));
    } catch (e) {}
  }, [patients]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  // Flow Handlers
  const handleEnterPortal = () => {
    setCurrentView('login');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLoginSuccess = (staffData) => {
    setStaff(staffData);
    setCurrentView('dashboard');
    setActiveTab('overview');
    showToast(`Logged in successfully as ${staffData.staffName}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogout = () => {
    setCurrentView('landing');
    setActiveTab('overview');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // OCR Extraction Completion
  const handleExtractionComplete = (extractedData) => {
    setExtractedPatient(extractedData);
    setActiveTab('extracted');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Confirm and create patient record (Auto-dispatches WhatsApp Bot)
  const handleConfirmPatientRecord = (newPatient) => {
    const botActivePatient = {
      ...newPatient,
      whatsappStatus: '✓ Sent on WhatsApp',
      guidanceStatus: 'Bot Active & Sent'
    };

    setPatients(prev => {
      const existingIdx = prev.findIndex(p => p.id === botActivePatient.id);
      if (existingIdx >= 0) {
        const updated = [...prev];
        updated[existingIdx] = botActivePatient;
        return updated;
      }
      return [botActivePatient, ...prev];
    });

    setActivePatient(botActivePatient);
    setActiveTab('whatsapp');
    try {
      confetti({ particleCount: 60, spread: 70, origin: { y: 0.6 } });
    } catch (e) {}
    showToast(`Registered ${botActivePatient.name}! WhatsApp Bot auto-dispatched & active.`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Guidance proceed to WhatsApp
  const handleProceedToWhatsApp = (patient) => {
    setActivePatient(patient);
    setActiveTab('whatsapp');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // WhatsApp Guidance Sent
  const handleWhatsAppSendSuccess = (patientId, categoryId) => {
    setPatients(prev => prev.map(p => {
      if (p.id === patientId) {
        return {
          ...p,
          guidanceStatus: "Guidance Sent",
          whatsappStatus: "✓ Sent on WhatsApp",
          lastSentDate: new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })
        };
      }
      return p;
    }));

    try {
      confetti({ particleCount: 70, spread: 70, origin: { y: 0.5 } });
    } catch (e) {}
    showToast(`✓ Guidance Sent Successfully on WhatsApp to ${activePatient?.name}!`);
  };

  // Navigation from Patient Records or Dashboard Table
  const handleSelectPatient = (patient, targetTab) => {
    setActivePatient(patient);
    setActiveTab(targetTab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Pending count calculation
  const pendingCount = patients.filter(p => p.guidanceStatus === 'Ready to Send').length;

  return (
    <div className="mediguid-app-root">
      {/* Toast Notification Banner */}
      {toastMessage && (
        <div className="global-toast-banner" role="alert">
          <div className="toast-dot"></div>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* VIEW 1: Landing Page */}
      {currentView === 'landing' && (
        <LandingPage onEnterPortal={handleEnterPortal} />
      )}

      {/* VIEW 2: Portal Login */}
      {currentView === 'login' && (
        <PortalLogin 
          onLoginSuccess={handleLoginSuccess}
          onBackToHome={() => setCurrentView('landing')}
        />
      )}

      {/* VIEW 3: Hospital Portal Workstation Dashboard */}
      {currentView === 'dashboard' && (
        <div className="portal-workstation-layout">
          <PortalNavbar 
            activeTab={activeTab}
            onSelectTab={setActiveTab}
            onLogout={handleLogout}
            pendingCount={pendingCount}
            staff={staff}
          />

          <main className="workstation-main-content">
            <div className="workstation-container">
              {/* Tab 1: Dashboard Overview */}
              {activeTab === 'overview' && (
                <DashboardOverview 
                  patients={patients}
                  onNavigateTab={setActiveTab}
                  onSelectPatient={handleSelectPatient}
                />
              )}

              {/* Tab 2: Upload Discharge Summary */}
              {activeTab === 'upload' && (
                <UploadDischargeSummary 
                  onExtractionComplete={handleExtractionComplete}
                />
              )}

              {/* Tab 3: Extracted Information Confirmation */}
              {activeTab === 'extracted' && (
                <ExtractedInfoReview 
                  extractedData={extractedPatient || patients[0]}
                  onConfirmAndCreate={handleConfirmPatientRecord}
                  onBackToUpload={() => setActiveTab('upload')}
                />
              )}

              {/* Tab 4: Automatic Guidance Generation */}
              {activeTab === 'guidance' && (
                <GeneratedGuidanceView 
                  patient={activePatient}
                  onProceedToWhatsApp={handleProceedToWhatsApp}
                />
              )}

              {/* Tab 5: WhatsApp Patient Guidance */}
              {activeTab === 'whatsapp' && (
                <WhatsAppGuidance 
                  patient={activePatient}
                  onSendSuccess={handleWhatsAppSendSuccess}
                  allPatients={patients}
                  onSwitchPatient={setActivePatient}
                />
              )}

              {/* Tab 6: Patient Records */}
              {activeTab === 'records' && (
                <PatientRecords 
                  patients={patients}
                  onSendWhatsApp={(p) => handleSelectPatient(p, 'whatsapp')}
                  onViewSummary={(p) => handleSelectPatient(p, 'records')}
                />
              )}

              {/* Tab 7: Discharge Summary History */}
              {activeTab === 'history' && (
                <DischargeHistory 
                  patients={patients}
                  onViewPatient={(p) => handleSelectPatient(p, 'records')}
                />
              )}

              {/* Tab 8: Staff AI Assistant */}
              {activeTab === 'assistant' && (
                <StaffAIAssistant />
              )}
            </div>
          </main>
        </div>
      )}
    </div>
  );
}
