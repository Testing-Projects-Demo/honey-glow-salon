import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { REVIEWS, BUSINESS } from '../data/business'
import { useInView } from '../hooks/useInView'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay: i * 0.1 }
  })
}

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }

function ReviewCard({ review, i }) {
  return (
    <motion.div
      variants={fadeUp}
      custom={i}
      className="glass-card glass-card-hover rounded-sm p-7 relative group"
    >
      <Quote size={28} className="text-[#C9A84C]/20 absolute top-6 right-6 group-hover:text-[#C9A84C]/40 transition-colors" />
      <div className="flex items-center gap-1 mb-4">
        {[...Array(review.rating)].map((_, j) => (
          <Star key={j} size={14} className="text-[#F0D888] fill-[#F0D888]" />
        ))}
        {[...Array(5 - review.rating)].map((_, j) => (
          <Star key={j} size={14} className="text-[#F5F0E8]/20" />
        ))}
      </div>
      <p className="font-cormorant text-lg italic text-[#F5F0E8]/75 leading-relaxed mb-6 pr-6">
        "{review.text}"
      </p>
      <div className="flex items-center justify-between border-t border-[#C9A84C]/15 pt-5">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#C9A84C]/20 flex items-center justify-center">
            <span className="font-cinzel text-sm font-bold text-[#C9A84C]">
              {review.name.charAt(0)}
            </span>
          </div>
          <div>
            <p className="font-josefin text-sm font-bold text-[#F0D888] tracking-wide">{review.name}</p>
            <p className="font-josefin text-xs text-[#C9A84C]/60 tracking-wider">{review.service}</p>
          </div>
        </div>
        <span className="font-josefin text-xs text-[#F5F0E8]/30">{review.date}</span>
      </div>
    </motion.div>
  )
}

export default function ReviewsPage() {
  const [ref, inView] = useInView()
  const [statsRef, statsInView] = useInView()

  return (
    <div className="min-h-screen bg-[#080808]">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#111111] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#C9A84C]/5 blur-3xl pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10"
        >
          <p className="font-josefin text-xs tracking-[0.3em] text-[#C9A84C] uppercase mb-4">Client Love</p>
          <h1 className="font-cinzel text-5xl sm:text-6xl font-black gold-text mb-4">Reviews</h1>
          <div className="w-16 h-px bg-[#C9A84C] mx-auto mb-6" />
          <div className="flex items-center justify-center gap-3 mb-4">
            {[1,2,3,4,5].map(s => (
              <Star key={s} size={24} className="text-[#F0D888] fill-[#F0D888]" />
            ))}
          </div>
          <p className="font-cinzel text-5xl font-black gold-text mb-2">{BUSINESS.rating}</p>
          <p className="font-josefin text-sm text-[#F5F0E8]/50 tracking-[0.2em] uppercase">
            Based on {BUSINESS.reviews} verified reviews
          </p>
        </motion.div>
      </section>

      {/* Stats Row */}
      <section ref={statsRef} className="py-12 border-b border-[#C9A84C]/10 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            animate={statsInView ? 'visible' : 'hidden'}
            variants={stagger}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6"
          >
            {[
              { num: BUSINESS.rating + '★', label: 'Google Rating' },
              { num: BUSINESS.reviews, label: 'Happy Clients' },
              { num: '5+', label: 'Years Active' },
              { num: '100%', label: 'Satisfaction' },
            ].map(({ num, label }, i) => (
              <motion.div
                key={label}
                variants={fadeUp}
                custom={i}
                className="text-center p-6 glass-card rounded-sm border border-[#C9A84C]/15"
              >
                <p className="font-cinzel text-3xl font-black gold-text mb-1">{num}</p>
                <p className="font-josefin text-xs tracking-[0.15em] text-[#F5F0E8]/50 uppercase">{label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section ref={ref} className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={stagger}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {REVIEWS.map((review, i) => (
            <ReviewCard key={review.name} review={review} i={i} />
          ))}
        </motion.div>
      </section>

      {/* CTA - Leave a Review */}
      <section className="py-16 bg-[#111111]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="font-cinzel text-3xl font-bold text-[#F5F0E8] mb-4">
              Share Your <span className="gold-text">Experience</span>
            </h2>
            <p className="font-josefin text-sm text-[#F5F0E8]/60 tracking-wider mb-8">
              Had a great experience at Honey Glow? We'd love to hear from you. Your feedback helps us serve you better.
            </p>
            <a
              href="https://g.page/r/honey-glow-salon/review"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-2 px-8 py-4 rounded-sm text-sm"
            >
              <Star size={15} /> Write a Google Review
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
