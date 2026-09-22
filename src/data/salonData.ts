import { Service, Stylist, Review, GalleryItem } from '../types';

export const SALON_SERVICES: Service[] = [
  {
    id: 'bombshell-cut',
    title: '90s/2000s Bombshell Butterfly Cut & Blowout',
    category: 'cuts',
    price: 110,
    durationMinutes: 60,
    description: 'Bespoke precision layers that frame the face with explosive volume, bounce, and movement. Finished with a round-brush velcro roller set.',
    image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=800&q=80',
    popular: true,
    highlights: ['Scalp massage ritual', 'Velcro roller volume set', 'Thermal heat protection']
  },
  {
    id: 'chunky-y2k-blonding',
    title: 'Signature Y2K Money Piece & Lived-in Balayage',
    category: 'color',
    price: 250,
    durationMinutes: 180,
    description: 'High-contrast face-framing money pieces paired with seamless lived-in honey blonde balayage ribbons. Includes gloss toner and bond builder.',
    image: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&w=800&q=80',
    popular: true,
    highlights: ['Bold face-framing pop', 'Low-maintenance growout', 'Olaplex bond builder']
  },
  {
    id: 'silk-press-glass',
    title: 'Silk Press & Liquid Glass Shine Glaze',
    category: 'cuts',
    price: 95,
    durationMinutes: 75,
    description: 'Deep hydration steam therapy, gentle tension blow-dry, and silky titanium iron press that leaves hair flowing like liquid mirror silk.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    popular: true,
    highlights: ['Hydrating steam mask', 'Zero heat damage protocol', 'Resists humidity for 2 weeks']
  },
  {
    id: 'gloss-tone-refresh',
    title: 'Rose Quartz & Honey Gloss Glaze',
    category: 'color',
    price: 85,
    durationMinutes: 45,
    description: 'Cancel brassiness and seal cuticles with ultra-reflective rose gold or buttery champagne pigments. Perfect 6-week refresh between sessions.',
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80',
    highlights: ['Zero ammonia', 'Seals split ends', 'Mirror glass finish']
  },
  {
    id: 'k18-peptide-therapy',
    title: 'K18 Molecular Peptide Repair Therapy',
    category: 'treatments',
    price: 75,
    durationMinutes: 30,
    description: 'Clinical biomimetic peptide therapy that reconnects broken keratin polypeptide chains from bleach or heat. Restores 91% virgin elasticity.',
    image: 'https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?auto=format&fit=crop&w=800&q=80',
    popular: false,
    highlights: ['Permanent molecular repair', 'Deep internal strength', 'Works in 4 minutes']
  },
  {
    id: 'japanese-head-spa',
    title: 'Botanical Scalp Detox & Head Spa',
    category: 'treatments',
    price: 130,
    durationMinutes: 60,
    description: 'Trichological clarifying AHA cleanse, herbal hydro-steam dome, cooling jade gua sha acupressure massage, and high-frequency scalp stimulation.',
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=800&q=80',
    highlights: ['Scalp microscope analysis', 'Herbal steam dome', 'Nervous system reset']
  },
  {
    id: 'tape-in-extensions',
    title: 'Luxury Seamless Tape-In Extensions',
    category: 'bridal',
    price: 350,
    durationMinutes: 120,
    description: '100% human Slavic cuticle hair customized to match your exact shade and density. Invisible tape bonds for effortless ponytail styling.',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80',
    highlights: ['100% Remy human hair', 'Reusable for 1 year', 'Invisible ultra-thin tabs']
  },
  {
    id: 'y2k-glam-updo',
    title: 'Y2K Spiky Bun & Couture Bridal Updo',
    category: 'bridal',
    price: 175,
    durationMinutes: 90,
    description: 'Signature 2000s tendril chignon, spiky high-fashion bun, or romantic cascading waves tailored for red carpets, proms, and weddings.',
    image: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&w=800&q=80',
    highlights: ['2 bespoke style previews', 'All-night weather lock', 'Complimentary pink mimosa']
  }
];

