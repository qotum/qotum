import { defineSemanticTokens } from "@pandacss/dev"
import { brand } from "./colors/brand"

export const semanticTokens = defineSemanticTokens({
  colors: {
    brand,
  },
})
