import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import HowItWorks from './components/HowItWorks';
import CardPreviewer from './components/CardPreviewer';
import AccessibilitySection from './components/AccessibilitySection';
import ProductShowcase from './components/ProductShowcase';
import WorkflowSection from './components/WorkflowSection';
import CardGeneratorModal from './components/CardGeneratorModal';
import Footer from './components/Footer';
import SmartCard from './components/SmartCard';
import { DEFAULT_CARD } from './data/sampleCards';
import confetti from 'canvas-confetti';

export default function App() {
  const [activeCard, setActiveCard] = useState(DEFAULT_CARD);
  const [isGeneratorOpen, setIsGeneratorOpen] = useState(false);

  const handleOpenGenerator = () => {
    setIsGeneratorOpen(true);
  };

  const handleCloseGenerator = () => {
    setIsGeneratorOpen(false);
  };

  const handleSaveCard = (newCardData) => {
    setActiveCard(newCardData);
    // Trigger celebratory confetti for prototype effect
    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {}
  };

  const handleTriggerPrint = () => {
    window.print();
  };

  return (
    <div className="carecard-app-root">
      {/* 1. Header Navigation Bar */}
      <Navbar 
        onOpenGenerator={handleOpenGenerator} 
        onTriggerPrint={handleTriggerPrint} 
      />

      <main>
        {/* 2. Hero Section with Large 3D Card Mockup & Transformation Demo */}
        <Hero 
          cardData={activeCard} 
          onOpenGenerator={handleOpenGenerator}
          onTriggerPrint={handleTriggerPrint}
        />

        {/* 3. The Problem: Complex medical papers vs confused patient */}
        <ProblemSection />

        {/* 4. Our Solution: 4 Pillars (Medicine, Food, Activity, Warning) */}
        <SolutionSection />

        {/* 5. How It Works: 4-Step Horizontal Process with Animated Arrows */}
        <HowItWorks />

        {/* 6. Interactive CareCard Preview Workbench (Flip, Languages, Presets) */}
        <CardPreviewer 
          activeCard={activeCard}
          onSelectPreset={setActiveCard}
          onOpenGenerator={handleOpenGenerator}
          onTriggerPrint={handleTriggerPrint}
        />

        {/* 7. Accessibility: Designed for Everyone (No Phone Required) */}
        <AccessibilitySection 
          onTriggerPrint={handleTriggerPrint}
        />

        {/* 8. Physical Product Showcase on Table */}
        <ProductShowcase />

        {/* 9. Hospital Workflow: Simple 5-Node Linear Handover */}
        <WorkflowSection />
      </main>

      {/* 10. Final CTA & Footer with Medical Disclaimer */}
      <Footer 
        onOpenGenerator={handleOpenGenerator} 
      />

      {/* 11. Interactive CareCard Generator Modal */}
      <CardGeneratorModal 
        isOpen={isGeneratorOpen}
        onClose={handleCloseGenerator}
        currentCard={activeCard}
        onSaveCard={handleSaveCard}
        onTriggerPrint={handleTriggerPrint}
      />

      {/* ==================================================================
          DEDICATED PRINT CONTAINER (Shown ONLY during @media print)
          Prints front and back of the card on standard card/A4 paper
          ================================================================== */}
      <div className="printable-card-wrapper" style={{ display: 'none' }}>
        <div style={{ textAlign: 'center', marginBottom: '20px', paddingBottom: '10px', borderBottom: '2px solid #000' }}>
          <h2 style={{ fontSize: '18pt', fontWeight: 'bold' }}>CareCard Physical Health Card</h2>
          <p style={{ fontSize: '10pt', color: '#555' }}>Cut along dotted borders. Standard Pocket / Laminated Card Format.</p>
        </div>

        <div style={{ marginBottom: '30px' }}>
          <div style={{ fontSize: '11pt', fontWeight: 'bold', marginBottom: '6px' }}>FRONT SIDE (Identification & Condition)</div>
          <SmartCard cardData={activeCard} isPrintMode={true} isFlipped={false} />
        </div>

        <div style={{ pageBreakBefore: 'always', marginTop: '30px' }}>
          <div style={{ fontSize: '11pt', fontWeight: 'bold', marginBottom: '6px' }}>BACK SIDE (Daily Timetable & Instructions)</div>
          <SmartCard cardData={activeCard} isPrintMode={true} isFlipped={true} />
        </div>
      </div>
    </div>
  );
}
