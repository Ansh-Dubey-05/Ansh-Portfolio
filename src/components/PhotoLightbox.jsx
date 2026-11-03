import React from 'react';
import { X, ZoomIn, Download, ExternalLink } from 'lucide-react';

export default function PhotoLightbox({ imageSrc, caption, onClose }) {
  if (!imageSrc) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-lg animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="w-full flex items-center justify-between pb-3 mb-2 text-white border-b border-white/10">
          <span className="text-xs font-mono text-[#D71930] uppercase tracking-wider font-semibold">
            ARCHIVAL PHOTOGRAPH • HIGH RESOLUTION
          </span>

          <div className="flex items-center gap-2">
            <a
              href={imageSrc}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              title="Open full image in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 hover:bg-[#D71930] text-white transition-colors"
              title="Close image"
              aria-label="Close image"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Image Container */}
        <div className="relative rounded-xl overflow-hidden border border-white/20 shadow-2xl max-h-[80vh] flex items-center justify-center bg-black">
          <img
            src={imageSrc}
            alt={caption || 'Archival image'}
            className="w-full h-auto max-h-[78vh] object-contain"
          />
        </div>

        {/* Caption */}
        {caption && (
          <div className="w-full text-center pt-3 text-xs sm:text-sm font-mono text-[#cccccc]">
            {caption}
          </div>
        )}
      </div>
    </div>
  );
}

