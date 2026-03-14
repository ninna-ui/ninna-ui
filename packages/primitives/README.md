# @ninna-ui/primitives

> 15 base UI components for the Ninna-UI design system — buttons, typography, badges, avatars, and more.

[![npm](https://img.shields.io/npm/v/@ninna-ui/primitives.svg)](https://www.npmjs.com/package/@ninna-ui/primitives)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](../../LICENSE)

📖 **[Full Documentation →](https://www.ninna-ui.dev/primitives)** &nbsp;|&nbsp; 📦 **[npm →](https://www.npmjs.com/package/@ninna-ui/primitives)** &nbsp;|&nbsp; 🐙 **[GitHub →](https://github.com/ninna-ui/ninna-ui/tree/main/packages/primitives)**

The foundational component set of [Ninna UI](../../README.md) — simple, accessible, and composable. Every component supports `forwardRef`, `className`, `data-slot` targeting, and `focus-visible` accessibility out of the box.

**No Radix dependency.** All primitives are pure React — lightweight and stateless.

## Installation

```bash
pnpm add @ninna-ui/primitives @ninna-ui/core
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

| Component | Description | Variants | Colors | Sizes |
|-----------|-------------|----------|--------|-------|
| `Button` | Primary action element | solid, soft, outline, ghost, text | 8 | 5 |
| `IconButton` | Icon-only button | solid, soft, outline, ghost | 8 | 5 |
| `Badge` | Status/count indicator | solid, soft, outline | 8 | 3 |
| `Avatar` | User image with fallback | — | 8 | 5 |
| `AvatarGroup` | Grouped avatar stack | — | — | — |
| `Text` | Paragraph/span text | — | — | 8 sizes |
| `Heading` | h1–h6 with consistent scale | — | — | 8 sizes |
| `Link` | Styled anchor element | — | — | — |
| `LinkOverlay` / `LinkBox` | Clickable card pattern | — | — | — |
| `Code` | Inline code highlight | solid, soft, outline, ghost | 8 | 3 |
| `Blockquote` | Styled quotation block | bordered, filled, plain | 8 | — |
| `List` / `ListItem` | Ordered/unordered lists | — | — | — |
| `Kbd` | Keyboard shortcut indicator | — | — | 3 |
| `Mark` | Highlighted text | — | 8 | — |
| `Divider` | Horizontal/vertical separator | solid, dashed, dotted | 8 | 3 weights |

## Quick Start

```tsx
import { Button, Badge, Heading, Text, Avatar } from "@ninna-ui/primitives";

function Hero() {
  return (
    <div>
      <Badge color="primary" variant="soft">New</Badge>
      <Heading as="h1" size="4xl">Welcome</Heading>
      <Text size="lg" className="text-base-content/70">
        Build beautiful interfaces with Ninna UI
      </Text>
      <Button color="primary" size="lg">Get Started</Button>
    </div>
  );
}
```

## All Exports

```typescript
import {
  Button, type ButtonProps,
  IconButton, type IconButtonProps,
  Badge, type BadgeProps,
  Avatar, AvatarGroup, type AvatarProps, type AvatarGroupProps,
  Text, type TextProps,
  Heading, type HeadingProps,
  Link, type LinkProps,
  LinkOverlay, LinkBox, type LinkOverlayProps, type LinkBoxProps,
  Code, type CodeProps,
  Blockquote, type BlockquoteProps,
  List, ListItem, type ListProps, type ListItemProps,
  Kbd, type KbdProps,
  Mark, type MarkProps,
  Divider, type DividerProps,
} from "@ninna-ui/primitives";
```

## Accessibility

Every primitive includes:
- **`forwardRef`** + `displayName` on all components
- **`data-slot`** attributes for surgical CSS targeting
- **`focus-visible`** ring styles for keyboard users
- **`className`** prop always accepted and applied last via `cn()`
- **ARIA attributes** where applicable

## Related Packages

- [`@ninna-ui/core`](../core/README.md) — Design tokens and theme presets (required)
- [`@ninna-ui/layout`](../layout/README.md) — Layout components (Box, Stack, Grid)
- [`@ninna-ui/feedback`](../feedback/README.md) — Feedback components (Alert, Toast, Loading)
- [All packages](../../README.md#packages) — Complete package list

## License

[MIT](../../LICENSE)
