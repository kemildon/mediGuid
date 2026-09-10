import React, { useState } from 'react';
import { 
  Building2, 
  Lock, 
  User, 
  ShieldCheck, 
  ArrowLeft, 
  LogIn, 
  AlertCircle
} from 'lucide-react';

export default function PortalLogin({ onLoginSuccess, onBackToHome }) {
  const [hospitalId, setHospitalId] = useState('HOSP-ADMIN-01');
  const [password, setPassword] = useState('mediguid2026');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!hospitalId.trim()) {
      setError('Please enter your Hospital ID or Email');
      return;
    }
    if (!password.trim()) {
      setError('Please enter your password');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onLoginSuccess({
        id: hospitalId,
        staffName: 'Dr. R. K. Sharma',
        role: 'Chief Medical Officer / Administrator',
        hospital: 'MediGuid Central Multi-Specialty Hospital'
      });
    }, 600);
  };

  return (
    <div className="portal-login-root">
      <div className="portal-login-container">
        {/* Back to Home CTA */}
        <button 
          onClick={onBackToHome}
          className="btn-back-home"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>

        <div className="login-card">
          {/* Header */}
          <div className="login-header">
            <div className="login-badge-icon">
              <Building2 className="w-8 h-8 text-teal-600" />
            </div>
            <h1 className="login-title">PORTAL LOGIN</h1>
            <p className="login-subtitle">
              Authorized Healthcare Staff & Hospital Management Workstation
            </p>
          </div>

          {error && (
            <div className="login-error-alert">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="hospitalIdInput" className="form-label">
                Hospital ID / Email
              </label>
              <div className="input-with-icon">
                <User className="input-icon w-5 h-5" />
                <input
                  id="hospitalIdInput"
                  type="text"
                  className="form-input"
                  placeholder="e.g. HOSP-ADMIN-01 or staff@hospital.com"
                  value={hospitalId}
                  onChange={(e) => setHospitalId(e.target.value)}
                  autoComplete="username"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="passwordInput" className="form-label">
                Password
              </label>
              <div className="input-with-icon">
                <Lock className="input-icon w-5 h-5" />
                <input
                  id="passwordInput"
                  type="password"
                  className="form-input"
                  placeholder="••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                />
              </div>
            </div>

            <div className="login-form-options">
              <label className="checkbox-label">
                <input type="checkbox" defaultChecked />
                <span>Keep session active on this terminal</span>
              </label>
            </div>

            <button
              type="submit"
              className="btn-login-submit"
              disabled={isLoading}
              id="loginSubmitBtn"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="spinner-sm"></span>
                  <span>Verifying Credentials...</span>
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <LogIn className="w-5 h-5" />
                  <span>LOGIN TO PORTAL</span>
                </span>
              )}
            </button>
          </form>

          {/* Security note */}
          <div className="login-footer-security">
            <ShieldCheck className="w-4 h-4 text-teal-600 inline mr-1.5" />
            <span>MediGuid Security Protocol v2.6 &bull; Strict HIPAA / NABH Compliance</span>
          </div>
        </div>
      </div>
    </div>
  );
}
