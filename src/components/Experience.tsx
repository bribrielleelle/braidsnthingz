import React from 'react';
import { Coffee, ShieldCheck, HeartHandshake, Sparkles, Droplets, Scissors } from 'lucide-react';

export const Experience: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Bespoke Consultation',
      desc: 'We map your natural hair texture, lifestyle routine, face structure, and seasonal growth patterns before formulating your shade or silhouette.',
      icon: HeartHandshake,
    },
    {
      num: '02',
      title: 'Aromatherapy Scalp Ritual',
      desc: 'Every service opens with a purifying hydro-steam cleanse, botanical clarifying wash, and tension-melting jade gua sha acupressure.',
      icon: Droplets,
    },
    {
      num: '03',
      title: 'Master Artistry Execution',
      desc: 'Hand-painted dimensional balayage and precision French dry-cutting customized to grow out with seamless, low-maintenance beauty.',
      icon: Scissors,
    },
    {
      num: '04',
      title: 'Runway Finish & Prescription',
      desc: 'Bouncy heat-protected blowout with personalized product recommendations to maintain salon shine and vitality for weeks at home.',
      icon: Sparkles,
    },
  ];

  return (
    <section id="experience" className="py-20 bg-[#F5EFEB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#9B533E] font-semibold">
            The Atelier Philosophy
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#28211E] mt-2 mb-4">
            More Than An Appointment, <span className="italic font-normal">A Sanctuary.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#786C66] leading-relaxed">
            We believe true hair artistry balances high-fashion editorial technique with 
            deep restorative care, ensuring your hair looks effortlessly luminous every day.
          </p>
        </div>

        {/* 4 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-[#FAF7F5] rounded-3xl p-7 border border-[#EFE6E0] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-2xl text-[#BA7C6C] font-semibold">{step.num}</span>
                    <div className="w-10 h-10 rounded-full bg-[#ECDAD1]/60 flex items-center justify-center text-[#9B533E] group-hover:bg-[#9B533E] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#28211E] mb-2">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-[#786C66] leading-relaxed">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Studio Hospitality & Clean Haircare Banner */}
        <div className="bg-[#FAF7F5] rounded-3xl p-8 sm:p-10 border border-[#EFE6E0] shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-4 rounded-2xl overflow-hidden aspect-4/3 relative">
            <img
              src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=700&q=80"
              alt="Atelier Beverage Service"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent flex items-end p-4">
              <span className="text-xs text-white font-medium tracking-wider uppercase">Signature Hospitality</span>
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-col justify-center space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#9B533E]">
              <Coffee className="w-4 h-4" />
              <span>Complimentary Atelier Refreshment Bar</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#28211E]">
              Relax with artisanal matcha, sparkling rosé & infused botanicals.
            </h3>
            <p className="text-sm text-[#786C66] leading-relaxed">
              From the moment you step through our arched French doors, your visit is unhurried. 
              Enjoy our seasonal beverage menu, high-speed private Wi-Fi, wireless phone chargers at every station, 
              and tranquil acoustic playlists curated to calm the senses.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-[#423833]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#9B533E]" />
                <span className="font-medium">100% Ammonia-Free & Low-Tox Color</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#9B533E]" />
                <span className="font-medium">Certified K18 & Olaplex Pro Salon</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#9B533E]" />
                <span className="font-medium">Cruelty-Free Certified Formulations</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
