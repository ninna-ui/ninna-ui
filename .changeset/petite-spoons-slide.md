---
"@ninna-ui/core": patch
"@ninna-ui/cli": patch
"@ninna-ui/code-block": patch
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

Tailwindcss safelist validation.
Builds a minimal Tailwind CSS output using the ninna-ui theme and checks that every class token extracted from component source files has a corresponding CSS rule in the built output.
