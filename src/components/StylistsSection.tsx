import React from 'react';
import { STYLISTS } from '../data/salonData';
import { Star, Award, Calendar, Instagram } from 'lucide-react';

interface StylistsSectionProps {
  onSelectStylistToBook: (stylistId: string) => void;
}

export const StylistsSection: React.FC<StylistsSectionProps> = ({ onSelectStylistToBook }) => {
  // We showcase the named resident master artists
  const residentArtists = STYLISTS.filter(s => s.id !== 'any-stylist');

  return (
    <section id="stylists" className="py-20 bg-[#F5EFEB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#9B533E] font-semibold">
            Resident Masters
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#28211E] mt-2 mb-4">
            Meet Your <span className="italic font-normal">Dedicated Artists.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#786C66]">
            Every stylist at AURA is a recognized specialist who pursues continuous advanced training 
            in Paris, London, and New York.
          </p>
        </div>

        {/* Stylists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {residentArtists.map((stylist) => (
            <div
              key={stylist.id}
              id={`stylist-card-${stylist.id}`}
              className="bg-[#FAF7F5] rounded-3xl overflow-hidden border border-[#EFE6E0] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col group"
            >
              {/* Image & Experience Badge */}
              <div className="relative aspect-4/5 overflow-hidden bg-[#EFE6E0]">
                <img
                  src={stylist.avatar}
                  alt={stylist.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                
                {/* Rating Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                  <Star className="w-3.5 h-3.5 text-[#C6A15B] fill-current" />
                  <span className="text-xs font-bold text-[#28211E]">{stylist.rating}</span>
                  <span className="text-[10px] text-[#786C66]">({stylist.reviewsCount})</span>
                </div>

                {/* Experience pill */}
                <div className="absolute bottom-4 left-4 bg-[#28211E]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full text-white text-[11px] font-medium flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#ECDAD1]" />
                  <span>{stylist.experience}</span>
                </div>
              </div>

              {/* Bio & Details */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-xl font-bold text-[#28211E]">{stylist.name}</h3>
                    {stylist.instagram && (
                      <span className="text-xs text-[#9B533E] font-medium flex items-center gap-1">
                        <Instagram className="w-3 h-3" />
                        {stylist.instagram}
                      </span>
                    )}
                  </div>

                  <p className="text-xs font-semibold text-[#BA7C6C] uppercase tracking-wider mt-1">
                    {stylist.role}
                  </p>

                  <p className="text-xs sm:text-sm text-[#786C66] mt-3 leading-relaxed">
                    {stylist.bio}
                  </p>

                  {/* Specialties Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {stylist.specialties.map((spec, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-medium bg-[#ECDAD1]/60 text-[#423833] px-2.5 py-1 rounded-full border border-[#D9C8BE]"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Book with Stylist Button */}
                <div className="pt-3">
                  <button
                    id={`book-with-${stylist.id}-btn`}
                    onClick={() => onSelectStylistToBook(stylist.id)}
                    className="w-full py-3 rounded-full bg-[#28211E] hover:bg-[#9B533E] text-[#FAF7F5] text-xs uppercase tracking-wider font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#ECDAD1]" />
                    <span>Book With {stylist.name.split(' ')[0]}</span>
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
