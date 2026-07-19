import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticle } from "@/lib/articles";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = getArticle(params.slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.dek,
    openGraph: {
      title: article.title,
      description: article.dek,
      type: "article",
    },
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticle(params.slug);
  if (!article) notFound();

  const currentIndex = articles.findIndex((a) => a.slug === article.slug);
  const next = articles[(currentIndex + 1) % articles.length];

  return (
    <main>
      <article className="py-16 md:py-20">
        <div className="mx-auto max-w-[720px] px-7">
          <Link href="/blog" className="font-mono text-xs text-teal hover:underline">
            ← All writing
          </Link>

          <p className="eyebrow mt-6">
            {article.number} · {article.tag} · {article.readTime} read
          </p>
          <h1 className="mt-3 font-serif text-4xl leading-tight md:text-[44px]">
            {article.title}
          </h1>
          <p className="mt-4 text-lg text-ink-soft">{article.dek}</p>

          <div className="mt-10 space-y-5 border-t border-line pt-10 text-[17px] leading-[1.75] text-ink">
            {article.content.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </article>

      <section className="border-t border-line py-10">
        <div className="mx-auto max-w-[720px] px-7">
          <p className="eyebrow mb-3">Next</p>
          <Link href={`/blog/${next.slug}`} className="font-serif text-2xl hover:text-amber-deep">
            {next.title} →
          </Link>
        </div>
      </section>
    </main>
  );
}
