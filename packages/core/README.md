# @ninna-ui/core

> **The design system engine that powers Ninna UI** - pure TypeScript tokens, Tailwind CSS v4 class mappings, and 5 production-ready theme presets with automatic dark mode. Zero React. Zero runtime. Pure CSS.

[![npm](https://img.shields.io/npm/v/@ninna-ui/core.svg)](https://www.npmjs.com/package/@ninna-ui/core)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](../../LICENSE)

📖 **[Full Documentation →](https://www.ninna-ui.dev/getting-started/theming)** &nbsp;|&nbsp; 📦 **[npm →](https://www.npmjs.com/package/@ninna-ui/core)** &nbsp;|&nbsp; 🐙 **[GitHub →](https://github.com/ninna-ui/ninna-ui/tree/main/packages/core)**

`@ninna-ui/core` is the zero-dependency foundation of [Ninna UI](../../README.md). It ships **no React code, no JSX, and no component logic** - only the shared design language that every component package consumes. This is the package that makes one-line theme switching possible.

**Why this matters:** Unlike libraries that bundle theming into a JavaScript runtime (Chakra UI, Mantine), Ninna UI's entire theme system lives in pure CSS custom properties. Your app ships **zero theming JavaScript** - the browser resolves colors and tokens natively, with zero hydration cost.

## Installation

```bash
pnpm add @ninna-ui/core@latest
```

## CSS Setup

Add one of the 5 theme presets to your app's CSS entry point, then set `data-theme` on your root element:

```css
@import "tailwindcss";
@import "@ninna-ui/core/theme/presets/default.css";

@variant dark (&:is(.dark *));
```

```html
<html data-theme="default"></html>
```

> **No `@source` needed** - each theme preset automatically scans all `@ninna-ui` package dist files via built-in `@source` directives. Every preset requires a `data-theme` attribute to activate. This allows multiple presets to be safely imported for per-section theming without CSS conflicts.

| Preset        | Colors           | Character          |
| ------------- | ---------------- | ------------------ |
| `default.css` | Purple / Magenta | Vibrant, electric  |
| `ocean.css`   | Blue / Cyan      | Cool, professional |
| `sunset.css`  | Orange / Rose    | Warm, bold         |
| `forest.css`  | Green / Amber    | Natural, earthy    |
| `minimal.css` | Monochrome       | Clean, understated |

**Switch themes by changing one line** - no JavaScript configuration, no provider wrappers, no build step. All presets can be imported simultaneously for per-section theming using nested `data-theme` attributes.

### Framework-Specific Setup

**Vite / React Router** - use `@tailwindcss/vite`:

```ts
// vite.config.ts
import tailwindcss from "@tailwindcss/vite";
export default { plugins: [tailwindcss()] };
```

**Next.js** - use `@tailwindcss/postcss`:

```js
// postcss.config.mjs
export default { plugins: { "@tailwindcss/postcss": {} } };
```

## Dark Mode

Every preset includes **automatic dark mode** via `@media (prefers-color-scheme: dark)`. The selector pattern per preset is:

```css
/* Light (default when no class set) */
[data-theme="preset"] {
}

/* Explicit dark - .dark class on <html> or ancestor */
.dark [data-theme="preset"],
[data-theme="preset"].dark {
}

/* System dark - no class, follows OS preference */
@media (prefers-color-scheme: dark) {
  [data-theme="preset"]:not(.light):not(.dark) {
  }
}
```

For manual toggle, add the `.dark` or `.light` class to your root element:

```html
<!-- Forced dark -->
<html data-theme="default" class="dark">
  <!-- Forced light (blocks OS preference) -->
  <html data-theme="default" class="light">
    <!-- System preference auto (no class) -->
    <html data-theme="default"></html>
  </html>
</html>
```

All colors use the **oklch** color space - perceptually uniform, vibrant, and WCAG AA compliant.

## Design Tokens

Type definitions for the design system's foundational values - consumed by every component package:

```typescript
import type { Color, Size, Radius, ColorVariant } from "@ninna-ui/core";
```

| Token           | Values                                                                              |
| --------------- | ----------------------------------------------------------------------------------- |
| `Color`         | `neutral`, `primary`, `secondary`, `accent`, `info`, `success`, `warning`, `danger` |
| `Size`          | `xs`, `sm`, `md`, `lg`, `xl`                                                        |
| `CompactSize`   | `sm`, `md`, `lg`                                                                    |
| `Radius`        | `none`, `sm`, `md`, `lg`, `xl`, `2xl`, `full`                                       |
| `TextSize`      | `base`, `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`, `6xl`             |
| `TextWeight`    | `light`, `normal`, `medium`, `semibold`, `bold`                                     |
| `TextAs`        | `p`, `span`, `div`, `h1`–`h6`                                                       |
| `HeadingLevel`  | `h1`, `h2`, `h3`, `h4`, `h5`, `h6`                                                  |
| `ColorVariant`  | `solid`, `soft`, `outline`                                                          |
| `ButtonVariant` | `solid`, `soft`, `outline`, `ghost`, `text`                                         |
| `InputVariant`  | `outline`, `filled`, `flushed`, `unstyled`                                          |

## Tailwind Class Mappings

Pre-built maps from design tokens to Tailwind CSS classes - used internally by component `.styles.ts` files:

```typescript
import { BG_COLORS, TEXT_COLORS, BORDER_COLORS } from "@ninna-ui/core";

BG_COLORS.primary; // "bg-primary"
TEXT_COLORS.danger; // "text-danger"
BORDER_COLORS.primary; // "border-primary"
```

### Available Maps

**Color maps:**

- `BG_COLORS`, `TEXT_COLORS`, `BORDER_COLORS` - Semantic color classes
- `STROKE_COLORS`, `MARKER_COLORS` - Semantic SVG stroke and list marker classes

**Layout maps:**

- Gap, grid and flex maps, plus `getResponsiveGridCols`, are exported from `classes/layout`.

Component variant and state class sets live with their component packages. Core
exposes shared tokens and maps without a second variant framework.

## CSS Custom Properties

Use the native shared color and its matching content color:

- `bg-primary text-primary-content`: content on a solid semantic fill.
- `text-primary`: colored text on base surfaces (`base-50` through `base-200`).
- `bg-primary/10 text-primary`: colored text on a soft tint.

The same pattern applies to secondary, accent, neutral and all status colors.
`text-primary`, `bg-primary`, `border-primary` and `ring-primary` resolve to the
same CSS variable. There are no separate text aliases or utility overrides.
Light palettes use deeper colors; dark palettes use lighter colors. Their
matching `-content` colors provide contrast on solid fills. Component consumers
continue to use `color="primary"`.

Run `pnpm check-theme-contrast` to measure all five bundled presets in light and dark
mode. It checks 4.5:1 for solid/content rest and hover pairs and semantic text on
base surfaces with 0–20% tints, and 3:1 for control boundary tokens. Custom palettes,
nested tints, opacity overrides, gradients
and other backgrounds still need contrast checks in their rendered context.

Each theme preset retains the original 31 semantic, content, surface and border properties:

| Category     | Properties                                                                                   |
| ------------ | -------------------------------------------------------------------------------------------- |
| **Semantic** | `--color-primary`, `--color-secondary`, `--color-accent`, `--color-neutral`                  |
| **Status**   | `--color-success`, `--color-danger`, `--color-warning`, `--color-info`                       |
| **Content**  | `--color-primary-content`, `--color-secondary-content`, `--color-base-content`, etc.         |
| **Surfaces** | `--color-base-50` through `--color-base-900`                                                 |
| **Borders**  | `--color-border`, `--color-border-hover`, `--color-border-active`, `--color-border-disabled` |

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
│   │   │   └── base.ts        # Background, text, border, stroke and marker maps
│   │   └── layout.ts          # Gap, grid, flex and responsive maps
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

- **No React, no JSX** - This package must never import React
- **No component logic** - Styles, behavior, and rendering belong in component packages
- **Types are the API** - `Color`, `Size`, `Radius` are consumed by every component
- **CSS presets are complete** - Each preset defines all required custom properties
- **Class maps are exhaustive** - Every `Color` value has a corresponding entry in every map

## Related Packages

- [`@ninna-ui/utils`](../utils/README.md) - Shared utility functions (`cn`, `composeRefs`)
- [`@ninna-ui/primitives`](../primitives/README.md) - Base components that consume core tokens
- [All packages](../../README.md#packages) - Complete package list

## License

[MIT](../../LICENSE)
