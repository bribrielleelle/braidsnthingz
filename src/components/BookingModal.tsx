import React from 'react';
import { BookingWizard } from './BookingWizard';
import { ConfirmedBooking } from '../types';
import { X, Sparkles } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
  initialStylistId?: string;
  onBookingConfirmed: (booking: ConfirmedBooking) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialServiceId,
  initialStylistId,
  onBookingConfirmed,
}) => {
  if (!isOpen) return null;

  return (
    <div
      id="booking-modal-overlay"
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-[#000000] border-2 border-[#D2006B] p-4 sm:p-8 shadow-[0_0_30px_rgba(255,20,147,0.5)] my-6 font-sans text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-1.5 bg-[#2B0515] border border-[#FF69B4] text-[#FFB6C1] hover:text-white hover:bg-[#D2006B] transition-colors cursor-pointer z-10"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-5 pb-3 border-b border-[#331122]">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 bg-[#2B0515] border border-[#FF1493] text-[#FFB6C1] text-xs font-mono uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#FFD700]" />
            <span>talatasva Hair Studio Reservation</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Book Your Perfect Hairday 💕
          </h2>
          <p className="text-xs text-[#AAAAAA] mt-1 max-w-lg mx-auto">
            Choose your service, resident master artist, and appointment time. Instant confirmation sent to your phone!
          </p>
        </div>

        {/* Embedded Wizard */}
        <BookingWizard
          isModal={true}
          initialServiceId={initialServiceId}
          initialStylistId={initialStylistId}
          onBookingConfirmed={onBookingConfirmed}
          onCloseModal={onClose}
        />
      </div>
    </div>
  );
};
