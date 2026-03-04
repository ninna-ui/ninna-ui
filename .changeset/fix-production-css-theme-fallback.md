---
"@ninna-ui/core": minor
"@ninna-ui/cli": patch
---

fix: production CSS purge & theme fallback

### @ninna-ui/core (minor)

- **Filesystem `@source` scanning in `tailwind.css`**: Added `@source` directives that point to all sibling `@ninna-ui` package dist files using relative paths. When a consumer imports a theme preset, Tailwind automatically scans every `@ninna-ui` component's JS output — no manual `@source` directive needed in the consumer's CSS.

- **`@source inline()` safelist**: Added `@source inline()` directives for computed/dynamic classes (color maps, size maps, animation utilities) that cannot be detected by scanning JS files alone.

- **`:root` fallback on `default.css` only**: The default theme preset applies to `:root` so it works without a `data-theme` attribute. Other presets (ocean, sunset, forest, minimal) require `data-theme="..."` to activate, preventing cascade conflicts when multiple presets are imported.

- **Missing toast animation utilities**: Added `slide-in-from-{top,bottom,left}-full` and `slide-out-to-{top,bottom,left}-full` `@utility` definitions for full directional toast slide animations.

### @ninna-ui/cli (patch)

- Removed `@source "../node_modules/@ninna-ui/**/*.{js,ts,jsx,tsx}"` from all 3 CLI starter templates (vite-react, react-router, nextjs) since it is no longer needed.
