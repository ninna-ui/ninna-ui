# @ninna-ui/react-internal

> ⚠️ **INTERNAL PACKAGE — DO NOT PUBLISH TO NPM**

Internal Radix UI adapters for [Ninna UI](../../README.md). This package isolates all Radix dependencies behind clean TypeScript interfaces so that **no Radix types leak into the public API**.

## Why This Exists

Ninna UI uses [Radix UI](https://www.radix-ui.com/) for complex accessible components (Select, Checkbox, Accordion, Modal, etc.) but wraps every Radix primitive behind an "engine" abstraction. This means:

- **Consumers never import Radix directly** — all Radix types stay internal
- **Radix can be upgraded or swapped** without breaking the public API
- **Bundle size stays minimal** — only the engines you use are included

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

- **`Slot`** — Polymorphic component slot for the `asChild` pattern

## Architecture Rules

- **NEVER publish** this package to npm
- **NO Radix types** in exported interfaces — wrap everything
- **NO direct imports** from apps — only `@ninna-ui/*` packages may import this
- **NO `@radix-ui/*` imports** anywhere else in the monorepo

## License

[MIT](../../LICENSE) (Internal use only)
