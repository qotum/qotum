import { defineSemanticTokens } from "@pandacss/dev"
import { brands } from "./colors/brand"

export const semanticTokens = defineSemanticTokens({
  colors: {
    brands,
  },
})
