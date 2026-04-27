"use client";

import { Logo } from "./Logo";
import { useColor } from "./ColorProvider";
import { NAV_LINKS } from "@/lib/data";

export function Nav() {
  const { hex } = useColor();
  return (
    <nav className="sticky top-0 z-30 grid grid-cols-[auto_1fr_auto] items-center gap-8 border-b border-noir-line bg-noir-bg px-8 py-4">
      <Logo style={{ height: 24, width: "auto" }} color="#E8E5DC" />
      <div className="dn-mono hidden justify-center gap-7 text-[12px] uppercase tracking-[.1em] md:flex">
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="dn-nav-link border-b border-transparent pb-1 text-noir-fg no-underline outline-none transition-colors focus-visible:border-[var(--accent)]"
          >
            {link}
          </a>
        ))}
      </div>
      <div className="dn-mono text-[11px] uppercase tracking-[.1em] text-[var(--accent)] transition-colors">
        ● LIVE · {hex}
      </div>
    </nav>
  );
}
