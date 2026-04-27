# Reis & Barros — Cromia Noir

Homepage for **Reis & Barros**, a paint & construction-materials retailer in Madeira, Portugal. Implementation of *Direction D — "Cromia Noir"* from the Claude Design handoff: a dark/industrial chassis with a **live RGB mixer** that floods the whole page in the user's mixed color in real time.

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (CSS-first `@theme` config)
- `next/font/google` — Inter Tight / JetBrains Mono / Fraunces
- Server Action (stub) for the contact form

## Run locally

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000.

## How the live color flood works

A single `ColorProvider` client component owns the `{ r, g, b }` state and exposes both a Context (for components that print the literal hex string — `Nav`, `Hero`, `Mixer`, `ColorFlood`) and CSS custom properties (`--accent`, `--accent-text`) on a wrapping element. Most surfaces consume the color purely via `var(--accent)` so a slider drag triggers only a CSS-variable update, not a React re-render. Smooth color transitions live in `globals.css` (`transition: background-color .15s, color .15s`).

## Deploy to Vercel

The project is zero-config for Vercel. Push to GitHub, then import at https://vercel.com/new — Vercel auto-detects Next.js. No environment variables required for the current scope.

## Wiring the contact form

The Server Action in `app/actions.ts` currently logs the submission to the server console. To wire a real provider:

```ts
// inside submitQuote
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);
await resend.emails.send({
  from: "Reis & Barros <noreply@reisbarros.pt>",
  to: "geral@reisbarros.pt",
  subject: `Pedido de orçamento — ${payload.nome}`,
  text: JSON.stringify(payload, null, 2),
});
```

Add `RESEND_API_KEY` in the Vercel project settings.

## Project layout

```
app/
  components/   ColorProvider, Mixer, Hero, Categories, ColorFlood, Locations, Contact, Nav, Ticker, Footer, Logo
  actions.ts    submitQuote — Server Action
  layout.tsx    fonts + metadata
  page.tsx      composes the homepage inside <ColorProvider>
  globals.css   Tailwind v4 theme + slider/marquee + accent transitions
lib/
  color.ts      rgbToHex / luma / contrastText
  data.ts       PRODUCT_CATEGORIES / LOCATIONS / NAV_LINKS / METRICS / TICKER_MESSAGES / BRAND_CHIPS
```
