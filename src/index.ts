import { join } from 'path';
import { readFileSync } from 'fs';
import { parse } from '@babel/parser';

export const jsdocTests = (path: string) => {
  const filePath = join(process.cwd(), path);
  const codeText = readFileSync(filePath, 'utf8');
  const { comments } = parse(codeText, {
    sourceType: 'module',
    plugins: ['jsx', 'typescript'],
  });
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const markdown = require('markdown-it')({
    highlight(text, lang) {
      if (['js', 'javascript', 'ts', 'typescript'].includes(lang)) {
        eval(text);
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
