import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Enterprise / AI-consulting dark palette.
        bg: "#0F172A", // page background
        surface: "#1E293B", // card / panel background
        line: "#334155", // default border
        "line-strong": "#475569", // emphasized border / hover border
        fg: "#F8FAFC", // primary text
        "fg-muted": "#CBD5E1", // secondary text
        muted: "#94A3B8", // tertiary text, mono labels
        accent: "#2563EB", // solid buttons, focus rings, strong borders
        "accent-hover": "#1D4ED8", // button hover state
        // Lighter accent tint used for TEXT on the dark background — #2563EB
        // alone does not meet WCAG AA contrast for body-size text on #0F172A,
        // so links / eyebrows / emphasis use this instead.
        "accent-text": "#60A5FA",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      maxWidth: {
        content: "1120px",
      },
    },
  },
  plugins: [],
};

export default config;
