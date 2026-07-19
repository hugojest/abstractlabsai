export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-20 scroll-mt-20">
      <div className="mx-auto grid max-w-content grid-cols-1 gap-14 px-7 md:grid-cols-[1.1fr_.9fr] md:items-start">
        <div>
          <p className="eyebrow">06 — Contact</p>
          <h2 className="mt-2 font-serif text-3xl md:text-[34px]">
            Working on a food-related AI problem?
          </h2>
          <p className="mt-4 max-w-[46ch] text-ink-soft">
            If you&apos;re building or evaluating a system that touches food — recipes, kitchen
            workflow, sensory description, food safety — reach out on LinkedIn with what
            you&apos;re working on.
          </p>
        </div>
        <div className="rounded-sm border border-line-strong bg-paper-alt p-6 font-mono">
          <div className="spec-row">
            <span className="text-teal">LINKEDIN</span>
            <a
              href="https://linkedin.com/in/hugojeriastrauss"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-amber-deep hover:underline"
            >
              linkedin.com/in/hugojeriastrauss
            </a>
          </div>
          <div className="spec-row">
            <span className="text-teal">AVAILABILITY</span>
            <span className="font-medium">Remote, project-based</span>
          </div>
          <div className="spec-row">
            <span className="text-teal">BEST FOR</span>
            <span className="font-medium text-right">AI eval · Food-tech advisory</span>
          </div>
        </div>
      </div>
    </section>
  );
}
