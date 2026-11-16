import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://weldingvlcek.cz/", lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: "https://weldingvlcek.cz/ochrana-osobnich-udaju/", lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
  ];
}
