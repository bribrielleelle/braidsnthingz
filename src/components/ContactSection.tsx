import React, { useState } from 'react';
import { SALON_INFO } from '../data/salonData';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Instagram, 
  ChevronDown, 
  ChevronUp, 
  Send, 
  Sparkles,
  Scissors
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const faqs = [
    {
      q: 'How should I arrive for a French Balayage or Blonding appointment?',
      a: 'We recommend arriving with clean, dry hair washed within the last 24 to 48 hours without heavy root touch-up sprays or temporary powders. Feel free to bring inspiration photos or leave the custom vision to your artist.'
    },
    {
      q: 'What is your cancellation and rescheduling policy?',
      a: 'We understand daily plans change! You may reschedule or cancel your appointment online or by phone up to 24 hours prior to your reservation time with zero penalty.'
    },
    {
      q: 'Where do I park when visiting the West Hollywood atelier?',
      a: 'We offer complimentary valet parking right behind our Melrose Avenue atelier. Street metered parking is also available along Melrose Ave and adjacent residential streets.'
    },
    {
      q: 'Do you offer bridal and on-location wedding styling?',
      a: 'Yes, our Master Texture & Bridal team travels across Southern California and destination locations worldwide. We recommend scheduling a trial preview 2 to 3 months ahead of your date.'
    }
  ];

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
    }
  };

  const instagramPosts = [
    'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=400&q=80',
  ];

  return (
    <footer id="contact" className="bg-[#28211E] text-[#FAF7F5] pt-20 pb-12 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#9B533E]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Instagram Grid Teaser */}
        <div className="mb-20 pb-16 border-b border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#DEB5A4] font-semibold flex items-center gap-1.5">
                <Instagram className="w-3.5 h-3.5" /> Follow Our Studio Journey
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold mt-1 text-white">
                @aurahair.atelier on Instagram
              </h3>
            </div>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold uppercase tracking-wider text-[#ECDAD1] hover:text-white transition-colors underline underline-offset-4"
            >
              Explore Daily Stories & Formula Shares &rarr;
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {instagramPosts.map((img, idx) => (
              <a
                key={idx}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-2xl overflow-hidden aspect-square block bg-white/5"
              >
                <img
                  src={img}
                  alt={`Instagram highlight ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#28211E]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Instagram className="w-5 h-5 text-white" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* FAQs Accordion */}
        <div className="mb-20 pb-16 border-b border-white/10 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-[0.25em] text-[#DEB5A4] font-semibold">
              Help & Answers
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold mt-1 text-white">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-5 text-left flex items-center justify-between text-sm sm:text-base font-serif font-semibold text-white hover:text-[#DEB5A4] transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#DEB5A4] shrink-0 ml-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#786C66] shrink-0 ml-4" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-[#ECDAD1]/80 leading-relaxed border-t border-white/5 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Studio Info Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FAF7F5] flex items-center justify-center text-[#28211E]">
                <Scissors className="w-5 h-5 text-[#9B533E] transform -rotate-45" />
              </div>
              <div>
                <span className="font-serif text-2xl tracking-widest font-semibold block leading-none">
                  AURA
                </span>
                <span className="text-[10px] tracking-[0.25em] text-[#ECDAD1] uppercase">
                  Atelier Salon
                </span>
              </div>
            </div>
            <p className="text-xs text-[#ECDAD1]/80 leading-relaxed">
              West Hollywood's bespoke destination for lived-in balayage, precision couture haircuts, and holistic scalp therapy rituals.
            </p>
            <div className="pt-2 flex items-center gap-3 text-xs text-[#DEB5A4]">
              <Sparkles className="w-4 h-4" />
              <span>Cruelty-Free • Low-Tox • Botanical</span>
            </div>
          </div>

          {/* Location & Contact */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-bold text-white tracking-wide">Visit Atelier</h4>
            <div className="space-y-2.5 text-xs text-[#ECDAD1]/80">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#DEB5A4] shrink-0 mt-0.5" />
                <span>{SALON_INFO.address}<br />{SALON_INFO.city}</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#DEB5A4] shrink-0" />
                <a href={`tel:${SALON_INFO.phone.replace(/\D/g, '')}`} className="hover:text-white transition-colors">
                  {SALON_INFO.phone}
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#DEB5A4] shrink-0" />
                <a href={`mailto:${SALON_INFO.email}`} className="hover:text-white transition-colors">
                  {SALON_INFO.email}
                </a>
              </p>
            </div>
          </div>

          {/* Studio Hours */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-bold text-white tracking-wide">Studio Hours</h4>
            <div className="space-y-2 text-xs text-[#ECDAD1]/80">
              {SALON_INFO.hours.map((h, i) => (
                <div key={i} className="pb-1.5 border-b border-white/5">
                  <p className="font-semibold text-white">{h.days}</p>
                  <p className="text-[11px] text-[#ECDAD1]/70">{h.time}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter / Seasonal Invitations */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-bold text-white tracking-wide">Atelier Notes</h4>
            <p className="text-xs text-[#ECDAD1]/80 leading-relaxed">
              Receive seasonal formula previews, guest artist masterclasses, and priority appointment booking windows.
            </p>

            {subscribed ? (
              <div className="p-3 bg-white/10 rounded-xl text-xs text-[#DEB5A4] border border-[#DEB5A4]/30">
                ✓ Thank you. You're on the priority guest list.
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-full bg-white/10 border border-white/20 text-xs text-white placeholder:text-white/40 focus:outline-hidden focus:border-[#DEB5A4]"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1 bottom-1 px-3 rounded-full bg-[#9B533E] hover:bg-[#BA7C6C] text-white text-xs font-semibold transition-colors flex items-center justify-center cursor-pointer"
                  >
                    <Send className="w-3 h-3" />
                  </button>
                </div>
                <span className="text-[10px] text-white/40">We respect your inbox. Unsubscribe anytime.</span>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Copyright & Legal */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <p>© {new Date().getFullYear()} {SALON_INFO.name}. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#stylists" className="hover:text-white transition-colors">Stylists</a>
            <a href="#gallery" className="hover:text-white transition-colors">Portfolio</a>
            <a href="#contact" className="hover:text-white transition-colors">Privacy & Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
