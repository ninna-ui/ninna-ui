import base from '@ninna-ui/eslint-config/base';
import react from '@ninna-ui/eslint-config/react';

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...base,
  ...react,
  {
    ignores: [
      'node_modules/',
      'storybook-static/',
      '.storybook/',
    ],
  },
  {
    files: ['src/**/*.stories.tsx'],
    rules: {
      'react-hooks/rules-of-hooks': 'off',
      'react/no-unescaped-entities': 'off',
      'jsx-a11y/anchor-is-valid': 'off',
      'jsx-a11y/label-has-associated-control': 'off',
      'jsx-a11y/click-events-have-key-events': 'off',
      'jsx-a11y/no-static-element-interactions': 'off',
    },
  },
];
