"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

function readTheme(): Theme {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    setTheme(readTheme());
  }, []);

  function toggle() {
    const next: Theme = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("rb-theme", next);
    } catch {}
  }

  const label = theme === "light" ? "DARK" : "LIGHT";
  const glyph = theme === "light" ? "◐" : "◑";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Mudar para tema ${label.toLowerCase()}`}
      className="dn-theme-toggle dn-mono text-[11px] uppercase tracking-[.1em]"
    >
      <span aria-hidden="true">{glyph}</span>
      <span>{label}</span>
    </button>
  );
}
