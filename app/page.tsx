import type { Metadata } from "next";
import Image from "next/image";
import Gallery from "./gallery";
import HeroPause from "./hero-pause";
import ContactForm from "./contact-form";
import { img } from "./img";
import Reveal from "./reveal";
import { site } from "./site";

export const metadata: Metadata = { alternates: { canonical: "/" } };

const heroSlides = [
  { f: "hero-1.webp", alt: "Martin Vlček při broušení svaru, kolem něj létají jiskry", pos: "object-[60%_88%]" },
  { f: "hero-2.webp", alt: "Martin Vlček při svařování ocelového profilu na dílenském stole", pos: "object-[35%_50%]" },
  { f: "hero-3.webp", alt: "Martin Vlček brousí ocelový díl, od brusky odletují jiskry", pos: "object-[40%_80%]" },
];

const sluzby = [
  ["s-vyroba.webp", "Rozpracovaná ocelová mříž na stojanech v dílně", "Zámečnická výroba a svařování", "Výroba ocelových konstrukcí, rámů, držáků, sloupků, bran, mříží a dalších kovových výrobků podle zadání zákazníka."],
  ["s-zakazka.webp", "Schodiště s černým zábradlím ze svislých prutů", "Zakázková výroba na míru", "Individuální řešení pro firmy i soukromé zákazníky. Od jednoduchých výrobků až po technicky náročnější realizace."],
  ["s-technologie.webp", "Detail přípravku sešroubovaného na ocelovém profilu", "Technologie a technické poradenství", "Návrhy výrobních postupů, posouzení vyrobitelnosti, technologické konzultace a hledání efektivnějších řešení pro průmyslovou výrobu."],
];

const pomohu = [
  ["border-straw", "Zámečnické práce a kovovýroba", [
    "Výroba ocelových rámů, konstrukcí a držáků",
    "Brány, mříže, sloupky a další kovové výrobky",
    "Svařování ocelových dílů a sestav",
    "Kusová a malosériová výroba",
    "Výroba podle výkresové dokumentace i individuálního zadání",
  ]],
  ["border-[#c9803f]", "Svařování různých materiálů", [
    "Konstrukční a nízkolegované oceli",
    "Nerezové oceli",
    "Hliník a hliníkové slitiny",
    "Svařování metodami MIG/MAG a TIG podle charakteru zakázky",
  ]],
  ["border-[#8a5a8c]", "Technická příprava a konstrukční řešení", [
    "Návrhy přípravků a pomocných konstrukcí",
    "Konzultace konstrukčních řešení",
    "Návrh technologického postupu výroby",
  ]],
  ["border-temper", "Technologické poradenství pro firmy", [
    "Posouzení vyrobitelnosti konstrukcí",
    "Doporučení technologického postupu",
    "Návrh obráběcích přídavků a svařovacích postupů",
    "Optimalizace výrobních procesů, taktů a organizace práce",
    "Konzultace při řešení výrobních problémů",
  ]],
] as const;

const steps = [
  ["Zadání", "Probereme vaše požadavky, rozměry a účel výrobku."],
  ["Návrh řešení", "Posoudíme materiál, konstrukci a vhodný postup výroby."],
  ["Cenová nabídka", "Připravím kalkulaci podle rozsahu zakázky."],
  ["Realizace", "Po odsouhlasení zadání se pustím do výroby."],
  ["Předání", "Hotový výrobek předám podle dohodnutých podmínek."],
];

