const projects = [
  {
    title: "Food & Beverage Development Research",
    tags: ["Product Development", "Sensory Testing"],
    body: "Applying culinary and sensory principles to the development and testing of food and beverage concepts — from ingredient behavior through to how a dish or drink holds up under real production and service conditions.",
    fields: [
      { k: "Domain", v: "Product development" },
      { k: "Method", v: "Iterative testing + sensory review" },
      { k: "Output", v: "Development notes & tasting protocols" },
      { k: "Status", v: "Ongoing" },
    ],
  },
  {
    title: "Culinary Knowledge Systems",
    tags: ["Knowledge Management", "Taxonomy"],
    body: "Structuring culinary technique, terminology, and ingredient knowledge into reference systems designed for reuse — the same discipline applied to AI-facing documentation and evaluation guidelines.",
    fields: [
      { k: "Domain", v: "Knowledge management" },
      { k: "Method", v: "Taxonomy design + documentation" },
      { k: "Output", v: "Structured reference libraries" },
      { k: "Status", v: "Ongoing" },
    ],
  },
  {
    title: "Fermentation & Ingredient Exploration",
    tags: ["Food Science", "Applied Research"],
    body: "Hands-on exploration of fermentation, preservation, and ingredient transformation — grounding food science concepts in direct, repeatable kitchen practice rather than theory alone.",
    fields: [
      { k: "Domain", v: "Food science" },
      { k: "Method", v: "Applied experimentation" },
      { k: "Output", v: "Technique documentation" },
      { k: "Status", v: "Ongoing" },
    ],
  },
  {
    title: "AI-Assisted Research Workflows",
    tags: ["AI Evaluation", "Methodology"],
    body: "Using AI tools as part of culinary and food-science research — testing where they're reliable, where they need human correction, and how that correction process can be made systematic.",
    fields: [
      { k: "Domain", v: "AI + research methodology" },
      { k: "Method", v: "Applied testing + review" },
      { k: "Output", v: "Workflow documentation" },
      { k: "Status", v: "Ongoing" },
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="border-b border-line py-16 md:py-20 scroll-mt-20">
      <div className="mx-auto max-w-content px-7">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">04 — Projects</p>
            <h2 className="mt-2 font-serif text-3xl md:text-[32px]">Current focus areas.</h2>
          </div>
          <p className="max-w-[34ch] text-sm text-ink-soft">
            Active research and applied work spanning food development, knowledge systems, and AI
            evaluation methodology.
          </p>
        </div>

        <div className="space-y-5">
          {projects.map((p) => (
            <div key={p.title} className="overflow-hidden rounded-sm border border-line-strong bg-paper-alt">
              <div className="flex flex-wrap items-start justify-between gap-4 border-b border-dashed border-line-strong px-6 py-5">
                <h3 className="font-serif text-xl md:text-[22px]">{p.title}</h3>
                <div className="flex flex-wrap items-start gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="whitespace-nowrap rounded-full border border-teal px-2.5 py-1 font-mono text-[11.5px] text-teal"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="px-6 pb-6 pt-4">
                <p className="mb-4 text-[15px] text-ink-soft">{p.body}</p>
                <div className="grid grid-cols-2 gap-4 border-t border-line pt-3 font-mono text-[12.5px] sm:grid-cols-4">
                  {p.fields.map((f) => (
                    <div key={f.k}>
                      <span className="mb-1 block text-[10.5px] uppercase tracking-wide text-teal">{f.k}</span>
                      {f.v}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
