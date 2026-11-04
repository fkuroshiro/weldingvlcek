"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { img } from "./img";

const photos = [
  { f: "g-zabradli", alt: "Černé zábradlí na schodišti", w: 975, h: 1300 },
  { f: "g-mriz", alt: "Mřížové dveře osazené ve sklepě", w: 975, h: 1300 },
  { f: "g-poklop", alt: "Otevřený poklop sklepního vstupu z rýhovaného plechu", w: 1300, h: 975 },
  { f: "g-konstrukce", alt: "Svařovaný ocelový rám z profilů", w: 1300, h: 975 },
  { f: "g-ram", alt: "Mřížová brána před osazením v dílně", w: 975, h: 1300 },
  { f: "g-pristresek", alt: "Ocelový přístřešek na konzolách u zdi", w: 975, h: 1300 },
  { f: "g-zabradli2", alt: "Zábradlí schodiště z horizontálních prutů", w: 975, h: 1300 },
  { f: "g-rampy", alt: "Dvě ocelové nájezdové rampy", w: 1300, h: 975 },
  { f: "g-poklop2", alt: "Uzavřený poklop zapuštěný do dlažby", w: 1300, h: 975 },
  { f: "g-rost", alt: "Svařovaný rošt na svářečském stole", w: 1300, h: 975 },
  { f: "g-stojan", alt: "Pojízdný ocelový stojan s červenou ojnicí", w: 975, h: 1300 },
  { f: "g-chevron", alt: "Ocelové profily naskládané do rybí kosti na stole", w: 1300, h: 975 },
];

export default function Gallery() {
  const dlg = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState<(typeof photos)[number] | null>(null);
  return (
    <>
      <ul className="mt-12 columns-2 gap-3 sm:gap-4 md:columns-3 [&>li]:mb-3 sm:[&>li]:mb-4">
        {photos.map((p) => (
          <li key={p.f}>
            <button
              className="tile block w-full cursor-zoom-in overflow-hidden rounded-sm"
              aria-label={`Zvětšit: ${p.alt}`}
              onClick={() => { setOpen(p); dlg.current?.showModal(); }}
            >
              <Image className="shot w-full" src={img(`${p.f}.jpg`)} alt={p.alt} width={p.w} height={p.h} sizes="(min-width:1152px) 370px, (min-width:768px) 33vw, 50vw" />
            </button>
          </li>
        ))}
      </ul>
      <dialog ref={dlg} aria-label="Zvětšená fotografie" onClick={() => dlg.current?.close()} onClose={() => setOpen(null)} className="max-h-[96vh] max-w-[96vw] border-0 bg-transparent p-0 m-auto">
        {open && <Image src={img(`${open.f}.jpg`)} alt={open.alt} width={open.w} height={open.h} sizes="96vw" className="max-h-[92vh] w-auto rounded-sm" />}
      </dialog>
    </>
  );
}
