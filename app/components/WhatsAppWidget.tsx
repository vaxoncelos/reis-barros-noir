"use client";

import { useEffect, useRef, useState } from "react";
import { WHATSAPP } from "@/lib/data";

const BRAND = "#25D366";

export function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(WHATSAPP.greeting);
  const popupRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    function onClick(e: MouseEvent) {
      const t = e.target as Node;
      if (popupRef.current?.contains(t)) return;
      if (buttonRef.current?.contains(t)) return;
      setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  function send() {
    const text = encodeURIComponent(message.trim() || WHATSAPP.greeting);
    const url = `https://wa.me/${WHATSAPP.number}?text=${text}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setOpen(false);
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open ? (
        <div
          ref={popupRef}
          role="dialog"
          aria-label="Enviar mensagem por WhatsApp"
          className="w-[320px] border border-noir-line bg-noir-card text-noir-fg shadow-[0_24px_60px_rgba(0,0,0,.45)]"
        >
          <header
            className="flex items-center justify-between px-4 py-3"
            style={{ background: BRAND, color: "#0e0e0e" }}
          >
            <div className="flex items-center gap-2">
              <WhatsAppIcon size={18} />
              <span className="dn-mono text-[11px] font-semibold uppercase tracking-[.12em]">
                Reis &amp; Barros
              </span>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Fechar"
              className="dn-mono cursor-pointer border-0 bg-transparent text-[14px] leading-none text-[#0e0e0e]"
            >
              ✕
            </button>
          </header>
          <div className="px-4 pb-4 pt-3">
            <p className="dn-mono text-[11px] uppercase tracking-[.1em] text-noir-mute">
              ↳ {WHATSAPP.display}
            </p>
            <p className="mt-2 text-[13px] leading-[1.5] text-noir-soft">
              Olá! Em que podemos ajudar? Envie a sua mensagem e respondemos em horário de loja.
            </p>
            <label className="mt-3 block">
              <span className="sr-only">Mensagem</span>
              <textarea
                className="dn-input dn-mono mt-0 resize-none text-[12px]"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </label>
            <button
              type="button"
              onClick={send}
              className="dn-mono mt-3 flex w-full cursor-pointer items-center justify-center gap-2 border-0 px-4 py-3 text-[12px] font-semibold uppercase tracking-[.1em]"
              style={{ background: BRAND, color: "#0e0e0e" }}
            >
              <WhatsAppIcon size={14} />
              Abrir no WhatsApp →
            </button>
          </div>
        </div>
      ) : null}

      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Fechar WhatsApp" : "Abrir WhatsApp"}
        aria-expanded={open}
        className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border-0 shadow-[0_12px_32px_rgba(0,0,0,.35)] transition-transform hover:scale-[1.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
        style={{ background: BRAND, color: "#0e0e0e" }}
      >
        {open ? (
          <span className="text-[20px] font-bold leading-none">✕</span>
        ) : (
          <WhatsAppIcon size={28} />
        )}
      </button>
    </div>
  );
}

function WhatsAppIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.11 4.91A9.82 9.82 0 0 0 12.05 2C6.6 2 2.18 6.42 2.18 11.86c0 1.74.46 3.43 1.32 4.93L2.1 22l5.34-1.4a9.83 9.83 0 0 0 4.6 1.17h.01c5.45 0 9.87-4.42 9.87-9.86 0-2.64-1.03-5.12-2.81-6.99zM12.05 20.1h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.17.83.85-3.09-.2-.32a8.16 8.16 0 0 1-1.25-4.34c0-4.52 3.69-8.2 8.22-8.2 2.2 0 4.26.85 5.81 2.4a8.13 8.13 0 0 1 2.41 5.8c0 4.53-3.69 8.21-8.22 8.21zm4.5-6.15c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.56.13-.16.25-.64.8-.78.97-.14.16-.29.18-.54.06-.25-.12-1.04-.38-1.99-1.22-.73-.65-1.23-1.45-1.37-1.7-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.49-.41-.42-.56-.43h-.48c-.16 0-.43.06-.66.31-.23.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.54.12.16 1.74 2.66 4.21 3.73.59.25 1.05.41 1.41.52.59.19 1.13.16 1.55.1.47-.07 1.46-.6 1.66-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29z" />
    </svg>
  );
}
