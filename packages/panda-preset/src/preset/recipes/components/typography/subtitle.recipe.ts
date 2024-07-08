import { defineRecipe } from "@pandacss/dev";

export const subtitleRecipe = defineRecipe({
  className: "typography--subtitle",
  description:
    "The styles for the Subtitle typography component, used for the secondary headings on the page",
  base: {
    fontFamily: "Figtree",
    fontWeight: "semibold",
    fontStyle: "normal",
  },
  variants: {
    size: {
      large: {
        fontSize: "2.5rem",
        lineHeight: "25px",
      },
      medium: {
        fontSize: "2rem",
        lineHeight: "23px",
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
});
