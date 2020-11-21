# jsdoc-tests

![Node CI](https://github.com/unadlib/jsdoc-tests/workflows/Node%20CI/badge.svg)
[![npm version](https://badge.fury.io/js/jsdoc-tests.svg)](http://badge.fury.io/js/jsdoc-tests)

A JSDoc test tool for Documentation-Driven Quality

## Installation

```sh
yarn add -D jsdoc-tests # npm install -D jsdoc-tests
```

## Usage and Example

- Create A source code in `./src/example.ts` with JSDoc.

```ts
/**
 * Two numbers added together
 *
 * @param a {number}
 * @param b {number}
 *
 * @example
 *
 * ```ts
 * const { add } = require('../test/example');
 *
 * expect(add(1, 2)).toBe(3);
 * ```
 */
export const add = (a: number, b: number) => {
  return a + b;
}
```

- Create a test file

```ts
import { jsdocTests } from 'jsdoc-tests';

test('test add', () => {
  jsdocTests('./src/example.ts');
});
```
