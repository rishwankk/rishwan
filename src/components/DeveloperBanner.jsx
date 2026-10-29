import React, { useState, useRef } from 'react';
import { Sparkles, Terminal, Code2, ExternalLink, CheckCircle2, ArrowRight } from 'lucide-react';
import { sounds } from '../utils/soundEffects';

export default function DeveloperBanner() {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -7;
    const rY = ((x - centerX) / centerX) * 7;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  return (
    <section 
      id="developer-profile" 
      className="section-spacer"
      style={{
        background: 'linear-gradient(180deg, var(--bg-primary) 0%, #0c1018 50%, var(--bg-primary) 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background soft glow */}
      <div 
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'clamp(300px, 60vw, 700px)',
          height: 'clamp(200px, 40vw, 400px)',
          background: 'radial-gradient(ellipse, rgba(56, 189, 248, 0.08) 0%, rgba(96, 165, 250, 0.02) 60%, transparent 80%)',
          filter: 'blur(90px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 36px' }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>Developer Identity</div>
          <h2 className="section-title">
            The Engineer <br />
            <span className="gradient-text">Behind The Architecture</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            A passionate Full-Stack MERN & Next.js developer building production systems with modern tools, clean patterns, and a mindset of continuous improvement.
          </p>
        </div>

        {/* 3D Tilt Cinematic Banner Card */}
        <div 
          style={{
            perspective: '1200px',
            maxWidth: '980px',
            margin: '0 auto'
          }}
        >
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => {
              setIsHovered(true);
              sounds.playClick();
            }}
            onMouseLeave={handleMouseLeave}
            className="glass-panel"
            style={{
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              border: '1px solid rgba(56, 189, 248, 0.3)',
              boxShadow: isHovered 
                ? '0 30px 70px rgba(0, 0, 0, 0.8), 0 0 45px rgba(56, 189, 248, 0.2)' 
                : '0 20px 50px rgba(0, 0, 0, 0.65), 0 0 25px rgba(56, 189, 248, 0.08)',
              transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
              transition: isHovered ? 'transform 0.1s ease-out, box-shadow 0.3s ease' : 'transform 0.5s ease-out, box-shadow 0.5s ease',
              background: '#090c12',
              position: 'relative'
            }}
          >
            {/* Top Sleek Window Bar */}
            <div 
              style={{
                padding: '10px 16px',
                background: 'rgba(9, 12, 18, 0.85)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.07)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                backdropFilter: 'blur(10px)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ display: 'flex', gap: '5px' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#eab308' }} />
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#22c55e' }} />
                </div>
                <span style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginLeft: '6px' }}>
                  rishwan-k // developer-workspace.env
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="pulse-dot" style={{ width: '6px', height: '6px' }} />
                <span style={{ fontSize: '0.7rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
                  ACTIVE ENGINEERING STATION
                </span>
              </div>
            </div>

            {/* The Image Itself - 16:9 High-Resolution Presentation */}
            <div 
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '16 / 9',
                maxHeight: '520px',
                overflow: 'hidden',
                background: '#0b0f17'
              }}
            >
              <img 
                src="/rishwan-banner.png" 
                alt="Rishwan K - Full Stack Developer Workspace" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.5s ease'
                }}
              />

              {/* Bottom Subtle Gradient Shadow Overlay */}
              <div 
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(9, 12, 18, 0.85) 0%, rgba(9, 12, 18, 0.2) 25%, transparent 60%)',
                  pointerEvents: 'none'
                }}
              />

              {/* Floating Quote Badge (Bottom Left) */}
              <div 
                style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '16px',
                  zIndex: 2,
                  background: 'rgba(9, 12, 18, 0.85)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(56, 189, 248, 0.3)',
                  padding: '8px 14px',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5)'
                }}
                className="banner-quote-badge"
              >
                <Code2 size={16} style={{ color: 'var(--accent-cyan)' }} />
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#ffffff', letterSpacing: '0.02em' }}>
                  "Build. Learn. Improve."
                </span>
              </div>

              {/* Floating Role Badge (Bottom Right) */}
              <div 
                style={{
                  position: 'absolute',
                  bottom: '16px',
                  right: '16px',
                  zIndex: 2,
                  background: 'rgba(9, 12, 18, 0.85)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid var(--border-subtle)',
                  padding: '8px 14px',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
                className="banner-tech-badge"
              >
                <span style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)' }}>
                  Centelon Solutions & LevelX Alum
                </span>
              </div>
            </div>

            {/* Quick Skills Strip underneath the banner */}
            <div 
              style={{
                padding: '16px 20px',
                background: 'rgba(12, 16, 24, 0.95)',
                borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px'
              }}
            >
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                  OFFICIAL STACK:
                </span>
                <span className="badge-tech" style={{ color: '#61dafb' }}>React</span>
                <span className="badge-tech" style={{ color: '#68a063' }}>Node.js</span>
                <span className="badge-tech" style={{ color: '#4db33d' }}>MongoDB</span>
                <span className="badge-tech" style={{ color: '#3178c6' }}>TypeScript</span>
                <span className="badge-tech" style={{ color: '#ffffff' }}>Express.js</span>
                <span className="badge-tech" style={{ color: 'var(--accent-cyan)' }}>Next.js 15</span>
              </div>

              <a 
                href="#contact" 
                className="btn-accent"
                style={{ padding: '7px 14px', fontSize: '0.8rem' }}
                onClick={() => sounds.playClick()}
              >
                <span>Connect With Rishwan</span>
                <ArrowRight size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .banner-quote-badge {
            bottom: 8px !important;
            left: 8px !important;
            padding: 5px 10px !important;
          }
          .banner-tech-badge {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
