"use client";

import { Mixer } from "./Mixer";
import { useColor } from "./ColorProvider";
import { METRICS } from "@/lib/data";

export function Hero() {
  const { r, g, b } = useColor();
  return (
    <section className="dn-grid-bg px-8 py-[60px]" id="misturador">
      <div className="dn-mono mb-6 flex justify-between text-[11px] tracking-[.15em] text-noir-mute">
        <span>{"// 01 — INDEX"}</span>
        <span>
          RGB · {r}, {g}, {b}
        </span>
      </div>
      <div className="grid items-stretch gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <h1 className="dn-cond m-0 text-[clamp(64px,11vw,168px)] font-extrabold uppercase leading-[.82] tracking-[-.04em]">
            Misture
            <br />
            <span className="text-[var(--accent)] transition-colors duration-150">a sua</span>
            <br />
            <span className="inline-block border-b-[8px] border-current pb-[6px]">cor</span>.
          </h1>
          <p className="mt-8 max-w-[540px] text-[18px] leading-[1.55] text-noir-soft">
            Tintas, vernizes, esmaltes e materiais de construção em Ribeira Brava, Madeira. CIN,
            Robbialac, Mirka, Titan e Veneziani. Misturamos a cor, fornecemos a obra.
          </p>
        </div>
        <Mixer />
      </div>

      <div className="mt-14 grid grid-cols-2 border-y border-noir-line md:grid-cols-4">
        {METRICS.map((m, i) => (
          <div
            key={m.label}
            className={`px-6 py-7 ${i < 3 ? "border-b border-noir-line md:border-b-0 md:border-r" : ""} ${i === 0 || i === 1 ? "border-r border-noir-line md:border-r" : ""}`}
          >
            <div className="dn-cond text-[clamp(40px,5vw,56px)] font-extrabold leading-[1] tracking-[-.02em]">
              {m.value}
            </div>
            <div className="dn-mono mt-1 text-[11px] uppercase tracking-[.1em] text-noir-mute">
              {"// "}
              {m.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
