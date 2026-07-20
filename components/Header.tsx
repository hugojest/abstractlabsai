import Link from "next/link";
import { profile } from "@/lib/profile";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#expertise", label: "Expertise" },
  { href: "/#repository", label: "Repository" },
  { href: "/#projects", label: "Projects" },
  { href: "/blog", label: "Writing" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-content items-center justify-between px-7 py-4">
        <Link href="/" className="flex items-baseline gap-2 font-mono text-sm tracking-wide text-fg">
          <span className="inline-block h-[9px] w-[9px] rotate-45 bg-accent" aria-hidden="true" />
          {profile.name.toUpperCase()}
        </Link>

        <nav aria-label="Primary" className="hidden gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-sm text-fg-muted transition-colors hover:text-accent-text"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile navigation — native <details>/<summary>, fully keyboard
            accessible with zero added JS. */}
        <details className="group relative md:hidden">
          <summary
            aria-label="Open menu"
            className="list-none cursor-pointer select-none rounded-sm border border-line-strong px-3 py-1.5 font-mono text-xs text-fg-muted [&::-webkit-details-marker]:hidden"
          >
            Menu
          </summary>
          <nav
            aria-label="Primary"
            className="absolute right-0 top-[calc(100%+8px)] flex w-56 flex-col gap-1 rounded-sm border border-line bg-surface p-3 shadow-lg"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-sm px-2 py-2 font-mono text-sm text-fg-muted transition-colors hover:bg-bg hover:text-accent-text"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
