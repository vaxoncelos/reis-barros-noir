"use server";

export type QuoteResult = { ok: true } | { ok: false; error: string };

export async function submitQuote(formData: FormData): Promise<QuoteResult> {
  const payload = {
    nome: String(formData.get("nome") || ""),
    empresa: String(formData.get("empresa") || ""),
    email: String(formData.get("email") || ""),
    telefone: String(formData.get("telefone") || ""),
    mensagem: String(formData.get("mensagem") || ""),
  };

  if (!payload.nome.trim() || !payload.email.trim()) {
    return { ok: false, error: "Nome e email são obrigatórios." };
  }

  // TODO: wire Resend / SendGrid / form provider here.
  // For now, log to the server console — visible in `pnpm dev` and Vercel logs.
  console.log("[quote]", payload);

  return { ok: true };
}
