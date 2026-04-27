import { BRANDS } from "@/lib/data";

export function Brands() {
  return (
    <section className="border-t border-noir-line bg-noir-card px-8 py-24 md:py-[100px]" id="marcas">
      <div className="dn-mono mb-4 text-[11px] tracking-[.15em] text-noir-mute">
        {"// 03 — MARCAS"}
      </div>
      <h2 className="dn-cond m-0 mb-12 text-[clamp(48px,8vw,80px)] font-extrabold uppercase tracking-[-.03em]">
        Quem <span className="text-[var(--accent)] transition-colors duration-200">representamos</span>
      </h2>
      <div className="grid grid-cols-1 gap-px border border-noir-line bg-noir-line sm:grid-cols-2 lg:grid-cols-5">
        {BRANDS.map((b, i) => (
          <article
            key={b.name}
            className="dn-cat flex min-h-[180px] flex-col justify-between border-2 border-transparent bg-noir-card p-6 transition-colors"
          >
            <div className="dn-mono dn-cat-num text-[11px] tracking-[.15em] text-noir-mute transition-colors">
              {String(i + 1).padStart(2, "0")}
            </div>
            <div>
              <div className="dn-cond text-[24px] font-bold uppercase leading-[1] tracking-[-.01em]">
                {b.name}
              </div>
              <div className="dn-mono mt-3 text-[11px] leading-[1.5] text-noir-mute">{b.focus}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
