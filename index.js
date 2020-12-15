"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNotdefinedOrWhiteSpace = exports.isNotdefinedOrEmpty = exports.isBoolean = exports.isRegex = exports.isNumber = exports.isObject = exports.isArray = exports.isString = exports.isDefined = void 0;
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
var isNotdefinedOrEmpty = function (data) {
    return !exports.isDefined(data) || data === '';
};
exports.isNotdefinedOrEmpty = isNotdefinedOrEmpty;
var isNotdefinedOrWhiteSpace = function (data) {
    return !exports.isDefined(data) || (data.trim ? data.trim() : null) === '';
};
exports.isNotdefinedOrWhiteSpace = isNotdefinedOrWhiteSpace;
var typeCheck = { isDefined: exports.isDefined, isString: exports.isString, isObject: exports.isObject, isArray: exports.isArray, isNumber: exports.isNumber, isRegex: exports.isRegex, isNotdefinedOrEmpty: exports.isNotdefinedOrEmpty, isNotdefinedOrWhiteSpace: exports.isNotdefinedOrWhiteSpace };
exports.default = typeCheck;
//# sourceMappingURL=index.js.map