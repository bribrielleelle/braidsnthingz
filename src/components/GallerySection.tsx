import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/salonData';
import { GalleryItem } from '../types';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import { Eye, X, ZoomIn } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = [
    { label: 'All Portfolio', value: 'all' },
    { label: 'Balayage & Color', value: 'balayage' },
    { label: 'Precision Cuts', value: 'cuts' },
    { label: 'Bridal & Styling', value: 'bridal' },
    { label: 'The Atelier Space', value: 'interior' },
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-[#FAF7F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#9B533E] font-semibold">
            Visual Portfolio & Artistry
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#28211E] mt-2 mb-4">
            Transformations in <span className="italic font-normal">Living Color.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#786C66]">
            Every look is designed to highlight your natural bone structure, eye color, 
            and everyday lifestyle with seamless longevity.
          </p>
        </div>

        {/* Featured Interactive Before & After Slider */}
        <div className="mb-16">
          <BeforeAfterSlider
            title="French Sun-Kissed Lived-In Balayage"
            description="From dull, brassy grown-out roots to dimensional champagne blonde with melted root shadowing and liquid glass shine."
            beforeImage="https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1200&q=80"
            afterImage="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.value}
              id={`gallery-filter-${cat.value}`}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-5 py-2 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                activeCategory === cat.value
                  ? 'bg-[#28211E] text-[#FAF7F5] shadow-xs'
                  : 'bg-[#EFE6E0] text-[#423833] hover:bg-[#ECDAD1]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative rounded-3xl overflow-hidden aspect-4/5 bg-[#EFE6E0] cursor-pointer shadow-xs hover:shadow-xl transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#28211E]/80 via-[#28211E]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                <span className="text-[10px] uppercase tracking-widest text-[#ECDAD1] font-semibold">
                  {item.category}
                </span>
                <h4 className="font-serif text-lg font-bold">{item.title}</h4>
                <p className="text-xs text-[#EFE6E0] mt-1 line-clamp-2">{item.description}</p>
                <div className="mt-3 inline-flex items-center gap-1.5 text-xs text-white/90">
                  <ZoomIn className="w-3.5 h-3.5 text-[#ECDAD1]" />
                  <span>Click to view larger</span>
                </div>
              </div>

              {/* Category chip on top right */}
              <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-[10px] text-white uppercase tracking-wider font-semibold pointer-events-none">
                {item.category}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          id="gallery-lightbox-modal"
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-[#FAF7F5] rounded-3xl overflow-hidden shadow-2xl border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 hover:bg-black text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[70vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
            </div>

            <div className="p-6 bg-[#FAF7F5]">
              <span className="text-xs font-semibold text-[#9B533E] uppercase tracking-wider">
                {selectedImage.category} Portfolio
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#28211E] mt-1">
                {selectedImage.title}
              </h3>
              <p className="text-sm text-[#786C66] mt-2">
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
