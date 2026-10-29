import React, { useState, useEffect } from 'react';
import { 
  Radio, 
  Video, 
  ShoppingCart, 
  Building2, 
  Bot, 
  ExternalLink, 
  Layers, 
  Cpu, 
  Sparkles, 
  Terminal, 
  CheckCircle2, 
  X, 
  ArrowRight,
  Server,
  Zap,
  Database
} from 'lucide-react';
import { sounds } from '../utils/soundEffects';

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 'store-automation',
      title: 'Centelon Robotic & Store Media Automation',
      category: 'ai-automation',
      categoryLabel: 'Next.js & Retail Automation',
      client: 'Centelon Solutions Private Limited',
      summary: 'An autonomous multi-store retail orchestration system automating voice announcements, digital signage playlists, and AI-driven video content creation across multiple outlets.',
      icon: Radio,
      accentColor: '#38bdf8',
      tags: ['Next.js 15', 'AI Video Generation', 'Audio Automation', 'Playlist Sync', 'Multi-Store Orchestration', 'Node.js'],
      metrics: [
        { label: 'Store Fleet', value: 'Multi-Store' },
        { label: 'Media Pipeline', value: 'AI Video / TTS' },
        { label: 'Edge Latency', value: '< 200ms' }
      ],
      description: 'Built under Centelon Solutions, this enterprise solution revolutionizes in-store retail communication. It empowers store operations to automate scheduled voice announcements, dynamic music and visual playlists, and instantly generate targeted AI video advertisements without manual video editing.',
      architecture: [
        'Next.js 15 Cloud Control Hub for configuring store groups, schedules, and marketing campaigns.',
        'AI Video Generation pipeline synthesizing custom video promotions based on seasonal inventory.',
        'Dynamic Text-to-Speech & Audio Engine for automated priority public announcements with volume ducking.',
        'Local Edge Player sync with offline playback resilience and WebSocket telemetry reporting.'
      ],
      techStack: ['Next.js 15', 'React.js', 'Node.js', 'Express', 'MongoDB', 'AI Video Synthesis APIs', 'WebSockets', 'FFmpeg', 'Docker']
    },
    {
      id: 'cafe-pos-billing',
      title: 'Next.js Cafe POS & E-Commerce Billing Engine',
      category: 'fullstack',
      categoryLabel: 'Next.js & POS Engine',
      client: 'Production Retail / Cafe Client (Yakz Billing)',
      summary: 'A high-velocity point-of-sale and cafe billing management suite engineered for instant order checkout, thermal receipt printing, table routing, and inventory tracking.',
      icon: ShoppingCart,
      accentColor: '#34d399',
      tags: ['Next.js 15 App Router', 'Real-Time POS', 'Kitchen Display (KDS)', 'Thermal Printing', 'Offline SQLite', 'Supabase'],
      metrics: [
        { label: 'Checkout Speed', value: '< 2 Seconds' },
        { label: 'Sync Resilience', value: 'Offline First' },
        { label: 'Transactions', value: 'Real-time' }
      ],
      description: 'A purpose-built POS and billing engine designed to eliminate checkout bottlenecks in fast-paced cafe and retail environments. Features rapid barcoding, split billing, table management, live Kitchen Display Screen (KDS) order routing, and real-time inventory deductions.',
      architecture: [
        'Next.js App Router & Server Actions providing sub-second order entry with rapid keyboard shortcuts.',
        'Kitchen Display System (KDS) updating kitchen staff via real-time WebSocket signals.',
        'Thermal printer integration producing formatted GST bills and kitchen tokens.',
        'Local SQLite data buffer providing uninterrupted offline operation during internet drops.'
      ],
      techStack: ['Next.js 15', 'React', 'TypeScript', 'Node.js', 'SQLite / PostgreSQL', 'WebSockets', 'Thermal Print Protocol']
    },
    {
      id: 'erp-crm-platform',
      title: 'Next.js Enterprise ERP & CRM Operations Core',
      category: 'enterprise',
      categoryLabel: 'Enterprise Next.js SaaS',
      client: 'Centelon Solutions & Enterprise Clients',
      summary: 'A unified operations platform managing customer lifecycles, automated quotation generation, GST invoice compliance, and multi-tier role-based access control.',
      icon: Building2,
      accentColor: '#818cf8',
      tags: ['Next.js 15', 'ERP Architecture', 'CRM Pipeline', 'GST Invoicing', 'Role-Based Access (RBAC)', 'MERN'],
      metrics: [
        { label: 'Pipeline Speed', value: '10x Faster' },
        { label: 'Compliance', value: '100% Tax/GST' },
        { label: 'Security', value: 'RBAC Audited' }
      ],
      description: 'Engineered to streamline enterprise business workflows by consolidating lead acquisition, client pipeline progression, automated quotes, inventory tracking, and tax invoice generation into a unified, responsive dashboard.',
      architecture: [
        'Dynamic CRM funnel with stage-based pipeline analytics and follow-up automations.',
        'Automated billing module generating GST-compliant tax invoices and downloadable PDFs.',
        'Granular role-based access control (RBAC) ensuring data partitioning between team tiers.',
        'High-efficiency MongoDB aggregation pipelines for instant executive financial insights.'
      ],
      techStack: ['Next.js 15', 'React.js', 'Node.js', 'Express', 'MongoDB Aggregations', 'PDFKit', 'JWT Auth', 'RESTful API']
    },
    {
      id: 'ai-rag-mcp',
      title: 'Autonomous Next.js AI Agent & RAG Knowledge Hub',
      category: 'ai-automation',
      categoryLabel: 'Modern AI & Agents',
      client: 'Advanced AI Research & Client Workflows',
      summary: 'An autonomous agent framework powered by Retrieval-Augmented Generation (RAG) and the Model Context Protocol (MCP) to connect LLMs directly to private databases and enterprise APIs.',
      icon: Bot,
      accentColor: '#38bdf8',
      tags: ['Next.js 15', 'Model Context Protocol (MCP)', 'RAG Vector Search', 'LLM Agentic Tooling', 'Pinecone / Chroma'],
      metrics: [
        { label: 'Protocol', value: 'MCP Standard' },
        { label: 'Context', value: 'Vector RAG' },
        { label: 'Agents', value: 'Multi-Tool' }
      ],
      description: 'An advanced agentic AI platform implementing Anthropic and Google Model Context Protocol (MCP) standards. It indexes private enterprise data through vector embeddings and enables conversational LLMs to query databases, trigger store announcements, and execute business automations safely.',
      architecture: [
        'MCP Server implementation exposing database schemas, search tools, and business workflows.',
        'Retrieval-Augmented Generation (RAG) pipeline with semantic vector search for zero hallucination.',
        'Autonomous multi-step reasoning agent with structured function calling and audit logs.',
        'Modular connector architecture easily integrating with Slack, WhatsApp, and internal ERPs.'
      ],
      techStack: ['Next.js 15', 'Model Context Protocol (MCP)', 'LangChain / LlamaIndex', 'OpenAI / Claude API', 'Vector Embeddings', 'Node.js / TypeScript']
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="projects" className="section-spacer">
      <div className="container">
        {/* Section Header */}
        <div 
          style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            alignItems: 'flex-end', 
            justifyContent: 'space-between', 
            gap: '20px', 
            marginBottom: '36px' 
          }}
          className="projects-header"
        >
          <div style={{ maxWidth: '640px' }}>
            <div className="section-tag">Featured Engineering</div>
            <h2 className="section-title">
              Next.js & Enterprise Platforms <br />
              <span className="gradient-text">Autonomous AI Systems</span>
            </h2>
            <p className="section-subtitle">
              Deep dive into production-grade systems engineered for Centelon Solutions, retail clients, and scalable enterprise operations with Next.js, MERN, and AI agents.
            </p>
          </div>

          {/* Filter Pills with Mobile Horizontal Scroll */}
          <div 
            className="filter-bar"
            style={{
              display: 'flex',
              gap: '6px',
              padding: '5px',
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: 'var(--radius-full)',
              border: '1px solid var(--border-subtle)',
              backdropFilter: 'blur(10px)',
              overflowX: 'auto',
              maxWidth: '100%',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'ai-automation', label: 'AI & Automation' },
              { id: 'fullstack', label: 'Next.js & POS' },
              { id: 'enterprise', label: 'ERP & CRM' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => {
                  setFilter(tab.id);
                  sounds.playClick();
                }}
                style={{
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-mono)',
                  color: filter === tab.id ? '#ffffff' : 'var(--text-muted)',
                  background: filter === tab.id ? 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)' : 'transparent',
                  border: filter === tab.id ? '1px solid rgba(56, 189, 248, 0.4)' : '1px solid transparent',
                  boxShadow: filter === tab.id ? '0 2px 10px rgba(2, 132, 199, 0.35)' : 'none',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s ease',
                  flexShrink: 0
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid - 100% Mobile Safe (min 280px or 100%) */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 290px), 1fr))',
            gap: '20px'
          }}
        >
          {filteredProjects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                className="glass-card project-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: 'clamp(20px, 4vw, 28px)',
                  borderRadius: 'var(--radius-lg)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Header with Icon and Category */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
                  <div 
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      background: 'rgba(56, 189, 248, 0.1)',
                      border: '1px solid rgba(56, 189, 248, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: project.accentColor
                    }}
                  >
                    <Icon size={20} />
                  </div>

                  <span 
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: 'var(--accent-cyan)',
                      background: 'rgba(56, 189, 248, 0.08)',
                      padding: '3px 8px',
                      borderRadius: 'var(--radius-full)',
                      border: '1px solid rgba(56, 189, 248, 0.2)'
                    }}
                  >
                    {project.categoryLabel}
                  </span>
                </div>

                {/* Project Title */}
                <h3 style={{ fontSize: 'clamp(1.15rem, 3.5vw, 1.28rem)', fontWeight: 700, color: '#ffffff', marginBottom: '6px' }}>
                  {project.title}
                </h3>

                {/* Client / Organization */}
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '12px' }}>
                  Under: <strong style={{ color: 'var(--text-secondary)' }}>{project.client}</strong>
                </div>

                {/* Summary */}
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '18px', flex: 1 }}>
                  {project.summary}
                </p>

                {/* Quick Performance Metrics Bar */}
                <div 
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '6px',
                    padding: '8px 10px',
                    background: 'rgba(0, 0, 0, 0.25)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    marginBottom: '18px',
                    textAlign: 'center'
                  }}
                >
                  {project.metrics.map((m, i) => (
                    <div key={i}>
                      <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#ffffff' }}>{m.value}</div>
                      <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tech Chips */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                  {project.tags.slice(0, 4).map((tag, i) => (
                    <span key={i} className="badge-tech" style={{ fontSize: '0.7rem', padding: '3px 8px' }}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Trigger */}
                <button
                  onClick={() => {
                    setSelectedProject(project);
                    sounds.playClick();
                  }}
                  className="btn-accent"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    padding: '10px 14px',
                    cursor: 'pointer'
                  }}
                >
                  <span>Inspect System Architecture</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            );
          })}
        </div>

        {/* Interactive Architecture Modal (100% Mobile Safe) */}
        {selectedProject && (
          <div 
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 200,
              background: 'rgba(9, 11, 16, 0.88)',
              backdropFilter: 'blur(16px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 'clamp(12px, 3vw, 24px)'
            }}
            onClick={() => {
              setSelectedProject(null);
              sounds.playClick();
            }}
          >
            <div 
              style={{
                width: '100%',
                maxWidth: '680px',
                background: 'linear-gradient(145deg, #121824 0%, #0c1017 100%)',
                border: '1px solid rgba(56, 189, 248, 0.35)',
                borderRadius: 'var(--radius-xl)',
                padding: 'clamp(20px, 4vw, 36px)',
                boxShadow: '0 25px 60px rgba(0,0,0,0.8), 0 0 40px rgba(56, 189, 248, 0.15)',
                maxHeight: '90vh',
                overflowY: 'auto',
                position: 'relative'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button with large touch target */}
              <button
                onClick={() => {
                  setSelectedProject(null);
                  sounds.playClick();
                }}
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-main)',
                  border: '1px solid var(--border-subtle)',
                  cursor: 'pointer',
                  transition: 'background 0.2s ease',
                  zIndex: 10
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.16)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)')}
                aria-label="Close architecture modal"
              >
                <X size={20} />
              </button>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px', paddingRight: '48px' }}>
                <span className="pulse-dot" />
                <span style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)' }}>
                  Architecture Deep Dive
                </span>
              </div>

              <h3 style={{ fontSize: 'clamp(1.25rem, 4vw, 1.6rem)', fontWeight: 800, color: '#ffffff', marginBottom: '6px', paddingRight: '48px' }}>
                {selectedProject.title}
              </h3>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
                Organization: <strong style={{ color: '#ffffff' }}>{selectedProject.client}</strong>
              </div>

              <p style={{ fontSize: 'clamp(0.86rem, 2.5vw, 0.96rem)', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
                {selectedProject.description}
              </p>

              {/* Architecture Core Highlights */}
              <h4 style={{ fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', marginBottom: '12px' }}>
                Engineering Architecture & Solutions:
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                {selectedProject.architecture.map((arch, i) => (
                  <div 
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      padding: '10px 12px',
                      borderRadius: 'var(--radius-md)',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.06)'
                    }}
                  >
                    <CheckCircle2 size={16} style={{ color: 'var(--accent-cyan)', marginTop: '2px', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.84rem', color: 'var(--text-main)', lineHeight: 1.5 }}>{arch}</span>
                  </div>
                ))}
              </div>

              {/* Full Stack Breakdown */}
              <h4 style={{ fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '10px' }}>
                Full Technology Breakdown:
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
                {selectedProject.techStack.map((tech) => (
                  <span key={tech} className="badge-tech" style={{ fontSize: '0.74rem', padding: '4px 10px' }}>
                    {tech}
                  </span>
                ))}
              </div>

              {/* Footer CTA */}
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '12px', paddingTop: '16px', borderTop: '1px solid var(--border-subtle)' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  Interested in building a similar system?
                </span>
                <a 
                  href="https://wa.me/917994776519?text=Hi%20Rishwan,%20I%20am%20interested%20in%20discussing%20your%20project:%20" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ padding: '8px 16px', fontSize: '0.84rem' }}
                >
                  <span>Connect with Rishwan</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .projects-header {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
          .filter-bar {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}
