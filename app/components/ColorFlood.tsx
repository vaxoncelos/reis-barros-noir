"use client";

import { useColor } from "./ColorProvider";

const SPECS: Array<{ label: string; value: string }> = [
  { label: "Acabamento", value: "Mate · Acetinado · Brilho" },
  { label: "Embalagens", value: "0.75L · 5L · 15L" },
  { label: "Aplicação", value: "Interior · Exterior · Naval" },
];

export function ColorFlood() {
  const { hex, text, light } = useColor();
  const borderColor = light ? "rgba(14,14,14,.2)" : "rgba(232,229,220,.2)";
  const muteColor = light ? "rgba(14,14,14,.65)" : "rgba(232,229,220,.65)";

  return (
    <section
      className="relative overflow-hidden px-5 py-16 transition-colors duration-150 sm:px-8 md:py-[120px]"
      style={{ background: hex, color: text }}
    >
      <div
        className="dn-mono mb-3 text-[11px] uppercase tracking-[.15em] md:mb-4"
        style={{ color: muteColor }}
      >
        {"// 04 — A SUA COR, EM ESCALA"}
      </div>
      <h2 className="dn-cond m-0 text-[clamp(56px,13vw,200px)] font-extrabold uppercase leading-[.85] tracking-[-.04em]">
        {hex}
      </h2>
      <div
        className="mt-8 grid grid-cols-1 gap-6 border-t pt-6 sm:gap-8 sm:pt-8 md:mt-10 md:grid-cols-3"
        style={{ borderColor }}
      >
        {SPECS.map((s) => (
          <div key={s.label}>
            <div
              className="dn-mono text-[11px] uppercase tracking-[.15em]"
              style={{ opacity: 0.65 }}
            >
              {s.label}
            </div>
            <div className="dn-cond mt-2 text-[20px] font-bold sm:text-[24px] md:text-[32px]">
              {s.value}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
