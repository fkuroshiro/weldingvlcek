import type { MetadataRoute } from "next";
import { site } from "./site";

export const dynamic = "force-static";

const base = process.env.BASE_PATH ?? "";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} – svařování a zámečnická výroba`,
    short_name: site.name,
    lang: "cs",
    start_url: `${base}/`,
    display: "browser",
    background_color: "#14171a",
    theme_color: "#14171a",
    icons: [
      { src: `${base}/icon.svg`, type: "image/svg+xml", sizes: "any" },
      { src: `${base}/apple-icon.png`, type: "image/png", sizes: "180x180" },
    ],
  };
}
