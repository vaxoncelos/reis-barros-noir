import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="dn-mono flex flex-col items-start gap-4 border-t border-noir-line bg-noir-bg p-8 text-[11px] uppercase tracking-[.1em] text-noir-mute md:flex-row md:items-center md:justify-between">
      <Logo style={{ height: 18, width: "auto", color: "var(--color-noir-fg)" }} color="currentColor" />
      <div>© 2026 Reis &amp; Barros · Madeira</div>
      <div>
        <a href="#privacidade" className="hover:text-noir-fg">Privacidade</a>
        {" · "}
        <a href="#termos" className="hover:text-noir-fg">Termos</a>
      </div>
    </footer>
  );
}