const praxe = [
  ["Více než 11 let ve výrobním prostředí", "Praktické zkušenosti ze společnosti Schäfer Menk a z průmyslové výroby."],
  ["Svařování a zpracování kovů", "Zkušenosti s konstrukčními a nízkolegovanými ocelemi, nerezovými materiály a hliníkem."],
  ["Technologie a odborné vzdělávání", "Zkušenosti s výukou svařování, adaptací pracovníků a předáváním praktických znalostí."],
  ["Konstrukce a výrobní procesy", "Technické výkresy, návrhy přípravků, technologická příprava a optimalizace výroby."],
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${site.url}/#web`,
      url: `${site.url}/`,
      name: site.name,
      inLanguage: "cs",
      publisher: { "@id": `${site.url}/#firma` },
    },
    {
      "@type": "LocalBusiness",
      "@id": `${site.url}/#firma`,
      name: site.name,
      url: `${site.url}/`,
      logo: `${site.url}/apple-icon.png`,
      image: [`${site.url}/img/og.jpg`, `${site.url}/img/g-zabradli.webp`, `${site.url}/img/g-mriz.webp`],
      email: site.email,
      ...(site.phone && { telephone: site.phone }),
      ...(site.address && { address: site.address }),
      ...(site.ico && { taxID: site.ico }),
      sameAs: [site.instagram, site.facebook].filter(Boolean),
      description: "Svařování, zámečnická výroba a technická řešení na míru.",
      slogan: "Když na provedení záleží.",
      founder: { "@type": "Person", name: site.owner, jobTitle: "Svářeč a zámečník" },
      areaServed: { "@type": "Country", name: "Česko" },
      knowsAbout: ["svařování", "zámečnická výroba", "MIG/MAG", "TIG", "nerezová ocel", "hliník", "technologické poradenství"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Služby",
        itemListElement: sluzby.map(([, , name, description]) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name, description } })),
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Reveal />
      <main id="obsah">
        {/* HERO */}
        <section id="top" aria-label="Úvod" className="grain relative flex min-h-[min(100svh,56rem)] items-end overflow-hidden bg-ink text-plate">
          <div className="slides absolute inset-0">
            {heroSlides.map((sl, n) => (
              <Image key={sl.f} src={img(sl.f)} alt={n === 0 ? sl.alt : ""} fill priority={n === 0} sizes="100vw" className={`object-cover ${sl.pos}`} />
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/20 to-transparent" />
          <div className="ember" aria-hidden="true" />
          <HeroPause />
          <div className="hero-in relative mx-auto w-full max-w-6xl px-4 pb-14 pt-32 sm:px-6 sm:pb-20">
            <p className="font-display mb-5 font-semibold text-straw">Svařování a zámečnická výroba</p>
            <h1 className="display max-w-4xl text-[clamp(2.6rem,8.5vw,6.5rem)]">Když na provedení záleží.</h1>
            <p className="mt-7 max-w-xl text-lg text-plate/90 sm:text-xl">Svařování, zámečnická výroba a technická řešení na míru. Od prvního návrhu až po hotový výrobek.</p>
            <div className="font-display mt-9 flex flex-wrap gap-3 font-bold">
              <a href="#kontakt" className="btn rounded-sm bg-straw px-6 py-3.5 text-ink">Poptat zakázku</a>
              <a href="#realizace" className="btn rounded-sm border border-plate/40 px-6 py-3.5 hover:bg-plate/10">Prohlédnout realizace</a>
            </div>
          </div>
        </section>
        <div className="temper" />

        {/* ÚVOD + SLUŽBY */}
        <section id="sluzby" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <div data-reveal className="grid gap-8 md:grid-cols-[1.25fr_1fr] md:items-end md:gap-16">
            <h2 className="display text-3xl [font-stretch:110%] sm:text-[2.6rem] sm:leading-[1.05]">Zkušenosti z průmyslové výroby, znalost svařování, konstrukce a technologie.</h2>
            <p className="border-l-4 border-straw pl-5 text-lg text-plate/75">Ke každé zakázce přistupuji individuálně s důrazem na funkčnost, kvalitní provedení a smysluplné technické řešení.</p>
          </div>
          <ul className="mt-12 grid gap-4 md:grid-cols-3">
            {sluzby.map(([f, alt, t, d], n) => (
              <li key={t} data-reveal style={{ "--d": `${n * 120}ms` } as React.CSSProperties}>
                <a href="#s-cim-pomohu" className="card tile group relative flex aspect-[4/3] items-end overflow-hidden rounded-sm bg-mill text-plate ring-1 ring-plate/10 md:aspect-[4/5]">
                  <Image src={img(f)} alt={alt} fill sizes="(min-width:768px) 33vw, 100vw" className="shot object-cover" />
                  <span className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/10" aria-hidden="true" />
                  <span className="relative block p-5 sm:p-6">
                    <span className="font-display text-sm font-bold text-straw" aria-hidden="true">0{n + 1}</span>
                    <h3 className="font-display mt-1 text-2xl font-extrabold leading-tight [font-stretch:108%]">{t}</h3>
                    <span className="mt-3 block text-[0.95rem] leading-relaxed text-plate/85">{d}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* S ČÍM POMOHU */}
        <section id="s-cim-pomohu" className="grain relative bg-mill text-plate">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
            <h2 data-reveal className="display max-w-2xl text-4xl sm:text-5xl">S čím vám pomohu</h2>
            <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {pomohu.map(([border, t, items], n) => (
                <article key={t} data-reveal style={{ "--d": `${n * 90}ms` } as React.CSSProperties} className={`group-card border-t-2 pt-5 ${border}`}>
                  <h3 className="font-display text-xl font-extrabold leading-tight [font-stretch:108%]">{t}</h3>
                  <ul className="ticks mt-5 space-y-2 text-[0.95rem] text-plate/90">
                    {items.map((i) => <li key={i}>{i}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* O MNĚ */}
        <section id="o-mne" className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 sm:py-28 md:grid-cols-[1fr_1.1fr] md:gap-16">
          <figure data-reveal="left" className="portrait">
            <Image src={img("martin.webp")} alt="Martin Vlček v dílně, s kšiltem svářečské kukly a zvednutým palcem" width={1400} height={1050} sizes="(min-width:768px) 36vw, 100vw" className="w-full rounded-sm shadow-[0_30px_50px_-20px_rgba(0,0,0,.8)]" />
          </figure>
          <div data-reveal style={{ "--d": "120ms" } as React.CSSProperties}>
            <h2 className="display text-3xl [font-stretch:112%] sm:text-5xl">Zkušenosti z výroby. Praktický přístup. Technické myšlení.</h2>
            <div className="mt-9 max-w-[62ch] space-y-5 text-lg">
              <p>Jmenuji se Martin Vlček a kovovýrobě, svařování a technickým řešením se věnuji řadu let.</p>
              <p>Více než 11 let jsem působil ve společnosti Schäfer Menk, kde jsem se věnoval mimo jiné svařovací technologii, praktické výuce a adaptaci pracovníků. Díky tomu znám výrobu z různých pohledů – od práce přímo u svařovacího stolu až po přípravu postupů a řešení technických problémů.</p>
              <details className="more">
                <summary>Číst více</summary>
                <div className="space-y-5">
                  <p>Během své profesní praxe jsem získal zkušenosti nejen se samotným svařováním a zámečnickou výrobou, ale také s technologií výroby, technickou přípravou, konstrukčními návrhy a organizací výrobních procesů.</p>
                  <p>Ve své práci se snažím hledat řešení, která dávají smysl nejen na výkrese, ale především při skutečné výrobě.</p>
                  <p>Zakládám si na osobním přístupu, otevřené komunikaci a poctivě odvedené práci. Každá zakázka má svá specifika a mým cílem je najít řešení, které odpovídá jejím požadavkům.</p>
                </div>
              </details>
              <p className="font-display pt-2 text-xl font-bold [font-stretch:108%]">Nejde jen o to něco vyrobit. Důležité je vědět, jak to udělat správně.</p>
            </div>
          </div>
        </section>

        {/* PRAXE */}
        <section aria-labelledby="praxe" className="border-y border-plate/10 bg-plate/[0.04]">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
            <h2 id="praxe" className="font-display text-xs font-bold uppercase tracking-[0.14em] text-plate/60">Praxe a odborné zkušenosti</h2>
            <dl className="mt-8 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
              {praxe.map(([t, d], n) => (
                <div key={t} data-reveal style={{ "--d": `${n * 90}ms` } as React.CSSProperties}><dt className="font-display text-lg font-extrabold leading-tight">{t}</dt><dd className="mt-2 text-[0.95rem] text-plate/75">{d}</dd></div>
              ))}
            </dl>
          </div>
        </section>

        {/* REALIZACE + SPOLUPRÁCE */}
        <section id="realizace" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <h2 data-reveal className="display text-4xl sm:text-5xl">Realizace</h2>
          <p className="mt-4 max-w-[55ch] text-lg text-plate/70">Kliknutím fotografii zvětšíte.</p>
          <Gallery />

          <div id="spoluprace" className="mt-24 sm:mt-32">
            <div data-reveal className="grid gap-5 md:grid-cols-[1fr_1fr] md:items-end md:gap-16">
              <h2 className="display text-3xl [font-stretch:112%] sm:text-4xl">Jak probíhá spolupráce?</h2>
              <p className="text-plate/75">Každou zakázku posuzuji individuálně s ohledem na technickou náročnost, množství, termín a požadovaný výsledek.</p>
            </div>
            <ol data-reveal className="timeline mt-12">
              {steps.map(([t, d]) => (
                <li key={t}><h3 className="font-display text-lg font-extrabold leading-tight">{t}</h3><p className="mt-1.5 text-[0.95rem] text-plate/75">{d}</p></li>
              ))}
            </ol>
          </div>
        </section>

        {/* KONTAKT */}
        <section id="kontakt" className="grain relative bg-mill text-plate">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 sm:py-28 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
            <div>
              <h2 className="display text-4xl sm:text-5xl">Jak mě kontaktovat</h2>
              <p className="mt-6 max-w-[38ch] text-plate/80">Popište, co potřebujete vyrobit. Ozvu se vám s dalším postupem.</p>
              <dl className="font-display mt-10 space-y-6">
                <div>
                  <dt className="text-xs font-bold uppercase tracking-[0.14em] text-plate/55">E-mail</dt>
                  <dd className="mt-1"><a href={`mailto:${site.email}`} className="navlink text-xl font-bold [overflow-wrap:anywhere]">{site.email}</a></dd>
                </div>
                {site.phone && (
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-[0.14em] text-plate/55">Telefon</dt>
                    <dd className="mt-1"><a href={`tel:${site.phone.replace(/\s/g, "")}`} className="navlink text-xl font-bold">{site.phone}</a></dd>
                  </div>
                )}
                {(site.instagram || site.facebook) && (
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-[0.14em] text-plate/55">Sledujte výrobu</dt>
                    <dd className="mt-1 flex gap-5 font-semibold">
                      {site.instagram && <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="navlink">Instagram</a>}
                      {site.facebook && <a href={site.facebook} target="_blank" rel="noopener noreferrer" className="navlink">Facebook</a>}
                    </dd>
                  </div>
                )}
              </dl>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

    </>
  );
}
