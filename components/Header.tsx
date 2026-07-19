import Link from "next/link";

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
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-content items-center justify-between px-7 py-4">
        <Link href="/" className="flex items-baseline gap-2 font-mono text-sm tracking-wide">
          <span className="inline-block h-[9px] w-[9px] rotate-45 bg-amber" aria-hidden="true" />
          HUGO JERIA STRAUSS
        </Link>
        <nav className="hidden gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-sm text-ink-soft transition-colors hover:text-amber-deep"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
