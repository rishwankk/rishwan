import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, MessageSquare, Clock, ShieldCheck, Copy, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sounds } from '../utils/soundEffects';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Next.js & Full-Stack Development',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    sounds.playClick();
    setSubmitted(true);
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#38bdf8', '#60a5fa', '#34d399']
    });
  };

  const copyEmail = () => {
    sounds.playClick();
    navigator.clipboard.writeText('rishwan063@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    sounds.playClick();
    navigator.clipboard.writeText('+917994776519');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="section-spacer">
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '640px', marginBottom: '36px' }}>
          <div className="section-tag">Direct Communication</div>
          <h2 className="section-title">
            Let’s Build Something <br />
            <span className="gradient-text">Exceptional Together</span>
          </h2>
          <p className="section-subtitle">
            Whether you want to discuss full-time software engineering roles, custom website/app builds, retail automation, or AI/LLM integration, I’m ready to connect.
          </p>
        </div>

        {/* Contact Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '0.9fr 1.1fr',
            gap: '24px',
            alignItems: 'start'
          }}
          className="contact-grid"
        >
          {/* Left Column: Direct Contact Details & Availability */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {/* Phone Card */}
            <div 
              className="glass-card contact-card"
              style={{
                padding: 'clamp(16px, 3.5vw, 22px)',
                borderRadius: 'var(--radius-lg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', minWidth: '200px' }}>
                <div 
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'rgba(56, 189, 248, 0.1)',
                    border: '1px solid rgba(56, 189, 248, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-cyan)',
                    flexShrink: 0
                  }}
                >
                  <Phone size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    PHONE & WHATSAPP
                  </div>
                  <a 
                    href="tel:7994776519" 
                    onClick={() => sounds.playClick()}
                    style={{ fontSize: 'clamp(1rem, 3.5vw, 1.15rem)', fontWeight: 700, color: '#ffffff' }}
                  >
                    +91 7994776519
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '6px' }}>
                <button
                  onClick={copyPhone}
                  title="Copy Phone Number"
                  style={{
                    padding: '8px',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    color: copiedPhone ? '#34d399' : 'var(--text-secondary)',
                    border: '1px solid var(--border-subtle)',
                    cursor: 'pointer'
                  }}
                >
                  {copiedPhone ? <Check size={16} /> : <Copy size={16} />}
                </button>
                <a
                  href="https://wa.me/917994776519?text=Hi%20Rishwan,%20let's%20connect!"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sounds.playClick()}
                  className="btn-accent"
                  style={{ padding: '8px 14px', fontSize: '0.8rem' }}
                >
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div 
              className="glass-card contact-card"
              style={{
                padding: 'clamp(16px, 3.5vw, 22px)',
                borderRadius: 'var(--radius-lg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', minWidth: '200px', maxWidth: '100%', overflow: 'hidden' }}>
                <div 
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'rgba(96, 165, 250, 0.1)',
                    border: '1px solid rgba(96, 165, 250, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-blue)',
                    flexShrink: 0
                  }}
                >
                  <Mail size={20} />
                </div>
                <div style={{ overflow: 'hidden' }}>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    DIRECT EMAIL
                  </div>
                  <a 
                    href="mailto:rishwan063@gmail.com" 
                    onClick={() => sounds.playClick()}
                    style={{ fontSize: 'clamp(0.92rem, 3.2vw, 1.12rem)', fontWeight: 700, color: '#ffffff', wordBreak: 'break-all' }}
                  >
                    rishwan063@gmail.com
                  </a>
                </div>
              </div>

              <button
                onClick={copyEmail}
                title="Copy Email Address"
                style={{
                  padding: '8px 12px',
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  color: copiedEmail ? '#34d399' : 'var(--text-secondary)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.78rem',
                  fontFamily: 'var(--font-mono)',
                  cursor: 'pointer'
                }}
              >
                {copiedEmail ? <Check size={14} /> : <Copy size={14} />}
                <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* Location & Timezone */}
            <div 
              className="glass-card"
              style={{
                padding: 'clamp(16px, 3.5vw, 22px)',
                borderRadius: 'var(--radius-lg)',
                display: 'flex',
                alignItems: 'center',
                gap: '14px'
              }}
            >
              <div 
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-emerald)',
                  flexShrink: 0
                }}
              >
                <MapPin size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  LOCATION & TIMEZONE
                </div>
                <div style={{ fontSize: 'clamp(0.92rem, 3vw, 1.05rem)', fontWeight: 700, color: '#ffffff' }}>
                  India (IST) • Worldwide Remote Ready
                </div>
              </div>
            </div>

            {/* Working Status Badge Box */}
            <div 
              style={{
                padding: '16px',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(16, 21, 30, 0.5)',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px'
              }}
            >
              <div className="pulse-dot" style={{ marginTop: '5px' }} />
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.86rem', color: '#ffffff', marginBottom: '2px' }}>
                  Currently Accepting Inquiries
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  Fast response times via WhatsApp & Email within 2 to 4 business hours.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Interactive Message Form */}
          <div 
            className="glass-panel"
            style={{
              padding: 'clamp(20px, 4vw, 36px)',
              borderRadius: 'var(--radius-lg)',
              background: 'linear-gradient(145deg, #121723 0%, #0c1017 100%)',
              border: '1px solid var(--border-medium)'
            }}
          >
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '24px 12px' }}>
                <div 
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    background: 'rgba(16, 185, 129, 0.15)',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    color: '#34d399',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px'
                  }}
                >
                  <CheckCircle2 size={28} />
                </div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>
                  Message Received!
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', maxWidth: '420px', margin: '0 auto 20px' }}>
                  Thank you for reaching out, {formData.name}. I have logged your message and will get back to you at {formData.email} shortly.
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
                  <a
                    href={`https://wa.me/917994776519?text=${encodeURIComponent(`Hi Rishwan, I just submitted the contact form from your portfolio regarding: ${formData.subject}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sounds.playClick()}
                    className="btn-primary"
                    style={{ background: 'linear-gradient(135deg, #059669 0%, #047857 100%)' }}
                  >
                    <MessageSquare size={16} />
                    <span>Open in WhatsApp</span>
                  </a>
                  <button 
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', subject: 'Next.js & Full-Stack Development', message: '' });
                      sounds.playClick();
                    }}
                    className="btn-secondary"
                  >
                    Send Another Note
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', marginBottom: '6px' }}>
                  Send an Inquiry
                </h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '20px' }}>
                  Fill out the form below or message directly via WhatsApp at +91 7994776519.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }} className="form-row">
                  <div>
                    <label style={{ display: 'block', fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '6px' }}>
                      YOUR NAME *
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '11px 13px',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid var(--border-subtle)',
                        color: '#ffffff',
                        fontSize: '16px',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '6px' }}>
                      EMAIL ADDRESS *
                    </label>
                    <input 
                      type="email" 
                      required
                      placeholder="e.g. sarah@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '11px 13px',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid var(--border-subtle)',
                        color: '#ffffff',
                        fontSize: '16px',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }} className="form-row">
                  <div>
                    <label style={{ display: 'block', fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '6px' }}>
                      PHONE / WHATSAPP
                    </label>
                    <input 
                      type="tel" 
                      placeholder="+91..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '11px 13px',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid var(--border-subtle)',
                        color: '#ffffff',
                        fontSize: '16px',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '6px' }}>
                      TOPIC / INQUIRY TYPE
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '11px 13px',
                        borderRadius: 'var(--radius-sm)',
                        background: '#121722',
                        border: '1px solid var(--border-subtle)',
                        color: '#ffffff',
                        fontSize: '16px',
                        outline: 'none'
                      }}
                    >
                      <option value="Full-Time Developer Hiring">Full-Time Software Engineering Role</option>
                      <option value="Next.js Web App Development">Next.js 15 Web Application Build</option>
                      <option value="AI / LLM / RAG Integration">AI, LLM, or MCP Integration</option>
                      <option value="Retail Store & POS Automation">Store / POS Retail Automation</option>
                      <option value="General Consultation">General Tech Consultation</option>
                    </select>
                  </div>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '6px' }}>
                    YOUR MESSAGE OR PROJECT SCOPE *
                  </label>
                  <textarea 
                    required
                    rows={4}
                    placeholder="Tell me about your project goals, required tech stack, or the developer role you are hiring for..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '11px 13px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--border-subtle)',
                      color: '#ffffff',
                      fontSize: '16px',
                      outline: 'none',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center', padding: '13px' }}
                >
                  <Send size={15} />
                  <span>Transmit Message to Rishwan</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
