# Hugo Jeria Strauss — Portfolio

A Next.js 14 (App Router) + Tailwind CSS portfolio site for Hugo Jeria Strauss, AI Food Expert &
Culinary Domain Specialist.

## Stack

- **Next.js 14.2.35** (App Router, static generation, patched against the Dec 2025 RSC CVEs)
- **Tailwind CSS 3** with a custom design system (see `tailwind.config.ts`)
- **TypeScript**
- **Fontsource** self-hosted fonts (Newsreader, IBM Plex Sans, IBM Plex Mono) — no runtime call
  to Google's font CDN, so the site works even in network-restricted deploy environments.

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Build for production

```bash
npm run build
npm run start
```

Every route is statically generated (`○` in the build output), including the blog listing and
each individual article page, which keeps the site fast and easy to host anywhere (Vercel,
Netlify, or any static-friendly Node host).

## Project structure

```
app/
  layout.tsx          Root layout, global metadata, JSON-LD
  page.tsx             Homepage — composes all sections
  globals.css          Tailwind + self-hosted font imports + shared utility classes
  sitemap.ts           Auto-generated sitemap.xml
  robots.ts            Auto-generated robots.txt
  blog/
    page.tsx            Article listing
    [slug]/page.tsx      Individual article (static params + per-page SEO metadata)
components/
  Header.tsx, Footer.tsx
  Hero.tsx, About.tsx, Expertise.tsx, Repository.tsx, Projects.tsx, BlogPreview.tsx, Contact.tsx
lib/
  articles.ts           Article content — edit this file to add/edit blog posts
```

## Editing content

- **Bio, expertise, repository structure, project focus areas:** edit the relevant component in
  `components/`. Copy is plain JSX/strings, no CMS involved.
- **Blog articles:** edit `lib/articles.ts`. Each entry needs a unique `slug`; adding a new object
  to the array automatically creates a new page at `/blog/[slug]` and adds it to the sitemap.
- **Contact / LinkedIn URL:** `components/Contact.tsx`.
- **Site URL for SEO (metadataBase, sitemap, robots):** currently set to
  `https://hugojeriastrauss.com` as a placeholder in `app/layout.tsx`, `app/sitemap.ts`, and
  `app/robots.ts` — replace with the real production domain before deploying.

## Notes on content honesty

The **Projects** section describes real focus-area categories as provided, framed as ongoing
work rather than completed case studies with specific metrics, since no verifiable outcomes or
named clients were supplied. Add specific, verifiable project names, dates, and results as they
become available — the component is a simple array in `components/Projects.tsx`.

The four articles in `lib/articles.ts` are original, fully-written pieces (not placeholders) on
food evaluation, sensory science, knowledge management, and hospitality operations, so the blog
is populated with real content from day one. Replace or add to them over time.
