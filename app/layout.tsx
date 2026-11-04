import type { Metadata, Viewport } from "next";
import { Archivo, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const archivo = Archivo({ subsets: ["latin", "latin-ext"], axes: ["wdth"], variable: "--font-archivo" });
const serif = Source_Serif_4({ subsets: ["latin", "latin-ext"], variable: "--font-serif" });

const title = "Welding Vlček – svařování a zámečnická výroba";
const description =
  "Svařování, zámečnická výroba a technická řešení na míru. Zábradlí, brány, mříže, ocelové konstrukce a technologické poradenství. Martin Vlček, Česká republika.";

export const metadata: Metadata = {
  metadataBase: new URL("https://weldingvlcek.cz"),
  title,
  description,
  robots: process.env.BASE_PATH ? { index: false } : undefined, // keep the github.io preview out of Google
  alternates: { canonical: "/" },
  openGraph: { title: "Welding Vlček – Když na provedení záleží.", description, url: "/", locale: "cs_CZ", type: "website", images: ["/img/hero.jpg"] },
};

export const viewport: Viewport = { themeColor: "#14171a" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="cs" className={`${archivo.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
