import React, { useState } from 'react';
import { 
  Sparkles, 
  Heart, 
  Calendar, 
  Clock, 
  BookOpen, 
  MessageSquare, 
  Star, 
  Check, 
  Send,
  ExternalLink,
  Scissors
} from 'lucide-react';
import { MusicPlayer } from './MusicPlayer';
import { Top8Stylists } from './Top8Stylists';
import { BookingWizard } from './BookingWizard';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import { SALON_SERVICES, STYLISTS, TESTIMONIALS, GALLERY_ITEMS } from '../data/salonData';
import { ConfirmedBooking, ServiceCategory } from '../types';

interface RightColumnProps {
  onBookingConfirmed: (booking: ConfirmedBooking) => void;
  onOpenBookingModal: (serviceId?: string, stylistId?: string) => void;
}

export const RightColumn: React.FC<RightColumnProps> = ({
  onBookingConfirmed,
  onOpenBookingModal,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory>('all');
  const [comments, setComments] = useState(TESTIMONIALS);
  const [newCommentName, setNewCommentName] = useState('');
  const [newCommentText, setNewCommentText] = useState('');

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentName.trim() || !newCommentText.trim()) return;

    const newRev = {
      id: `rev-${Date.now()}`,
      author: `✨ ${newCommentName.trim()} ✨`,
      rating: 5,
      date: 'Just now (5/10/2006)',
      service: 'Salon Appointment',
      comment: newCommentText.trim(),
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
      verified: true
    };

    setComments([newRev, ...comments]);
    setNewCommentName('');
    setNewCommentText('');
  };

  return (
    <div className="w-full space-y-6 font-sans">
      {/* CARD 1: ABOUT ME (Stats Table & Bio as in Pinterest MySpace layout) */}
      <div id="about-section" className="bg-[#000000] border border-[#FF1493] overflow-hidden text-white shadow-[0_2px_15px_rgba(255,20,147,0.2)]">
        <div className="bg-[#D2006B] px-3 py-1.5 flex items-center justify-between text-white border-b border-[#A80054]">
          <h2 className="font-bold text-xs uppercase tracking-wide flex items-center gap-1.5">
            <Heart className="w-3.5 h-3.5 fill-[#FFD700] text-[#FFD700]" />
            About Me
          </h2>
          <span className="text-[11px] text-[#FFB6C1] font-mono">[talatasva]</span>
        </div>

        <div className="p-4 sm:p-5 bg-[#0A0508]">
          <div className="flex flex-col md:flex-row gap-5 items-start justify-between">
            {/* Stats Table */}
            <div className="flex-1 w-full space-y-1.5 text-xs">
              <div className="grid grid-cols-3 py-1 border-b border-[#2A0518]">
                <span className="text-[#FF69B4] font-bold">Status:</span>
                <span className="col-span-2 text-white font-medium">Booking Spring &amp; Summer Appointments 💕</span>
              </div>
              <div className="grid grid-cols-3 py-1 border-b border-[#2A0518]">
                <span className="text-[#FF69B4] font-bold">Zodiac Sign:</span>
                <span className="col-span-2 text-[#FFD700] font-bold">Leo ♌ (Fire sign energy!)</span>
              </div>
              <div className="grid grid-cols-3 py-1 border-b border-[#2A0518]">
                <span className="text-[#FF69B4] font-bold">Hometown:</span>
                <span className="col-span-2 text-white">Brooklyn, NY &rarr; West Hollywood, CA</span>
              </div>
              <div className="grid grid-cols-3 py-1 border-b border-[#2A0518]">
                <span className="text-[#FF69B4] font-bold">Salon Vibe:</span>
                <span className="col-span-2 text-white">2000s R&amp;B, Pink Champagne, Flawless Hair</span>
              </div>
              <div className="grid grid-cols-3 py-1 border-b border-[#2A0518]">
                <span className="text-[#FF69B4] font-bold">Here For:</span>
                <span className="col-span-2 text-white">Slaying Hair, Good Times, &amp; Big Energy</span>
              </div>
            </div>

            {/* Right Graphic: Pink Glitter Heart with Leo Astrological Symbol */}
            <div className="flex flex-col items-center justify-center p-3 border border-[#D2006B] bg-[#1A0510] self-center md:self-start">
              <svg 
                className="w-16 h-16 filter drop-shadow-[0_0_8px_rgba(255,20,147,0.8)]" 
                viewBox="0 0 100 100" 
                fill="#FF1493"
              >
                <path d="M 50 85 C 20 60, 5 45, 5 28 C 5 12, 18 5, 32 5 C 42 5, 48 10, 50 16 C 52 10, 58 5, 68 5 C 82 5, 95 12, 95 28 C 95 45, 80 60, 50 85 Z" />
                {/* Leo Symbol inside heart */}
                <circle cx="40" cy="40" r="6" fill="#000000" />
                <path d="M 45 40 Q 55 25, 65 35 Q 70 45, 65 55" stroke="#000000" strokeWidth="4" fill="none" />
              </svg>
              <span className="font-serif italic text-sm text-[#FFB6C1] mt-1 font-bold">
                Leo Queen ♌
              </span>
            </div>
          </div>

          {/* Bio Copy */}
          <div className="mt-4 pt-3 border-t border-[#331122]">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#FF1493] mb-1">
              About Me:
            </h3>
            <p className="text-xs sm:text-sm text-[#E0E0E0] leading-relaxed">
              I&apos;m a queen with goals. I don&apos;t entertain broke energy or bad hair days. I love hard, laugh harder, and I&apos;m always on my grind. If you can&apos;t vibe with that, keep it moving. But if you want hair that turns heads—bouncy 90s butterfly layers, liquid mirror silk presses, and seamless French balayage—you&apos;re in the right chair. Welcome to my salon studio.
            </p>
          </div>
        </div>
      </div>

      {/* CARD 2: MUSIC PLAYER (Plays Aaliyah, Destiny's Child with retro controls) */}
      <MusicPlayer />

      {/* CARD 3: INTERACTIVE BOOKING WIZARD */}
      <div className="bg-[#000000] border border-[#FF1493] overflow-hidden text-white shadow-[0_2px_15px_rgba(255,20,147,0.2)]">
        <div className="bg-[#D2006B] px-3 py-1.5 flex items-center justify-between text-white border-b border-[#A80054]">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-[#FFD700]" />
            <h2 className="font-bold text-xs uppercase tracking-wide">
              Fast Booking System [Reserve Your Chair]
            </h2>
          </div>
          <span className="text-[11px] text-[#39FF14] font-mono font-bold">
            ● 4 Slots Open Today
          </span>
        </div>

        <div className="p-3 sm:p-5 bg-[#0A0508]">
          <BookingWizard 
            onBookingConfirmed={onBookingConfirmed}
          />
        </div>
      </div>

      {/* CARD 4: TOP 8 STYLISTS */}
      <Top8Stylists 
        stylists={STYLISTS}
        onSelectStylistForBooking={(stylistId) => onOpenBookingModal(undefined, stylistId)}
      />

      {/* CARD 5: LATEST BLOG ENTRIES & SALON UPDATES */}
      <div className="bg-[#000000] border border-[#FF1493] overflow-hidden text-white shadow-[0_2px_15px_rgba(255,20,147,0.2)]">
        <div className="bg-[#D2006B] px-3 py-1.5 flex items-center justify-between text-white border-b border-[#A80054]">
          <div className="flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-[#FFD700]" />
            <h2 className="font-bold text-xs uppercase tracking-wide">
              talatasva&apos;s Latest Blog Entries [Subscribe to this Blog]
            </h2>
          </div>
          <span className="text-[11px] text-[#FFB6C1] hover:underline cursor-pointer font-mono">
            [View More]
          </span>
        </div>

        <div className="p-3 sm:p-4 bg-[#0A0508] divide-y divide-[#2A0518] text-xs">
          <div className="py-2 flex items-center justify-between">
            <div>
              <span className="text-[#FFD700] font-mono mr-2">5/10/2006</span>
              <span className="text-white font-semibold">late nights, good vibes &amp; fresh balayage.</span>
            </div>
            <span className="text-[#FF69B4] text-[11px] font-mono">[read]</span>
          </div>

          <div className="py-2 flex items-center justify-between">
            <div>
              <span className="text-[#FFD700] font-mono mr-2">5/08/2006</span>
              <span className="text-white font-semibold">don&apos;t get it twisted, hair hydration is everything.</span>
            </div>
            <span className="text-[#FF69B4] text-[11px] font-mono">[read]</span>
          </div>

          <div className="py-2 flex items-center justify-between">
            <div>
              <span className="text-[#FFD700] font-mono mr-2">5/05/2006</span>
              <span className="text-white font-semibold">focus: mastering the 2000s bombshell blowout.</span>
            </div>
            <span className="text-[#FF69B4] text-[11px] font-mono">[read]</span>
          </div>
        </div>
      </div>

      {/* CARD 6: SERVICES MENU & PRICING */}
      <div id="services-section" className="bg-[#000000] border border-[#FF1493] overflow-hidden text-white shadow-[0_2px_15px_rgba(255,20,147,0.2)]">
        <div className="bg-[#D2006B] px-3 py-1.5 flex items-center justify-between text-white border-b border-[#A80054]">
          <div className="flex items-center gap-1.5">
            <Scissors className="w-3.5 h-3.5 text-[#FFD700]" />
            <h2 className="font-bold text-xs uppercase tracking-wide">
              Services Menu &amp; Pricing
            </h2>
          </div>
          <span className="text-[11px] text-[#FFB6C1] font-mono">[8 Bespoke Treatments]</span>
        </div>

        <div className="p-3 sm:p-5 bg-[#0A0508]">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5 mb-4 pb-2 border-b border-[#331122]">
            {[
              { id: 'all', label: 'All Services' },
              { id: 'cuts', label: 'Cuts & Silk Press' },
              { id: 'color', label: 'Balayage & Color' },
              { id: 'treatments', label: 'Restorative Care' },
              { id: 'bridal', label: 'Bridal & Extensions' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as ServiceCategory)}
                className={`text-xs px-2.5 py-1 font-bold border transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-[#D2006B] text-white border-white shadow-[0_0_8px_rgba(255,20,147,0.6)]'
                    : 'bg-black text-[#CCCCCC] border-[#331122] hover:border-[#FF1493]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {SALON_SERVICES.filter(
              s => selectedCategory === 'all' || s.category === selectedCategory
            ).map((service) => (
              <div 
                key={service.id}
                className="bg-[#11050D] border border-[#331122] hover:border-[#FF1493] p-3 flex flex-col justify-between transition-all group hover:shadow-[0_0_12px_rgba(255,20,147,0.3)]"
              >
                <div>
                  <div className="relative h-32 sm:h-36 overflow-hidden mb-2 border border-[#D2006B] bg-black">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-1.5 right-1.5 bg-black/80 px-2 py-0.5 text-xs font-bold text-[#FFD700] border border-[#FF69B4] font-mono">
                      ${service.price}
                    </div>
                  </div>

                  <h3 className="font-bold text-sm text-white group-hover:text-[#FF69B4] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#AAAAAA] mt-1 line-clamp-2">
                    {service.description}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-[#2A0518] flex items-center justify-between">
                  <span className="text-[11px] text-[#FFB6C1] font-mono flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#FF1493]" />
                    {service.durationMinutes} mins
                  </span>

                  <button 
                    onClick={() => onOpenBookingModal(service.id)}
                    className="bg-[#D2006B] hover:bg-[#FF007F] text-white px-3 py-1 text-xs font-bold uppercase tracking-wider border border-white flex items-center gap-1 transition-colors shadow-xs"
                  >
                    <span>Reserve</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CARD 7: BEFORE & AFTER TRANSFORMATION */}
      <div id="transformation-section">
        <BeforeAfterSlider 
          beforeImage={GALLERY_ITEMS[0].beforeImage || GALLERY_ITEMS[0].image}
          afterImage={GALLERY_ITEMS[0].image}
          title="Champagne Honey Melt Balayage"
          description="Transforming brassy regrowth into seamless, multi-dimensional lived-in blonde ribbons."
        />
      </div>

      {/* CARD 8: CLIENT COMMENTS (Authentic MySpace Style Wall) */}
      <div id="comments-section" className="bg-[#000000] border border-[#FF1493] overflow-hidden text-white shadow-[0_2px_15px_rgba(255,20,147,0.2)]">
        <div className="bg-[#D2006B] px-3 py-1.5 flex items-center justify-between text-white border-b border-[#A80054]">
          <div className="flex items-center gap-1.5">
            <MessageSquare className="w-3.5 h-3.5 text-[#FFD700]" />
            <h2 className="font-bold text-xs uppercase tracking-wide">
              talatasva&apos;s Friends Comments ({comments.length})
            </h2>
          </div>
          <span className="text-[11px] text-[#FFB6C1] font-mono">[Displaying {comments.length} comments]</span>
        </div>

        <div className="p-3 sm:p-5 bg-[#0A0508] space-y-4">
          {/* Post a New Comment Box */}
          <form onSubmit={handleAddComment} className="bg-[#14050F] p-3 border border-[#D2006B] space-y-2">
            <h3 className="text-xs font-bold text-[#FF69B4] uppercase flex items-center gap-1">
              <span>Leave a Comment for talatasva:</span>
              <Heart className="w-3 h-3 fill-[#FF1493] text-[#FF1493]" />
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <input 
                type="text" 
                placeholder="Your Name (e.g. Ashley K.)" 
                value={newCommentName}
                onChange={(e) => setNewCommentName(e.target.value)}
                required
                className="bg-black border border-[#FF69B4] px-2.5 py-1 text-xs text-white outline-none"
              />
            </div>
            <textarea 
              rows={2} 
              placeholder="Leave some love! (e.g. Thanks for the add! Camille gave me the best butterfly layers ever xx)"
              value={newCommentText}
              onChange={(e) => setNewCommentText(e.target.value)}
              required
              className="w-full bg-black border border-[#FF69B4] px-2.5 py-1 text-xs text-white outline-none"
            />
            <button 
              type="submit"
              className="bg-[#D2006B] hover:bg-[#FF007F] text-white px-4 py-1 text-xs font-bold uppercase tracking-wider border border-white flex items-center gap-1 transition-colors"
            >
              <Send className="w-3 h-3" />
              <span>Post Comment 💕</span>
            </button>
          </form>

          {/* Comments List */}
          <div className="space-y-3">
            {comments.map((rev) => (
              <div 
                key={rev.id} 
                className="p-3 bg-[#11050E] border border-[#2E0518] hover:border-[#FF1493] transition-colors flex gap-3"
              >
                <div className="flex-shrink-0 text-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 border-2 border-[#D2006B] overflow-hidden bg-black mb-1">
                    <img 
                      src={rev.avatar} 
                      alt={rev.author} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <p className="text-[10px] text-[#FFB6C1] font-bold truncate w-14 sm:w-16">
                    {rev.author.replace(/✨|💋|🌸/g, '').trim()}
                  </p>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between border-b border-[#2A0518] pb-1 mb-1.5">
                    <span className="font-bold text-xs text-[#FF69B4]">{rev.author}</span>
                    <span className="text-[10px] text-[#888888] font-mono">{rev.date}</span>
                  </div>
                  <div className="flex items-center gap-1 mb-1">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-[#FFD700] text-[#FFD700]" />
                    ))}
                    <span className="text-[10px] text-[#FFB6C1] ml-1 font-mono">({rev.service})</span>
                  </div>
                  <p className="text-xs text-[#E5E5E5] leading-relaxed">
                    {rev.comment}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
