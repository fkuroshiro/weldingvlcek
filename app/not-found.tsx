import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Stránka nenalezena" };

export default function NotFound() {
  return (
    <main id="obsah" className="grain relative bg-mill text-plate">
      <div className="mx-auto flex min-h-[80svh] max-w-6xl flex-col justify-center px-4 pb-20 pt-36 sm:px-6">
        <p className="font-display font-semibold text-straw">Chyba 404</p>
        <h1 className="display mt-4 max-w-3xl text-[clamp(2.4rem,7vw,5rem)]">Tady nic svařeného není.</h1>
        <p className="mt-6 max-w-xl text-lg text-plate/80">Stránka, kterou hledáte, neexistuje nebo byla přesunuta.</p>
        <div className="font-display mt-9 flex flex-wrap gap-3 font-bold">
          <Link href="/" className="btn rounded-sm bg-straw px-6 py-3.5 text-ink">Zpět na úvod</Link>
          <Link href="/#kontakt" className="btn rounded-sm border border-plate/40 px-6 py-3.5 hover:bg-plate/10">Poptat zakázku</Link>
        </div>
      </div>
    </main>
  );
}
