import { subtract } from './test/case/example';

export default async() => {
  const result = await subtract(2, 1);
  expect(result).toBe(11);
}
