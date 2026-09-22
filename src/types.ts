export type ServiceCategory = 'all' | 'cuts' | 'color' | 'treatments' | 'bridal';

export interface Service {
  id: string;
  title: string;
  category: ServiceCategory;
  price: number;
  durationMinutes: number;
  description: string;
  image: string;
  popular?: boolean;
  highlights: string[];
}

export interface Stylist {
  id: string;
  name: string;
  role: string;
  experience: string;
  bio: string;
  avatar: string;
  specialties: string[];
  rating: number;
  reviewsCount: number;
  instagram?: string;
}

export interface BookingFormData {
  serviceId: string;
  stylistId: string;
  date: string;
  timeSlot: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  notes: string;
}

export interface ConfirmedBooking extends BookingFormData {
  bookingId: string;
  createdAt: string;
  serviceTitle: string;
  servicePrice: number;
  serviceDuration: number;
  stylistName: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  service: string;
  comment: string;
  avatar: string;
  verified: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'balayage' | 'cuts' | 'bridal' | 'interior';
  image: string;
  description: string;
  beforeImage?: string;
}
