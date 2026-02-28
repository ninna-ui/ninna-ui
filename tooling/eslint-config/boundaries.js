/**
 * Package boundary rules for Ninna-UI
 * Enforces the dependency graph defined in ARCHITECTURE.md
 * @type {import('eslint').Linter.Config[]}
 */
export default [
  {
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['@radix-ui/*'],
              message:
                'Radix imports are only allowed in @ninna-ui/react-internal. Use engines from react-internal instead.',
            },
            {
              group: ['next/*', 'next'],
              message:
                'Next.js imports are forbidden in UI packages. Keep packages framework-agnostic.',
            },
            {
              group: ['@remix-run/*'],
              message:
                'Remix imports are forbidden in UI packages. Keep packages framework-agnostic.',
            },
          ],
        },
      ],
    },
  },
  {
    files: ['packages/core/**/*.ts'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['react', 'react-dom', '@radix-ui/*'],
              message:
                '@ninna-ui/core must not import React or Radix. Pure TypeScript types only.',
            },
            {
              group: [
                '@ninna-ui/primitives',
                '@ninna-ui/feedback',
                '@ninna-ui/react-internal',
              ],
              message:
                '@ninna-ui/core can only import from @ninna-ui/utils.',
            },
          ],
        },
      ],
    },
  },
  {
    files: [
      'packages/react-internal/**/*.ts',
      'packages/react-internal/**/*.tsx',
    ],
    rules: {
      'no-restricted-imports': 'off',
    },
  },
  {
    files: ['packages/primitives/**/*.ts', 'packages/primitives/**/*.tsx'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['@radix-ui/*'],
              message:
                '@ninna-ui/primitives must not import Radix directly. Use @ninna-ui/react-internal engines.',
            },
          ],
        },
      ],
    },
  },
  {
    files: ['packages/feedback/**/*.ts', 'packages/feedback/**/*.tsx'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['@radix-ui/*'],
              message:
                '@ninna-ui/feedback must not import Radix directly. Use @ninna-ui/react-internal engines.',
            },
          ],
        },
      ],
    },
  },
];
