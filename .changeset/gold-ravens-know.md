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

fix: resolve React Router template hydration issues with minimal SSR fixes

- Add suppressHydrationWarning to html and body elements to prevent Tailwind CSS v4 PostCSS attribute mismatch
- Maintain build-time dependencies in dependencies for npm compatibility

Fixes hydration mismatch caused by Tailwind CSS v4's __processed_* attributes during SSR.
