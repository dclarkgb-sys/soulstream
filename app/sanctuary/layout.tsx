import type { ReactNode } from "react";
import Link from "next/link";

export default function SanctuaryLayout({ children }: { children: ReactNode }) {
  const links = [
    { href: "/sanctuary", label: "Sacred Library" },
    { href: "/sanctuary/frequencies", label: "Frequencies" },
    { href: "/sanctuary/music", label: "Music" },
    { href: "/sanctuary/healing", label: "Healing" },
    { href: "/sanctuary/chakras", label: "Chakras" },
    { href: "/sanctuary/manifestation", label: "Manifestation" },
  ];

  return (
    <div className="min-h-screen bg-cinematic text-slate-100">
      <header className="border-b border-white/10 bg-gradient-to-r from-purple-900/40 via-slate-900/40 to-emerald-900/40 backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.4)]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="text-sm font-semibold tracking-[0.25em] uppercase text-slate-300 bloom"
          >
            SoulStream™ Sanctuary
          </Link>

          <nav className="flex flex-wrap gap-4 text-xs font-medium">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-300 hover:text-emerald-300 transition-all duration-300 hover:tracking-[0.15em] hover:scale-105"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10 animate-fade-in">
        {children}
      </main>
    </div>
  );
}
