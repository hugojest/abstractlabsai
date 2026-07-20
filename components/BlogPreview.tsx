import Link from "next/link";
import { articles } from "@/lib/articles";

export default function BlogPreview() {
  return (
    <section id="writing" className="scroll-mt-20 border-b border-line py-16 md:py-20">
      <div className="mx-auto max-w-content px-7">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">05 — Knowledge Articles</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-fg md:text-[32px]">
              Writing on food, evaluation, and knowledge work.
            </h2>
            <p className="mt-2 font-mono text-xs text-muted">New articles added regularly.</p>
          </div>
          <Link href="/blog" className="font-mono text-sm text-accent-text hover:underline">
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
              <span className="font-mono text-xs text-muted">{a.number}</span>
              <div>
                <h3 className="text-lg font-semibold text-fg group-hover:text-accent-text">
                  {a.title}
                </h3>
                <p className="mt-1 text-sm text-fg-muted">{a.dek}</p>
              </div>
              <span className="font-mono text-xs text-muted md:text-right">{a.tag}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
