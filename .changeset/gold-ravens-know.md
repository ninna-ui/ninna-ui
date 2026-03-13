---
"@ninna-ui/cli": patch
---

fix: resolve React Router template hydration issues with minimal SSR fixes

- Add suppressHydrationWarning to html and body elements to prevent Tailwind CSS v4 PostCSS attribute mismatch
- Include minimal theme-init.js script to prevent FOUC with dark mode
- Keep SSR enabled (ssr: true) for production-ready server-side rendering
- Maintain build-time dependencies in dependencies for npm compatibility

Fixes hydration mismatch caused by Tailwind CSS v4's __processed_* attributes during SSR.
