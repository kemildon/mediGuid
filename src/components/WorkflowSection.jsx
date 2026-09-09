import React from 'react';
import { Building2, FileText, Cpu, Printer, UserCheck, ArrowRight } from 'lucide-react';

export default function WorkflowSection() {
  const steps = [
    { title: "Hospital", icon: <Building2 size={24} color="#0D9488" /> },
    { title: "Discharge Summary", icon: <FileText size={24} color="#0284C7" /> },
    { title: "CareCard Generator", icon: <Cpu size={24} color="#F59E0B" /> },
    { title: "Printed Medical Card", icon: <Printer size={24} color="#10B981" /> },
    { title: "Patient", icon: <UserCheck size={24} color="#8B5CF6" /> }
  ];

  return (
    <section className="workflow-section">
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <span className="section-tag">Clinical Integration</span>
        <h2 className="section-heading">
          Seamless Hospital Handover
        </h2>
        <p className="section-subtext" style={{ margin: '0 auto' }}>
          Zero software friction. Clinicians print in under 10 seconds right alongside the standard billing receipt.
        </p>

        {/* Linear Workflow Visual */}
        <div className="workflow-steps-flex">
          {steps.map((s, idx) => (
            <React.Fragment key={idx}>
              <div className="wf-node">
                {s.icon}
                <span>{s.title}</span>
              </div>
              {idx < steps.length - 1 && (
                <div className="wf-arrow">↓</div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
