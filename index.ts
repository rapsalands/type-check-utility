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

export const isNotDefinedOrEmptyObject = (data): boolean => {
    if (isNotDefinedOrWhiteSpace(data)) return true;
    if (isArray(data) && data.length === 0) return true;
    if (isObject(data) && Object.keys(data).length === 0) return true;

    return false;
}

export const isReactJSXElement = (data): boolean => {
    if (!data) return false;

    if (data?.$$typeof?.toString() === 'Symbol(react.element)') {
        return true;
    }
    
    return false;
}

export const isReactComponent = (data): boolean => {
    if (!data) return false;

    if (data?.$$typeof?.toString() === 'Symbol(react.memo)') {
        return true;
    }
    
    return false;
}

const typeCheck = { isDefined, isString, isObject, isArray, isNumber, isRegex, isNotDefinedOrEmpty, isNotDefinedOrWhiteSpace, isNotDefinedOrEmptyObject, isReactComponent, isReactJSXElement };

export default typeCheck;
