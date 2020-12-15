import { isArray, isBoolean, isDefined, isNotDefinedOrEmpty, isNotDefinedOrWhiteSpace, isNumber, isObject, isRegex, isString } from '.'

describe('isDefined', () => {
    test('should return false as null is not defined', () => {
        expect(isDefined(null)).toBe(false);
    });

    test('should return false as undefined is not defined', () => {
        expect(isDefined(undefined)).toBe(false);
    });

    test('should return true as "" is defined', () => {
        expect(isDefined('')).toBe(true);
    });

    test('should return true as 2 is defined', () => {
        expect(isDefined(2)).toBe(true);
    });

    test('should return true as "2" is defined', () => {
        expect(isDefined('2')).toBe(true);
    });

    test('should return true as 0 is defined', () => {
        expect(isDefined(0)).toBe(true);
    });

    test('should return true as "2" is defined', () => {
        expect(isDefined('2')).toBe(true);
    });

});

describe('isString', () => {
    test('should return true as string is string', () => {
        expect(isString('type-check-utility')).toBe(true);
    });

    test('should return true as empty is string', () => {
        expect(isString('')).toBe(true);
    });

    test('should return true as number string is not string', () => {
        expect(isString('2')).toBe(true);
    });

    test('should return false as number is not string', () => {
        expect(isString(2)).toBe(false);
    });

    test('should return false as null is not string', () => {
        expect(isString(null)).toBe(false);
    });

    test('should return false as undefined is not string', () => {
        expect(isString(undefined)).toBe(false);
    });
});

describe('isArray', () => {
    test('should return true as [] is array', () => {
        expect(isArray([])).toBe(true);
    });

    test('should return true as [object] is array', () => {
        expect(isArray([{}])).toBe(true);
    });

    test('should return true as [array] is array', () => {
        expect(isArray([[], []])).toBe(true);
    });

    test('should return true as [array, object] is array', () => {
        expect(isArray([[], {}])).toBe(true);
    });

    test('should return false as null is not array', () => {
        expect(isArray(null)).toBe(false);
    });

    test('should return false as undefined is not array', () => {
        expect(isArray(undefined)).toBe(false);
    });

    test('should return false as {} is not array', () => {
        expect(isArray({})).toBe(false);
    });

    test('should return false as 2 is not array', () => {
        expect(isArray(2)).toBe(false);
    });
});

describe('isObject', () => {

    class Sample {
        constructor() {

        }
    }

    const sample = new Sample();

    test('should return true as {} is object', () => {
        expect(isObject({})).toBe(true);
    });

    test('should return true as {properties} is object', () => {
        expect(isObject({ a: 1 })).toBe(true);
    });

    test('should return true as class instance is object', () => {
        expect(isObject(sample)).toBe(true);
    });

    test('should return false as 2 is not object', () => {
        expect(isObject(2)).toBe(false);
    });

    test('should return false as "2" is not object', () => {
        expect(isObject("2")).toBe(false);
    });

    test('should return false as true is not object', () => {
        expect(isObject(true)).toBe(false);
    });

    test('should return false as false is not object', () => {
        expect(isObject(false)).toBe(false);
    });
});

describe('isNumber', () => {
    test('should return true as 0 is number', () => {
        expect(isNumber(0)).toBe(true);
    });

    test('should return true as 2 is number', () => {
        expect(isNumber(2)).toBe(true);
    });

    test('should return true as 5.97E24 is number', () => {
        expect(isNumber(5.97E24)).toBe(true);
    });

    test('should return false as "2" is not number', () => {
        expect(isNumber('2')).toBe(false);
    });

    test('should return false as [] is not number', () => {
        expect(isNumber([])).toBe(false);
    });

    test('should return false as null is not number', () => {
        expect(isNumber(null)).toBe(false);
    });

    test('should return false as undefined is not number', () => {
        expect(isNumber(undefined)).toBe(false);
    });
});

describe('isRegex', () => {
    test('should return true as "new regExp()" is regex', () => {
        expect(isRegex(new RegExp(/^/))).toBe(true);
    });

    test('should return true as "/^/" is regex', () => {
        expect(isRegex(/^/)).toBe(true);
    });

    test('should return false as null is not regex', () => {
        expect(isRegex(null)).toBe(false);
    });

    test('should return false as undefined is not regex', () => {
        expect(isRegex(undefined)).toBe(false);
    });
});

