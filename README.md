# goldsword Portfolio

Professional portfolio website showcasing full-stack development projects.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Email**: EmailJS
- **Deployment**: Vercel

## Features

- Responsive design (mobile, tablet, desktop)
- Dark/Light mode
- SEO optimized
- Performance optimized (Lighthouse 90+)
- Accessible (WCAG 2.1)
- Type-safe with TypeScript
- Schema.org structured data
- OpenGraph & Twitter Cards
- Sitemap & robots.txt

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env.local` file:

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_GOOGLE_VERIFICATION=your_verification_code
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build

```bash
npm run build
npm start
```

### Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run type-check` - Check TypeScript types
- `npm run format` - Format code with Prettier

## Project Structure

```
goldsword-portfolio/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   └── portfolio/         # Portfolio pages
├── components/            # Reusable components
│   ├── effects/          # Animation components
│   ├── layout/           # Layout components
│   ├── providers/        # Context providers
│   └── ui/               # UI components
├── features/             # Feature modules
│   ├── hero/
│   ├── experience/
│   ├── research/
│   ├── testimonials/
│   └── contact/
├── lib/                  # Utilities
│   ├── constants.ts      # App constants
│   ├── utils.ts          # Helper functions
│   └── seo/              # SEO utilities
├── hooks/                # Custom React hooks
├── public/               # Static assets
└── types/                # TypeScript types
```

## License

© 2025 goldsword. All rights reserved.

## Contact

- Email: mobilteknolojileri@gmail.com
- GitHub: [@mobilteknolojileri](https://github.com/mobilteknolojileri)
- Bionluk: [@goldsword](https://bionluk.com/goldsword)