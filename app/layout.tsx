import type { Metadata, Viewport } from "next";
import { Archivo, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import Footer from "./footer";
import Header from "./header";
import { og } from "./seo";
import { site } from "./site";

const archivo = Archivo({ subsets: ["latin", "latin-ext"], axes: ["wdth"], variable: "--font-archivo" });
const serif = Source_Serif_4({ subsets: ["latin", "latin-ext"], variable: "--font-serif" });

const title = "Welding Vlček – svařování a zámečnická výroba";
const description =
  "Svařování, zámečnická výroba a technická řešení na míru. Zábradlí, brány, mříže, ocelové konstrukce a technologické poradenství. Martin Vlček, Česká republika.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: `%s – ${site.name}` },
  description,
  applicationName: site.name,
  authors: [{ name: site.owner }],
  creator: "fkuroshiro.dev",
  robots: process.env.BASE_PATH ? { index: false } : undefined, // keep the github.io preview out of Google
  openGraph: og({ title: "Welding Vlček – Když na provedení záleží.", description, path: "/" }),
  twitter: { card: "summary_large_image" },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = { themeColor: "#14171a" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="cs" className={`${archivo.variable} ${serif.variable}`}>
      <body>
        <a href="#obsah" className="skip">Přeskočit na obsah</a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
