import { profile } from "@/lib/profile";

export default function Contact() {
  const linkedinLabel = profile.linkedin.replace(/^https?:\/\//, "").replace(/\/$/, "");
  const githubLabel = profile.github.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <section id="contact" className="scroll-mt-20 py-16 md:py-20">
      <div className="mx-auto grid max-w-content grid-cols-1 gap-14 px-7 md:grid-cols-[1.1fr_.9fr] md:items-start">
        <div>
          <p className="eyebrow">06 — Contact</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-fg md:text-[34px]">
            Working on a food-related AI problem?
          </h2>
          <p className="mt-4 max-w-[46ch] text-fg-muted">
            If you&apos;re building or evaluating a system that touches food — recipes, kitchen
            workflow, sensory description, food safety — reach out on LinkedIn with what
            you&apos;re working on.
          </p>
        </div>
        <div className="rounded-sm border border-line-strong bg-surface p-6 font-mono">
          <div className="spec-row">
            <span className="text-muted">LINKEDIN</span>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label={`${profile.name} on LinkedIn (opens in a new tab)`}
              className="font-medium text-accent-text hover:underline"
            >
              {linkedinLabel}
            </a>
          </div>
          <div className="spec-row">
            <span className="text-muted">GITHUB</span>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`${profile.name} on GitHub (opens in a new tab)`}
              className="font-medium text-accent-text hover:underline"
            >
              {githubLabel}
            </a>
          </div>
          <div className="spec-row">
            <span className="text-muted">EMAIL</span>
            <a
              href={`mailto:${profile.email}`}
              aria-label={`Email ${profile.name}`}
              className="font-medium text-accent-text hover:underline"
            >
              {profile.email}
            </a>
          </div>
          <div className="spec-row">
            <span className="text-muted">LOCATION</span>
            <span className="font-medium text-fg">{profile.location}</span>
          </div>
          <div className="spec-row">
            <span className="text-muted">AVAILABILITY</span>
            <span className="font-medium text-right text-fg">{profile.workMode}</span>
          </div>
          <div className="spec-row">
            <span className="text-muted">BEST FOR</span>
            <span className="font-medium text-right text-fg">AI eval · Food-tech advisory</span>
          </div>
        </div>
      </div>
    </section>
  );
}
