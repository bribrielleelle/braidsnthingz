import React from 'react';
import { 
  Mail, 
  UserPlus, 
  MessageSquare, 
  Bookmark, 
  Share2, 
  Phone, 
  Crown, 
  Sparkles, 
  Heart, 
  Scissors,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface LeftColumnProps {
  onOpenBooking: () => void;
  onOpenServiceMenu: () => void;
}

export const LeftColumn: React.FC<LeftColumnProps> = ({ onOpenBooking, onOpenServiceMenu }) => {
  return (
    <div className="w-full space-y-5 font-sans">
      {/* CARD 1: Profile Photo & Status Card */}
      <div className="bg-[#000000] border border-[#FF1493] p-4 text-white shadow-[0_2px_15px_rgba(255,20,147,0.2)]">
        <h2 className="text-xl font-bold text-[#FF1493] mb-1 font-serif tracking-tight">
          talatasva
        </h2>
        <p className="text-xs text-[#FFB6C1] italic mb-3">
          &ldquo;She&apos;s got that whole independent, wake up and make shit happen type of vibe.&rdquo;
        </p>

        {/* Profile Photo (Authentic look: slicked hair, blue eyeliner, glam lighting) */}
        <div className="relative border-2 border-[#D2006B] overflow-hidden mb-3 bg-[#11050A]">
          <img 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80" 
            alt="talatasva Salon Master"
            className="w-full h-72 object-cover filter contrast-110 brightness-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-2 left-2 bg-[#D2006B] text-white text-[10px] font-bold px-2 py-0.5 uppercase tracking-wider border border-white">
            Salon Master
          </div>
          <div className="absolute bottom-2 right-2 bg-black/80 text-[#39FF14] text-[11px] font-bold px-2 py-0.5 border border-[#39FF14] flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#39FF14] animate-ping inline-block" />
            Online Now!
          </div>
        </div>

        {/* Demographics List */}
        <div className="space-y-1 text-xs text-[#E0E0E0] border-t border-[#331122] pt-2 font-sans">
          <p><span className="text-[#FF69B4] font-semibold">Gender / Role:</span> Female • Master Stylist</p>
          <p><span className="text-[#FF69B4] font-semibold">Studio:</span> AURA Atelier, West Hollywood</p>
          <p><span className="text-[#FF69B4] font-semibold">Location:</span> Los Angeles, California</p>
          <p><span className="text-[#FF69B4] font-semibold">Last Login:</span> <span className="text-[#FFD700]">5/10/2006</span></p>
          <p><span className="text-[#FF69B4] font-semibold">Mood:</span> ✨ Slaying Hair</p>
        </div>

        {/* Quick View Links */}
        <div className="mt-3 pt-2 border-t border-[#331122] flex items-center justify-around text-xs text-[#FF69B4] font-bold">
          <a href="#services-section" className="hover:underline hover:text-white">Services (8)</a>
          <span className="text-[#555555]">|</span>
          <a href="#top8-section" className="hover:underline hover:text-white">Top 8</a>
          <span className="text-[#555555]">|</span>
          <a href="#comments-section" className="hover:underline hover:text-white">Reviews (480+)</a>
        </div>
      </div>

      {/* CARD 2: Contacting talatasva (Authentic 2-Column Links Table) */}
      <div className="bg-[#000000] border border-[#FF1493] overflow-hidden text-white shadow-[0_2px_15px_rgba(255,20,147,0.2)]">
        <div className="bg-[#D2006B] px-3 py-1.5 font-bold text-xs uppercase tracking-wide border-b border-[#A80054]">
          Contacting talatasva
        </div>

        <div className="p-3 grid grid-cols-2 gap-2 text-xs font-medium">
          {/* Send Message */}
          <button 
            onClick={() => {
              const el = document.getElementById('comments-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex items-center gap-1.5 p-1.5 hover:bg-[#2A0518] hover:text-[#FF69B4] text-[#E5E5E5] transition-colors border border-transparent hover:border-[#D2006B] text-left"
          >
            <Mail className="w-3.5 h-3.5 text-[#FF2A85] flex-shrink-0" />
            <span className="truncate">Send Message</span>
          </button>

          {/* Book Appointment / Add to Friends */}
          <button 
            onClick={onOpenBooking}
            className="flex items-center gap-1.5 p-1.5 bg-[#4A0A24] hover:bg-[#D2006B] text-[#FFF] transition-colors border border-[#FF69B4] text-left font-bold shadow-[0_0_8px_rgba(255,20,147,0.4)]"
          >
            <Calendar className="w-3.5 h-3.5 text-[#FFD700] flex-shrink-0" />
            <span className="truncate">Book Appt 💕</span>
          </button>

          {/* Instant Message */}
          <a 
            href={`tel:${SALON_INFO.phone}`}
            className="flex items-center gap-1.5 p-1.5 hover:bg-[#2A0518] hover:text-[#FF69B4] text-[#E5E5E5] transition-colors border border-transparent hover:border-[#D2006B]"
          >
            <Phone className="w-3.5 h-3.5 text-[#FF2A85] flex-shrink-0" />
            <span className="truncate">Call Salon</span>
          </a>

          {/* Add to Favorites */}
          <button 
            onClick={() => alert('Added AURA Hair Studio to your MySpace favorites! 💕')}
            className="flex items-center gap-1.5 p-1.5 hover:bg-[#2A0518] hover:text-[#FF69B4] text-[#E5E5E5] transition-colors border border-transparent hover:border-[#D2006B] text-left"
          >
            <Heart className="w-3.5 h-3.5 text-[#FF2A85] flex-shrink-0" />
            <span className="truncate">Add to Faves</span>
          </button>

          {/* VIP Perks */}
          <button 
            onClick={onOpenServiceMenu}
            className="flex items-center gap-1.5 p-1.5 hover:bg-[#2A0518] hover:text-[#FF69B4] text-[#E5E5E5] transition-colors border border-transparent hover:border-[#D2006B] text-left"
          >
            <Scissors className="w-3.5 h-3.5 text-[#FF2A85] flex-shrink-0" />
            <span className="truncate">Service Menu</span>
          </button>

          {/* Forward to Friend */}
          <button 
            onClick={() => {
              if (navigator.share) {
                navigator.share({ title: 'AURA Hair Studio', url: window.location.href });
              } else {
                navigator.clipboard.writeText(window.location.href);
                alert('Salon link copied to clipboard! Share with your bestie! 💕');
              }
            }}
            className="flex items-center gap-1.5 p-1.5 hover:bg-[#2A0518] hover:text-[#FF69B4] text-[#E5E5E5] transition-colors border border-transparent hover:border-[#D2006B] text-left"
          >
            <Share2 className="w-3.5 h-3.5 text-[#FF2A85] flex-shrink-0" />
            <span className="truncate">Share Studio</span>
          </button>
        </div>

        {/* MySpace Profile URL */}
        <div className="bg-[#12050D] p-2.5 border-t border-[#331122] text-[11px] text-[#AAAAAA] flex items-center justify-between">
          <span className="truncate font-mono">myspace.com/aurasalon</span>
          <button 
            onClick={() => {
              navigator.clipboard.writeText('https://myspace.com/aurasalon');
              alert('Profile URL copied! 💕');
            }}
            className="text-[#FF69B4] hover:underline font-bold ml-2 whitespace-nowrap"
          >
            [copy]
          </button>
        </div>
      </div>

      {/* CARD 3: talatasva's Interests & Hair Philosophy */}
      <div className="bg-[#000000] border border-[#FF1493] overflow-hidden text-white shadow-[0_2px_15px_rgba(255,20,147,0.2)]">
        <div className="bg-[#D2006B] px-3 py-1.5 font-bold text-xs uppercase tracking-wide border-b border-[#A80054]">
          talatasva&apos;s Interests &amp; Philosophy
        </div>

        <div className="p-3 sm:p-4 space-y-3 text-xs leading-relaxed">
          <div>
            <h3 className="text-[#FF1493] font-bold text-xs uppercase">General:</h3>
            <p className="text-[#DDDDDD] mt-0.5">
              Hair Transformations, French Balayage, 90s Butterfly Layers, Late Nights, Photoshoots, Silk Press Glass Hair, My Girls.
            </p>
          </div>

          <div>
            <h3 className="text-[#FF1493] font-bold text-xs uppercase">Music:</h3>
            <p className="text-[#DDDDDD] mt-0.5">
              R&amp;B, Hip Hop, Aaliyah, Ciara, Beyoncé, Ne-Yo, Destiny&apos;s Child, Missy Elliott.
            </p>
          </div>

          <div>
            <h3 className="text-[#FF1493] font-bold text-xs uppercase">Movies:</h3>
            <p className="text-[#DDDDDD] mt-0.5">
              Baby Boy, Love &amp; Basketball, ATL, Set It Off, Clueless.
            </p>
          </div>

          <div>
            <h3 className="text-[#FF1493] font-bold text-xs uppercase">Television:</h3>
            <p className="text-[#DDDDDD] mt-0.5">
              106 &amp; Park, TRL, My Super Sweet 16, America&apos;s Next Top Model.
            </p>
          </div>

          <div>
            <h3 className="text-[#FF1493] font-bold text-xs uppercase">Hair Rituals:</h3>
            <p className="text-[#DDDDDD] mt-0.5">
              K18 Molecular Peptide Infusion, Japanese Herbal Steam Scalp Therapy, Slavic Tape-In Extensions.
            </p>
          </div>

          {/* Bottom Graphic: Sparkling Pink Lips + Cursive "leave a comment baby! xo" */}
          <div className="pt-3 border-t border-[#331122] flex flex-col items-center justify-center gap-1.5 text-center">
            <svg 
              className="w-10 h-7 filter drop-shadow-[0_0_6px_rgba(255,20,147,0.8)]" 
              viewBox="0 0 100 70" 
              fill="#FF1493"
            >
              <path d="M 10 35 C 20 20, 35 15, 50 25 C 65 15, 80 20, 90 35 C 80 40, 65 38, 50 42 C 35 38, 20 40, 10 35 Z" />
              <path d="M 10 35 C 25 58, 75 58, 90 35 C 75 48, 25 48, 10 35 Z" />
            </svg>
            <p className="font-serif italic text-sm text-[#FF69B4] flex items-center gap-1">
              <span>leave a comment baby! xo</span>
              <Heart className="w-3.5 h-3.5 fill-[#FF1493] text-[#FF1493] inline" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
