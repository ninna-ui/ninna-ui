---
"@ninna-ui/react-internal": patch
"@ninna-ui/data-display": patch
"@ninna-ui/eslint-config": patch
"@ninna-ui/code-block": patch
"@ninna-ui/navigation": patch
"@ninna-ui/primitives": patch
"@ninna-ui/test-config": patch
"@ninna-ui/feedback": patch
"@ninna-ui/overlays": patch
"@ninna-ui/layout": patch
"@ninna-ui/forms": patch
"@ninna-ui/utils": patch
"@ninna-ui/core": patch
"@ninna-ui/cli": patch
---

fix: upgrade all dependencies to latest stable versions and resolve security vulnerabilities

- Updated all packages to latest stable versions
- Fixed security vulnerabilities by upgrading direct dependencies
- Removed pnpm overrides as direct upgrades are sufficient
- Updated eslint, typescript, react, and all other dependencies
- All packages now report 0 vulnerabilities in pnpm audit
- Fixed vitest worker timeout issues with single-threaded execution
- All tests (708) now pass successfully after dependency upgrade
