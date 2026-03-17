# @ninna-ui/react-internal

> **Radix UI isolation layer for Ninna UI** - wraps 11 Radix primitives behind clean TypeScript interfaces so **no Radix types, imports, or dependencies ever leak into your code**. The architecture that makes Ninna UI's API clean while keeping Radix's accessibility bulletproof.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](../../LICENSE)

This package is **auto-installed** as a dependency of `@ninna-ui/forms`, `@ninna-ui/overlays`, and `@ninna-ui/navigation`. You do **not** need to install it directly - it's an internal implementation detail.

## Why This Exists

Ninna UI uses [Radix UI](https://www.radix-ui.com/) for complex accessible components (Select, Modal, Tabs, Accordion, etc.) but wraps every Radix primitive behind an "engine" abstraction. This architectural decision gives you:

- **Zero Radix in your imports** - consumers never see or type against Radix. Your code stays clean
- **Upgrade-safe API** - Radix can be upgraded or even swapped to a different engine without breaking your app
- **Minimal bundle impact** - only the engines your imported components use are included. Tree-shaking works perfectly

## Used By

| Package | Engines Used |
|---------|-------------|
| `@ninna-ui/forms` | CheckboxEngine, SwitchEngine, RadioEngine, SelectEngine, SliderEngine |
| `@ninna-ui/overlays` | DialogEngine, PopoverEngine, TooltipEngine, DropdownEngine |
| `@ninna-ui/navigation` | TabsEngine, AccordionEngine |

## Engines

Radix component wrappers with Ninna UI's own type interfaces:

| Engine | Radix Package | Used For |
|--------|--------------|----------|
| `checkbox-engine` | `@radix-ui/react-checkbox` | Checkbox, CheckboxGroup |
| `switch-engine` | `@radix-ui/react-switch` | Switch |
| `radio-engine` | `@radix-ui/react-radio-group` | RadioGroup, RadioCard |
| `select-engine` | `@radix-ui/react-select` | Select |
| `slider-engine` | `@radix-ui/react-slider` | Slider |
| `dialog-engine` | `@radix-ui/react-dialog` | Modal, Drawer |
| `popover-engine` | `@radix-ui/react-popover` | Popover |
| `tooltip-engine` | `@radix-ui/react-tooltip` | Tooltip |
| `dropdown-engine` | `@radix-ui/react-dropdown-menu` | DropdownMenu |
| `tabs-engine` | `@radix-ui/react-tabs` | Tabs |
| `accordion-engine` | `@radix-ui/react-accordion` | Accordion |

## Primitives

- **`Slot`** - Polymorphic component slot for the `asChild` pattern

## Architecture Rules

- **NO Radix types** in exported interfaces - wrap everything
- **NO direct imports** from apps - only `@ninna-ui/*` packages may import this
- **NO `@radix-ui/*` imports** anywhere else in the monorepo

## Related Packages

- [`@ninna-ui/utils`](../utils/README.md) - Shared utility functions
- [`@ninna-ui/core`](../core/README.md) - Design tokens and theme presets
- [All packages](../../README.md#packages) - Complete package list

## License

[MIT](../../LICENSE)
