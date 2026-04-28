"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { NAV_LINKS } from "@/lib/data";

export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <nav className="sticky top-0 z-30 grid grid-cols-[auto_1fr] items-center gap-4 border-b border-noir-line bg-noir-bg px-5 py-3 text-noir-fg sm:gap-8 sm:px-8 sm:py-4">
      <Logo style={{ height: 44, width: "auto" }} color="currentColor" />

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

      <button
        type="button"
        aria-label="Abrir menu"
        aria-expanded={open}
        aria-controls="mobile-drawer"
        onClick={() => setOpen(true)}
        className="dn-mono ml-auto inline-flex h-10 w-10 items-center justify-center border border-noir-line text-noir-fg transition-colors hover:border-[var(--accent)] md:hidden"
      >
        <span className="sr-only">Menu</span>
        <span aria-hidden className="flex flex-col gap-[5px]">
          <span className="block h-[1.5px] w-5 bg-current" />
          <span className="block h-[1.5px] w-5 bg-current" />
          <span className="block h-[1.5px] w-5 bg-current" />
        </span>
      </button>

      <div
        className={`fixed inset-0 z-40 md:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <button
          type="button"
          aria-label="Fechar menu"
          tabIndex={open ? 0 : -1}
          onClick={() => setOpen(false)}
          className={`absolute inset-0 cursor-default bg-black/60 transition-opacity duration-200 ${open ? "opacity-100" : "opacity-0"}`}
        />

        <aside
          id="mobile-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className={`absolute right-0 top-0 flex h-full w-[86%] max-w-[380px] flex-col border-l border-noir-line bg-noir-bg text-noir-fg transition-transform duration-300 ease-out ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex items-center justify-between border-b border-noir-line px-6 py-4">
            <span className="dn-mono text-[11px] uppercase tracking-[.2em] text-noir-mute">
              {"// MENU"}
            </span>
            <button
              type="button"
              aria-label="Fechar menu"
              onClick={() => setOpen(false)}
              className="dn-mono inline-flex h-10 w-10 items-center justify-center border border-noir-line text-noir-fg transition-colors hover:border-[var(--accent)]"
            >
              <span aria-hidden className="relative block h-5 w-5">
                <span className="absolute left-0 top-1/2 block h-[1.5px] w-5 -translate-y-1/2 rotate-45 bg-current" />
                <span className="absolute left-0 top-1/2 block h-[1.5px] w-5 -translate-y-1/2 -rotate-45 bg-current" />
              </span>
            </button>
          </div>

          <ul className="dn-cond flex flex-1 flex-col px-6 py-4">
            {NAV_LINKS.map((link, i) => (
              <li key={link} className="border-b border-noir-line last:border-b-0">
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="group flex items-baseline justify-between py-5 text-[40px] font-extrabold uppercase leading-none tracking-[-.02em] text-noir-fg no-underline outline-none transition-colors hover:text-[var(--accent)] focus-visible:text-[var(--accent)]"
                >
                  <span>{link}</span>
                  <span className="dn-mono text-[11px] tracking-[.2em] text-noir-mute transition-colors group-hover:text-[var(--accent)] group-focus-visible:text-[var(--accent)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="dn-mono border-t border-noir-line px-6 py-4 text-[11px] uppercase tracking-[.2em] text-noir-mute">
            <div>Reis & Barros</div>
            <div className="mt-1 text-noir-soft">Ribeira Brava · Madeira</div>
          </div>
        </aside>
      </div>
    </nav>
  );
}
