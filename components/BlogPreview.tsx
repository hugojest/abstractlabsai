import Link from "next/link";
import { articles } from "@/lib/articles";

export default function BlogPreview() {
  return (
    <section id="writing" className="border-b border-line py-16 md:py-20 scroll-mt-20">
      <div className="mx-auto max-w-content px-7">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">05 — Knowledge Articles</p>
            <h2 className="mt-2 font-serif text-3xl md:text-[32px]">Writing on food, evaluation, and knowledge work.</h2>
            <p className="mt-2 font-mono text-xs text-ink-soft">New articles added regularly.</p>
          </div>
          <Link href="/blog" className="font-mono text-sm text-amber-deep hover:underline">
            View all articles →
          </Link>
        </div>

        <div className="border-t border-line">
          {articles.map((a) => (
            <Link
              key={a.slug}
              href={`/blog/${a.slug}`}
              className="group grid grid-cols-1 gap-1 border-b border-line py-6 md:grid-cols-[120px_1fr_140px] md:items-baseline md:gap-5"
            >
              <span className="font-mono text-xs text-ink-soft">{a.number}</span>
              <div>
                <h3 className="font-serif text-lg group-hover:text-amber-deep">{a.title}</h3>
                <p className="mt-1 text-sm text-ink-soft">{a.dek}</p>
              </div>
              <span className="font-mono text-xs text-teal md:text-right">{a.tag}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
