import React, { useState, useMemo } from 'react';
import { SALON_SERVICES, STYLISTS, TIME_SLOTS } from '../data/salonData';
import { Service, Stylist, BookingFormData, ConfirmedBooking, ServiceCategory } from '../types';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  Scissors, 
  User, 
  Check, 
  ChevronRight, 
  ChevronLeft, 
  ShieldCheck, 
  AlertCircle,
  Sparkles,
  Heart
} from 'lucide-react';

interface BookingWizardProps {
  initialServiceId?: string;
  initialStylistId?: string;
  onBookingConfirmed: (booking: ConfirmedBooking) => void;
  isModal?: boolean;
  onCloseModal?: () => void;
}

export const BookingWizard: React.FC<BookingWizardProps> = ({
  initialServiceId,
  initialStylistId,
  onBookingConfirmed,
  isModal = false,
  onCloseModal,
}) => {
  // Wizard steps: 1: Service, 2: Stylist, 3: Date & Time, 4: Client Info
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [serviceCategory, setServiceCategory] = useState<ServiceCategory>('all');

  // Form State
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    initialServiceId || SALON_SERVICES[0].id
  );
  const [selectedStylistId, setSelectedStylistId] = useState<string>(
    initialStylistId || 'any-stylist'
  );

  // Generate selectable dates for next 14 days
  const availableDates = useMemo(() => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 14; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      const dayName = d.toLocaleDateString('en-US', { weekday: 'short' });
      const monthName = d.toLocaleDateString('en-US', { month: 'short' });
      const dayNum = d.getDate();
      const dateString = d.toISOString().split('T')[0];
      const isSunday = d.getDay() === 0;

      dates.push({
        dateObj: d,
        dateString,
        dayName,
        monthName,
        dayNum,
        isClosed: isSunday,
      });
    }
    return dates;
  }, []);

  const [selectedDate, setSelectedDate] = useState<string>(
    availableDates.find(d => !d.isClosed)?.dateString || availableDates[0].dateString
  );
  const [selectedTime, setSelectedTime] = useState<string>('10:15 AM');

  const [clientName, setClientName] = useState<string>('');
  const [clientEmail, setClientEmail] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  // Active items
  const selectedService = SALON_SERVICES.find(s => s.id === selectedServiceId) || SALON_SERVICES[0];
  const selectedStylist = STYLISTS.find(s => s.id === selectedStylistId) || STYLISTS[0];

  const handleNextStep = () => {
    if (currentStep === 1 && !selectedServiceId) return;
    if (currentStep === 2 && !selectedStylistId) return;
    if (currentStep === 3 && (!selectedDate || !selectedTime)) return;

    if (currentStep < 4) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: { [key: string]: string } = {};

    if (!clientName.trim()) {
      errors.name = 'Please provide your full name.';
    }
    if (!clientEmail.trim() || !clientEmail.includes('@')) {
      errors.email = 'Please provide a valid email address.';
    }
    if (!clientPhone.trim() || clientPhone.length < 7) {
      errors.phone = 'Please provide a valid contact phone number.';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});

    const randomCode = Math.floor(1000 + Math.random() * 9000);
    const bookingCode = `AUR-${randomCode}`;

    const confirmed: ConfirmedBooking = {
      bookingId: bookingCode,
      createdAt: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
      serviceId: selectedService.id,
      serviceTitle: selectedService.title,
      servicePrice: selectedService.price,
      serviceDuration: selectedService.durationMinutes,
      stylistId: selectedStylist.id,
      stylistName: selectedStylist.name,
      date: selectedDate,
      timeSlot: selectedTime,
      clientName: clientName.trim(),
      clientEmail: clientEmail.trim(),
      clientPhone: clientPhone.trim(),
      notes: notes.trim(),
    };

    onBookingConfirmed(confirmed);
  };

  const stepsList = [
    { number: 1, label: 'Service' },
    { number: 2, label: 'Stylist' },
    { number: 3, label: 'Date & Time' },
    { number: 4, label: 'Client Info' },
  ];

  return (
    <div id="booking-system" className="w-full font-sans text-white">
      {/* Wizard Progress Bar */}
      <div className="mb-6 border-b border-[#331122] pb-4">
        <div className="flex items-center justify-between max-w-2xl mx-auto">
          {stepsList.map((step, idx) => (
            <React.Fragment key={step.number}>
              <div 
                onClick={() => {
                  if (step.number < currentStep) setCurrentStep(step.number);
                }}
                className={`flex items-center gap-1.5 cursor-pointer transition-colors ${
                  currentStep === step.number
                    ? 'text-[#FF2A85] font-bold'
                    : currentStep > step.number
                    ? 'text-white'
                    : 'text-[#666666]'
                }`}
              >
                <div
                  className={`w-7 h-7 flex items-center justify-center text-xs font-bold transition-all border ${
                    currentStep === step.number
                      ? 'bg-[#D2006B] border-white text-white shadow-[0_0_8px_rgba(255,20,147,0.6)]'
                      : currentStep > step.number
                      ? 'bg-[#2E0515] border-[#FF1493] text-[#FFB6C1]'
                      : 'bg-black border-[#444444] text-[#777777]'
                  }`}
                >
                  {currentStep > step.number ? <Check className="w-3.5 h-3.5" /> : step.number}
                </div>
                <span className="hidden sm:inline text-xs">{step.label}</span>
              </div>

              {idx < stepsList.length - 1 && (
                <div 
                  className={`h-0.5 flex-1 mx-2 sm:mx-4 transition-colors ${
                    currentStep > idx + 1 ? 'bg-[#D2006B]' : 'bg-[#331122]'
                  }`} 
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Main 2-Column Booking Work Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Step Content */}
        <div className="lg:col-span-8 space-y-4">
          {/* STEP 1: SERVICE SELECTION */}
          {currentStep === 1 && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="flex items-center justify-between border-b border-[#331122] pb-2">
                <div>
                  <h3 className="text-lg font-serif font-bold text-white flex items-center gap-2">
                    <span>1. Select Your Hair Ritual</span>
                    <Heart className="w-4 h-4 text-[#FF1493] fill-[#FF1493]" />
                  </h3>
                  <p className="text-xs text-[#AAAAAA]">Choose your desired cut, balayage, or restorative therapy.</p>
                </div>
              </div>

              {/* Category Filter Chips */}
              <div className="flex flex-wrap gap-1.5">
                {[
                  { id: 'all', label: 'All Services' },
                  { id: 'cuts', label: 'Cuts & Silk Press' },
                  { id: 'color', label: 'Balayage & Color' },
                  { id: 'treatments', label: 'K18 & Scalp Spa' },
                  { id: 'bridal', label: 'Extensions & Glam' },
                ].map(cat => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setServiceCategory(cat.id as ServiceCategory)}
                    className={`text-xs px-2.5 py-1 font-bold transition-all border ${
                      serviceCategory === cat.id
                        ? 'bg-[#D2006B] text-white border-white shadow-[0_0_8px_rgba(255,20,147,0.5)]'
                        : 'bg-black text-[#CCCCCC] border-[#441122] hover:border-[#FF1493]'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Services Grid */}
              <div className="space-y-2.5 max-h-[460px] overflow-y-auto pr-1">
                {SALON_SERVICES.filter(
                  s => serviceCategory === 'all' || s.category === serviceCategory
                ).map(service => {
                  const isSelected = selectedServiceId === service.id;
                  return (
                    <div
                      key={service.id}
                      onClick={() => setSelectedServiceId(service.id)}
                      className={`p-3 border transition-all cursor-pointer flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 ${
                        isSelected
                          ? 'bg-[#2B0516] border-[#FF1493] shadow-[0_0_12px_rgba(255,20,147,0.3)]'
                          : 'bg-black border-[#331122] hover:border-[#881144]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <img 
                          src={service.image} 
                          alt={service.title} 
                          className="w-16 h-16 object-cover border border-[#FF69B4] flex-shrink-0"
                          referrerPolicy="no-referrer"
                        />
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-bold text-sm text-white">{service.title}</h4>
                            {service.popular && (
                              <span className="bg-[#D2006B] text-white text-[9px] px-1.5 py-0.2 uppercase font-bold tracking-wider">
                                Popular
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-[#AAAAAA] line-clamp-1 mt-0.5">{service.description}</p>
                          <div className="flex items-center gap-3 mt-1 text-[11px] text-[#FFB6C1]">
                            <span className="flex items-center gap-1 font-mono">
                              <Clock className="w-3 h-3 text-[#FF1493]" />
                              {service.durationMinutes} mins
                            </span>
                            <span>•</span>
                            <span className="font-mono text-[#39FF14]">Full wash &amp; style included</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-1">
                        <span className="text-base font-bold text-[#FFD700] font-mono">
                          ${service.price}
                        </span>
                        <div className={`w-5 h-5 border flex items-center justify-center ${
                          isSelected ? 'bg-[#D2006B] border-white text-white' : 'border-[#555555]'
                        }`}>
                          {isSelected && <Check className="w-3.5 h-3.5" />}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 2: STYLIST SELECTION */}
          {currentStep === 2 && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="border-b border-[#331122] pb-2">
                <h3 className="text-lg font-serif font-bold text-white flex items-center gap-2">
                  <span>2. Pick Your Master Artist</span>
                  <Sparkles className="w-4 h-4 text-[#FFD700]" />
                </h3>
                <p className="text-xs text-[#AAAAAA]">Choose from talatasva&apos;s resident master stylists.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[460px] overflow-y-auto pr-1">
                {STYLISTS.map(stylist => {
                  const isSelected = selectedStylistId === stylist.id;
                  return (
                    <div
                      key={stylist.id}
                      onClick={() => setSelectedStylistId(stylist.id)}
                      className={`p-3 border transition-all cursor-pointer flex gap-3 ${
                        isSelected
                          ? 'bg-[#2B0516] border-[#FF1493] shadow-[0_0_12px_rgba(255,20,147,0.3)]'
                          : 'bg-black border-[#331122] hover:border-[#881144]'
                      }`}
                    >
                      <img 
                        src={stylist.avatar} 
                        alt={stylist.name} 
                        className="w-16 h-16 object-cover border border-[#D2006B] flex-shrink-0"
                        referrerPolicy="no-referrer"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h4 className="font-bold text-sm text-white truncate">{stylist.name}</h4>
                          <div className={`w-4 h-4 border flex items-center justify-center ${
                            isSelected ? 'bg-[#D2006B] border-white text-white' : 'border-[#555555]'
                          }`}>
                            {isSelected && <Check className="w-3 h-3" />}
                          </div>
                        </div>
                        <p className="text-[11px] text-[#FF69B4] truncate">{stylist.role}</p>
                        <p className="text-[10px] text-[#888888] font-mono mt-0.5">{stylist.experience}</p>
                        <div className="flex flex-wrap gap-1 mt-1.5">
                          {stylist.specialties.slice(0, 2).map((spec, i) => (
                            <span key={i} className="text-[9px] bg-[#1A0510] text-[#FFB6C1] px-1 border border-[#441122]">
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 3: DATE & TIME SELECTION */}
          {currentStep === 3 && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="border-b border-[#331122] pb-2">
                <h3 className="text-lg font-serif font-bold text-white flex items-center gap-2">
                  <span>3. Choose Date &amp; Time Slot</span>
                  <CalendarIcon className="w-4 h-4 text-[#FF1493]" />
                </h3>
                <p className="text-xs text-[#AAAAAA]">Appointments available Tuesday through Saturday.</p>
              </div>

              {/* 14-Day Date Horizontal Picker */}
              <div>
                <label className="text-xs font-bold text-[#FFB6C1] block mb-2 font-mono">
                  Select Calendar Date:
                </label>
                <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                  {availableDates.map(date => {
                    const isSelected = selectedDate === date.dateString;
                    return (
                      <button
                        key={date.dateString}
                        type="button"
                        disabled={date.isClosed}
                        onClick={() => setSelectedDate(date.dateString)}
                        className={`p-2 border text-center transition-all flex flex-col items-center ${
                          date.isClosed
                            ? 'bg-[#150810] border-[#220815] text-[#555555] cursor-not-allowed opacity-50'
                            : isSelected
                            ? 'bg-[#D2006B] border-white text-white shadow-[0_0_8px_rgba(255,20,147,0.6)] font-bold'
                            : 'bg-black border-[#441122] hover:border-[#FF1493] text-[#CCCCCC]'
                        }`}
                      >
                        <span className="text-[10px] uppercase font-mono">{date.dayName}</span>
                        <span className="text-base font-bold my-0.5">{date.dayNum}</span>
                        <span className="text-[9px]">{date.monthName}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time Slots */}
              <div className="pt-2">
                <label className="text-xs font-bold text-[#FFB6C1] block mb-2 font-mono">
                  Select Appointment Time:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {TIME_SLOTS.map(slot => {
                    const isSelected = selectedTime === slot;
                    return (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedTime(slot)}
                        className={`py-2 px-3 border text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                          isSelected
                            ? 'bg-[#D2006B] border-white text-white shadow-[0_0_8px_rgba(255,20,147,0.5)]'
                            : 'bg-black border-[#441122] hover:border-[#FF1493] text-[#CCCCCC]'
                        }`}
                      >
                        <Clock className="w-3 h-3 text-[#FF1493]" />
                        <span>{slot}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: CLIENT DETAILS FORM */}
          {currentStep === 4 && (
            <form onSubmit={handleFormSubmit} className="space-y-3.5 animate-in fade-in duration-200">
              <div className="border-b border-[#331122] pb-2">
                <h3 className="text-lg font-serif font-bold text-white flex items-center gap-2">
                  <span>4. Your Reservation Details</span>
                  <User className="w-4 h-4 text-[#FF1493]" />
                </h3>
                <p className="text-xs text-[#AAAAAA]">We will send instant confirmation and appointment reminders.</p>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#FFB6C1] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Jessica Miller"
                  value={clientName}
                  onChange={e => setClientName(e.target.value)}
                  className="w-full bg-[#11050A] border border-[#FF69B4] px-3 py-2 text-sm text-white outline-none focus:border-white transition-colors"
                />
                {formErrors.name && (
                  <p className="text-[#FF2A85] text-[11px] mt-1 flex items-center gap-1 font-mono">
                    <AlertCircle className="w-3 h-3" /> {formErrors.name}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#FFB6C1] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jessica@example.com"
                    value={clientEmail}
                    onChange={e => setClientEmail(e.target.value)}
                    className="w-full bg-[#11050A] border border-[#FF69B4] px-3 py-2 text-sm text-white outline-none focus:border-white transition-colors"
                  />
                  {formErrors.email && (
                    <p className="text-[#FF2A85] text-[11px] mt-1 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3" /> {formErrors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#FFB6C1] mb-1">
                    Mobile Phone (for SMS Reminders) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(310) 555-0199"
                    value={clientPhone}
                    onChange={e => setClientPhone(e.target.value)}
                    className="w-full bg-[#11050A] border border-[#FF69B4] px-3 py-2 text-sm text-white outline-none focus:border-white transition-colors"
                  />
                  {formErrors.phone && (
                    <p className="text-[#FF2A85] text-[11px] mt-1 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3" /> {formErrors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#FFB6C1] mb-1">
                  Stylist Notes &amp; Hair Goals (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your hair length, previous bleach, extensions, or desired butterfly layer volume..."
                  value={notes}
                  onChange={e => setNotes(e.target.value)}
                  className="w-full bg-[#11050A] border border-[#FF69B4] px-3 py-2 text-sm text-white outline-none focus:border-white transition-colors"
                />
              </div>

              <div className="bg-[#1C0512] p-3 border border-[#D2006B] text-xs text-[#E0E0E0] space-y-1">
                <p className="font-bold text-[#FFD700] flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  VIP Cancellation Policy:
                </p>
                <p className="text-[#AAAAAA] text-[11px]">
                  No upfront charge today. Please provide 24 hours notice for any rescheduling. Complimentary pink mimosas &amp; matcha upon arrival! 💕
                </p>
              </div>

              {/* Mobile Final Submit Button */}
              <div className="lg:hidden pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#D2006B] hover:bg-[#FF007F] text-white py-3 font-bold text-sm uppercase tracking-wider border-2 border-white shadow-[0_0_15px_rgba(255,20,147,0.8)] flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-[#FFD700]" />
                  <span>Confirm Reservation (${selectedService.price})</span>
                </button>
              </div>
            </form>
          )}

          {/* Stepper Navigation Buttons */}
          <div className="flex items-center justify-between pt-3 border-t border-[#331122]">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={handlePrevStep}
                className="bg-black hover:bg-[#1A0510] text-[#FFB6C1] hover:text-white px-3 py-1.5 border border-[#FF1493] text-xs font-bold flex items-center gap-1 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
            ) : <div />}

            {currentStep < 4 ? (
              <button
                type="button"
                onClick={handleNextStep}
                className="bg-[#D2006B] hover:bg-[#FF007F] text-white px-5 py-2 text-xs font-bold uppercase tracking-wider border border-white flex items-center gap-1.5 transition-colors shadow-[0_0_10px_rgba(255,20,147,0.6)]"
              >
                <span>Continue to Step {currentStep + 1}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleFormSubmit}
                className="hidden lg:flex bg-[#D2006B] hover:bg-[#FF007F] text-white px-6 py-2.5 text-xs font-bold uppercase tracking-wider border-2 border-white items-center gap-2 transition-all shadow-[0_0_15px_rgba(255,20,147,0.8)]"
              >
                <Sparkles className="w-4 h-4 text-[#FFD700]" />
                <span>Complete Booking (${selectedService.price})</span>
              </button>
            )}
          </div>
        </div>

        {/* Live Reservation Summary Card (Right Sidebar) */}
        <div className="lg:col-span-4 bg-[#0A0508] border border-[#FF1493] p-4 text-white shadow-[0_2px_15px_rgba(255,20,147,0.2)] flex flex-col justify-between">
          <div>
            <div className="bg-[#D2006B] -mx-4 -mt-4 px-3 py-2 border-b border-[#A80054] mb-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white flex items-center justify-between">
                <span>Appointment Summary</span>
                <Sparkles className="w-3.5 h-3.5 text-[#FFD700]" />
              </h4>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <span className="text-[#888888] text-[10px] uppercase font-mono">Service:</span>
                <p className="font-bold text-white mt-0.5">{selectedService.title}</p>
                <p className="text-[11px] text-[#FFB6C1] font-mono mt-0.5">${selectedService.price} • {selectedService.durationMinutes} mins</p>
              </div>

              <div className="border-t border-[#331122] pt-2">
                <span className="text-[#888888] text-[10px] uppercase font-mono">Stylist:</span>
                <p className="font-bold text-white mt-0.5">{selectedStylist.name}</p>
                <p className="text-[11px] text-[#AAAAAA]">{selectedStylist.role}</p>
              </div>

              <div className="border-t border-[#331122] pt-2">
                <span className="text-[#888888] text-[10px] uppercase font-mono">Date &amp; Time:</span>
                <p className="font-bold text-[#FFD700] mt-0.5">{selectedDate}</p>
                <p className="text-xs font-semibold text-white">{selectedTime}</p>
              </div>

              <div className="border-t border-[#331122] pt-2">
                <span className="text-[#888888] text-[10px] uppercase font-mono">Location:</span>
                <p className="font-semibold text-white mt-0.5">AURA Atelier Salon</p>
                <p className="text-[11px] text-[#AAAAAA]">428 Melrose Ave, West Hollywood</p>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t-2 border-[#D2006B]">
            <div className="flex items-center justify-between text-sm font-bold mb-1">
              <span>Total Estimated:</span>
              <span className="text-lg text-[#FFD700] font-mono">${selectedService.price}</span>
            </div>
            <p className="text-[10px] text-[#888888] font-mono text-center">
              Pay upon completion in salon • Cards &amp; Apple Pay
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
