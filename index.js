"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNotDefinedOrWhiteSpace = exports.isNotDefinedOrEmpty = exports.isBoolean = exports.isRegex = exports.isNumber = exports.isObject = exports.isArray = exports.isString = exports.isDefined = void 0;
var consName = function (data) {
    if (exports.isDefined(data) && data.constructor)
        return data.constructor.name;
    return null;
};
var isDefined = function (data) {
    return data !== null && data !== undefined;
};
exports.isDefined = isDefined;
var isString = function (data) {
    return consName(data) === 'String';
};
exports.isString = isString;
var isArray = function (data) {
    return consName(data) === 'Array';
};
exports.isArray = isArray;
var isObject = function (data) {
    return (!exports.isArray(data) && typeof (data) === 'object') || (consName(data) === 'Object');
};
exports.isObject = isObject;
var isNumber = function (data) {
    return exports.isDefined(data) && typeof (data) === 'number';
};
exports.isNumber = isNumber;
var isRegex = function (data) {
    return consName(data) === 'RegExp';
};
exports.isRegex = isRegex;
var isBoolean = function (data) {
    return consName(data) === 'Boolean';
};
exports.isBoolean = isBoolean;
var isNotDefinedOrEmpty = function (data) {
    return !exports.isDefined(data) || data === '';
};
exports.isNotDefinedOrEmpty = isNotDefinedOrEmpty;
var isNotDefinedOrWhiteSpace = function (data) {
    return !exports.isDefined(data) || (data.trim ? data.trim() : null) === '';
};
exports.isNotDefinedOrWhiteSpace = isNotDefinedOrWhiteSpace;
var typeCheck = { isDefined: exports.isDefined, isString: exports.isString, isObject: exports.isObject, isArray: exports.isArray, isNumber: exports.isNumber, isRegex: exports.isRegex, isNotDefinedOrEmpty: exports.isNotDefinedOrEmpty, isNotDefinedOrWhiteSpace: exports.isNotDefinedOrWhiteSpace };
exports.default = typeCheck;
//# sourceMappingURL=index.js.map