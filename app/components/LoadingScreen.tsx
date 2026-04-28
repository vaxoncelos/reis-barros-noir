"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const VISIBLE_MS = 1300;
const FADE_MS = 350;

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const exitTimer = window.setTimeout(() => {
      setLeaving(true);
    }, VISIBLE_MS);

    const removeTimer = window.setTimeout(() => {
      setVisible(false);
    }, VISIBLE_MS + FADE_MS);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed inset-0 z-[100] grid place-items-center bg-noir-bg text-noir-fg transition-opacity duration-300 ease-out ${
        leaving ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <Logo
        color="currentColor"
        className={`rb-loader-logo h-auto w-[min(58vw,260px)] transition-all duration-500 ease-out ${
          leaving ? "scale-95 opacity-0" : "scale-100 opacity-100"
        }`}
      />
      <span className="sr-only">A carregar Reis & Barros</span>
    </div>
  );
}
