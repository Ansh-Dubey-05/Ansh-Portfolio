import React, { useState, useEffect } from 'react';
import { JARVIS_NEURAL_NODES, PERSONAL_INFO } from '../data/portfolioData';
import { Cpu, Activity, Zap, Terminal, ShieldCheck, Sparkles, ExternalLink, RefreshCw, Layers, Radio } from 'lucide-react';

export default function JarvisNeuralMind({ onOpenLightbox }) {
  const [activeNodeId, setActiveNodeId] = useState('core');
  const [pulseTick, setPulseTick] = useState(0);

  const activeNode = JARVIS_NEURAL_NODES.find(n => n.id === activeNodeId) || JARVIS_NEURAL_NODES[0];

  // Subtle telemetry pulse
  useEffect(() => {
    const timer = setInterval(() => {
      setPulseTick(prev => (prev + 1) % 100);
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="neural-mind" className="py-24 bg-[#050505] relative overflow-hidden border-t border-b border-white/5">
      {/* Sci-Fi Neural Grid Background */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#D71930]/10 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with HUD Styling */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-white/10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#D71930] animate-ping"></span>
              <span className="text-xs font-mono text-[#D71930] uppercase tracking-widest font-semibold flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5" /> ANSH-JARVIS // NEURAL CORE v2.6
              </span>
            </div>
            <h2 className="font-['Bebas_Neue',sans-serif] text-5xl sm:text-6xl lg:text-7xl text-white tracking-tight uppercase leading-none">
              JARVIS NEURAL MIND
            </h2>
            <p className="text-xs sm:text-sm font-mono text-[#888888] mt-2 max-w-2xl">
              Interactive cognitive map visualising Ansh Dubey's software engineering ecosystem, government initiatives, AI engines, and verified leadership records.
            </p>
          </div>

          {/* Real-time System Diagnostic Pill */}
          <div className="flex items-center gap-3 p-2.5 rounded-xl bg-[#0c0c0c] border border-white/10 font-mono text-xs">
            <div className="flex items-center gap-2">
              <Radio className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span className="text-white/80">NEURAL LINK:</span>
              <span className="text-emerald-400 font-bold">ONLINE</span>
            </div>
            <span className="text-white/20">|</span>
            <div className="text-[#888888]">
              SYNAPSES: <span className="text-white font-bold">{JARVIS_NEURAL_NODES.length} NODES</span>
            </div>
          </div>
        </div>

        {/* 2-Column Neural Mind Layout: Interactive Neural Node Canvas (Left) + Holographic Telemetry (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Neural Synapse Map / Interactive Grid (Col 1-7) */}
          <div className="lg:col-span-7 rounded-2xl bg-[#0a0a0a] border border-white/15 p-6 sm:p-8 relative shadow-2xl overflow-hidden min-h-[480px] flex flex-col justify-between">
            
            {/* Top HUD Status Bar */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 text-[11px] font-mono text-[#777777]">
              <span className="flex items-center gap-1.5 text-white/90">
                <Activity className="w-3.5 h-3.5 text-[#D71930]" />
                <span>INTERACTIVE TOPOLOGY SELECTOR</span>
              </span>
              <span>CLICK ANY NODE TO INSPECT TELEMETRY</span>
            </div>

            {/* Neural Nodes Grid Layout */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 my-6 relative z-10">
              {JARVIS_NEURAL_NODES.map((node) => {
                const isSelected = activeNodeId === node.id;
                const isCore = node.id === 'core';

                return (
                  <button
                    key={node.id}
                    onClick={() => setActiveNodeId(node.id)}
                    className={`relative p-3.5 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between group ${
                      isSelected
                        ? 'border-[#D71930] bg-[#D71930]/15 shadow-xl shadow-[#D71930]/25 -translate-y-1'
                        : isCore
                        ? 'border-white/30 bg-[#121212] hover:border-[#D71930]'
                        : 'border-white/10 bg-[#0d0d0d] hover:border-white/30 hover:bg-[#141414]'
                    }`}
                  >
                    {/* Top Node Indicator */}
                    <div className="flex items-center justify-between mb-2">
                      <span 
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: node.color }}
                      />
                      <span className="text-[9px] font-mono text-[#777777] uppercase truncate max-w-[80px]">
                        {node.type.split('_')[0]}
                      </span>
                    </div>

                    {/* Node Name */}
                    <div className="space-y-1">
                      <h4 className="font-['Syne',sans-serif] text-xs font-bold text-white group-hover:text-[#D71930] transition-colors leading-tight line-clamp-2">
                        {node.name}
                      </h4>
                      <div className="text-[10px] font-mono font-semibold" style={{ color: node.color }}>
                        {node.metric}
                      </div>
                    </div>

                    {/* Active Ping */}
                    {isSelected && (
                      <div className="absolute top-2 right-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D71930] animate-ping block" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Bottom HUD Telemetry Ticker */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between text-[11px] font-mono text-[#666666] gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D71930]"></span>
                <span className="text-white/80">CORE FOCUS:</span>
                <span className="text-white font-bold">{activeNode.name}</span>
              </div>
              <div className="text-[10px] text-[#888888]">
                LATENCY: &lt;1.4ms • SECURE SSL
              </div>
            </div>

          </div>

          {/* RIGHT: Holographic Telemetry Inspector Panel (Col 8-12) */}
          <div className="lg:col-span-5 rounded-2xl bg-[#0c0c0c] border border-white/15 p-6 sm:p-7 shadow-2xl relative space-y-6">
            
            {/* Holographic Header */}
            <div className="flex items-start justify-between border-b border-white/10 pb-4">
              <div>
                <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-[#D71930] font-bold mb-1">
                  <span className="w-2 h-2 rounded-full bg-[#D71930] animate-pulse"></span>
                  <span>{activeNode.type}</span>
                </div>
                <h3 className="font-['Syne',sans-serif] text-xl sm:text-2xl font-black text-white">
                  {activeNode.name}
                </h3>
              </div>

              <span 
                className="px-2.5 py-1 rounded text-xs font-mono font-bold uppercase border"
                style={{ 
                  color: activeNode.color,
                  borderColor: `${activeNode.color}40`,
                  backgroundColor: `${activeNode.color}15`
                }}
              >
                {activeNode.status}
              </span>
            </div>

            {/* Key Metric Display */}
            <div className="p-4 rounded-xl bg-black/60 border border-white/10 flex items-center justify-between">
              <div>
                <div className="text-[10px] font-mono text-[#777777] uppercase tracking-wider">
                  Operational Metric
                </div>
                <div className="font-['Bebas_Neue',sans-serif] text-2xl text-white tracking-wide">
                  {activeNode.metric}
                </div>
              </div>
              <div className="p-2 rounded-lg bg-white/5 text-white/70">
                <Zap className="w-4 h-4 text-[#D71930]" />
              </div>
            </div>

            {/* Neural Description */}
            <div className="space-y-2">
              <span className="text-[11px] font-mono text-[#a0a0a0] uppercase tracking-wider flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-[#D71930]" /> Architectural Intelligence
              </span>
              <p className="text-xs sm:text-sm text-[#cccccc] font-light leading-relaxed">
                {activeNode.summary}
              </p>
            </div>

            {/* Simulated Live Terminal Feed */}
            <div className="p-3.5 rounded-xl bg-black border border-white/10 font-mono text-[11px] space-y-1 text-[#888888]">
              <div className="text-emerald-400 font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>JARVIS TELEMETRY FEED:</span>
              </div>
              <div className="text-white/80">
                &gt; node.sync("{activeNode.id}");
              </div>
              <div className="text-[#D71930]">
                &gt; verified_status: VALIDATED_OK
              </div>
              <div className="text-cyan-300">
                &gt; telemetry: active_connections = 100%
              </div>
            </div>

            {/* Technologies Involved */}
            <div className="space-y-2 pt-2 border-t border-white/10">
              <span className="text-[10px] font-mono text-[#777777] uppercase tracking-widest block">
                Integrated Frameworks & Protocols:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {activeNode.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded text-xs font-mono bg-white/5 border border-white/10 text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Routing */}
            <div className="pt-2 flex items-center justify-between">
              <a
                href={
                  activeNode.id === 'esetu' || activeNode.id === 'heritage'
                    ? '#projects'
                    : activeNode.id === 'president'
                    ? '#leadership'
                    : activeNode.id === 'paisa'
                    ? '#experience'
                    : '#skills-education'
                }
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[#D71930] hover:text-white transition-colors"
              >
                <span>Navigate to full section details</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <span className="text-[10px] font-mono text-[#555555]">
                ENCRYPTED TELEMETRY
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
