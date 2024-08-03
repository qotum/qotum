import { defineRecipe } from "@pandacss/dev"
import { hexToRGBA } from "../../../../utils/hexToRGBA"

export const buttonRecipe = defineRecipe({
  className: "button",
  description: "The styles for the Button component",
  base: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    zIndex: 1,
    textWrap: "no-wrap",
    flexWrap: "no-wrap",
    transition: "all 0.2s ease",
    _before: {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: -1,
      pointerEvents: "none",
    },
    _hover: {
      cursor: "pointer",
    },
  },
  variants: {
    visual: {
      primary: {
        bg: "brand",
        color: "pure.white",
        border: "1px solid token(colors.brand.hover)",
        boxShadow: "inset 0px 0px .4px 1px token(colors.brand.secondary)",
        _before: {
          background: `linear-gradient(to top, token(colors.brand), ${hexToRGBA("token(colors.brand)", 0)})`,
        },
        _hover: {
          bg: "brand.hover",
          _before: {
            background: `linear-gradient(to top, token(colors.brand.hover), ${hexToRGBA("token(colors.brand.hover)", 0)})`,
          },
        },
      },
      secondary: {
        bg: "pure.white",
        color: "blackscale.50",
        boxShadow:
          "0px 0px 0px 1px token(colors.greyscale.100), 0px -2px 1.2px -1px token(colors.greyscale.50) inset;",
        _hover: {
          bg: "whitescale.50",
        },
      },
      ghost: {
        bg: "pure.white",
        color: "brand",
        boxShadow: "inset 0px 0px .4px 1px token(colors.violet.100)",
        _before: {
          background: `linear-gradient(to bottom, token(colors.pure.white), ${hexToRGBA("token(colors.pure.white)", 0)})`,
        },
        _hover: {
          bg: "brand.tertiary",
          _before: {
            background: `linear-gradient(to bottom, token(colors.brand.tertiary), ${hexToRGBA("token(colors.brand.tertiary)", 0)})`,
          },
        },
      },
      dangerous: {
        bg: "red.400",
        color: "pure.white",
        boxShadow: "inset 0px 0px .4px 1px token(colors.red.400)",
        _before: {
          background: `linear-gradient(to bottom, token(colors.red.400), ${hexToRGBA("token(colors.red.400)", 0)})`,
          // _hover: {
          //   background: `linear-gradient(to bottom, token(colors.red.500), ${hexToRGBA("token(colors.red.500)", 0)})`,
          // },
        },
        _hover: {
          bg: "red.500",
          _before: {
            background: `linear-gradient(to bottom, token(colors.red.500), ${hexToRGBA("token(colors.red.500)", 0)})`,
          },
        },
      },
    },
    size: {
      M: {
        padding: "token(spacing.padding.SM) token(spacing.padding.MD)",
        fontSize: "18px",
        fontWeight: "token(fontWeights.semibold)",
        lineHeight: "23px",
      },
      S: {
        padding: "8px 10px",
        fontSize: "18px",
        fontWeight: "token(fontWeights.semibold)",
        lineHeight: "23px",
      },
      XS: {
        padding: "8px 10px",
        fontSize: "14px",
        fontWeight: "token(fontWeights.regular)",
        lineHeight: "normal",
      },
    },
    radius: {
      square: { borderRadius: "0px", _before: { borderRadius: "0px" } },
      rounded: { borderRadius: "9px", _before: { borderRadius: "8px" } },
      circle: { borderRadius: "999px", _before: { borderRadius: "999px" } },
    },
    disabled: {
      true: {
        opacity: 0.3,
        cursor: "not-allowed",
        pointerEvents: "none",
      },
    },
    shadow: {
      false: {
        boxShadow: "none!",
        border: "none",
        _before: {
          boxShadow: "none!",
          bg: "transparent!",
        },
      },
    },
  },
  defaultVariants: {
    visual: "primary",
    size: "M",
    radius: "square",
    disabled: false,
  },
  compoundVariants: [
    {
      visual: "secondary",
      shadow: false,
      css: {
        border: "1px solid token(colors.primary.border)",
      },
    },
  ],
})
// background: linear-gradient(to top, #6937be 0%, rgba(146, 117, 232, 0) 100%);
