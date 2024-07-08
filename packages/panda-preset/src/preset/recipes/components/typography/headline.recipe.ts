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
      large: {
        fontsize: "7rem",
        lineHeight: "70px",
      },
      medium: {
        fontsize: "4rem",
        lineHeight: "45px",
      },
    },
    italic: {
      true: {
        fontStyle: "italic",
      },
    },
    color: {
      primary: {
        color: "token(colors.primary.content)",
      },
      secondary: {
        color: "token(colors.primary.content.subtle)",
      },
      brand: {
        color: "token(colors.brand)",
      },
    },
  },
  defaultVariants: {
    size: "large",
    italic: false,
    color: "primary",
  },
});
