import { jsdocTests } from '../src';

test('base', () => {
  jsdocTests('./test/case/example.ts', __dirname, require);
});
