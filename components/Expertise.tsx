const areas = [
  {
    idx: "FOOD · AI",
    title: "Food Domain Expertise",
    body: "Reviewing AI-generated recipes, cooking instructions, and food safety claims for the kind of errors that read as plausible but wouldn't survive contact with a real kitchen.",
  },
  {
    idx: "F&B",
    title: "Food & Beverage Knowledge",
    body: "Technique, ratios, ingredient behavior, and beverage service across cuisines and formats — the working knowledge behind a dish or drink that actually performs as described.",
  },
  {
    idx: "OPS",
    title: "Hospitality Operations",
    body: "Kitchen and front-of-house workflow, prep systems, scaling, and service logistics — grounding food-related AI use cases in how operations actually run day to day.",
  },
  {
    idx: "EVAL",
    title: "AI Evaluation",
    body: "Building and applying evaluation rubrics for food-related model behavior — annotation guidelines and structured comparison of outputs against domain reality.",
  },
  {
    idx: "KM",
    title: "Knowledge Management",
    body: "Structuring tacit culinary and operational knowledge into documentation and taxonomies that are usable for training, reference, and review.",
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="scroll-mt-20 border-b border-line py-16 md:py-20">
      <div className="mx-auto max-w-content px-7">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">02 — Areas of Expertise</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-fg md:text-[32px]">
              Five areas, one working vocabulary.
            </h2>
          </div>
          <p className="max-w-[34ch] text-sm text-fg-muted">
            Each area below is a lens applied when reviewing, correcting, or structuring
            food-related content and systems.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((a) => (
            <div key={a.title} className="flex min-h-[190px] flex-col gap-3 bg-surface p-6">
              <span className="font-mono text-xs text-accent-text">{a.idx}</span>
              <h3 className="text-xl font-semibold leading-snug text-fg">{a.title}</h3>
              <p className="text-sm text-fg-muted">{a.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