// Top 8 Stylists (Iconic MySpace Top 8 feature!)
export const STYLISTS: Stylist[] = [
  {
    id: 'camille-laurent',
    name: 'Camille Laurent',
    role: 'Creative Director & Balayage Lead',
    experience: '12 Yrs Exp',
    bio: 'Queen of lived-in French blondes and high-contrast Y2K money pieces. Certified master colorist.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    specialties: ['French Balayage', 'Money Piece', 'Color Correction'],
    rating: 4.99,
    reviewsCount: 340,
    instagram: '@camille.haircraft'
  },
  {
    id: 'marcus-thorne',
    name: 'Marcus Thorne',
    role: 'Precision Cutting Specialist',
    experience: '10 Yrs Exp',
    bio: 'Backstage fashion week stylist creating jaw-dropping 90s butterfly layers and curtain fringes.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    specialties: ['Butterfly Cuts', 'Curtain Bangs', 'Texturizing'],
    rating: 4.98,
    reviewsCount: 285,
    instagram: '@marcusthorne.hair'
  },
  {
    id: 'sofia-morales',
    name: 'Sofia Morales',
    role: 'Master Texture & Silk Press',
    experience: '9 Yrs Exp',
    bio: 'Texture artist celebrated for liquid glass silk presses, curls, and Y2K red carpet updos.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    specialties: ['Silk Press', 'Curls & Coils', 'Red Carpet Glam'],
    rating: 4.97,
    reviewsCount: 220,
    instagram: '@sofia.atelier'
  },
  {
    id: 'elena-vance',
    name: 'Elena Vance',
    role: 'Senior Colorist & Tone Artist',
    experience: '8 Yrs Exp',
    bio: 'Formulating dreamy rose quartz tones, copper melts, and platinum blonde transformations.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    specialties: ['Pastel Glazes', 'Copper Hair', 'Root Melts'],
    rating: 4.96,
    reviewsCount: 198,
    instagram: '@elena.color'
  },
  {
    id: 'chloe-dupont',
    name: 'Chloé Dupont',
    role: 'Extension & Volume Master',
    experience: '7 Yrs Exp',
    bio: 'Slavic seamless tape-in and K-tip extension specialist. Adding instant length and dream volume.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    specialties: ['Tape-Ins', 'K-Tips', 'Volume Blending'],
    rating: 4.95,
    reviewsCount: 165
  },
  {
    id: 'devon-reese',
    name: 'Devon Reese',
    role: 'Editorial Stylist & Scalp Specialist',
    experience: '8 Yrs Exp',
    bio: 'Certified Japanese head spa therapist and blow-dry king. Bringing back ultra-bouncy 2000s blowouts.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    specialties: ['Japanese Head Spa', 'Bouncy Blowout', 'Scalp Health'],
    rating: 4.97,
    reviewsCount: 182
  },
  {
    id: 'mia-santoro',
    name: 'Mia Santoro',
    role: 'Bridal & Styling Lead',
    experience: '6 Yrs Exp',
    bio: 'Romantic bridal looks, spiky Y2K buns, and editorial braided crowns that hold through the night.',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80',
    specialties: ['Bridal Updos', 'Y2K Tendrils', 'Event Styling'],
    rating: 4.96,
    reviewsCount: 145
  },
  {
    id: 'any-stylist',
    name: 'Any Available Master',
    role: 'First Available Artist',
    experience: 'Certified Pro',
    bio: 'Get the earliest appointment slot! We automatically match your hair goals with our resident master.',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
    specialties: ['Flexible Times', 'Instant Booking', 'Team Match'],
    rating: 4.99,
    reviewsCount: 520
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Champagne Honey Melt',
    category: 'balayage',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1000&q=80',
    description: 'Lived-in warm honey tones with liquid mirror shine finish.'
  },
  {
    id: 'g2',
    title: '90s Bombshell Butterfly Cut',
    category: 'cuts',
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=1000&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=1000&q=80',
    description: 'Cascading curtain layers with immense bounce and face framing.'
  },
  {
    id: 'g3',
    title: 'The Melrose Glam Atelier',
    category: 'interior',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80',
    description: 'Our pink-lit neon and gold vanity stations with custom ring lights.'
  },
  {
    id: 'g4',
    title: 'Y2K Spiky Bun with Tendrils',
    category: 'bridal',
    image: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&w=1000&q=80',
    description: 'Iconic high-fashion spiky bun with soft face-framing tendrils.'
  },
  {
    id: 'g5',
    title: 'Lived-In Dimensional Brunette',
    category: 'balayage',
    image: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&w=1000&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=80',
    description: 'Rich chocolate base lifted with caramel ribbons for maximum movement.'
  },
  {
    id: 'g6',
    title: 'Hot Pink Neon Lounge',
    category: 'interior',
    image: 'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&w=1000&q=80',
    description: 'Plush velvet chairs, pink mimosas, and complimentary matcha bar.'
  }
];

