import React from 'react';
import { CreditCard, Printer, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenGenerator, onTriggerPrint }) {
  return (
    <header className="navbar-wrap">
      <div className="navbar-container">
        {/* Brand */}
        <a href="#" className="brand-badge">
          <div className="brand-icon-box">
            <CreditCard size={24} />
          </div>
          <div>
            <div className="brand-title">CareCard</div>
            <div className="brand-tagline">Your Health. Made Simple.</div>
          </div>
        </a>

        {/* Navigation Links */}
        <nav aria-label="Main Navigation">
          <ul className="nav-links">
            <li><a href="#problem" className="nav-link">The Problem</a></li>
            <li><a href="#solution" className="nav-link">Our Solution</a></li>
            <li><a href="#how-it-works" className="nav-link">How It Works</a></li>
            <li><a href="#preview" className="nav-link">Card Preview</a></li>
            <li><a href="#accessibility" className="nav-link">Accessibility</a></li>
            <li><a href="#showcase" className="nav-link">Product Showcase</a></li>
          </ul>
        </nav>

        {/* Action CTAs */}
        <div className="nav-actions">
          <button 
            type="button" 
            className="btn btn-secondary btn-pill-sm no-print"
            onClick={onTriggerPrint}
            title="Print the physical card mockup"
          >
            <Printer size={15} />
            <span>Print Card</span>
          </button>
          <button 
            type="button" 
            className="btn btn-primary btn-pill-sm no-print"
            onClick={onOpenGenerator}
          >
            <Sparkles size={15} />
            <span>Create CareCard</span>
          </button>
        </div>
      </div>
    </header>
  );
}
