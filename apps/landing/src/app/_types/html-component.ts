// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export type HtmlComponent<P, N = React.HTMLAttributes<any>> = {
	/**
	 * The root element.
	 */
	as?: React.ElementType;
	/**
	 * The content, duh.
	 */
	children?: React.ReactNode;
	forwardedAs?: React.ElementType;
} & P &
	Omit<N, keyof P>;
