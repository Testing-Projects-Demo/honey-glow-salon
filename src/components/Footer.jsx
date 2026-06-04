import { Link } from 'react-router-dom'
import { Phone, MapPin, Clock, Instagram, Facebook } from 'lucide-react'
import { BUSINESS } from '../data/business'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#080808] border-t border-[#C9A84C]/20 pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/images/honey-glow-mens-salon-and-tattoo.png"
                alt="Honey Glow"
                className="w-12 h-12 rounded-full object-cover border border-[#C9A84C]/40"
                loading="lazy"
              />
              <div>
                <p className="font-cinzel text-base font-bold gold-text">HONEY GLOW</p>
                <p className="font-josefin text-[10px] tracking-[0.2em] text-[#C9A84C]/60 uppercase">Men's Salon & Tattoo</p>
              </div>
            </div>
            <p className="font-cormorant text-[#F5F0E8]/60 text-base italic leading-relaxed mb-5">
              "Where every visit is a luxury experience crafted just for you."
            </p>
            <div className="flex items-center gap-3">
              <span className="font-cinzel text-2xl gold-text font-bold">{BUSINESS.rating}★</span>
              <div>
                <p className="font-josefin text-xs text-[#F5F0E8]/80">{BUSINESS.reviews} Reviews</p>
                <p className="font-josefin text-[10px] text-[#C9A84C]/60 uppercase tracking-wider">Google Rating</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-cinzel text-sm tracking-[0.15em] gold-text uppercase mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/services', label: 'Services' },
                { to: '/gallery', label: 'Gallery' },
                { to: '/reviews', label: 'Reviews' },
                { to: '/contact', label: 'Contact' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="font-josefin text-sm text-[#F5F0E8]/60 hover:text-[#F0D888] transition-colors tracking-wider"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-cinzel text-sm tracking-[0.15em] gold-text uppercase mb-5">Services</h4>
            <ul className="space-y-2">
              {['Haircut & Styling', 'Beard Grooming', 'Hair Spa', 'Facial & D-Tan', 'Bridal Grooming', 'Tattoo Studio'].map(s => (
                <li key={s} className="font-josefin text-sm text-[#F5F0E8]/60 tracking-wider">{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-cinzel text-sm tracking-[0.15em] gold-text uppercase mb-5">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-[#C9A84C] mt-0.5 shrink-0" />
                <span className="font-josefin text-sm text-[#F5F0E8]/60 leading-relaxed">{BUSINESS.address.full}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-[#C9A84C] shrink-0" />
                <a href={`tel:${BUSINESS.phoneRaw}`} className="font-josefin text-sm text-[#F5F0E8]/60 hover:text-[#F0D888] transition-colors">
                  {BUSINESS.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={14} className="text-[#C9A84C] shrink-0" />
                <span className="font-josefin text-sm text-[#F5F0E8]/60">{BUSINESS.hours}</span>
              </li>
            </ul>
            <div className="flex gap-3 mt-6">
              <a
                href="https://wa.me/917449223356"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[#C9A84C]/30 flex items-center justify-center text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#080808] transition-all text-sm"
                aria-label="WhatsApp"
              >W</a>
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-[#C9A84C]/30 flex items-center justify-center text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#080808] transition-all"
                aria-label="Instagram"
              ><Instagram size={14} /></a>
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-[#C9A84C]/30 flex items-center justify-center text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#080808] transition-all"
                aria-label="Facebook"
              ><Facebook size={14} /></a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#C9A84C]/15 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-josefin text-xs text-[#F5F0E8]/40 tracking-wider">
            © {year} Honey Glow Men's Salon & Tattoo. All rights reserved.
          </p>
          <p className="font-josefin text-xs text-[#F5F0E8]/30 tracking-wider">
            Walajapet, Ranipet, Tamil Nadu
          </p>
        </div>
      </div>
    </footer>
  )
}
