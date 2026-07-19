const tree: { category: string; nodes: string[] }[] = [
  { category: "/gastronomy", nodes: ["technique-and-method", "regional-and-ingredient-notes"] },
  { category: "/food-science", nodes: ["heat-and-texture-mechanisms", "fermentation-and-preservation"] },
  { category: "/hospitality-operations", nodes: ["prep-and-scaling", "service-workflow"] },
  { category: "/ai-applications", nodes: ["evaluation-rubrics", "annotated-error-examples"] },
  { category: "/documentation-methodology", nodes: ["taxonomy-standards", "sensory-vocabulary-references"] },
];

export default function Repository() {
  return (
    <section id="repository" className="border-b border-line py-16 md:py-20 scroll-mt-20">
      <div className="mx-auto grid max-w-content grid-cols-1 gap-14 px-7 md:grid-cols-[.85fr_1.15fr]">
        <div>
          <p className="eyebrow">03 — Professional Knowledge Repository</p>
          <h2 className="mt-2 font-serif text-3xl md:text-[32px]">
            How the domain knowledge is organized.
          </h2>
          <p className="mt-5 text-ink-soft">
            Behind the evaluation work and writing is a structured reference system that
            integrates gastronomy, food science, hospitality operations, AI applications, and
            documentation methodology — organized so it can be reused consistently across
            projects rather than reconstructed each time.
          </p>
          <p className="mt-4 text-ink-soft">
            This is a working system, not a finished archive. It grows as new evaluation and
            consulting work surfaces edge cases worth documenting.
          </p>
        </div>
        <div className="rounded-sm border border-line-strong bg-paper-alt px-6 py-6 font-mono text-[13.5px] leading-[2]">
          {tree.map((branch) => (
            <div key={branch.category}>
              <div className="text-amber-deep">{branch.category}</div>
              {branch.nodes.map((node, i) => (
                <div className="text-ink" key={node}>
                  &nbsp;&nbsp;{i === branch.nodes.length - 1 ? "└──" : "├──"}{" "}
                  <span className="text-ink-soft">{node}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
