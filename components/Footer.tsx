import { profile } from "@/lib/profile";

export default function Footer() {
  return (
    <footer className="border-t border-line py-9">
      <div className="mx-auto flex max-w-content flex-wrap items-center justify-between gap-3 px-7">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono text-xs text-muted">
          Helping AI systems understand food with real-world culinary expertise.
        </p>
      </div>
    </footer>
  );
}
