import css from "@eslint/css";
import js from "@eslint/js";
import json from "@eslint/json";
import markdown from "@eslint/markdown";
import security from "eslint-plugin-security";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";
export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    languageOptions: { globals: globals.node },
    ...js.configs.recommended,
  },
  tseslint.configs.recommended,
  security.configs.recommended,
  {
    files: ["**/*.json"],
    language: "json/json",
    ...json.configs.recommended,
  },
  {
    files: ["**/*.jsonc"],
    language: "json/jsonc",
    ...json.configs.recommended,
  },
  {
    files: ["**/*.json5"],
    language: "json/json5",
    ...json.configs.recommended,
  },
  {
    files: ["**/*.md"],
    language: "markdown/gfm",
    ...markdown.configs.recommended,
  },
  {
    files: ["**/*.css"],
    language: "css/css",
    ...css.configs.recommended,
  },
  globalIgnores(["node_modules/", "dist/", "tsconfig.json"]),
]);
