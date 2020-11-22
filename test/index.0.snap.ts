import { jsdocTests } from '../src';

jsdocTests('../src/index.ts', __dirname, (path) => {
  expect(new RegExp(`test/index.\\d+.snap.ts$`).test(path)).toBeTruthy();
});