export const TESTIMONIALS: Review[] = [
  {
    id: 'rev-1',
    author: '✨ Ashley K. ✨',
    rating: 5,
    date: '5/10/2006 (Just now!)',
    service: 'Y2K Money Piece & Balayage',
    comment: 'Thanks 4 the add & the UNREAL hair!! Camille literally blessed my hair. The money piece is so 2000s chic and my friends at the club could not stop asking who did it! 💖💖 xx',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    verified: true
  },
  {
    id: 'rev-2',
    author: '💋 Brittany V. 💋',
    rating: 5,
    date: 'Yesterday at 3:42 PM',
    service: '90s Butterfly Cut & Silk Press',
    comment: 'Marcus gave me the bounciest layers I have EVER seen! Felt like I was on TRL with Carson Daly. Plus they were playing Aaliyah and served me pink champagne. 10/10 vibes!! ⭐⭐⭐⭐⭐',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    verified: true
  },
  {
    id: 'rev-3',
    author: '🌸 Jessica M. 🌸',
    rating: 5,
    date: '2 days ago',
    service: 'Japanese Scalp Head Spa',
    comment: 'The scalp detox was heavenly. My head felt 10 pounds lighter and the tension in my neck completely dissolved. Booking my next appointment right now!! 💕',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    verified: true
  }
];

export const TIME_SLOTS = [
  '09:00 AM',
  '10:15 AM',
  '11:30 AM',
  '01:00 PM',
  '02:15 PM',
  '03:30 PM',
  '04:45 PM',
  '06:00 PM'
];

export const SALON_INFO = {
  name: 'AURA Salon & Hair Atelier',
  tagline: 'it is what it is... flawless hair every time 💕',
  profileUrl: 'myspace.com/aurasalonla',
  mood: '✨ Slaying Hair',
  views: '48,291',
  status: '🔴 Online Now',
  address: '428 Melrose Avenue, Suite 104',
  city: 'West Hollywood, CA 90048',
  phone: '(310) 844-2910',
  email: 'concierge@aurasalon.com',
  hours: [
    { days: 'Tuesday – Friday', time: '9:00 AM – 7:30 PM' },
    { days: 'Saturday', time: '8:30 AM – 6:00 PM' },
    { days: 'Sunday – Monday', time: 'VIP Appointments & Masterclasses' }
  ],
  playlist: [
    { title: 'Rock The Boat', artist: 'Aaliyah', duration: '4:35' },
    { title: 'Say My Name', artist: "Destiny's Child", duration: '4:00' },
    { title: '1, 2 Step', artist: 'Ciara ft. Missy Elliott', duration: '3:23' },
    { title: 'Crazy in Love', artist: 'Beyoncé ft. Jay-Z', duration: '3:56' },
  ]
};
