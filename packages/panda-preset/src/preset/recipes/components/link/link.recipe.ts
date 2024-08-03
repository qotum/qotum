import { defineRecipe } from "@pandacss/dev";

export const linkRecipe = defineRecipe({
	className: "link",
	description: "The styles for the Link component",
	base: {
		cursor: "pointer",
		display: "flex",
		alignItems: "center",
		transition: "all 0.2s ease",
		fontWeight: "{fontWeights.medium}",
		fontSize: "{fontSizes.sm}",
	},
	variants: {
		visual: {
			primary: {
				color: "primary.content.subtle",

				_hover: {
					color: "primary.content.subtle.hover",
				},
			},
		},
		disabled: {
			true: {
				color: "primary.content.subtle.disabled",
				cursor: "default",
				pointerEvents: "none",
			},
		},
	},
	defaultVariants: {
		visual: "primary",
		disabled: false,
	},
});
