# Coding Style Guide

This style guide based on the standards that are currently use in this project.

**Reference**
- [Airbnb React/JSX Style Guide](https://github.com/airbnb/javascript/blob/master/react/README.md)
- [ES6 Coding Style](https://github.com/elierotenberg/coding-styles/blob/master/es6.md)

# Table of Contents

1. [Basic Rules](#basic-rules)
2. [Naming](#naming)
3. [Null Value](#null-value)

## Basic Rules

## Naming

### Casing

- Use `lowerCamelCase` for regular indentifiers.
- Use `UpperCamelCase` for functions with constructor sematics, classes, or namespace.
- Use `UPPERCASE_WITH_UNDERSCORES` for magics values (eg. numerical constants).
- Use `_lowerCamelCaseStartWithUnderscore` for private properties.

```js
const regularIdentifier;
function Constructor() { ... }
class Class { ... }
const Namespace = {};

const SOME_MAGIC_NUMBER = 1337;
const {
  _privateMethod() {
    ...
  }

  publicMethod() {
    ...
  }
}
```

## Null Value

### Use `undefined`

- `null` **must not** be used, `undefined` **must** be used instead

```js
// Bad
if (x === null){
    ...
}

// Good
if (x === undefined){
    ...
}
```

### Use `??` and `?.` operators

- Prefer using `??` (if null) and `?.` (null aware) operators instead of null checks in conditional expression.

```js
// Bad
v = a == null ? b : a;

// Good
v = a ?? b;

// Bad
v = a == null ? null : a.b;

// Good
v = a?.b
```