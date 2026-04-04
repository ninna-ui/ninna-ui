# Ninna UI v0.5.0 - Coordinated Release

> **Full React UI library with zero runtime styling and native Tailwind CSS v4 support** - 69 accessible, production-ready components, 5 built-in theme presets, and zero JavaScript theming overhead.

We're excited to announce the first public release of **Ninna UI** - the open-source React component library that combines Chakra-level component quality with DaisyUI-simple theming. One CSS import. Instant design system.

## Published Packages (10)

All packages are available on npm under the [`@ninna-ui`](https://www.npmjs.com/org/ninna-ui) scope:

### Design System Foundation

- **`@ninna-ui/core`** - Design tokens, Tailwind CSS v4 class mappings, and 5 production-ready theme presets (default, ocean, sunset, forest, minimal). Zero React dependency, zero JS runtime theming - pure CSS custom properties with oklch perceptual colors.

### Component Packages (69 components)

- **`@ninna-ui/primitives`** (15) - Button, Badge, Avatar, Text, Heading, Link, Code, Blockquote, List, Kbd, Mark, Divider, IconButton, LinkOverlay, LinkBox
- **`@ninna-ui/feedback`** (9) - Alert, Toast, Toaster, Loading, Progress, CircularProgress, Skeleton, Status, EmptyState
- **`@ninna-ui/forms`** (17) - Input, Textarea, Checkbox, Switch, RadioGroup, Select, Slider, Field, FormControl, FormGroup, FormLabel, FormMessage, NumberInput, PinInput, FileUpload, HiddenField, InputGroup
- **`@ninna-ui/layout`** (10) - Box, Stack (HStack, VStack), Flex, Grid, SimpleGrid, Container, Center, Wrap, AspectRatio, Separator
- **`@ninna-ui/overlays`** (5) - Modal, Drawer, Popover, Tooltip, DropdownMenu
- **`@ninna-ui/navigation`** (5) - Tabs, Accordion, Breadcrumbs, Pagination, Stepper
- **`@ninna-ui/data-display`** (7) - Card, Stat, Table, DataTable, Timeline, Tree, Calendar
- **`@ninna-ui/code-block`** (1) - Lightweight syntax-highlighted code block with copy-to-clipboard, line numbers, and automatic dark mode - no Prism or Shiki dependency

### Developer Tools

- **`@ninna-ui/cli`** - Zero-config project scaffolding: `npx @ninna-ui/cli init my-app`

## Quick Start

```bash
# Install core + your first package
pnpm add @ninna-ui/core @ninna-ui/primitives

# Or scaffold a production-ready project in seconds
npx @ninna-ui/cli init my-app
```

```css
/* One line of CSS - instant design system */
@import "tailwindcss";
@import "@ninna-ui/core/theme/presets/default.css";
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

- **69 accessible components** across 10 published packages - tree-shakeable, install only what you need
- **5 built-in theme presets** (default, ocean, sunset, forest, minimal) - switch with one CSS import, no JS configuration
- **Zero JS runtime theming** - all theming via CSS custom properties. No providers, no context, no hydration cost
- **oklch perceptual color system** - uniform, vibrant colors with guaranteed WCAG AA contrast ratios
- **Radix-powered accessibility, zero Radix API leakage** - complex components (Select, Modal, Tabs, Accordion) use Radix internally. Your code never imports or types against Radix
- **Tailwind CSS v4.1 native** - CSS-first configuration. No `tailwind.config.ts` needed
- **`data-slot` CSS override API** - 98 named slots for surgical styling without `!important`
- **React Server Components ready** - zero `'use client'` directives in any component
- **TypeScript Strict with full JSDoc** - complete type safety and IntelliSense on every prop
- **3 starter templates** - Vite + React 19, Next.js 15 App Router, React Router v7

## Framework Support

All components work with any React 19+ framework - no framework-specific wrappers or adapters needed:

- **Next.js 15** App Router (SSR + RSC compatible)
- **React Router v7** (SSR + SPA modes)
- **Vite** (SPA)
- **Remix** (SSR)
- Any other React 19+ setup

## Documentation

- **Website:** [ninna-ui.dev](https://ninna-ui.dev) - full docs with live demos
- **GitHub:** [github.com/ninna-ui/ninna-ui](https://github.com/ninna-ui/ninna-ui)
- **npm:** [npmjs.com/org/ninna-ui](https://www.npmjs.com/org/ninna-ui)

## Technical Notes

- `@ninna-ui/utils` is **bundled** into each component package (not published separately)
- `@ninna-ui/react-internal` is an **internal dependency** - Radix engine wrappers auto-installed by component packages
- Starter templates pin `^0.5.0` versions (not `workspace:*`)
- All packages have `"sideEffects": false` except `core` (`"sideEffects": ["**/*.css"]`)

## License

MIT © Ninna UI Team
