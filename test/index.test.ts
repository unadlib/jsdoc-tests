import { jsdocTests } from '../src';

test('base', () => {
  jsdocTests('../src/index.ts', __dirname);
});

test('case with typescript', () => {
  jsdocTests('./test/case/example.ts');
});

test('case with async', async () => {
  await jsdocTests('./case/async.ts', __dirname);
});
