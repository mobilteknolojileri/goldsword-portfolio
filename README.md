# goldsword-portfolio

Personal portfolio and content site built to present selected software work, product pages, and blog content in a maintainable static setup.

This repository is primarily focused on:

- portfolio presentation
- landing pages for selected projects
- blog content with structured metadata
- a small contact flow

## Stack

- Astro 5
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Astro Content Collections
- EmailJS

## Why This Setup

The project uses Astro for a mostly static output with selective React hydration where interaction is actually needed. The goal is to keep the site straightforward to maintain while still allowing richer UI in areas such as navigation, filtering, and contact.

## Project Structure

```text
src/
  components/   reusable UI and shared visual building blocks
  config/       site and SEO configuration
  content/      blog content and collection schema
  features/     page-level sections and feature modules
  layouts/      shared page layout
  lib/          constants, helpers, and SEO utilities
  pages/        Astro routes
  styles/       global styles

public/         static assets
docs/           small internal documentation
```

## Local Development

Requirements:

- Node.js 18+
- npm 9+

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Default local URL:

```text
http://localhost:4321
```

## Environment Variables

Create a local `.env` file if you want the contact form and site metadata to behave as expected:

```bash
PUBLIC_EMAILJS_SERVICE_ID=your_service_id
PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
PUBLIC_SITE_URL=https://goldsword.dev
PUBLIC_GOOGLE_VERIFICATION=your_verification_code
```

## Scripts

```bash
npm run dev
npm run build
npm run preview
npm run validate
npm run fix
```

Short description:

- `dev`: starts the Astro development server
- `build`: creates the production build
- `preview`: serves the built output locally
- `validate`: runs Astro checks, ESLint, and Prettier checks
- `fix`: runs ESLint fixes, Prettier write, and Astro checks

## Notes

- `nextjs-backup/` is kept only as migration reference material.
- `public/` contains static files such as images, icons, `app-ads.txt`, and verification assets.
- Project-specific pages such as `kafadar`, `qusafe`, and `legends-of-aestera` are part of this repository's route structure.

## Deployment

The site is intended to be deployed as a static Astro build. Vercel is the current target, but any host that can serve the generated output is suitable.

## Contact

- Website: https://goldsword.dev
- Email: mobilteknolojileri@gmail.com
- GitHub: https://github.com/mobilteknolojileri
- Bionluk: https://bionluk.com/goldsword
