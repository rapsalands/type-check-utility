# type-check-utility
This is a simple type check utility for JavaScript.

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
