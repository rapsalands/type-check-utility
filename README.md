# type-check-utility
This is a simple type check utility for JavaScript.

# Demo
[Type-Check-Utility CodeSandBox](https://codesandbox.io/s/type-check-utility-bhz8q)

# functions
### isDefined

Checks if given parameter is not null or undefined.
Find below some examples.

```sh
Returns True: 2, "", "type-check-utility", [], {}
Returns False: null, undefined
```

### isNumber

Checks if given parameter is of type number.
Find below some examples.

```sh
Returns True: 0, 1, 2, 5.97E24
Returns False: "0", "1", null, undefined, [], {}
```

### isString

Checks if given parameter is of type string.
Find below some examples.

```sh
Returns True: "", "type-check-utility", "2"
Returns False: null, undefined, 2, [], {}
```

### isObject

Checks if given parameter is of type object.
Find below some examples.

```sh
Returns True: {}, namedClassInstance
Returns False: [], null, undefined
```

### isArray

Checks if given parameter is of type array.
Find below some examples.

```sh
Returns True: [], [1], [{}]
Returns False: null, undefined, {}
```

### isRegex

Checks if given parameter is of type regex.
Find below some examples.

```sh
Returns True: new RegExp(parameter), /^/
Returns False: [], null, undefined, ""
```

### isNotDefinedOrEmpty

Checks if given parameter is of type null, undefined or '' (empty string).
Find below some examples.

```sh
Returns True: null, undefined, ""
Returns False: [], " ", 1, 123, 0, true, false
```

### isNotDefinedOrWhiteSpace

Checks if given parameter is of type null, undefined, '' (empty string) or white spaces.
Find below some examples.

```sh
Returns True: null, undefined, "", " ", "   "
Returns False: [], 1, 123, 0, true, false
```

### isNotDefinedOrEmptyObject

Checks if given parameter is of type null, undefined, '' (empty string), white spaces, empty object or empty array.
Find below some examples.

```sh
Returns True: null, undefined, "", " ", "   ", {}, []
Returns False: 1, 123, 0, true, false
```

---

## <ins>Developer Guide To Publish</ins>

1. Make changes as needed.
2. Change version in `package.json`.
3. Run `npm login` to login in NPM account (if not logged-in already).
4. Run `npm publish`.
5. Shout `it's done`.

---