# Ninna UI + Next.js Starter

> **Production-ready Next.js 15 App Router project with Ninna UI** - 69 accessible React components, Tailwind CSS v4, TypeScript strict mode, and automatic dark mode. Ready to build.

Generated with `npx @ninna-ui/cli init my-app -t nextjs`

## Getting Started

```bash
pnpm install    # Install dependencies
pnpm dev        # Start development server
pnpm build      # Build for production
```

## What's Included

- **Next.js 15** App Router with TypeScript strict mode
- **Tailwind CSS v4.1** with `@tailwindcss/postcss` plugin
- **Ninna UI** - All 9 component packages pre-installed: primitives, feedback, forms, layout, overlays, navigation, data-display, code-block, core
- **Default theme preset** with automatic dark mode via CSS custom properties + 4 additional presets available

## Customization

### Change Theme Preset

Swap your entire design system with one CSS import change - no JavaScript configuration needed:

1. Edit `app/globals.css`:

```css
/* Replace default with any preset: ocean, sunset, forest, minimal */
@import "@ninna-ui/core/theme/presets/ocean.css";
```

2. Update `data-theme` in `app/layout.tsx`:

```tsx
<html lang="en" data-theme="ocean">
```

### Dark Mode

Dark mode activates **automatically** via `prefers-color-scheme` - no setup needed. For manual toggle, add `.dark` class in `app/layout.tsx`:

```tsx
<html lang="en" data-theme="default" className="dark">
```

> **Hydration note:** Tailwind utility classes are on a wrapper `<div>` inside `<body>`, not on `<body>` itself. This avoids a hydration mismatch caused by `@tailwindcss/postcss` adding internal attributes to `<body>` during SSR.

## Learn More

- [Ninna UI Documentation](https://ninna-ui.dev) - Full docs with live component demos
- [GitHub](https://github.com/ninna-ui/ninna-ui) - Source code and all packages
- [Next.js Documentation](https://nextjs.org/docs) - Next.js App Router reference
