import { defineConfig } from "@pandacss/dev";
import { qotumPreset } from "./src/preset";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  presets: [qotumPreset],

  // Where to look for your css declarations
  include: ["./src/components/**/*.{ts,tsx,js,jsx}"],

  // Files to exclude
  exclude: [],

  importMap: "@qotum/panda-exports",

  jsxFramework: "react",
  // The output directory for your css system
  outdir: "../panda-exports/dist",
});
