---
"@ninna-ui/cli": patch
---

fix: resolve React Router template hydration issues with minimal SSR fixes

- Add suppressHydrationWarning to html and body elements to prevent Tailwind CSS v4 PostCSS attribute mismatch
- Maintain build-time dependencies in dependencies for npm compatibility

Fixes hydration mismatch caused by Tailwind CSS v4's __processed_* attributes during SSR.
