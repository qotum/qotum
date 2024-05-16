import { definePreset } from "@pandacss/dev";

import { recipes } from "./recipes";
import { tokens } from "./tokens";
import { semanticTokens } from "./semantics-tokens";

const qotumPreset = definePreset({
  theme: {
    tokens,
    semanticTokens,
    extend: {
      recipes,
    },
  },
});

export default qotumPreset;
