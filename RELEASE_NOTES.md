# Ninna UI v0.1.0 — Initial Release

We're excited to announce the first public release of **Ninna UI**, a modern React component library built with TypeScript, Tailwind CSS v4.1, and accessibility in mind.

## Published Packages (10)

All packages are available on npm under the `@ninna-ui` scope:

### Core

- **`@ninna-ui/core`** — Design tokens, Tailwind class mappings, and 5 CSS theme presets (default, ocean, sunset, forest, minimal). Zero React, zero JS runtime theming — pure CSS custom properties.

### Component Packages

- **`@ninna-ui/primitives`** — 15 base components: Button, Badge, Avatar, Text, Heading, Link, Code, Blockquote, List, Kbd, Mark, Divider, IconButton, LinkOverlay, LinkBox
- **`@ninna-ui/feedback`** — 9 feedback components: Alert, Toast, Toaster, Loading, Progress, CircularProgress, Skeleton, Status, EmptyState
- **`@ninna-ui/forms`** — 17 form components: Input, Textarea, Checkbox, Switch, RadioGroup, Select, Slider, Field, FormControl, FormGroup, FormLabel, FormMessage, NumberInput, PinInput, FileUpload, HiddenField, InputGroup
- **`@ninna-ui/layout`** — 10 layout components: Box, Stack (HStack, VStack), Flex, Grid, SimpleGrid, Container, Center, Wrap, AspectRatio, Separator
- **`@ninna-ui/overlays`** — 5 overlay components: Modal, Drawer, Popover, Tooltip, DropdownMenu
- **`@ninna-ui/navigation`** — 5 navigation components: Tabs, Accordion, Breadcrumbs, Pagination, Stepper
- **`@ninna-ui/data-display`** — 7 data display components: Card, Stat, Table, DataTable, Timeline, Tree, Calendar
- **`@ninna-ui/code-block`** — Syntax-highlighted code block with copy-to-clipboard, line numbers, and dark mode

### Developer Tools

- **`@ninna-ui/cli`** — Project scaffolding CLI: `npx @ninna-ui/cli init my-app`

## Quick Start

```bash
# Install
pnpm add @ninna-ui/core @ninna-ui/primitives

# Or scaffold a full project
npx @ninna-ui/cli init my-app
```

```css
/* Add to your main CSS file */
@import "tailwindcss";
@import "@ninna-ui/core/theme/presets/default.css";
@source "../node_modules/@ninna-ui/*";
```

```tsx
import { Button } from "@ninna-ui/primitives";
import { VStack } from "@ninna-ui/layout";

export function App() {
  return (
    <VStack gap="md">
      <Button color="primary" variant="solid">Get Started</Button>
    </VStack>
  );
}
```

## Key Features

- **69 accessible components** across 10 published packages
- **5 built-in themes** (default, ocean, sunset, forest, minimal) — switch with one CSS import
- **Zero JS runtime theming** — all theming via CSS custom properties
- **oklch color system** — perceptually uniform colors with WCAG AA contrast guaranteed
- **Radix UI powered** — complex components (Select, Modal, Tabs, Accordion) use Radix internally; Radix types never leak to your code
- **Tailwind CSS v4.1 native** — CSS-first configuration, no `tailwind.config.ts` needed
- **`data-slot` API** — 98 data-slot attributes for surgical CSS overrides
- **No `'use client'` directives** — works in React Server Components
- **TypeScript strict** — full type safety with JSDoc on every exported prop
- **3 starter templates** — Vite + React, Next.js 15, React Router v7

## Framework Support

All components work with any React 19+ framework:
- **Next.js 15** App Router (SSR + RSC compatible)
- **React Router v7** (SSR + SPA modes)
- **Vite** (SPA)
- **Remix** (SSR)
- Any other React 19+ setup

## Documentation

- **Website**: https://ninna-ui.dev
- **GitHub**: https://github.com/ninna-ui/ninna-ui
- **npm**: https://www.npmjs.com/org/ninna-ui

## Notes

- `@ninna-ui/utils` is **not published** — it is bundled into each component package
- `@ninna-ui/react-internal` is **not published** — private Radix engine wrappers
- Starter templates use `^0.1.0` versions (not `workspace:*`)
- All packages have `"sideEffects": false` except `core` (`"sideEffects": ["**/*.css"]`)

## License

MIT © Ninna UI Team
