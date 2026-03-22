import eslint from "@eslint/js";
import tsparser from "@typescript-eslint/parser";
import astroPlugin from "eslint-plugin-astro";

export default [
  // Astro files (handled by plugin)
  ...astroPlugin.configs.recommended,

  // TypeScript & React files
  {
    ...eslint.configs.recommended,
    files: ["src/**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsparser,
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    rules: {
      "no-unused-vars": "off",
      "no-undef": "off",
    },
  },

  // Global ignores
  {
    ignores: ["dist/", ".astro/", "node_modules/", "*.config.*"],
  },
];
