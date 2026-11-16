"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { img } from "./img";

const photos = [
  { f: "zabradli", alt: "Černé zábradlí na schodišti" },
  { f: "zabradli3", alt: "Schodiště s černým zábradlím ze svislých prutů" },
  { f: "mriz", alt: "Mřížové dveře osazené ve sklepě" },
  { f: "poklop", alt: "Otevřený poklop sklepního vstupu z rýhovaného plechu" },
  { f: "pristresek", alt: "Ocelový přístřešek na konzolách u zdi" },
  { f: "rampy", alt: "Dvě ocelové nájezdové rampy" },
  { f: "konstrukce", alt: "Svařovaný ocelový rám z profilů" },
  { f: "rozen", alt: "Ocelový stojan s rožněm a motorem" },
  { f: "stojan", alt: "Pojízdný ocelový stojan s červeným sloupkem" },
  { f: "zabradli2", alt: "Zábradlí schodiště z horizontálních prutů" },
  { f: "poklop2", alt: "Uzavřený poklop zapuštěný do dlažby" },
  { f: "ram", alt: "Mřížové dveře před osazením v dílně" },
  { f: "ram-dlouhy", alt: "Dlouhý svařovaný rám na stojanech v dílně" },
  { f: "pole", alt: "Svařené pole z ocelových prutů na stojanech" },
  { f: "vez", alt: "Vysoká svařovaná konstrukce z ocelových profilů" },
  { f: "rost", alt: "Svařovaný rošt na svářečském stole" },
  { f: "dvere", alt: "Plechové dveře a ocelový rám opřené o stěnu" },
  { f: "zabradli4", alt: "Pohled na schodiště se zábradlím ze svislých prutů" },
];
const FIRST = 12;

const ctl = "grid size-12 place-items-center rounded-full bg-ink/70 text-plate backdrop-blur hover:bg-ink hover:text-straw";
const icon = { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2.25, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true } as const;

export default function Gallery() {
  const dlg = useRef<HTMLDialogElement>(null);
  const touchX = useRef<number | null>(null);
  const [i, setI] = useState<number | null>(null);
  const [all, setAll] = useState(false);
  const p = i === null ? null : photos[i];
  const step = (d: number) => setI((c) => (c === null ? c : (c + d + photos.length) % photos.length));
  const close = () => dlg.current?.close();

  return (
    <>
      <ul data-reveal className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
        {(all ? photos : photos.slice(0, FIRST)).map((ph, n) => (
          <li key={ph.f}>
            <button
              type="button"
              className="tile relative block aspect-square w-full cursor-zoom-in overflow-hidden rounded-sm bg-mill ring-1 ring-plate/10"
              aria-label={`Zvětšit: ${ph.alt}`}
              onClick={() => { setI(n); dlg.current?.showModal(); }}
            >
              <Image className="shot object-cover" src={img(`t-${ph.f}.webp`)} alt={ph.alt} fill sizes="(min-width:1152px) 357px, (min-width:768px) 33vw, 50vw" />
            </button>
          </li>
        ))}
      </ul>
      {!all && (
        <p className="mt-8 text-center">
          <button type="button" onClick={() => setAll(true)} className="btn font-display rounded-sm border-2 border-plate/50 px-6 py-3 font-bold hover:border-plate hover:bg-plate hover:text-ink">
            Zobrazit další realizace ({photos.length - FIRST})
          </button>
        </p>
      )}
      <dialog
        ref={dlg}
        aria-label="Zvětšená fotografie"
        className="lightbox"
        onClose={() => setI(null)}
        onClick={(e) => e.target === e.currentTarget && close()}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") step(1);
          if (e.key === "ArrowLeft") step(-1);
        }}
        onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          touchX.current = null;
          if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
        }}
      >
        {p && (
          <>
            <figure className="pointer-events-none flex h-full flex-col items-center justify-center gap-3 px-3 pb-20 pt-16 sm:px-20 sm:pb-16">
              {/* eslint-disable-next-line @next/next/no-img-element -- plain img: sizes itself to the viewport, no layout shift to guard against in a modal */}
              <img key={p.f} src={img(`g-${p.f}.webp`)} alt={p.alt} className="pointer-events-auto max-h-full min-h-0 w-auto max-w-full rounded-sm object-contain" />
              <figcaption className="font-display pointer-events-auto max-w-full text-balance text-center text-sm text-plate/80">
                {p.alt} <span className="text-plate/50">· {i! + 1} / {photos.length}</span>
              </figcaption>
            </figure>
            <button type="button" onClick={close} aria-label="Zavřít" className={`${ctl} absolute right-3 top-3 sm:right-5 sm:top-5`}>
              <svg {...icon}><path d="M6 6l12 12M18 6L6 18" /></svg>
            </button>
            <button type="button" onClick={() => step(-1)} aria-label="Předchozí fotografie" className={`${ctl} absolute bottom-3 left-3 sm:bottom-auto sm:left-5 sm:top-1/2 sm:-translate-y-1/2`}>
              <svg {...icon}><path d="M15 5l-7 7 7 7" /></svg>
            </button>
            <button type="button" onClick={() => step(1)} aria-label="Další fotografie" className={`${ctl} absolute bottom-3 right-3 sm:bottom-auto sm:right-5 sm:top-1/2 sm:-translate-y-1/2`}>
              <svg {...icon}><path d="M9 5l7 7-7 7" /></svg>
            </button>
          </>
        )}
      </dialog>
    </>
  );
}
