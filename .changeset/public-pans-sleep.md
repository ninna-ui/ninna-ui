---
"@ninna-ui/navigation": patch
"@ninna-ui/overlays": patch
"@ninna-ui/forms": patch
"@ninna-ui/core": patch
"@ninna-ui/cli": patch
"@ninna-ui/code-block": patch
"@ninna-ui/data-display": patch
"@ninna-ui/feedback": patch
"@ninna-ui/layout": patch
"@ninna-ui/primitives": patch
"@ninna-ui/react-internal": patch
"@ninna-ui/utils": patch
"@ninna-ui/eslint-config": patch
"@ninna-ui/test-config": patch
"@ninna-ui/tsconfig": patch
---

## Performance Improvements

- Massive bundle size reduction (94% for overlays, 83% for forms, 95% for navigation)
- Fixed modal responsive design for mobile devices
- Made react-internal external to prevent bundling duplication
- Updated dependencies for proper npm package compatibility

## Technical Changes

- Updated tsup configs to externalize @ninna-ui/react-internal and @ninna-ui/utils
- Added proper dependencies to package.json files
- Maintained all functionality while dramatically reducing bundle sizes
- All tests pass with new structure
