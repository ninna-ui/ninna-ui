# Ninna UI + React Router Starter

> **Production-ready React Router v7 project with Ninna UI** - 69 accessible React components, Vite bundling, Tailwind CSS v4, TypeScript strict mode, and automatic dark mode. SSR-ready out of the box.

Generated with `npx @ninna-ui/cli init my-app -t react-router`

## Getting Started

```bash
pnpm install    # Install dependencies
pnpm dev        # Start development server
pnpm build      # Build for production
```

## What's Included

- **React Router v7** with Vite and TypeScript strict mode
- **Tailwind CSS v4.1** with `@tailwindcss/vite` plugin
- **Ninna UI** - All 9 component packages pre-installed: primitives, feedback, forms, layout, overlays, navigation, data-display, code-block, core
- **Default theme preset** with automatic dark mode via CSS custom properties + 4 additional presets available

## Customization

### Change Theme Preset

Swap your entire design system with one CSS import change - no JavaScript configuration needed:

1. Edit `app/index.css`:

```css
/* Replace default with any preset: ocean, sunset, forest, minimal */
@import "@ninna-ui/core/theme/presets/ocean.css";
```

2. Update `data-theme` in `app/root.tsx`:

```tsx
<html lang="en" data-theme="ocean">
```

### Dark Mode

Dark mode activates **automatically** via `prefers-color-scheme` - no setup needed. For manual toggle, add `.dark` class in `app/root.tsx`:

```tsx
<html lang="en" data-theme="default" className="dark">
```

> **SSR note:** This template uses React Router v7 SSR mode (`ssr: true`). The `Layout` export in `root.tsx` wraps every page - Tailwind utility classes are on a wrapper `<div>` inside `<body>` to avoid hydration mismatches.

## Learn More

- [Ninna UI Documentation](https://ninna-ui.dev) - Full docs with live component demos
- [GitHub](https://github.com/ninna-ui/ninna-ui) - Source code and all packages
- [React Router Documentation](https://reactrouter.com/) - React Router v7 reference
