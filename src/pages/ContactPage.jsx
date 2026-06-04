import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, MapPin, Clock, Instagram, Facebook, MessageCircle, CheckCircle } from 'lucide-react'
import { BUSINESS } from '../data/business'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay: i * 0.1 }
  })
}

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    const msg = `Hello! I'd like to book an appointment at Honey Glow.%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AService: ${form.service}%0AMessage: ${form.message}`
    window.open(`https://wa.me/${BUSINESS.whatsapp}?text=${msg}`, '_blank')
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-[#080808]">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#111111] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle, #C9A84C 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }} />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10"
        >
          <p className="font-josefin text-xs tracking-[0.3em] text-[#C9A84C] uppercase mb-4">Get In Touch</p>
          <h1 className="font-cinzel text-5xl sm:text-6xl font-black gold-text mb-4">Contact Us</h1>
          <div className="w-16 h-px bg-[#C9A84C] mx-auto mb-6" />
          <p className="font-cormorant text-xl italic text-[#F5F0E8]/60 max-w-xl mx-auto">
            Book your appointment, ask a question, or simply say hello. We are always happy to hear from you.
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeUp} className="font-cinzel text-2xl font-bold text-[#F5F0E8] mb-8">
              Reach <span className="gold-text">Us</span>
            </motion.h2>

            <div className="space-y-4 mb-10">
              {[
                {
                  icon: <MapPin size={18} />,
                  title: 'Visit Us',
                  content: BUSINESS.address.full,
                  link: `https://maps.google.com/?q=${encodeURIComponent(BUSINESS.address.full)}`,
                  linkLabel: 'Get Directions →',
                },
                {
                  icon: <Phone size={18} />,
                  title: 'Call Us',
                  content: BUSINESS.phone,
                  link: `tel:${BUSINESS.phoneRaw}`,
                  linkLabel: 'Tap to Call →',
                },
                {
                  icon: <MessageCircle size={18} />,
                  title: 'WhatsApp',
                  content: 'Chat with us anytime for quick bookings',
                  link: `https://wa.me/${BUSINESS.whatsapp}`,
                  linkLabel: 'Open WhatsApp →',
                },
                {
                  icon: <Clock size={18} />,
                  title: 'Hours',
                  content: BUSINESS.hours,
                  link: null,
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  custom={i}
                  className="flex items-start gap-5 p-5 glass-card rounded-sm border border-[#C9A84C]/15 hover:border-[#C9A84C]/35 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/20 flex items-center justify-center text-[#C9A84C] shrink-0 group-hover:bg-[#C9A84C]/20 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-josefin text-xs tracking-[0.15em] text-[#C9A84C] uppercase mb-1">{item.title}</p>
                    <p className="font-josefin text-sm text-[#F5F0E8]/70 leading-relaxed mb-1">{item.content}</p>
                    {item.link && (
                      <a
                        href={item.link}
                        target={item.link.startsWith('http') ? '_blank' : undefined}
                        rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="font-josefin text-xs text-[#C9A84C] hover:text-[#F0D888] transition-colors"
                      >
                        {item.linkLabel}
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social */}
            <motion.div variants={fadeUp}>
              <p className="font-josefin text-xs tracking-[0.2em] text-[#C9A84C]/60 uppercase mb-4">Follow Us</p>
              <div className="flex gap-3">
                {[
                  { icon: <Instagram size={16} />, label: 'Instagram' },
                  { icon: <Facebook size={16} />, label: 'Facebook' },
                  {
                    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>,
                    label: 'WhatsApp',
                  },
                ].map(({ icon, label }) => (
                  <a
                    key={label}
                    href={label === 'WhatsApp' ? `https://wa.me/${BUSINESS.whatsapp}` : '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-11 h-11 rounded-full border border-[#C9A84C]/25 flex items-center justify-center text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#080808] transition-all duration-300 hover:border-[#C9A84C]"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Booking Form → WhatsApp */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card rounded-sm border border-[#C9A84C]/20 p-8"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full gap-5 py-10 text-center">
                <CheckCircle size={56} className="text-[#C9A84C]" />
                <h3 className="font-cinzel text-2xl font-bold text-[#F0D888]">Opening WhatsApp!</h3>
                <p className="font-josefin text-sm text-[#F5F0E8]/60 tracking-wide">
                  We've prepared your message. Please send it to complete your booking.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-outline-gold px-6 py-3 rounded-sm text-xs mt-2"
                >
                  Book Another
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-cinzel text-xl font-bold text-[#F5F0E8] mb-2">Book Appointment</h3>
                <p className="font-josefin text-xs text-[#F5F0E8]/40 tracking-wider mb-7">
                  Fill out the form and we'll connect via WhatsApp instantly.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {[
                    { name: 'name', label: 'Your Name', type: 'text', placeholder: 'Enter your name' },
                    { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+91 XXXXX XXXXX' },
                  ].map(field => (
                    <div key={field.name}>
                      <label className="font-josefin text-[10px] tracking-[0.2em] text-[#C9A84C] uppercase block mb-2">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        name={field.name}
                        value={form[field.name]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        required
                        className="w-full bg-[#080808] border border-[#C9A84C]/20 focus:border-[#C9A84C]/60 rounded-sm px-4 py-3 font-josefin text-sm text-[#F5F0E8] placeholder-[#F5F0E8]/25 outline-none transition-colors"
                      />
                    </div>
                  ))}

                  <div>
                    <label className="font-josefin text-[10px] tracking-[0.2em] text-[#C9A84C] uppercase block mb-2">
                      Service Required
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#080808] border border-[#C9A84C]/20 focus:border-[#C9A84C]/60 rounded-sm px-4 py-3 font-josefin text-sm text-[#F5F0E8] outline-none transition-colors"
                    >
                      <option value="">Select a service</option>
                      <optgroup label="Hair Services">
                        {['Haircut', 'Hair Spa', 'Hair Color', 'Hair Wash', 'Hairstyling'].map(s => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </optgroup>
                      <optgroup label="Beard Grooming">
                        {['Beard Trim', 'Beard Styling', 'Clean Shave'].map(s => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </optgroup>
                      <optgroup label="Face Care">
                        {['Facial', 'D-Tan', 'Cleanup', 'Face Bleach'].map(s => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </optgroup>
                      <optgroup label="Bridal Grooming">
                        {['Groom Makeover', 'Wedding Styling'].map(s => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </optgroup>
                      <optgroup label="Tattoo Studio">
                        {['Custom Tattoo', 'Name Tattoo', 'Symbol Tattoo', 'Traditional Tattoo', 'Modern Tattoo'].map(s => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </optgroup>
                    </select>
                  </div>

                  <div>
                    <label className="font-josefin text-[10px] tracking-[0.2em] text-[#C9A84C] uppercase block mb-2">
                      Additional Message (Optional)
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Any specific requests or preferred timing..."
                      rows={3}
                      className="w-full bg-[#080808] border border-[#C9A84C]/20 focus:border-[#C9A84C]/60 rounded-sm px-4 py-3 font-josefin text-sm text-[#F5F0E8] placeholder-[#F5F0E8]/25 outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-gold w-full py-4 rounded-sm text-sm flex items-center justify-center gap-2 mt-2"
                  >
                    <MessageCircle size={15} />
                    Book via WhatsApp
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </section>

      {/* Google Map */}
      <section className="pb-16 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative rounded-sm overflow-hidden"
        >
          <div className="absolute inset-0 border border-[#C9A84C]/20 rounded-sm pointer-events-none z-10" />
          <iframe
            src={BUSINESS.mapSrc}
            width="100%"
            height="420"
            style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(90%)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Honey Glow Location Map"
            className="block"
          />
        </motion.div>
      </section>
    </div>
  )
}
