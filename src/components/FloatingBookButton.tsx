import React, { useState, useEffect } from 'react';
import { Calendar, Sparkles, Heart } from 'lucide-react';

interface FloatingBookButtonProps {
  onOpenBooking: () => void;
}

export const FloatingBookButton: React.FC<FloatingBookButtonProps> = ({ onOpenBooking }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-5 right-5 z-40 animate-in fade-in slide-in-from-bottom-5 duration-300">
      <button
        id="floating-book-now-button"
        onClick={onOpenBooking}
        className="group flex items-center gap-2 px-4 py-2.5 bg-[#D2006B] hover:bg-[#FF007F] text-white text-xs uppercase tracking-wider font-bold shadow-[0_0_20px_rgba(255,20,147,0.7)] transition-all duration-200 border-2 border-white cursor-pointer active:scale-95"
        aria-label="Quick Book Appointment"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#39FF14] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#39FF14]"></span>
        </span>
        <Calendar className="w-3.5 h-3.5 text-[#FFD700] group-hover:rotate-12 transition-transform" />
        <span>Book Chair 💕</span>
      </button>
    </div>
  );
};
