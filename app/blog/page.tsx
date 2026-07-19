import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Notes on food domain expertise, sensory evaluation, knowledge management, and AI evaluation from Hugo Jeria Strauss.",
};

export default function BlogIndex() {
  return (
    <main>
      <section className="border-b border-line py-16 md:py-20">
        <div className="mx-auto max-w-content px-7">
          <p className="eyebrow">Field Notes</p>
          <h1 className="mt-2 font-serif text-4xl md:text-[46px]">Writing</h1>
          <p className="mt-4 max-w-[56ch] text-lg text-ink-soft">
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
                <span className="font-mono text-xs text-ink-soft">{a.number}</span>
                <div>
                  <h2 className="font-serif text-2xl group-hover:text-amber-deep">{a.title}</h2>
                  <p className="mt-2 max-w-[60ch] text-[15px] text-ink-soft">{a.dek}</p>
                  <span className="mt-3 inline-block font-mono text-xs text-amber-deep">
                    Read note →
                  </span>
                </div>
                <div className="flex flex-col gap-1 font-mono text-xs text-teal md:items-end">
                  <span>{a.tag}</span>
                  <span className="text-ink-soft">{a.readTime} read</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
