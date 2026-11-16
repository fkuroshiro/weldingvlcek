import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // static site: production is uploaded to Webglobe hosting, GitHub Pages only serves the client preview
  trailingSlash: true, // /page/index.html – clean URLs on plain static hosting (Apache at Webglobe)
  images: { unoptimized: true }, // next/image does not add basePath when unoptimized, so img() below does
  env: { NEXT_PUBLIC_BASE: process.env.BASE_PATH ?? "" },
  basePath: process.env.BASE_PATH ?? "", // /repo-name for the github.io preview (set by the Pages workflow); leave unset for the production build
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
