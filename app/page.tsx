import Image from "next/image";
import Gallery from "./gallery";
import { img } from "./img";

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
  "@type": "LocalBusiness", // ponytail: no address/phone yet — add `address`, `telephone`, `openingHours` once known
  name: "Welding Vlček",
  url: "https://weldingvlcek.cz",
  image: "https://weldingvlcek.cz/img/hero.jpg",
  description: "Svařování, zámečnická výroba a technická řešení na míru.",
  founder: { "@type": "Person", name: "Martin Vlček" },
  areaServed: { "@type": "Country", name: "Česko" },
  knowsAbout: ["svařování", "zámečnická výroba", "MIG/MAG", "TIG", "nerezová ocel", "hliník", "technologické poradenství"],
};

const field = "bg-ink/60 border border-plate/25 rounded-sm px-4 py-3 text-base font-normal focus:border-straw";
const stepRow = "py-6 grid grid-cols-[3rem_1fr] gap-4 before:sans before:font-extrabold before:text-3xl before:text-temper";

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="fixed inset-x-0 top-0 z-40 bg-ink/90 text-plate backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="#top" className="sans text-lg font-extrabold tracking-tight [font-stretch:118%]">WELDING VLČEK</a>
          <nav className="sans hidden gap-7 text-sm font-medium md:flex" aria-label="Hlavní navigace">
            {[["#sluzby", "Služby"], ["#o-mne", "O mně"], ["#realizace", "Realizace"], ["#spoluprace", "Spolupráce"]].map(([h, t]) => (
              <a key={h} href={h} className="hover:text-straw focus-visible:text-straw">{t}</a>
            ))}
          </nav>
          <a href="#kontakt" className="btn sans rounded-sm bg-straw px-4 py-2 text-sm font-bold text-ink">Poptat zakázku</a>
        </div>
        <div className="temper" />
      </header>

      <main id="top">
        {/* HERO */}
        <section className="grain relative flex min-h-[min(100svh,56rem)] items-end overflow-hidden bg-ink text-plate">
          <Image src={img("hero.jpg")} alt="Martin Vlček při broušení svaru, kolem něj létají jiskry" fill priority sizes="100vw" className="object-cover object-[60%_88%]" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/20 to-transparent" />
          <div className="hero-in relative mx-auto w-full max-w-6xl px-4 pb-14 pt-32 sm:px-6 sm:pb-20">
            <p className="sans mb-5 font-semibold text-straw">Svařování a zámečnická výroba</p>
            <h1 className="display max-w-4xl text-[clamp(2.6rem,8.5vw,6.5rem)]">Když na provedení záleží.</h1>
            <p className="mt-7 max-w-xl text-lg text-plate/90 sm:text-xl">Svařování, zámečnická výroba a technická řešení na míru. Od prvního návrhu až po hotový výrobek.</p>
            <div className="sans mt-9 flex flex-wrap gap-3 font-bold">
              <a href="#kontakt" className="btn rounded-sm bg-straw px-6 py-3.5 text-ink">Poptat zakázku</a>
              <a href="#realizace" className="btn rounded-sm border border-plate/40 px-6 py-3.5 hover:bg-plate/10">Prohlédnout realizace</a>
            </div>
          </div>
        </section>
        <div className="temper" />

        {/* ÚVOD */}
        <section className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 sm:py-28 md:grid-cols-[1fr_1.1fr] md:gap-20">
          <p className="text-xl leading-relaxed sm:text-2xl">Spojuji dlouholeté zkušenosti z průmyslové výroby s praktickými znalostmi svařování, konstrukce a technologické přípravy. Od jednotlivých kovových výrobků přes zakázkovou výrobu až po technické konzultace a optimalizaci výrobních postupů.</p>
          <p className="text-lg text-ink/80 md:pt-2">Ke každé zakázce přistupuji individuálně s důrazem na funkčnost, kvalitní provedení a smysluplné technické řešení.</p>
        </section>

        {/* SLUŽBY */}
        <section id="sluzby" className="grain relative bg-mill text-plate">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
            <h2 className="display max-w-2xl text-4xl sm:text-5xl">S čím vám pomohu</h2>
            <div className="mt-14 grid gap-x-10 gap-y-14 md:grid-cols-3">
              <article className="border-t-2 border-straw pt-6">
                <h3 className="sans text-2xl font-extrabold leading-tight [font-stretch:108%]">Zámečnická výroba a svařování</h3>
                <p className="mt-4 text-plate/80">Výroba ocelových konstrukcí, rámů, držáků, sloupků, bran, mříží a dalších kovových výrobků podle zadání zákazníka.</p>
                <ul className="mt-6 space-y-2 text-[0.95rem] text-plate/90">
                  <li>Výroba ocelových rámů, konstrukcí a držáků</li>
                  <li>Brány, mříže, sloupky a další kovové výrobky</li>
                  <li>Svařování ocelových dílů a sestav</li>
                  <li>Kusová a malosériová výroba</li>
                  <li>Podle výkresové dokumentace i individuálního zadání</li>
                </ul>
                <h4 className="sans mt-8 font-bold">Svařování různých materiálů</h4>
                <ul className="mt-3 space-y-2 text-[0.95rem] text-plate/90">
                  <li>Konstrukční a nízkolegované oceli</li>
                  <li>Nerezové oceli</li>
                  <li>Hliník a hliníkové slitiny</li>
                  <li>Metody MIG/MAG a TIG podle charakteru zakázky</li>
                </ul>
              </article>
              <article className="border-t-2 border-[#a8704a] pt-6">
                <h3 className="sans text-2xl font-extrabold leading-tight [font-stretch:108%]">Zakázková výroba na míru</h3>
                <p className="mt-4 text-plate/80">Individuální řešení pro firmy i soukromé zákazníky. Od jednoduchých výrobků až po technicky náročnější realizace.</p>
                <h4 className="sans mt-8 font-bold">Technická příprava a konstrukční řešení</h4>
                <ul className="mt-3 space-y-2 text-[0.95rem] text-plate/90">
                  <li>Návrhy přípravků a pomocných konstrukcí</li>
                  <li>Konzultace konstrukčních řešení</li>
                  <li>Návrh technologického postupu výroby</li>
                </ul>
              </article>
              <article className="border-t-2 border-temper pt-6">
                <h3 className="sans text-2xl font-extrabold leading-tight [font-stretch:108%]">Technologie a technické poradenství</h3>
                <p className="mt-4 text-plate/80">Návrhy výrobních postupů, posouzení vyrobitelnosti, technologické konzultace a hledání efektivnějších řešení pro průmyslovou výrobu.</p>
                <h4 className="sans mt-8 font-bold">Poradenství pro firmy</h4>
                <ul className="mt-3 space-y-2 text-[0.95rem] text-plate/90">
                  <li>Posouzení vyrobitelnosti konstrukcí</li>
                  <li>Doporučení technologického postupu</li>
                  <li>Návrh obráběcích přídavků a svařovacích postupů</li>
                  <li>Optimalizace výrobních procesů, taktů a organizace práce</li>
                  <li>Konzultace při řešení výrobních problémů</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* O MNĚ */}
        <section id="o-mne" className="mx-auto grid max-w-6xl items-start gap-12 px-4 py-20 sm:px-6 sm:py-28 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
          <figure className="md:sticky md:top-28">
            <Image src={img("martin.jpg")} alt="Martin Vlček v dílně, s kšiltem svářečské kukly a zvednutým palcem" width={1100} height={825} sizes="(min-width:768px) 40vw, 100vw" className="w-full rounded-sm shadow-[0_30px_50px_-20px_rgba(20,23,26,.45),0_8px_16px_-8px_rgba(20,23,26,.3)]" />
          </figure>
          <div>
            <h2 className="display text-3xl [font-stretch:112%] sm:text-5xl">Zkušenosti z výroby. Praktický přístup. Technické myšlení.</h2>
            <div className="mt-9 max-w-[62ch] space-y-5 text-lg">
              <p>Jmenuji se Martin Vlček a kovovýrobě, svařování a technickým řešením se věnuji řadu let.</p>
              <p>Během své profesní praxe jsem získal zkušenosti nejen se samotným svařováním a zámečnickou výrobou, ale také s technologií výroby, technickou přípravou, konstrukčními návrhy a organizací výrobních procesů.</p>
              <p>Více než 11 let jsem působil ve společnosti Schäfer Menk, kde jsem se věnoval mimo jiné svařovací technologii, praktické výuce a adaptaci pracovníků. Díky tomu znám výrobu z různých pohledů – od práce přímo u svařovacího stolu až po přípravu postupů a řešení technických problémů.</p>
              <p>Ve své práci se snažím hledat řešení, která dávají smysl nejen na výkrese, ale především při skutečné výrobě.</p>
              <p>Zakládám si na osobním přístupu, otevřené komunikaci a poctivě odvedené práci. Každá zakázka má svá specifika a mým cílem je najít řešení, které odpovídá jejím požadavkům.</p>
              <p className="sans pt-2 text-xl font-bold [font-stretch:108%]">Nejde jen o to něco vyrobit. Důležité je vědět, jak to udělat správně.</p>
            </div>
          </div>
        </section>

        {/* PRAXE */}
        <section className="border-y border-ink/10 bg-steel/50">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
            <h2 className="display text-3xl sm:text-4xl">Praxe a odborné zkušenosti</h2>
            <dl className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {praxe.map(([t, d]) => (
                <div key={t}><dt className="sans text-xl font-extrabold leading-tight">{t}</dt><dd className="mt-3 text-ink/80">{d}</dd></div>
              ))}
            </dl>
          </div>
        </section>

        {/* REALIZACE + SPOLUPRÁCE */}
        <section id="realizace" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <h2 className="display text-4xl sm:text-5xl">Realizace</h2>
          <p className="mt-4 max-w-[55ch] text-lg text-ink/75">Výběr z dílny i z hotových zakázek. Kliknutím fotografii zvětšíte.</p>
          <Gallery />

          <div id="spoluprace" className="mt-24 grid gap-10 sm:mt-32 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
            <div>
              <h2 className="display text-3xl [font-stretch:112%] sm:text-4xl">Jak probíhá spolupráce?</h2>
              <p className="mt-6 max-w-[40ch] text-ink/80">Každou zakázku posuzuji individuálně s ohledem na technickou náročnost, množství, termín a požadovaný výsledek.</p>
            </div>
            <ol className="steps divide-y divide-ink/15 border-y border-ink/15">
              {steps.map(([t, d]) => (
                <li key={t} className={stepRow}><div><h3 className="sans text-xl font-extrabold">{t}</h3><p className="text-ink/80">{d}</p></div></li>
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
              <ul className="sans mt-10 space-y-3 font-semibold">
                <li><a className="hover:text-straw focus-visible:text-straw" href="https://www.instagram.com/" rel="noopener">Instagram</a> <span className="font-normal text-plate/60">– fotografie a videa z výroby</span></li>
                <li><a className="hover:text-straw focus-visible:text-straw" href="https://www.facebook.com/" rel="noopener">Facebook</a> <span className="font-normal text-plate/60">– realizace a nabídka služeb</span></li>
              </ul>
            </div>
            {/* ponytail: mailto form, no backend. Swap action for a Formspree/Web3Forms endpoint (or a server action) for attachments. */}
            <form className="sans grid gap-5" action="mailto:info@weldingvlcek.cz" method="post" encType="text/plain">
              <label className="grid gap-1.5 text-sm font-semibold">Jméno a příjmení<input name="Jméno" required autoComplete="name" className={field} /></label>
              <label className="grid gap-1.5 text-sm font-semibold">E-mail nebo telefon<input name="Kontakt" required autoComplete="email" className={field} /></label>
              <label className="grid gap-1.5 text-sm font-semibold">O jakou službu máte zájem
                <select name="Služba" className={field}>
                  <option>Zámečnická výroba a svařování</option>
                  <option>Zakázková výroba na míru</option>
                  <option>Technologie a poradenství</option>
                  <option>Jiné</option>
                </select>
              </label>
              <label className="grid gap-1.5 text-sm font-semibold">Popis zakázky<textarea name="Popis" rows={5} required className={field} /></label>
              <p className="-mt-2 text-sm text-plate/60">Výkres nebo fotografie pošlete jako přílohu v odpovědi na e-mail.</p>
              <button className="btn justify-self-start rounded-sm bg-straw px-7 py-3.5 font-bold text-ink">Odeslat poptávku</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="sans bg-ink text-sm text-plate/70">
        <div className="temper" />
        <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-3 px-4 py-8 sm:px-6">
          <span><strong className="text-plate">Welding Vlček</strong> · Martin Vlček</span>
          <span>weldingvlcek.cz · © 2026</span>
        </div>
      </footer>
    </>
  );
}
