import React from 'react';
import { Sparkles } from 'lucide-react';

export const ProfileHeader: React.FC = () => {
  return (
    <div className="w-full bg-[#000000] border-2 border-[#D2006B] p-4 sm:p-6 mb-6 shadow-[0_4px_20px_rgba(210,0,107,0.3)] relative overflow-hidden">
      {/* Background Subtle Gradient & Sparkles */}
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#D2006B]/20 rounded-full blur-3xl pointer-events-none" />
      
      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-3 relative z-10">
        {/* Large stylized neon cursive name banner "talatasva" */}
        <div className="flex items-center gap-3">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-black italic tracking-tighter text-[#FF2A85] drop-shadow-[0_0_12px_rgba(255,42,133,0.7)] select-none">
            talatasva
          </h1>
          <span className="text-xs sm:text-sm uppercase tracking-widest text-[#FFB6C1] font-mono px-2 py-0.5 border border-[#FF2A85] bg-[#1F0311] font-bold">
            Hair Atelier
          </span>
        </div>

        {/* Tagline "it is what it is..." + Pink Glitter Kiss Lips */}
        <div className="flex items-center gap-3 md:gap-4">
          <p className="text-xl sm:text-2xl lg:text-3xl font-serif italic text-[#FFFFFF] tracking-tight">
            &ldquo;it is what it is...&rdquo;
          </p>

          {/* Decorative Pink Glitter Kiss Lips Graphic */}
          <div className="relative group cursor-pointer" title="Leave a comment baby! xo">
            <svg 
              className="w-10 h-8 sm:w-12 sm:h-9 filter drop-shadow-[0_0_8px_rgba(255,20,147,0.9)] animate-pulse" 
              viewBox="0 0 100 70" 
              fill="url(#glitterLipsGradient)"
            >
              <defs>
                <linearGradient id="glitterLipsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFF0F5" />
                  <stop offset="25%" stopColor="#FF1493" />
                  <stop offset="65%" stopColor="#C71585" />
                  <stop offset="100%" stopColor="#FF69B4" />
                </linearGradient>
              </defs>
              {/* Upper lip */}
              <path d="M 10 35 C 20 20, 35 15, 50 25 C 65 15, 80 20, 90 35 C 80 40, 65 38, 50 42 C 35 38, 20 40, 10 35 Z" />
              {/* Lower lip */}
              <path d="M 10 35 C 25 58, 75 58, 90 35 C 75 48, 25 48, 10 35 Z" />
              {/* Center opening */}
              <path d="M 22 36 C 35 41, 65 41, 78 36 C 65 39, 35 39, 22 36 Z" fill="#000000" />
            </svg>
            <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] text-[#FF69B4] font-mono tracking-tight opacity-90 hidden sm:inline">
              xo flawless hair
            </span>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Bar */}
      <div className="mt-4 pt-3 border-t border-[#331122] flex flex-wrap items-center justify-between text-xs text-[#CCCCCC] font-sans gap-2">
        <div className="flex items-center gap-2">
          <span className="text-[#39FF14] font-bold flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#39FF14] inline-block animate-ping" />
            Online Now!
          </span>
          <span className="text-[#666666]">|</span>
          <span>West Hollywood, CA</span>
          <span className="text-[#666666]">|</span>
          <span>Profile Views: <strong className="text-white">48,291</strong></span>
        </div>
        <div className="text-[#FFB6C1] flex items-center gap-1 text-[11px] font-mono">
          <Sparkles className="w-3.5 h-3.5 text-[#FFD700]" />
          <span>Last Updated: 5/10/2006</span>
        </div>
      </div>
    </div>
  );
};
