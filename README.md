# Pedro Pla · Product & Growth

Personal landing page for Pedro Pla — Product Manager focused on strategy, execution, and growth. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Dark/Light Mode**: Theme toggle with persistence and system preference detection
- **Bilingual (EN/ES)**: Toggle between English and Spanish
- **Hero Section**: Headline, photo, and CTA buttons
- **Product Cases**: Three case studies (Willow, Luxury Real Estate Marketplace, Trape) with images and expandable modal details
- **Impact Metrics**: Animated counters on scroll
- **Background**: Experience timeline and product philosophy
- **Contact**: Contact section with email modal
- **Responsive**: Mobile-first design
- **Static Export**: Configured for GitHub Pages deployment

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Static export (`output: "export"`) with `basePath: "/landing"`

## Project Structure

```
landing/
├── app/
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Main page composition
│   └── globals.css         # Global styles and animations
├── components/
│   ├── Navbar.tsx          # Sticky navigation with theme/language toggles
│   ├── Hero.tsx            # Hero section with photo and CTAs
│   ├── ProductCases.tsx    # Case studies with images and modal
│   ├── ImpactMetrics.tsx   # Animated counter metrics
│   ├── Background.tsx      # Experience timeline + philosophy
│   ├── Contact.tsx         # Contact section
│   ├── Footer.tsx          # Footer
│   └── ScrollToTop.tsx     # Scroll-to-top button
├── contexts/
│   ├── ThemeContext.tsx    # Dark/light mode
│   ├── LanguageContext.tsx # EN/ES language
│   └── EmailModalContext.tsx # Contact modal state
├── content.ts              # All site content (EN + ES)
├── public/                 # Static assets
│   ├── willow.png          # Willow case study image
│   ├── yo-formal copy.jpeg # Hero photo
│   ├── marketplace.jpg     # Real estate case image
│   └── nft.jpg             # Trape case image
├── next.config.mjs         # basePath for GitHub Pages
└── package.json
```

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000/landing](http://localhost:3000/landing) in your browser.

### Build for Production

```bash
npm run build
```

Output is written to the `out/` folder (static HTML, CSS, JS).

## Deployment (GitHub Pages)

The project uses `basePath: "/landing"` and `assetPrefix: "/landing/"` for GitHub Pages. Deploy the contents of the `out` folder to your repository. The site will be available at `https://<username>.github.io/<repo-name>/landing/`.

## Customizing Content

All content lives in `content.ts` with separate `en` and `es` sections. Edit the relevant keys to update copy, images (paths under `public/`), or structure.

## Images

Place images in the `public/` folder and reference them with paths like `/filename.jpg` in `content.ts`. With `basePath`, they are served at `/landing/filename.jpg`. Avoid including `public` in the path.
