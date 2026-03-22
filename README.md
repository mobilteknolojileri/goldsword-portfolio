# goldsword | Portfolio & Engineering Hub

[![Astro](https://img.shields.io/badge/Astro-BC52EE?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

A performance-focused portfolio and developer content platform built with Astro 5 and AI-assisted engineering workflows. This project serves as a production-grade showcase for software architecture, product-centric landing pages, and technical case studies.

## Vision

This repository is more than a code collection; it is a manifestation of the shift from Tutorial-based learning to Product-centric engineering. It reflects a commitment to building, shipping, and validating real-world ideas rather than consuming endless tutorials. It bridges the gap between clean code and measurable business value.

## Why This Project Matters

- Demonstrates real-world Island Architecture beyond basic tutorials.
- Focuses on performance-first engineering and technical SEO.
- Showcases product-centric thinking, emphasizing business impact over simple UI development.

## Key Features

- **Island Architecture:** Leverages Astro's partial hydration to deliver near-perfect Performance and Core Web Vitals.
- **Product Presentation:** Data-driven project showcases for SaaS, mobile applications, and custom automation tools.
- **Strategic Content:** A blog engine powered by MDX and Zod-validated content collections.
- **AI-Assisted Workflows:** Built with AI-assisted methodologies (prompt-driven content drafting, code scaffolding, and SEO structuring).
- **Technical SEO:** Enterprise-standard indexing (Canonical tags, trailing slash management, and JSON-LD schema).

## The Stack

- **Framework:** Astro 5 (Static Site Generation / Island Architecture)
- **UI:** React 19, Tailwind CSS, Framer Motion
- **Tooling:** TypeScript, ESLint, Prettier (Automated code validation)
- **Email:** Serverless contact flow via EmailJS.

## Project Organization

```text
src/
  components/   Shared visual atoms and interactive building blocks
  config/       Global configuration & SEO token management
  content/      Blog data with strict type-validation (Zod)
  features/     Module-based page sections (Hero, Portfolio, Services)
  layouts/      Core Page templates
  lib/          SEO utilities, constant data, and helper functions
  pages/        Astro routing (Blog, Projects, Services)
  styles/       Global CSS and Design Tokens (Tailwind)

public/         Static assets (Verification, Sitemap, Images)
docs/           Internal developer conventions & style guides
```

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm 9+

### Setup

```bash
# Clone and install
npm install

# Run Dev Server
npm run dev
```

The site will be available at `http://localhost:4321`.

## Environment Configuration

Create a local `.env` file to enable contact & metadata features:

```bash
PUBLIC_EMAILJS_SERVICE_ID=your_id
PUBLIC_EMAILJS_TEMPLATE_ID=your_id
PUBLIC_EMAILJS_PUBLIC_KEY=your_key
PUBLIC_SITE_URL=https://goldsword.dev
PUBLIC_GOOGLE_VERIFICATION=your_code
```

## Developer Experience

This project is built for reliability and speed:

- `npm run validate`: Runs Astro check, ESLint, and Prettier verification.
- `npm run fix`: Automatic resolution of code quality and formatting issues.
- `npm run build`: Production optimization and asset minification.

## Contact

- **Website:** [goldsword.dev](https://goldsword.dev)
- **Email:** [mobilteknolojileri@gmail.com](mailto:mobilteknolojileri@gmail.com)
- **GitHub:** [mobilteknolojileri](https://github.com/mobilteknolojileri)

---

_© 2026 goldsword. Built for performance, designed for impact._
