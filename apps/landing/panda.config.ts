import { defineConfig } from "@pandacss/dev";
import defaultConfig from "@qotum/panda-preset/panda.config";

export default defineConfig({
  ...defaultConfig,

  include: ["./src/**/*.{ts,tsx,js,jsx}"],

  outdir: "../../packages/panda-exports/dist",
});
