import type { Tokens } from "@pandacss/types";
import { colors } from "./colors";

const defineTokens = <T extends Tokens>(v: T) => v;

export const tokens = defineTokens({
  colors,
});
