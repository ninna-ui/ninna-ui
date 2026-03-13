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
"ninna-ui": patch
---

fix: implement proper SSR for React Router template

- Add proper SSR hydration patterns with suppressHydrationWarning
- Include theme initialization script to prevent FOUC
- Add SSR-safe ThemeProvider with hasMounted ref pattern
- Implement HydrateFallback and ErrorBoundary components
- Add error parsing utilities and error message component
- Configure proper SSR build with client/server split
- Maintain build-time dependencies in dependencies for npm compatibility

Template now provides production-ready SSR experience matching ninna-ui-web patterns.
