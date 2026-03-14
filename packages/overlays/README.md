# @ninna-ui/overlays

> 5 overlay components for Ninna-UI — Modal, Drawer, Popover, Tooltip, and DropdownMenu.

[![npm](https://img.shields.io/npm/v/@ninna-ui/overlays.svg)](https://www.npmjs.com/package/@ninna-ui/overlays)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](../../LICENSE)

📖 **[Full Documentation →](https://www.ninna-ui.dev/overlays)** &nbsp;|&nbsp; 📦 **[npm →](https://www.npmjs.com/package/@ninna-ui/overlays)** &nbsp;|&nbsp; 🐙 **[GitHub →](https://github.com/ninna-ui/ninna-ui/tree/main/packages/overlays)**

Overlay and portal components for [Ninna UI](../../README.md). All powered by [Radix UI](https://www.radix-ui.com/) under the hood for bulletproof accessibility — focus trapping, scroll locking, escape-to-close, and click-outside dismissal are all handled automatically. Radix types never leak into the public API.

## Installation

```bash
pnpm add @ninna-ui/overlays @ninna-ui/core
```

## CSS Setup

```css
@import "tailwindcss";
@import "@ninna-ui/core/theme/presets/default.css";

@variant dark (&:is(.dark *));
```

## HTML Setup

Add the `data-theme` attribute to your `<html>` element:

```html
<html data-theme="default">
```

## Components

| Component | Description | Radix Engine |
|-----------|-------------|-------------|
| `Modal` | Dialog with backdrop overlay, focus trap, and scroll lock | DialogEngine |
| `Drawer` | Slide-in panel from any edge (top, right, bottom, left) | DialogEngine |
| `Popover` | Floating content anchored to a trigger element | PopoverEngine |
| `Tooltip` | Lightweight hover/focus hint | TooltipEngine |
| `DropdownMenu` | Accessible dropdown menu with keyboard navigation | DropdownEngine |

## Quick Start

```tsx
import { Modal, Tooltip, DropdownMenu } from "@ninna-ui/overlays";
import { Button } from "@ninna-ui/primitives";

function App() {
  return (
    <>
      {/* Tooltip */}
      <Tooltip>
        <Tooltip.Trigger asChild>
          <Button color="primary">Save</Button>
        </Tooltip.Trigger>
        <Tooltip.Content>Save your changes</Tooltip.Content>
      </Tooltip>

      {/* Modal */}
      <Modal>
        <Modal.Trigger asChild>
          <Button>Open Modal</Button>
        </Modal.Trigger>
        <Modal.Content>
          <Modal.Header>Confirm</Modal.Header>
          <Modal.Body>
            <p>Are you sure you want to continue?</p>
          </Modal.Body>
        </Modal.Content>
      </Modal>

      {/* Dropdown */}
      <DropdownMenu>
        <DropdownMenu.Trigger asChild>
          <Button variant="outline">Options</Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Item>Edit</DropdownMenu.Item>
          <DropdownMenu.Item>Duplicate</DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item destructive>Delete</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu>
    </>
  );
}
```

## Built-in Behavior

Overlay components include these accessibility features out of the box:

- **Focus trapping** — Modal and Drawer trap keyboard focus
- **Scroll locking** — Modal and Drawer lock background scroll while open
- **Escape to close** — Press Escape to dismiss (component-configurable)
- **Click outside** — Click outside to dismiss (component-configurable)
- **Portal rendering** — Overlay content renders in a portal to avoid z-index conflicts
- **Animation** — Enter/exit animations via CSS keyframes (ninna-enter, ninna-exit)
- **z-index layering** — Tooltip > DropdownMenu > Popover > Modal/Drawer

## All Exports

```typescript
import {
  Modal,
  Drawer,
  Popover,
  Tooltip,
  DropdownMenu,
} from "@ninna-ui/overlays";
```

## Related Packages

- [`@ninna-ui/core`](../core/README.md) — Design tokens and theme presets (required)
- [`@ninna-ui/primitives`](../primitives/README.md) — Button, Badge, and other trigger components
- [`@ninna-ui/feedback`](../feedback/README.md) — Toast notifications for overlay actions
- [All packages](../../README.md#packages) — Complete package list

## License

[MIT](../../LICENSE)
