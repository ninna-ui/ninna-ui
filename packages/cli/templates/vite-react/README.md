# Ninna UI + Vite + React Starter

A minimal starter template with [Ninna UI](https://github.com/ninna-ui/ninna-ui), Vite 7, React 19, and Tailwind CSS v4.

> Generated with `npx @ninna-ui/cli init my-app -t vite-react`

## Getting Started

```bash
pnpm install    # Install dependencies
pnpm dev        # Start development server
pnpm build      # Build for production
```

## What's Included

- **React 19** with TypeScript strict mode
- **Vite 7** with `@tailwindcss/vite` plugin
- **Tailwind CSS v4.1** — CSS-first, no `tailwind.config.ts`
- **Ninna UI v0.4.0** — All 9 packages: primitives, feedback, forms, layout, overlays, navigation, data-display, code-block, core
- **Default theme preset** with automatic dark mode + 4 additional presets

## Customization

### Change Theme Preset

1. Edit `src/index.css`:

```css
/* Replace default with any preset: ocean, sunset, forest, minimal */
@import "@ninna-ui/core/theme/presets/ocean.css";
```

2. Update `data-theme` in `index.html`:

```html
<html lang="en" data-theme="ocean">
```

### Enable Dark Mode

Dark mode activates automatically via `prefers-color-scheme`. For manual toggle:

```html
<html lang="en" data-theme="default" class="dark">
```

## Learn More

- [Ninna UI Documentation](https://github.com/ninna-ui/ninna-ui)
- [All Packages](https://github.com/ninna-ui/ninna-ui#packages)
