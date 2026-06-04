# 🍯 Honey Glow Men's Salon & Tattoo — Website

Premium luxury website for Honey Glow Men's Salon & Tattoo, Walajapet, Ranipet, Tamil Nadu.

## Tech Stack
- **React 18** + **Vite 5**
- **Tailwind CSS 3**
- **Framer Motion 11**
- **Lucide React**
- **React Router 6**

## Setup & Development

```bash
# 1. Install dependencies
npm install

# 2. Add your images
# Copy images to: public/images/
#   - honey-glow-mens-salon-and-tattoo.png  (banner/logo)
#   - my-photo.png                          (owner photo)

# 3. Start dev server
npm run dev

# 4. Build for production
npm run build

# 5. Preview production build
npm run preview
```

## Folder Structure

```
honey-glow/
├── public/
│   └── images/
│       ├── honey-glow-mens-salon-and-tattoo.png
│       └── my-photo.png
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── WhatsAppButton.jsx
│   │   └── ScrollToTop.jsx
│   ├── data/
│   │   └── business.js
│   ├── hooks/
│   │   └── useInView.js
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── ServicesPage.jsx
│   │   ├── GalleryPage.jsx
│   │   ├── ReviewsPage.jsx
│   │   └── ContactPage.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── netlify.toml
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## Netlify Deployment

### Method 1: Netlify CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
npm run build
netlify deploy --prod --dir=dist
```

### Method 2: Netlify Dashboard (Drag & Drop)
1. Run `npm run build`
2. Go to [netlify.com](https://netlify.com) → "Add new site"
3. Drag the `dist/` folder to the deploy zone
4. Done! Your site is live.

### Method 3: GitHub Integration (Recommended)
1. Push code to GitHub
2. Go to Netlify → "Import from Git"
3. Connect your GitHub repo
4. Set:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click Deploy

## Customization

### Update Business Info
Edit `src/data/business.js` to update:
- Phone number
- Address
- Rating & reviews count
- Opening hours
- Google Maps embed URL

### Update Colors
Edit `tailwind.config.js` — all brand colors are defined there.

### Add Real Gallery Photos
Replace emoji placeholders in `src/pages/GalleryPage.jsx` with real `<img>` tags pointing to photos in `public/images/gallery/`.

### Update Google Maps
Replace the `mapSrc` value in `src/data/business.js` with your actual Google Maps embed URL:
1. Go to Google Maps
2. Search for your business
3. Click Share → Embed a map → Copy HTML
4. Extract the `src="..."` URL

## SEO
- Meta tags: `index.html`
- Schema.org markup: `index.html` (LocalBusiness/HairSalon)
- Open Graph: `index.html`
- Sitemap: Generate at [xml-sitemaps.com](https://xml-sitemaps.com) post-deploy

## Performance
- Lazy loading on all images
- Code splitting via Vite
- Static assets cached for 1 year (via netlify.toml)
- Fonts preloaded from Google Fonts

## Support
Phone: +91 74492 23356  
Address: Thoppaichetty Street, Walajapet, Ranipet, Tamil Nadu 632513