describe('isBoolean', () => {
    test('should return true as "true" is boolean', () => {
        expect(isBoolean(true)).toBe(true);
    });

    test('should return true as "false" is boolean', () => {
        expect(isBoolean(false)).toBe(true);
    });

    test('should return false as 0 is not boolean', () => {
        expect(isBoolean(0)).toBe(false);
    });

    test('should return false as "true" is not boolean', () => {
        expect(isBoolean("true")).toBe(false);
    });

    test('should return false as "false" is not boolean', () => {
        expect(isBoolean("false")).toBe(false);
    });

    test('should return false as null is not boolean', () => {
        expect(isBoolean(null)).toBe(false);
    });

    test('should return false as "undefined" is not boolean', () => {
        expect(isBoolean(undefined)).toBe(false);
    });

    test('should return false as 1 is not boolean', () => {
        expect(isBoolean(1)).toBe(false);
    });

    test('should return false as "1" is not boolean', () => {
        expect(isBoolean("1")).toBe(false);
    });
});

describe('isNotdefinedOrEmpty', () => {
    test('should return true as "null" is null', () => {
        expect(isNotDefinedOrEmpty(null)).toBe(true);
    });

    test('should return true as "undefined" is undefined', () => {
        expect(isNotDefinedOrEmpty(undefined)).toBe(true);
    });

    test('should return true as "" is empty string', () => {
        expect(isNotDefinedOrEmpty('')).toBe(true);
    });

    test('should return false as empty white spaces are defined', () => {
        expect(isNotDefinedOrEmpty('    ')).toBe(false);
    });

    test('should return false as 0 is defined', () => {
        expect(isNotDefinedOrEmpty(0)).toBe(false);
    });

    test('should return false as 1 is defined', () => {
        expect(isNotDefinedOrEmpty(1)).toBe(false);
    });

    test('should return false as true is defined', () => {
        expect(isNotDefinedOrEmpty(true)).toBe(false);
    });

    test('should return false as false is defined', () => {
        expect(isNotDefinedOrEmpty(false)).toBe(false);
    });

    test('should return false as "undefined" is defined', () => {
        expect(isNotDefinedOrEmpty("undefined")).toBe(false);
    });

    test('should return false as "null" is defined', () => {
        expect(isNotDefinedOrEmpty("null")).toBe(false);
    });

    test('should return false as "somevalue" is defined', () => {
        expect(isNotDefinedOrEmpty("somevalue")).toBe(false);
    });

    test('should return false as "   somevalue   " is defined', () => {
        expect(isNotDefinedOrWhiteSpace("somevalue")).toBe(false);
    });

    test('should return false as 123 is defined', () => {
        expect(isNotDefinedOrEmpty(123)).toBe(false);
    });

});

describe('isNotdefinedOrWhiteSpace', () => {
    test('should return true as "null" is null', () => {
        expect(isNotDefinedOrWhiteSpace(null)).toBe(true);
    });

    test('should return true as "undefined" is undefined', () => {
        expect(isNotDefinedOrWhiteSpace(undefined)).toBe(true);
    });

    test('should return true as "" is empty string', () => {
        expect(isNotDefinedOrWhiteSpace('')).toBe(true);
    });

    test('should return false as empty white spaces are defined', () => {
        expect(isNotDefinedOrWhiteSpace('    ')).toBe(true);
    });

    test('should return false as 0 is defined', () => {
        expect(isNotDefinedOrWhiteSpace(0)).toBe(false);
    });

    test('should return false as 1 is defined', () => {
        expect(isNotDefinedOrWhiteSpace(1)).toBe(false);
    });

    test('should return false as true is defined', () => {
        expect(isNotDefinedOrWhiteSpace(true)).toBe(false);
    });

    test('should return false as false is defined', () => {
        expect(isNotDefinedOrWhiteSpace(false)).toBe(false);
    });

    test('should return false as "undefined" is defined', () => {
        expect(isNotDefinedOrWhiteSpace("undefined")).toBe(false);
    });

    test('should return false as "null" is defined', () => {
        expect(isNotDefinedOrWhiteSpace("null")).toBe(false);
    });

    test('should return false as "somevalue" is defined', () => {
        expect(isNotDefinedOrWhiteSpace("somevalue")).toBe(false);
    });

    test('should return false as "   somevalue   " is defined', () => {
        expect(isNotDefinedOrWhiteSpace("somevalue")).toBe(false);
    });

    test('should return false as 123 is defined', () => {
        expect(isNotDefinedOrWhiteSpace(123)).toBe(false);
    });

});
