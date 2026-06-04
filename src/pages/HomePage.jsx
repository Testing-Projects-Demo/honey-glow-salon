import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Phone, MapPin, Star, ChevronRight, Sparkles, Award } from 'lucide-react'
import { BUSINESS, SERVICES, REVIEWS, WHY_CHOOSE } from '../data/business'
import { useInView } from '../hooks/useInView'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: i * 0.1 }
  })
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
}

// ───────────────────────── HERO ─────────────────────────
function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax BG */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img
          src="/images/honey-glow-mens-salon-and-tattoo.png"
          alt="Honey Glow Salon Banner"
          className="w-full h-full object-cover object-center scale-105"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/70 via-[#080808]/60 to-[#080808]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/60 via-transparent to-[#080808]/60" />
      </motion.div>

      {/* Gold particle dots */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-[#C9A84C]/40"
          style={{
            left: `${15 + i * 14}%`,
            top: `${20 + (i % 3) * 20}%`,
          }}
          animate={{ opacity: [0.2, 0.8, 0.2], scale: [1, 1.5, 1] }}
          transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.5 }}
        />
      ))}

      <motion.div style={{ opacity }} className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full glass-card border border-[#C9A84C]/30"
        >
          <Star size={12} className="text-[#F0D888] fill-[#F0D888]" />
          <span className="font-josefin text-xs tracking-[0.2em] text-[#F0D888] uppercase">
            {BUSINESS.rating} ★ · {BUSINESS.reviews} Reviews · Walajapet
          </span>
          <Star size={12} className="text-[#F0D888] fill-[#F0D888]" />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-cinzel text-5xl sm:text-7xl lg:text-8xl font-black leading-none mb-4"
        >
          <span className="gold-text">HONEY</span>
          <br />
          <span className="text-[#F5F0E8]">GLOW</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="ornament mb-4"
        >
          <span className="font-cormorant text-xl italic text-[#C9A84C]/80 tracking-wider">
            Men's Salon & Tattoo Studio
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="font-josefin text-sm sm:text-base text-[#F5F0E8]/70 tracking-[0.15em] uppercase mb-10"
        >
          Premium Grooming · Artistic Tattoos · Walajapet, Ranipet
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href={`tel:${BUSINESS.phoneRaw}`}
            className="btn-gold px-8 py-4 rounded-sm text-sm flex items-center justify-center gap-2"
          >
            <Phone size={16} />
            Book Appointment
          </a>
          <Link
            to="/services"
            className="btn-outline-gold px-8 py-4 rounded-sm text-sm flex items-center justify-center gap-2"
          >
            Our Services <ChevronRight size={16} />
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="mt-16 flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="font-josefin text-[10px] tracking-[0.3em] text-[#C9A84C]/50 uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-[#C9A84C]/50 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  )
}

// ───────────────────────── ABOUT ─────────────────────────
function About() {
  const [ref, inView] = useInView()

  return (
    <section ref={ref} className="py-24 bg-[#080808] relative overflow-hidden">
      {/* BG accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A84C]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeUp}
            className="relative"
          >
            <div className="relative rounded-sm overflow-hidden">
              <img
                src="/images/my-photo.png"
                alt="Owner of Honey Glow Salon"
                className="w-full aspect-[4/5] object-cover object-top"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-cormorant text-xl italic text-[#F0D888]">"Crafting confidence, one cut at a time"</p>
                <p className="font-josefin text-xs text-[#C9A84C]/70 tracking-wider mt-1">— Founder, Honey Glow</p>
              </div>
            </div>
            {/* Decorative border */}
            <div className="absolute -top-3 -left-3 w-24 h-24 border-t-2 border-l-2 border-[#C9A84C]/40 rounded-tl-sm" />
            <div className="absolute -bottom-3 -right-3 w-24 h-24 border-b-2 border-r-2 border-[#C9A84C]/40 rounded-br-sm" />
          </motion.div>

          {/* Content side */}
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="font-josefin text-xs tracking-[0.3em] text-[#C9A84C] uppercase mb-4">
              About Us
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-cinzel text-4xl sm:text-5xl font-bold text-[#F5F0E8] leading-tight mb-6">
              Walajapet's
              <br />
              <span className="gold-text">Premium Studio</span>
            </motion.h2>
            <motion.div variants={fadeUp} className="section-divider mb-8" />

            <motion.p variants={fadeUp} className="font-cormorant text-xl italic text-[#F5F0E8]/70 leading-relaxed mb-6">
              At Honey Glow, grooming is not just a service — it is an art form. We combine luxury techniques with genuine care to deliver experiences that redefine men's grooming in Ranipet.
            </motion.p>
            <motion.p variants={fadeUp} className="font-josefin text-sm text-[#F5F0E8]/60 leading-relaxed mb-8 tracking-wide">
              From precision haircuts and beard styling to rejuvenating facials and bespoke tattoo artistry, every service is performed with meticulous attention to detail. Our studio is designed to make you feel celebrated — not just groomed.
            </motion.p>

            {/* Stats */}
            <motion.div variants={fadeUp} className="grid grid-cols-3 gap-4 mb-8">
              {[
                { num: BUSINESS.rating + '★', label: 'Rating' },
                { num: BUSINESS.reviews, label: 'Happy Clients' },
                { num: '5+', label: 'Years of Excellence' },
              ].map(({ num, label }) => (
                <div key={label} className="text-center p-4 glass-card rounded-sm border border-[#C9A84C]/15">
                  <p className="font-cinzel text-2xl font-bold gold-text">{num}</p>
                  <p className="font-josefin text-[10px] tracking-wider text-[#F5F0E8]/50 uppercase mt-1">{label}</p>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="flex gap-4">
              <a href={`tel:${BUSINESS.phoneRaw}`} className="btn-gold px-6 py-3 rounded-sm text-xs flex items-center gap-2">
                <Phone size={14} /> Call Now
              </a>
              <Link to="/services" className="btn-outline-gold px-6 py-3 rounded-sm text-xs flex items-center gap-2">
                Explore Services <ChevronRight size={14} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ───────────────────────── SERVICES PREVIEW ─────────────────────────
function ServicesPreview() {
  const [ref, inView] = useInView()

  return (
    <section ref={ref} className="py-24 bg-[#111111] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `repeating-linear-gradient(45deg, #C9A84C 0, #C9A84C 1px, transparent 0, transparent 50%)`,
        backgroundSize: '20px 20px',
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.p variants={fadeUp} className="font-josefin text-xs tracking-[0.3em] text-[#C9A84C] uppercase mb-4">
            Our Expertise
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-cinzel text-4xl sm:text-5xl font-bold gold-text mb-4">
            Signature Services
          </motion.h2>
          <motion.div variants={fadeUp} className="section-divider mb-6" />
          <motion.p variants={fadeUp} className="font-cormorant text-xl italic text-[#F5F0E8]/60 max-w-xl mx-auto">
            Every service is an act of precision, delivered by artisans who understand the language of luxury.
          </motion.p>
        </motion.div>

        {/* Service Categories Grid */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={stagger}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.slice(0, 3).map((cat, i) => (
            <motion.div
              key={cat.category}
              variants={fadeUp}
              custom={i}
              className="glass-card glass-card-hover rounded-sm p-7 group"
            >
              <div className="text-3xl mb-4">{cat.icon}</div>
              <h3 className="font-cinzel text-lg font-bold text-[#F0D888] mb-3 group-hover:gold-text transition-all">
                {cat.category}
              </h3>
              <ul className="space-y-2">
                {cat.items.slice(0, 3).map(item => (
                  <li key={item.name} className="flex items-center justify-between">
                    <span className="font-josefin text-sm text-[#F5F0E8]/70 tracking-wide">{item.name}</span>
                    <span className="font-josefin text-xs text-[#C9A84C]">{item.price}</span>
                  </li>
                ))}
                {cat.items.length > 3 && (
                  <li className="font-josefin text-xs text-[#C9A84C]/60 tracking-wider">
                    +{cat.items.length - 3} more...
                  </li>
                )}
              </ul>
            </motion.div>
          ))}
          {SERVICES.slice(3).map((cat, i) => (
            <motion.div
              key={cat.category}
              variants={fadeUp}
              custom={i + 3}
              className="glass-card glass-card-hover rounded-sm p-7 group"
            >
              <div className="text-3xl mb-4">{cat.icon}</div>
              <h3 className="font-cinzel text-lg font-bold text-[#F0D888] mb-3">
                {cat.category}
              </h3>
              <ul className="space-y-2">
                {cat.items.slice(0, 3).map(item => (
                  <li key={item.name} className="flex items-center justify-between">
                    <span className="font-josefin text-sm text-[#F5F0E8]/70 tracking-wide">{item.name}</span>
                    <span className="font-josefin text-xs text-[#C9A84C]">{item.price}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-12"
        >
          <Link to="/services" className="btn-gold inline-flex items-center gap-2 px-8 py-4 rounded-sm text-sm">
            View All Services <ChevronRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

// ───────────────────────── WHY CHOOSE ─────────────────────────
function WhyChooseUs() {
  const [ref, inView] = useInView()

  return (
    <section ref={ref} className="py-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.p variants={fadeUp} className="font-josefin text-xs tracking-[0.3em] text-[#C9A84C] uppercase mb-4">
            The Honey Glow Difference
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-cinzel text-4xl sm:text-5xl font-bold text-[#F5F0E8] mb-4">
            Why Choose <span className="gold-text">Us</span>
          </motion.h2>
          <motion.div variants={fadeUp} className="section-divider" />
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={stagger}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {WHY_CHOOSE.map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              custom={i}
              className="glass-card glass-card-hover rounded-sm p-7 group text-center"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                {item.icon}
              </div>
              <h3 className="font-cinzel text-base font-bold text-[#F0D888] mb-3 tracking-wide">{item.title}</h3>
              <p className="font-josefin text-sm text-[#F5F0E8]/60 leading-relaxed tracking-wide">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// ───────────────────────── TATTOO FEATURE ─────────────────────────
function TattooStudio() {
  const [ref, inView] = useInView()

  return (
    <section ref={ref} className="py-24 bg-[#111111] relative overflow-hidden">
      {/* Dark atmospheric glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#C9A84C]/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-[#C9A84C]" />
              <span className="font-josefin text-xs tracking-[0.3em] text-[#C9A84C] uppercase">Exclusive</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-cinzel text-4xl sm:text-5xl font-bold leading-tight mb-6">
              <span className="text-[#F5F0E8]">The Tattoo</span>
              <br />
              <span className="gold-text">Studio</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="font-cormorant text-xl italic text-[#F5F0E8]/70 leading-relaxed mb-6">
              Ink is not just a mark on skin — it is a story told in permanence.
            </motion.p>
            <motion.p variants={fadeUp} className="font-josefin text-sm text-[#F5F0E8]/60 leading-relaxed tracking-wide mb-8">
              Our tattoo studio brings together precision craftsmanship and artistic vision. Whether you envision a delicate name script, bold traditional piece, or intricate custom design — our artists will translate your ideas into flawless, lasting art using professional-grade equipment and sterile protocols.
            </motion.p>

            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-3 mb-8">
              {['Custom Tattoo', 'Name Tattoo', 'Symbol Tattoo', 'Traditional', 'Modern Styles', 'Consultations'].map(s => (
                <div key={s} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
                  <span className="font-josefin text-sm text-[#F5F0E8]/70 tracking-wide">{s}</span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="flex gap-4">
              <a
                href={`https://wa.me/${BUSINESS.whatsapp}?text=Hi! I'd like to book a tattoo consultation.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold px-7 py-3.5 rounded-sm text-xs flex items-center gap-2"
              >
                <Sparkles size={14} /> Book Consultation
              </a>
              <Link to="/services" className="btn-outline-gold px-7 py-3.5 rounded-sm text-xs flex items-center gap-2">
                See More <ChevronRight size={14} />
              </Link>
            </motion.div>
          </motion.div>

          {/* Visual Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="grid grid-cols-2 gap-3"
          >
            {['Custom Tattoo', 'Name Art', 'Traditional', 'Modern'].map((label, i) => (
              <div
                key={label}
                className="aspect-square glass-card rounded-sm border border-[#C9A84C]/20 flex flex-col items-center justify-center gap-3 group hover:border-[#C9A84C]/50 transition-all duration-300"
              >
                <span className="text-5xl group-hover:scale-110 transition-transform duration-300">
                  {['🎨', '✍️', '🐉', '⚡'][i]}
                </span>
                <span className="font-cinzel text-xs text-[#C9A84C] tracking-wider">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ───────────────────────── REVIEWS ─────────────────────────
function ReviewsPreview() {
  const [ref, inView] = useInView()

  return (
    <section ref={ref} className="py-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.p variants={fadeUp} className="font-josefin text-xs tracking-[0.3em] text-[#C9A84C] uppercase mb-4">
            Client Testimonials
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-cinzel text-4xl sm:text-5xl font-bold gold-text mb-4">
            What They Say
          </motion.h2>
          <motion.div variants={fadeUp} className="section-divider mb-6" />
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-2">
            {[1,2,3,4,5].map(s => <Star key={s} size={20} className="text-[#F0D888] fill-[#F0D888]" />)}
            <span className="font-cinzel text-2xl font-bold gold-text ml-2">{BUSINESS.rating}</span>
            <span className="font-josefin text-sm text-[#F5F0E8]/50 tracking-wider">({BUSINESS.reviews} reviews)</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={stagger}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {REVIEWS.slice(0, 3).map((review, i) => (
            <motion.div
              key={review.name}
              variants={fadeUp}
              custom={i}
              className="glass-card glass-card-hover rounded-sm p-7"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} size={13} className="text-[#F0D888] fill-[#F0D888]" />
                ))}
              </div>
              <p className="font-cormorant text-base italic text-[#F5F0E8]/75 leading-relaxed mb-5">
                "{review.text}"
              </p>
              <div className="border-t border-[#C9A84C]/15 pt-4 flex items-center justify-between">
                <div>
                  <p className="font-josefin text-sm font-bold text-[#F0D888] tracking-wide">{review.name}</p>
                  <p className="font-josefin text-xs text-[#C9A84C]/60 tracking-wider">{review.service}</p>
                </div>
                <span className="font-josefin text-xs text-[#F5F0E8]/30">{review.date}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-10"
        >
          <Link to="/reviews" className="btn-outline-gold inline-flex items-center gap-2 px-8 py-3.5 rounded-sm text-xs">
            Read All Reviews <ChevronRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

// ───────────────────────── GALLERY PREVIEW ─────────────────────────
function GalleryPreview() {
  const [ref, inView] = useInView()

  const items = [
    { label: 'Hair Transformations', emoji: '💈' },
    { label: 'Beard Artistry', emoji: '🪒' },
    { label: 'Tattoo Work', emoji: '🎨' },
    { label: 'Bridal Groom', emoji: '👑' },
    { label: 'Face Treatments', emoji: '✨' },
    { label: 'Styling Sessions', emoji: '🏆' },
  ]

  return (
    <section ref={ref} className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.p variants={fadeUp} className="font-josefin text-xs tracking-[0.3em] text-[#C9A84C] uppercase mb-4">Portfolio</motion.p>
          <motion.h2 variants={fadeUp} className="font-cinzel text-4xl sm:text-5xl font-bold text-[#F5F0E8] mb-4">
            Our <span className="gold-text">Gallery</span>
          </motion.h2>
          <motion.div variants={fadeUp} className="section-divider" />
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={stagger}
          className="grid grid-cols-2 sm:grid-cols-3 gap-3"
        >
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              variants={fadeUp}
              custom={i}
              whileHover={{ scale: 1.02 }}
              className={`glass-card rounded-sm border border-[#C9A84C]/15 hover:border-[#C9A84C]/40 transition-all duration-300 flex flex-col items-center justify-center cursor-pointer group ${
                i === 0 ? 'col-span-2 row-span-1 py-16' : 'py-12'
              }`}
            >
              <span className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">{item.emoji}</span>
              <span className="font-cinzel text-xs tracking-[0.15em] text-[#C9A84C] uppercase">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-10"
        >
          <Link to="/gallery" className="btn-gold inline-flex items-center gap-2 px-8 py-4 rounded-sm text-sm">
            <Award size={16} /> View Full Gallery
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

// ───────────────────────── MAP + CONTACT CTA ─────────────────────────
function ContactCTA() {
  const [ref, inView] = useInView()

  return (
    <section ref={ref} className="py-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* CTA */}
          <motion.div
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="font-josefin text-xs tracking-[0.3em] text-[#C9A84C] uppercase mb-4">
              Visit Us
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-cinzel text-4xl sm:text-5xl font-bold text-[#F5F0E8] leading-tight mb-6">
              Come Experience
              <br />
              <span className="gold-text">The Difference</span>
            </motion.h2>
            <motion.div variants={fadeUp} className="section-divider mb-8" />

            <motion.div variants={fadeUp} className="space-y-5 mb-10">
              <div className="flex items-start gap-4 p-5 glass-card rounded-sm border border-[#C9A84C]/15">
                <MapPin className="text-[#C9A84C] mt-0.5 shrink-0" size={18} />
                <div>
                  <p className="font-josefin text-xs tracking-[0.15em] text-[#C9A84C] uppercase mb-1">Address</p>
                  <p className="font-josefin text-sm text-[#F5F0E8]/70 leading-relaxed">{BUSINESS.address.full}</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 glass-card rounded-sm border border-[#C9A84C]/15">
                <Phone className="text-[#C9A84C] mt-0.5 shrink-0" size={18} />
                <div>
                  <p className="font-josefin text-xs tracking-[0.15em] text-[#C9A84C] uppercase mb-1">Phone</p>
                  <a href={`tel:${BUSINESS.phoneRaw}`} className="font-josefin text-sm text-[#F5F0E8]/70 hover:text-[#F0D888] transition-colors">
                    {BUSINESS.phone}
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${BUSINESS.phoneRaw}`} className="btn-gold px-7 py-4 rounded-sm text-sm flex items-center justify-center gap-2">
                <Phone size={15} /> Call Now
              </a>
              <a
                href={`https://wa.me/${BUSINESS.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold px-7 py-4 rounded-sm text-sm flex items-center justify-center gap-2"
              >
                WhatsApp Us
              </a>
            </motion.div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative rounded-sm overflow-hidden"
          >
            <div className="absolute inset-0 border border-[#C9A84C]/25 rounded-sm pointer-events-none z-10" />
            <iframe
              src={BUSINESS.mapSrc}
              width="100%"
              height="450"
              style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(90%)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Honey Glow Salon Location"
              className="block"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ───────────────────────── HOME PAGE ─────────────────────────
export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <ServicesPreview />
      <WhyChooseUs />
      <TattooStudio />
      <ReviewsPreview />
      <GalleryPreview />
      <ContactCTA />
    </>
  )
}
