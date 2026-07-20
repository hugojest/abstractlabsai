import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/lib/articles";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Notes on food domain expertise, sensory evaluation, knowledge management, and AI evaluation from Hugo Jeria Strauss.",
  alternates: {
    canonical: `${site.url}/blog`,
  },
};

export default function BlogIndex() {
  return (
    <main id="main-content">
      <section className="border-b border-line py-16 md:py-20">
        <div className="mx-auto max-w-content px-7">
          <p className="eyebrow">Field Notes</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-fg md:text-[46px]">
            Writing
          </h1>
          <p className="mt-4 max-w-[56ch] text-lg text-fg-muted">
            Working notes on food domain expertise, sensory evaluation, knowledge systems, and
            what it takes to evaluate AI output against how food actually behaves.
          </p>
        </div>
      </section>

      <section className="py-4">
        <div className="mx-auto max-w-content px-7">
          <div className="border-t border-line">
            {articles.map((a) => (
              <Link
                key={a.slug}
                href={`/blog/${a.slug}`}
                className="group grid grid-cols-1 gap-2 border-b border-line py-8 md:grid-cols-[120px_1fr_140px] md:items-baseline md:gap-6"
              >
                <span className="font-mono text-xs text-muted">{a.number}</span>
                <div>
                  <h2 className="text-2xl font-semibold text-fg group-hover:text-accent-text">
                    {a.title}
                  </h2>
                  <p className="mt-2 max-w-[60ch] text-[15px] text-fg-muted">{a.dek}</p>
                  <span className="mt-3 inline-block font-mono text-xs text-accent-text">
                    Read note →
                  </span>
                </div>
                <div className="flex flex-col gap-1 font-mono text-xs text-muted md:items-end">
                  <span>{a.tag}</span>
                  <span className="text-fg-muted">{a.readTime} read</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
