import { defineConfig } from "@pandacss/dev"
import { qotumPreset } from "./src/preset"

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  presets: [qotumPreset],

  // Where to look for your css declarations
  include: [
    "@qotum/panda-exports/styled-system/**/*.{ts,tsx,js,jsx}",
    "./src/components/**/*.{ts,tsx,js,jsx}",
  ],

  // Files to exclude
  exclude: [],

  importMap: "@qotum/panda-exports",

  jsxFramework: "react",
  // The output directory for your css system
  outdir: "styled-system",
})
