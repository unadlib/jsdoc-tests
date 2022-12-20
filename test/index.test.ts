import { jsdocTests } from '../src';

test('base', () => {
  jsdocTests('../src/index.ts', __dirname);
});

test('case with typescript', () => {
  jsdocTests('./case/example.ts', __dirname);
});
