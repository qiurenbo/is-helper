"use strict";
let is = module.exports;

is.isString = unknown => {
	return typeof unknown === "string" ? true : false;
};
is.isFunction = unknown => {
	return typeof unknown === "function" ? true : false;
};
is.isBoolean = unknown => {
	return typeof unknown === "boolean" ? true : false;
};
is.isNumber = unknown => {
	return typeof unknown === "number" ? true : false;
};
is.isObject = unknown => {
	return typeof unknown === "object" ? true : false;
};
is.isUndefined = unknown => {
	return typeof unknown === "undefined" ? true : false;
};
is.isArray = unknown => {
	return Array.isArray(unknown) ? true : false;
};
