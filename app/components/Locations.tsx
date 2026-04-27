import { LOCATIONS } from "@/lib/data";

export function Locations() {
  return (
    <section className="px-8 py-24 md:py-[100px]" id="lojas">
      <div className="dn-mono mb-4 text-[11px] tracking-[.15em] text-noir-mute">
        {"// 04 — LOJAS"}
      </div>
      <h2 className="dn-cond m-0 mb-12 text-[clamp(48px,7vw,72px)] font-extrabold uppercase tracking-[-.03em]">
        Onde estamos
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {LOCATIONS.map((l, i) => (
          <article
            key={l.city}
            className="dn-grid-bg flex min-h-[320px] flex-col justify-between border border-noir-line p-7"
          >
            <div className="dn-mono text-[11px] tracking-[.15em] text-[var(--accent)] transition-colors">
              LOJA · {String(i + 1).padStart(2, "0")}
            </div>
            <div>
              <div className="dn-cond text-[clamp(40px,5vw,56px)] font-extrabold uppercase leading-[.9] tracking-[-.02em]">
                {l.city}
              </div>
              <div className="dn-mono mt-5 text-[12px] leading-[1.7] text-noir-soft">
                <div>↳ {l.addr}</div>
                <div>↳ {l.hours}</div>
                <div className="mt-2 text-[var(--accent)] transition-colors">↳ {l.phone}</div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
