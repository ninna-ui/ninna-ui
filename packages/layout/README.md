# @ninna-ui/layout

> **10 responsive React layout primitives** - Box, Stack, Flex, Grid, Container, Center, SimpleGrid, and more. Pure React components with prop-driven spacing, alignment, and responsive grid layouts. No Radix dependency.

[![npm](https://img.shields.io/npm/v/@ninna-ui/layout.svg)](https://www.npmjs.com/package/@ninna-ui/layout)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](../../LICENSE)

📖 **[Full Documentation →](https://www.ninna-ui.dev/layout)** &nbsp;|&nbsp; 📦 **[npm →](https://www.npmjs.com/package/@ninna-ui/layout)** &nbsp;|&nbsp; 🐙 **[GitHub →](https://github.com/ninna-ui/ninna-ui/tree/main/packages/layout)**

The structural foundation for [Ninna UI](../../README.md) apps - responsive layout primitives that handle spacing, alignment, and grid composition through clean props instead of raw CSS classes. All components are pure React with no Radix dependency, full `forwardRef` support, `className` merging, and `data-slot` CSS targeting.

## Installation

```bash
pnpm add @ninna-ui/layout @ninna-ui/core
```

## CSS Setup

```css
@import "tailwindcss";
@import "@ninna-ui/core/theme/presets/default.css";

@variant dark (&:is(.dark *));
```

## HTML Setup

Add the `data-theme` attribute to your `<html>` element:

```html
<html data-theme="default">
```

## Components

| Component | Description | Key Props |
|-----------|-------------|-----------|
| `Box` | Base layout element with polymorphic `as` prop | `as`, `className` |
| `Container` | Centered content wrapper with max-width | `maxWidth` (sm, md, lg, xl, 2xl, full) |
| `Stack` | Vertical stack with gap control | `gap`, `align`, `justify` |
| `HStack` | Horizontal stack (shorthand for `Stack direction="horizontal"`) | `gap`, `align`, `justify` |
| `VStack` | Vertical stack (shorthand for `Stack direction="vertical"`) | `gap`, `align`, `justify` |
| `Flex` | Flexbox container with full flex control | `direction`, `align`, `justify`, `wrap`, `gap` |
| `Grid` | CSS Grid container | `columns`, `rows`, `gap`, `flow` |
| `SimpleGrid` | Auto-responsive grid with equal columns | `columns`, `minChildWidth`, `gap` |
| `Center` | Centers content horizontally and vertically | - |
| `Wrap` | Flex wrap with gap control | `gap`, `align`, `justify` |
| `AspectRatio` | Maintains a fixed aspect ratio | `ratio` (square, video, portrait, etc.) |
| `Separator` | Visual separator line | `orientation` (horizontal, vertical) |

## Quick Start

```tsx
import { Container, VStack, HStack, Grid, SimpleGrid } from "@ninna-ui/layout";
import { Heading, Text, Button } from "@ninna-ui/primitives";

function Dashboard() {
  return (
    <Container maxWidth="xl">
      <VStack gap="lg">
        <HStack gap="md" justify="between">
          <Heading as="h1" size="2xl">Dashboard</Heading>
          <Button color="primary">New Item</Button>
        </HStack>

        <SimpleGrid columns={3} gap="md">
          <div>Card 1</div>
          <div>Card 2</div>
          <div>Card 3</div>
        </SimpleGrid>
      </VStack>
    </Container>
  );
}
```

## All Exports

```typescript
import {
  Box, type BoxProps,
  Container, type ContainerProps,
  Stack, HStack, VStack, type StackProps,
  Flex, type FlexProps,
  Grid, type GridProps,
  SimpleGrid, type SimpleGridProps,
  Center, type CenterProps,
  Wrap, type WrapProps,
  AspectRatio, type AspectRatioProps,
  Separator, type SeparatorProps,
} from "@ninna-ui/layout";
```

## Related Packages

- [`@ninna-ui/core`](../core/README.md) - Design tokens and theme presets (required)
- [`@ninna-ui/primitives`](../primitives/README.md) - Base components (Button, Text, Heading)
- [`@ninna-ui/forms`](../forms/README.md) - Form components (Input, Select, Checkbox)
- [All packages](../../README.md#packages) - Complete package list

## License

[MIT](../../LICENSE)
