import React, { useState, useEffect } from 'react';
import { FONT_THEME_OPTIONS, COLOR_THEME_OPTIONS } from '../data/portfolioData';
import { Palette, Type, Sparkles, Check, RotateCcw, X, Sliders, Wand2 } from 'lucide-react';

export default function ThemeFontCustomizer() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeFont, setActiveFont] = useState('editorial');
  const [activeColor, setActiveColor] = useState('crimson');

  // Listen to open event from Navbar or anywhere in page
  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-theme-customizer', handleOpen);
    return () => window.removeEventListener('open-theme-customizer', handleOpen);
  }, []);

  // Apply fonts and theme colors dynamically to document root and body
  useEffect(() => {
    const selectedFont = FONT_THEME_OPTIONS.find(f => f.id === activeFont) || FONT_THEME_OPTIONS[0];
    const selectedColor = COLOR_THEME_OPTIONS.find(c => c.id === activeColor) || COLOR_THEME_OPTIONS[0];

    // Set theme attribute for global CSS re-coloring
    document.documentElement.setAttribute('data-theme', activeColor);
    document.body.setAttribute('data-theme', activeColor);

    // Set font classes on body
    document.body.classList.remove('font-cyberpunk', 'font-modern', 'font-terminal', 'font-editorial');
    if (activeFont === 'cyberpunk') {
      document.body.classList.add('font-cyberpunk');
    } else if (activeFont === 'modern') {
      document.body.classList.add('font-modern');
    } else if (activeFont === 'terminal') {
      document.body.classList.add('font-terminal');
    } else {
      document.body.classList.add('font-editorial');
    }

    // Set CSS custom properties on document
    document.documentElement.style.setProperty('--color-crimson', selectedColor.hex);
    document.documentElement.style.setProperty('--theme-glow', selectedColor.glow);
  }, [activeFont, activeColor]);

  const handleShuffleAll = () => {
    const otherFonts = FONT_THEME_OPTIONS.filter(f => f.id !== activeFont);
    const otherColors = COLOR_THEME_OPTIONS.filter(c => c.id !== activeColor);
    const randomFont = otherFonts[Math.floor(Math.random() * otherFonts.length)].id;
    const randomColor = otherColors[Math.floor(Math.random() * otherColors.length)].id;
    setActiveFont(randomFont);
    setActiveColor(randomColor);
  };

  const handleReset = () => {
    setActiveFont('editorial');
    setActiveColor('crimson');
  };

  return (
    <>
      {/* Floating Trigger Pill (Bottom-Right, Enhanced Visibility) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 px-4 py-3 rounded-full bg-[#D71930] hover:bg-[#b51426] text-white shadow-[0_10px_30px_rgba(215,25,48,0.5)] border-2 border-white/30 backdrop-blur-xl flex items-center gap-2.5 text-xs font-mono font-bold tracking-wider transition-all duration-300 hover:scale-110 active:scale-95 group cursor-pointer"
        title="Open Theme & Typography Studio"
        aria-label="Customize Site Fonts & Theme Colors"
      >
        <Palette className="w-4 h-4 text-white animate-spin-slow" />
        <span className="hidden sm:inline">THEME & FONTS</span>
        <span className="sm:hidden font-black">Aa / 🎨</span>
      </button>

      {/* Floating Drawer / Customizer Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center sm:justify-end sm:items-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="w-full max-w-md rounded-2xl bg-[#0c0c0c] border border-white/20 p-6 shadow-2xl text-white space-y-6 animate-in slide-in-from-right-4 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#D71930] flex items-center justify-center">
                  <Palette className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-['Syne',sans-serif] text-base font-bold uppercase tracking-wider">
                    Typography & Theme Studio
                  </h3>
                  <p className="text-[10px] font-mono text-[#888888]">
                    Applies live across the entire website instantly
                  </p>
                </div>
              </div>

              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors cursor-pointer"
                aria-label="Close customizer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Typography Presets */}
            <div className="space-y-2.5">
              <div className="text-xs font-mono text-white/90 uppercase tracking-wider flex items-center justify-between font-semibold">
                <span>Select Typography Style:</span>
                <span className="text-[#D71930] font-bold">{activeFont.toUpperCase()}</span>
              </div>
              
              <div className="grid grid-cols-2 gap-2.5">
                {FONT_THEME_OPTIONS.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setActiveFont(f.id)}
                    className={`p-3 rounded-xl border text-left transition-all text-xs font-mono flex flex-col justify-between cursor-pointer ${
                      activeFont === f.id
                        ? 'border-[#D71930] bg-[#D71930]/20 shadow-lg shadow-[#D71930]/30 -translate-y-0.5'
                        : 'border-white/10 bg-white/[0.03] hover:border-white/30 hover:bg-white/[0.06]'
                    }`}
                  >
                    <div className="font-bold text-white mb-1">{f.name.split(' (')[0]}</div>
                    <div className="text-[10px] text-[#888888] leading-tight">{f.description}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Accent Theme Colors */}
            <div className="space-y-2.5">
              <div className="text-xs font-mono text-white/90 uppercase tracking-wider flex items-center justify-between font-semibold">
                <span>Select Glow Accent Color:</span>
                <span className="font-bold uppercase" style={{ color: COLOR_THEME_OPTIONS.find(c=>c.id===activeColor)?.hex }}>
                  {activeColor}
                </span>
              </div>
              <div className="grid grid-cols-4 gap-2.5">
                {COLOR_THEME_OPTIONS.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setActiveColor(c.id)}
                    className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center gap-1.5 cursor-pointer ${
                      activeColor === c.id
                        ? 'border-white bg-white/15 shadow-xl -translate-y-0.5'
                        : 'border-white/10 bg-black/60 hover:border-white/30 hover:bg-white/5'
                    }`}
                  >
                    <span 
                      className="w-5 h-5 rounded-full shadow-md block"
                      style={{ backgroundColor: c.hex }}
                    />
                    <span className="text-[11px] font-mono truncate w-full text-white/90 font-medium">
                      {c.name.split(' ')[0]}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Multiple & All Actions (Shuffle & Reset) */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
              <button
                onClick={handleShuffleAll}
                className="flex-1 py-3 px-4 rounded-xl bg-white/10 hover:bg-[#D71930] border border-white/15 hover:border-[#D71930] text-xs font-mono font-bold tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>SHUFFLE COMBINATIONS</span>
              </button>

              <button
                onClick={handleReset}
                className="py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-[#a0a0a0] hover:text-white transition-all flex items-center gap-1.5 cursor-pointer"
                title="Reset to default reference poster"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
