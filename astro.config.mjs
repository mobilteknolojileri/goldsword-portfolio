import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Built, but kept out of the sitemap for now
const UNLISTED_PATHS = new Set(["/cv"]);

export default defineConfig({
  site: "https://goldsword.dev",
  output: "static",
  trailingSlash: "never",
  // The default ("jsx") drops the space between inline elements on separate lines
  compressHTML: true,
  integrations: [
    // MDX for the case studies (figures, diagrams)
    mdx(),
    react(),
    sitemap({ filter: (page) => !UNLISTED_PATHS.has(new URL(page).pathname) }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    domains: ["images.unsplash.com"],
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
  markdown: {
    shikiConfig: {
      themes: {
        light: "github-light-default",
        dark: "github-dark-default",
      },
      wrap: true,
    },
  },
});
