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
        paper: "#F1EFE6",
        "paper-alt": "#E7E2D3",
        ink: "#20241F",
        "ink-soft": "#4A4E44",
        amber: "#9C6B16",
        "amber-deep": "#7D5511",
        teal: "#2E5C55",
        line: "#D3CDB9",
        "line-strong": "#B6AE93",
      },
      fontFamily: {
        serif: ["var(--font-newsreader)"],
        sans: ["var(--font-plex-sans)"],
        mono: ["var(--font-plex-mono)"],
      },
      maxWidth: {
        content: "1120px",
      },
      backgroundImage: {
        "dash-line": "linear-gradient(to right, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
