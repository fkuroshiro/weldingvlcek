import type { Metadata } from "next";
import { site } from "./site";

// Open Graph is replaced, not merged, when a page sets it – so every page builds the full object from here.
export const og = (o: { title: string; description: string; path: string }): Metadata["openGraph"] => ({
  title: o.title,
  description: o.description,
  url: o.path,
  siteName: site.name,
  locale: "cs_CZ",
  type: "website",
  images: [{ url: "/img/og.jpg", width: 1200, height: 630, alt: "Martin Vlček při broušení svaru, kolem létají jiskry" }],
});
