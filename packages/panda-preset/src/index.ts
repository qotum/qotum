import { definePreset } from "@pandacss/dev"
import { semanticTokens } from "./semantics-tokens"
import { tokens } from "./tokens"

export default definePreset({
  theme: {
    tokens,
    semanticTokens,
  },
})
