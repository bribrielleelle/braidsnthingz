import React, { useState } from 'react';
import { Search, Sparkles, Calendar, Menu, X, Heart } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchCategory, setSearchCategory] = useState('Services');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const elem = document.getElementById('services-section');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="w-full z-40 sticky top-0 shadow-md">
      {/* Top Black Utility Bar (Authentic MySpace Style) */}
      <div className="bg-[#000000] border-b border-[#333333] px-3 sm:px-6 py-2 text-white">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          {/* Logo & Tagline */}
          <div className="flex items-center gap-2">
            <a href="#" className="flex items-center gap-1.5 font-bold tracking-tight text-white hover:text-[#FF69B4] transition-colors">
              <span className="text-xl sm:text-2xl font-black italic tracking-tighter text-[#FFFFFF]">MySpace</span>
              <span className="text-xl sm:text-2xl font-black italic tracking-tighter text-[#FF1493]">.com</span>
            </a>
            <span className="hidden md:inline-block text-xs text-[#AAAAAA] pl-2 border-l border-[#333333]">
              a place for friends & flawless hair 💕
            </span>
          </div>

          {/* Search Box */}
          <form onSubmit={handleSearchSubmit} className="hidden sm:flex items-center bg-white rounded-none border border-[#999999] overflow-hidden text-xs">
            <select 
              value={searchCategory}
              onChange={(e) => setSearchCategory(e.target.value)}
              className="bg-[#EFEFEF] text-[#333333] px-2 py-1 border-r border-[#CCCCCC] outline-none font-sans font-medium"
            >
              <option value="Services">Services</option>
              <option value="Stylists">Stylists</option>
              <option value="Haircuts">Haircuts</option>
              <option value="Balayage">Balayage</option>
            </select>
            <input 
              type="text"
              placeholder="Search treatments, artists..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-2 py-1 text-black outline-none w-36 md:w-52 font-sans"
            />
            <button 
              type="submit" 
              className="bg-[#D2006B] hover:bg-[#FF007F] text-white px-3 py-1 font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-1"
            >
              <Search className="w-3 h-3" />
              <span>Search</span>
            </button>
          </form>

          {/* Right Utility Links */}
          <div className="flex items-center gap-3 text-xs text-[#CCCCCC]">
            <a href="#about-section" className="hover:text-[#FF69B4] hidden lg:inline">Help</a>
            <span className="text-[#555555] hidden lg:inline">|</span>
            <button 
              onClick={onOpenBooking}
              className="text-[#39FF14] hover:underline font-bold flex items-center gap-1 text-xs"
            >
              <span className="w-2 h-2 rounded-full bg-[#39FF14] animate-ping inline-block"></span>
              <span>Online Booking Open</span>
            </button>
            <span className="text-[#555555]">|</span>
            <button 
              onClick={onOpenBooking}
              className="bg-[#FF1493] hover:bg-[#FF007F] text-white text-[11px] font-bold px-2 py-0.5 border border-white"
            >
              Book Now
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="sm:hidden p-1 text-white hover:text-[#FF1493]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Main Full-Width Hot Pink Navigation Bar */}
      <nav className="bg-[#D2006B] border-b-2 border-[#A80054] px-2 sm:px-4 py-1.5 shadow-sm text-white font-sans">
        <div className="max-w-6xl mx-auto flex items-center justify-between text-xs sm:text-[13px] font-bold overflow-x-auto whitespace-nowrap scrollbar-none">
          <div className="flex items-center space-x-3 sm:space-x-5 py-0.5">
            <a href="#" className="hover:underline flex items-center gap-1 text-white">
              <span>Home</span>
            </a>
            <span className="text-[#FFB6C1] opacity-70">|</span>
            <a href="#services-section" className="hover:underline text-white">
              Browse Services
            </a>
            <span className="text-[#FFB6C1] opacity-70">|</span>
            <a href="#top8-section" className="hover:underline text-white flex items-center gap-1">
              <span>Top 8 Stylists</span>
              <Sparkles className="w-3 h-3 text-[#FFD700]" />
            </a>
            <span className="text-[#FFB6C1] opacity-70">|</span>
            <a href="#music-player" className="hover:underline text-white">
              Salon Music Jukebox
            </a>
            <span className="text-[#FFB6C1] opacity-70">|</span>
            <a href="#transformation-section" className="hover:underline text-white">
              Before & After
            </a>
            <span className="text-[#FFB6C1] opacity-70">|</span>
            <a href="#comments-section" className="hover:underline text-white">
              Client Comments
            </a>
            <span className="text-[#FFB6C1] opacity-70">|</span>
            <a href="#contact-section" className="hover:underline text-white">
              Contact / Hours
            </a>
          </div>

          <button 
            onClick={onOpenBooking}
            className="ml-3 hidden sm:flex items-center gap-1.5 bg-[#000000] hover:bg-[#1E0512] text-[#FF69B4] hover:text-white px-2.5 py-0.5 border border-[#FF69B4] text-xs font-bold transition-all shadow-[0_0_8px_rgba(255,20,147,0.4)]"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Fast Booking</span>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0A0508] border-b-2 border-[#D2006B] px-4 py-3 text-white text-sm space-y-2.5 animate-in slide-in-from-top duration-150">
          <a 
            href="#" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1 hover:text-[#FF1493] font-bold"
          >
            Home
          </a>
          <a 
            href="#services-section" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1 hover:text-[#FF1493]"
          >
            Services & Pricing
          </a>
          <a 
            href="#top8-section" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1 hover:text-[#FF1493]"
          >
            Top 8 Master Stylists
          </a>
          <a 
            href="#transformation-section" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1 hover:text-[#FF1493]"
          >
            Before & After Hair Transformations
          </a>
          <a 
            href="#comments-section" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1 hover:text-[#FF1493]"
          >
            Client Reviews & Comments
          </a>
          <a 
            href="#contact-section" 
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1 hover:text-[#FF1493]"
          >
            Salon Hours & Directions
          </a>
          <div className="pt-2 border-t border-[#333333]">
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
              className="w-full bg-[#D2006B] hover:bg-[#FF007F] text-white py-2 font-bold text-center block text-sm shadow-md"
            >
              Book An Appointment Now 💕
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
