# LT's Mobile Mechanics

Marketing website for **LT's Mobile Mechanics** — a 24/7 mobile auto repair service based in Beaverton, Oregon, serving the greater Portland metro area.

Built with [Astro](https://astro.build), deployed as a static site.

## Site Map

- **Homepage** — services, why-us, reviews, contact form
- **Service pages** — oil change, brake repair, diagnostics, spark plugs & ignition, battery & alternator, suspension & steering, pre-purchase inspection, emergency roadside
- **Area pages** — Beaverton, Portland, Hillsboro, Tigard, Lake Oswego, Tualatin, Aloha, Gresham, Milwaukie, West Linn, Oregon City, Clackamas, Sherwood, Wilsonville

## Features

- Fully static, fast-loading pages
- Responsive design (mobile-first)
- Dark theme with gold accent brand color
- Consistent design system across all pages (shared components + global CSS)
- SEO optimized:
  - Per-page `<title>`, `<meta description>`, keywords, canonical URL
  - Open Graph and Twitter Card meta tags
  - Structured data (`LocalBusiness`, `AutoRepair`, `Service` JSON-LD)
  - Automatic sitemap generation (`/sitemap-index.xml`)
  - `robots.txt` pointing to sitemap
  - Geo meta tags for local search
  - Accessible markup (ARIA, semantic HTML, `prefers-reduced-motion`)

## Project Structure

```
/
├── public/
│   ├── favicon.svg
│   ├── favicon.ico
│   ├── og-image.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── ArticleCTA.astro
│   │   ├── RelatedServices.astro
│   │   └── RelatedAreas.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── 404.astro
│   │   ├── services/
│   │   └── areas/
│   └── styles/
│       └── global.css
├── astro.config.mjs
└── package.json
```

## Development

```bash
npm install       # install dependencies
npm run dev       # start dev server on http://localhost:4321
npm run build     # build static site to ./dist/
npm run preview   # preview the built site locally
```

## Deployment

The built output in `./dist/` is a fully static site and can be deployed to any static host — Netlify, Vercel, Cloudflare Pages, GitHub Pages, S3, or similar.

## Contact

- Phone: [(971) 534-0360](tel:+19715340360)
- Email: ltsmobilepdx@gmail.com
- Based in Beaverton, OR
- Open 24/7

---

&copy; LT's Mobile Mechanics. All rights reserved.
