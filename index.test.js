"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require(".");
describe('isDefined', function () {
    test('should return false as null is not defined', function () {
        expect((0, _1.isDefined)(null)).toBe(false);
    });
    test('should return false as undefined is not defined', function () {
        expect((0, _1.isDefined)(undefined)).toBe(false);
    });
    test('should return true as "" is defined', function () {
        expect((0, _1.isDefined)('')).toBe(true);
    });
    test('should return true as 2 is defined', function () {
        expect((0, _1.isDefined)(2)).toBe(true);
    });
    test('should return true as "2" is defined', function () {
        expect((0, _1.isDefined)('2')).toBe(true);
    });
    test('should return true as 0 is defined', function () {
        expect((0, _1.isDefined)(0)).toBe(true);
    });
    test('should return true as "2" is defined', function () {
        expect((0, _1.isDefined)('2')).toBe(true);
    });
});
describe('isString', function () {
    test('should return true as string is string', function () {
        expect((0, _1.isString)('type-check-utility')).toBe(true);
    });
    test('should return true as empty is string', function () {
        expect((0, _1.isString)('')).toBe(true);
    });
    test('should return true as number string is not string', function () {
        expect((0, _1.isString)('2')).toBe(true);
    });
    test('should return false as number is not string', function () {
        expect((0, _1.isString)(2)).toBe(false);
    });
    test('should return false as null is not string', function () {
        expect((0, _1.isString)(null)).toBe(false);
    });
    test('should return false as undefined is not string', function () {
        expect((0, _1.isString)(undefined)).toBe(false);
    });
});
describe('isArray', function () {
    test('should return true as [] is array', function () {
        expect((0, _1.isArray)([])).toBe(true);
    });
    test('should return true as [object] is array', function () {
        expect((0, _1.isArray)([{}])).toBe(true);
    });
    test('should return true as [array] is array', function () {
        expect((0, _1.isArray)([[], []])).toBe(true);
    });
    test('should return true as [array, object] is array', function () {
        expect((0, _1.isArray)([[], {}])).toBe(true);
    });
    test('should return false as null is not array', function () {
        expect((0, _1.isArray)(null)).toBe(false);
    });
    test('should return false as undefined is not array', function () {
        expect((0, _1.isArray)(undefined)).toBe(false);
    });
    test('should return false as {} is not array', function () {
        expect((0, _1.isArray)({})).toBe(false);
    });
    test('should return false as 2 is not array', function () {
        expect((0, _1.isArray)(2)).toBe(false);
    });
});
describe('isObject', function () {
    var Sample = (function () {
        function Sample() {
        }
        return Sample;
    }());
    var sample = new Sample();
    test('should return true as {} is object', function () {
        expect((0, _1.isObject)({})).toBe(true);
    });
    test('should return true as {properties} is object', function () {
        expect((0, _1.isObject)({ a: 1 })).toBe(true);
    });
    test('should return true as class instance is object', function () {
        expect((0, _1.isObject)(sample)).toBe(true);
    });
    test('should return false as 2 is not object', function () {
        expect((0, _1.isObject)(2)).toBe(false);
    });
    test('should return false as "2" is not object', function () {
        expect((0, _1.isObject)("2")).toBe(false);
    });
    test('should return false as true is not object', function () {
        expect((0, _1.isObject)(true)).toBe(false);
    });
    test('should return false as false is not object', function () {
        expect((0, _1.isObject)(false)).toBe(false);
    });
});
describe('isNumber', function () {
    test('should return true as 0 is number', function () {
        expect((0, _1.isNumber)(0)).toBe(true);
    });
    test('should return true as 2 is number', function () {
        expect((0, _1.isNumber)(2)).toBe(true);
    });
    test('should return true as 5.97E24 is number', function () {
        expect((0, _1.isNumber)(5.97E24)).toBe(true);
    });
    test('should return false as "2" is not number', function () {
        expect((0, _1.isNumber)('2')).toBe(false);
    });
    test('should return false as [] is not number', function () {
        expect((0, _1.isNumber)([])).toBe(false);
    });
    test('should return false as null is not number', function () {
        expect((0, _1.isNumber)(null)).toBe(false);
    });
    test('should return false as undefined is not number', function () {
        expect((0, _1.isNumber)(undefined)).toBe(false);
    });
});
describe('isRegex', function () {
    test('should return true as "new regExp()" is regex', function () {
        expect((0, _1.isRegex)(new RegExp(/^/))).toBe(true);
    });
    test('should return true as "/^/" is regex', function () {
        expect((0, _1.isRegex)(/^/)).toBe(true);
    });
    test('should return false as null is not regex', function () {
        expect((0, _1.isRegex)(null)).toBe(false);
    });
    test('should return false as undefined is not regex', function () {
        expect((0, _1.isRegex)(undefined)).toBe(false);
    });
});
describe('isBoolean', function () {
    test('should return true as "true" is boolean', function () {
        expect((0, _1.isBoolean)(true)).toBe(true);
    });
    test('should return true as "false" is boolean', function () {
        expect((0, _1.isBoolean)(false)).toBe(true);
    });
    test('should return false as 0 is not boolean', function () {
        expect((0, _1.isBoolean)(0)).toBe(false);
    });
    test('should return false as "true" is not boolean', function () {
        expect((0, _1.isBoolean)("true")).toBe(false);
    });
    test('should return false as "false" is not boolean', function () {
        expect((0, _1.isBoolean)("false")).toBe(false);
    });
    test('should return false as null is not boolean', function () {
        expect((0, _1.isBoolean)(null)).toBe(false);
    });
    test('should return false as "undefined" is not boolean', function () {
        expect((0, _1.isBoolean)(undefined)).toBe(false);
    });
    test('should return false as 1 is not boolean', function () {
        expect((0, _1.isBoolean)(1)).toBe(false);
    });
    test('should return false as "1" is not boolean', function () {
        expect((0, _1.isBoolean)("1")).toBe(false);
    });
});
describe('isNotDefinedOrEmpty', function () {
    test('should return true as "null" is null', function () {
        expect((0, _1.isNotDefinedOrEmpty)(null)).toBe(true);
    });
    test('should return true as "undefined" is undefined', function () {
        expect((0, _1.isNotDefinedOrEmpty)(undefined)).toBe(true);
    });
    test('should return true as "" is empty string', function () {
        expect((0, _1.isNotDefinedOrEmpty)('')).toBe(true);
    });
    test('should return false as empty white spaces are defined', function () {
        expect((0, _1.isNotDefinedOrEmpty)('    ')).toBe(false);
    });
    test('should return false as 0 is defined', function () {
        expect((0, _1.isNotDefinedOrEmpty)(0)).toBe(false);
    });
    test('should return false as 1 is defined', function () {
        expect((0, _1.isNotDefinedOrEmpty)(1)).toBe(false);
    });
    test('should return false as true is defined', function () {
        expect((0, _1.isNotDefinedOrEmpty)(true)).toBe(false);
    });
    test('should return false as false is defined', function () {
        expect((0, _1.isNotDefinedOrEmpty)(false)).toBe(false);
    });
    test('should return false as "undefined" is defined', function () {
        expect((0, _1.isNotDefinedOrEmpty)("undefined")).toBe(false);
    });
    test('should return false as "null" is defined', function () {
        expect((0, _1.isNotDefinedOrEmpty)("null")).toBe(false);
    });
    test('should return false as "someValue" is defined', function () {
        expect((0, _1.isNotDefinedOrEmpty)("someValue")).toBe(false);
    });
    test('should return false as "   someValue   " is defined', function () {
        expect((0, _1.isNotDefinedOrWhiteSpace)("someValue")).toBe(false);
    });
    test('should return false as 123 is defined', function () {
        expect((0, _1.isNotDefinedOrEmpty)(123)).toBe(false);
    });
});
describe('isNotDefinedOrWhiteSpace', function () {
    test('should return true as "null" is null', function () {
        expect((0, _1.isNotDefinedOrWhiteSpace)(null)).toBe(true);
    });
    test('should return true as "undefined" is undefined', function () {
        expect((0, _1.isNotDefinedOrWhiteSpace)(undefined)).toBe(true);
    });
    test('should return true as "" is empty string', function () {
        expect((0, _1.isNotDefinedOrWhiteSpace)('')).toBe(true);
    });
    test('should return false as empty white spaces are defined', function () {
        expect((0, _1.isNotDefinedOrWhiteSpace)('    ')).toBe(true);
    });
    test('should return false as 0 is defined', function () {
        expect((0, _1.isNotDefinedOrWhiteSpace)(0)).toBe(false);
    });
    test('should return false as 1 is defined', function () {
        expect((0, _1.isNotDefinedOrWhiteSpace)(1)).toBe(false);
    });
    test('should return false as true is defined', function () {
        expect((0, _1.isNotDefinedOrWhiteSpace)(true)).toBe(false);
    });
    test('should return false as false is defined', function () {
        expect((0, _1.isNotDefinedOrWhiteSpace)(false)).toBe(false);
    });
    test('should return false as "undefined" is defined', function () {
        expect((0, _1.isNotDefinedOrWhiteSpace)("undefined")).toBe(false);
    });
    test('should return false as "null" is defined', function () {
        expect((0, _1.isNotDefinedOrWhiteSpace)("null")).toBe(false);
    });
    test('should return false as "someValue" is defined', function () {
        expect((0, _1.isNotDefinedOrWhiteSpace)("someValue")).toBe(false);
    });
    test('should return false as "   someValue   " is defined', function () {
        expect((0, _1.isNotDefinedOrWhiteSpace)("someValue")).toBe(false);
    });
    test('should return false as 123 is defined', function () {
        expect((0, _1.isNotDefinedOrWhiteSpace)(123)).toBe(false);
    });
});
describe('isNotDefinedOrEmptyObject', function () {
    test('should return true as "null" is null', function () {
        expect((0, _1.isNotDefinedOrEmptyObject)(null)).toBe(true);
    });
    test('should return true as "undefined" is undefined', function () {
        expect((0, _1.isNotDefinedOrEmptyObject)(undefined)).toBe(true);
    });
    test('should return true as "" is empty string', function () {
        expect((0, _1.isNotDefinedOrEmptyObject)('')).toBe(true);
    });
    test('should return false as empty white spaces are defined', function () {
        expect((0, _1.isNotDefinedOrEmptyObject)('    ')).toBe(true);
    });
    test('should return false as 0 is defined', function () {
        expect((0, _1.isNotDefinedOrEmptyObject)(0)).toBe(false);
    });
    test('should return false as 1 is defined', function () {
        expect((0, _1.isNotDefinedOrEmptyObject)(1)).toBe(false);
    });
    test('should return false as true is defined', function () {
        expect((0, _1.isNotDefinedOrEmptyObject)(true)).toBe(false);
    });
    test('should return false as false is defined', function () {
        expect((0, _1.isNotDefinedOrEmptyObject)(false)).toBe(false);
    });
    test('should return false as "undefined" is defined', function () {
        expect((0, _1.isNotDefinedOrEmptyObject)("undefined")).toBe(false);
    });
    test('should return false as "null" is defined', function () {
        expect((0, _1.isNotDefinedOrEmptyObject)("null")).toBe(false);
    });
    test('should return false as "someValue" is defined', function () {
        expect((0, _1.isNotDefinedOrEmptyObject)("someValue")).toBe(false);
    });
    test('should return false as "   someValue   " is defined', function () {
        expect((0, _1.isNotDefinedOrEmptyObject)("someValue")).toBe(false);
    });
    test('should return false as 123 is defined', function () {
        expect((0, _1.isNotDefinedOrEmptyObject)(123)).toBe(false);
    });
    test('should return false as {} is empty', function () {
        expect((0, _1.isNotDefinedOrEmptyObject)({})).toBe(true);
    });
    test('should return false as filled {} is empty', function () {
        expect((0, _1.isNotDefinedOrEmptyObject)({ some: '' })).toBe(false);
    });
    test('should return false as [] is empty', function () {
        expect((0, _1.isNotDefinedOrEmptyObject)([])).toBe(true);
    });
    test('should return false as filled [] is empty', function () {
        expect((0, _1.isNotDefinedOrEmptyObject)(['some'])).toBe(false);
    });
});
//# sourceMappingURL=index.test.js.map