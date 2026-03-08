import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind({
      configFile: "./tailwind.config.mjs",
    }),
    sitemap(),
  ],
  output: "static",
  site: "https://goldsword.dev",
  image: {
    domains: ["images.unsplash.com"],
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
  markdown: {
    shikiConfig: {
      themes: {
        light: "github-light",
        dark: "dracula",
      },
      wrap: true,
    },
    // Markdown image optimization is enabled by default in Astro v5
    // with the 'assets' flag, but we ensure it's prioritized here.
  },
});
