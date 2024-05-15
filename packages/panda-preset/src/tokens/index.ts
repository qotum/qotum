import type { Tokens } from "@pandacss/types"

import { colors } from "./colors"
import { spacing } from "./dimensions/spacing"

const defineTokens = <T extends Tokens>(v: T) => v

export const tokens = defineTokens({
  colors,
  spacing,
})
