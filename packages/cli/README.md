# @ninna-ui/cli

> **Zero-config project scaffolding for Ninna UI** - choose your framework (Vite, Next.js, React Router 8, or Astro), pick a theme preset, and get a production-ready React app in seconds. TypeScript strict, Tailwind CSS v4, all 69 components pre-installed.

[![npm](https://img.shields.io/npm/v/@ninna-ui/cli.svg)](https://www.npmjs.com/package/@ninna-ui/cli)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](../../LICENSE)

📖 **[Full Documentation →](https://www.ninna-ui.dev/getting-started/installation)** &nbsp;|&nbsp; 📦 **[npm →](https://www.npmjs.com/package/@ninna-ui/cli)** &nbsp;|&nbsp; 🐙 **[GitHub →](https://github.com/ninna-ui/ninna-ui/tree/main/packages/cli)**

The official CLI for [Ninna UI](../../README.md). Scaffold a production-ready project with your preferred framework and theme preset - fully configured with Tailwind CSS v4, TypeScript strict mode, and all Ninna UI component packages pre-installed. No manual setup required.

## Usage

The CLI requires Node.js 22.12 or newer. Node.js 24 LTS is recommended for every starter; individual framework requirements are declared in each generated package and README.

```bash
npx @ninna-ui/cli init my-app
```

The interactive prompt will ask you to choose:

1. **Template** - Vite + React, Next.js 16, React Router 8, or Astro
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
npx @ninna-ui/cli init my-app -t vite-react --preset default --skip-install
```

## Templates

| Template       | Framework                       | Bundler           | CSS Plugin             |
| -------------- | ------------------------------- | ----------------- | ---------------------- |
| `vite-react`   | React 19 + TypeScript           | Vite 8            | `@tailwindcss/vite`    |
| `nextjs`       | Next.js 16 App Router           | Webpack/Turbopack | `@tailwindcss/postcss` |
| `react-router` | React Router 8 + TypeScript     | Vite 8            | `@tailwindcss/vite`    |
| `astro`        | Astro 7 + React 19 + TypeScript | Vite 8            | `@tailwindcss/vite`    |

Every template includes:

- All Ninna UI packages pre-installed
- Theme preset configured in CSS
- Demo page with a labeled form, Alert, Card, Tabs, CodeBlock, and Modal, built from published Ninna UI packages
- TypeScript strict mode
- Ready for production

Generated apps are private and start at version `0.0.0`. Their version is independent of CLI releases. Ninna dependencies use `latest`; framework dependencies use tested compatible ranges. The CLI reads its own version from Changesets-managed package metadata.

## Theme Presets

| Preset    | Colors           | Character          |
| --------- | ---------------- | ------------------ |
| `default` | Purple / Magenta | Vibrant, electric  |
| `ocean`   | Blue / Cyan      | Cool, professional |
| `sunset`  | Orange / Rose    | Warm, bold         |
| `forest`  | Green / Amber    | Natural, earthy    |
| `minimal` | Monochrome       | Clean, understated |

## Related Packages

- [`@ninna-ui/core`](../core/README.md) - Design tokens and theme presets
- [All packages](../../README.md#packages) - Complete package list
- [Starter templates](./templates/) - Template source code

## License

[MIT](../../LICENSE)

## Verifying template changes

Run `node scripts/smoke-cli-templates.mjs` from the repository root after installing workspace dependencies. It builds the real CLI, generates isolated projects, installs published packages, type-checks and builds all four starters. Add `--serve` to keep their production servers running for browser hydration and interaction checks. Node.js 24 LTS is recommended.
