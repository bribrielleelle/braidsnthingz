import React from 'react';
import { Calendar, ArrowRight, Star, Sparkles, CheckCircle2, Heart } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreServices }) => {
  return (
    <section id="home" className="relative overflow-hidden pt-6 pb-16 lg:py-20 bg-[#FAF7F5]">
      {/* Delicate background decorative glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#ECDAD1]/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 right-[-100px] w-96 h-96 bg-[#F7F1E5]/70 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left space-y-6">
            
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE6E0] border border-[#ECDAD1] w-fit shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#9B533E] animate-pulse" />
              <span className="text-xs font-semibold tracking-wider text-[#423833] uppercase">
                Boutique Hair Studio & Color Lab
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#28211E] tracking-tight leading-[1.12]">
              Book Your Perfect <span className="italic font-normal text-[#9B533E]">Hairday.</span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-[#786C66] max-w-xl font-normal leading-relaxed">
              Experience the art of lived-in French balayage, bespoke precision texturizing, 
              and restorative botanical scalp rituals in our light-drenched West Hollywood atelier.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                id="hero-book-now-button"
                onClick={onOpenBooking}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#28211E] text-[#FAF7F5] hover:bg-[#9B533E] text-sm font-semibold tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-xl cursor-pointer active:scale-95"
              >
                <Calendar className="w-4 h-4 text-[#ECDAD1] group-hover:rotate-12 transition-transform" />
                <span>Book Appointment</span>
                <ArrowRight className="w-4 h-4 text-[#ECDAD1] group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-explore-services-button"
                onClick={onExploreServices}
                className="inline-flex items-center justify-center px-7 py-4 rounded-full bg-transparent hover:bg-[#EFE6E0] text-[#28211E] border border-[#D9C8BE] text-sm font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer"
              >
                View Services & Pricing
              </button>
            </div>

            {/* Trust and Social Proof Badges */}
            <div className="pt-6 border-t border-[#EFE6E0] flex flex-wrap items-center gap-6 text-sm text-[#423833]">
              {/* Google Reviews */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-[#FAF7F5] object-cover"
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80"
                    alt="Client review"
                  />
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-[#FAF7F5] object-cover"
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80"
                    alt="Client review"
                  />
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-[#FAF7F5] object-cover"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                    alt="Client review"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1 text-[#C6A15B]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                    <span className="font-bold text-xs text-[#28211E] ml-1">4.98</span>
                  </div>
                  <span className="text-[11px] text-[#786C66]">480+ 5-Star Reviews</span>
                </div>
              </div>

              {/* Badges */}
              <div className="flex items-center gap-2 text-xs text-[#786C66]">
                <CheckCircle2 className="w-4 h-4 text-[#9B533E]" />
                <span>100% Organic Botanical Care</span>
              </div>
            </div>

          </div>

          {/* Right Column: Pinterest-Inspired Editorial Visual Layout */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image with Arched Top (Quintessential Salon Aesthetic) */}
              <div className="relative rounded-t-[140px] rounded-b-3xl overflow-hidden border-4 border-[#FAF7F5] shadow-2xl bg-[#EFE6E0] aspect-4/5 max-h-[580px] w-full">
                <img
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=85"
                  alt="AURA Atelier Modern Salon Interior"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Subtle soft gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#28211E]/40 via-transparent to-transparent pointer-events-none" />

                {/* Bottom photo caption */}
                <div className="absolute bottom-5 left-5 right-5 text-white flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-[#ECDAD1] font-semibold">The Melrose Studio</p>
                    <p className="text-sm font-serif">Sunlit Stations & Japanese Head Spa</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-medium border border-white/30">
                    West Hollywood
                  </span>
                </div>
              </div>

              {/* Floating Badge 1: Stylist Spotlight (Top Left) */}
              <div className="absolute -top-4 -left-4 sm:top-6 sm:-left-8 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-lg border border-[#EFE6E0] flex items-center gap-3 animate-fade-in z-20 max-w-[240px]">
                <img
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80"
                  alt="Camille Laurent"
                  className="w-11 h-11 rounded-full object-cover border border-[#ECDAD1]"
                />
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-bold text-[#28211E]">Camille Laurent</span>
                    <Sparkles className="w-3 h-3 text-[#C6A15B]" />
                  </div>
                  <p className="text-[11px] text-[#786C66]">Master Balayage Director</p>
                  <p className="text-[10px] text-[#9B533E] font-medium">Parisian Trained</p>
                </div>
              </div>

              {/* Floating Badge 2: Quick Booking Slot (Bottom Right) */}
              <div className="absolute -bottom-6 -right-2 sm:bottom-8 sm:-right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-[#EFE6E0] z-20 flex flex-col gap-2 max-w-[220px]">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-[#28211E] flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#9B533E]" /> Next Openings
                  </span>
                  <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-full">Today</span>
                </div>
                <div className="space-y-1.5">
                  <button 
                    onClick={onOpenBooking}
                    className="w-full text-left text-xs bg-[#FAF7F5] hover:bg-[#ECDAD1] border border-[#EFE6E0] p-2 rounded-lg transition-colors flex items-center justify-between cursor-pointer"
                  >
                    <span className="font-medium text-[#28211E]">Today, 2:15 PM</span>
                    <span className="text-[10px] text-[#9B533E] font-semibold">Reserve</span>
                  </button>
                  <button 
                    onClick={onOpenBooking}
                    className="w-full text-left text-xs bg-[#FAF7F5] hover:bg-[#ECDAD1] border border-[#EFE6E0] p-2 rounded-lg transition-colors flex items-center justify-between cursor-pointer"
                  >
                    <span className="font-medium text-[#28211E]">Tomorrow, 11:30 AM</span>
                    <span className="text-[10px] text-[#9B533E] font-semibold">Reserve</span>
                  </button>
                </div>
              </div>

              {/* Floating Badge 3: Aesthetic Heart / Rating */}
              <div className="hidden sm:flex absolute top-1/2 -right-4 -translate-y-1/2 bg-[#ECDAD1] text-[#28211E] w-12 h-12 rounded-full items-center justify-center shadow-md border-2 border-white">
                <Heart className="w-5 h-5 text-[#9B533E] fill-[#9B533E]" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
