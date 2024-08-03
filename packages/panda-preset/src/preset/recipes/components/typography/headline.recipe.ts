import { defineRecipe } from "@pandacss/dev"

export const headlineRecipe = defineRecipe({
  className: "typography--headline",
  description:
    "The styles for the Headline typography component, used for the largest headings on the page",
  base: {
    fontFamily: "Figtree",
    fontWeight: "bold",
    fontStyle: "normal",
  },
  variants: {
    size: {
      large: {
        fontSize: "7rem",
        lineHeight: "70px",
      },
      medium: {
        fontSize: "4rem",
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
        color: "primary.content",
      },
      secondary: {
        color: "primary.content.subtle",
      },
      brand: {
        color: "brand",
      },
    },
  },
  defaultVariants: {
    size: "large",
    italic: false,
    color: "primary",
  },
})
