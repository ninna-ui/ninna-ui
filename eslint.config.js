import base from '@ninna-ui/eslint-config/base';

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...base,
  {
    ignores: [
      'node_modules/',
      'dist/',
      'storybook-static/',
      '*.config.js',
      '*.config.ts',
      '*.d.ts',
    ],
  },
];
