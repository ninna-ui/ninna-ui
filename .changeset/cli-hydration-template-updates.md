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

feat: CLI hydration fixes and template updates to v0.2.0

- Fix Next.js layout.tsx hydration: move Tailwind classes from body to wrapper div
- Fix React Router root.tsx SSR: add Layout export, wrapper div, fix ScrollRestoration order
- Fix init.ts preset prompt condition (was inverted)
- Add data-theme swapping in init.ts for HTML/TSX files when non-default preset selected
- Update all template READMEs with data-theme instructions for theme switching
- Update playground InstallationView with data-theme steps for all frameworks
- Add React type imports for React.ReactNode usage in templates
- Update all CLI templates to use v0.2.0 packages and add missing packages
- Enhance demo components with Card, Tabs, and CodeBlock
