# Product Manager Landing Page

A modern, minimal personal landing page for Product Manager job search, built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Dark/Light Mode Toggle**: Smooth theme transitions with persistence and system preference detection
- **Bilingual Support**: Toggle between English and Spanish (EN/ES)
- **Smooth Animations**: Subtle scroll and hover animations throughout
- **Sticky Navbar**: Transitions from transparent to solid on scroll
- **Product Cases**: Expandable case study cards with modal details
- **Animated Metrics**: Numbers that count up on scroll
- **Responsive Design**: Mobile-first, works beautifully on all devices
- **Premium Aesthetic**: Clean, editorial design inspired by Linear, Notion, and Stripe

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Main page composition
│   └── globals.css         # Global styles and animations
├── components/
│   ├── Navbar.tsx          # Sticky navigation with toggles
│   ├── Hero.tsx            # Hero section with CTA buttons
│   ├── ProductCases.tsx    # Case studies with modal
│   ├── ImpactMetrics.tsx   # Animated counter metrics
│   ├── Background.tsx      # Experience timeline + philosophy
│   ├── Contact.tsx         # Contact section
│   └── Footer.tsx          # Minimal footer
├── contexts/
│   ├── ThemeContext.tsx    # Dark/light mode management
│   └── LanguageContext.tsx # EN/ES language management
├── content.ts              # All content with placeholders
├── tailwind.config.ts      # Tailwind configuration
└── package.json            # Dependencies
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

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Customizing Content

All content is centralized in `content.ts` with clear placeholders. Search for `[PLACEHOLDER_NAME]` to find and replace with your actual content:

### Key Placeholders to Replace

**Personal Info:**
- `[YOUR_NAME]`, `[YOUR_FULL_NAME]`
- `[YOUR_HEADLINE]`, `[YOUR_SUBTITLE]`
- `[EMAIL]`, `[LINKEDIN_URL]`

**Product Cases (3 cases):**
- `[CASE_X_TITLE]`, `[CASE_X_SUMMARY]`
- `[CASE_X_PROBLEM]`, `[CASE_X_HYPOTHESIS]`
- `[CASE_X_PROPOSAL]`, `[CASE_X_METRICS]`

**Impact Metrics (4 metrics):**
- `[METRIC_X_NUMBER]`, `[METRIC_X_DESCRIPTION]`

**Background (4 experience items):**
- `[ROLE_X]`, `[COMPANY_X]`, `[DESCRIPTION_X]`
- `[BELIEF_1]`, `[BELIEF_2]`, `[BELIEF_3]`

**Contact:**
- `[CONTACT_MESSAGE]`

Replace placeholders in both `en` and `es` sections of `content.ts`.

## Design System

### Colors

The site uses warm neutrals with an accent color (red/coral by default):
- Primary accent: `accent-600` in light mode, `accent-400` in dark mode
- Neutrals: `neutral-50` to `neutral-950`

To change the accent color, edit `tailwind.config.ts`:

```typescript
colors: {
  accent: {
    // Your color scale here
  },
}
```

### Typography

Uses Inter font (loaded via Google Fonts) with generous whitespace and modern sizing.

### Animations

- Fade-in and slide-up on scroll
- Hover lift effects on cards and buttons
- Smooth theme transitions
- Animated number counters in metrics section

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

Build the static site:

```bash
npm run build
```

Deploy the `.next` folder to your hosting platform.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

---

**Note**: This is a template with placeholder content. Replace all `[PLACEHOLDER]` values in `content.ts` with your actual information before deploying.
