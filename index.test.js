"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require(".");
describe('isDefined', function () {
    test('should return false as null is not defined', function () {
        expect(_1.isDefined(null)).toBe(false);
    });
    test('should return false as undefined is not defined', function () {
        expect(_1.isDefined(undefined)).toBe(false);
    });
    test('should return true as "" is defined', function () {
        expect(_1.isDefined('')).toBe(true);
    });
    test('should return true as 2 is defined', function () {
        expect(_1.isDefined(2)).toBe(true);
    });
    test('should return true as "2" is defined', function () {
        expect(_1.isDefined('2')).toBe(true);
    });
    test('should return true as 0 is defined', function () {
        expect(_1.isDefined(0)).toBe(true);
    });
    test('should return true as "2" is defined', function () {
        expect(_1.isDefined('2')).toBe(true);
    });
});
describe('isString', function () {
    test('should return true as string is string', function () {
        expect(_1.isString('type-check-utility')).toBe(true);
    });
    test('should return true as empty is string', function () {
        expect(_1.isString('')).toBe(true);
    });
    test('should return true as number string is not string', function () {
        expect(_1.isString('2')).toBe(true);
    });
    test('should return false as number is not string', function () {
        expect(_1.isString(2)).toBe(false);
    });
    test('should return false as null is not string', function () {
        expect(_1.isString(null)).toBe(false);
    });
    test('should return false as undefined is not string', function () {
        expect(_1.isString(undefined)).toBe(false);
    });
});
describe('isArray', function () {
    test('should return true as [] is array', function () {
        expect(_1.isArray([])).toBe(true);
    });
    test('should return true as [object] is array', function () {
        expect(_1.isArray([{}])).toBe(true);
    });
    test('should return true as [array] is array', function () {
        expect(_1.isArray([[], []])).toBe(true);
    });
    test('should return true as [array, object] is array', function () {
        expect(_1.isArray([[], {}])).toBe(true);
    });
    test('should return false as null is not array', function () {
        expect(_1.isArray(null)).toBe(false);
    });
    test('should return false as undefined is not array', function () {
        expect(_1.isArray(undefined)).toBe(false);
    });
    test('should return false as {} is not array', function () {
        expect(_1.isArray({})).toBe(false);
    });
    test('should return false as 2 is not array', function () {
        expect(_1.isArray(2)).toBe(false);
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
        expect(_1.isObject({})).toBe(true);
    });
    test('should return true as {properties} is object', function () {
        expect(_1.isObject({ a: 1 })).toBe(true);
    });
    test('should return true as class instance is object', function () {
        expect(_1.isObject(sample)).toBe(true);
    });
    test('should return false as 2 is not object', function () {
        expect(_1.isObject(2)).toBe(false);
    });
    test('should return false as "2" is not object', function () {
        expect(_1.isObject("2")).toBe(false);
    });
    test('should return false as true is not object', function () {
        expect(_1.isObject(true)).toBe(false);
    });
    test('should return false as false is not object', function () {
        expect(_1.isObject(false)).toBe(false);
    });
});
describe('isNumber', function () {
    test('should return true as 0 is number', function () {
        expect(_1.isNumber(0)).toBe(true);
    });
    test('should return true as 2 is number', function () {
        expect(_1.isNumber(2)).toBe(true);
    });
    test('should return true as 5.97E24 is number', function () {
        expect(_1.isNumber(5.97E24)).toBe(true);
    });
    test('should return false as "2" is not number', function () {
        expect(_1.isNumber('2')).toBe(false);
    });
    test('should return false as [] is not number', function () {
        expect(_1.isNumber([])).toBe(false);
    });
    test('should return false as null is not number', function () {
        expect(_1.isNumber(null)).toBe(false);
    });
    test('should return false as undefined is not number', function () {
        expect(_1.isNumber(undefined)).toBe(false);
    });
});
describe('isRegex', function () {
    test('should return true as "new regExp()" is regex', function () {
        expect(_1.isRegex(new RegExp(/^/))).toBe(true);
    });
    test('should return true as "/^/" is regex', function () {
        expect(_1.isRegex(/^/)).toBe(true);
    });
    test('should return false as null is not regex', function () {
        expect(_1.isRegex(null)).toBe(false);
    });
    test('should return false as undefined is not regex', function () {
        expect(_1.isRegex(undefined)).toBe(false);
    });
});
describe('isBoolean', function () {
    test('should return true as "true" is boolean', function () {
        expect(_1.isBoolean(true)).toBe(true);
    });
    test('should return true as "false" is boolean', function () {
        expect(_1.isBoolean(false)).toBe(true);
    });
    test('should return false as 0 is not boolean', function () {
        expect(_1.isBoolean(0)).toBe(false);
    });
    test('should return false as "true" is not boolean', function () {
        expect(_1.isBoolean("true")).toBe(false);
    });
    test('should return false as "false" is not boolean', function () {
        expect(_1.isBoolean("false")).toBe(false);
    });
    test('should return false as null is not boolean', function () {
        expect(_1.isBoolean(null)).toBe(false);
    });
    test('should return false as "undefined" is not boolean', function () {
        expect(_1.isBoolean(undefined)).toBe(false);
    });
    test('should return false as 1 is not boolean', function () {
        expect(_1.isBoolean(1)).toBe(false);
    });
    test('should return false as "1" is not boolean', function () {
        expect(_1.isBoolean("1")).toBe(false);
    });
});
//# sourceMappingURL=index.test.js.map