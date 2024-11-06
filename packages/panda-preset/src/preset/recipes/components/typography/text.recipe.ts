import { defineRecipe } from "@pandacss/dev";

export const textRecipe = defineRecipe({
	className: "typography--text",
	description: "The styles for the Text typography component",
	base: {
		fontFamily: "Figtree",
		fontWeight: "normal",
		fontStyle: "normal",
	},
	variants: {
		italic: {
			true: {
				fontStyle: "italic",
			},
		},
		color: {
			primary: {
				color: "primary.300",
			},
		},
	},
	defaultVariants: {
		italic: false,
		color: "primary",
	},
});
