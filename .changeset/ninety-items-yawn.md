---
"@ninna-ui/react-internal": minor
"@ninna-ui/overlays": minor
"@ninna-ui/utils": minor
"@ninna-ui/cli": minor
"@ninna-ui/code-block": minor
"@ninna-ui/core": minor
"@ninna-ui/data-display": minor
"@ninna-ui/feedback": minor
"@ninna-ui/forms": minor
"@ninna-ui/layout": minor
"@ninna-ui/navigation": minor
"@ninna-ui/primitives": minor
"@ninna-ui/eslint-config": minor
"@ninna-ui/test-config": minor
"@ninna-ui/tsconfig": minor
---

### Minor Changes

Introduce the new public internal architecture and coordinated package release.

- Publish **@ninna-ui/utils** and **@ninna-ui/react-internal** as public npm packages.
- All Ninna UI packages are now versioned together using a **Changesets fixed group**.
- Consumers no longer need to install Radix UI dependencies directly — all Radix adapters are bundled inside **@ninna-ui/react-internal**.
- Updated architecture documentation and contribution guidelines.
- Fixed missing `react` and `react-dom` devDependencies in the overlays package.
- Updated documentation and component counts to reflect the new public package structure.

This release prepares the ecosystem for **v0.4.0 coordinated publishing** across all packages.