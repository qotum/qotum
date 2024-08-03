/**
 * isString is a utility function that checks if a value is a string.
 */

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const isString = (x: any) => {
	return Object.prototype.toString.call(x) === "[object String]";
};

export { isString };
