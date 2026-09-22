import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { GlitterStars } from './components/GlitterStars';
import { ProfileHeader } from './components/ProfileHeader';
import { LeftColumn } from './components/LeftColumn';
import { RightColumn } from './components/RightColumn';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { ConfirmationModal } from './components/ConfirmationModal';
import { FloatingBookButton } from './components/FloatingBookButton';
import { ConfirmedBooking } from './types';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [preselectedServiceId, setPreselectedServiceId] = useState<string | undefined>(undefined);
  const [preselectedStylistId, setPreselectedStylistId] = useState<string | undefined>(undefined);
  const [confirmedBooking, setConfirmedBooking] = useState<ConfirmedBooking | null>(null);

  const handleOpenBooking = (serviceId?: string, stylistId?: string) => {
    setPreselectedServiceId(serviceId);
    setPreselectedStylistId(stylistId);
    setIsBookingModalOpen(true);
  };

  const handleBookingConfirmed = (booking: ConfirmedBooking) => {
    setConfirmedBooking(booking);
    setIsBookingModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-leopard-pattern flex flex-col text-white selection:bg-[#E6007A] selection:text-white relative">
      {/* Vertical columns of pink glitter 5-point stars along the margins */}
      <GlitterStars side="left" />
      <GlitterStars side="right" />

      {/* Top Black Utility Bar & Full-Width Hot Pink Navigation Bar */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content Centered Container */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-3 sm:px-6 py-6 z-20">
        {/* Large stylized cursive name banner "talatasva" + tagline + glitter lips */}
        <ProfileHeader />

        {/* Authentic Two-Column Layout */}
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          {/* Left Column (~38% width): Profile Photo & Demographics, Contact Table, Interests */}
          <div className="w-full lg:w-[38%] flex-shrink-0">
            <LeftColumn 
              onOpenBooking={() => handleOpenBooking()}
              onOpenServiceMenu={() => {
                const elem = document.getElementById('services-section');
                if (elem) elem.scrollIntoView({ behavior: 'smooth' });
              }}
            />
          </div>

          {/* Right Column (~62% width): About Me Stats & Bio, Music Player, Booking Wizard, Top 8, Blog, Services, Before/After, Comments */}
          <div className="w-full lg:w-[62%] flex-1">
            <RightColumn 
              onBookingConfirmed={handleBookingConfirmed}
              onOpenBookingModal={(serviceId, stylistId) => handleOpenBooking(serviceId, stylistId)}
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating "Book Now" Button */}
      <FloatingBookButton onOpenBooking={() => handleOpenBooking()} />

      {/* Modals */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        initialServiceId={preselectedServiceId}
        initialStylistId={preselectedStylistId}
        onBookingConfirmed={handleBookingConfirmed}
      />

      <ConfirmationModal
        booking={confirmedBooking}
        onClose={() => setConfirmedBooking(null)}
      />
    </div>
  );
}
