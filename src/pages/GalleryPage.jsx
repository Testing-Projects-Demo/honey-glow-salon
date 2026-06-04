import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

const CATEGORIES = ['All', 'Haircut', 'Beard', 'Facial', 'Tattoo', 'Bridal', 'Styling']

const GALLERY_ITEMS = [
  { id: 1, cat: 'Haircut', title: 'Classic Fade Cut', emoji: '💈', desc: 'Clean mid-skin fade with texture on top' },
  { id: 2, cat: 'Tattoo', title: 'Custom Sleeve Tattoo', emoji: '🎨', desc: 'Intricate custom blackwork sleeve design' },
  { id: 3, cat: 'Beard', title: 'Designer Beard Shape', emoji: '🪒', desc: 'Precision beard sculpting with hot towel' },
  { id: 4, cat: 'Bridal', title: 'Groom Makeover', emoji: '👑', desc: 'Complete wedding-day transformation' },
  { id: 5, cat: 'Facial', title: 'Gold Facial Glow', emoji: '✨', desc: 'Luxury gold leaf facial treatment' },
  { id: 6, cat: 'Tattoo', title: 'Traditional Dragon', emoji: '🐉', desc: 'Bold traditional dragon back piece' },
  { id: 7, cat: 'Haircut', title: 'Modern Undercut', emoji: '⚡', desc: 'Textured undercut with side swept top' },
  { id: 8, cat: 'Styling', title: 'Event Hairstyle', emoji: '🏆', desc: 'Formal event styling for corporate function' },
  { id: 9, cat: 'Tattoo', title: 'Name Script Art', emoji: '✍️', desc: 'Elegant calligraphy name tattoo' },
  { id: 10, cat: 'Beard', title: 'Royal Beard Style', emoji: '👨', desc: 'Bold royal beard with defined lines' },
  { id: 11, cat: 'Facial', title: 'D-Tan Treatment', emoji: '🌟', desc: 'Visible de-tanning after 1 session' },
  { id: 12, cat: 'Haircut', title: 'Textured Crop', emoji: '✂️', desc: 'French crop with textured top' },
  { id: 13, cat: 'Tattoo', title: 'Geometric Mandala', emoji: '🔮', desc: 'Precise geometric mandala dotwork' },
  { id: 14, cat: 'Bridal', title: 'Wedding Function', emoji: '💍', desc: 'Complete grooming for reception night' },
  { id: 15, cat: 'Styling', title: 'Hair Spa Result', emoji: '💧', desc: 'Silky smooth finish after hair spa' },
]

const COLORS = [
  'from-[#C9A84C]/20 to-[#B48C3C]/10',
  'from-[#F0D888]/15 to-[#C9A84C]/10',
  'from-[#B48C3C]/20 to-[#080808]',
  'from-[#C9A84C]/10 to-[#F0D888]/15',
  'from-[#080808] to-[#C9A84C]/20',
]

export default function GalleryPage() {
  const [active, setActive] = useState('All')
  const [selected, setSelected] = useState(null)

  const filtered = active === 'All' ? GALLERY_ITEMS : GALLERY_ITEMS.filter(i => i.cat === active)

  return (
    <div className="min-h-screen bg-[#080808]">
      {/* Page Hero */}
      <section className="pt-32 pb-16 bg-[#111111] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle, #C9A84C 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }} />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 text-center"
        >
          <p className="font-josefin text-xs tracking-[0.3em] text-[#C9A84C] uppercase mb-4">Our Work</p>
          <h1 className="font-cinzel text-5xl sm:text-6xl font-black gold-text mb-4">Gallery</h1>
          <div className="w-16 h-px bg-[#C9A84C] mx-auto mb-6" />
          <p className="font-cormorant text-xl italic text-[#F5F0E8]/60 max-w-xl mx-auto">
            A curated showcase of transformations, artistry and craftsmanship — our work speaks for itself.
          </p>
        </motion.div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-[#C9A84C]/15 sticky top-16 z-30 bg-[#080808]/95 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`font-josefin text-xs px-5 py-2 rounded-sm tracking-[0.15em] uppercase transition-all duration-300 ${
                  active === cat
                    ? 'btn-gold'
                    : 'border border-[#C9A84C]/30 text-[#C9A84C]/70 hover:border-[#C9A84C] hover:text-[#C9A84C]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
          <AnimatePresence>
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                onClick={() => setSelected(item)}
                className={`aspect-square glass-card rounded-sm border border-[#C9A84C]/15 hover:border-[#C9A84C]/50 cursor-pointer group overflow-hidden relative bg-gradient-to-br ${COLORS[i % COLORS.length]} transition-all duration-300`}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center p-3">
                  <span className="text-4xl mb-2 group-hover:scale-125 transition-transform duration-300">
                    {item.emoji}
                  </span>
                  <p className="font-cinzel text-[10px] text-[#C9A84C] tracking-wider text-center leading-tight">
                    {item.title}
                  </p>
                </div>
                <div className="absolute inset-0 bg-[#080808]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center px-3">
                    <p className="font-cinzel text-xs font-bold text-[#F0D888] mb-1">{item.title}</p>
                    <p className="font-josefin text-[10px] text-[#F5F0E8]/70 tracking-wide">{item.desc}</p>
                    <span className="inline-block mt-2 font-josefin text-[10px] tracking-[0.2em] text-[#C9A84C] uppercase border border-[#C9A84C]/40 px-3 py-1">View</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#080808]/95 backdrop-blur-xl"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              onClick={e => e.stopPropagation()}
              className="glass-card rounded-sm border border-[#C9A84C]/30 p-10 max-w-md w-full text-center relative"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-[#F5F0E8]/40 hover:text-[#F0D888] transition-colors"
              >
                <X size={20} />
              </button>
              <span className="text-7xl block mb-5">{selected.emoji}</span>
              <h3 className="font-cinzel text-xl font-bold gold-text mb-2">{selected.title}</h3>
              <p className="font-josefin text-xs tracking-[0.2em] text-[#C9A84C]/60 uppercase mb-4">{selected.cat}</p>
              <p className="font-cormorant text-base italic text-[#F5F0E8]/60">{selected.desc}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
