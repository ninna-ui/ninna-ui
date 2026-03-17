# Version Constant Management

> **Centralized version management for the Ninna UI monorepo** - a single TypeScript constant controls the version number across all documentation, component pages, and meta files. Update one file, and every reference stays in sync.

## Overview

Instead of manually updating version numbers across dozens of files, Ninna UI uses a centralized version constant that can be imported wherever a version reference is needed - component headers, meta files, getting started views, and more.

## Central Version

The current version is defined in a single file:

```typescript
// apps/playground/app/constants/version.ts
export const NINNA_UI_VERSION = "0.4.1" as const;
```

## How to Use

### In Meta Files

```typescript
import { NINNA_UI_VERSION } from "~/constants/version";

export const componentMeta: ComponentMeta = {
  title: "Button",
  description: "Button component description",
  category: "Primitives",
  version: NINNA_UI_VERSION, // Uses centralized version
  status: "stable",
};
```

### In Getting Started Views

```typescript
import { NINNA_UI_VERSION } from "~/constants/version";

const installationMeta = {
  title: "Installation",
  description: "Installation guide",
  category: "Getting Started",
  version: NINNA_UI_VERSION, // Uses centralized version
  status: "stable" as const,
};
```

## How to Update Versions

1. Update the version in `apps/playground/app/constants/version.ts`
2. The change will automatically be reflected wherever the constant is imported

## Files Using the Constant

### Playground App
- `apps/playground/app/constants/version.ts` - Central version constant
- All `meta.ts` files in `apps/playground/app/views/*/`
- Getting started views in `apps/playground/app/views/getting-started/`

### Web Docs (Future)
- Can be added to `ninna-ui-web/app/constants/version.ts`
- Used in getting started views and component documentation

## Benefits

- ✅ **Single Source of Truth**: One file controls the version
- ✅ **Type Safety**: TypeScript ensures correct usage
- ✅ **Simple**: No complex generation scripts needed
- ✅ **Flexible**: Easy to import and use anywhere
- ✅ **Maintainable**: Easy to audit and update

## Implementation Notes

- The constant is exported from the core package
- Each app can re-export it for easier local imports
- TypeScript provides type safety with the `as const` assertion
- No build-time generation required - it's just an import

## Migration Path

To migrate existing files:

1. Add the import: `import { NINNA_UI_VERSION } from "~/constants/version";`
2. Replace hardcoded version with: `version: NINNA_UI_VERSION,`
3. Remove the old hardcoded version string

This approach keeps things simple while providing centralized version management.
