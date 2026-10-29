import React, { useState } from 'react';
import { Sparkles, MessageSquare, Phone, Mail, ArrowRight, Check, CheckCircle2, Calculator, Send, Zap } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sounds } from '../utils/soundEffects';

export default function CustomBuildSection() {
  const [projectType, setProjectType] = useState('nextjs');
  const [selectedFeatures, setSelectedFeatures] = useState(['auth', 'db', 'responsive']);
  const [timelineSpeed, setTimelineSpeed] = useState('standard');
  const [copiedLink, setCopiedLink] = useState(false);

  const projectTypes = [
    { id: 'nextjs', title: 'Next.js 15 Full-Stack App', desc: 'App Router, Server Components, SSR, & Cloud Database' },
    { id: 'ai-system', title: 'AI Agent & RAG/MCP', desc: 'Private LLM, Vector Search, & Automated Autonomous Tooling' },
    { id: 'pos-billing', title: 'Next.js POS & Billing Engine', desc: 'Real-time billing, offline sync & thermal receipt printing' },
    { id: 'store-automation', title: 'Retail & Media Automation', desc: 'Voice announcements, video generation & playlist sync' },
    { id: 'erp-crm', title: 'Enterprise Next.js ERP / CRM', desc: 'Tailored lead tracking, GST invoices, and team workflows' }
  ];

  const featureOptions = [
    { id: 'auth', label: 'User Auth & Role Management (NextAuth / RBAC)' },
    { id: 'db', label: 'Scalable MongoDB / PostgreSQL Architecture' },
    { id: 'payments', label: 'Payment Gateway & Automated Invoicing' },
    { id: 'realtime', label: 'Real-time WebSockets & Push Notifications' },
    { id: 'ai-tools', label: 'Custom AI Copilot / LLM Function Calling' },
    { id: 'threejs', label: '3D Interactive Graphics & Animation (Three.js)' },
    { id: 'offline', label: 'Offline-First Data Resilience & Caching' },
    { id: 'responsive', label: 'Premium Mobile & Desktop UI/UX Design' }
  ];

  const toggleFeature = (id) => {
    sounds.playClick();
    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter(f => f !== id));
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  const currentType = projectTypes.find(p => p.id === projectType)?.title || 'Custom Next.js Software';
  const featureNames = selectedFeatures.map(f => featureOptions.find(o => o.id === f)?.label).filter(Boolean);
  
  const inquiryText = `Hi Rishwan, I saw your portfolio and would like to build a ${currentType}. Key features needed: ${featureNames.join(', ')}. Speed: ${timelineSpeed}. Let's discuss scope and timeline!`;

  const whatsappUrl = `https://wa.me/917994776519?text=${encodeURIComponent(inquiryText)}`;
  const emailUrl = `mailto:rishwan063@gmail.com?subject=${encodeURIComponent(`Project Inquiry: ${currentType}`)}&body=${encodeURIComponent(inquiryText)}`;

  const handleCopyScope = () => {
    sounds.playClick();
    navigator.clipboard.writeText(inquiryText);
    setCopiedLink(true);
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#38bdf8', '#34d399', '#ffffff']
    });
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <section id="custom-build" className="section-spacer" style={{ background: 'linear-gradient(180deg, var(--bg-primary) 0%, #0d121c 100%)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ maxWidth: '720px', marginBottom: '32px' }}>
          <div className="section-tag">Custom Development Services</div>
          <h2 className="section-title">
            Custom Build Your Next <br />
            <span className="gradient-text">Next.js App, Platform, or AI System</span>
          </h2>
          <p className="section-subtitle">
            Looking for a dedicated software engineer to build your custom Next.js web application, retail automation, POS, or intelligent AI integration? Configure your blueprint below for instant scoping.
          </p>
        </div>

        {/* Interactive Scope Builder */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '24px',
            alignItems: 'start'
          }}
          className="custom-build-grid"
        >
          {/* Left Column: Interactive Configuration */}
          <div className="glass-panel" style={{ padding: 'clamp(18px, 4vw, 32px)', borderRadius: 'var(--radius-lg)' }}>
            {/* Step 1: Select Type */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'rgba(56, 189, 248, 0.2)', color: 'var(--accent-cyan)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.74rem', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>1</span>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff' }}>
                  Select Project Architecture
                </h3>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '8px' }}>
                {projectTypes.map((type) => {
                  const isSelected = projectType === type.id;
                  return (
                    <button
                      key={type.id}
                      onClick={() => {
                        setProjectType(type.id);
                        sounds.playToggle();
                      }}
                      style={{
                        padding: '10px 12px',
                        borderRadius: 'var(--radius-md)',
                        textAlign: 'left',
                        background: isSelected ? 'rgba(56, 189, 248, 0.12)' : 'rgba(255, 255, 255, 0.02)',
                        border: isSelected ? '1px solid var(--accent-cyan)' : '1px solid var(--border-subtle)',
                        boxShadow: isSelected ? '0 0 15px rgba(56, 189, 248, 0.15)' : 'none',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <div style={{ fontWeight: 600, fontSize: '0.86rem', color: isSelected ? '#ffffff' : 'var(--text-main)', marginBottom: '3px' }}>
                        {type.title}
                      </div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', lineHeight: 1.35 }}>
                        {type.desc}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Choose Features */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'rgba(56, 189, 248, 0.2)', color: 'var(--accent-cyan)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.74rem', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>2</span>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff' }}>
                  Select Key Functional Requirements
                </h3>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '8px' }}>
                {featureOptions.map((feat) => {
                  const isChecked = selectedFeatures.includes(feat.id);
                  return (
                    <button
                      key={feat.id}
                      onClick={() => toggleFeature(feat.id)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '10px 12px',
                        borderRadius: 'var(--radius-sm)',
                        background: isChecked ? 'rgba(56, 189, 248, 0.08)' : 'rgba(255, 255, 255, 0.02)',
                        border: isChecked ? '1px solid rgba(56, 189, 248, 0.3)' : '1px solid rgba(255, 255, 255, 0.05)',
                        textAlign: 'left',
                        cursor: 'pointer',
                        transition: 'all 0.18s ease'
                      }}
                    >
                      <div 
                        style={{
                          width: '18px',
                          height: '18px',
                          borderRadius: '4px',
                          border: isChecked ? '1px solid var(--accent-cyan)' : '1px solid var(--text-dim)',
                          background: isChecked ? 'var(--accent-cyan)' : 'transparent',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#090b10',
                          flexShrink: 0
                        }}
                      >
                        {isChecked && <Check size={13} strokeWidth={3} />}
                      </div>
                      <span style={{ fontSize: '0.8rem', color: isChecked ? '#ffffff' : 'var(--text-secondary)' }}>
                        {feat.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Deployment Pace */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'rgba(56, 189, 248, 0.2)', color: 'var(--accent-cyan)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.74rem', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>3</span>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff' }}>
                  Target Delivery Timeline
                </h3>
              </div>

              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {[
                  { id: 'rapid', label: 'Rapid Sprint (1-2 Wks)', note: 'Fast Launch MVP' },
                  { id: 'standard', label: 'Standard (3-5 Wks)', note: 'Full Production Build' },
                  { id: 'enterprise', label: 'Enterprise (6+ Wks)', note: 'Comprehensive Suite' }
                ].map(speed => (
                  <button
                    key={speed.id}
                    onClick={() => {
                      setTimelineSpeed(speed.id);
                      sounds.playClick();
                    }}
                    style={{
                      padding: '8px 14px',
                      borderRadius: 'var(--radius-md)',
                      background: timelineSpeed === speed.id ? 'rgba(56, 189, 248, 0.12)' : 'rgba(255, 255, 255, 0.02)',
                      border: timelineSpeed === speed.id ? '1px solid var(--accent-cyan)' : '1px solid var(--border-subtle)',
                      textAlign: 'left',
                      cursor: 'pointer',
                      flex: '1 1 120px'
                    }}
                  >
                    <div style={{ fontSize: '0.82rem', fontWeight: 600, color: timelineSpeed === speed.id ? '#ffffff' : 'var(--text-main)' }}>
                      {speed.label}
                    </div>
                    <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>
                      {speed.note}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Live Scope Summary & Instant Connect */}
          <div 
            className="glass-panel blueprint-box"
            style={{
              padding: 'clamp(20px, 4vw, 32px)',
              borderRadius: 'var(--radius-lg)',
              background: 'linear-gradient(145deg, #131926 0%, #0c1018 100%)',
              border: '1px solid rgba(56, 189, 248, 0.25)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Calculator size={18} style={{ color: 'var(--accent-cyan)' }} />
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff' }}>
                  Project Blueprint
                </h3>
              </div>
              <span className="pulse-dot" />
            </div>

            {/* Scope Summary Card */}
            <div 
              style={{
                padding: '14px',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(0, 0, 0, 0.3)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                marginBottom: '18px'
              }}
            >
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '3px' }}>
                ARCHITECTURE SELECTED:
              </div>
              <div style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--accent-cyan)', marginBottom: '10px' }}>
                {currentType}
              </div>

              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '4px' }}>
                KEY MODULES ({selectedFeatures.length}):
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '3px', fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                {featureNames.slice(0, 4).map((f, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ color: 'var(--accent-cyan)' }}>•</span> {f}
                  </li>
                ))}
                {featureNames.length > 4 && (
                  <li style={{ color: 'var(--text-muted)', fontStyle: 'italic' }}>
                    + {featureNames.length - 4} additional modules
                  </li>
                )}
              </ul>
            </div>

            {/* Direct Connect Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '16px' }}>
              {/* WhatsApp CTA */}
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sounds.playClick()}
                className="btn-primary"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
                  boxShadow: '0 4px 18px rgba(5, 150, 105, 0.35)',
                  fontSize: '0.88rem'
                }}
              >
                <MessageSquare size={16} />
                <span>Launch Proposal on WhatsApp</span>
              </a>

              {/* Direct Email Proposal */}
              <a 
                href={emailUrl}
                onClick={() => sounds.playClick()}
                className="btn-secondary"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  fontSize: '0.88rem'
                }}
              >
                <Mail size={16} style={{ color: 'var(--accent-cyan)' }} />
                <span>Send Scope to rishwan063@gmail.com</span>
              </a>

              {/* Copy Inquiry Text */}
              <button
                onClick={handleCopyScope}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '10px',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid var(--border-subtle)',
                  color: copiedLink ? '#34d399' : 'var(--text-muted)',
                  fontSize: '0.78rem',
                  fontFamily: 'var(--font-mono)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {copiedLink ? <Check size={14} /> : <Sparkles size={14} />}
                <span>{copiedLink ? 'Blueprint Copied!' : 'Copy Formatted Scope'}</span>
              </button>
            </div>

            {/* Direct Call Quick Bar */}
            <div style={{ textAlign: 'center', borderTop: '1px solid var(--border-subtle)', paddingTop: '14px' }}>
              <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', marginBottom: '3px' }}>
                Prefer an immediate phone conversation?
              </div>
              <a 
                href="tel:7994776519" 
                onClick={() => sounds.playClick()}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.92rem',
                  fontWeight: 700,
                  color: '#ffffff'
                }}
              >
                <Phone size={14} style={{ color: 'var(--accent-cyan)' }} />
                <span>+91 7994776519</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 901px) {
          .blueprint-box {
            position: sticky;
            top: 90px;
          }
        }
        @media (max-width: 900px) {
          .custom-build-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
