# Ninna UI + Next.js Starter

A minimal starter template with [Ninna UI](https://github.com/ninna-ui/ninna-ui), Next.js 15 App Router, and Tailwind CSS v4.

> Generated with `npx @ninna-ui/cli init my-app -t nextjs`

## Getting Started

```bash
pnpm install    # Install dependencies
pnpm dev        # Start development server
pnpm build      # Build for production
```

## What's Included

- **Next.js 15** App Router with TypeScript strict mode
- **Tailwind CSS v4.1** with `@tailwindcss/postcss` plugin
- **Ninna UI v0.2.0** — All 9 packages: primitives, feedback, forms, layout, overlays, navigation, data-display, code-block, core
- **Default theme preset** with automatic dark mode + 4 additional presets

## Customization

### Change Theme Preset

1. Edit `app/globals.css`:

```css
/* Replace default with any preset: ocean, sunset, forest, minimal */
@import "@ninna-ui/core/theme/presets/ocean.css";
```

2. Update `data-theme` in `app/layout.tsx`:

```tsx
<html lang="en" data-theme="ocean">
```

### Enable Dark Mode

Dark mode activates automatically via `prefers-color-scheme`. For manual toggle in `app/layout.tsx`:

```tsx
<html lang="en" data-theme="default" className="dark">
```

> **Hydration note:** Tailwind utility classes are intentionally on a wrapper `<div>` inside `<body>`, not on `<body>` itself. This avoids a hydration mismatch caused by `@tailwindcss/postcss` adding internal attributes to `<body>` during SSR.

## Learn More

- [Ninna UI Documentation](https://github.com/ninna-ui/ninna-ui)
- [All Packages](https://github.com/ninna-ui/ninna-ui#packages)
