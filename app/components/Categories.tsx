import { PRODUCT_CATEGORIES } from "@/lib/data";

export function Categories() {
  return (
    <section
      className="border-t border-noir-line px-5 py-16 sm:px-8 md:py-[100px]"
      id="catálogo"
    >
      <div className="dn-mono mb-3 text-[11px] tracking-[.15em] text-noir-mute md:mb-4">
        {"// 02 — CATÁLOGO"}
      </div>
      <h2 className="dn-cond m-0 mb-8 text-[clamp(40px,8vw,80px)] font-extrabold uppercase tracking-[-.03em] md:mb-12">
        O que <span className="text-[var(--accent)] transition-colors duration-200">fornecemos</span>
      </h2>
      <div className="grid grid-cols-1 gap-px border border-noir-line bg-noir-line sm:grid-cols-2 lg:grid-cols-4">
        {PRODUCT_CATEGORIES.map((c, i) => (
          <article
            key={c.id}
            className="dn-cat group flex min-h-[180px] cursor-pointer flex-col justify-between gap-6 border-2 border-transparent bg-noir-bg p-5 transition-colors sm:min-h-[240px] sm:p-7"
          >
            <div className="dn-mono dn-cat-num text-[11px] tracking-[.15em] text-noir-mute transition-colors sm:text-[12px]">
              {String(i + 1).padStart(2, "0")} / {String(PRODUCT_CATEGORIES.length).padStart(2, "0")}
            </div>
            <div>
              <div className="dn-cond text-[24px] font-bold uppercase leading-[1] tracking-[-.01em] sm:text-[28px] md:text-[32px]">
                {c.name}
              </div>
              <div className="dn-mono mt-3 text-[11px] leading-[1.5] text-noir-mute">{c.desc}</div>
            </div>
            <div className="dn-mono flex justify-between text-[11px] uppercase tracking-[.15em] text-noir-mute">
              <span>Ver gama</span>
              <span>→</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
