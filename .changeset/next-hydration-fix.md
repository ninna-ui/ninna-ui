---
"@ninna-ui/cli": patch
---

fix: resolve Next.js template hydration issues with minimal SSR fixes

- Add suppressHydrationWarning to html and body elements to prevent Tailwind CSS v4 PostCSS attribute mismatch
- Include minimal theme-init.js script to prevent FOUC with dark mode
- Add className="light" to html element for consistent theme initialization

Fixes hydration mismatch caused by Tailwind CSS v4's __processed_* attributes during SSR.
