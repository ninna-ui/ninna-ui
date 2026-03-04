---
"@ninna-ui/core": minor
"@ninna-ui/cli": patch
---

fix: production CSS purge & theme fallback

### @ninna-ui/core (minor)

- **`@source inline()` safelist in `tailwind.css`**: All Tailwind utility classes used by @ninna-ui component packages are now automatically safelisted via `@source inline()` directives built into the theme CSS. Consumers no longer need `@source "../node_modules/@ninna-ui/**"` in their CSS — importing a theme preset is sufficient.

- **`:root` fallback on all 5 theme presets**: Theme CSS variables now apply to `:root` in addition to `[data-theme="..."]`, so themes work out-of-the-box without requiring a `data-theme` attribute on the HTML element. When importing multiple presets, use `data-theme` to scope each section (last imported wins via CSS cascade otherwise).

- **Missing toast animation utilities**: Added `slide-in-from-{top,bottom,left}-full` and `slide-out-to-{top,bottom,left}-full` `@utility` definitions for full directional toast slide animations.

### @ninna-ui/cli (patch)

- Removed `@source "../node_modules/@ninna-ui/**/*.{js,ts,jsx,tsx}"` from all 3 CLI starter templates (vite-react, react-router, nextjs) since it is no longer needed.
