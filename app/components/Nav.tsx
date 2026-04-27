import { Logo } from "./Logo";
import { NAV_LINKS } from "@/lib/data";

export function Nav() {
  return (
    <nav className="sticky top-0 z-30 grid grid-cols-[auto_1fr] items-center gap-8 border-b border-noir-line bg-noir-bg px-8 py-4 text-noir-fg">
      <Logo style={{ height: 24, width: "auto" }} color="currentColor" />
      <div className="dn-mono hidden justify-end gap-7 text-[12px] uppercase tracking-[.1em] md:flex">
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
    </nav>
  );
}
