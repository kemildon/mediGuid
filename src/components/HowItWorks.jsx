import React from 'react';
import { UploadCloud, Filter, Sparkles, Printer, ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      icon: <UploadCloud size={24} color="#0D9488" />,
      title: "Hospital Uploads Summary",
      desc: "Clinical staff or EHR uploads the patient's official discharge report or consultation summary."
    },
    {
      num: "02",
      icon: <Filter size={24} color="#0284C7" />,
      title: "Key Info Extracted",
      desc: "System identifies vital prescriptions, dietary restrictions, activity targets, and danger signs."
    },
    {
      num: "03",
      icon: <Sparkles size={24} color="#F59E0B" />,
      title: "Medical Info Simplified",
      desc: "Clinical jargon is converted to plain everyday language, visual pictograms, and regional dialects."
    },
    {
      num: "04",
      icon: <Printer size={24} color="#10B981" />,
      title: "CareCard Generated & Printed",
      desc: "A physical laminated card is printed and handed directly to the patient or caregiver at discharge."
    }
  ];

  return (
    <section className="how-it-works-section" id="how-it-works">
      <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>
        <span className="section-tag">Streamlined 4-Step Process</span>
        <h2 className="section-heading">
          How CareCard Works
        </h2>
        <p className="section-subtext" style={{ margin: '0 auto' }}>
          From dense hospital documentation to a physical pocket guide in under 10 seconds.
        </p>
      </div>

      <div className="steps-timeline-row">
        {steps.map((s, idx) => (
          <div key={idx} className="step-card">
            <div className="step-number-tag">
              {s.num}
            </div>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#F8FAFC', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px', border: '1px solid #E2E8F0' }}>
              {s.icon}
            </div>
            <h3 className="step-title">{s.title}</h3>
            <p className="step-desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
