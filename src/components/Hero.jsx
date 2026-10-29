import React, { useState } from 'react';
import { ArrowRight, Phone, Mail, Check, Copy, Sparkles, Layers, Cpu, Code2, ExternalLink, Zap } from 'lucide-react';
import ThreeScene from './ThreeScene';
import confetti from 'canvas-confetti';
import { sounds } from '../utils/soundEffects';

export default function Hero() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [photoMode, setPhotoMode] = useState('portrait'); // 'portrait' or 'workspace'

  const handleCopyEmail = () => {
    sounds.playClick();
    navigator.clipboard.writeText('rishwan063@gmail.com');
    setCopiedEmail(true);
    confetti({
      particleCount: 45,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#38bdf8', '#60a5fa', '#ffffff']
    });
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section 
      id="about"
      style={{
        minHeight: '100vh',
        paddingTop: 'clamp(100px, 14vw, 130px)',
        paddingBottom: 'clamp(40px, 8vw, 80px)',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden'
      }}
    >
      {/* Background ambient radial highlight */}
      <div
        style={{
          position: 'absolute',
          top: '15%',
          right: '5%',
          width: 'clamp(280px, 45vw, 520px)',
          height: 'clamp(280px, 45vw, 520px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.09) 0%, rgba(96, 165, 250, 0.02) 50%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '1.15fr 0.85fr',
            gap: 'clamp(28px, 5vw, 48px)',
            alignItems: 'center'
          }}
          className="hero-grid"
        >
          {/* Narrative & Credentials */}
          <div className="hero-content">
            {/* Experience & Status Pill */}
            <div 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 12px',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                marginBottom: '18px',
                maxWidth: '100%'
              }}
            >
              <span className="pulse-dot" />
              <span style={{ fontSize: 'clamp(0.74rem, 2.4vw, 0.82rem)', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)' }}>
                <strong style={{ color: '#ffffff' }}>2.5+ Years</strong> Production Experience • Next.js & AI
              </span>
            </div>

            {/* Main Headline */}
            <h1 
              style={{
                fontSize: 'clamp(2.1rem, 6.2vw, 3.8rem)',
                fontWeight: 800,
                lineHeight: 1.12,
                letterSpacing: '-0.03em',
                marginBottom: '18px'
              }}
            >
              Engineering High-Scale <br />
              <span className="gradient-text">Next.js & Full-Stack</span> <br />
              Autonomous AI Systems.
            </h1>

            {/* Subtitle / Bio */}
            <p 
              style={{
                fontSize: 'clamp(0.95rem, 2.7vw, 1.08rem)',
                lineHeight: 1.65,
                color: 'var(--text-secondary)',
                marginBottom: '24px',
                maxWidth: '590px'
              }}
            >
              Hi, I’m <strong style={{ color: '#ffffff', fontWeight: 600 }}>Rishwan K</strong>. 
              A software engineer with 2.5+ years of production experience currently building enterprise technology at{' '}
              <strong style={{ color: 'var(--accent-cyan)' }}>Centelon Solutions</strong> (and previously at{' '}
              <strong style={{ color: '#cbd5e1' }}>LevelX Learning</strong>). 
              I engineer sub-second web platforms with <strong style={{ color: '#ffffff' }}>Next.js 15 (App Router, RSC, SSR)</strong>, 
              scalable <strong style={{ color: '#ffffff' }}>MERN architectures</strong>, robotic multi-store retail automation, and production{' '}
              <span style={{ color: 'var(--accent-cyan)', fontWeight: 600 }}>LLM, RAG, and MCP</span> pipelines.
            </p>

            {/* Core Capability Chips */}
            <div 
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '6px',
                marginBottom: '28px'
              }}
            >
              <span className="badge-tech"><Zap size={12} style={{ color: '#ffffff' }} /> Next.js 14/15 (App Router, RSC)</span>
              <span className="badge-tech"><Layers size={12} style={{ color: 'var(--accent-cyan)' }} /> MERN Stack (React, Node, Mongo)</span>
              <span className="badge-tech"><Cpu size={12} style={{ color: '#a5b4fc' }} /> LLM & Vector RAG</span>
              <span className="badge-tech"><Sparkles size={12} style={{ color: '#38bdf8' }} /> Model Context Protocol (MCP)</span>
              <span className="badge-tech"><Code2 size={12} style={{ color: '#34d399' }} /> Store & Media Automation</span>
              <span className="badge-tech">POS & ERP Systems</span>
            </div>

            {/* Call To Actions */}
            <div 
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '32px'
              }}
              className="hero-cta-group"
            >
              <a 
                href="#projects" 
                className="btn-primary hero-btn"
                onClick={() => sounds.playClick()}
              >
                <span>Explore Architecture & Projects</span>
                <ArrowRight size={16} />
              </a>

              <a 
                href="#store-automation-demo" 
                className="btn-secondary hero-btn"
                onClick={() => sounds.playClick()}
              >
                <Sparkles size={16} style={{ color: 'var(--accent-cyan)' }} />
                <span>Launch Live Store Simulator</span>
              </a>
            </div>

            {/* Direct Contact Bar - Fully Mobile Responsive */}
            <div 
              className="hero-contact-bar"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '14px',
                padding: '12px 16px',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(16, 21, 30, 0.65)',
                border: '1px solid var(--border-subtle)',
                backdropFilter: 'blur(10px)',
                width: 'fit-content',
                maxWidth: '100%'
              }}
            >
              {/* Phone */}
              <a 
                href="https://wa.me/917994776519?text=Hello%20Rishwan,%20I%20would%20like%20to%20connect%20regarding%20a%20developer%20opportunity%20or%20project." 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => sounds.playClick()}
                className="hero-contact-item phone-item"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '0.86rem',
                  fontWeight: 500,
                  color: 'var(--text-main)',
                  paddingRight: '12px'
                }}
              >
                <Phone size={15} style={{ color: 'var(--accent-cyan)' }} />
                <span>+91 7994776519</span>
              </a>

              {/* Email with copy button */}
              <div 
                className="hero-contact-item email-item"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '0.86rem',
                  maxWidth: '100%',
                  overflow: 'hidden'
                }}
              >
                <Mail size={15} style={{ color: 'var(--accent-cyan)', flexShrink: 0 }} />
                <a 
                  href="mailto:rishwan063@gmail.com" 
                  style={{ color: 'var(--text-main)', fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
                  onClick={() => sounds.playClick()}
                >
                  rishwan063@gmail.com
                </a>
                <button
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                  style={{
                    padding: '4px 8px',
                    borderRadius: '4px',
                    background: copiedEmail ? 'rgba(16, 185, 129, 0.2)' : 'rgba(255, 255, 255, 0.08)',
                    color: copiedEmail ? '#34d399' : 'var(--text-secondary)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '0.72rem',
                    fontFamily: 'var(--font-mono)',
                    transition: 'all 0.2s ease',
                    cursor: 'pointer',
                    flexShrink: 0
                  }}
                >
                  {copiedEmail ? <Check size={12} /> : <Copy size={12} />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Scene + Visual Portrait Showcase */}
          <div 
            style={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%'
            }}
            className="hero-visual-column"
          >
            {/* Interactive 3D Canvas Background Frame */}
            <div 
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '440px',
                aspectRatio: '1 / 1.05',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                background: 'linear-gradient(180deg, rgba(16, 21, 30, 0.8) 0%, rgba(9, 11, 16, 0.95) 100%)',
                border: '1px solid var(--border-medium)',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.7), 0 0 30px rgba(56, 189, 248, 0.1)'
              }}
              className="hero-3d-box"
            >
              {/* Real 3D WebGL Canvas Layer */}
              <div 
                style={{
                  position: 'absolute',
                  inset: 0,
                  zIndex: 1,
                  opacity: 0.85
                }}
              >
                <ThreeScene />
              </div>

              {/* Portrait Image Layer with blend overlay */}
              <div 
                style={{
                  position: 'absolute',
                  inset: 0,
                  zIndex: 2,
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                  pointerEvents: 'none'
                }}
              >
                <img 
                  src={photoMode === 'portrait' ? '/rishwan-portrait.png' : '/rishwan-banner.png'} 
                  alt="Rishwan K - Full Stack & AI Developer" 
                  style={{
                    maxHeight: photoMode === 'portrait' ? '88%' : '80%',
                    width: photoMode === 'portrait' ? 'auto' : '96%',
                    maxWidth: '96%',
                    objectFit: 'contain',
                    borderRadius: photoMode === 'portrait' ? '0' : '10px',
                    filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.8))',
                    maskImage: photoMode === 'portrait' ? 'linear-gradient(to bottom, black 75%, transparent 100%)' : 'none',
                    WebkitMaskImage: photoMode === 'portrait' ? 'linear-gradient(to bottom, black 75%, transparent 100%)' : 'none',
                    transition: 'all 0.4s ease'
                  }}
                />
              </div>

              {/* Photo Mode Switcher Tabs */}
              <div 
                style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  zIndex: 10,
                  display: 'flex',
                  gap: '4px',
                  background: 'rgba(9, 11, 16, 0.8)',
                  backdropFilter: 'blur(10px)',
                  padding: '3px',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <button
                  onClick={() => {
                    setPhotoMode('portrait');
                    sounds.playToggle();
                  }}
                  style={{
                    padding: '4px 10px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    fontFamily: 'var(--font-mono)',
                    color: photoMode === 'portrait' ? '#ffffff' : 'var(--text-muted)',
                    background: photoMode === 'portrait' ? 'rgba(56, 189, 248, 0.25)' : 'transparent',
                    border: photoMode === 'portrait' ? '1px solid rgba(56, 189, 248, 0.4)' : '1px solid transparent',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  Portrait
                </button>
                <button
                  onClick={() => {
                    setPhotoMode('workspace');
                    sounds.playToggle();
                  }}
                  style={{
                    padding: '4px 10px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    fontFamily: 'var(--font-mono)',
                    color: photoMode === 'workspace' ? '#ffffff' : 'var(--text-muted)',
                    background: photoMode === 'workspace' ? 'rgba(56, 189, 248, 0.25)' : 'transparent',
                    border: photoMode === 'workspace' ? '1px solid rgba(56, 189, 248, 0.4)' : '1px solid transparent',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  Desk
                </button>
              </div>

              {/* Floating Status Card (Top Right) */}
              <div 
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  zIndex: 10,
                  background: 'rgba(15, 23, 42, 0.85)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(56, 189, 248, 0.25)',
                  padding: '5px 10px',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4)'
                }}
              >
                <span className="pulse-dot" style={{ width: '6px', height: '6px' }} />
                <span style={{ fontSize: '0.72rem', fontWeight: 600, color: '#ffffff' }}>
                  Next.js + Centelon
                </span>
              </div>

              {/* Floating Tech Badges (Bottom Left & Right) */}
              <div 
                style={{
                  position: 'absolute',
                  bottom: '12px',
                  left: '12px',
                  zIndex: 10,
                  background: 'rgba(10, 14, 22, 0.85)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid var(--border-subtle)',
                  padding: '5px 10px',
                  borderRadius: 'var(--radius-md)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  color: 'var(--accent-cyan)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <Cpu size={12} />
                <span>LLM • RAG • MCP</span>
              </div>

              <div 
                style={{
                  position: 'absolute',
                  bottom: '12px',
                  right: '12px',
                  zIndex: 10,
                  background: 'rgba(10, 14, 22, 0.85)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid var(--border-subtle)',
                  padding: '5px 10px',
                  borderRadius: 'var(--radius-md)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <Zap size={12} style={{ color: '#38bdf8' }} />
                <span>Next.js 15</span>
              </div>
            </div>

            {/* Metrics Strip below 3D container */}
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '8px',
                width: '100%',
                maxWidth: '440px',
                marginTop: '14px'
              }}
            >
              <div className="glass-panel" style={{ padding: '10px 8px', textAlign: 'center' }}>
                <div style={{ fontSize: 'clamp(1rem, 3.5vw, 1.25rem)', fontWeight: 800, color: '#ffffff', fontFamily: 'var(--font-heading)' }}>
                  2.5+ <span style={{ color: 'var(--accent-cyan)', fontSize: '0.8rem' }}>YRS</span>
                </div>
                <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>Tech Exp</div>
              </div>

              <div className="glass-panel" style={{ padding: '10px 8px', textAlign: 'center' }}>
                <div style={{ fontSize: 'clamp(1rem, 3.5vw, 1.25rem)', fontWeight: 800, color: '#ffffff', fontFamily: 'var(--font-heading)' }}>
                  Next.js
                </div>
                <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>RSC / Edge</div>
              </div>

              <div className="glass-panel" style={{ padding: '10px 8px', textAlign: 'center' }}>
                <div style={{ fontSize: 'clamp(1rem, 3.5vw, 1.25rem)', fontWeight: 800, color: '#ffffff', fontFamily: 'var(--font-heading)' }}>
                  Centelon
                </div>
                <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>& LevelX</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
          .hero-visual-column {
            order: -1; /* Display 3D core & photo hero visual right near top on mobile! */
          }
        }
        @media (max-width: 600px) {
          .hero-cta-group {
            flex-direction: column !important;
            width: 100% !important;
          }
          .hero-btn {
            width: 100% !important;
            justifyContent: center !important;
          }
          .hero-contact-bar {
            width: 100% !important;
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 10px !important;
          }
          .phone-item {
            border-right: none !important;
            border-bottom: 1px solid var(--border-subtle) !important;
            padding-right: 0 !important;
            padding-bottom: 8px !important;
            width: 100% !important;
          }
          .email-item {
            width: 100% !important;
            justifyContent: space-between !important;
          }
        }
      `}</style>
    </section>
  );
}
