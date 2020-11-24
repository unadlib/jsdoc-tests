# jsdoc-tests

![Node CI](https://github.com/unadlib/jsdoc-tests/workflows/Node%20CI/badge.svg)
[![npm version](https://badge.fury.io/js/jsdoc-tests.svg)](http://badge.fury.io/js/jsdoc-tests)

A JSDoc test tool for documentation-driven quality

## Installation

```sh
yarn add -D jsdoc-tests # npm install -D jsdoc-tests
```

## Usage

- Create A source code in `./src/example.ts` with JSDoc.

````ts
/**
 * Two numbers added together
 *
 * @param a {number}
 * @param b {number}
 *
 * @example
 *
 * ```ts
 * import { add } from '../src/example';
 *
 * expect(add(1, 2)).toBe(3);
 * ```
 */
export const add = (a: number, b: number) => {
  return a + b;
};
````

- Create a test code in `./test/index.test.ts`.

```ts
import { jsdocTests } from 'jsdoc-tests';

test('test "add" function', () => {
  jsdocTests('../src/example.ts', __dirname, require);
});
```
