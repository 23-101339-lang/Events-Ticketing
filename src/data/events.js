export const heroStats = [
  { value: '500K+', label: 'Tickets Sold' },
  { value: '10K+', label: 'Events' },
  { value: '50+', label: 'Countries' },
]

export const categories = [
  { id: 'music', name: 'Music', subtext: 'Live & Electronic', color: 'purple', image: '/assets/images/music.png' },
  { id: 'comedy', name: 'Comedy', subtext: 'Stand-up & Shows', color: 'magenta', image: '/assets/images/comedy.png' },
  { id: 'theatre', name: 'Theatre', subtext: 'Drama & Musicals', color: 'violet', image: '/assets/images/theatre.png' },
  { id: 'talks', name: 'Talks', subtext: 'Ideas & Panels', color: 'red', image: '/assets/images/talks.png' },
  { id: 'workshops', name: 'Workshops', subtext: 'Learn & Create', color: 'blue', image: '/assets/images/workshops.png' },
  { id: 'community', name: 'Community', subtext: 'Art & Craft', color: 'orange', image: '/assets/images/community.png' },
]

const concertImg = 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1200&q=80'

export const happeningNow = {
  featured: {
    id: 'neon-night',
    title: 'Neon Night Festival',
    date: 'Sat, Apr 12 · 21:00',
    location: 'Skyline Arena',
    price: 89,
    image: concertImg,
  },
  grid: [
    { id: 'jazz-stars', title: 'Jazz Under the Stars', date: 'Apr 8', price: 45, image: 'https://images.unsplash.com/photo-1415201367414-f6f34009a67d?w=800&q=80' },
    { id: 'horizon-night', title: 'Horizon Night', date: 'Apr 10', price: 62, image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80' },
    { id: 'art-street', title: 'Art in the Street', date: 'Apr 14', price: 0, image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&q=80' },
    { id: 'electric-glow', title: 'Electric Glow', date: 'Apr 18', price: 55, image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80' },
  ],
}

export const aboutStats = [
  { value: '98%', label: 'Customer Satisfaction' },
  { value: '24/7', label: 'Ticketing Support' },
  { value: '100%', label: 'Secure Checkout' },
]

export const aboutFeatures = [
  { id: 'booking', icon: '🎫', title: 'Seamless Booking', description: 'Browse, compare, and checkout in minutes with a flow built for speed and clarity.' },
  { id: 'delivery', icon: '⚡', title: 'Instant Delivery', description: 'Digital tickets arrive in your inbox immediately — no printing required.' },
  { id: 'flex', icon: '🔄', title: 'Flexible Tickets', description: 'Transfer, upgrade, or request refunds where policies allow, all in one place.' },
  { id: 'pay', icon: '🔒', title: 'Secure Payments', description: 'Encrypted checkout with trusted providers and fraud monitoring on every order.' },
]

export const featuredEvent = {
  badge: 'LIMITED TICKETS',
  title: 'MIDNIGHT ODYSSEY FESTIVAL 2026',
  date: 'Saturday, May 17',
  time: '20:00 - 04:00',
  location: 'Electric Grounds',
  price: 149,
  stats: [
    { value: '5,000+', label: 'Attendees' },
    { value: '10+', label: 'Artists' },
    { value: '3', label: 'Stages' },
    { value: '18+', label: 'Age' },
  ],
  image: concertImg,
}

export const bookableEvents = [
  { id: 'neon-night', name: 'Neon Night Festival', pricePerTicket: 89 },
  { id: 'midnight-odyssey', name: 'Midnight Odyssey Festival 2026', pricePerTicket: 149 },
  { id: 'jazz-stars', name: 'Jazz Under the Stars', pricePerTicket: 45 },
  { id: 'horizon-night', name: 'Horizon Night', pricePerTicket: 62 },
  { id: 'electric-glow', name: 'Electric Glow', pricePerTicket: 55 },
]

export const serviceFee = 15

export const testimonials = {
  featured: {
    quote: 'Pulse Pass made our festival launch painless — sold out in hours and support was incredible.',
    name: 'Jordan Lee',
    role: 'Event Producer',
    rating: 5,
  },
  cards: [
    { id: 't2', quote: 'Easiest checkout I have used this year. Tickets in seconds.', name: 'Emma Smith' },
    { id: 't3', quote: 'Love the dark UI and instant QR codes. Will use again.', name: 'Alex Johnson' },
    { id: 't4', quote: 'Refunds were handled quickly when plans changed. Top tier.', name: 'Sam Rivera' },
    { id: 't5', quote: 'Found a comedy show near me in one tap. Brilliant.', name: 'Priya N.' },
  ],
}

export const trustBarStats = [
  { value: '4.9/5', label: 'Rating' },
  { value: '99.9%', label: 'Uptime' },
  { value: '500K+', label: 'Users' },
  { value: '10K+', label: 'Events' },
]

export const newsletterTopics = ['Announcements', 'Events Near You', 'Special Offers', 'Tips & Tricks']

export const footerLinks = {
  explore: [
    { label: 'Events', to: 'events' },
    { label: 'Categories', to: 'categories' },
    { label: 'Featured', to: 'featured' },
    { label: 'Locations', to: 'booking' },
  ],
  about: [
    { label: 'Our Story', to: 'about' },
    { label: 'Careers', to: 'footer' },
    { label: 'Press', to: 'footer' },
    { label: 'Blog', to: 'footer' },
  ],
  legal: [
    { label: 'Terms', to: 'footer' },
    { label: 'Privacy', to: 'footer' },
    { label: 'Cookies', to: 'footer' },
    { label: 'Security', to: 'footer' },
  ],
}
