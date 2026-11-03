import React, { useState, useEffect } from 'react';
import { FONT_THEME_OPTIONS, COLOR_THEME_OPTIONS } from '../data/portfolioData';
import { Palette, Type, Sparkles, Check, RotateCcw, X, Sliders } from 'lucide-react';

export default function ThemeFontCustomizer() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeFont, setActiveFont] = useState('editorial');
  const [activeColor, setActiveColor] = useState('crimson');

  // Apply fonts and theme colors dynamically to document root
  useEffect(() => {
    const selectedFont = FONT_THEME_OPTIONS.find(f => f.id === activeFont) || FONT_THEME_OPTIONS[0];
    const selectedColor = COLOR_THEME_OPTIONS.find(c => c.id === activeColor) || COLOR_THEME_OPTIONS[0];

    // Set CSS custom properties on document
    if (activeFont === 'cyberpunk') {
      document.documentElement.style.setProperty('--font-display', "'Orbitron', sans-serif");
      document.documentElement.style.setProperty('--font-heading', "'Space Grotesk', sans-serif");
      document.body.classList.add('font-cyberpunk');
      document.body.classList.remove('font-modern', 'font-terminal');
    } else if (activeFont === 'modern') {
      document.documentElement.style.setProperty('--font-display', "'Outfit', sans-serif");
      document.documentElement.style.setProperty('--font-heading', "'Inter', sans-serif");
      document.body.classList.add('font-modern');
      document.body.classList.remove('font-cyberpunk', 'font-terminal');
    } else if (activeFont === 'terminal') {
      document.documentElement.style.setProperty('--font-display', "'JetBrains Mono', monospace");
      document.documentElement.style.setProperty('--font-heading', "'JetBrains Mono', monospace");
      document.body.classList.add('font-terminal');
      document.body.classList.remove('font-cyberpunk', 'font-modern');
    } else {
      document.documentElement.style.setProperty('--font-display', "'Bebas Neue', sans-serif");
      document.documentElement.style.setProperty('--font-heading', "'Syne', sans-serif");
      document.body.classList.remove('font-cyberpunk', 'font-modern', 'font-terminal');
    }

    // Set accent colors
    document.documentElement.style.setProperty('--color-crimson', selectedColor.hex);
    document.documentElement.style.setProperty('--theme-glow', selectedColor.glow);
  }, [activeFont, activeColor]);

  const handleShuffleAll = () => {
    const randomFont = FONT_THEME_OPTIONS[Math.floor(Math.random() * FONT_THEME_OPTIONS.length)].id;
    const randomColor = COLOR_THEME_OPTIONS[Math.floor(Math.random() * COLOR_THEME_OPTIONS.length)].id;
    setActiveFont(randomFont);
    setActiveColor(randomColor);
  };

  const handleReset = () => {
    setActiveFont('editorial');
    setActiveColor('crimson');
  };

  return (
    <>
      {/* Floating Trigger Pill (Bottom-Right) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 px-3.5 py-2.5 rounded-full bg-[#0d0d0d]/95 hover:bg-[#1a1a1a] border border-white/20 hover:border-[#D71930] text-white shadow-2xl backdrop-blur-xl flex items-center gap-2 text-xs font-mono transition-all duration-300 hover:scale-105 group cursor-pointer"
        title="Customize Typography & Theme Accents"
      >
        <div className="w-2 h-2 rounded-full bg-[#D71930] animate-ping" />
        <Type className="w-3.5 h-3.5 text-[#D71930]" />
        <span className="hidden sm:inline font-bold">FONTS & THEME</span>
        <span className="sm:hidden font-bold">Aa</span>
      </button>

      {/* Floating Drawer / Customizer Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-end sm:justify-end p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="w-full max-w-sm rounded-2xl bg-[#0c0c0c] border border-white/20 p-5 shadow-2xl text-white space-y-5 animate-in slide-in-from-right-4 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Sliders className="w-4 h-4 text-[#D71930]" />
                <h3 className="font-['Syne',sans-serif] text-sm font-bold uppercase tracking-wider">
                  Typography & Theme Studio
                </h3>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full hover:bg-white/10 text-white/70 hover:text-white"
                aria-label="Close customizer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Typography Presets */}
            <div className="space-y-2">
              <div className="text-[11px] font-mono text-[#888888] uppercase tracking-wider flex items-center justify-between">
                <span>Select Typography Style:</span>
                <span className="text-[#D71930] font-semibold">{activeFont.toUpperCase()}</span>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                {FONT_THEME_OPTIONS.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setActiveFont(f.id)}
                    className={`p-2.5 rounded-xl border text-left transition-all text-xs font-mono flex flex-col justify-between cursor-pointer ${
                      activeFont === f.id
                        ? 'border-[#D71930] bg-[#D71930]/15 shadow-md shadow-[#D71930]/20'
                        : 'border-white/10 bg-white/[0.02] hover:border-white/20'
                    }`}
                  >
                    <div className="font-bold text-white mb-0.5 truncate">{f.name.split(' ')[0]}</div>
                    <div className="text-[10px] text-[#888888] truncate">{f.tag}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Accent Theme Colors */}
            <div className="space-y-2">
              <div className="text-[11px] font-mono text-[#888888] uppercase tracking-wider">
                Select Accent Glow Color:
              </div>
              <div className="grid grid-cols-4 gap-2">
                {COLOR_THEME_OPTIONS.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setActiveColor(c.id)}
                    className={`p-2 rounded-xl border text-center transition-all flex flex-col items-center gap-1 cursor-pointer ${
                      activeColor === c.id
                        ? 'border-white bg-white/10 shadow-md'
                        : 'border-white/10 bg-black hover:border-white/20'
                    }`}
                  >
                    <span 
                      className="w-4 h-4 rounded-full shadow-sm"
                      style={{ backgroundColor: c.hex }}
                    />
                    <span className="text-[10px] font-mono truncate w-full text-white/90">
                      {c.name.split(' ')[0]}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Multiple & All Actions (Shuffle & Reset) */}
            <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-2">
              <button
                onClick={handleShuffleAll}
                className="flex-1 py-2 px-3 rounded-xl bg-white/5 hover:bg-[#D71930] border border-white/10 hover:border-[#D71930] text-xs font-mono font-semibold transition-all flex items-center justify-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Shuffle Styles</span>
              </button>

              <button
                onClick={handleReset}
                className="py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-[#a0a0a0] hover:text-white transition-all flex items-center gap-1"
                title="Reset to Reference Poster default"
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

