import React from 'react';
import { 
  Building2, 
  LayoutDashboard, 
  UploadCloud, 
  Users, 
  MessageSquare, 
  History, 
  Bot, 
  LogOut, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';

export default function PortalNavbar({ 
  activeTab, 
  onSelectTab, 
  onLogout, 
  pendingCount = 0,
  staff = { staffName: 'Dr. R. K. Sharma', hospital: 'MediGuid Central Hospital' } 
}) {
  const navItems = [
    { id: 'overview', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'upload', label: 'Upload Summary', icon: UploadCloud, badge: 'AI OCR' },
    { id: 'records', label: 'Patient Records', icon: Users },
    { id: 'whatsapp', label: 'WhatsApp Guidance', icon: MessageSquare, count: pendingCount },
    { id: 'history', label: 'Summary History', icon: History },
    { id: 'assistant', label: 'Staff AI Assistant', icon: Bot, highlight: true }
  ];

  return (
    <header className="portal-navbar-root">
      <div className="portal-nav-container">
        {/* Left: Brand Identity */}
        <div className="portal-nav-brand">
          <div className="portal-logo-icon">
            <Building2 className="w-5 h-5 text-white" />
          </div>
          <div className="portal-brand-text">
            <div className="portal-brand-name">
              <span>MediGuid</span> <span className="text-teal-400 font-normal">PORTAL</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="portal-hospital-tag">{staff.hospital}</div>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30" id="portalApiConfirmedBadge" title="Google Gemini AI & WhatsApp Gateway API Confirmed">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                API Confirmed
              </span>
            </div>
          </div>
        </div>

        {/* Center: Navigation Tabs */}
        <nav className="portal-nav-links">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectTab(item.id)}
                className={`portal-nav-btn ${isActive ? 'active' : ''} ${item.highlight ? 'highlight-ai' : ''}`}
                id={`navTab_${item.id}`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
                {item.badge && <span className="nav-badge-ai">{item.badge}</span>}
                {item.count > 0 && <span className="nav-badge-count">{item.count}</span>}
              </button>
            );
          })}
        </nav>

        {/* Right: User Profile & Logout */}
        <div className="portal-nav-right">
          <div className="staff-profile-chip">
            <div className="staff-avatar">
              <span>{staff.staffName?.charAt(0) || 'D'}</span>
            </div>
            <div className="staff-info-col">
              <span className="staff-name">{staff.staffName}</span>
              <span className="staff-role">Chief Medical Officer</span>
            </div>
          </div>

          <button 
            onClick={onLogout}
            className="btn-logout"
            title="Logout and return to Landing Page"
            id="portalLogoutBtn"
          >
            <LogOut className="w-4 h-4" />
            <span className="logout-text">Exit</span>
          </button>
        </div>
      </div>
    </header>
  );
}
