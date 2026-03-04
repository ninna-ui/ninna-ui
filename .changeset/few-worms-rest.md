---
"@ninna-ui/data-display": major
"@ninna-ui/code-block": major
"@ninna-ui/navigation": major
"@ninna-ui/primitives": major
"@ninna-ui/feedback": major
"@ninna-ui/overlays": major
"@ninna-ui/layout": major
"@ninna-ui/forms": major
"@ninna-ui/core": major
"@ninna-ui/cli": major
---

production css theme

## Breaking Changes

### WHAT: CSS theme system overhaul
- Updated Tailwind CSS configuration with comprehensive `@source` directives
- Added filesystem scanning for all `@ninna-ui` package dist files
- Removed need for manual `@source` directives in consumer projects
- Enhanced `@source inline()` for opacity modifiers and variant prefixes

### WHY: Better developer experience and automatic class detection
- Tailwind v4 filesystem scanner now automatically detects all utility classes
- No more missing class warnings for layout, sizing, typography utilities
- Improved build performance with optimized source scanning
- Better support for opacity modifiers (`bg-primary/10`) and variants (`hover:bg-primary`)

### HOW: Update your consumer projects
**Before:**
```css
@import "tailwindcss";
@import "@ninna-ui/core/theme/presets/default.css";
@source "../node_modules/@ninna-ui/*";
```

**After:**
```css
@import "tailwindcss";
@import "@ninna-ui/core/theme/presets/default.css";

@variant dark (&:is(.dark *));
```

**No `@source` needed** - each theme preset automatically scans all `@ninna-ui` package dist files via built-in `@source` directives. The `default.css` preset also applies to `:root`, so it works without a `data-theme` attribute. Other presets require `data-theme="ocean"` etc.

### Migration Notes
- Remove any manual `@source` directives from your CSS files
- Theme presets now handle all class scanning automatically
- Add `@variant dark (&:is(.dark *));` if you need dark mode support
