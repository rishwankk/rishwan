import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DeveloperBanner from './components/DeveloperBanner';
import Experience from './components/Experience';
import Projects from './components/Projects';
import NextjsShowcase from './components/NextjsShowcase';
import StoreAutomationSimulator from './components/StoreAutomationSimulator';
import SkillsMatrix from './components/SkillsMatrix';
import CustomBuildSection from './components/CustomBuildSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="portfolio-app">
      {/* Top Fixed Header with Sound Feedback Toggle */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* Hero with 3D Core and Profile Showcase */}
        <Hero />

        {/* Developer Workstation & Official Identity Showcase */}
        <DeveloperBanner />

        {/* Experience Timeline */}
        <Experience />

        {/* Next.js & Full-Stack Projects */}
        <Projects />

        {/* Next.js 14/15 Deep Architecture Showcase */}
        <NextjsShowcase />

        {/* Interactive Store Automation, TTS & AI Video Simulator */}
        <StoreAutomationSimulator />

        {/* Technical Competencies Matrix */}
        <SkillsMatrix />

        {/* Custom Build Blueprint & Scope Estimator */}
        <CustomBuildSection />

        {/* Direct Contact & Inquiry Form */}
        <Contact />
      </main>

      {/* Executive Footer */}
      <Footer />
    </div>
  );
}
