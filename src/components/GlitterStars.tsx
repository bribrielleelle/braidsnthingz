import React from 'react';

export const GlitterStars: React.FC<{ side: 'left' | 'right' }> = ({ side }) => {
  const stars = Array.from({ length: 14 });

  return (
    <div 
      className={`hidden xl:flex flex-col items-center gap-12 py-10 fixed top-24 ${
        side === 'left' ? 'left-3' : 'right-3'
      } pointer-events-none select-none z-10`}
    >
      {stars.map((_, i) => (
        <div 
          key={i} 
          className="relative group transition-transform hover:scale-125"
          style={{ animationDelay: `${i * 0.15}s` }}
        >
          {/* 5-point retro star with pink glitter gradient */}
          <svg 
            className="w-7 h-7 filter drop-shadow-[0_0_8px_rgba(255,20,147,0.8)] animate-sparkle" 
            viewBox="0 0 24 24" 
            fill="url(#pinkGlitterGrad)"
          >
            <defs>
              <linearGradient id="pinkGlitterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFF0F5" />
                <stop offset="30%" stopColor="#FF69B4" />
                <stop offset="70%" stopColor="#E6007A" />
                <stop offset="100%" stopColor="#FF1493" />
              </linearGradient>
            </defs>
            <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
          </svg>
        </div>
      ))}
    </div>
  );
};
