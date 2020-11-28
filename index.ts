const consName = (data) => {
    if (isDefined(data) && data.constructor)
        return data.constructor.name
    return null;
}

export const isDefined = (data) => {
    return data !== null && data !== undefined;
}

export const isString = (data) => {
    return consName(data) === 'String';
}

export const isArray = (data) => {
    return consName(data) === 'Array';
}

export const isObject = (data) => {
    return (!isArray(data) && typeof (data) === 'object') || (consName(data) === 'Object');
}

export const isNumber = (data) => {
    return isDefined(data) && typeof (data) === 'number';
}

export const isRegex = (data) => {
    return consName(data) === 'RegExp';
}

export const isBoolean = (data) => {
    return consName(data) === 'Boolean';
}

const typeCheck = { isDefined, isString, isObject, isArray, isNumber, isRegex };

export default typeCheck;
