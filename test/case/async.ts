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
 * export default async() => {
 *   const result = await subtract(2, 1);
 *   expect(result).toBe(1);
 * }
 * ```
 */
export const subtract = async (a: number, b: number) => {
  await new Promise((resolve) => setTimeout(resolve, 0));
  return a - b;
};
