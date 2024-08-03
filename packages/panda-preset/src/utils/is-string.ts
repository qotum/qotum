/**
 * isString is a utility function that checks if a value is a string.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isString = (x: unknown) => {
	return Object.prototype.toString.call(x) === "[object String]";
};

export default isString;
