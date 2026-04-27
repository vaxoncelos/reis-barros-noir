"use client";

import { useColor } from "./ColorProvider";
import { BRAND_CHIPS } from "@/lib/data";
import { hexToRgb, type RGB } from "@/lib/color";

const CHANNEL_GRADIENT: Record<"r" | "g" | "b", string> = {
  r: "linear-gradient(to right, var(--noir-channel-base), #FF0000)",
  g: "linear-gradient(to right, var(--noir-channel-base), #00FF00)",
  b: "linear-gradient(to right, var(--noir-channel-base), #0000FF)",
};

const CHANNEL_LABEL: Record<"r" | "g" | "b", string> = {
  r: "Vermelho",
  g: "Verde",
  b: "Azul",
};

export function Mixer() {
  const { r, g, b, hex, text, light, setRGB, setHex } = useColor();
  const channels: Array<["r" | "g" | "b", number]> = [
    ["r", r],
    ["g", g],
    ["b", b],
  ];
  const avg = Math.round((r + g + b) / 3)
    .toString()
    .padStart(3, "0");

  return (
    <div className="flex flex-col gap-[18px] border border-noir-line p-6">
      <div className="dn-mono flex justify-between text-[11px] uppercase tracking-[.2em] text-noir-mute">
        <span>{"// MISTURADOR"}</span>
        <span className="text-[var(--accent)] transition-colors">● LIVE</span>
      </div>

      <div
        className="relative aspect-[16/10] overflow-hidden transition-colors duration-150"
        style={{ background: hex }}
      >
        <div
          className="dn-cond absolute bottom-[18px] left-[18px] text-[clamp(40px,5vw,56px)] font-extrabold uppercase leading-[.9] tracking-[-.02em]"
          style={{ color: text }}
        >
          {hex}
        </div>
        <div
          className="dn-mono absolute right-[18px] top-[18px] text-[11px] tracking-[.15em]"
          style={{ color: light ? "rgba(14,14,14,.65)" : "rgba(232,229,220,.65)" }}
        >
          RB · {avg}
        </div>
      </div>

      {channels.map(([k, v]) => (
        <div key={k} className="grid grid-cols-[20px_1fr_44px] items-center gap-4">
          <span className="dn-mono text-[12px] text-noir-mute">{k.toUpperCase()}</span>
          <div className="relative h-7">
            <div
              className="pointer-events-none absolute inset-0"
              style={{ background: CHANNEL_GRADIENT[k] }}
            />
            <input
              type="range"
              min={0}
              max={255}
              value={v}
              aria-label={CHANNEL_LABEL[k]}
              onChange={(e) => setRGB({ [k]: Number(e.target.value) } as Partial<RGB>)}
              className="dn-slider absolute inset-0 w-full"
            />
          </div>
          <span className="dn-mono text-right text-[13px] text-noir-fg">{v}</span>
        </div>
      ))}

      <div className="grid grid-cols-2 gap-2">
        {BRAND_CHIPS.map((chip) => {
          const rgb = hexToRgb(chip.hex);
          const isLightChip = 0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b > 160;
          return (
            <button
              key={chip.hex}
              type="button"
              onClick={() => setHex(chip.hex)}
              className="dn-mono cursor-pointer border-0 px-3 py-[10px] text-left text-[11px] uppercase tracking-[.1em]"
              style={{
                background: chip.hex,
                color: isLightChip ? "#0E0E0E" : "#E8E5DC",
              }}
            >
              ↳ {chip.name}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-2 gap-2">
        <button
          type="button"
          className="dn-mono cursor-pointer border-0 p-4 text-[12px] font-semibold uppercase tracking-[.1em] transition-colors duration-200"
          style={{ background: hex, color: text }}
        >
          Encomendar 1L →
        </button>
        <button
          type="button"
          className="dn-mono cursor-pointer border border-noir-line bg-transparent p-4 text-[12px] font-semibold uppercase tracking-[.1em] text-noir-fg hover:border-[var(--accent)]"
        >
          Guardar cor
        </button>
      </div>
    </div>
  );
}
