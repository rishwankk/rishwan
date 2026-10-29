import React, { useState, useEffect } from 'react';
import { 
  Radio, 
  Volume2, 
  Play, 
  Square, 
  Store, 
  Film, 
  Sparkles, 
  CheckCircle2, 
  Activity, 
  Wifi, 
  Plus, 
  Music, 
  Clock, 
  AlertCircle,
  VolumeX,
  Layers
} from 'lucide-react';
import { sounds } from '../utils/soundEffects';

export default function StoreAutomationSimulator() {
  const [stores, setStores] = useState([
    { id: 'str-01', name: 'Mumbai Flagship Outlet', code: 'IND-MUM-01', status: 'Online', latency: '14ms', edgeVersion: 'v2.4.1' },
    { id: 'str-04', name: 'Dubai Marina Tech Hub', code: 'UAE-DXB-04', status: 'Online', latency: '22ms', edgeVersion: 'v2.4.1' },
    { id: 'str-12', name: 'Bengaluru Innovation Center', code: 'IND-BLR-12', status: 'Online', latency: '11ms', edgeVersion: 'v2.4.1' }
  ]);
  const [selectedStoreId, setSelectedStoreId] = useState('all');

  // Announcement State
  const [announcementText, setAnnouncementText] = useState(
    'Attention valued shoppers: Today only, enjoy an exclusive 30% discount on all premium electronics at Counter 3.'
  );
  const [isBroadcasting, setIsBroadcasting] = useState(false);
  const [broadcastLog, setBroadcastLog] = useState([
    { time: '17:15', store: 'All Stores', event: 'Scheduled Playlist "Midday Energy" Synced' },
    { time: '16:45', store: 'IND-MUM-01', event: 'Automated Promo Video Reel Updated (1080p)' }
  ]);

  // Playlist State
  const [currentPlaylist, setCurrentPlaylist] = useState({
    title: 'Midday Upbeat Retail Lounge',
    track: 'Aura of Sound - Electronic Chill',
    duration: '3:45',
    volume: 80
  });

  // AI Video Generation State
  const [isGeneratingVideo, setIsGeneratingVideo] = useState(false);
  const [videoProgress, setVideoProgress] = useState(0);
  const [generatedVideo, setGeneratedVideo] = useState(null);

  // New store modal/state
  const [newStoreName, setNewStoreName] = useState('');
  const [showAddStore, setShowAddStore] = useState(false);

  const presets = [
    { label: '30% Discount Promo', text: 'Attention valued shoppers: Today only, enjoy an exclusive 30% discount on all premium electronics at Counter 3.' },
    { label: 'Fresh Cafe Special', text: 'Store Notice: Freshly brewed organic coffee and artisan pastries are now available at the in-store Cafe lounge.' },
    { label: '15-Min Closing Alert', text: 'Attention customers: The store will close in 15 minutes. Please proceed to the quick-billing checkout registers.' },
    { label: 'AI Video Reel Sync', text: 'Digital signage display update: Broadcasting new promotional video content across all in-store screens.' }
  ];

  // Speech Synthesis & Broadcast trigger
  const handleBroadcast = () => {
    if (isBroadcasting || !announcementText.trim()) return;

    sounds.playClick();
    setIsBroadcasting(true);

    // Duck playlist volume
    setCurrentPlaylist(prev => ({ ...prev, volume: 20 }));

    // Play retail triple chime first
    sounds.playStoreChime(() => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(announcementText);
        utterance.rate = 0.95;
        utterance.pitch = 1.05;

        utterance.onend = () => {
          setIsBroadcasting(false);
          setCurrentPlaylist(prev => ({ ...prev, volume: 80 }));
          setBroadcastLog(prev => [
            { 
              time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
              store: selectedStoreId === 'all' ? 'All Outlets' : stores.find(s => s.id === selectedStoreId)?.code,
              event: `TTS Announcement Broadcast: "${announcementText.slice(0, 32)}..."`
            },
            ...prev.slice(0, 5)
          ]);
        };

        utterance.onerror = () => {
          setIsBroadcasting(false);
          setCurrentPlaylist(prev => ({ ...prev, volume: 80 }));
        };

        window.speechSynthesis.speak(utterance);
      } else {
        setTimeout(() => {
          setIsBroadcasting(false);
          setCurrentPlaylist(prev => ({ ...prev, volume: 80 }));
        }, 3500);
      }
    });
  };

  const handleStopBroadcast = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsBroadcasting(false);
    setCurrentPlaylist(prev => ({ ...prev, volume: 80 }));
  };

  // AI Video Generator simulation
  const handleGenerateVideo = () => {
    sounds.playClick();
    setIsGeneratingVideo(true);
    setVideoProgress(10);
    setGeneratedVideo(null);

    const interval = setInterval(() => {
      setVideoProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsGeneratingVideo(false);
          setGeneratedVideo({
            title: 'Dynamic Seasonal Campaign Reel #204',
            resolution: '1080x1920 (Vertical 9:16 Signage)',
            fps: '60 FPS',
            syncedStores: selectedStoreId === 'all' ? stores.length : 1
          });
          setBroadcastLog(old => [
            {
              time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
              store: selectedStoreId === 'all' ? 'Global Network' : 'Selected Store',
              event: 'AI Video Reel Generated & Dispatched to Edge Displays'
            },
            ...old.slice(0, 5)
          ]);
          return 100;
        }
        return prev + 20;
      });
    }, 400);
  };

  const handleAddStore = (e) => {
    e.preventDefault();
    if (!newStoreName.trim()) return;
    const newStore = {
      id: `str-${stores.length + 1}`,
      name: newStoreName,
      code: `STORE-${Math.floor(100 + Math.random() * 900)}`,
      status: 'Online',
      latency: `${Math.floor(10 + Math.random() * 15)}ms`,
      edgeVersion: 'v2.4.1'
    };
    setStores([...stores, newStore]);
    setNewStoreName('');
    setShowAddStore(false);
    sounds.playToggle();
  };

  return (
    <section id="store-automation-demo" className="section-spacer" style={{ background: 'linear-gradient(180deg, var(--bg-primary) 0%, #0d121c 100%)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '720px', marginBottom: '32px' }}>
          <div className="section-tag">Interactive Enterprise Simulation</div>
          <h2 className="section-title">
            Robotic Store Automation & <br />
            <span className="gradient-text">AI Media Studio Demo</span>
          </h2>
          <p className="section-subtitle">
            Experience the live architecture Rishwan engineered under <strong style={{ color: '#ffffff' }}>Centelon Solutions</strong>: broadcast voice announcements with real browser TTS & chimes, manage multi-store edge devices, control automated playlists, and trigger AI video reels.
          </p>
        </div>

        {/* Live Simulator Shell */}
        <div 
          className="glass-panel"
          style={{
            borderRadius: 'var(--radius-xl)',
            border: '1px solid rgba(56, 189, 248, 0.3)',
            background: 'linear-gradient(155deg, #111622 0%, #0a0d14 100%)',
            overflow: 'hidden',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7), 0 0 35px rgba(56, 189, 248, 0.12)'
          }}
        >
          {/* Top Control Bar / Multi-Store Header */}
          <div 
            style={{
              padding: 'clamp(12px, 3vw, 18px) clamp(14px, 3.5vw, 24px)',
              borderBottom: '1px solid var(--border-subtle)',
              background: 'rgba(9, 11, 16, 0.65)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div 
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: 'rgba(56, 189, 248, 0.15)',
                  border: '1px solid rgba(56, 189, 248, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-cyan)',
                  flexShrink: 0
                }}
              >
                <Radio size={16} />
              </div>
              <div>
                <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#ffffff' }}>
                  Centelon Store Orchestrator
                </div>
                <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                  ACTIVE PROTOCOL: Edge Sync v2.4.1
                </div>
              </div>
            </div>

            {/* Store Target Selector */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap', width: 'auto' }} className="sim-store-select-group">
              <select
                value={selectedStoreId}
                onChange={(e) => setSelectedStoreId(e.target.value)}
                style={{
                  padding: '6px 10px',
                  borderRadius: '6px',
                  background: '#161c28',
                  color: '#ffffff',
                  border: '1px solid var(--border-medium)',
                  fontSize: '0.8rem',
                  outline: 'none',
                  maxWidth: '100%'
                }}
              >
                <option value="all">All Outlets ({stores.length} Stores)</option>
                {stores.map(s => (
                  <option key={s.id} value={s.id}>{s.name}</option>
                ))}
              </select>

              <button
                onClick={() => setShowAddStore(true)}
                className="btn-accent"
                style={{ padding: '6px 10px', fontSize: '0.75rem' }}
                title="Add Store Branch"
              >
                <Plus size={13} />
                <span>Add Store</span>
              </button>
            </div>
          </div>

          {/* Main 2-Column Simulator Layout */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: '1.25fr 0.85fr',
              gap: '20px',
              padding: 'clamp(16px, 3.5vw, 24px)'
            }}
            className="sim-grid"
          >
            {/* Left: Announcement & Audio Engine */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* Voice Announcement Box */}
              <div 
                style={{
                  padding: 'clamp(14px, 3vw, 20px)',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Volume2 size={16} style={{ color: 'var(--accent-cyan)' }} />
                    <span style={{ fontSize: '0.86rem', fontWeight: 700, color: '#ffffff' }}>
                      Automated Voice Announcement (TTS & Chime)
                    </span>
                  </div>
                  {isBroadcasting && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.7rem', color: '#34d399', fontFamily: 'var(--font-mono)' }}>
                      <span className="pulse-dot" style={{ width: '5px', height: '5px' }} />
                      BROADCASTING
                    </div>
                  )}
                </div>

                {/* Textarea */}
                <textarea
                  rows={3}
                  value={announcementText}
                  onChange={(e) => setAnnouncementText(e.target.value)}
                  placeholder="Type an announcement to broadcast to stores..."
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    borderRadius: 'var(--radius-sm)',
                    background: '#0a0d14',
                    border: '1px solid var(--border-medium)',
                    color: '#ffffff',
                    fontSize: '0.86rem',
                    lineHeight: 1.5,
                    resize: 'none',
                    outline: 'none',
                    marginBottom: '10px'
                  }}
                />

                {/* Preset Chips */}
                <div style={{ marginBottom: '14px' }}>
                  <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '6px' }}>
                    QUICK PRESETS:
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                    {presets.map((preset, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          setAnnouncementText(preset.text);
                          sounds.playClick();
                        }}
                        style={{
                          padding: '3px 8px',
                          borderRadius: 'var(--radius-full)',
                          background: 'rgba(56, 189, 248, 0.06)',
                          border: '1px solid rgba(56, 189, 248, 0.2)',
                          color: 'var(--accent-cyan)',
                          fontSize: '0.7rem',
                          fontFamily: 'var(--font-mono)'
                        }}
                      >
                        {preset.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Trigger Buttons */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                  <button
                    onClick={handleBroadcast}
                    disabled={isBroadcasting}
                    className="btn-primary"
                    style={{
                      flex: 1,
                      minWidth: '200px',
                      padding: '10px 16px',
                      background: isBroadcasting ? '#0284c7' : 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)'
                    }}
                  >
                    <Play size={15} />
                    <span>{isBroadcasting ? 'Broadcasting Audio...' : 'Broadcast (Listen Live)'}</span>
                  </button>

                  {isBroadcasting && (
                    <button
                      onClick={handleStopBroadcast}
                      className="btn-secondary"
                      style={{ padding: '10px 16px', color: '#f87171' }}
                    >
                      <Square size={15} />
                      <span>Stop</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Playlist Automation Status Box */}
              <div 
                style={{
                  padding: '14px 16px',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '10px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div 
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '8px',
                      background: 'rgba(96, 165, 250, 0.12)',
                      border: '1px solid rgba(96, 165, 250, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-blue)',
                      flexShrink: 0
                    }}
                  >
                    <Music size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                      AUTOMATED IN-STORE PLAYLIST
                    </div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#ffffff' }}>
                      {currentPlaylist.title}
                    </div>
                    <div style={{ fontSize: '0.74rem', color: 'var(--text-secondary)' }}>
                      {currentPlaylist.track}
                    </div>
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    BGM LEVEL:
                  </div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 800, color: isBroadcasting ? '#f59e0b' : '#34d399' }}>
                    {currentPlaylist.volume}% {isBroadcasting && '(Ducked)'}
                  </div>
                </div>
              </div>

              {/* AI Video Generation Pipeline */}
              <div 
                style={{
                  padding: 'clamp(14px, 3vw, 18px)',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Film size={16} style={{ color: '#a5b4fc' }} />
                    <span style={{ fontSize: '0.86rem', fontWeight: 700, color: '#ffffff' }}>
                      AI Video Creation Pipeline
                    </span>
                  </div>
                  <span className="badge-tech" style={{ fontSize: '0.68rem' }}>
                    Next.js + FFmpeg
                  </span>
                </div>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '12px' }}>
                  Synthesize dynamic 9:16 vertical video promotions based on real-time store offers and push them to digital display players.
                </p>

                {isGeneratingVideo ? (
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', marginBottom: '6px' }}>
                      <span>SYNTHESIZING PROMO REEL FRAMES...</span>
                      <span>{videoProgress}%</span>
                    </div>
                    <div style={{ height: '6px', background: 'rgba(255,255,255,0.08)', borderRadius: '3px', overflow: 'hidden' }}>
                      <div style={{ width: `${videoProgress}%`, height: '100%', background: 'linear-gradient(90deg, #38bdf8, #818cf8)', transition: 'width 0.3s ease' }} />
                    </div>
                  </div>
                ) : generatedVideo ? (
                  <div style={{ padding: '10px 12px', borderRadius: 'var(--radius-sm)', background: 'rgba(56, 189, 248, 0.08)', border: '1px solid rgba(56, 189, 248, 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
                    <div>
                      <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#ffffff' }}>{generatedVideo.title}</div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{generatedVideo.resolution} • Synced to {generatedVideo.syncedStores} Store Displays</div>
                    </div>
                    <button 
                      onClick={handleGenerateVideo}
                      className="btn-accent"
                      style={{ padding: '5px 10px', fontSize: '0.72rem' }}
                    >
                      Re-Generate
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={handleGenerateVideo}
                    className="btn-accent"
                    style={{ width: '100%', justifyContent: 'center', padding: '10px' }}
                  >
                    <Sparkles size={14} />
                    <span>Generate AI Store Video Reel</span>
                  </button>
                )}
              </div>
            </div>

            {/* Right: Multi-Store Fleet & Real-Time Event Log */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {/* Store Nodes Fleet */}
              <div 
                style={{
                  padding: '16px',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#ffffff', fontFamily: 'var(--font-mono)' }}>
                    STORE EDGE HARDWARE FLEET
                  </div>
                  <span style={{ fontSize: '0.68rem', color: 'var(--accent-emerald)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span className="pulse-dot" style={{ width: '5px', height: '5px' }} /> {stores.length} Connected
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {stores.map((s) => (
                    <div 
                      key={s.id}
                      style={{
                        padding: '8px 10px',
                        borderRadius: 'var(--radius-sm)',
                        background: 'rgba(0, 0, 0, 0.3)',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '8px'
                      }}
                    >
                      <div style={{ minWidth: 0 }}>
                        <div style={{ fontSize: '0.78rem', fontWeight: 600, color: '#ffffff', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          {s.name}
                        </div>
                        <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                          {s.code} • {s.latency}
                        </div>
                      </div>
                      <span style={{ fontSize: '0.65rem', color: 'var(--accent-cyan)', background: 'rgba(56, 189, 248, 0.1)', padding: '2px 5px', borderRadius: '4px', flexShrink: 0 }}>
                        {s.edgeVersion}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Real-Time Telemetry Event Log */}
              <div 
                style={{
                  padding: '16px',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(0, 0, 0, 0.35)',
                  border: '1px solid var(--border-subtle)',
                  flex: 1
                }}
              >
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#ffffff', fontFamily: 'var(--font-mono)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Activity size={13} style={{ color: 'var(--accent-cyan)' }} />
                  REAL-TIME TELEMETRY STREAM
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {broadcastLog.map((log, idx) => (
                    <div 
                      key={idx}
                      style={{
                        fontSize: '0.7rem',
                        fontFamily: 'var(--font-mono)',
                        padding: '6px 8px',
                        borderRadius: '4px',
                        background: 'rgba(255, 255, 255, 0.02)',
                        borderLeft: '2px solid var(--accent-cyan)'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)', marginBottom: '2px' }}>
                        <span>[{log.time}]</span>
                        <span style={{ color: 'var(--accent-cyan)' }}>{log.store}</span>
                      </div>
                      <div style={{ color: '#cbd5e1', wordBreak: 'break-word' }}>{log.event}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal: Add Store Branch (Mobile friendly) */}
        {showAddStore && (
          <div 
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 300,
              background: 'rgba(9, 11, 16, 0.85)',
              backdropFilter: 'blur(10px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '16px'
            }}
          >
            <form 
              onSubmit={handleAddStore}
              style={{
                width: '100%',
                maxWidth: '420px',
                background: '#121722',
                border: '1px solid var(--border-medium)',
                borderRadius: 'var(--radius-lg)',
                padding: 'clamp(18px, 4vw, 24px)'
              }}
            >
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff', marginBottom: '6px' }}>
                Add New Store Outlet
              </h3>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '14px' }}>
                Connect a new retail branch edge player to the central orchestrator.
              </p>

              <div style={{ marginBottom: '14px' }}>
                <label style={{ display: 'block', fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '6px' }}>
                  STORE OUTLET NAME
                </label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Hyderabad City Center"
                  value={newStoreName}
                  onChange={(e) => setNewStoreName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    borderRadius: 'var(--radius-sm)',
                    background: '#0a0d14',
                    border: '1px solid var(--border-medium)',
                    color: '#ffffff',
                    fontSize: '0.88rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
                <button 
                  type="button" 
                  onClick={() => setShowAddStore(false)}
                  className="btn-secondary"
                  style={{ padding: '8px 14px', fontSize: '0.8rem' }}
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="btn-primary"
                  style={{ padding: '8px 16px', fontSize: '0.8rem' }}
                >
                  Connect Outlet
                </button>
              </div>
            </form>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .sim-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          .sim-store-select-group {
            width: 100% !important;
            justifyContent: space-between !important;
          }
        }
      `}</style>
    </section>
  );
}
