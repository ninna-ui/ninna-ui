# Ninna UI

**Full React UI library with zero runtime styling and native Tailwind CSS v4 support.**

The open-source React component library that combines **Chakra-level component quality** with **DaisyUI-simple theming** - 69 accessible, production-ready components, 5 built-in theme presets, and zero JavaScript theming overhead. One CSS import. Instant design system.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.1-38bdf8.svg)](https://tailwindcss.com/)
[![React](https://img.shields.io/badge/React-19-61dafb.svg)](https://react.dev/)
[![npm](https://img.shields.io/npm/v/@ninna-ui/core.svg)](https://www.npmjs.com/org/ninna-ui)

**[Documentation →](https://www.ninna-ui.dev)** · **[npm →](https://www.npmjs.com/org/ninna-ui)** · **[GitHub →](https://github.com/ninna-ui/ninna-ui)** · **[Comparison →](https://www.ninna-ui.dev/comparison)**

---

## Why Ninna UI?

Most component libraries force a trade-off: **great components** (Chakra, Mantine) or **simple theming** (DaisyUI). Ninna UI eliminates that choice - you get both, with zero configuration overhead.

- **Tailwind CSS v4.1 native** - Pure CSS-first configuration. No `tailwind.config.ts`, no PostCSS plugins, no build-step theming
- **Zero JS runtime theming** - All 5 themes are pure CSS custom properties. Switch themes with a single `@import` - no providers, no context, no hydration cost
- **oklch color system** - Perceptually uniform, high-chroma colors with automatic light/dark mode and guaranteed WCAG AA contrast
- **Radix accessibility, zero Radix API leakage** - Complex components (Select, Modal, Tabs, Accordion) are powered by Radix primitives internally. Your code never imports or types against Radix
- **`data-slot` CSS override API** - 98 named slots across all components for surgical styling without `!important` hacks
- **React Server Components ready** - Zero `'use client'` directives. Every component works in RSC, SSR, and SPA out of the box
- **TypeScript Strict with full JSDoc** - Complete type safety, IntelliSense documentation on every prop, and zero `any` in the public API
- **Tree-shakeable modular packages** - 12 independently installable packages. Import only what you use - no monolithic bundle

## How Ninna UI Compares

| Feature | Ninna UI | shadcn/ui | Chakra UI | Mantine | DaisyUI |
|---------|:--------:|:---------:|:---------:|:-------:|:-------:|
| Tailwind CSS v4 native | **Yes** | Yes | No | No | Yes |
| Zero JS runtime theming | **Yes** | Yes | No | No | Yes |
| Built-in theme presets | **5** | 0 | 0 | 0 | 30+ |
| One-line theme switch | **Yes** | No | No | No | Yes |
| oklch perceptual colors | **Yes** | Partial | No | No | Yes |
| Radix accessibility | **Yes** | Yes | No | No | No |
| `data-slot` CSS targeting | **98 slots** | Yes | Yes | No | No |
| Modular npm packages | **12 pkgs** | Copy-paste | 1 package | 1 package | 1 plugin |
| No `'use client'` needed | **Yes** | Yes | No | No | N/A |
| CLI project scaffolding | **3 templates** | Yes | No | No | No |
| React 19 support | **Yes** | Yes | Yes | Yes | N/A |
| Framework agnostic | **Yes** | Yes | Yes | Yes | Yes |

> **In short:** Ninna UI delivers the **component depth and accessibility** of Chakra/Mantine with the **CSS-variable theming simplicity** of DaisyUI - built natively on Tailwind CSS v4.

## Quick Start

### 1. Install

```bash
pnpm add @ninna-ui/core @ninna-ui/primitives
```

### 2. Add a theme to your CSS (one line)

```css
@import "tailwindcss";
@import "@ninna-ui/core/theme/presets/default.css";
```

### 3. Build your UI

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

### Or scaffold a production-ready project in seconds

```bash
npx @ninna-ui/cli init my-app
```

Choose from **Vite + React**, **Next.js 15**, or **React Router v7** templates - pre-configured with your preferred theme preset, TypeScript strict mode, and all Ninna UI packages.

## Packages

### Component Packages

| Package | Components | What It Does |
|---------|:----------:|--------------|
| [`@ninna-ui/primitives`](./packages/primitives) | 14 | Essential building blocks - Button, Badge, Avatar, Text, Heading, Link, Code, Kbd, Divider, and more |
| [`@ninna-ui/feedback`](./packages/feedback) | 8 | User feedback and status communication - Alert, Toast, Progress, Loading, Skeleton, EmptyState |
| [`@ninna-ui/forms`](./packages/forms) | 17 | Complete form toolkit with validation - Input, Select, Checkbox, Switch, RadioGroup, Slider, FileUpload |
| [`@ninna-ui/layout`](./packages/layout) | 10 | Responsive layout primitives - Box, Stack, Flex, Grid, Container, Center, SimpleGrid, AspectRatio |
| [`@ninna-ui/overlays`](./packages/overlays) | 5 | Accessible overlay components with focus trapping - Modal, Drawer, Popover, Tooltip, DropdownMenu |
| [`@ninna-ui/navigation`](./packages/navigation) | 5 | App navigation patterns - Tabs, Accordion, Breadcrumbs, Pagination, Stepper |
| [`@ninna-ui/data-display`](./packages/data-display) | 7 | Data visualization components - Card, Stat, Table, DataTable, Timeline, Tree, Calendar |
| [`@ninna-ui/code-block`](./packages/code-block) | 1 | Lightweight syntax-highlighted code block with copy-to-clipboard - no Prism or Shiki dependency |

### Infrastructure Packages

| Package | What It Does |
|---------|--------------|
| [`@ninna-ui/core`](./packages/core) | Design system foundation - TypeScript tokens, Tailwind class mappings, 5 CSS theme presets with oklch colors and automatic dark mode |
| [`@ninna-ui/cli`](./packages/cli) | Zero-config project scaffolding - 3 framework templates (Vite, Next.js, React Router) with theme selection |
| [`@ninna-ui/utils`](./packages/utils) | Shared utility functions - `cn()` class merger, `composeRefs`, `createContext`, keyboard constants, SSR helpers |
| [`@ninna-ui/react-internal`](./packages/react-internal) | Radix engine isolation layer - wraps 11 Radix primitives behind clean TypeScript interfaces so Radix never leaks to consumers |

## Theme Presets

Switch your entire design system with a single CSS import - no JavaScript configuration, no provider wrappers, no build step:

```css
@import "@ninna-ui/core/theme/presets/default.css";  /* Electric Purple / Magenta */
@import "@ninna-ui/core/theme/presets/ocean.css";     /* Cool Blue / Cyan */
@import "@ninna-ui/core/theme/presets/sunset.css";    /* Warm Orange / Rose */
@import "@ninna-ui/core/theme/presets/forest.css";    /* Natural Green / Amber */
@import "@ninna-ui/core/theme/presets/minimal.css";   /* Clean Monochrome */
```

Every preset includes **automatic dark mode** via `prefers-color-scheme`, plus manual toggle with a `.dark` class. All colors use the **oklch** color space for perceptually uniform, vibrant palettes with guaranteed WCAG AA contrast.

## Starter Templates

Production-ready project in seconds - TypeScript strict, all packages pre-installed, theme configured:

| Template | Framework | Bundler | CSS Integration |
|----------|-----------|---------|-----------------|
| [`vite-react`](./packages/cli/templates/vite-react) | React 19 | Vite 7 | `@tailwindcss/vite` |
| [`nextjs`](./packages/cli/templates/nextjs) | Next.js 15 App Router | Webpack/Turbopack | `@tailwindcss/postcss` |
| [`react-router`](./packages/cli/templates/react-router) | React Router v7 | Vite 7 | `@tailwindcss/vite` |

```bash
npx @ninna-ui/cli init my-app -t nextjs --preset ocean
```

## Development

```bash
pnpm install           # Install all dependencies
pnpm dev               # Start all dev watchers
pnpm build             # Build all 12 packages
pnpm test              # Run 700+ tests across 51 test files
pnpm lint              # Lint + typecheck all packages
pnpm --filter @ninna-ui/playground dev   # Developer sandbox at localhost:3000
pnpm --filter @ninna-ui/docs dev         # Storybook at localhost:6006
```

> **Public documentation:** [ninna-ui.dev](https://www.ninna-ui.dev) - the full docs website is in the separate `ninna-ui-web` repository.

## Project Structure

```
ninna-ui/
├── packages/
│   ├── core/              # Design tokens, Tailwind class maps, 5 CSS theme presets
│   ├── utils/             # Shared utilities - cn(), composeRefs, createContext
│   ├── react-internal/    # Radix engine isolation layer (11 engines + Slot)
│   ├── primitives/        # 14 foundational components (pure React, no Radix)
│   ├── feedback/          # 8 user feedback components + toast API
│   ├── forms/             # 17 form components with Radix-powered accessibility
│   ├── layout/            # 10 responsive layout primitives
│   ├── overlays/          # 5 overlay components with focus trapping
│   ├── navigation/        # 5 navigation components (2 Radix + 3 custom)
│   ├── data-display/      # 7 data display components with semantic HTML
│   ├── code-block/        # Lightweight syntax highlighter (regex, no Prism/Shiki)
│   └── cli/               # Project scaffolding with 3 framework templates
├── apps/
│   ├── playground/        # React Router v7 developer sandbox (SPA mode)
│   └── docs/              # Storybook 10 - interactive component stories
├── docs/
│   ├── architecture/      # Monorepo structure, dependency graph, design patterns
│   ├── guides/            # Contributing, development rules, publishing
│   ├── standards/         # Accessibility, component standards, testing strategy
│   └── brand/             # Product identity and competitive positioning
```

## Documentation

- **[Documentation Website](https://www.ninna-ui.dev)** - Full public docs with live demos, API reference, and framework guides
- **[Architecture Guide](./docs/architecture/ARCHITECTURE.md)** - Monorepo structure, dependency graph, theme system, component patterns
- **[Contributing Guide](./docs/guides/CONTRIBUTING.md)** - Development workflow, package boundaries, PR process, component checklist
- **[Component Standards](./docs/standards/COMPONENT_STANDARD.md)** - File structure, props design, accessibility, testing requirements
- **[Accessibility Standards](./docs/standards/ACCESSIBILITY.md)** - WCAG 2.1 AA compliance, ARIA patterns, keyboard navigation
- **[Testing Strategy](./docs/standards/TESTING_STRATEGY.md)** - 700+ tests, vitest-axe integration, priority-based coverage
- **[Development Rules](./docs/guides/DEVELOPMENT_RULES.md)** - Naming conventions, Tailwind CSS rules, Radix isolation, data attributes

## License

MIT License - see [LICENSE](./LICENSE) for details.
