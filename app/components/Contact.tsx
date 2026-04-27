"use client";

import { useState, useTransition } from "react";
import { submitQuote } from "../actions";

type Status = "idle" | "ok" | "error";

export function Contact() {
  const [pending, startTransition] = useTransition();
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    startTransition(async () => {
      const result = await submitQuote(data);
      if (result.ok) {
        setStatus("ok");
        setError("");
        form.reset();
      } else {
        setStatus("error");
        setError(result.error);
      }
    });
  }

  return (
    <section
      className="border-t border-noir-line bg-noir-card px-8 py-24 md:py-[100px]"
      id="contacto"
    >
      <div className="dn-mono mb-4 text-[11px] tracking-[.15em] text-noir-mute">
        {"// 05 — CONTACTO"}
      </div>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-[60px]">
        <h2 className="dn-cond m-0 text-[clamp(56px,9vw,96px)] font-extrabold uppercase leading-[.85] tracking-[-.04em]">
          Pedido
          <br />
          <span className="text-[var(--accent)] transition-colors">de</span>
          <br />
          orçamento
        </h2>
        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <label className="contents">
              <span className="sr-only">Nome</span>
              <input className="dn-input" name="nome" placeholder="Nome" autoComplete="name" required />
            </label>
            <label className="contents">
              <span className="sr-only">Empresa</span>
              <input className="dn-input" name="empresa" placeholder="Empresa" autoComplete="organization" />
            </label>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <label className="contents">
              <span className="sr-only">Email</span>
              <input
                className="dn-input"
                name="email"
                type="email"
                placeholder="Email"
                autoComplete="email"
                required
              />
            </label>
            <label className="contents">
              <span className="sr-only">Telefone</span>
              <input className="dn-input" name="telefone" type="tel" placeholder="Telefone" autoComplete="tel" />
            </label>
          </div>
          <label className="contents">
            <span className="sr-only">Mensagem</span>
            <textarea
              className="dn-input dn-mono resize-none text-[13px]"
              name="mensagem"
              rows={5}
              placeholder="// Materiais · quantidades · prazo"
            />
          </label>

          <button
            type="submit"
            disabled={pending}
            className="dn-mono mt-3 cursor-pointer self-start border-0 px-8 py-[18px] text-[13px] font-semibold uppercase tracking-[.1em] transition-colors duration-200 disabled:cursor-progress disabled:opacity-70"
            style={{ background: "var(--accent)", color: "var(--accent-text)" }}
          >
            {pending ? "A enviar…" : "Enviar →"}
          </button>

          {status === "ok" ? (
            <p className="dn-mono text-[12px] tracking-[.1em] text-[var(--accent)]">
              ✓ Pedido recebido — vamos responder em breve.
            </p>
          ) : null}
          {status === "error" ? (
            <p className="dn-mono text-[12px] tracking-[.1em] text-[#ff7a7a]">{error}</p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
