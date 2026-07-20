import { projects } from "@/lib/projects";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 border-b border-line py-16 md:py-20">
      <div className="mx-auto max-w-content px-7">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">04 — Projects</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-fg md:text-[32px]">
              Current focus areas.
            </h2>
          </div>
          <p className="max-w-[34ch] text-sm text-fg-muted">
            Active research and applied work spanning food development, knowledge systems, and AI
            evaluation methodology.
          </p>
        </div>

        <div className="space-y-5">
          {projects.map((p) => (
            <div key={p.title} className="overflow-hidden rounded-sm border border-line-strong bg-surface">
              <div className="flex flex-wrap items-start justify-between gap-4 border-b border-line px-6 py-5">
                <h3 className="text-xl font-semibold text-fg md:text-[22px]">{p.title}</h3>
                <div className="flex flex-wrap items-start gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="whitespace-nowrap rounded-full border border-line-strong px-2.5 py-1 font-mono text-[11.5px] text-fg-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="px-6 pb-6 pt-4">
                <p className="mb-4 text-[15px] text-fg-muted">{p.body}</p>
                <div className="grid grid-cols-2 gap-4 border-t border-line pt-3 font-mono text-[12.5px] sm:grid-cols-4">
                  {p.fields.map((f) => (
                    <div key={f.k}>
                      <span className="mb-1 block text-[10.5px] uppercase tracking-wide text-muted">
                        {f.k}
                      </span>
                      <span className="text-fg">{f.v}</span>
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
