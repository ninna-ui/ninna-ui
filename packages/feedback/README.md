# @ninna-ui/feedback

> 9 feedback exports for Ninna-UI — alerts, toasts, loading states, progress indicators, skeletons, and more.

[![npm](https://img.shields.io/npm/v/@ninna-ui/feedback.svg)](https://www.npmjs.com/package/@ninna-ui/feedback)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](../../LICENSE)

📖 **[Full Documentation →](https://www.ninna-ui.dev/feedback)** &nbsp;|&nbsp; 📦 **[npm →](https://www.npmjs.com/package/@ninna-ui/feedback)** &nbsp;|&nbsp; 🐙 **[GitHub →](https://github.com/ninna-ui/ninna-ui/tree/main/packages/feedback)**

User feedback components for [Ninna UI](../../README.md) — everything you need to communicate state, progress, and notifications to users. All components are accessible, themeable, and support `data-slot` CSS targeting.

## Installation

```bash
pnpm add @ninna-ui/feedback @ninna-ui/core
```

## CSS Setup

```css
@import "tailwindcss";
@import "@ninna-ui/core/theme/presets/default.css";

@variant dark (&:is(.dark *));
```

## Components

| Component | Description | Variants | Colors |
|-----------|-------------|----------|--------|
| `Alert` | Contextual feedback messages with optional dismiss | solid, soft, outline | 8 |
| `Toast` / `Toaster` | Ephemeral notifications with promise support | solid, soft, outline | 8 |
| `Loading` | Spinner loading indicator | — | 8 |
| `Progress` | Linear progress bar with optional label | solid, soft | 8 |
| `CircularProgress` | Circular/radial progress indicator | — | 8 |
| `Status` | Dot indicator for online/offline/busy states | — | 8 |
| `Skeleton` | Content placeholder during loading | — | — |
| `EmptyState` | Placeholder for empty data states | — | — |

> `Skeleton` also exports `SkeletonCircle` and `SkeletonText` for common placeholder shapes.

## Quick Start

```tsx
import { Alert, Toaster, toast, Loading, Progress } from "@ninna-ui/feedback";

function App() {
  return (
    <>
      <Alert color="success" variant="soft">
        Changes saved successfully!
      </Alert>

      <Progress value={65} color="primary" />

      <Loading size="lg" color="primary" />

      <button onClick={() => toast({ title: "Saved!", variant: "success" })}>
        Save
      </button>

      <Toaster />
    </>
  );
}
```

## All Exports

```typescript
import {
  Alert, type AlertProps,
  Toast, Toaster, ToastProvider, toast, useToast,
  type ToastProps, type ToasterProps, type ToastData,
  Loading, type LoadingProps,
  Progress, type ProgressProps,
  CircularProgress, type CircularProgressProps,
  Status, type StatusProps,
  Skeleton, SkeletonCircle, SkeletonText,
  type SkeletonProps, type SkeletonCircleProps, type SkeletonTextProps,
  EmptyState, type EmptyStateProps,
} from "@ninna-ui/feedback";
```

## Related Packages

- [`@ninna-ui/core`](../core/README.md) — Design tokens and theme presets (required)
- [`@ninna-ui/primitives`](../primitives/README.md) — Base components (Button, Badge, Text)
- [`@ninna-ui/overlays`](../overlays/README.md) — Overlay components (Modal, Drawer, Tooltip)
- [All packages](../../README.md#packages) — Complete package list

## License

[MIT](../../LICENSE)
