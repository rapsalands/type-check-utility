const consName = (data) => (data && data.constructor) ? data.constructor.name : null;

const isDefined = (data) => data !== null && data !== undefined;
const isString = (data) => consName(data) === 'String';
const isObject = (data) => consName(data) === 'Object';
const isArray = (data) => consName(data) === 'Array';
const isNumber = (data) => !!data && typeof (data) === 'number';
const isRegex = (data) => consName(data) === 'RegExp';

const typeCheck = { isDefined, isString, isObject, isArray, isNumber, isRegex };

export default typeCheck;
