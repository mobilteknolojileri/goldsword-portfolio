import eslint from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import astroPlugin from "eslint-plugin-astro";
import reactHooks from "eslint-plugin-react-hooks";

const tsFiles = ["src/**/*.{ts,tsx}"];

export default [
  {
    ignores: ["dist/", ".astro/", "node_modules/", "*.config.*"],
  },

  ...astroPlugin.configs.recommended,

  { ...eslint.configs.recommended, files: tsFiles },
  ...tsPlugin.configs["flat/recommended"].map((config) => ({ ...config, files: tsFiles })),
  { ...reactHooks.configs.flat.recommended, files: tsFiles },
  {
    files: tsFiles,
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    rules: {
      // tsc already catches these
      "no-undef": "off",
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
];
