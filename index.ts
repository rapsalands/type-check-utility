const consName = (data) => (data && data.constructor) ? data.constructor.name : null;

export const isDefined = (data) => data !== null && data !== undefined;
export const isString = (data) => consName(data) === 'String';
export const isArray = (data) => consName(data) === 'Array';
export const isObject = (data) => (!isArray(data) && typeof (data) === 'object') || (consName(data) === 'Object');
export const isNumber = (data) => !!data && typeof (data) === 'number';
export const isRegex = (data) => consName(data) === 'RegExp';

const typeCheck = { isDefined, isString, isObject, isArray, isNumber, isRegex };

export default typeCheck;
