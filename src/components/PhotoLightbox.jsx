import React, { useEffect } from 'react';
import { X, ExternalLink, Download } from 'lucide-react';

export default function PhotoLightbox({ imageSrc, caption, onClose }) {
  // Listen for Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!imageSrc) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/92 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Floating Viewport Close Button (Guaranteed Accessible on Mobile & Desktop) */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50 p-3 rounded-full bg-[#D71930] hover:bg-[#b81428] text-white shadow-2xl transition-transform hover:scale-110 active:scale-95 cursor-pointer flex items-center gap-1.5"
        title="Close (Esc)"
        aria-label="Close image modal"
      >
        <X className="w-5 h-5" />
        <span className="hidden sm:inline text-xs font-mono font-bold pr-1">CLOSE</span>
      </button>

      {/* Main Lightbox Content */}
      <div
        className="relative max-w-5xl w-full flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="w-full flex items-center justify-between pb-3 mb-3 text-white border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D71930] animate-pulse"></span>
            <span className="text-xs font-mono text-[#D71930] uppercase tracking-wider font-semibold">
              ARCHIVAL PHOTOGRAPH • HIGH RESOLUTION
            </span>
          </div>

          <div className="flex items-center gap-2 pr-14 sm:pr-0">
            <a
              href={imageSrc}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              title="Open full image in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              className="p-2 rounded-full bg-white/10 hover:bg-[#D71930] text-white transition-colors cursor-pointer"
              title="Close image (Esc)"
              aria-label="Close image modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Image Container */}
        <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-[0_0_60px_rgba(0,0,0,0.9)] max-h-[78vh] flex items-center justify-center bg-black">
          <img
            src={imageSrc}
            alt={caption || 'Archival image'}
            className="w-full h-auto max-h-[76vh] object-contain select-none"
          />
        </div>

        {/* Caption */}
        {caption && (
          <div className="w-full text-center pt-3 text-xs sm:text-sm font-mono text-[#cccccc] max-w-2xl">
            {caption}
          </div>
        )}

        <div className="text-[10px] font-mono text-[#777777] mt-1">
          Click anywhere outside or press ESC to exit
        </div>
      </div>
    </div>
  );
}
