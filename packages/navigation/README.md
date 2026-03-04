# @ninna-ui/navigation

> 5 navigation components for Ninna-UI — Tabs, Accordion, Breadcrumbs, Pagination, and Stepper.

[![npm](https://img.shields.io/npm/v/@ninna-ui/navigation.svg)](https://www.npmjs.com/package/@ninna-ui/navigation)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](../../LICENSE)

📖 **[Full Documentation →](https://www.ninna-ui.dev/navigation)** &nbsp;|&nbsp; 📦 **[npm →](https://www.npmjs.com/package/@ninna-ui/navigation)** &nbsp;|&nbsp; 🐙 **[GitHub →](https://github.com/ninna-ui/ninna-ui/tree/main/packages/navigation)**

Navigation components for [Ninna UI](../../README.md). Tabs and Accordion are powered by [Radix UI](https://www.radix-ui.com/) for WAI-ARIA compliance and keyboard navigation. Breadcrumbs, Pagination, and Stepper are custom implementations with semantic HTML (`<nav>`, `<ol>`, `aria-current`).

## Installation

```bash
pnpm add @ninna-ui/navigation @ninna-ui/core
```

## CSS Setup

```css
@import "tailwindcss";
@import "@ninna-ui/core/theme/presets/default.css";
@source "../node_modules/@ninna-ui/*";
```

## Components

| Component | Description | Engine |
|-----------|-------------|--------|
| `Tabs` | Tabbed content panels with keyboard arrow navigation | TabsEngine (Radix) |
| `Accordion` | Collapsible content sections (single or multiple open) | AccordionEngine (Radix) |
| `Breadcrumbs` | Path navigation with semantic `<nav>` / `<ol>` | Custom |
| `Pagination` | Page navigation with first/prev/next/last controls | Custom |
| `Stepper` | Multi-step progress indicator | Custom |

## Quick Start

```tsx
import { Tabs, Accordion, Breadcrumbs, Pagination } from "@ninna-ui/navigation";

function App() {
  return (
    <>
      {/* Tabs */}
      <Tabs defaultValue="overview">
        <Tabs.List>
          <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
          <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="overview">Overview content</Tabs.Content>
        <Tabs.Content value="settings">Settings content</Tabs.Content>
      </Tabs>

      {/* Accordion */}
      <Accordion type="single" collapsible>
        <Accordion.Item value="faq-1">
          <Accordion.Trigger>What is Ninna UI?</Accordion.Trigger>
          <Accordion.Content>
            A modern React component library built on Tailwind CSS v4.
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>

      {/* Breadcrumbs */}
      <Breadcrumbs>
        <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
        <Breadcrumbs.Item href="/docs">Docs</Breadcrumbs.Item>
        <Breadcrumbs.Item current>Navigation</Breadcrumbs.Item>
      </Breadcrumbs>

      {/* Pagination */}
      <Pagination totalPages={10} currentPage={3} onPageChange={setPage} />
    </>
  );
}
```

## Accessibility

- **Tabs** — Arrow key navigation between triggers, `role="tablist"`, `aria-selected`
- **Accordion** — Arrow key navigation, `aria-expanded`, animated open/close
- **Breadcrumbs** — Semantic `<nav aria-label="Breadcrumb">` with `<ol>`
- **Pagination** — `aria-current="page"`, descriptive `aria-label` on controls
- **Stepper** — Step status communicated via `aria-current="step"`

## Related Packages

- [`@ninna-ui/core`](../core/README.md) — Design tokens and theme presets (required)
- [`@ninna-ui/primitives`](../primitives/README.md) — Base components (Button, Text)
- [`@ninna-ui/overlays`](../overlays/README.md) — Overlay components (Modal, Dropdown)
- [All packages](../../README.md#packages) — Complete package list

## License

[MIT](../../LICENSE)
