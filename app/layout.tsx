import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteUrl = "https://hugojeriastrauss.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Hugo Jeria Strauss — AI Food Expert | Culinary Domain Specialist",
    template: "%s — Hugo Jeria Strauss",
  },
  description:
    "Hugo Jeria Strauss bridges culinary expertise and artificial intelligence through structured food knowledge, sensory evaluation, and AI evaluation for AI training companies, food technology teams, and research groups.",
  keywords: [
    "AI food expert",
    "culinary domain specialist",
    "food domain expertise for AI",
    "AI evaluation food",
    "hospitality operations consultant",
    "food knowledge management",
    "sensory evaluation AI",
  ],
  authors: [{ name: "Hugo Jeria Strauss" }],
  openGraph: {
    title: "Hugo Jeria Strauss — AI Food Expert | Culinary Domain Specialist",
    description:
      "Bridging culinary expertise and artificial intelligence through structured knowledge, evaluation, and food domain understanding.",
    url: siteUrl,
    siteName: "Hugo Jeria Strauss",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hugo Jeria Strauss — AI Food Expert | Culinary Domain Specialist",
    description:
      "Bridging culinary expertise and artificial intelligence through structured knowledge, evaluation, and food domain understanding.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Hugo Jeria Strauss",
    jobTitle: "AI Food Expert | Culinary Domain Specialist",
    description:
      "Gastronomy professional with 15+ years of experience in culinary operations, food and beverage systems, hospitality, and structured knowledge development, applied to AI training and evaluation.",
    knowsAbout: [
      "Food Domain Expertise",
      "Food & Beverage Knowledge",
      "Hospitality Operations",
      "AI Evaluation",
      "Knowledge Management",
    ],
    url: siteUrl,
  };

  return (
    <html lang="en">
      <body className="font-sans bg-paper text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
