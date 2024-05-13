import { definePreset } from "@pandacss/dev";
import { tokens } from "./tokens";
import { semanticTokens } from "./semantics-tokens";

export default definePreset({
  theme: {
    tokens,
    semanticTokens,
  },
});
