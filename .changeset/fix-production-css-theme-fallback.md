---
"@ninna-ui/core": minor
"@ninna-ui/cli": patch
---

fix: production CSS purge, theme fallback, safelist hardening

### @ninna-ui/core (minor)

- **Filesystem `@source` scanning in `tailwind.css`**: Added `@source` directives pointing to core's own dist and all 8 sibling `@ninna-ui` package dist files. Tailwind now automatically scans every component's JS output when a consumer imports any theme preset — no manual `@source` directive needed.

- **Hardened `@source inline()` safelist**: Removed redundant layout/sizing/typography/radius inlines that the filesystem scanner already detects. Kept only patterns the Tailwind v4 scanner cannot extract from JS: opacity modifiers (`bg-primary/10`), variant prefixes (`hover:`, `focus:`, `peer-checked:`, `data-[]`, `marker:`), stroke utilities, and custom `@utility` names. Added clear documentation explaining why each category exists.

- **`:root` fallback on `default.css` only**: Removed `:root` from ocean/sunset/forest/minimal presets to prevent CSS cascade conflicts when multiple presets are imported.

- **Toast animation utilities**: Added `slide-in-from-{top,bottom,left}-full` and `slide-out-to-{top,bottom,left}-full` `@utility` definitions.

### @ninna-ui/cli (patch)

- Removed `@source "../node_modules/@ninna-ui/**/*.{js,ts,jsx,tsx}"` from all 3 CLI starter templates (vite-react, react-router, nextjs) since it is no longer needed.
