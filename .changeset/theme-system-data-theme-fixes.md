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

fix: theme system - data-theme always required, fix dark mode selectors

- Fix missing .dark [data-theme="default"] selector in default.css
- Remove :root/:root.dark selectors from non-default presets  
- Update all documentation to reflect data-theme requirement
- Fix playground ThemingView/ColorsView dark mode examples
- Update Storybook CodeBlock example to remove :root
- Fix architecture and getting-started docs with correct selector patterns
- Fix CLI hydration issues and template package versions
