import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import { BUSINESS } from '../data/business'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/reviews', label: 'Reviews' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [location])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#080808]/95 backdrop-blur-xl border-b border-[#C9A84C]/20 py-3'
          : 'bg-gradient-to-b from-[#080808]/80 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/images/honey-glow-mens-salon-and-tattoo.png"
            alt="Honey Glow Logo"
            className="w-10 h-10 rounded-full object-cover border border-[#C9A84C]/40"
            loading="lazy"
          />
          <div>
            <p className="font-cinzel text-sm font-bold gold-text leading-none">HONEY GLOW</p>
            <p className="font-josefin text-[10px] tracking-[0.2em] text-[#C9A84C]/70 uppercase leading-none mt-0.5">
              Men's Salon & Tattoo
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`font-josefin text-xs tracking-[0.15em] uppercase transition-all duration-300 relative group ${
                location.pathname === to ? 'text-[#F0D888]' : 'text-[#F5F0E8]/70 hover:text-[#F0D888]'
              }`}
            >
              {label}
              <span className={`absolute -bottom-1 left-0 h-px bg-[#C9A84C] transition-all duration-300 ${
                location.pathname === to ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={`tel:${BUSINESS.phoneRaw}`}
            className="btn-gold flex items-center gap-2 px-5 py-2.5 rounded-sm text-xs font-josefin"
          >
            <Phone size={14} />
            Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#F5F0E8] p-2"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#080808]/98 backdrop-blur-xl border-t border-[#C9A84C]/20 overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-6 gap-5">
              {NAV_LINKS.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={`font-josefin text-sm tracking-[0.15em] uppercase transition-colors ${
                    location.pathname === to ? 'text-[#F0D888]' : 'text-[#F5F0E8]/70'
                  }`}
                >
                  {label}
                </Link>
              ))}
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="btn-gold flex items-center justify-center gap-2 px-6 py-3 rounded-sm text-xs mt-2"
              >
                <Phone size={14} />
                {BUSINESS.phone}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
