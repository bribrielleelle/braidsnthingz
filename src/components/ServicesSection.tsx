import React, { useState } from 'react';
import { SALON_SERVICES } from '../data/salonData';
import { Service, ServiceCategory } from '../types';
import { Clock, Sparkles, Check, ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  onSelectServiceToBook: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceToBook }) => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('all');

  const categories: { label: string; value: ServiceCategory }[] = [
    { label: 'All Treatments', value: 'all' },
    { label: 'Cuts & Styling', value: 'cuts' },
    { label: 'Color & Balayage', value: 'color' },
    { label: 'Restorative Hair Care', value: 'treatments' },
    { label: 'Bridal & Special Event', value: 'bridal' },
  ];

  const filteredServices = activeCategory === 'all'
    ? SALON_SERVICES
    : SALON_SERVICES.filter(service => service.category === activeCategory);

  return (
    <section id="services" className="py-20 bg-[#FAF7F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#9B533E] font-semibold">
            Bespoke Menu & Rituals
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#28211E] mt-2 mb-4">
            Curated Services for <span className="italic font-normal">Every Hair Story.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#786C66]">
            Every appointment includes a custom consultation, botanical cleanse, 
            complimentary beverage ritual, and radiant finishing blowout.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              id={`filter-category-${cat.value}`}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeCategory === cat.value
                  ? 'bg-[#28211E] text-[#FAF7F5] shadow-sm'
                  : 'bg-[#EFE6E0] text-[#423833] hover:bg-[#ECDAD1]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service: Service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="bg-white rounded-3xl overflow-hidden border border-[#EFE6E0] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col group"
            >
              {/* Service Image with Badges */}
              <div className="relative h-60 overflow-hidden bg-[#EFE6E0]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                
                {service.popular && (
                  <div className="absolute top-4 left-4 bg-[#28211E] text-[#FAF7F5] text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                    <Sparkles className="w-3 h-3 text-[#C6A15B]" />
                    <span>Guest Favorite</span>
                  </div>
                )}

                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-[#28211E] border border-[#EFE6E0] shadow-xs flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#9B533E]" />
                  <span>{service.durationMinutes} min</span>
                </div>

                <div className="absolute bottom-3 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1 rounded-full shadow-sm">
                  <span className="text-xs text-[#786C66] mr-1">from</span>
                  <span className="font-serif text-lg font-bold text-[#28211E]">${service.price}</span>
                </div>
              </div>

              {/* Service Info */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#28211E] group-hover:text-[#9B533E] transition-colors leading-snug">
                    {service.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-[#786C66] mt-2 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="mt-4 pt-3 border-t border-[#F5EFEB] space-y-1.5">
                    {service.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#423833]">
                        <Check className="w-3.5 h-3.5 text-[#9B533E] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Booking Trigger Button */}
                <div className="pt-2">
                  <button
                    id={`book-service-btn-${service.id}`}
                    onClick={() => onSelectServiceToBook(service.id)}
                    className="w-full py-3 rounded-full bg-[#FAF7F5] hover:bg-[#28211E] text-[#28211E] hover:text-[#FAF7F5] border border-[#D9C8BE] hover:border-transparent text-xs uppercase tracking-wider font-semibold transition-all duration-300 flex items-center justify-center gap-2 group/btn cursor-pointer"
                  >
                    <span>Reserve Service</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Custom Consultation Note */}
        <div className="mt-12 text-center p-6 rounded-3xl bg-[#F5EFEB] border border-[#EFE6E0] max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm text-[#423833]">
            Unsure which color transformation suits your existing base? We provide complimentary 15-minute digital & in-studio color consultations.
          </p>
        </div>

      </div>
    </section>
  );
};
