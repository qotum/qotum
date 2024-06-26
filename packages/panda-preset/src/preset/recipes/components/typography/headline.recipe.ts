import { defineRecipe } from "@pandacss/dev";

export const headlineRecipe = defineRecipe({
  className: "typography typography--headline",
  description:
    "The styles for the Headline typography component, used for the largest headings on the page",
  base: {
    fontFamily: "Figtree",
    fontWeight: "token(fontWeights.bold)",
    fontStyle: "normal",
  },
  variants: {
    size: {
      primary: {
        fontsize: "7rem",
        lineHeight: "70px",
      },
      secondary: {
        fontsize: "4rem",
        lineHeight: "45px",
      },
    },
    italic: {
      true: {
        fontStyle: "italic",
      },
    },
  },
  defaultVariants: {
    size: "primary",
    italic: false,
  },
});
