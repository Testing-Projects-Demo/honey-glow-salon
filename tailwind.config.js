/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        black: '#080808',
        'black-2': '#111111',
        gold: '#C9A84C',
        'gold-light': '#F0D888',
        'gold-dark': '#B48C3C',
        cream: '#F5F0E8',
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        josefin: ['Josefin Sans', 'sans-serif'],
        cormorant: ['Cormorant Garamond', 'serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C9A84C 0%, #F0D888 50%, #B48C3C 100%)',
        'gold-gradient-h': 'linear-gradient(90deg, #B48C3C 0%, #F0D888 50%, #C9A84C 100%)',
      },
      animation: {
        'shimmer': 'shimmer 2.5s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-gold': 'pulse-gold 2s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-gold': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(201,168,76,0.4)' },
          '50%': { boxShadow: '0 0 0 12px rgba(201,168,76,0)' },
        }
      }
    },
  },
  plugins: [],
}
