import { profile } from "@/lib/profile";

export default function TrustBar() {
  return (
    <div className="border-b border-line bg-surface/60">
      <div className="mx-auto flex max-w-content flex-wrap items-center gap-x-3 gap-y-3 px-7 py-5">
        <span className="font-mono text-xs uppercase tracking-wide text-muted">
          Available for
        </span>
        <ul className="flex flex-wrap gap-2.5" aria-label="Areas of availability">
          {profile.focusAreas.map((area) => (
            <li key={area}>
              <span className="inline-block rounded-full border border-line-strong px-3 py-1 font-mono text-xs text-fg-muted">
                {area}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
