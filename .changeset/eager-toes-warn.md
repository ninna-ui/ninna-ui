---
"@ninna-ui/core": patch
---

**Build:** Extracted the inline `node -e` CSS-copy one-liner from the `build` script into a dedicated `scripts/copy-css.mjs` ESM module. Build output is unchanged — `dist/theme/` contains the same CSS files as before.
