import React from 'react';
import { Pill, Apple, Footprints, AlertTriangle, CheckCircle } from 'lucide-react';

export default function SolutionSection() {
  const pillars = [
    {
      icon: <Pill size={28} color="#0D9488" />,
      bg: "#F0FDFA",
      border: "#99F6E4",
      title: "💊 Medicine",
      subtitle: "When and how to take it",
      description: "Visual time slots (Morning, Afternoon, Night) with bold pill counts. Patients never mix up morning tablets with night sedatives."
    },
    {
      icon: <Apple size={28} color="#16A34A" />,
      bg: "#F0FDF4",
      border: "#BBF7D0",
      title: "🍎 Food",
      subtitle: "What to eat or avoid",
      description: "Color-coded green checkmarks for healing foods and prominent red warnings for dangerous items (like excess salt or sugar)."
    },
    {
      icon: <Footprints size={28} color="#0284C7" />,
      bg: "#F0F9FF",
      border: "#BAE6FD",
      title: "🚶 Activity",
      subtitle: "What the patient should do",
      description: "Simple, safe physical motion targets like walking minutes or posture guidelines that speed up recovery without risking injury."
    },
    {
      icon: <AlertTriangle size={28} color="#E11D48" />,
      bg: "#FFF1F2",
      border: "#FECDD3",
      title: "⚠️ Warning",
      subtitle: "When to seek medical help",
      description: "Clear red-flag symptoms (chest pain, breathlessness) paired with a direct hospital emergency phone number that family can dial instantly."
    }
  ];

  return (
    <section className="solution-section" id="solution">
      <div className="solution-container">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>
          <span className="section-tag">The Human-Centered Solution</span>
          <h2 className="section-heading">
            CareCard: Clarity at a Glance
          </h2>
          <p className="section-subtext" style={{ margin: '0 auto' }}>
            CareCard converts important medical instructions into simple language, icons and easy-to-follow actions.
          </p>
        </div>

        {/* 4 Feature Pillars */}
        <div className="solution-pillars-grid">
          {pillars.map((p, idx) => (
            <div 
              key={idx} 
              className="pillar-card"
              style={{ borderColor: p.border }}
            >
              <div 
                className="pillar-icon-box"
                style={{ background: p.bg }}
              >
                {p.icon}
              </div>
              <div>
                <h3 className="pillar-title">{p.title}</h3>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0D9488', marginBottom: '8px' }}>
                  {p.subtitle}
                </div>
                <p className="pillar-desc">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
