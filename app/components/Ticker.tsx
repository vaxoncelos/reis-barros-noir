import { TICKER_MESSAGES } from "@/lib/data";

export function Ticker() {
  const stream = [...TICKER_MESSAGES, ...TICKER_MESSAGES];
  return (
    <div className="dn-ticker overflow-hidden border-b border-noir-bg py-[10px]">
      <div className="dn-marquee dn-mono flex gap-[60px] whitespace-nowrap text-[12px] font-semibold uppercase tracking-[.1em]">
        {Array.from({ length: 2 }).map((_, k) => (
          <div className="flex shrink-0 gap-[60px]" key={k}>
            {stream.map((msg, i) => (
              <span key={`${k}-${i}`}>● {msg}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
