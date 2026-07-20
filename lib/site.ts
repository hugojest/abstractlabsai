/**
 * lib/site.ts
 * Single source of truth for site-wide metadata (SEO, OpenGraph, JSON-LD).
 * Update siteUrl once here when the real production domain is known —
 * every metadata export, the sitemap, and robots.txt read from this file.
 */

export const site = {
  url: "https://hugojeriastrauss.com",
  name: "Hugo Jeria Strauss",
  title: "Hugo Jeria Strauss | AI Food Expert & Culinary Domain Specialist",
  titleTemplate: "%s — Hugo Jeria Strauss",
  description:
    "AI Food Expert specializing in food domain evaluation, culinary knowledge systems, and human feedback for artificial intelligence.",
  keywords: [
    "AI food expert",
    "food domain expert",
    "AI evaluation",
    "human feedback AI",
    "data annotation food",
    "culinary domain specialist",
    "food knowledge management",
    "sensory evaluation AI",
    "RLHF food expert",
  ],
  locale: "en_US",
} as const;
