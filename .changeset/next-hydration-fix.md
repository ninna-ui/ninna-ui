---
"@ninna-ui/cli": patch
"@ninna-ui/code-block": patch
"@ninna-ui/core": patch
"@ninna-ui/data-display": patch
"@ninna-ui/feedback": patch
"@ninna-ui/forms": patch
"@ninna-ui/layout": patch
"@ninna-ui/navigation": patch
"@ninna-ui/overlays": patch
"@ninna-ui/primitives": patch
"@ninna-ui/react-internal": patch
"@ninna-ui/utils": patch
"@ninna-ui/eslint-config": patch
"@ninna-ui/test-config": patch
"@ninna-ui/tsconfig": patch
---

fix: resolve Next.js template hydration issues with minimal SSR fixes

- Add suppressHydrationWarning to html and body elements to prevent Tailwind CSS v4 PostCSS attribute mismatch
- Include minimal theme-init.js script to prevent FOUC with dark mode
- Add className="light" to html element for consistent theme initialization

Fixes hydration mismatch caused by Tailwind CSS v4's __processed_* attributes during SSR.
