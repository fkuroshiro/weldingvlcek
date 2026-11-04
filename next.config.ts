import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // static site for GitHub Pages
  images: { unoptimized: true }, // next/image does not add basePath when unoptimized, so img() below does
  env: { NEXT_PUBLIC_BASE: process.env.BASE_PATH ?? "" },
  basePath: process.env.BASE_PATH ?? "", // set to /repo-name for the github.io preview, empty on the real domain
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
