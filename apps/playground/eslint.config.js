import base from '@ninna-ui/eslint-config/base';
import react from '@ninna-ui/eslint-config/react';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: [
      'node_modules/',
      'build/',
      '.turbo/',
    ],
  },
  ...base,
  ...react,
  {
    files: ['app/**/*.tsx'],
    rules: {
      'react/no-unescaped-entities': 'off',
    },
  },
];
