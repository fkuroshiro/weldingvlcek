import type { Metadata } from "next";
import Link from "next/link";
import { og } from "../seo";
import { site } from "../site";

const title = "Ochrana osobních údajů";
const description = "Jak Welding Vlček zpracovává osobní údaje z poptávek a při návštěvě webu.";
const path = "/ochrana-osobnich-udaju/";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: og({ title: `${title} – ${site.name}`, description, path }),
};

const breadcrumbs = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Úvod", item: `${site.url}/` },
    { "@type": "ListItem", position: 2, name: title, item: `${site.url}${path}` },
  ],
};

export default function Privacy() {
  const mail = <a href={`mailto:${site.email}`}>{site.email}</a>;
  return (
    <main id="obsah" className="mx-auto max-w-3xl px-4 pb-24 pt-32 sm:px-6 sm:pb-32 sm:pt-40">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <nav aria-label="Drobečková navigace" className="font-display text-sm font-semibold text-plate/60">
        <Link href="/" className="underline underline-offset-4 hover:text-plate">Úvod</Link> <span aria-hidden="true">/</span> <span aria-current="page">Ochrana osobních údajů</span>
      </nav>
      <h1 className="display mt-5 text-4xl sm:text-5xl">Ochrana osobních údajů</h1>
      <p className="mt-6 text-lg text-plate/75">
        Stručně: web nepoužívá cookies ani žádné sledovací nástroje. Osobní údaje zpracovávám jen tehdy, když mi sami napíšete, a pouze proto, abych mohl vaši poptávku vyřídit.
      </p>

      <div className="prose">
        <h2>Kdo je správcem údajů</h2>
        <p>
          Správcem osobních údajů je {site.owner}
          {site.ico && <>, IČO {site.ico}</>}
          {site.address && <>, se sídlem {site.address}</>}
          {" "}(dále jen „správce“), provozovatel webu {site.domain}.
        </p>
        <p>
          Ve všech záležitostech týkajících se osobních údajů mě můžete kontaktovat na e-mailu {mail}
          {site.phone && <> nebo na telefonu {site.phone}</>}.
        </p>

        <h2>Jaké údaje zpracovávám</h2>
        <ul>
          <li><strong>Údaje z poptávky</strong> – jméno a příjmení, e-mail nebo telefon a vše, co mi sami sdělíte v popisu zakázky nebo v přílohách (výkresy, fotografie).</li>
          <li><strong>Údaje ze vzájemné komunikace</strong> – obsah e-mailů a dalších zpráv, které si při řešení zakázky vyměníme.</li>
          <li><strong>Údaje potřebné pro smlouvu a fakturaci</strong> – pokud dojde k realizaci zakázky: fakturační údaje, adresa realizace a údaje o platbách.</li>
        </ul>
        <p>Poptávkový formulář na webu nic neukládá ani neodesílá na server. Pouze připraví zprávu ve vašem e-mailovém programu a odešlete ji vy sami.</p>

        <h2>Proč a na jakém právním základě</h2>
        <ul>
          <li><strong>Vyřízení poptávky a plnění smlouvy</strong> – jednání o smlouvě na vaši žádost a její plnění (čl. 6 odst. 1 písm. b) GDPR).</li>
          <li><strong>Plnění zákonných povinností</strong> – zejména vedení účetní a daňové evidence (čl. 6 odst. 1 písm. c) GDPR).</li>
          <li><strong>Oprávněný zájem</strong> – ochrana právních nároků a vedení běžné obchodní komunikace (čl. 6 odst. 1 písm. f) GDPR).</li>
        </ul>
        <p>Údaje nepoužívám k zasílání obchodních sdělení ani k automatizovanému rozhodování či profilování.</p>

        <h2>Jak dlouho údaje uchovávám</h2>
        <ul>
          <li>Poptávky, ze kterých nevznikne zakázka, nejdéle 1 rok od poslední komunikace.</li>
          <li>Údaje k realizovaným zakázkám po dobu trvání smlouvy a následně po dobu promlčecích lhůt, zpravidla 3 roky.</li>
          <li>Účetní a daňové doklady po dobu stanovenou právními předpisy, obvykle 10 let.</li>
        </ul>

        <h2>Komu údaje předávám</h2>
        <p>Údaje neprodávám ani neposkytuji třetím stranám k jejich vlastním účelům. Přístup k nim mohou mít pouze zpracovatelé, kteří mi pomáhají s provozem:</p>
        <ul>
          <li>poskytovatel e-mailových služeb,</li>
          <li>poskytovatel účetních služeb, pokud dojde k fakturaci,</li>
          <li>poskytovatel hostingu webu (viz níže).</li>
        </ul>

        <h2>Cookies a provoz webu</h2>
        <p>Web neukládá do vašeho zařízení žádné cookies, nepoužívá analytické ani reklamní nástroje a nenačítá obsah od třetích stran – písma i obrázky jsou uloženy přímo na webu.</p>
        <p>Web je hostován u společnosti Webglobe. Ta při každé návštěvě z technických a bezpečnostních důvodů zaznamenává IP adresu návštěvníka v protokolech serveru.</p>
        <p>Odkazy na sociální sítě vedou na weby jejich provozovatelů, kteří zpracovávají údaje podle vlastních zásad.</p>

        <h2>Jaká máte práva</h2>
        <p>V souvislosti se zpracováním osobních údajů máte právo:</p>
        <ul>
          <li>na přístup ke svým údajům a na jejich kopii,</li>
          <li>na opravu nepřesných nebo neúplných údajů,</li>
          <li>na výmaz údajů, pokud už nejsou potřebné nebo jsou zpracovávány neoprávněně,</li>
          <li>na omezení zpracování,</li>
          <li>na přenositelnost údajů,</li>
          <li>vznést námitku proti zpracování založenému na oprávněném zájmu.</li>
        </ul>
        <p>Kterékoli z těchto práv můžete uplatnit e-mailem na {mail}. Odpovím bez zbytečného odkladu, nejpozději do jednoho měsíce.</p>
        <p>
          Pokud se domníváte, že vaše údaje zpracovávám v rozporu s předpisy, můžete podat stížnost u Úřadu pro ochranu osobních údajů, Pplk. Sochora 27, 170 00 Praha 7,{" "}
          <a href="https://www.uoou.cz" target="_blank" rel="noopener noreferrer">www.uoou.cz</a>.
        </p>

        <h2>Platnost</h2>
        <p>Tyto zásady jsou platné a účinné od {site.privacyUpdated}. Případné změny zveřejním na této stránce.</p>
      </div>

      <p className="mt-14">
        <Link href="/" className="btn font-display inline-block rounded-sm bg-straw px-6 py-3.5 font-bold text-ink">Zpět na úvodní stránku</Link>
      </p>
    </main>
  );
}
