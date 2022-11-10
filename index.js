"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isReactComponent = exports.isReactJSXElement = exports.isNotDefinedOrEmptyObject = exports.isNotDefinedOrWhiteSpace = exports.isNotDefinedOrEmpty = exports.isBoolean = exports.isRegex = exports.isNumber = exports.isObject = exports.isArray = exports.isString = exports.isDefined = void 0;
var consName = function (data) {
    if ((0, exports.isDefined)(data) && data.constructor)
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
    return (!(0, exports.isArray)(data) && typeof (data) === 'object') || (consName(data) === 'Object');
};
exports.isObject = isObject;
var isNumber = function (data) {
    return (0, exports.isDefined)(data) && typeof (data) === 'number';
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
    return !(0, exports.isDefined)(data) || data === '';
};
exports.isNotDefinedOrEmpty = isNotDefinedOrEmpty;
var isNotDefinedOrWhiteSpace = function (data) {
    return !(0, exports.isDefined)(data) || (data.trim ? data.trim() : null) === '';
};
exports.isNotDefinedOrWhiteSpace = isNotDefinedOrWhiteSpace;
var isNotDefinedOrEmptyObject = function (data) {
    if ((0, exports.isNotDefinedOrWhiteSpace)(data))
        return true;
    if ((0, exports.isArray)(data) && data.length === 0)
        return true;
    if ((0, exports.isObject)(data) && Object.keys(data).length === 0)
        return true;
    return false;
};
exports.isNotDefinedOrEmptyObject = isNotDefinedOrEmptyObject;
var isReactJSXElement = function (data) {
    var _a, _b;
    if (!data)
        return false;
    if (((_b = (_a = data === null || data === void 0 ? void 0 : data.Icon) === null || _a === void 0 ? void 0 : _a.$$typeof) === null || _b === void 0 ? void 0 : _b.toString()) === 'Symbol(react.element)') {
        return true;
    }
    return false;
};
exports.isReactJSXElement = isReactJSXElement;
var isReactComponent = function (data) {
    var _a, _b;
    if (!data)
        return false;
    if (((_b = (_a = data === null || data === void 0 ? void 0 : data.Icon) === null || _a === void 0 ? void 0 : _a.$$typeof) === null || _b === void 0 ? void 0 : _b.toString()) === 'Symbol(react.memo)') {
        return true;
    }
    return false;
};
exports.isReactComponent = isReactComponent;
var typeCheck = { isDefined: exports.isDefined, isString: exports.isString, isObject: exports.isObject, isArray: exports.isArray, isNumber: exports.isNumber, isRegex: exports.isRegex, isNotDefinedOrEmpty: exports.isNotDefinedOrEmpty, isNotDefinedOrWhiteSpace: exports.isNotDefinedOrWhiteSpace, isNotDefinedOrEmptyObject: exports.isNotDefinedOrEmptyObject, isReactComponent: exports.isReactComponent, isReactJSXElement: exports.isReactJSXElement };
exports.default = typeCheck;
//# sourceMappingURL=index.js.map