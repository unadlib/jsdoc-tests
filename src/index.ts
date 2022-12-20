import { resolve, basename, extname } from 'path';
import { readFileSync, writeFileSync } from 'fs';
import { parse } from '@babel/parser';

const languages = ['js', 'javascript', 'ts', 'typescript'];

/**
 * `jsdoc-test` entry function for test a source file with some jsdoc testing code.
 *
 * @param path {string} - A source file path.
 * @param dirname {string} - A path to execute the test, recommend `__dirname` with nodejs.
 * @param execute {(path: string) => unknown} - A execution method, recommend `require` with nodejs.
 *
 * @example
 *
 * ```ts
 * import { jsdocTests } from './src';
 *
 * jsdocTests('./src/index.ts');
 * ```
 */
export const jsdocTests = (path: string) => {
  return new Promise<void>((_resolve, _reject) => {
    const dirname = process.cwd();
    const filePath = resolve(dirname, path);
    const filename = basename(filePath).replace(
      new RegExp(`${extname(filePath)}$`),
      ''
    );
    const codeText = readFileSync(filePath, 'utf8');
    const { comments } = parse(codeText, {
      sourceType: 'module',
      plugins: ['jsx', 'typescript'],
    });
    const promises: Promise<any>[] = [];
    let index = 0;
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const markdown = require('markdown-it')({
      highlight(text, lang) {
        if (languages.includes(lang)) {
          const path = resolve(
            dirname,
            [filename, index, 'snap'].join('.') + extname(filePath)
          );
          writeFileSync(path, text, 'utf8');
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          const result = require(path);
          let fn: ((...args: any) => any) | null = null;
          if (typeof result === 'function') {
            fn = result;
          } else if (typeof result.default === 'function') {
            fn = result.default;
          }
          if (fn) promises.push(fn());
          index += 1;
        }
      },
    });
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    comments!.forEach(({ value }) => {
      if (/^\*\n/.test(value)) {
        const markdownText = value.replace(/\n\s*\*/g, '\n');
        markdown.render(markdownText);
      }
    });
    Promise.all(promises).then(() => _resolve(), _reject);
  });
};
