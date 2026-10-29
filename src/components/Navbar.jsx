import React, { useState, useEffect } from 'react';
import { Terminal, Phone, Mail, Menu, X, ArrowUpRight, Volume2, VolumeX, Sparkles } from 'lucide-react';
import { sounds } from '../utils/soundEffects';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const newState = sounds.toggleSound();
    setSoundEnabled(newState);
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Next.js Arch', href: '#nextjs-engineering' },
    { name: 'Store Simulator', href: '#store-automation-demo' },
    { name: 'AI & Skills', href: '#skills' },
    { name: 'Custom Build', href: '#custom-build' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all var(--transition-normal)',
        background: scrolled ? 'rgba(9, 11, 16, 0.94)' : 'rgba(9, 11, 16, 0.6)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid rgba(255, 255, 255, 0.04)',
        padding: scrolled ? '10px 0' : '14px 0',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
        {/* Brand / Logo */}
        <a 
          href="#" 
          style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: 0 }} 
          onClick={() => sounds.playClick()}
        >
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '9px',
              background: 'linear-gradient(135deg, #0284c7 0%, #0f172a 100%)',
              border: '1px solid rgba(56, 189, 248, 0.35)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontFamily: 'var(--font-heading)',
              color: '#ffffff',
              fontSize: '1rem',
              boxShadow: '0 0 15px rgba(56, 189, 248, 0.25)',
              flexShrink: 0
            }}
          >
            RK
          </div>
          <div style={{ minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontWeight: 700, fontSize: '0.98rem', letterSpacing: '-0.02em', color: '#ffffff', whiteSpace: 'nowrap' }}>
                Rishwan K
              </span>
              <span
                className="hide-on-mobile-sm"
                style={{
                  fontSize: '0.65rem',
                  fontFamily: 'var(--font-mono)',
                  padding: '2px 5px',
                  borderRadius: '4px',
                  background: 'rgba(56, 189, 248, 0.12)',
                  color: 'var(--accent-cyan)',
                  border: '1px solid rgba(56, 189, 248, 0.25)',
                  whiteSpace: 'nowrap'
                }}
              >
                Next.js & AI
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.68rem', color: 'var(--text-muted)' }}>
              <span className="pulse-dot" style={{ width: '5px', height: '5px' }} />
              <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Available for Roles & Builds</span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => sounds.playClick()}
              style={{
                fontSize: '0.84rem',
                fontWeight: 500,
                color: 'var(--text-secondary)',
                transition: 'color var(--transition-fast)',
              }}
              onMouseEnter={(e) => (e.target.style.color = '#ffffff')}
              onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Quick Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }} className="nav-actions">
          {/* Audio toggle button */}
          <button
            onClick={toggleSound}
            title={soundEnabled ? 'Mute Sound Feedback' : 'Unmute Sound Feedback'}
            style={{
              padding: '8px',
              borderRadius: '8px',
              background: soundEnabled ? 'rgba(56, 189, 248, 0.1)' : 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-subtle)',
              color: soundEnabled ? 'var(--accent-cyan)' : 'var(--text-muted)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              touchAction: 'manipulation'
            }}
            aria-label="Toggle sound effects"
          >
            {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
          </button>

          <a
            href="https://wa.me/917994776519?text=Hi%20Rishwan,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary desktop-phone-btn"
            style={{ padding: '7px 12px', fontSize: '0.8rem', minHeight: '36px' }}
            onClick={() => sounds.playClick()}
          >
            <Phone size={13} style={{ color: 'var(--accent-cyan)' }} />
            <span>+91 7994776519</span>
          </a>

          <a
            href="#contact"
            className="btn-primary desktop-connect-btn"
            style={{ padding: '7px 14px', fontSize: '0.8rem', minHeight: '36px' }}
            onClick={() => sounds.playClick()}
          >
            <span>Let's Connect</span>
            <ArrowUpRight size={13} />
          </a>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen);
              sounds.playClick();
            }}
            className="mobile-menu-btn"
            style={{
              display: 'none',
              padding: '8px',
              color: 'var(--text-main)',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '8px',
              border: '1px solid var(--border-subtle)',
              cursor: 'pointer',
              touchAction: 'manipulation'
            }}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation (100% Mobile Safe with Backdrop Blur) */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '60px',
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(9, 11, 16, 0.98)',
            borderTop: '1px solid var(--border-subtle)',
            padding: '20px 24px 40px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            overflowY: 'auto',
            zIndex: 99
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setMobileMenuOpen(false);
                  sounds.playClick();
                }}
                style={{
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  color: 'var(--text-main)',
                  padding: '12px 0',
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <span>{link.name}</span>
                <ArrowUpRight size={16} style={{ color: 'var(--accent-cyan)' }} />
              </a>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '24px' }}>
            <a
              href="https://wa.me/917994776519"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center', background: 'linear-gradient(135deg, #059669 0%, #047857 100%)' }}
            >
              <Phone size={15} /> WhatsApp: +91 7994776519
            </a>
            <a
              href="mailto:rishwan063@gmail.com"
              className="btn-secondary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <Mail size={15} /> rishwan063@gmail.com
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav {
            display: none !important;
          }
          .desktop-phone-btn {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
        }
        @media (max-width: 480px) {
          .desktop-connect-btn {
            display: none !important;
          }
          .hide-on-mobile-sm {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
