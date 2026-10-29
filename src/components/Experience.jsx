import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Terminal, Bot, Cpu, Store, ShieldCheck, Zap } from 'lucide-react';
import { sounds } from '../utils/soundEffects';

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      role: 'Full Stack & AI Engineer (Next.js & MERN)',
      company: 'Centelon Solutions Private Limited',
      period: '2024 – 2025 (Feb & Present)',
      location: 'India (Hybrid / Enterprise Client Delivery)',
      badge: 'Current / Primary Role',
      icon: Store,
      summary: 'Spearheaded Next.js 14/15 and MERN full-stack architectures across enterprise retail systems, AI multimedia engines, and business operations platforms.',
      keyAchievements: [
        {
          title: 'Next.js Retail Cloud & Store Automation',
          desc: 'Architected an end-to-end multi-store automation platform using Next.js App Router, coordinating automated voice announcements, synchronized digital signage playlists, and real-time edge device telemetry.'
        },
        {
          title: 'AI Video Creation & Media Engine',
          desc: 'Engineered an automated AI video generation pipeline enabling instant production of tailored promotional content, store advertisements, and dynamic playlist scheduling across multiple retail outlets.'
        },
        {
          title: 'Multi-Store Architecture & Central Orchestration',
          desc: 'Designed centralized multi-store tenant management, allowing corporate managers to broadcast announcements, schedule campaigns, and monitor hardware uptime in real time.'
        },
        {
          title: 'Next.js Enterprise ERP & CRM Operations Core',
          desc: 'Developed modular Next.js ERP and CRM platforms featuring automated quotation/billing, lead conversion tracking, and role-based access control (RBAC) with responsive interfaces.'
        },
        {
          title: 'Advanced AI Integration (LLM, RAG, MCP)',
          desc: 'Integrated modern Large Language Models and Retrieval-Augmented Generation (RAG) pipelines with Model Context Protocol (MCP) servers to power automated data queries and agentic task execution.'
        }
      ],
      skillsUsed: ['Next.js 14/15', 'React.js', 'Node.js', 'Express', 'MongoDB', 'LLM / RAG', 'MCP Protocol', 'AI Video Pipelines', 'Audio Automation', 'WebSockets', 'REST APIs']
    },
    {
      role: 'Full Stack Developer (Next.js / MERN)',
      company: 'LevelX Learning LLP',
      period: 'Jan 2024 – Feb 2025',
      location: 'India',
      badge: 'Core Full-Stack Foundations',
      icon: Terminal,
      summary: 'Developed scalable Next.js and MERN stack web applications, educational dashboards, interactive modules, and high-throughput backend APIs.',
      keyAchievements: [
        {
          title: 'End-to-End Web Application Development',
          desc: 'Designed and deployed responsive React & Next.js client interfaces paired with robust Node.js and Express RESTful API backends.'
        },
        {
          title: 'Database Schema Design & Query Optimization',
          desc: 'Structured high-efficiency MongoDB schemas, indexing strategies, and aggregation pipelines to deliver sub-100ms response times for data-heavy views.'
        },
        {
          title: 'User Authentication & Role Management',
          desc: 'Built secure JWT-based authentication, password encryption, and multi-tier role authorization for students, instructors, and administrators.'
        },
        {
          title: 'Interactive Frontend & State Management',
          desc: 'Created dynamic UI components, state management workflows, and integrated real-time tracking for learner progress and analytics.'
        }
      ],
      skillsUsed: ['Next.js', 'React.js', 'JavaScript (ES6+)', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JWT Auth', 'Git / GitHub', 'State Management']
    }
  ];

  return (
    <section id="experience" className="section-spacer" style={{ background: 'linear-gradient(180deg, var(--bg-primary) 0%, #0d111a 100%)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '36px', maxWidth: '700px' }}>
          <div className="section-tag">Career Trajectory</div>
          <h2 className="section-title">
            2.5+ Years of Proven <br />
            <span className="gradient-text">Engineering Impact</span>
          </h2>
          <p className="section-subtitle">
            A chronological track record of architecting mission-critical retail automation, AI media pipelines, and scalable enterprise Next.js and MERN platforms.
          </p>
        </div>

        {/* Experience Selector Tabs */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '300px 1fr',
            gap: '24px',
            alignItems: 'start'
          }}
          className="experience-container"
        >
          {/* Company List Navigation */}
          <div 
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px'
            }}
          >
            {experiences.map((exp, idx) => {
              const Icon = exp.icon;
              const isActive = activeTab === idx;
              return (
                <button
                  key={exp.company}
                  onClick={() => {
                    setActiveTab(idx);
                    sounds.playClick();
                  }}
                  className="glass-panel"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    padding: 'clamp(14px, 3vw, 18px)',
                    textAlign: 'left',
                    borderRadius: 'var(--radius-md)',
                    background: isActive ? 'rgba(56, 189, 248, 0.08)' : 'var(--bg-card)',
                    borderColor: isActive ? 'var(--accent-cyan)' : 'var(--border-subtle)',
                    boxShadow: isActive ? '0 0 25px rgba(56, 189, 248, 0.15)' : 'none',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    position: 'relative',
                    width: '100%'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginBottom: '6px' }}>
                    <span 
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '0.72rem',
                        fontFamily: 'var(--font-mono)',
                        color: isActive ? 'var(--accent-cyan)' : 'var(--text-muted)'
                      }}
                    >
                      <Calendar size={12} />
                      {exp.period.split('–')[0].trim()}
                    </span>
                    <span 
                      style={{
                        fontSize: '0.65rem',
                        fontWeight: 600,
                        padding: '2px 6px',
                        borderRadius: '4px',
                        background: isActive ? 'rgba(56, 189, 248, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                        color: isActive ? '#ffffff' : 'var(--text-muted)'
                      }}
                    >
                      {exp.badge}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '0.98rem', fontWeight: 700, color: '#ffffff', marginBottom: '2px' }}>
                    {exp.company}
                  </h3>
                  <div style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', fontWeight: 500 }}>
                    {exp.role}
                  </div>
                </button>
              );
            })}

            {/* Credential Callout */}
            <div 
              style={{
                marginTop: '6px',
                padding: '14px',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(16, 21, 30, 0.5)',
                border: '1px dashed var(--border-medium)',
                display: 'flex',
                flexDirection: 'column',
                gap: '6px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', fontWeight: 600, color: '#ffffff' }}>
                <ShieldCheck size={15} style={{ color: 'var(--accent-cyan)' }} />
                <span>Verified Experience</span>
              </div>
              <p style={{ fontSize: '0.74rem', color: 'var(--text-muted)', lineHeight: 1.45 }}>
                2.5+ years of verified software development combining enterprise SaaS, Next.js 15, IoT store automation, and state-of-the-art AI tooling.
              </p>
            </div>
          </div>

          {/* Active Experience Details Panel */}
          <div 
            className="glass-panel"
            style={{
              padding: 'clamp(18px, 4vw, 32px)',
              borderRadius: 'var(--radius-lg)',
              background: 'linear-gradient(145deg, rgba(18, 23, 34, 0.9) 0%, rgba(11, 15, 23, 0.95) 100%)',
              border: '1px solid var(--border-medium)',
              position: 'relative'
            }}
          >
            {/* Header info */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', marginBottom: '16px', paddingBottom: '16px', borderBottom: '1px solid var(--border-subtle)' }}>
              <div>
                <h3 style={{ fontSize: 'clamp(1.15rem, 3.5vw, 1.4rem)', fontWeight: 700, color: '#ffffff', marginBottom: '3px' }}>
                  {experiences[activeTab].role}
                </h3>
                <div style={{ fontSize: '0.94rem', color: 'var(--accent-cyan)', fontWeight: 600 }}>
                  {experiences[activeTab].company}
                </div>
              </div>

              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--text-main)', background: 'rgba(255,255,255,0.05)', padding: '4px 10px', borderRadius: 'var(--radius-full)', border: '1px solid var(--border-subtle)' }}>
                  <Calendar size={12} style={{ color: 'var(--accent-cyan)' }} />
                  {experiences[activeTab].period}
                </div>
              </div>
            </div>

            {/* Executive Summary */}
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
              {experiences[activeTab].summary}
            </p>

            {/* Key Deliverables & Projects Under Role */}
            <h4 style={{ fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '12px' }}>
              Key Accomplishments & Systems Built:
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '22px' }}>
              {experiences[activeTab].keyAchievements.map((item, i) => (
                <div 
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    padding: '10px 12px',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.04)'
                  }}
                >
                  <ChevronRight size={15} style={{ color: 'var(--accent-cyan)', marginTop: '3px', flexShrink: 0 }} />
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.88rem', color: '#ffffff', marginBottom: '2px' }}>
                      {item.title}
                    </div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Skills & Technologies Chip Cloud */}
            <div>
              <div style={{ fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '8px' }}>
                Technologies & Frameworks Leveraged:
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {experiences[activeTab].skillsUsed.map((tech) => (
                  <span key={tech} className="badge-tech" style={{ fontSize: '0.72rem', padding: '3px 8px' }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .experience-container {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
