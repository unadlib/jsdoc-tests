import { parse } from '@babel/parser';

export const jsdocTests = (codeText: string) => {
  const { comments } = parse(codeText, {
    plugins: ['jsx', 'typescript'],
  });
  const testCode: string[] = [];
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const markdown = require('markdown-it')({
    highlight(text, lang) {
      if (['js', 'javascript', 'ts', 'typescript'].includes(lang)) {
        testCode.push(text);
      }
    },
  });
  comments.forEach(({ value }) => {
    if (/^\*\n/.test(value)) {
      const md = value.replace(/\n\s*\*/g, '\n');
      markdown.render(md);
    }
  });
  return testCode;
};
