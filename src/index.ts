import { resolve, basename, extname } from 'path';
import { readFileSync, writeFileSync } from 'fs';
import { parse } from '@babel/parser';

const languages = ['js', 'javascript', 'ts', 'typescript'];

/**
 *
 * @param path {string}
 * @param dirname {string}
 * @param execute {(path: string) => unknown}
 *
 * @example
 *
 * ```ts
 * import { jsdocTests } from '../src';
 *
 * jsdocTests('../src/index.ts', __dirname, (path) => {
 *   expect(new RegExp(`test/index.\\d+.snap.ts$`).test(path)).toBeTruthy();
 * });
 * ```
 */
export const jsdocTests = (
  path: string,
  dirname: string,
  execute: (path: string) => unknown
) => {
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
        execute(path);
        index += 1;
      }
    },
  });
  comments.forEach(({ value }) => {
    if (/^\*\n/.test(value)) {
      const markdownText = value.replace(/\n\s*\*/g, '\n');
      markdown.render(markdownText);
    }
  });
};
