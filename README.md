# Ninna UI

**Component quality of Chakra/Mantine. Theming simplicity of DaisyUI. Built on Tailwind CSS v4.**

A modern React component library with **69 accessible components**, **5 built-in themes**, and **zero JS runtime theming** — powered by CSS custom properties and oklch colors.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.1-38bdf8.svg)](https://tailwindcss.com/)
[![React](https://img.shields.io/badge/React-19-61dafb.svg)](https://react.dev/)
[![npm](https://img.shields.io/npm/v/@ninna-ui/core.svg)](https://www.npmjs.com/org/ninna-ui)

**[Documentation Website →](https://ninna-ui.dev)** · **[npm →](https://www.npmjs.com/org/ninna-ui)** · **[GitHub →](https://github.com/ninna-ui/ninna-ui)**

---

## Why Ninna UI?

Most component libraries force you to choose: **great components** (Chakra, Mantine) or **simple theming** (DaisyUI). Ninna UI gives you both.

- **Tailwind CSS v4.1 native** — CSS-first configuration. No `tailwind.config.ts`, no PostCSS plugins for theming
- **Zero JS runtime theming** — All 5 themes use CSS custom properties. Switch themes with one `@import` line
- **oklch color system** — Perceptually uniform, vibrant colors with automatic light/dark mode
- **Radix accessibility built-in** — Complex components (Select, Checkbox, Accordion, Modal) use Radix primitives under a clean API — no Radix types leak into your code
- **`data-slot` API** — 98 data-slot attributes across all components for surgical CSS overrides
- **No `'use client'` directives** — Every component works in React Server Components out of the box
- **TypeScript Strict** — Full type safety with JSDoc on every exported prop
- **Install only what you need** — 10 published packages, tree-shakeable, no monolithic bundle

## How Ninna UI Compares

| Feature | Ninna UI | shadcn/ui | Chakra UI | Mantine | DaisyUI |
|---------|:--------:|:---------:|:---------:|:-------:|:-------:|
| Tailwind CSS v4 native | **Yes** | Yes | No | No | Yes |
| Zero JS runtime theming | **Yes** | Yes | No | No | Yes |
| Built-in theme presets | **5** | 0 | 0 | 0 | 30+ |
| One-line theme switch | **Yes** | No | No | No | Yes |
| oklch colors | **Yes** | Partial | No | No | Yes |
| Radix accessibility | **Yes** | Yes | No | No | No |
| `data-slot` CSS targeting | **98 slots** | Yes | Yes | No | No |
| Modular packages | **10 pkgs** | Copy-paste | 1 package | 1 package | 1 plugin |
| No `'use client'` | **Yes** | Yes | No | No | N/A |
| CLI scaffolding | **3 templates** | Yes | No | No | No |
| React 19 | **Yes** | Yes | Yes | Yes | N/A |
| Framework agnostic | **Yes** | Yes | Yes | Yes | Yes |

> Ninna UI combines the **component quality and accessibility** of Chakra/Mantine with the **CSS-variable theming simplicity** of DaisyUI — all on Tailwind CSS v4.

## Quick Start

### 1. Install

```bash
pnpm add @ninna-ui/core @ninna-ui/primitives
```

### 2. Add theme to your CSS

```css
@import "tailwindcss";
@import "@ninna-ui/core/theme/presets/default.css";
@source "../node_modules/@ninna-ui/*";
```

### 3. Use components

```tsx
import { Button } from "@ninna-ui/primitives";
import { VStack } from "@ninna-ui/layout";

export function App() {
  return (
    <VStack gap="md">
      <Button color="primary" variant="solid">Get Started</Button>
      <Button color="secondary" variant="outline">Learn More</Button>
    </VStack>
  );
}
```

### Or scaffold a full project with the CLI

```bash
npx @ninna-ui/cli init my-app
```

Choose from **Vite + React**, **Next.js 15**, or **React Router** templates with your preferred theme preset.

## Packages

### Component Packages

| Package | Components | Description | README |
|---------|:----------:|-------------|--------|
| [`@ninna-ui/primitives`](./packages/primitives) | 15 | Button, Badge, Avatar, Text, Heading, Link, Code, Kbd, and more | [README](./packages/primitives/README.md) |
| [`@ninna-ui/feedback`](./packages/feedback) | 9 | Alert, Toast, Loading, Progress, CircularProgress, Skeleton, Status, EmptyState | [README](./packages/feedback/README.md) |
| [`@ninna-ui/forms`](./packages/forms) | 17 | Input, Select, Checkbox, Switch, Radio, Slider, FileUpload, and more | [README](./packages/forms/README.md) |
| [`@ninna-ui/layout`](./packages/layout) | 10 | Box, Stack, Flex, Grid, Container, Center, SimpleGrid, and more | [README](./packages/layout/README.md) |
| [`@ninna-ui/overlays`](./packages/overlays) | 5 | Modal, Drawer, Popover, Tooltip, DropdownMenu | [README](./packages/overlays/README.md) |
| [`@ninna-ui/navigation`](./packages/navigation) | 5 | Tabs, Accordion, Breadcrumbs, Pagination, Stepper | [README](./packages/navigation/README.md) |
| [`@ninna-ui/data-display`](./packages/data-display) | 7 | Card, Stat, Table, DataTable, Timeline, Tree, Calendar | [README](./packages/data-display/README.md) |
| [`@ninna-ui/code-block`](./packages/code-block) | 1 | Syntax-highlighted code block with copy-to-clipboard | [README](./packages/code-block/README.md) |

### Infrastructure Packages

| Package | Description | README |
|---------|-------------|--------|
| [`@ninna-ui/core`](./packages/core) | Design tokens, Tailwind class mappings, 5 CSS theme presets | [README](./packages/core/README.md) |
| [`@ninna-ui/cli`](./packages/cli) | Project scaffolding CLI with 3 framework templates | [README](./packages/cli/README.md) |
| `@ninna-ui/utils` | Shared utilities — bundled into each package (not installed separately) | [README](./packages/utils/README.md) |
| `@ninna-ui/react-internal` | Internal Radix engine wrappers (not published) | [README](./packages/react-internal/README.md) |

## Theme Presets

Switch themes with a single CSS import — no JavaScript configuration required:

```css
/* Pick one: */
@import "@ninna-ui/core/theme/presets/default.css";  /* Purple / Magenta */
@import "@ninna-ui/core/theme/presets/ocean.css";     /* Blue / Cyan */
@import "@ninna-ui/core/theme/presets/sunset.css";    /* Orange / Rose */
@import "@ninna-ui/core/theme/presets/forest.css";    /* Green / Amber */
@import "@ninna-ui/core/theme/presets/minimal.css";   /* Monochrome */
```

Every preset includes **automatic dark mode** via `prefers-color-scheme`, plus manual toggle with a `.dark` class. All colors use the **oklch** color space for perceptually uniform, vibrant palettes.

## Starter Templates

Get a production-ready project in seconds:

| Template | Framework | Bundler | CSS Integration |
|----------|-----------|---------|-----------------|
| [`vite-react`](./packages/cli/templates/vite-react) | React 19 | Vite 7 | `@tailwindcss/vite` |
| [`nextjs`](./packages/cli/templates/nextjs) | Next.js 15 | Webpack/Turbopack | `@tailwindcss/postcss` |
| [`react-router`](./packages/cli/templates/react-router) | React Router v7 | Vite 7 | `@tailwindcss/vite` |

```bash
npx @ninna-ui/cli init my-app -t nextjs --preset ocean
```

## Development

```bash
pnpm install           # Install dependencies
pnpm dev               # Start all dev watchers
pnpm build             # Build everything
pnpm --filter @ninna-ui/playground dev   # Developer sandbox at localhost:3000 (SPA)
pnpm --filter @ninna-ui/docs dev         # Storybook at localhost:6006
```

## Contributing & Changesets

**Changesets are required** for any PR that modifies public packages. This ensures proper versioning and changelog generation.

### Quick PR Workflow

```bash
# 1. Make your changes
git checkout -b feat/your-feature
# ...make changes...

# 2. Create a changeset (REQUIRED for public package changes)
pnpm changeset

# 3. Select affected packages (exclude private packages like @ninna-ui/utils)
# Choose version type: patch | minor | major
# Add a summary of changes

# 4. Commit and push
git add .changeset/*.md
git commit -m "feat: add your changes"
git push origin feat/your-feature
```

### Changeset Rules

- **Public packages changed?** → Changeset **required**
- **Private packages only?** → Changeset **optional**
- **Documentation only?** → Changeset **optional**

**Public Packages (require changeset):**
- `@ninna-ui/core`, `@ninna-ui/primitives`, `@ninna-ui/cli`, `@ninna-ui/code-block`
- `@ninna-ui/data-display`, `@ninna-ui/feedback`, `@ninna-ui/forms`, `@ninna-ui/layout`
- `@ninna-ui/navigation`, `@ninna-ui/overlays`

**Private Packages (no changeset needed):**
- `@ninna-ui/utils`, `@ninna-ui/react-internal`, `@ninna-ui/eslint-config`
- `@ninna-ui/test-config`, `@ninna-ui/tsconfig`

> **CI Enforcement:** GitHub Actions will automatically fail PRs that modify public packages without a changeset file.

For detailed contributing guidelines, see [Contributing Guide](./docs/guides/CONTRIBUTING.md).

> **Public documentation:** [ninna-ui.dev](https://ninna-ui.dev) — the full docs website lives in the separate `ninna-ui-web` project.

## Project Structure

```
ninna-ui/
├── packages/
│   ├── core/              # Design tokens + 5 CSS theme presets
│   ├── utils/             # Shared utilities (cn, composeRefs)
│   ├── react-internal/    # Radix engine wrappers (internal)
│   ├── primitives/        # 15 base components
│   ├── feedback/          # 9 feedback components
│   ├── forms/             # 17 form components
│   ├── layout/            # 10 layout components
│   ├── overlays/          # 5 overlay components
│   ├── navigation/        # 5 navigation components
│   ├── data-display/      # 7 data display components
│   ├── code-block/        # Syntax-highlighted code block
│   └── cli/               # Project scaffolding CLI
├── apps/
│   ├── playground/        # React Router v7 developer sandbox (SPA, internal)
│   └── docs/              # Storybook
├── docs/
│   ├── architecture/ARCHITECTURE.md  # Monorepo structure & dependency rules
│   ├── guides/CONTRIBUTING.md        # Development workflow & component checklist
│   └── standards/                    # ACCESSIBILITY.md, COMPONENT_STANDARD.md, TESTING_STRATEGY.md
```

## Documentation

- **[Documentation Website](https://ninna-ui.dev)** — Full public docs with live component demos
- **[Architecture Guide](./docs/architecture/ARCHITECTURE.md)** — Monorepo structure, dependency graph, theme system, canonical component pattern
- **[Contributing Guide](./docs/guides/CONTRIBUTING.md)** — Development workflow, package boundaries, PR process, component checklist
- **[Component Standards](./docs/standards/COMPONENT_STANDARD.md)** — File structure, props, accessibility, testing requirements
- **[Accessibility Standards](./docs/standards/ACCESSIBILITY.md)** — WCAG 2.1 AA compliance, ARIA, keyboard navigation
- **[Testing Strategy](./docs/standards/TESTING_STRATEGY.md)** — Test coverage requirements, vitest-axe integration
- **[Development Rules](./docs/guides/DEVELOPMENT_RULES.md)** — Naming conventions, accessibility rules, Radix usage, Tailwind CSS rules

## License

MIT License — see [LICENSE](./LICENSE) for details.
