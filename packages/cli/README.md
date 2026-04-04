# @ninna-ui/cli

> **Zero-config project scaffolding for Ninna UI** - choose your framework (Vite, Next.js, React Router v7, or Astro), pick a theme preset, and get a production-ready React app in seconds. TypeScript strict, Tailwind CSS v4, all 69 components pre-installed.

[![npm](https://img.shields.io/npm/v/@ninna-ui/cli.svg)](https://www.npmjs.com/package/@ninna-ui/cli)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](../../LICENSE)

📖 **[Full Documentation →](https://www.ninna-ui.dev/getting-started/installation)** &nbsp;|&nbsp; 📦 **[npm →](https://www.npmjs.com/package/@ninna-ui/cli)** &nbsp;|&nbsp; 🐙 **[GitHub →](https://github.com/ninna-ui/ninna-ui/tree/main/packages/cli)**

The official CLI for [Ninna UI](../../README.md). Scaffold a production-ready project with your preferred framework and theme preset - fully configured with Tailwind CSS v4, TypeScript strict mode, and all Ninna UI component packages pre-installed. No manual setup required.

## Usage

```bash
npx @ninna-ui/cli init my-app
```

The interactive prompt will ask you to choose:

1. **Template** - Vite + React, Next.js 15, React Router v7, or Astro
2. **Theme preset** - Default (Purple), Ocean (Blue), Sunset (Orange), Forest (Green), or Minimal (Monochrome)

## Options

```bash
npx @ninna-ui/cli init [name] [options]

Options:
  -t, --template <template>   Template: vite-react, nextjs, react-router, astro
  --preset <preset>           Theme: default, ocean, sunset, forest, minimal
  --skip-install              Skip dependency installation
```

## Examples

```bash
# Interactive mode
npx @ninna-ui/cli init my-app

# Fully specified
npx @ninna-ui/cli init my-app -t nextjs --preset ocean

# Skip install for CI
npx @ninna-ui/cli init my-app -t vite-react --skip-install
```

## Templates

| Template | Framework | Bundler | CSS Plugin |
|----------|-----------|---------|------------|
| `vite-react` | React 19 + TypeScript | Vite 7 | `@tailwindcss/vite` |
| `nextjs` | Next.js 15 App Router | Webpack/Turbopack | `@tailwindcss/postcss` |
| `react-router` | React Router v7 + TypeScript | Vite 7 | `@tailwindcss/vite` |
| `astro` | Astro 5 + React 19 + TypeScript | Vite 7 | `@tailwindcss/vite` |

Every template includes:

- All Ninna UI packages pre-installed
- Theme preset configured in CSS
- Demo page with Button, Heading, Text, Badge, Alert, Input, Field, VStack, HStack
- TypeScript strict mode
- Ready for production

## Theme Presets

| Preset | Colors | Character |
|--------|--------|-----------|
| `default` | Purple / Magenta | Vibrant, electric |
| `ocean` | Blue / Cyan | Cool, professional |
| `sunset` | Orange / Rose | Warm, bold |
| `forest` | Green / Amber | Natural, earthy |
| `minimal` | Monochrome | Clean, understated |

## Related Packages

- [`@ninna-ui/core`](../core/README.md) - Design tokens and theme presets
- [All packages](../../README.md#packages) - Complete package list
- [Starter templates](../../templates/) - Template source code

## License

[MIT](../../LICENSE)
