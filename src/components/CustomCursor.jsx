import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [dotPos, setDotPos] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e) => {
      setDotPos({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const target = e.target;
      const isInteractive = target.closest('a, button, input, textarea, [role="button"], .cursor-pointer');
      setIsPointer(!!isInteractive);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Smooth trailing effect
  useEffect(() => {
    let animationFrameId;

    const updatePosition = () => {
      setPosition(prev => ({
        x: prev.x + (dotPos.x - prev.x) * 0.18,
        y: prev.y + (dotPos.y - prev.y) * 0.18,
      }));
      animationFrameId = requestAnimationFrame(updatePosition);
    };

    animationFrameId = requestAnimationFrame(updatePosition);
    return () => cancelAnimationFrame(animationFrameId);
  }, [dotPos]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer soft trailing crimson aura */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-50 transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2 rounded-full hidden md:block"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
          width: isPointer ? '48px' : '32px',
          height: isPointer ? '48px' : '32px',
          border: '1.5px solid rgba(215, 25, 48, 0.4)',
          backgroundColor: isPointer ? 'rgba(215, 25, 48, 0.1)' : 'transparent',
          boxShadow: isPointer ? '0 0 20px rgba(215, 25, 48, 0.35)' : 'none',
          transition: 'width 0.2s, height 0.2s, background-color 0.2s, border-color 0.2s',
        }}
      />
      {/* Central precise crimson dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D71930] hidden md:block shadow-[0_0_8px_#D71930]"
        style={{
          transform: `translate3d(${dotPos.x}px, ${dotPos.y}px, 0) translate(-50%, -50%)`,
          width: isPointer ? '8px' : '5px',
          height: isPointer ? '8px' : '5px',
          transition: 'width 0.15s, height 0.15s',
        }}
      />
    </>
  );
}

