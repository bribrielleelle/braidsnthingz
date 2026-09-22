import React from 'react';
import { Sparkles, Calendar, Star } from 'lucide-react';
import { Stylist } from '../types';

interface Top8StylistsProps {
  stylists: Stylist[];
  onSelectStylistForBooking: (stylistId: string) => void;
}

export const Top8Stylists: React.FC<Top8StylistsProps> = ({ 
  stylists, 
  onSelectStylistForBooking 
}) => {
  return (
    <div id="top8-section" className="bg-[#000000] border border-[#FF1493] overflow-hidden text-white mb-6 shadow-[0_2px_15px_rgba(255,20,147,0.2)] font-sans">
      {/* Header bar */}
      <div className="bg-[#D2006B] px-3 py-1.5 flex items-center justify-between text-white border-b border-[#A80054]">
        <div className="flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-[#FFD700]" />
          <h2 className="font-bold text-xs uppercase tracking-wide">
            talatasva&apos;s Friend Space (Top 8 Stylists)
          </h2>
        </div>
        <span className="text-[11px] text-[#FFB6C1] font-mono">
          [8 Master Artists]
        </span>
      </div>

      {/* Top 8 Grid */}
      <div className="p-3 sm:p-4 bg-[#0A0508]">
        <p className="text-xs text-[#CCCCCC] mb-3">
          talatasva has <strong className="text-[#FF69B4]">8</strong> top master hair artists in her inner circle. Click any stylist to book a direct chair:
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {stylists.slice(0, 8).map((stylist) => (
            <div 
              key={stylist.id}
              onClick={() => onSelectStylistForBooking(stylist.id)}
              className="group flex flex-col items-center text-center p-2 bg-[#12050E] border border-[#331122] hover:border-[#FF1493] transition-all cursor-pointer hover:shadow-[0_0_12px_rgba(255,20,147,0.4)]"
            >
              {/* Stylist Name Above Photo (Authentic MySpace Top 8 feature!) */}
              <p className="text-xs font-bold text-[#FF69B4] group-hover:text-white truncate w-full mb-1">
                {stylist.name.split(' ')[0]}
              </p>

              {/* Square photo with warm glamour filter */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 border-2 border-[#D2006B] overflow-hidden mb-1.5 bg-black relative">
                <img 
                  src={stylist.avatar} 
                  alt={stylist.name}
                  className="w-full h-full object-cover filter contrast-110 group-hover:scale-105 transition-transform"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-0.5 right-0.5 bg-black/80 px-1 py-0.2 text-[9px] text-[#FFD700] flex items-center gap-0.5">
                  <Star className="w-2.5 h-2.5 fill-[#FFD700]" />
                  <span>{stylist.rating}</span>
                </div>
              </div>

              {/* Specialty tag */}
              <p className="text-[10px] text-[#AAAAAA] truncate w-full font-mono">
                {stylist.specialties[0]}
              </p>

              {/* Quick Book Button */}
              <button 
                type="button"
                className="mt-1.5 w-full bg-[#3B071C] group-hover:bg-[#D2006B] text-[#FFB6C1] group-hover:text-white text-[10px] font-bold py-0.5 px-1 border border-[#FF69B4] flex items-center justify-center gap-1 transition-colors"
              >
                <Calendar className="w-2.5 h-2.5" />
                <span>Book Chair</span>
              </button>
            </div>
          ))}
        </div>

        {/* Footer link inside card */}
        <div className="mt-4 pt-2.5 border-t border-[#331122] text-center">
          <a 
            href="#services-section" 
            className="text-xs text-[#FF69B4] hover:text-white hover:underline font-bold"
          >
            View All of talatasva&apos;s Hair Services &amp; Specialties &raquo;
          </a>
        </div>
      </div>
    </div>
  );
};
