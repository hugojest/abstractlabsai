import { profile } from "@/lib/profile";

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 border-b border-line py-16 md:py-20">
      <div className="mx-auto grid max-w-content grid-cols-1 gap-12 px-7 md:grid-cols-[.9fr_1.1fr] md:gap-14">
        <div>
          <p className="eyebrow">01 — About</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-fg md:text-[32px]">
            Where kitchen judgment meets structured evaluation.
          </h2>
        </div>
        <div className="space-y-4 text-fg-muted">
          <p>
            {profile.name} is a gastronomy professional with 15+ years of experience across
            culinary operations, food and beverage systems, and hospitality — the kind of
            experience that comes from running lines, developing dishes under real constraints,
            and managing service where consistency isn&apos;t optional.
          </p>
          <p>
            That background sits at an increasingly useful intersection with artificial
            intelligence. Food and beverage knowledge is physical and tacit before it&apos;s
            written down anywhere; food science gives it a vocabulary that&apos;s precise enough
            to test; and AI systems that touch food — recipe generation, sensory description,
            kitchen-workflow tools — need exactly that combination of practical grounding and
            structured thinking to be evaluated properly.
          </p>
          <p>
            Hugo&apos;s work translates hands-on culinary and operational expertise into a form AI
            teams can use directly: evaluation rubrics, labeling guidelines, structured knowledge
            references, and direct review of model outputs — built by someone who has actually
            done the work being evaluated, not just read about it.
          </p>
        </div>
      </div>
    </section>
  );
}
