import type { Config } from "@pandacss/dev";
import { recipes } from "./recipes";
import { semanticTokens } from "./semantics-tokens";
import { tokens } from "./tokens";

const defineConfig = <T extends Config>(config: T) => config;

export const qotumPreset = defineConfig({
  theme: {
    tokens,
    semanticTokens,
    extend: {
      recipes,
    },
  },
});
