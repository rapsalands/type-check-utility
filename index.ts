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

export const isNotDefinedOrEmpty = (data) => {
    return !isDefined(data) || data === '';
}

export const isNotDefinedOrWhiteSpace = (data) => {
    return !isDefined(data) || (data.trim ? data.trim() : null) === '';
}

const typeCheck = { isDefined, isString, isObject, isArray, isNumber, isRegex, isNotDefinedOrEmpty, isNotDefinedOrWhiteSpace };

export default typeCheck;
