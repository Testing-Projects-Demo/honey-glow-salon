export const BUSINESS = {
  name: "Honey Glow Men's Salon & Tattoo",
  tagline: "Where Grooming Meets Artistry",
  phone: '+91 74492 23356',
  phoneRaw: '+917449223356',
  whatsapp: '917449223356',
  address: {
    street: 'Thoppaichetty Street',
    city: 'Walajapet',
    district: 'Ranipet',
    state: 'Tamil Nadu',
    pin: '632513',
    full: 'Thoppaichetty Street, Walajapet, Ranipet, Tamil Nadu 632513',
  },
  rating: '4.9',
  reviews: '122+',
  hours: 'Mon – Sun: 9:00 AM – 9:00 PM',
  email: 'info@honeyglowsalon.in',
  mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0!2d79.3649!3d12.9219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU1JzE5LjAiTiA3OcKwMjEnNTMuNiJF!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin',
}

export const SERVICES = [
  {
    category: 'Hair Services',
    icon: '✂',
    items: [
      { name: 'Haircut', desc: 'Precision cuts tailored to your face shape', price: '₹150+' },
      { name: 'Hair Spa', desc: 'Deep nourishment & scalp revival therapy', price: '₹499+' },
      { name: 'Hair Color', desc: 'Global & highlight coloring with premium dyes', price: '₹699+' },
      { name: 'Hair Wash', desc: 'Refreshing cleanse with luxury shampoos', price: '₹100+' },
      { name: 'Hairstyling', desc: 'Special occasion styling & texture work', price: '₹199+' },
    ]
  },
  {
    category: 'Beard Grooming',
    icon: '🪒',
    items: [
      { name: 'Beard Trim', desc: 'Clean line shaping & precision trimming', price: '₹100+' },
      { name: 'Beard Styling', desc: 'Designer shaping with hot towel finish', price: '₹149+' },
      { name: 'Clean Shave', desc: 'Traditional straight-razor luxury shave', price: '₹120+' },
    ]
  },
  {
    category: 'Face Care',
    icon: '✨',
    items: [
      { name: 'Facial', desc: 'Rejuvenating deep cleanse & glow treatment', price: '₹399+' },
      { name: 'D-Tan', desc: 'Advanced de-tanning & brightening therapy', price: '₹299+' },
      { name: 'Cleanup', desc: 'Express refreshing skin purification', price: '₹199+' },
      { name: 'Face Bleach', desc: 'Gentle brightening for radiant complexion', price: '₹249+' },
    ]
  },
  {
    category: 'Bridal Grooming',
    icon: '👑',
    items: [
      { name: 'Groom Makeover', desc: 'Complete transformation for your big day', price: '₹2499+' },
      { name: 'Wedding Styling', desc: 'Head-to-toe styling for wedding functions', price: '₹1999+' },
    ]
  },
  {
    category: 'Tattoo Studio',
    icon: '🖋',
    items: [
      { name: 'Custom Tattoo', desc: 'Bespoke artwork crafted for your vision', price: 'Custom' },
      { name: 'Name Tattoo', desc: 'Elegant calligraphy & script lettering', price: '₹499+' },
      { name: 'Symbol Tattoo', desc: 'Minimalist & intricate symbolic designs', price: '₹699+' },
      { name: 'Traditional Tattoo', desc: 'Classic Irezumi & old-school artistry', price: 'Custom' },
      { name: 'Modern Tattoo', desc: 'Geometric, watercolor & neo-trad styles', price: 'Custom' },
    ]
  }
]

export const REVIEWS = [
  {
    name: 'Arjun Krishnamurthy',
    rating: 5,
    date: 'March 2025',
    text: 'Absolutely phenomenal experience! The attention to detail in my haircut was impeccable. The salon has a premium ambience that rivals any high-end studio in Chennai. My go-to place in Walajapet.',
    service: 'Haircut & Beard Styling',
  },
  {
    name: 'Vikram Subramaniam',
    rating: 5,
    date: 'February 2025',
    text: "Got my first tattoo here – a custom sleeve piece. The artist's precision and artistry blew my mind. Hygiene standards are top-notch. Absolutely worth every rupee.",
    service: 'Custom Tattoo',
  },
  {
    name: 'Rahul Selvam',
    rating: 5,
    date: 'February 2025',
    text: 'Came in for the bridal groom package for my wedding. They transformed me completely. The team is professional, skilled and the results were stunning. Everyone at the wedding was impressed!',
    service: 'Groom Makeover',
  },
  {
    name: 'Karthik Rajan',
    rating: 5,
    date: 'January 2025',
    text: 'Best facial I have ever had. The D-Tan treatment made a visible difference from the very first session. This salon is truly a cut above everything else in Ranipet district.',
    service: 'D-Tan & Facial',
  },
  {
    name: 'Dinesh Kumar',
    rating: 5,
    date: 'January 2025',
    text: 'The hair spa here is exceptional. My hair felt like silk after the treatment. The staff are warm, professional and truly know their craft. Highly recommend to everyone.',
    service: 'Hair Spa',
  },
  {
    name: 'Suresh Natarajan',
    rating: 4,
    date: 'December 2024',
    text: 'Very skilled barbers and a relaxing atmosphere. The beard styling was perfect and the hot towel shave was a premium experience I had never had before. Will definitely return.',
    service: 'Beard Grooming',
  },
]

export const WHY_CHOOSE = [
  {
    icon: '🏆',
    title: 'Master Artisans',
    desc: 'Our stylists bring years of specialized training from premium grooming institutes across India.',
  },
  {
    icon: '✨',
    title: 'Premium Products',
    desc: 'We exclusively use luxury professional-grade products for every treatment and service.',
  },
  {
    icon: '🛡️',
    title: 'Hygienic Standards',
    desc: 'Hospital-level sanitization protocols for all equipment, especially the tattoo studio.',
  },
  {
    icon: '👑',
    title: 'Personalized Service',
    desc: 'Every client receives a bespoke consultation tailored to their unique style and goals.',
  },
  {
    icon: '⭐',
    title: '4.9 Star Rating',
    desc: 'Rated by 122+ happy clients — a testament to our unwavering commitment to excellence.',
  },
  {
    icon: '🎨',
    title: 'Tattoo Excellence',
    desc: 'Our tattoo artists specialize in custom, traditional and modern styles with flawless execution.',
  },
]
