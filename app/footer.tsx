import Link from "next/link";
import Logo from "./logo";
import { nav, privacyPath, site } from "./site";

const heading = "font-display text-xs font-bold uppercase tracking-[0.14em] text-plate/60";
const link = "navlink inline-block py-1.5";

export default function Footer() {
  const legal = [site.owner, site.ico && `IČO ${site.ico}`, site.address, site.register].filter(Boolean).join(" · ");
  return (
    <footer className="font-display bg-[#0c0e10] text-sm text-plate/75">
      <div className="temper" />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link href="/#top" className="brand inline-flex items-center gap-2.5 text-lg font-extrabold tracking-tight text-plate [font-stretch:118%]"><Logo className="size-7 shrink-0" />WELDING VLČEK</Link>
          <p className="mt-3 max-w-[34ch] font-body text-base text-plate/70">Svařování, zámečnická výroba a technická řešení na míru. Když na provedení záleží.</p>
        </div>
        <nav aria-label="Navigace v patičce">
          <p className={heading}>Web</p>
          <ul className="mt-3">
            {nav.map(([h, t]) => (
              <li key={h}><Link href={h} className={link}>{t}</Link></li>
            ))}
            <li><Link href={privacyPath} className={link}>Ochrana osobních údajů</Link></li>
          </ul>
        </nav>
        <div>
          <p className={heading}>Kontakt</p>
          <ul className="mt-3">
            <li><a href={`mailto:${site.email}`} className={`${link} font-semibold text-plate`}>{site.email}</a></li>
            {site.phone && <li><a href={`tel:${site.phone.replace(/\s/g, "")}`} className={`${link} font-semibold text-plate`}>{site.phone}</a></li>}
            {site.instagram && <li><a href={site.instagram} target="_blank" rel="noopener noreferrer" className={link}>Instagram</a></li>}
            {site.facebook && <li><a href={site.facebook} target="_blank" rel="noopener noreferrer" className={link}>Facebook</a></li>}
            <li><Link href="/#kontakt" className={link}>Poptat zakázku</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-plate/10">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-x-6 gap-y-2 px-4 py-6 text-[0.8125rem] text-plate/60 sm:px-6">
          <span>{legal}</span>
          <span>© {new Date().getFullYear()} {site.name}</span>
        </div>
        <div className="mx-auto max-w-6xl px-4 pb-6 text-xs text-plate/60 sm:px-6">
          Web vytvořil <a href="https://fkuroshiro.dev" target="_blank" rel="noopener" className="navlink py-1 underline underline-offset-2">fkuroshiro.dev</a>
        </div>
      </div>
    </footer>
  );
}
