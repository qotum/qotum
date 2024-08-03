import { defineConfig } from "@pandacss/dev"
import defaultConfig from "@qotum/panda-preset/config"

export default defineConfig({
  ...defaultConfig,
  // Where to look for your css declarations
  include: [
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/app/**/*.{ts,tsx,js,jsx}",
  ],
  outdir: "../../packages/panda-exports/dist",
})
