import Link from "next/link";

const specs = [
  { k: "DOMAIN", v: "Food, Beverage & Culinary Systems" },
  { k: "APPLICATION", v: "AI Training & Evaluation" },
  { k: "EXPERIENCE", v: "15+ Years, Operations to Advisory" },
  { k: "METHOD", v: "Structured Human Feedback" },
  { k: "FORMAT", v: "Consulting · Contract · Advisory" },
];

export default function Hero() {
  return (
    <section className="border-b border-line py-16 md:py-24">
      <div className="mx-auto grid max-w-content grid-cols-1 gap-12 px-7 md:grid-cols-[1.15fr_.85fr] md:items-end md:gap-14">
        <div>
          <p className="eyebrow">AI Food Expert · Culinary Domain Specialist</p>
          <h1 className="mt-2 font-serif text-[38px] leading-[1.08] tracking-tight md:text-[56px]">
            Fifteen years in the kitchen, applied to{" "}
            <em className="not-italic italic text-amber-deep">how AI understands food.</em>
          </h1>
          <p className="mt-6 max-w-[52ch] text-lg text-ink-soft">
            Hugo Jeria Strauss bridges culinary expertise and artificial intelligence — bringing
            structured food knowledge, sensory evaluation, and operational discipline to AI
            training and evaluation work.
          </p>
          <div className="mt-8 flex flex-wrap gap-3.5">
            <Link
              href="/#contact"
              className="rounded-sm border border-ink bg-ink px-5 py-3 font-mono text-sm text-paper transition-colors hover:border-amber-deep hover:bg-amber-deep"
            >
              Get in touch
            </Link>
            <Link
              href="/#projects"
              className="rounded-sm border border-ink px-5 py-3 font-mono text-sm text-ink transition-colors hover:bg-paper-alt"
            >
              View selected work
            </Link>
          </div>
        </div>
        <div className="rounded-sm border border-line-strong bg-paper-alt px-6 py-5 font-mono">
          {specs.map((s) => (
            <div className="spec-row" key={s.k}>
              <span className="text-teal">{s.k}</span>
              <span className="text-right font-medium text-ink">{s.v}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
