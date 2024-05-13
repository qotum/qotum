import { brands } from "./colors/brand";
import { defineSemanticTokens } from "@pandacss/dev";

export const semanticTokens = defineSemanticTokens({
  colors: {
    brands,
  },
});
