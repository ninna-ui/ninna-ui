# @ninna-ui/core

> Design system foundation — pure TypeScript tokens, Tailwind class mappings, and 5 CSS theme presets with automatic dark mode.

[![npm](https://img.shields.io/npm/v/@ninna-ui/core.svg)](https://www.npmjs.com/package/@ninna-ui/core)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](../../LICENSE)

📖 **[Full Documentation →](https://www.ninna-ui.dev/getting-started/theming)** &nbsp;|&nbsp; 📦 **[npm →](https://www.npmjs.com/package/@ninna-ui/core)** &nbsp;|&nbsp; 🐙 **[GitHub →](https://github.com/ninna-ui/ninna-ui/tree/main/packages/core)**

`@ninna-ui/core` is the zero-dependency foundation of [Ninna UI](../../README.md). It contains **no React code, no JSX, and no component logic** — only the shared design language that every component package consumes.

**Why this matters:** Unlike libraries that bundle theming into a JS runtime (Chakra UI, Mantine), Ninna UI's entire theme system lives in pure CSS. Your app ships zero theming JavaScript — just CSS custom properties that the browser resolves natively.

## Installation

```bash
pnpm add @ninna-ui/core
```

## CSS Setup

Add one of the 5 theme presets to your app's CSS entry point, then set `data-theme` on your root element:

```css
@import "tailwindcss";
@import "@ninna-ui/core/theme/presets/default.css";

@variant dark (&:is(.dark *));
```

```html
<html data-theme="default">
```

> **No `@source` needed** — each theme preset automatically scans all `@ninna-ui` package dist files via built-in `@source` directives. Every preset requires a `data-theme` attribute to activate. This allows multiple presets to be safely imported for per-section theming without CSS conflicts.

| Preset | Colors | Character |
|--------|--------|-----------|
| `default.css` | Purple / Magenta | Vibrant, electric |
| `ocean.css` | Blue / Cyan | Cool, professional |
| `sunset.css` | Orange / Rose | Warm, bold |
| `forest.css` | Green / Amber | Natural, earthy |
| `minimal.css` | Monochrome | Clean, understated |

**Switch themes by changing one line** — no JavaScript configuration, no provider wrappers, no build step. All presets can be imported simultaneously for per-section theming using nested `data-theme` attributes.

### Framework-Specific Setup

**Vite / React Router** — use `@tailwindcss/vite`:
```ts
// vite.config.ts
import tailwindcss from "@tailwindcss/vite";
export default { plugins: [tailwindcss()] };
```

**Next.js** — use `@tailwindcss/postcss`:
```js
// postcss.config.mjs
export default { plugins: { "@tailwindcss/postcss": {} } };
```

## Dark Mode

Every preset includes **automatic dark mode** via `@media (prefers-color-scheme: dark)`. The selector pattern per preset is:

```css
/* Light (default when no class set) */
[data-theme="preset"] { }

/* Explicit dark — .dark class on <html> or ancestor */
.dark [data-theme="preset"],
[data-theme="preset"].dark { }

/* System dark — no class, follows OS preference */
@media (prefers-color-scheme: dark) {
  [data-theme="preset"]:not(.light):not(.dark) { }
}
```

For manual toggle, add the `.dark` or `.light` class to your root element:

```html
<!-- Forced dark -->
<html data-theme="default" class="dark">

<!-- Forced light (blocks OS preference) -->
<html data-theme="default" class="light">

<!-- System preference auto (no class) -->
<html data-theme="default">
```

All colors use the **oklch** color space — perceptually uniform, vibrant, and WCAG AA compliant.

## Design Tokens

Type definitions for the design system's foundational values — consumed by every component package:

```typescript
import type { Color, Size, Radius, ColorVariant } from '@ninna-ui/core';
```

| Token | Values |
|-------|--------|
| `Color` | `neutral`, `primary`, `secondary`, `accent`, `info`, `success`, `warning`, `danger` |
| `Size` | `xs`, `sm`, `md`, `lg`, `xl` |
| `CompactSize` | `sm`, `md`, `lg` |
| `Radius` | `none`, `sm`, `md`, `lg`, `xl`, `2xl`, `full` |
| `TextSize` | `base`, `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`, `6xl` |
| `TextWeight` | `light`, `normal`, `medium`, `semibold`, `bold` |
| `TextAs` | `p`, `span`, `div`, `h1`–`h6` |
| `HeadingLevel` | `h1`, `h2`, `h3`, `h4`, `h5`, `h6` |
| `ColorVariant` | `solid`, `soft`, `outline` |
| `ButtonVariant` | `solid`, `soft`, `outline`, `ghost`, `text` |
| `InputVariant` | `outline`, `filled`, `flushed`, `unstyled` |

## Tailwind Class Mappings

Pre-built maps from design tokens to Tailwind CSS classes — used internally by component `.styles.ts` files:

```typescript
import { BG_COLORS, TEXT_COLORS, RADIUS_CLASSES, SOLID_VARIANTS } from '@ninna-ui/core';

BG_COLORS.primary      // "bg-primary"
TEXT_COLORS.danger      // "text-danger"
RADIUS_CLASSES.lg       // "rounded-lg"
SOLID_VARIANTS.primary  // Complete solid variant class set for primary
```

### Available Maps

**Color maps:**
- `BG_COLORS`, `TEXT_COLORS`, `BORDER_COLORS` — Semantic color classes
- `SOFT_BG_COLORS`, `MUTED_BG_COLORS`, `MUTED_BORDER_COLORS` — Opacity-based variants
- `SOLID_VARIANTS`, `SOFT_VARIANTS`, `OUTLINE_VARIANTS`, `GHOST_VARIANTS`, `TEXT_VARIANTS` — Complete variant class sets per color
- `RING_COLORS`, `STROKE_COLORS`, `MARKER_COLORS`, `HOVER_TEXT_COLORS` — Additional utility maps

**State maps:**
- `FOCUS_RING_COLORS`, `FOCUS_BORDER_COLORS`, `INPUT_FOCUS_COLORS`, `FOCUS_VISIBLE_RING_COLORS`
- `CHECKED_BG_COLORS`, `CHECKED_BORDER_COLORS`
- `PEER_CHECKED_BG_COLORS`, `PEER_CHECKED_BORDER_COLORS`, `PEER_FOCUS_VISIBLE_RING_COLORS`

**Typography & radius:**
- `TEXT_SIZE_CLASSES`, `TEXT_WEIGHT_CLASSES`
- `RADIUS_CLASSES`

## CSS Custom Properties

Each theme preset defines ~31 CSS custom properties:

| Category | Properties |
|----------|-----------|
| **Semantic** | `--color-primary`, `--color-secondary`, `--color-accent`, `--color-neutral` |
| **Status** | `--color-success`, `--color-danger`, `--color-warning`, `--color-info` |
| **Content** | `--color-primary-content`, `--color-secondary-content`, `--color-base-content`, etc. |
| **Surfaces** | `--color-base-50` through `--color-base-900` |
| **Borders** | `--color-base-200`, `--color-base-300` |

## Package Structure

```
core/
├── src/
│   ├── index.ts               # Barrel: tokens + classes
│   ├── tokens/
│   │   ├── colors.ts          # Color, COLORS
│   │   ├── typography.ts      # TextSize, TextWeight, TextAs, HeadingLevel
│   │   ├── radius.ts          # Radius
│   │   ├── size.ts            # Size, CompactSize
│   │   └── variants.ts        # ColorVariant, InputVariant
│   ├── classes/
│   │   ├── colors/
│   │   │   ├── base.ts        # BG_COLORS, TEXT_COLORS, BORDER_COLORS
│   │   │   ├── variants.ts    # SOLID_VARIANTS, SOFT_VARIANTS, etc.
│   │   │   └── states.ts      # FOCUS_RING_COLORS, CHECKED_BG_COLORS, etc.
│   │   ├── typography.ts      # TEXT_SIZE_CLASSES, TEXT_WEIGHT_CLASSES
│   │   └── radius.ts          # RADIUS_CLASSES
│   └── theme/
│       ├── tailwind.css        # Shared @theme + animations + @variant dark
│       └── presets/
│           ├── default.css     # Purple / Magenta
│           ├── ocean.css       # Blue / Cyan
│           ├── sunset.css      # Orange / Rose
│           ├── forest.css      # Green / Amber
│           └── minimal.css     # Monochrome
└── package.json
```

## Architecture Rules

- **No React, no JSX** — This package must never import React
- **No component logic** — Styles, behavior, and rendering belong in component packages
- **Types are the API** — `Color`, `Size`, `Radius` are consumed by every component
- **CSS presets are complete** — Each preset defines all required custom properties
- **Class maps are exhaustive** — Every `Color` value has a corresponding entry in every map

## Related Packages

- [`@ninna-ui/utils`](../utils/README.md) — Shared utility functions (`cn`, `composeRefs`)
- [`@ninna-ui/primitives`](../primitives/README.md) — Base components that consume core tokens
- [All packages](../../README.md#packages) — Complete package list

## License

[MIT](../../LICENSE)
