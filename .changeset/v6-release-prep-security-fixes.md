---
'@ninna-ui/core': patch
'@ninna-ui/primitives': patch
'@ninna-ui/cli': patch
'@ninna-ui/code-block': patch
'@ninna-ui/data-display': patch
'@ninna-ui/feedback': patch
'@ninna-ui/forms': patch
'@ninna-ui/layout': patch
'@ninna-ui/navigation': patch
'@ninna-ui/overlays': patch
---

- Migrated accessibility testing suite from `vitest-axe` to `@sa11y/vitest` for improved security and Vite 8+ compatibility.
- Applied security patches for Vite Dev Server vulnerabilities via dependency overrides.
