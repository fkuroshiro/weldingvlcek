"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./logo";
import { nav } from "./site";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const mq = window.matchMedia("(min-width: 768px)");
    const onWide = () => mq.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onWide);
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onWide);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-ink/90 text-plate backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link href="/#top" onClick={close} className="brand font-display flex items-center gap-2 whitespace-nowrap text-base font-extrabold tracking-tight [font-stretch:118%] sm:gap-2.5 sm:text-lg">
          <Logo className="size-7 shrink-0" />
          WELDING VLČEK
        </Link>
        <nav className="font-display hidden gap-7 text-sm font-medium md:flex" aria-label="Hlavní navigace">
          {nav.map(([h, t]) => (
            <Link key={h} href={h} className="navlink py-2">{t}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/#kontakt" onClick={close} className="btn font-display hidden whitespace-nowrap rounded-sm bg-straw px-3 py-2.5 text-sm font-bold text-ink min-[420px]:block sm:px-4">
            Poptat zakázku
          </Link>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-sm md:hidden"
            aria-expanded={open}
            aria-controls={open ? "mobilni-menu" : undefined}
            aria-label={open ? "Zavřít menu" : "Otevřít menu"}
            onClick={() => setOpen(!open)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>
      <div className="temper" />
      {open && (
        <nav id="mobilni-menu" className="font-display border-b border-plate/10 bg-ink md:hidden" aria-label="Mobilní navigace">
          <ul className="mx-auto max-w-6xl px-4 py-2 sm:px-6">
            {nav.map(([h, t]) => (
              <li key={h} className="border-b border-plate/10">
                <Link href={h} onClick={close} className="block py-4 text-lg font-bold">{t}</Link>
              </li>
            ))}
            <li className="py-4">
              <Link href="/#kontakt" onClick={close} className="block rounded-sm bg-straw px-6 py-3.5 text-center font-bold text-ink">Poptat zakázku</Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
