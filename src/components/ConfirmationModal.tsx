import React, { useEffect } from 'react';
import { ConfirmedBooking } from '../types';
import { SALON_INFO } from '../data/salonData';
import { 
  CheckCircle2, 
  Calendar as CalendarIcon, 
  Clock, 
  MapPin, 
  User, 
  X, 
  Sparkles,
  Phone,
  Heart
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ConfirmationModalProps {
  booking: ConfirmedBooking | null;
  onClose: () => void;
}

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ booking, onClose }) => {
  useEffect(() => {
    if (booking) {
      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#FF1493', '#FF69B4', '#FFD700', '#FFFFFF', '#D2006B']
        });
      } catch {
        // graceful fallback
      }
    }
  }, [booking]);

  if (!booking) return null;

  const formattedDate = new Date(booking.date + 'T00:00:00').toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  const generateGoogleCalendarUrl = () => {
    const title = encodeURIComponent(`talatasva Hair Studio: ${booking.serviceTitle}`);
    const details = encodeURIComponent(
      `Appointment with ${booking.stylistName} for ${booking.serviceTitle} (${booking.serviceDuration} mins).\nBooking Reference: ${booking.bookingId}\nContact: ${SALON_INFO.phone}\nNotes: ${booking.notes || 'None'}`
    );
    const location = encodeURIComponent(`${SALON_INFO.address}, ${SALON_INFO.city}`);
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}`;
  };

  return (
    <div
      id="confirmation-modal-overlay"
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-lg w-full bg-[#000000] border-2 border-[#D2006B] p-6 sm:p-8 shadow-[0_0_30px_rgba(255,20,147,0.6)] my-6 font-sans text-white text-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-1.5 bg-[#2B0515] border border-[#FF69B4] text-[#FFB6C1] hover:text-white hover:bg-[#D2006B] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Celebratory Icon */}
        <div className="w-16 h-16 bg-[#2B0515] border-2 border-[#FF1493] flex items-center justify-center mx-auto mb-4 shadow-[0_0_15px_rgba(255,20,147,0.5)]">
          <Heart className="w-9 h-9 text-[#FF1493] fill-[#FF1493] animate-pulse" />
        </div>

        <span className="text-xs font-mono uppercase tracking-widest text-[#39FF14] font-bold">
          ★ APPOINTMENT RESERVED ★
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1 mb-2 tracking-tight">
          You&apos;re Booked, Babe! 💕
        </h2>
        <p className="text-xs text-[#CCCCCC] max-w-sm mx-auto mb-5 leading-relaxed">
          We received your reservation for <strong className="text-white">{booking.clientName}</strong>. A confirmation SMS has been dispatched to {booking.clientPhone}.
        </p>

        {/* Reservation Receipt Card */}
        <div className="bg-[#0D0509] border border-[#FF1493] p-4 text-left space-y-3 mb-5 text-xs">
          <div className="flex items-center justify-between border-b border-[#331122] pb-2">
            <span className="text-[#AAAAAA] font-mono">Reference Code:</span>
            <span className="font-mono font-bold text-[#FFD700] text-sm tracking-wider">
              #{booking.bookingId}
            </span>
          </div>

          <div className="space-y-2">
            <div>
              <span className="text-[10px] text-[#FF69B4] uppercase font-mono block">Service Ritual:</span>
              <p className="font-bold text-white text-sm">{booking.serviceTitle}</p>
              <p className="text-[#AAAAAA] text-[11px] font-mono">${booking.servicePrice} • {booking.serviceDuration} mins</p>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1 border-t border-[#220815]">
              <div>
                <span className="text-[10px] text-[#FF69B4] uppercase font-mono block">Master Stylist:</span>
                <p className="font-semibold text-white">{booking.stylistName}</p>
              </div>
              <div>
                <span className="text-[10px] text-[#FF69B4] uppercase font-mono block">Time Slot:</span>
                <p className="font-semibold text-[#FFD700]">{booking.timeSlot}</p>
              </div>
            </div>

            <div className="pt-1 border-t border-[#220815]">
              <span className="text-[10px] text-[#FF69B4] uppercase font-mono block">Calendar Date:</span>
              <p className="font-semibold text-white">{formattedDate}</p>
            </div>

            <div className="pt-1 border-t border-[#220815]">
              <span className="text-[10px] text-[#FF69B4] uppercase font-mono block">Location:</span>
              <p className="text-[#CCCCCC]">{SALON_INFO.address}, {SALON_INFO.city}</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2 font-bold text-xs uppercase tracking-wider">
          <a
            href={generateGoogleCalendarUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#D2006B] hover:bg-[#FF007F] text-white py-2.5 px-4 border border-white flex items-center justify-center gap-2 transition-all shadow-[0_0_12px_rgba(255,20,147,0.6)]"
          >
            <CalendarIcon className="w-4 h-4 text-[#FFD700]" />
            <span>Add to Google Calendar</span>
          </a>

          <button
            onClick={onClose}
            className="w-full bg-black hover:bg-[#1A0510] text-[#FFB6C1] hover:text-white py-2 px-4 border border-[#FF1493] transition-colors"
          >
            Back to Profile
          </button>
        </div>

        <p className="text-[10px] text-[#888888] font-mono mt-4">
          Need to reschedule? Call concierge at {SALON_INFO.phone}.
        </p>
      </div>
    </div>
  );
};
