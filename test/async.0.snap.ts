import { subtract } from './case/example';

export default async() => {
  const result = await subtract(2, 1);
  expect(result).toBe(1);
}
