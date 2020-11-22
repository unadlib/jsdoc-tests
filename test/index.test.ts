import { jsdocTests } from '../src';

test('base', () => {
  jsdocTests('../src/index.ts', __dirname, require);
});

test('case with typescript', () => {
  jsdocTests('./case/example.ts', __dirname, require);
});
