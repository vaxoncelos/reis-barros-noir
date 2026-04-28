"use client";

import Image from "next/image";
import { Mixer } from "./Mixer";
import { useColor } from "./ColorProvider";
import { METRICS } from "@/lib/data";

export function Hero() {
  const { r, g, b } = useColor();
  return (
    <section className="dn-grid-bg px-5 py-12 sm:px-8 md:py-[60px]">
      <div className="dn-mono mb-6 flex justify-between text-[11px] tracking-[.15em] text-noir-mute">
        <span>{"// 01 — INDEX"}</span>
        <span>
          RGB · {r}, {g}, {b}
        </span>
      </div>
      <div className="grid items-stretch gap-8 md:gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div className="flex flex-col justify-between gap-8 md:gap-10">
          <div>
            <h1 className="dn-cond m-0 text-[clamp(48px,9.5vw,144px)] font-extrabold uppercase leading-[.86] tracking-[-.04em]">
              Construa,
              <br />
              <span className="text-[var(--accent)] transition-colors duration-150">Renove,</span>
              <br />
              Proteja.
            </h1>
            <p className="dn-cond mt-5 max-w-[560px] text-[clamp(20px,2.6vw,30px)] font-medium leading-[1.15] tracking-[-.01em] text-noir-fg md:mt-6">
              A sua parceria de confiança{" "}
              <span className="inline-block border-b-[3px] border-current pb-[2px] md:border-b-[4px]">
                na Madeira
              </span>
              .
            </p>
          </div>
          <p className="max-w-[540px] text-[15px] leading-[1.6] text-noir-soft md:text-[17px]">
            Desde 1999, fornecemos tintas, ferramentas e materiais de construção de alta qualidade
            para projectos que transformam a nossa ilha.
          </p>
        </div>

        <figure className="relative h-[260px] w-full overflow-hidden border border-noir-line sm:h-[360px] lg:h-auto lg:min-h-0">
          <Image
            src="/storefront.jpg"
            alt="Loja Reis & Barros em Ribeira Brava — montra com tintas, ferramentas e iluminação de Natal"
            fill
            priority
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
          <figcaption className="dn-mono absolute bottom-4 left-4 right-4 flex items-end justify-between text-[11px] uppercase tracking-[.2em] text-white/85">
            <span>{"// LOJA · RIBEIRA BRAVA"}</span>
            <span className="text-[var(--accent)]">● ABERTA</span>
          </figcaption>
        </figure>
      </div>

      <div className="mt-10 grid grid-cols-2 border-y border-noir-line md:mt-14 md:grid-cols-4">
        {METRICS.map((m, i) => (
          <div
            key={m.label}
            className={`px-4 py-5 sm:px-6 sm:py-7 ${i < 3 ? "border-b border-noir-line md:border-b-0 md:border-r" : ""} ${i === 0 || i === 1 ? "border-r border-noir-line md:border-r" : ""}`}
          >
            <div className="dn-cond text-[clamp(32px,5vw,56px)] font-extrabold leading-[1] tracking-[-.02em]">
              {m.value}
            </div>
            <div className="dn-mono mt-1 text-[10px] uppercase tracking-[.1em] text-noir-mute sm:text-[11px]">
              {"// "}
              {m.label}
            </div>
          </div>
        ))}
      </div>

      <div
        id="misturador"
        className="mt-12 grid items-start gap-8 md:mt-14 md:gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16"
      >
        <div>
          <div className="dn-mono text-[11px] uppercase tracking-[.2em] text-noir-mute">
            {"// 02 — MISTURADOR"}
          </div>
          <h2 className="dn-cond mt-3 text-[clamp(36px,6vw,72px)] font-extrabold uppercase leading-[.9] tracking-[-.03em]">
            Encontre a cor
            <br />
            <span className="text-[var(--accent)]">antes</span> da obra.
          </h2>
          <p className="mt-5 max-w-[480px] text-[15px] leading-[1.55] text-noir-soft md:mt-6 md:text-[16px]">
            Mexa nos canais RGB, escolha um tom da nossa paleta de marcas ou guarde a sua cor —
            depois passe na loja e nós misturamos exactamente essa.
          </p>
        </div>
        <Mixer />
      </div>
    </section>
  );
}
