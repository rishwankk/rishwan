import React from 'react';
import { Cpu, Layers, Server, Database, Sparkles, Terminal, Code2, Globe, Zap } from 'lucide-react';

export default function SkillsMatrix() {
  const skillDomains = [
    {
      title: 'AI & Autonomous Intelligence',
      subtitle: 'Modern Generative AI & Agentic Architectures',
      icon: Cpu,
      accent: 'var(--accent-cyan)',
      skills: [
        { name: 'Model Context Protocol (MCP)', level: 'Advanced', highlight: true, note: 'Custom MCP server & client tool integration' },
        { name: 'Retrieval-Augmented Generation (RAG)', level: 'Advanced', highlight: true, note: 'Vector embeddings, chunking, semantic search' },
        { name: 'Large Language Models (LLMs)', level: 'Advanced', highlight: true, note: 'Anthropic Claude, OpenAI, Gemini, Llama' },
        { name: 'Autonomous Multi-Agent Systems', level: 'Proficient', note: 'Tool calling, multi-step execution workflows' },
        { name: 'AI Video & Media Generation', level: 'Specialist', note: 'Automated in-store retail video creation' },
        { name: 'Vector DBs (Pinecone / Chroma)', level: 'Proficient', note: 'High-dimensional similarity indexing' }
      ]
    },
    {
      title: 'Next.js & Frontend Engineering',
      subtitle: 'Modern Reactive, SSR & 3D Web Systems',
      icon: Zap,
      accent: '#38bdf8',
      skills: [
        { name: 'Next.js 14 & 15 (App Router)', level: 'Expert', highlight: true, note: 'React Server Components (RSC), Turbopack' },
        { name: 'Next.js Server Actions & SSR', level: 'Expert', highlight: true, note: 'Streaming HTML, zero-client API mutations' },
        { name: 'React.js Ecosystem', level: 'Expert', highlight: true, note: 'Custom hooks, concurrent features, performance' },
        { name: 'Three.js & WebGL 3D', level: 'Advanced', highlight: true, note: 'Interactive 3D particle meshes, cameras, shaders' },
        { name: 'TypeScript & Modern JavaScript', level: 'Advanced', highlight: true, note: 'Strict typing, modern async/await patterns' },
        { name: 'State Management & WebSockets', level: 'Proficient', note: 'Zustand, Redux Toolkit, real-time channels' }
      ]
    },
    {
      title: 'Backend & Server Architecture',
      subtitle: 'High-Throughput Services & Microservices',
      icon: Server,
      accent: '#818cf8',
      skills: [
        { name: 'Node.js & Express.js', level: 'Expert', highlight: true, note: 'Robust RESTful APIs & microservices' },
        { name: 'REST & GraphQL Design', level: 'Advanced', note: 'Standardized schemas, rate-limiting, CORS' },
        { name: 'Authentication & Security', level: 'Advanced', note: 'JWT, OAuth, Role-Based Access Control (RBAC)' },
        { name: 'Store Automation Protocols', level: 'Specialist', note: 'Digital signage playlists & audio announcements' },
        { name: 'POS & Billing Engines', level: 'Specialist', note: 'Sub-second transactions & thermal printing' },
        { name: 'Edge Hardware Telemetry', level: 'Proficient', note: 'IoT store player heartbeat & remote sync' }
      ]
    },
    {
      title: 'Data, Cloud & DevOps',
      subtitle: 'Production Infrastructure & Persistence',
      icon: Database,
      accent: '#34d399',
      skills: [
        { name: 'MongoDB & Aggregations', level: 'Expert', highlight: true, note: 'Complex pipeline queries & schema design' },
        { name: 'PostgreSQL & SQLite', level: 'Advanced', note: 'ACID compliance, relational queries, offline sync' },
        { name: 'Docker & Containerization', level: 'Proficient', note: 'Reproducible microservice deployments' },
        { name: 'Vercel, AWS & Edge Deployment', level: 'Advanced', highlight: true, note: 'Edge Middleware, CDN, automated CI/CD' },
        { name: 'Performance Optimization', level: 'Advanced', note: 'Bundle splitting, query caching, low-latency' },
        { name: 'Linux & Terminal Automation', level: 'Proficient', note: 'Bash/PowerShell scripting, background jobs' }
      ]
    }
  ];

  return (
    <section id="skills" className="section-spacer" style={{ background: 'linear-gradient(180deg, #0d111a 0%, var(--bg-primary) 100%)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '680px', marginBottom: '36px' }}>
          <div className="section-tag">Technical Competencies</div>
          <h2 className="section-title">
            Engineered for <br />
            <span className="gradient-text">Next.js, Full-Stack & AI Convergence</span>
          </h2>
          <p className="section-subtitle">
            An enterprise-level tech stack built across 2.5+ years of real-world production engineering, bridging Next.js 15, the MERN stack, and modern AI (LLM, RAG, MCP).
          </p>
        </div>

        {/* 4-Domain Grid - Mobile safe */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
            gap: '20px'
          }}
        >
          {skillDomains.map((domain, i) => {
            const Icon = domain.icon;
            return (
              <div 
                key={domain.title}
                className="glass-card"
                style={{
                  padding: 'clamp(18px, 4vw, 24px)',
                  borderRadius: 'var(--radius-lg)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {/* Domain Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <div 
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: domain.accent,
                      flexShrink: 0
                    }}
                  >
                    <Icon size={18} />
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <h3 style={{ fontSize: 'clamp(1rem, 3.2vw, 1.15rem)', fontWeight: 700, color: '#ffffff' }}>
                      {domain.title}
                    </h3>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                      {domain.subtitle}
                    </div>
                  </div>
                </div>

                {/* Skill List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px' }}>
                  {domain.skills.map((skill, sIdx) => (
                    <div 
                      key={sIdx}
                      style={{
                        padding: '8px 12px',
                        borderRadius: 'var(--radius-sm)',
                        background: skill.highlight ? 'rgba(56, 189, 248, 0.05)' : 'rgba(255, 255, 255, 0.02)',
                        border: skill.highlight ? '1px solid rgba(56, 189, 248, 0.2)' : '1px solid rgba(255, 255, 255, 0.04)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '3px'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '6px' }}>
                        <span style={{ fontSize: '0.84rem', fontWeight: 600, color: skill.highlight ? '#ffffff' : 'var(--text-main)' }}>
                          {skill.name}
                        </span>
                        <span 
                          style={{
                            fontSize: '0.66rem',
                            fontFamily: 'var(--font-mono)',
                            padding: '2px 5px',
                            borderRadius: '4px',
                            background: skill.highlight ? 'rgba(56, 189, 248, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                            color: skill.highlight ? 'var(--accent-cyan)' : 'var(--text-muted)',
                            flexShrink: 0
                          }}
                        >
                          {skill.level}
                        </span>
                      </div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
                        {skill.note}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
