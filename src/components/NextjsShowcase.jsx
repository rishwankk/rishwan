import React, { useState } from 'react';
import { 
  Code2, 
  Layers, 
  Zap, 
  Server, 
  ShieldCheck, 
  Globe, 
  Terminal, 
  Cpu, 
  ChevronRight,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import { sounds } from '../utils/soundEffects';

export default function NextjsShowcase() {
  const [activeTab, setActiveTab] = useState('app-router');

  const pillars = [
    {
      id: 'app-router',
      title: 'App Router & RSC',
      subtitle: 'React Server Components',
      icon: Layers,
      highlight: 'Zero Client JS Fetching',
      description: 'Leveraging React Server Components (RSC) to query MongoDB and PostgreSQL directly on the server without shipping bulky client-side API fetching libraries, resulting in sub-50ms page loads.',
      codeSnippet: `// app/(dashboard)/stores/page.tsx
import { getStoresWithTelemetry } from '@/lib/db';
import StoreFleetTable from '@/components/StoreFleetTable';
import { Suspense } from 'react';

export const revalidate = 60; // ISR

export default async function StoresDashboard() {
  // Direct server DB query with zero client bundle impact
  const initialData = await getStoresWithTelemetry();

  return (
    <main className="p-4 sm:p-8 space-y-6">
      <h1 className="text-xl font-bold">Store Fleet</h1>
      <Suspense fallback={<TableSkeleton />}>
        <StoreFleetTable data={initialData} />
      </Suspense>
    </main>
  );
}`
    },
    {
      id: 'server-actions',
      title: 'Server Actions',
      subtitle: 'Type-Safe RPC Pipelines',
      icon: Zap,
      highlight: 'No Boilerplate Endpoints',
      description: 'Executing mutations directly from client forms with full end-to-end TypeScript validation, automated optimistic UI updates, and instant Next.js cache revalidation.',
      codeSnippet: `// app/actions/announcements.ts
'use server';

import { revalidatePath } from 'next/cache';
import { broadcastToEdgePlayers } from '@/services/mqtt';
import { z } from 'zod';

const schema = z.object({
  storeId: z.string(),
  announcement: z.string().min(5),
});

export async function broadcastAnnouncementAction(formData: FormData) {
  const parsed = schema.parse(Object.fromEntries(formData));
  await broadcastToEdgePlayers(parsed.storeId, parsed.announcement);
  revalidatePath('/stores');
  return { success: true };
}`
    },
    {
      id: 'streaming-ssr',
      title: 'Streaming SSR',
      subtitle: 'Instant Perceived Speed',
      icon: Cpu,
      highlight: 'Parallel Async Rendering',
      description: 'Streaming critical shell HTML immediately to the client while deferring slow AI analytics pipelines and vector similarity computations through native React Suspense boundaries.',
      codeSnippet: `// Parallel streaming with React Suspense
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  {/* Instant-render shell */}
  <RealTimeTelemetryCard />

  {/* Streamed AI Video Pipeline Status */}
  <Suspense fallback={<AIGeneratorSkeleton />}>
    <AsyncAIVideoRenderStatus storeId={storeId} />
  </Suspense>

  {/* Streamed Vector RAG Document Retrieval */}
  <Suspense fallback={<RAGQuerySkeleton />}>
    <AsyncVectorContextWidget />
  </Suspense>
</div>`
    },
    {
      id: 'edge-security',
      title: 'Edge Middleware',
      subtitle: 'Global Protection & RBAC',
      icon: ShieldCheck,
      highlight: '< 5ms Edge Verification',
      description: 'Enforcing role-based access control (Admin, Store Operator, Auditor) at the Vercel/Cloudflare edge before requests ever touch the application origin.',
      codeSnippet: `// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyAuthToken } from '@/lib/auth/edge';

export async function middleware(req: NextRequest) {
  const token = req.cookies.get('auth_session')?.value;
  const verified = await verifyAuthToken(token);

  if (!verified && req.nextUrl.pathname.startsWith('/admin')) {
    return NextResponse.redirect(new URL('/login', req.url));
  }
  return NextResponse.next();
}`
    }
  ];

  const currentPillar = pillars.find(p => p.id === activeTab) || pillars[0];
  const Icon = currentPillar.icon;

  return (
    <section id="nextjs-engineering" className="section-spacer" style={{ background: 'linear-gradient(180deg, #0d121c 0%, var(--bg-primary) 100%)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '700px', marginBottom: '36px' }}>
          <div className="section-tag" style={{ color: '#ffffff' }}>Next.js 14/15 Mastery</div>
          <h2 className="section-title">
            Architecting With <br />
            <span className="gradient-text">Next.js App Router & Edge Runtime</span>
          </h2>
          <p className="section-subtitle">
            How Rishwan builds high-throughput, SEO-optimized, sub-second web platforms combining Next.js Server Components, Server Actions, and distributed Edge infrastructure.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: '320px 1fr',
            gap: '24px',
            alignItems: 'start'
          }}
          className="nextjs-grid"
        >
          {/* Left Column: Tab Pills */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }} className="nextjs-tabs">
            {pillars.map((pillar) => {
              const TabIcon = pillar.icon;
              const isSelected = activeTab === pillar.id;
              return (
                <button
                  key={pillar.id}
                  onClick={() => {
                    setActiveTab(pillar.id);
                    sounds.playClick();
                  }}
                  className="glass-panel"
                  style={{
                    padding: '14px 16px',
                    borderRadius: 'var(--radius-md)',
                    textAlign: 'left',
                    background: isSelected ? 'rgba(56, 189, 248, 0.1)' : 'var(--bg-card)',
                    borderColor: isSelected ? 'var(--accent-cyan)' : 'var(--border-subtle)',
                    boxShadow: isSelected ? '0 0 20px rgba(56, 189, 248, 0.12)' : 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div 
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      background: isSelected ? 'var(--accent-cyan)' : 'rgba(255, 255, 255, 0.05)',
                      color: isSelected ? '#090b10' : '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <TabIcon size={18} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#ffffff', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {pillar.title}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: isSelected ? 'var(--accent-cyan)' : 'var(--text-muted)' }}>
                      {pillar.subtitle}
                    </div>
                  </div>
                  <ChevronRight size={15} style={{ color: isSelected ? 'var(--accent-cyan)' : 'var(--text-dim)', flexShrink: 0 }} />
                </button>
              );
            })}

            {/* Next.js Badge Box */}
            <div 
              style={{
                marginTop: '6px',
                padding: '14px',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(0, 0, 0, 0.35)',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}
            >
              <div 
                style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  background: '#ffffff',
                  color: '#000000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 900,
                  fontSize: '0.8rem',
                  fontFamily: 'var(--font-heading)',
                  flexShrink: 0
                }}
              >
                N
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                Production experience with <strong style={{ color: '#ffffff' }}>Next.js 14 & 15</strong>, SSR, Turbopack, and Vercel Edge deployments.
              </div>
            </div>
          </div>

          {/* Right Column: Code & Architecture Walkthrough */}
          <div 
            className="glass-panel"
            style={{
              padding: 'clamp(18px, 4vw, 28px)',
              borderRadius: 'var(--radius-lg)',
              background: 'linear-gradient(145deg, #121825 0%, #0a0e16 100%)',
              border: '1px solid rgba(56, 189, 248, 0.25)',
              overflow: 'hidden'
            }}
          >
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px', flexWrap: 'wrap', gap: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Icon size={20} style={{ color: 'var(--accent-cyan)' }} />
                <h3 style={{ fontSize: 'clamp(1.15rem, 3.5vw, 1.35rem)', fontWeight: 800, color: '#ffffff' }}>
                  {currentPillar.title}
                </h3>
              </div>
              <span 
                style={{
                  fontSize: '0.72rem',
                  fontFamily: 'var(--font-mono)',
                  padding: '3px 8px',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(56, 189, 248, 0.1)',
                  color: 'var(--accent-cyan)',
                  border: '1px solid rgba(56, 189, 248, 0.3)'
                }}
              >
                {currentPillar.highlight}
              </span>
            </div>

            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '16px' }}>
              {currentPillar.description}
            </p>

            {/* Code Window */}
            <div 
              style={{
                borderRadius: 'var(--radius-md)',
                background: '#07090e',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                overflow: 'hidden',
                maxWidth: '100%'
              }}
            >
              {/* Window bar */}
              <div 
                style={{
                  padding: '8px 12px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <div style={{ display: 'flex', gap: '5px' }}>
                  <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#ef4444' }} />
                  <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#eab308' }} />
                  <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#22c55e' }} />
                </div>
                <span style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                  TypeScript Next.js Architecture
                </span>
              </div>

              {/* Code */}
              <pre 
                style={{
                  padding: '14px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'clamp(0.68rem, 2vw, 0.78rem)',
                  lineHeight: 1.55,
                  color: '#93c5fd',
                  overflowX: 'auto',
                  maxWidth: '100%',
                  margin: 0
                }}
              >
                <code>{currentPillar.codeSnippet}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .nextjs-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
