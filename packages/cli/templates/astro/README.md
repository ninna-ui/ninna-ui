# Ninna UI + Astro Starter

> **Production-ready Astro 5 project with Ninna UI** — 69 accessible React components, island architecture, Tailwind CSS v4, TypeScript strict mode, and automatic dark mode.

Generated with `npx @ninna-ui/cli init my-app -t astro`

## Getting Started

```bash
pnpm install    # Install dependencies
pnpm dev        # Start development server (http://localhost:4321)
pnpm build      # Build for production
pnpm preview    # Preview production build
```

## What's Included

- **Astro 5** with React 19 integration via `@astrojs/react`
- **Tailwind CSS v4** with `@tailwindcss/vite` plugin for fastest builds
- **Vite 7 override** — pinned via `overrides` to ensure Astro compatibility
- **Ninna UI** — All 9 component packages pre-installed: primitives, feedback, forms, layout, overlays, navigation, data-display, code-block, core
- **Default theme preset** with automatic dark mode via CSS custom properties + 4 additional presets available

## Using React Components

Ninna UI components are React components. In Astro, add a `client:` directive to enable interactivity:

```astro
---
import { Button } from "@ninna-ui/primitives";
---
<!-- Static (no JS) -->
<Button color="primary">Static</Button>

<!-- Interactive (with JS) -->
<Button client:load color="primary" onclick="...">Interactive</Button>
```

Or create a `.tsx` component file and import it:

```astro
---
import MyComponent from '../components/MyComponent';
---
<MyComponent client:load />
```

## Customization

### Change Theme Preset

Swap your entire design system with one CSS import change — no JavaScript configuration needed:

1. Edit `src/styles/globals.css`:

```css
/* Replace default with any preset: ocean, sunset, forest, minimal */
@import "@ninna-ui/core/theme/presets/ocean.css";
```

2. Update `data-theme` in `src/layouts/Layout.astro`:

```html
<html lang="en" data-theme="ocean">
```

### Dark Mode

Dark mode activates **automatically** via `prefers-color-scheme` — no setup needed. For manual toggle, add `.dark` class to `<html>`:

```html
<html lang="en" data-theme="default" class="dark">
```

## Learn More

- [Ninna UI Documentation](https://ninna-ui.dev) — Full docs with live component demos
- [GitHub](https://github.com/ninna-ui/ninna-ui) — Source code and all packages
- [Astro Documentation](https://docs.astro.build/) — Astro reference
- [Astro React Integration](https://docs.astro.build/en/guides/integrations-guide/react/) — React in Astro
