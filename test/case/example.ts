/**
 * Two numbers added together
 *
 * @param a {number}
 * @param b {number}
 *
 * @example
 *
 * ```ts
 * import { add } from './case/example';
 *
 * export default async () => {
 *   await new Promise((resolve) => setTimeout(resolve, 1000));
 *   expect(add(1, 2)).toBe(3);
 * }
 * ```
 */
export const add = (a: number, b: number) => {
  return a + b;
};

/**
 * Two numbers subtracted together
 *
 * @param a {number}
 * @param b {number}
 *
 * @example
 *
 * ```ts
 * import { subtract } from './case/example';
 *
 * expect(subtract(2, 1)).toBe(1);
 * ```
 */
export const subtract = (a: number, b: number) => {
  return a - b;
};
