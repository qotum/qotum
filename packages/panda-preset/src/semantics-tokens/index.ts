import { defineSemanticTokens } from "@pandacss/dev"
import { base } from "./colors/base"
import { brand } from "./colors/brand"
import { primary } from "./colors/primary"

export const semanticTokens = defineSemanticTokens({
  colors: {
    brand,
    primary,
    base,
  },
})
