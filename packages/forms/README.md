# @ninna-ui/forms

> 17 accessible form components for Ninna-UI — inputs, selects, checkboxes, switches, radios, sliders, file uploads, and more.

[![npm](https://img.shields.io/npm/v/@ninna-ui/forms.svg)](https://www.npmjs.com/package/@ninna-ui/forms)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](../../LICENSE)

📖 **[Full Documentation →](https://www.ninna-ui.dev/forms)** &nbsp;|&nbsp; 📦 **[npm →](https://www.npmjs.com/package/@ninna-ui/forms)** &nbsp;|&nbsp; 🐙 **[GitHub →](https://github.com/ninna-ui/ninna-ui/tree/main/packages/forms)**

Comprehensive form components for [Ninna UI](../../README.md). Complex controls (Switch, Radio, Select, Slider) are powered by [Radix UI](https://www.radix-ui.com/) under the hood for bulletproof accessibility — but Radix types never leak into the public API.

Every component supports `forwardRef`, `className`, `data-slot` CSS targeting, and integrates with the form infrastructure (`FormControl`, `Field`) for automatic label association, validation messages, and ARIA attributes.

## Installation

```bash
pnpm add @ninna-ui/forms @ninna-ui/core
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

### Form Infrastructure

| Component | Description |
|-----------|-------------|
| `FormControl` | Context provider for label/message/input association |
| `FormLabel` | Accessible label linked to its control |
| `FormMessage` | Validation/helper message with error/success states |
| `Field` | All-in-one: label + input + message in a single component |
| `FormGroup` | Groups related form fields |

### Simple Inputs

| Component | Description | Variants | Colors |
|-----------|-------------|----------|--------|
| `Input` | Text input field | outline, filled, flushed | 8 |
| `Textarea` | Multi-line text input | outline, filled, flushed | 8 |
| `NumberInput` | Numeric input with increment/decrement | outline, filled, flushed | 8 |
| `PinInput` | PIN/OTP code input | outline, filled, flushed | 8 |
| `InputGroup` / `InputAddon` | Input with prefix/suffix addons | — | — |
| `HiddenField` | Hidden form input | — | — |

### Radix-Powered Controls

| Component | Description | Variants | Colors |
|-----------|-------------|----------|--------|
| `Switch` | Toggle switch | outline, soft, solid | 8 |
| `RadioGroup` / `RadioCard` | Radio selection with card variant | outline, soft, solid | 8 |
| `Select` | Dropdown select with search | — | 8 |
| `Slider` | Range slider with marks | outline, soft, solid | 8 |

### Native Controls

| Component | Description | Variants | Colors |
|-----------|-------------|----------|--------|
| `Checkbox` / `CheckboxGroup` | Native checkbox with indeterminate support | outline, soft, solid | 8 |

### Advanced

| Component | Description |
|-----------|-------------|
| `FileUpload` / `FileUploadItem` | Drag-and-drop file upload with validation |

## Quick Start

```tsx
import { Field, Input, Select, SelectItem, Checkbox, Switch } from "@ninna-ui/forms";
import { VStack } from "@ninna-ui/layout";
import { Button } from "@ninna-ui/primitives";

function SignupForm() {
  return (
    <form>
      <VStack gap="md">
        <Field label="Email" required>
          <Input type="email" placeholder="you@example.com" />
        </Field>

        <Field label="Role">
          <Select placeholder="Select a role">
            <SelectItem value="admin">Admin</SelectItem>
            <SelectItem value="user">User</SelectItem>
          </Select>
        </Field>

        <Checkbox color="primary">I agree to the terms</Checkbox>

        <Switch color="primary">Enable notifications</Switch>

        <Button type="submit" color="primary">Sign Up</Button>
      </VStack>
    </form>
  );
}
```

## All Exports

```typescript
import {
  // Form Infrastructure
  FormControl, useFormControl, useFormControlProps,
  FormLabel, FormMessage, Field, FormGroup,
  type FormControlProps, type FormLabelProps,
  type FormMessageProps, type FieldProps, type FormGroupProps,

  // Simple Inputs
  Input, type InputProps,
  Textarea, type TextareaProps,
  NumberInput, type NumberInputProps,
  PinInput, type PinInputProps,
  InputGroup, InputAddon, type InputGroupProps, type InputAddonProps,
  HiddenField, type HiddenFieldProps,

  // Native Controls
  Checkbox, CheckboxGroup, CheckboxGroupItem,
  type CheckboxProps, type CheckboxGroupProps,

  // Radix-Powered Controls
  Switch, type SwitchProps,
  RadioGroup, RadioGroupItem, RadioCard,
  type RadioGroupProps, type RadioGroupItemProps, type RadioCardProps,
  Select, SelectItem, SelectGroup, SelectSeparator,
  type SelectProps, type SelectItemProps,
  Slider, type SliderProps,

  // Advanced
  FileUpload, FileUploadItem,
  type FileUploadProps, type FileRejection,
} from "@ninna-ui/forms";
```

## Accessibility

- **Radix-powered** — Switch, Radio, Select, and Slider use Radix for WAI-ARIA compliance, keyboard navigation, and focus management
- **Native checkbox** — Checkbox/CheckboxGroup use semantic native input behavior with explicit ARIA wiring
- **Form association** — `FormControl` automatically links labels, inputs, and error messages via `id`/`aria-describedby`
- **Validation** — `aria-invalid`, `aria-required`, and `aria-describedby` wired automatically
- **Keyboard** — Full keyboard navigation on all interactive controls

## Related Packages

- [`@ninna-ui/core`](../core/README.md) — Design tokens and theme presets (required)
- [`@ninna-ui/layout`](../layout/README.md) — Layout components for form structure
- [`@ninna-ui/feedback`](../feedback/README.md) — Toast notifications for form submission feedback
- [All packages](../../README.md#packages) — Complete package list

## License

[MIT](../../LICENSE)
