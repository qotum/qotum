import { defineRecipe } from "@pandacss/dev"

export const titleRecipe = defineRecipe({
  className: "typography--title",
  description:
    "The styles for the Title typography component, used for the primary headings on the page",
  base: {
    fontFamily: "Figtree",
    fontWeight: "bold",
    fontStyle: "normal",
    fontSize: "3rem",
    lineHeight: "30px",
  },
  variants: {
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
    italic: false,
    color: "primary",
  },
})
