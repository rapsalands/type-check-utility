import { isArray, isDefined, isNumber, isObject, isRegex, isString } from '.'

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
    test('should return true as "new regExp()" is not regex', () => {
        expect(isRegex(new RegExp(/^/))).toBe(true);
    });

    test('should return false as null is not regex', () => {
        expect(isRegex(null)).toBe(false);
    });

    test('should return false as undefined is not regex', () => {
        expect(isRegex(undefined)).toBe(false);
    });
});
