const is = require(".");

test("isString", () => {
	expect(is.isString(123)).toEqual(false);
	expect(is.isString("hello world")).toEqual(true);
});
test("isNumber", () => {
	expect(is.isNumber(123)).toEqual(true);
	expect(is.isNumber("hello world")).toEqual(false);
});
test("isBoolean", () => {
	expect(is.isBoolean(123)).toEqual(false);
	expect(is.isBoolean(false)).toEqual(true);
});
test("isFunction", () => {
	expect(is.isFunction(123)).toEqual(false);
	expect(is.isFunction("hello world")).toEqual(false);
	expect(is.isFunction(is.isString)).toEqual(true);
});
test("isObject", () => {
	expect(is.isObject(123)).toEqual(false);
	expect(is.isObject("hello world")).toEqual(false);
	expect(is.isObject({})).toEqual(true);
	expect(is.isObject(null)).toEqual(true);
});
test("isUndefined", () => {
	expect(is.isUndefined(123)).toEqual(false);
	expect(is.isUndefined("hello world")).toEqual(false);
	expect(is.isUndefined(undefined)).toEqual(true);
});

test("isArray", () => {
	expect(is.isArray(123)).toEqual(false);
	expect(is.isArray("hello world")).toEqual(false);
	expect(is.isArray([1, 2, 3, 5])).toEqual(true);
});
