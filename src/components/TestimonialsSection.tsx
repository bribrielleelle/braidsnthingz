import React from 'react';
import { TESTIMONIALS } from '../data/salonData';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-[#F5EFEB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#9B533E] font-semibold">
            Client Words & Trust
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#28211E] mt-2 mb-4">
            Cherished by <span className="italic font-normal">Our Community.</span>
          </h2>
          <div className="flex items-center justify-center gap-2 text-sm text-[#786C66]">
            <div className="flex text-[#C6A15B]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="font-semibold text-[#28211E]">4.98 out of 5</span>
            <span>• Based on 480+ Google & Yelp Reviews</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="bg-[#FAF7F5] rounded-3xl p-8 border border-[#EFE6E0] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between relative group"
            >
              <Quote className="w-10 h-10 text-[#ECDAD1] absolute top-6 right-6 opacity-60 pointer-events-none" />

              <div>
                {/* Star rating */}
                <div className="flex items-center gap-1 text-[#C6A15B] mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-sm sm:text-base text-[#423833] leading-relaxed italic mb-6">
                  "{review.comment}"
                </p>
              </div>

              {/* Author & Service Meta */}
              <div className="pt-4 border-t border-[#EFE6E0] flex items-center gap-3">
                <img
                  src={review.avatar}
                  alt={review.author}
                  className="w-11 h-11 rounded-full object-cover border border-[#D9C8BE]"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-serif text-sm font-bold text-[#28211E]">{review.author}</h4>
                    {review.verified && (
                      <span title="Verified Client">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#9B533E] font-medium">{review.service}</p>
                  <p className="text-[10px] text-[#786C66]">{review.date}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
