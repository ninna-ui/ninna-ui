# Ninna UI + Vite + React Starter

> **Production-ready Vite + React 19 SPA with Ninna UI** - 69 accessible React components, Tailwind CSS v4, TypeScript strict mode, and automatic dark mode. The fastest way to start building.

Generated with `npx @ninna-ui/cli init my-app -t vite-react`

## Getting Started

```bash
pnpm install    # Install dependencies
pnpm dev        # Start development server
pnpm build      # Build for production
```

## What's Included

- **React 19** with TypeScript strict mode
- **Vite 7** with `@tailwindcss/vite` plugin - instant HMR, lightning-fast builds
- **Tailwind CSS v4.1** - CSS-first configuration, no `tailwind.config.ts`
- **Ninna UI** - All 9 component packages pre-installed: primitives, feedback, forms, layout, overlays, navigation, data-display, code-block, core
- **Default theme preset** with automatic dark mode via CSS custom properties + 4 additional presets available

## Customization

### Change Theme Preset

Swap your entire design system with one CSS import change - no JavaScript configuration needed:

1. Edit `src/index.css`:

```css
/* Replace default with any preset: ocean, sunset, forest, minimal */
@import "@ninna-ui/core/theme/presets/ocean.css";
```

2. Update `data-theme` in `index.html`:

```html
<html lang="en" data-theme="ocean">
```

### Dark Mode

Dark mode activates **automatically** via `prefers-color-scheme` - no setup needed. For manual toggle:

```html
<html lang="en" data-theme="default" class="dark">
```

## Learn More

- [Ninna UI Documentation](https://ninna-ui.dev) - Full docs with live component demos
- [GitHub](https://github.com/ninna-ui/ninna-ui) - Source code and all packages
- [Vite Documentation](https://vite.dev/) - Vite build tool reference
