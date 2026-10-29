import React from 'react';
import { Phone, Mail, ArrowUp, Code2, Heart, Sparkles, Terminal } from 'lucide-react';
import { sounds } from '../utils/soundEffects';

export default function Footer() {
  const scrollToTop = () => {
    sounds.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      style={{
        borderTop: '1px solid var(--border-subtle)',
        background: 'rgba(9, 11, 16, 0.95)',
        padding: 'clamp(40px, 6vw, 60px) 0 30px',
        position: 'relative',
        zIndex: 1
      }}
    >
      <div className="container">
        <div 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
            marginBottom: '32px',
            paddingBottom: '24px',
            borderBottom: '1px solid var(--border-subtle)'
          }}
        >
          {/* Brand Info */}
          <div style={{ maxWidth: '440px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <div 
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #0284c7 0%, #0f172a 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '0.9rem',
                  color: '#ffffff',
                  flexShrink: 0
                }}
              >
                RK
              </div>
              <span style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em' }}>
                Rishwan K
              </span>
            </div>
            <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
              Next.js & Full-Stack AI Engineer (2.5+ Years Exp) specializing in high-performance MERN architecture, robotic store automation, and LLM / RAG / MCP systems.
            </p>
          </div>

          {/* Quick Contact Links */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center' }}>
            <a 
              href="https://wa.me/917994776519" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => sounds.playClick()}
              className="badge-tech"
              style={{ fontSize: '0.82rem', padding: '8px 14px', color: '#ffffff' }}
            >
              <Phone size={14} style={{ color: 'var(--accent-cyan)' }} />
              <span>+91 7994776519</span>
            </a>

            <a 
              href="mailto:rishwan063@gmail.com" 
              onClick={() => sounds.playClick()}
              className="badge-tech"
              style={{ fontSize: '0.82rem', padding: '8px 14px', color: '#ffffff' }}
            >
              <Mail size={14} style={{ color: 'var(--accent-cyan)' }} />
              <span>rishwan063@gmail.com</span>
            </a>

            <button
              onClick={scrollToTop}
              title="Return to top"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-main)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                flexShrink: 0
              }}
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            fontSize: '0.75rem',
            color: 'var(--text-muted)',
            fontFamily: 'var(--font-mono)'
          }}
        >
          <div>
            © {new Date().getFullYear()} Rishwan K. All rights reserved. Centelon Solutions & LevelX Learning Alum.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>Engineered with</span>
            <Code2 size={13} style={{ color: 'var(--accent-cyan)' }} />
            <span>Next.js 15 + Three.js 3D</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
