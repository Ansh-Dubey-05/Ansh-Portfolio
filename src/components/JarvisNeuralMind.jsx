import React, { useState, useEffect } from 'react';
import { JARVIS_NEURAL_NODES, JARVIS_MIND_GAME_CHALLENGES, LIFE_TIMELINE_NODES, PERSONAL_INFO } from '../data/portfolioData';
import { 
  Cpu, Activity, Zap, Terminal, ShieldCheck, Sparkles, ExternalLink, RefreshCw, Layers, Radio, 
  Gamepad2, Trophy, CheckCircle2, AlertCircle, ArrowRight, Award, Crown, Compass, BookOpen, Volume2, Palette, Scan
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function JarvisNeuralMind({ onOpenLightbox }) {
  const [activeTabMode, setActiveTabMode] = useState('game'); // 'game' | 'telemetry' | 'roadmap'
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [isScanning, setIsScanning] = useState(false);
  
  // Telemetry node state
  const [activeNodeId, setActiveNodeId] = useState('core');
  
  // Mind Game states
  const [currentChallengeIndex, setCurrentChallengeIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [scoreXP, setScoreXP] = useState(0);
  const [unlockedBadges, setUnlockedBadges] = useState([]);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [showIntel, setShowIntel] = useState(false);

  const activeNode = JARVIS_NEURAL_NODES.find(n => n.id === activeNodeId) || JARVIS_NEURAL_NODES[0];
  const currentChallenge = JARVIS_MIND_GAME_CHALLENGES[currentChallengeIndex];

  // Synthesized Cyber Audio FX (zero external audio files)
  const playCyberAudio = (type = 'click') => {
    if (!soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      if (type === 'correct') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
        osc.frequency.setValueAtTime(880, ctx.currentTime + 0.1); // A5
        gain.gain.setValueAtTime(0.06, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.3);
      } else if (type === 'scan') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(300, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.4);
        gain.gain.setValueAtTime(0.03, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.4);
      } else {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(950, ctx.currentTime);
        gain.gain.setValueAtTime(0.03, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.06);
      }
    } catch (e) {}
  };

  const handleSelectAnswer = (index) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(index);
    setShowIntel(true);

    const isCorrect = index === currentChallenge.correctIndex;
    if (isCorrect) {
      playCyberAudio('correct');
      setScoreXP(prev => prev + currentChallenge.xp);
      if (!unlockedBadges.includes(currentChallenge.badgeUnlocked)) {
        setUnlockedBadges(prev => [...prev, currentChallenge.badgeUnlocked]);
      }
    } else {
      playCyberAudio('click');
    }
  };

  const handleNextChallenge = () => {
    playCyberAudio('click');
    if (currentChallengeIndex < JARVIS_MIND_GAME_CHALLENGES.length - 1) {
      setCurrentChallengeIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowIntel(false);
    } else {
      setGameCompleted(true);
      confetti({
        particleCount: 110,
        spread: 90,
        origin: { y: 0.6 },
        colors: ['#D71930', '#00f0ff', '#10b981', '#ffffff']
      });
    }
  };

  const handleRestartGame = () => {
    playCyberAudio('click');
    setCurrentChallengeIndex(0);
    setSelectedAnswer(null);
    setScoreXP(0);
    setUnlockedBadges([]);
    setGameCompleted(false);
    setShowIntel(false);
  };

  const handleTriggerRadarScan = () => {
    setIsScanning(true);
    playCyberAudio('scan');
    setTimeout(() => setIsScanning(false), 1600);
  };

  const syncPercentage = Math.round(((currentChallengeIndex + (gameCompleted ? 1 : 0)) / JARVIS_MIND_GAME_CHALLENGES.length) * 100);

  return (
    <section id="neural-mind" className="py-24 bg-[#050505] relative overflow-hidden border-t border-b border-white/5">
      {/* Sci-Fi Neural Grid Background */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#D71930]/10 blur-[160px] pointer-events-none rounded-full" />

      {/* Radar scanning beam effect */}
      {isScanning && (
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00f0ff]/15 to-transparent h-32 animate-[pulseLine_1.5s_linear_infinite] pointer-events-none z-20" />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with HUD Styling */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-white/10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#D71930] animate-ping"></span>
              <span className="text-xs font-mono text-[#D71930] uppercase tracking-widest font-semibold flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5" /> ANSH-JARVIS // COGNITIVE NEURAL CORE v2.9
              </span>
            </div>
            <h2 className="font-['Bebas_Neue',sans-serif] text-5xl sm:text-6xl lg:text-7xl text-white tracking-tight uppercase leading-none">
              JARVIS NEURAL MIND & GAME
            </h2>
            <p className="text-xs sm:text-sm font-mono text-[#888888] mt-2 max-w-2xl">
              Interactive cognitive matrix mapping Ansh Dubey's software engineering ecosystem, World Bank government leadership, AI models, and life journey.
            </p>
          </div>

          {/* Mode Switcher Pills: Game vs Telemetry vs Roadmap + Quick Scan */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleTriggerRadarScan}
              className="px-3 py-1.5 rounded-xl text-xs font-mono tracking-wider bg-white/5 hover:bg-[#D71930] border border-white/10 text-white flex items-center gap-1.5 transition-all cursor-pointer"
              title="Run Cyber Synapse Scan"
            >
              <Scan className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden sm:inline">RADAR SCAN</span>
            </button>

            <button
              onClick={() => window.dispatchEvent(new CustomEvent('open-theme-customizer'))}
              className="px-3 py-1.5 rounded-xl text-xs font-mono tracking-wider bg-white/5 hover:bg-white/15 border border-white/10 text-white flex items-center gap-1.5 transition-all cursor-pointer"
              title="Customize HUD Theme & Fonts"
            >
              <Palette className="w-3.5 h-3.5 text-amber-400" />
              <span>THEMES</span>
            </button>

            <div className="flex items-center gap-1 p-1 rounded-2xl bg-[#0c0c0c] border border-white/15 backdrop-blur-md shadow-xl">
              <button
                onClick={() => {
                  playCyberAudio('click');
                  setActiveTabMode('game');
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono tracking-wider transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeTabMode === 'game'
                    ? 'bg-[#D71930] text-white font-bold shadow-lg shadow-[#D71930]/30'
                    : 'text-[#888888] hover:text-white'
                }`}
              >
                <Gamepad2 className="w-3.5 h-3.5" />
                <span>MIND GAME</span>
              </button>

              <button
                onClick={() => {
                  playCyberAudio('click');
                  setActiveTabMode('telemetry');
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono tracking-wider transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeTabMode === 'telemetry'
                    ? 'bg-[#D71930] text-white font-bold shadow-lg shadow-[#D71930]/30'
                    : 'text-[#888888] hover:text-white'
                }`}
              >
                <Activity className="w-3.5 h-3.5" />
                <span>TELEMETRY</span>
              </button>

              <button
                onClick={() => {
                  playCyberAudio('click');
                  setActiveTabMode('roadmap');
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono tracking-wider transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeTabMode === 'roadmap'
                    ? 'bg-[#D71930] text-white font-bold shadow-lg shadow-[#D71930]/30'
                    : 'text-[#888888] hover:text-white'
                }`}
              >
                <Compass className="w-3.5 h-3.5" />
                <span>ROADMAP</span>
              </button>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* MODE 1: INTERACTIVE COGNITIVE MIND GAME ("ANSH MIND MATRIX")   */}
        {/* ============================================================== */}
        {activeTabMode === 'game' && (
          <div className="rounded-2xl bg-[#0c0c0c] border border-white/15 p-6 sm:p-8 relative shadow-2xl overflow-hidden animate-in fade-in duration-300">
            {/* Top HUD Game Diagnostic Bar with Equalizer Wave */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-white/10 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#D71930]/20 border border-[#D71930]/40 flex items-center justify-center text-[#D71930]">
                  <Gamepad2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#D71930] font-bold">
                      COGNITIVE SYNAPSE CHALLENGE
                    </span>
                    {/* Audio visualizer equalizer */}
                    <div className="flex items-center gap-0.5 h-3">
                      <span className="w-1 bg-[#D71930] rounded-full animate-pulse h-2" />
                      <span className="w-1 bg-emerald-400 rounded-full animate-pulse h-3" />
                      <span className="w-1 bg-cyan-400 rounded-full animate-pulse h-2" />
                      <span className="w-1 bg-amber-400 rounded-full animate-pulse h-3" />
                    </div>
                  </div>
                  <h3 className="font-['Syne',sans-serif] text-lg sm:text-xl font-bold text-white">
                    Synchronize Ansh's Engineering Mind Matrix
                  </h3>
                </div>
              </div>

              {/* Progress & XP Counter */}
              <div className="flex items-center gap-3 text-xs font-mono">
                <div className="px-3 py-1.5 rounded-xl bg-black border border-white/10 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span className="text-[#888888]">COGNITIVE XP:</span>
                  <span className="text-amber-300 font-bold">{scoreXP}</span>
                </div>

                <div className="px-3 py-1.5 rounded-xl bg-black border border-white/10 flex items-center gap-2">
                  <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                  <span className="text-[#888888]">SYNC:</span>
                  <span className="text-emerald-400 font-bold">{syncPercentage}%</span>
                </div>
              </div>
            </div>

            {/* Game Card Content */}
            {!gameCompleted ? (
              <div className="space-y-6">
                
                {/* Challenge Header & Sector Tag */}
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded text-[10px] font-mono uppercase tracking-wider bg-[#D71930]/15 text-[#D71930] border border-[#D71930]/30 font-bold">
                    SECTOR {currentChallengeIndex + 1} OF {JARVIS_MIND_GAME_CHALLENGES.length} • {currentChallenge.sector}
                  </span>
                  <span className="text-xs font-mono text-[#888888]">
                    +{currentChallenge.xp} XP ON CLEARANCE
                  </span>
                </div>

                {/* Question */}
                <div className="p-5 rounded-xl bg-[#111111] border border-white/10">
                  <h4 className="font-['Syne',sans-serif] text-base sm:text-lg lg:text-xl font-semibold text-white leading-relaxed">
                    {currentChallenge.question}
                  </h4>
                </div>

                {/* 4 Interactive Answer Options */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {currentChallenge.options.map((opt, oIdx) => {
                    const isSelected = selectedAnswer === oIdx;
                    const isCorrect = oIdx === currentChallenge.correctIndex;
                    let btnStyle = 'border-white/10 bg-black/60 hover:border-white/30 hover:bg-[#141414] text-[#cccccc]';

                    if (selectedAnswer !== null) {
                      if (isCorrect) {
                        btnStyle = 'border-emerald-500 bg-emerald-500/20 text-emerald-200 shadow-lg shadow-emerald-500/20';
                      } else if (isSelected && !isCorrect) {
                        btnStyle = 'border-red-500 bg-red-500/20 text-red-200';
                      } else {
                        btnStyle = 'border-white/5 bg-black/40 text-[#555555] opacity-50';
                      }
                    }

                    return (
                      <button
                        key={oIdx}
                        onClick={() => handleSelectAnswer(oIdx)}
                        disabled={selectedAnswer !== null}
                        className={`p-4 rounded-xl border text-left text-xs sm:text-sm font-mono transition-all flex items-start gap-3 cursor-pointer ${btnStyle}`}
                      >
                        <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center shrink-0 text-[10px] font-bold mt-0.5">
                          {String.fromCharCode(65 + oIdx)}
                        </span>
                        <span className="flex-1 font-medium">{opt}</span>
                        {selectedAnswer !== null && isCorrect && (
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        )}
                        {selectedAnswer !== null && isSelected && !isCorrect && (
                          <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Secret Intel & Verified Fact Reveal */}
                {showIntel && (
                  <div className="p-4 rounded-xl bg-black/80 border border-[#D71930]/30 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>JARVIS VERIFIED DOSSIER INTEL UNLOCKED:</span>
                    </div>
                    <p className="text-xs sm:text-sm font-mono text-[#d0d0d0] leading-relaxed">
                      {currentChallenge.intel}
                    </p>
                    <div className="pt-2 flex items-center justify-between">
                      <span className="text-[10px] font-mono text-amber-300">
                        ✦ UNLOCKED BADGE: {currentChallenge.badgeUnlocked}
                      </span>
                      <button
                        onClick={handleNextChallenge}
                        className="px-4 py-2 rounded-lg bg-[#D71930] hover:bg-[#ba1427] text-white text-xs font-mono font-bold tracking-wider transition-all flex items-center gap-1.5 shadow-md shadow-[#D71930]/30 cursor-pointer"
                      >
                        <span>{currentChallengeIndex < JARVIS_MIND_GAME_CHALLENGES.length - 1 ? 'NEXT SYNAPSE' : 'FINALIZE MATRIX'}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}

              </div>
            ) : (
              /* Game Completed Clearance Screen */
              <div className="py-8 text-center space-y-5 animate-in zoom-in-95 duration-300">
                <div className="w-20 h-20 mx-auto rounded-2xl bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center text-emerald-400 shadow-[0_0_50px_rgba(16,185,129,0.3)]">
                  <Trophy className="w-10 h-10" />
                </div>

                <div className="space-y-1">
                  <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-bold">
                    100% COGNITIVE SYNCHRONIZATION ACHIEVED
                  </div>
                  <h3 className="font-['Syne',sans-serif] text-3xl sm:text-4xl font-extrabold text-white">
                    VERIFIED SDE MASTER CLEARANCE
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-[#a0a0a0] max-w-lg mx-auto">
                    You have successfully decrypted and verified Ansh Dubey's software engineering credentials, World Bank PESA project, and college presidential honors.
                  </p>
                </div>

                {/* Score & Badges Vault */}
                <div className="p-4 rounded-xl bg-black border border-white/10 max-w-lg mx-auto space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono border-b border-white/10 pb-2">
                    <span className="text-[#888888]">FINAL SCORE:</span>
                    <span className="text-amber-300 font-bold text-sm">{scoreXP} XP</span>
                  </div>
                  <div className="text-left">
                    <span className="text-[10px] font-mono text-[#777777] uppercase tracking-wider block mb-1.5">
                      Clearance Badges Earned:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {unlockedBadges.map((badge, bIdx) => (
                        <span key={bIdx} className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-semibold">
                          ✓ {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-3 pt-2">
                  <button
                    onClick={handleRestartGame}
                    className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-mono font-bold tracking-wider transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>REPLAY SYNAPSE MATRIX</span>
                  </button>

                  <a
                    href="#projects"
                    className="px-5 py-2.5 rounded-xl bg-[#D71930] hover:bg-[#ba1427] text-white text-xs font-mono font-bold tracking-wider transition-all shadow-lg shadow-[#D71930]/30 flex items-center gap-2"
                  >
                    <span>EXPLORE PRODUCTION WORK</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            )}

            {/* Bottom Status Ticker */}
            <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between text-[11px] font-mono text-[#666666] gap-2">
              <span className="flex items-center gap-1.5 text-white/80">
                <Radio className="w-3.5 h-3.5 text-emerald-400" />
                <span>INTELLIGENCE STREAM: ACTIVE & VERIFIED</span>
              </span>
              <span>ANSH DUBEY // SDE COGNITIVE MIND ENGINE</span>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* MODE 2: 8-NODE SYSTEM TELEMETRY TOPOLOGY (Standard View)       */}
        {/* ============================================================== */}
        {activeTabMode === 'telemetry' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-in fade-in duration-300">
            {/* LEFT: Neural Synapse Map / Interactive Grid (Col 1-7) */}
            <div className="lg:col-span-7 rounded-2xl bg-[#0a0a0a] border border-white/15 p-6 sm:p-8 relative shadow-2xl overflow-hidden min-h-[480px] flex flex-col justify-between">
              
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
                      onClick={() => {
                        playCyberAudio('click');
                        setActiveNodeId(node.id);
                      }}
                      className={`relative p-3.5 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between group cursor-pointer ${
                        isSelected
                          ? 'border-[#D71930] bg-[#D71930]/15 shadow-xl shadow-[#D71930]/25 -translate-y-1'
                          : isCore
                          ? 'border-white/30 bg-[#121212] hover:border-[#D71930]'
                          : 'border-white/10 bg-[#0d0d0d] hover:border-white/30 hover:bg-[#141414]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span 
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: node.color }}
                        />
                        <span className="text-[9px] font-mono text-[#777777] uppercase truncate max-w-[80px]">
                          {node.type.split('_')[0]}
                        </span>
                      </div>

                      <div className="space-y-1">
                        <h4 className="font-['Syne',sans-serif] text-xs font-bold text-white group-hover:text-[#D71930] transition-colors leading-tight line-clamp-2">
                          {node.name}
                        </h4>
                        <div className="text-[10px] font-mono font-semibold" style={{ color: node.color }}>
                          {node.metric}
                        </div>
                      </div>

                      {isSelected && (
                        <div className="absolute top-2 right-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D71930] animate-ping block" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

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

              <div className="space-y-2">
                <span className="text-[11px] font-mono text-[#a0a0a0] uppercase tracking-wider flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-[#D71930]" /> Architectural Intelligence
                </span>
                <p className="text-xs sm:text-sm text-[#cccccc] font-light leading-relaxed">
                  {activeNode.summary}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-black border border-white/10 font-mono text-[11px] space-y-1 text-[#888888]">
                <div className="text-emerald-400 font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>JARVIS TELEMETRY FEED:</span>
                </div>
                <div className="text-white/80">&gt; node.sync("{activeNode.id}");</div>
                <div className="text-[#D71930]">&gt; verified_status: VALIDATED_OK</div>
                <div className="text-cyan-300">&gt; telemetry: active_connections = 100%</div>
              </div>

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

              <div className="pt-2 flex items-center justify-between">
                <a
                  href={
                    activeNode.id === 'esetu' || activeNode.id === 'heritage'
                      ? '#projects'
                      : activeNode.id === 'president'
                      ? '#leadership'
                      : activeNode.id === 'pesa'
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
        )}

        {/* ============================================================== */}
        {/* MODE 3: COMPLETE LIFE & SKILLS ROADMAP TIMELINE                */}
        {/* ============================================================== */}
        {activeTabMode === 'roadmap' && (
          <div className="rounded-2xl bg-[#0c0c0c] border border-white/15 p-6 sm:p-8 relative shadow-2xl overflow-hidden animate-in fade-in duration-300 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-[#D71930] font-bold">
                  CHRONOLOGICAL JOURNEY
                </div>
                <h3 className="font-['Syne',sans-serif] text-xl sm:text-2xl font-black text-white">
                  Ansh Dubey's Life & Engineering Evolution (2021 – Present)
                </h3>
              </div>
              <span className="text-xs font-mono text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                100% Verified Milestones
              </span>
            </div>

            {/* Step-by-Step Vertical Roadmap Timeline */}
            <div className="relative border-l-2 border-[#D71930]/40 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-8">
              {LIFE_TIMELINE_NODES.map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Node Icon */}
                  <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-[#111111] border-2 border-[#D71930] group-hover:bg-[#D71930] transition-colors flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-white block" />
                  </div>

                  <div className="p-5 rounded-xl bg-black/60 border border-white/10 hover:border-[#D71930]/50 transition-all space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-mono text-[#D71930] font-bold">
                        {item.year}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-white/5 border border-white/10 text-amber-300 font-semibold">
                        {item.badge}
                      </span>
                    </div>

                    <h4 className="font-['Syne',sans-serif] text-base sm:text-lg font-bold text-white">
                      {item.title}
                    </h4>

                    <div className="text-xs font-mono text-[#888888]">
                      {item.institution}
                    </div>

                    <p className="text-xs sm:text-sm text-[#b0b0b0] font-light leading-relaxed pt-1">
                      {item.highlight}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
