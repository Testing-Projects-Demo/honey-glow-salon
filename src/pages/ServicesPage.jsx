import { motion } from 'framer-motion'
import { Phone, MessageCircle } from 'lucide-react'
import { SERVICES, BUSINESS } from '../data/business'
import { useInView } from '../hooks/useInView'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay: i * 0.08 }
  })
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } }
}

function ServiceCategory({ cat, index }) {
  const [ref, inView] = useInView()

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={stagger}
      className="mb-16"
    >
      <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
        <span className="text-4xl">{cat.icon}</span>
        <div>
          <h2 className="font-cinzel text-2xl sm:text-3xl font-bold gold-text">{cat.category}</h2>
          <div className="w-12 h-px bg-[#C9A84C] mt-2" />
        </div>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {cat.items.map((item, i) => (
          <motion.div
            key={item.name}
            variants={fadeUp}
            custom={i}
            className="glass-card glass-card-hover rounded-sm p-6 group"
          >
            <h3 className="font-cinzel text-sm font-bold text-[#F0D888] mb-2 tracking-wide group-hover:gold-text transition-all">
              {item.name}
            </h3>
            <p className="font-josefin text-xs text-[#F5F0E8]/55 leading-relaxed tracking-wide mb-4">
              {item.desc}
            </p>
            <div className="flex items-center justify-between border-t border-[#C9A84C]/10 pt-3">
              <span className="font-cinzel text-sm font-bold text-[#C9A84C]">{item.price}</span>
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="font-josefin text-[10px] tracking-[0.15em] text-[#C9A84C]/60 hover:text-[#F0D888] uppercase transition-colors"
              >
                Book →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default function ServicesPage() {
  const [heroRef, heroInView] = useInView()

  return (
    <div className="min-h-screen bg-[#080808]">
      {/* Page Hero */}
      <section className="pt-32 pb-20 bg-[#111111] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `repeating-linear-gradient(45deg, #C9A84C 0, #C9A84C 1px, transparent 0, transparent 40%)`,
          backgroundSize: '24px 24px',
        }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-[#C9A84C]/50 to-transparent" />

        <motion.div
          ref={heroRef}
          initial="hidden"
          animate={heroInView ? 'visible' : 'hidden'}
          variants={stagger}
          className="max-w-7xl mx-auto px-4 sm:px-6 text-center"
        >
          <motion.p variants={fadeUp} className="font-josefin text-xs tracking-[0.3em] text-[#C9A84C] uppercase mb-4">
            What We Offer
          </motion.p>
          <motion.h1 variants={fadeUp} className="font-cinzel text-5xl sm:text-6xl font-black gold-text mb-4">
            Our Services
          </motion.h1>
          <motion.div variants={fadeUp} className="w-16 h-px bg-[#C9A84C] mx-auto mb-6" />
          <motion.p variants={fadeUp} className="font-cormorant text-xl italic text-[#F5F0E8]/60 max-w-2xl mx-auto">
            Every service at Honey Glow is a carefully crafted ritual — built on premium technique, quality products, and genuine care.
          </motion.p>
        </motion.div>
      </section>

      {/* Services List */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        {SERVICES.map((cat, i) => (
          <ServiceCategory key={cat.category} cat={cat} index={i} />
        ))}
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-[#111111] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#C9A84C]/5 via-[#C9A84C]/10 to-[#C9A84C]/5 pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-[#F5F0E8] mb-4">
              Ready to <span className="gold-text">Transform?</span>
            </h2>
            <p className="font-josefin text-sm text-[#F5F0E8]/60 tracking-wider mb-8">
              Book your appointment today and experience premium grooming at its finest.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="btn-gold px-8 py-4 rounded-sm text-sm flex items-center justify-center gap-2"
              >
                <Phone size={15} /> Call {BUSINESS.phone}
              </a>
              <a
                href={`https://wa.me/${BUSINESS.whatsapp}?text=Hi! I'd like to book an appointment.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold px-8 py-4 rounded-sm text-sm flex items-center justify-center gap-2"
              >
                <MessageCircle size={15} /> WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
