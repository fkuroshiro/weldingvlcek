"use client";
import Link from "next/link";
import { useState } from "react";
import { privacyPath, site } from "./site";

const field =
  "w-full rounded-sm border border-plate/25 bg-ink/60 px-4 py-3 text-base font-normal text-plate placeholder:text-plate/55 hover:border-plate/45 focus:border-straw";
const label = "grid gap-1.5 text-sm font-semibold";

// No backend on a static site: the form composes an e-mail in the visitor's own mail client.
// To send directly from the page instead, post to a form service (Web3Forms, Formspree…) here.
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const get = (k: string) => String(d.get(k) ?? "").trim();
    const subject = `Poptávka – ${get("sluzba")}`;
    const body = `Jméno: ${get("jmeno")}\nKontakt: ${get("kontakt")}\nSlužba: ${get("sluzba")}\n\n${get("popis")}\n`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form className="font-display grid gap-5" action={`mailto:${site.email}`} method="post" encType="text/plain" onSubmit={onSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className={label}>Jméno a příjmení<input name="jmeno" required autoComplete="name" className={field} /></label>
        <label className={label}>E-mail nebo telefon<input name="kontakt" required className={field} /></label>
      </div>
      <label className={label}>O jakou službu máte zájem
        <select name="sluzba" className={`${field} select`}>
          <option>Zámečnická výroba a svařování</option>
          <option>Zakázková výroba na míru</option>
          <option>Technologie a poradenství</option>
          <option>Jiné</option>
        </select>
      </label>
      <label className={label}>Popis zakázky
        <textarea name="popis" rows={6} required placeholder="Co potřebujete vyrobit, rozměry, materiál, množství, termín…" className={`${field} min-h-32 resize-y`} />
      </label>
      <p className="-mt-1 text-sm text-plate/65">
        Po odeslání se otevře váš e-mailový program s připravenou zprávou – výkres nebo fotografie k ní můžete rovnou přiložit.
      </p>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
        <button className="btn rounded-sm bg-straw px-7 py-3.5 font-bold text-ink">Odeslat poptávku</button>
        <p className="max-w-[36ch] text-[0.8125rem] leading-snug text-plate/65">
          Údaje použiji jen k vyřízení poptávky. <Link href={privacyPath} className="underline underline-offset-2 hover:text-straw">Ochrana osobních údajů</Link>
        </p>
      </div>
      <p role="status" aria-live="polite" className={sent ? "rounded-sm border border-straw/40 bg-straw/10 px-4 py-3 text-sm text-plate" : "sr-only"}>
        {sent && (
          <>
            Zpráva je připravená ve vašem e-mailovém programu – stačí ji odeslat. Pokud se nic neotevřelo, napište prosím přímo na{" "}
            <a href={`mailto:${site.email}`} className="font-bold text-straw underline underline-offset-2">{site.email}</a>.
          </>
        )}
      </p>
    </form>
  );
}
