import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, MoveHorizontal } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  title: string;
  description: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = 'Before',
  afterLabel = 'After talatasva Glow ✨',
  title,
  description
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <div className="bg-[#000000] border border-[#FF1493] p-4 text-white shadow-[0_2px_15px_rgba(255,20,147,0.25)] font-sans">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-3 gap-2 border-b border-[#331122] pb-2">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF69B4] flex items-center gap-1 font-mono">
            <Sparkles className="w-3.5 h-3.5 text-[#FFD700]" /> Real Client Transformation
          </span>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-white tracking-tight">{title}</h3>
        </div>
        <p className="text-xs text-[#CCCCCC] max-w-sm">{description}</p>
      </div>

      {/* Slider Viewport */}
      <div
        ref={containerRef}
        className="relative h-[320px] sm:h-[400px] overflow-hidden cursor-ew-resize select-none border-2 border-[#D2006B] shadow-inner touch-none bg-black"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
      >
        {/* After Image (Full width background) */}
        <img
          src={afterImage}
          alt="After salon transformation"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          referrerPolicy="no-referrer"
        />

        {/* Before Image (Clipped overlay) */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={beforeImage}
            alt="Before hair"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            style={{
              width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
              maxWidth: 'none'
            }}
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Dividing Vertical Line & Drag Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-[#FF1493] shadow-[0_0_10px_#FF1493] pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-none bg-[#D2006B] border-2 border-white flex items-center justify-center text-white shadow-lg pointer-events-auto cursor-ew-resize">
            <MoveHorizontal className="w-4 h-4 text-white" />
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-3 left-3 bg-black/80 text-[#FFB6C1] text-[11px] font-bold px-2 py-0.5 border border-[#FF1493] pointer-events-none">
          {beforeLabel}
        </div>
        <div className="absolute top-3 right-3 bg-[#D2006B]/90 text-white text-[11px] font-bold px-2 py-0.5 border border-white pointer-events-none shadow-md">
          {afterLabel}
        </div>

        {/* Bottom helper prompt */}
        <div className="absolute bottom-2 inset-x-0 text-center pointer-events-none">
          <span className="bg-black/80 text-[#FFD700] text-[10px] px-2.5 py-0.5 border border-[#FF69B4] font-mono">
            &larr; Drag to reveal the bounce &amp; gloss &rarr;
          </span>
        </div>
      </div>
    </div>
  );
};
