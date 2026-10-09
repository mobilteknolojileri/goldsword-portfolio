# goldsword.dev

Source of [goldsword.dev](https://goldsword.dev), my portfolio and Turkish blog. I build mobile apps and websites and help with software problems on Android phones; the site shows that work, the case studies behind it and a few guides.

It's a static Astro 7 site styled with Tailwind CSS 4. React 19 is only used for the two interactive parts (the contact form and the password strength demo), and the case studies are written in MDX. Hosted on Vercel.

## Running it

Needs Node 22.12 or newer.

```bash
npm ci
npm run dev
```

The dev server runs at http://localhost:4321.

- `npm run build` builds the site into `dist/`
- `npm run preview` serves that build
- `npm run check` runs astro check, ESLint and Prettier
- `npm run fix` applies the ESLint and Prettier fixes

## Environment

Nothing is required. With these set, the contact form sends mail through EmailJS (without them it opens the visitor's mail app) and the search console verification tags are added:

```bash
PUBLIC_EMAILJS_SERVICE_ID=
PUBLIC_EMAILJS_TEMPLATE_ID=
PUBLIC_EMAILJS_PUBLIC_KEY=
PUBLIC_SITE_URL=https://goldsword.dev
PUBLIC_GOOGLE_VERIFICATION=
PUBLIC_BING_VERIFICATION=
PUBLIC_YANDEX_VERIFICATION=
```

## Where things are

- `src/pages`: routes
- `src/features`: home page sections
- `src/components`, `src/layouts`: shared pieces and page layouts
- `src/content`: blog posts (Markdown) and case studies (MDX)
- `src/lib`: project data, reviews and SEO helpers
- `src/styles/globals.css`: Tailwind theme and shared classes

The case studies are Turkish versions of [mobilteknolojileri/case-studies](https://github.com/mobilteknolojileri/case-studies). Commit messages follow [docs/conventions/commit.md](docs/conventions/commit.md).

## Contact

[mobilteknolojileri@gmail.com](mailto:mobilteknolojileri@gmail.com) · [GitHub](https://github.com/mobilteknolojileri) · [Bionluk](https://bionluk.com/goldsword)
