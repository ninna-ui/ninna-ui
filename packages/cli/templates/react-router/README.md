# Ninna UI + React Router Starter

A minimal starter template with [Ninna UI](https://github.com/ninna-ui/ninna-ui), React Router v7, Vite, and Tailwind CSS v4.

> Generated with `npx @ninna-ui/cli init my-app -t react-router`

## Getting Started

```bash
pnpm install    # Install dependencies
pnpm dev        # Start development server
pnpm build      # Build for production
```

## What's Included

- **React Router v7** with Vite and TypeScript strict mode
- **Tailwind CSS v4.1** with `@tailwindcss/vite` plugin
- **Ninna UI v0.2.0** — All 9 packages: primitives, feedback, forms, layout, overlays, navigation, data-display, code-block, core
- **Default theme preset** with automatic dark mode + 4 additional presets

## Customization

### Change Theme Preset

1. Edit `app/index.css`:

```css
/* Replace default with any preset: ocean, sunset, forest, minimal */
@import "@ninna-ui/core/theme/presets/ocean.css";
```

2. Update `data-theme` in `app/root.tsx`:

```tsx
<html lang="en" data-theme="ocean">
```

### Enable Dark Mode

Dark mode activates automatically via `prefers-color-scheme`. For manual toggle in `app/root.tsx`:

```tsx
<html lang="en" data-theme="default" className="dark">
```

> **SSR note:** This template uses React Router v7 SSR mode (`ssr: true`). The `Layout` export in `root.tsx` wraps every page — Tailwind utility classes are on a wrapper `<div>` inside `<body>` to avoid hydration mismatches.

## Learn More

- [Ninna UI Documentation](https://github.com/ninna-ui/ninna-ui)
- [All Packages](https://github.com/ninna-ui/ninna-ui#packages)
- [React Router Documentation](https://reactrouter.com/)
