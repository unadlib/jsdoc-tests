import { add } from './test/case/example';

export default async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  expect(add(1, 2)).toBe(3);
}
