# Hugo Jeria Strauss — Portfolio

A Next.js 14 (App Router) + Tailwind CSS portfolio for Hugo Jeria Strauss, AI Food Expert &
Culinary Domain Specialist. Dark, minimal, enterprise/AI-consulting visual identity (Slate +
Blue), all personal/site data centralized in `lib/`.

## Stack

- **Next.js 14.2.35** (App Router, static generation, patched against the Dec 2025 RSC CVEs)
- **Tailwind CSS 3** with a custom dark design system (see `tailwind.config.ts`)
- **TypeScript**
- **Fontsource** self-hosted fonts (Inter, IBM Plex Mono) — no runtime call to Google's font
  CDN, so the site works even in network-restricted deploy environments and there's one fewer
  render-blocking request in production.

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
each individual article page.

## Central configuration layer

All personal and site data lives in four files under `lib/`. **Every component reads from
these — there is no duplicated copy of a name, email, or link anywhere else in the codebase.**
Edit the config once and it propagates everywhere (Hero, Header, Footer, Contact, JSON-LD
structured data, sitemap, canonical URLs).

| File | Contains |
|---|---|
| `lib/profile.ts` | Name, title, email, LinkedIn, GitHub, website, location, work mode, focus-area list (used by the Hero trust bar), resume filename |
| `lib/site.ts` | Site URL, site name, default SEO title/description/keywords, locale |
| `lib/projects.ts` | The four project cards shown in "Current focus areas" |
| `lib/articles.ts` | Blog post content (title, dek, tag, body paragraphs) |

### Things to update before launch

- **`lib/profile.ts` → `github`**: currently a placeholder (`github.com/hugojeriastrauss`) since
  no real handle was provided. Replace with the real URL, or remove the field and the
  corresponding row in `components/Contact.tsx` if not applicable.
- **`lib/site.ts` → `url`**: currently `https://hugojeriastrauss.com` as a placeholder domain.
  Replace with the real production domain — this single value drives `metadataBase`, canonical
  URLs, OpenGraph, the sitemap, and `robots.txt`.
- **Resume file**: `public/` is currently empty. Add the real file as
  `public/Hugo_Jeria_Strauss_CV_AI_Food_Expert.pdf` (exact name, case-sensitive) and the
  "Download CV" button in the Hero works immediately with no code changes — it reads the
  filename from `lib/profile.ts` and links to it with the `download` attribute, which works
  identically on localhost, Vercel, and any custom domain since `public/` assets are always
  served from the site root.

## Project structure

```
app/
  layout.tsx          Root layout, SEO metadata, canonical URL, Person JSON-LD, skip link
  page.tsx             Homepage — composes all sections
  globals.css          Tailwind + self-hosted font imports + focus-visible / skip-link styles
  sitemap.ts           Auto-generated sitemap.xml (reads lib/site.ts + lib/articles.ts)
  robots.ts            Auto-generated robots.txt (reads lib/site.ts)
  blog/
    page.tsx            Article listing
    [slug]/page.tsx      Individual article (static params + per-page canonical + OG metadata)
components/
  Header.tsx           Sticky nav + accessible mobile menu (native <details>, no JS bundle cost)
  Footer.tsx
  Hero.tsx              Headline, CTAs (Get in touch / Download CV / View selected work), spec card
  TrustBar.tsx          "Available for" strip below the Hero, sourced from profile.focusAreas
  About.tsx, Expertise.tsx, Repository.tsx, Projects.tsx, BlogPreview.tsx, Contact.tsx
lib/
  profile.ts, site.ts, projects.ts, articles.ts
```

## Design system

Dark, enterprise/AI-consulting palette (tokens in `tailwind.config.ts`):

| Token | Hex | Use |
|---|---|---|
| `bg` | `#0F172A` | Page background |
| `surface` | `#1E293B` | Cards, panels |
| `line` / `line-strong` | `#334155` / `#475569` | Borders |
| `fg` | `#F8FAFC` | Primary text |
| `fg-muted` | `#CBD5E1` | Secondary text |
| `muted` | `#94A3B8` | Tertiary text, mono labels |
| `accent` | `#2563EB` | Solid button backgrounds, focus rings |
| `accent-hover` | `#1D4ED8` | Button hover |
| `accent-text` | `#60A5FA` | Links / emphasis text on the dark background |

**Why `accent-text` exists as a separate token:** `#2563EB` on `#0F172A` measures roughly 3.5:1
contrast — enough for a solid button background (with white text on top) but *not* enough for
WCAG AA body-text contrast (4.5:1) if used as text color directly. `#60A5FA` on the same
background measures ~7:1, so it's used for links, the eyebrow labels, and inline emphasis
instead, while `#2563EB` stays reserved for button fills and borders. Same hue, no visual
inconsistency, but it actually passes accessibility audits.

Typography: **Inter** (headings + body) and **IBM Plex Mono** (nav, eyebrows, spec labels,
tags) — both self-hosted, both loaded only in the weights actually used.

## Accessibility notes

- Skip-to-content link (visible on keyboard focus) in `app/layout.tsx`.
- Mobile navigation uses native `<details>/<summary>` — keyboard-operable and screen-reader
  friendly with no custom JS.
- Visible focus rings (`:focus-visible`) on every interactive element.
- All external/contact links (LinkedIn, GitHub, email, resume) have explicit `aria-label`s.
- Palette contrast checked against WCAG AA (see design-system note above).
- `prefers-reduced-motion` respected — transitions are disabled for users who request it.

## Content honesty

The **Projects** section (`lib/projects.ts`) describes real focus-area categories, framed as
ongoing work rather than completed case studies with fabricated metrics or client names, since
none were supplied. The four articles in `lib/articles.ts` are original, fully-written pieces
(not placeholders) on food evaluation, sensory science, knowledge management, and hospitality
operations.
