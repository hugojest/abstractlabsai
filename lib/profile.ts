import { site } from "@/lib/site";

/**
 * lib/profile.ts
 * Single source of truth for Hugo's personal / professional information.
 * Every component reads from here — update once, it updates everywhere
 * (Hero, Header, Footer, Contact, JSON-LD structured data, etc).
 *
 * NOTE: `github` is a placeholder pending the real handle — replace before launch.
 */

export const profile = {
  name: "Hugo Jeria Strauss",
  title: "AI Food Expert | Culinary Domain Specialist",
  email: "hugo.jest@gmail.com",
  linkedin: "https://www.linkedin.com/in/hugo-jeria-strauss-2ba154301/",
  github: "https://github.com/hugojeriastrauss", // placeholder — replace with real handle
  website: site.url,
  location: "Chile (UTC-4)",
  workMode: "Remote, international · project-based",

  // Short capability list used in the Hero trust bar and referenced by Contact.
  focusAreas: [
    "AI Evaluation",
    "Human Feedback",
    "Data Annotation",
    "Food Domain Expert",
    "AI Training",
  ],

  resumeFileName: "Hugo_Jeria_Strauss_Resume.pdf",
} as const;

export const resumeHref = `/${profile.resumeFileName}`;
