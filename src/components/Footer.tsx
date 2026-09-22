import React from 'react';
import { Heart, Sparkles, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const Footer: React.FC = () => {
  return (
    <footer id="contact-section" className="w-full bg-[#000000] border-t-2 border-[#D2006B] py-8 px-4 text-white font-sans text-xs">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Salon Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 bg-[#0A0508] border border-[#331122]">
          {/* Location & Hours */}
          <div className="space-y-2">
            <h4 className="font-bold text-[#FF1493] text-sm uppercase flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#FFD700]" />
              <span>Studio Location</span>
            </h4>
            <p className="text-[#CCCCCC]">{SALON_INFO.address}</p>
            <p className="text-[#CCCCCC]">{SALON_INFO.city}</p>
            <p className="text-[#FFB6C1] text-[11px] font-mono mt-1">Valet parking available on Melrose</p>
          </div>

          {/* Contact & Booking */}
          <div className="space-y-2">
            <h4 className="font-bold text-[#FF1493] text-sm uppercase flex items-center gap-1.5">
              <Phone className="w-4 h-4 text-[#FFD700]" />
              <span>Direct Concierge</span>
            </h4>
            <p className="text-[#CCCCCC]">Direct Phone: <a href={`tel:${SALON_INFO.phone}`} className="text-white hover:text-[#FF69B4] font-bold">{SALON_INFO.phone}</a></p>
            <p className="text-[#CCCCCC]">Email: <a href={`mailto:${SALON_INFO.email}`} className="text-white hover:text-[#FF69B4]">{SALON_INFO.email}</a></p>
            <p className="text-[#39FF14] text-[11px] font-mono mt-1 font-bold">● SMS Consultations: Active 24/7</p>
          </div>

          {/* Studio Hours */}
          <div className="space-y-2">
            <h4 className="font-bold text-[#FF1493] text-sm uppercase flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#FFD700]" />
              <span>Studio Hours</span>
            </h4>
            {SALON_INFO.hours.map((h, i) => (
              <p key={i} className="text-[#CCCCCC]">
                <strong className="text-white">{h.days}:</strong> {h.time}
              </p>
            ))}
          </div>
        </div>

        {/* Authentic MySpace Centered Text Links */}
        <div className="text-center space-y-3">
          <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-1 text-xs text-[#FF69B4] font-bold">
            <a href="#about-section" className="hover:underline hover:text-white">About Us</a>
            <span className="text-[#444444]">|</span>
            <a href="#services-section" className="hover:underline hover:text-white">Services</a>
            <span className="text-[#444444]">|</span>
            <a href="#top8-section" className="hover:underline hover:text-white">Top 8 Stylists</a>
            <span className="text-[#444444]">|</span>
            <a href="#booking-system" className="hover:underline hover:text-white">Book Appointment</a>
            <span className="text-[#444444]">|</span>
            <a href="#music-player" className="hover:underline hover:text-white">Salon Playlist</a>
            <span className="text-[#444444]">|</span>
            <a href="#comments-section" className="hover:underline hover:text-white">Client Reviews</a>
            <span className="text-[#444444]">|</span>
            <a href="#contact-section" className="hover:underline hover:text-white">Directions</a>
          </div>

          <p className="text-[#888888] text-[11px] font-mono">
            &copy; 2006&ndash;2026 MySpace.com / talatasva Hair Atelier. All Rights Reserved. Built with early 2000s love &amp; flawless hair vibes.
          </p>

          <p className="text-[#FFB6C1] text-xs font-serif italic flex items-center justify-center gap-1">
            <span>&ldquo;it is what it is...&rdquo;</span>
            <Heart className="w-3.5 h-3.5 fill-[#FF1493] text-[#FF1493] inline" />
          </p>
        </div>
      </div>
    </footer>
  );
};
