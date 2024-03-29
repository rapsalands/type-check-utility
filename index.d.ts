export declare const isDefined: (data: any) => boolean;
export declare const isString: (data: any) => boolean;
export declare const isArray: (data: any) => boolean;
export declare const isObject: (data: any) => boolean;
export declare const isNumber: (data: any) => boolean;
export declare const isRegex: (data: any) => boolean;
export declare const isBoolean: (data: any) => boolean;
export declare const isNotDefinedOrEmpty: (data: any) => boolean;
export declare const isNotDefinedOrWhiteSpace: (data: any) => boolean;
export declare const isNotDefinedOrEmptyObject: (data: any) => boolean;
export declare const isReactJSXElement: (data: any) => boolean;
export declare const isReactComponent: (data: any) => boolean;
declare const typeCheck: {
    isDefined: (data: any) => boolean;
    isString: (data: any) => boolean;
    isObject: (data: any) => boolean;
    isArray: (data: any) => boolean;
    isNumber: (data: any) => boolean;
    isRegex: (data: any) => boolean;
    isNotDefinedOrEmpty: (data: any) => boolean;
    isNotDefinedOrWhiteSpace: (data: any) => boolean;
    isNotDefinedOrEmptyObject: (data: any) => boolean;
    isReactComponent: (data: any) => boolean;
    isReactJSXElement: (data: any) => boolean;
};
export default typeCheck;
