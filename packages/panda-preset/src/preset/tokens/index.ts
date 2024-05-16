import type { Tokens } from "@pandacss/types"

import { colors } from "./colors"
import { spacing } from "./dimensions"
import { fontWeights } from "./texts"

const defineTokens = <T extends Tokens>(v: T) => v

export const tokens = defineTokens({
  colors,
  spacing,
  fontWeights,
  fonts: {
    body: { value: ["Figtree", "sans-serif"] },
  },
})
