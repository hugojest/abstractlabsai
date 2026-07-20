import Link from "next/link";
import { profile, resumeHref } from "@/lib/profile";

const specs = [
  { k: "DOMAIN", v: "Food, Beverage & Culinary Systems" },
  { k: "APPLICATION", v: "AI Training & Evaluation" },
  { k: "EXPERIENCE", v: "15+ Years, Operations to Advisory" },
  { k: "METHOD", v: "Structured Human Feedback" },
  { k: "FORMAT", v: "Consulting · Contract · Advisory" },
];

export default function Hero() {
  return (
    <section className="border-b border-line py-20 md:py-28">
      <div className="mx-auto grid max-w-content grid-cols-1 gap-12 px-7 md:grid-cols-[1.15fr_.85fr] md:items-end md:gap-14">
        <div>
          <p className="eyebrow">{profile.title}</p>
          <h1 className="mt-3 text-[40px] font-semibold leading-[1.1] tracking-tight text-fg md:text-[58px]">
            AI training, evaluation, and human feedback for food systems,{" "}
            <span className="text-accent-text">grounded in 15+ years of culinary expertise.</span>
          </h1>
          <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-fg-muted">
            Hugo Jeria Strauss bridges culinary expertise and artificial intelligence — bringing
            structured food knowledge, sensory evaluation, and operational discipline to AI
            training and evaluation work.
          </p>
          <div className="mt-9 flex flex-wrap gap-3.5">
            <Link
              href="/#contact"
              className="rounded-sm bg-accent px-5 py-3 font-mono text-sm font-medium text-fg transition-colors hover:bg-accent-hover"
            >
              Get in touch
            </Link>
            <a
              href={resumeHref}
              download
              rel="noopener noreferrer"
              aria-label={`Download ${profile.name}'s CV (PDF)`}
              className="rounded-sm border border-line-strong px-5 py-3 font-mono text-sm text-fg transition-colors hover:border-accent hover:text-accent-text"
            >
              Download CV
            </a>
            <Link
              href="/#projects"
              className="rounded-sm border border-line-strong px-5 py-3 font-mono text-sm text-fg transition-colors hover:border-accent hover:text-accent-text"
            >
              View selected work
            </Link>
          </div>
        </div>
        <div className="rounded-sm border border-line-strong bg-surface px-6 py-5 font-mono">
          {specs.map((s) => (
            <div className="spec-row" key={s.k}>
              <span className="text-muted">{s.k}</span>
              <span className="text-right font-medium text-fg">{s.v}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
