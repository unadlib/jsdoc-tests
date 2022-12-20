import { jsdocTests } from '../src';

test('base', () => {
  jsdocTests('./src/index.ts');
});

test('case with typescript', async () => {
  await jsdocTests('./test/case/example.ts');
});
