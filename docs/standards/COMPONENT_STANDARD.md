# Ninna UI Component Standard

> **The definitive guide to building Ninna UI components** - canonical 4-file pattern, props design, `data-slot` API, `forwardRef` conventions, style organization, export strategy, and accessibility requirements. This is the source of truth for all component implementation decisions.
>
> **Version:** 1.0.0 · **Last Updated:** February 2026

---

## 1. File Structure

### 1.1 Canonical 4-File Pattern

Every component MUST follow this structure:

```
component-name/
├── index.ts                    # Barrel: component + types only (NO styles)
├── component-name.tsx          # Implementation
├── component-name.types.ts     # Props interface with JSDoc
├── component-name.styles.ts    # ALL styles: base, sizes, colors, variants
└── component-name.test.tsx     # Co-located test file
```

### 1.2 Naming Rules

| Type | Convention | Example |
|------|------------|---------|
| **Folders** | `kebab-case` | `radio-group/`, `link-overlay/` |
| **Files** | `kebab-case` | `radio-group.styles.ts` |
| **Components** | `PascalCase` | `RadioGroup`, `LinkOverlay` |
| **Props interfaces** | `PascalCase` + `Props` | `RadioGroupProps`, `ButtonProps` |
| **Style objects** | `camelCase` + `Styles` | `buttonStyles`, `alertStyles` |
| **Exported constants** | `SCREAMING_SNAKE_CASE` | `BUTTON_SIZES`, `INPUT_COLORS` |
| **Types** | `PascalCase` | `Color`, `Size`, `ButtonVariant` |

### 1.3 Barrel Index Rules

```typescript
// ✅ CORRECT - component + types only
export { Button } from './button';
export type { ButtonProps } from './button.types';

// ❌ WRONG - never export styles
export { buttonStyles } from './button.styles';

// ❌ WRONG - never use wildcard re-exports for components
export * from './button';
```

### 1.4 Compound Components

Compound components (Card, Modal, Tabs, etc.) use `Object.assign`:

```typescript
// card.tsx
const CardRoot = forwardRef<HTMLDivElement, CardProps>(/* ... */);
CardRoot.displayName = 'Card';

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(/* ... */);
CardHeader.displayName = 'Card.Header';

export const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
});
```

Consumer usage: `<Card.Header>`, `<Card.Body>`, etc.

### 1.5 Exceptions

| Component | Deviation | Reason |
|-----------|-----------|--------|
| `toast/` | 4 implementation files | Compound: `toast.tsx`, `toaster.tsx`, `use-toast.tsx` |
| `hidden-field/` | 2 files only | Trivial wrapper, no styles or complex types needed |
| `box/` | No `.styles.ts` | Pass-through div, no styling logic |

---

## 2. Component Implementation

### 2.1 Required Patterns

Every exported component MUST have:

```typescript
import { forwardRef } from 'react';
import { cn } from '@ninna-ui/utils';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'solid', color = 'primary', className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        data-slot="button"
        className={cn(buttonStyles.base, className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
```

**Checklist:**
- [ ] `forwardRef` wrapping
- [ ] `displayName` set (matches component name)
- [ ] `ref` forwarded to root DOM element
- [ ] `className` prop accepted and applied last via `cn()`
- [ ] `data-slot` on root element (kebab-case component name)
- [ ] `...props` spread on root element
- [ ] Default values set in destructuring, not in component body

### 2.2 Import Order

```typescript
// 1. React
import { forwardRef, useState, useCallback } from 'react';

// 2. @ninna-ui packages (alphabetical)
import { cn } from '@ninna-ui/utils';
import type { Color, Size } from '@ninna-ui/core';

// 3. Local files
import { buttonStyles, getVariantClasses } from './button.styles';
import type { ButtonProps } from './button.types';
```

### 2.3 Data Attributes

| Attribute | Usage | Example |
|-----------|-------|---------|
| `data-slot` | Root + meaningful sub-elements | `data-slot="button"`, `data-slot="icon"` |
| `data-loading` | Loading state | `data-loading={loading}` |
| `data-disabled` | Disabled state | `data-disabled={disabled \|\| undefined}` |
| `data-invalid` | Invalid/error state | `data-invalid={invalid \|\| undefined}` |
| `data-variant` | Current variant | `data-variant={variant}` |
| `data-size` | Current size | `data-size={size}` |

Rules:
- Root element: `data-slot="component-name"` (kebab-case)
- Sub-elements: descriptive names (`icon`, `content`, `title`, `indicator`, `track`, `thumb`)
- Hidden inputs: skip `data-slot` (not visible, no CSS targeting needed)
- Boolean data attributes: only render when `true`, use `|| undefined` to omit when false

---

## 3. Props Design

### 3.1 Standard Props

| Prop | Type | Default | Used By |
|------|------|---------|---------|
| `variant` | Component-specific union | `'solid'` or `'outline'` | Button, Badge, Alert, Checkbox, etc. |
| `color` | `Color` | `'primary'` | All colored components |
| `size` | `Size` or `CompactSize` | `'md'` | All sized components |
| `radius` | `Radius` | `'md'` | Button, IconButton, Input |
| `disabled` | `boolean` | `false` | All interactive components |
| `loading` | `boolean` | `false` | Button, IconButton |
| `invalid` | `boolean` | `false` | All form inputs |
| `fullWidth` | `boolean` | varies | Button, Input |
| `className` | `string` | - | ALL components |

### 3.2 Props Interface Rules

```typescript
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import type { ButtonVariant, Color, Size, Radius } from '@ninna-ui/core';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style variant */
  variant?: ButtonVariant;
  
  /** Color theme */
  color?: Color;
  
  /** Size of the button */
  size?: Size;
  
  /** Border radius style */
  radius?: Radius;
  
  /** Whether the button is in a loading state */
  loading?: boolean;
}
```

Rules:
- Extend the correct HTML element attributes (`HTMLAttributes<HTMLDivElement>`, `ButtonHTMLAttributes<HTMLButtonElement>`, etc.)
- JSDoc on every prop
- All props optional (except `children` when required)
- Use core types (`Color`, `Size`, `Radius`, `ColorVariant`, `ButtonVariant`, `InputVariant`) - never inline unions
- Omit conflicting HTML attributes when needed: `Omit<HTMLAttributes<HTMLDivElement>, 'title'>`

### 3.3 Variant Type Hierarchy

```
ColorVariant = 'solid' | 'soft' | 'outline'
  └─ Used by: Badge, Alert, Toast, Checkbox, Radio, Switch

ButtonVariant = ColorVariant | 'ghost' | 'text'
  └─ Used by: Button, IconButton

InputVariant = 'outline' | 'filled' | 'flushed' | 'unstyled'
  └─ Used by: Input, Textarea, Select, NumberInput
```

---

## 4. Styles Organization

### 4.1 Style File Structure

```typescript
// button.styles.ts
import { SOLID_VARIANTS, RADIUS_CLASSES } from '@ninna-ui/core';
import type { ButtonVariant, Color, Size } from '@ninna-ui/core';

export const buttonStyles = {
  base: [
    "relative isolate inline-flex items-center justify-center gap-2",
    "font-medium transition-all duration-200",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "disabled:opacity-50 disabled:pointer-events-none",
  ].join(" "),

  sizes: {
    xs: 'h-7 px-2 text-xs',
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4 text-sm',
    lg: 'h-11 px-5 text-base',
    xl: 'h-12 px-6 text-base',
  } satisfies Record<Size, string>,

  radius: RADIUS_CLASSES,
  fullWidth: "w-full",
};

export function getVariantClasses(variant: ButtonVariant, color: Color): string {
  // ...
}
```

### 4.2 Token Rules

| Token Scope | Location | Example |
|-------------|----------|---------|
| **Shared across packages** | `@ninna-ui/core` classes/ | `BG_COLORS`, `SOLID_VARIANTS`, `RADIUS_CLASSES` |
| **Component-specific** | `.styles.ts` in component folder | `CHECKBOX_COLORS`, `INPUT_SIZES`, `MODAL_SIZES` |

### 4.3 Style Rules

- **No `dark:` prefixes** - CSS variables handle dark mode automatically
- **No hardcoded palette colors** - use semantic tokens (`bg-primary`, not `bg-indigo-500`)
- **No inline styles** - except oklch values in CSS presets
- **No CSS-in-JS** - Tailwind utility classes only
- Use `satisfies Record<Size, string>` for type safety on size maps
- Use `.join(" ")` for multi-line base style arrays
- Helper functions (e.g., `getVariantClasses`) for complex variant logic

---

## 5. Accessibility

All Ninna-UI components MUST meet WCAG 2.1 Level AA standards. Accessibility is not optional.

**See [ACCESSIBILITY.md](./ACCESSIBILITY.md) for complete accessibility guidelines**, including:
- Focus management and keyboard navigation
- ARIA attributes and semantic HTML
- Form labeling and error handling
- Overlay component requirements
- Screen reader testing procedures
- Color contrast requirements

**Quick Reference:**
- ✅ `forwardRef` always
- ✅ `className` always supported
- ✅ Semantic HTML elements (`<button>`, `<nav>`, `<table>`)
- ✅ Visible focus rings (`focus-visible:ring-2`)
- ✅ ARIA attributes for state (`aria-invalid`, `aria-busy`, etc.)
- ✅ All inputs have labels
- ✅ Error messages linked via `aria-describedby`

---

## 6. Package-Specific Rules

### `@ninna-ui/core`
- ✅ Pure TypeScript types and Tailwind class maps
- ✅ CSS theme presets (oklch values)
- ❌ NO JSX, NO React, NO Radix

### `@ninna-ui/utils`
- ✅ Pure functions: `cn()`, `composeRefs`, `composeEventHandlers`, `createContext`
- ✅ `react` is an optional peer dependency (for `createContext`, `composeRefs`)
- ❌ NO @ninna-ui/core imports

### `@ninna-ui/react-internal`
- ✅ Radix engine wrappers + Slot (Radix is bundled, not a consumer dependency)
- ✅ Own interface definitions (never re-export Radix types)
- ❌ NEVER imported by apps directly - only `@ninna-ui/*` packages may import this

### `@ninna-ui/primitives`
- ✅ Simple, mostly stateless components
- ❌ NO Radix, NO react-internal

### `@ninna-ui/layout`
- ✅ Structural layout components
- ❌ NO Radix, NO react-internal

### `@ninna-ui/forms`
- ✅ Form inputs and controls
- ✅ May import `@ninna-ui/react-internal` engines
- ❌ NO direct `@radix-ui/*` imports

### `@ninna-ui/overlays` / `@ninna-ui/navigation`
- ✅ May import `@ninna-ui/react-internal` engines
- ❌ NO direct `@radix-ui/*` imports

### `@ninna-ui/data-display`
- ✅ Custom components only
- ❌ NO Radix, NO react-internal

---

## 7. Export Strategy

### 7.1 Package Exports

All packages use ESM-only format via tsup (`format: ['esm']`):

```json
{
  "type": "module",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.js",
      "default": "./dist/index.js"
    },
    "./package.json": "./package.json"
  },
  "sideEffects": false
}
```

### 7.2 Named Exports Only

```typescript
// ✅ CORRECT
export { Button } from './button';
export type { ButtonProps } from './button.types';

// ❌ WRONG - no default exports
export default Button;
```

### 7.3 Type Exports

- Use `export type { ... }` for type-only exports (tree-shaking)
- Export all public types from package `index.ts`
- Internal types stay in `.types.ts` files, not exported from barrel

---

## 8. Controlled vs Uncontrolled Components

### 8.1 API Model

UI components follow a controlled/uncontrolled API model. All stateful components MUST support both patterns.

### 8.2 ⚠️ Controlled vs Uncontrolled Note

Components using `defaultValue` are uncontrolled.

- `defaultValue` is only applied on the initial render.
- Updating `defaultValue` after mount is not supported and will be ignored.

❌ Do NOT do this:
```tsx
<Input defaultValue={valueFromApi} />
```

✅ Use controlled mode instead:
```tsx
const [value, setValue] = useState(valueFromApi);

<Input value={value} onChange={setValue} />
```

If the value is expected to change over time, the component MUST be used in controlled mode.

### 8.3 Implementation Pattern

All stateful components MUST support both controlled and uncontrolled patterns:

```typescript
const [internalValue, setInternalValue] = useState(defaultValue);
const isControlled = value !== undefined;
const currentValue = isControlled ? value : internalValue;

const handleChange = useCallback((newValue) => {
  if (!isControlled) setInternalValue(newValue);
  onChange?.(newValue);
}, [isControlled, onChange]);
```

### 8.4 Components with State

**Components requiring controlled/uncontrolled support:**
- Input, Textarea, NumberInput, PinInput
- Select, DropdownMenu
- Checkbox, RadioGroup, Switch
- Slider
- Tabs, Accordion
- Modal, Drawer, Popover, Tooltip

---

## 9. Component Priority Levels & Testing Requirements

### 9.1 Priority Classification

Components are categorized by impact and stability requirements:

#### **P0 (Critical)**
Core, highly reused components that affect product stability and accessibility.  
Examples: Button, Input, Select, Modal, Tooltip  
→ Tests are **mandatory**.

#### **P1 (Important)**
Frequently used components with business or UX impact.  
Examples: DropdownMenu, Tabs, DataTable  
→ Tests are **mandatory**.

#### **P2 (Low Risk / Structural)**
Thin, mostly presentational or layout components.  
Examples: Box, Stack, Divider, Spacer  
→ Tests are **optional**.

### 9.2 Test Requirements by Priority

| Priority | Test Coverage | Accessibility Tests | Regression Tests |
|----------|---------------|---------------------|------------------|
| **P0** | 100% coverage of all props, states, and interactions | axe audit + ARIA attributes | Visual regression tests |
| **P1** | Core functionality and common use cases | axe audit for interactive elements | Key user journeys |
| **P2** | Basic rendering test (optional) | Not required | Not required |

### 9.2.1 ESLint Enforcement

A custom ESLint rule (`test-coverage/require-tests`) enforces test requirements:

- **P0/P1 components**: Error if test file missing
- **P2 components**: No enforcement (tests optional)  
- **Unknown components**: Warning to add to priority map

The rule checks for test files in:
- `packages/*/src/__tests__/*.test.tsx` (preferred)
- `packages/*/src/*.test.tsx` (co-located)

### 9.3 Component Priority Mapping

| Package | P0 Components | P1 Components | P2 Components |
|---------|---------------|---------------|----------------|
| `primitives` | Button, Input | Badge, Avatar, Link | Box, Divider, Text, Heading |
| `forms` | Input, Select, Checkbox, RadioGroup | Field, FormControl, Slider | HiddenField, FormGroup |
| `overlays` | Modal, Tooltip | Drawer, Popover, DropdownMenu | - |
| `navigation` | Tabs | Accordion, Pagination | Breadcrumbs, Stepper |
| `feedback` | Alert, Toast | Progress, Loading | Skeleton, Status |
| `data-display` | Table | Card, DataTable | Stat, Timeline, Tree |
| `layout` | - | - | All (Box, Stack, Grid, etc.) |

---

## 10. Component Standards

### 10.1 Semantic Color Rules

**Component styles MUST NOT introduce new semantic color meanings.** New semantic colors are added only in `@ninna-ui/core` to ensure consistency across all components.

| ✅ Allowed | ❌ Not Allowed |
|-----------|----------------|
| `primary`, `secondary`, `accent`, `neutral`, `success`, `danger`, `warning`, `info` | `brand`, `corporate`, `muted`, `subtle` (unless in core) |
| Using existing core semantic tokens in component variants | Creating new color meanings in component styles |
| Component-specific variants that map to core colors | Hardcoded palette colors (e.g., `text-red-500`) |

---

## 11. Audit Findings & Known Issues

### 11.1 Resolved Issues

| Issue | Resolution |
|-------|------------|
| **Barrel export inconsistency** | Normalized `data-display/`, `navigation/`, `overlays/` to use named exports without `.js` extensions - matching `primitives/`, `feedback/`, `forms/`, `layout/` |
| **`@types/react` version mismatch** | Fixed playground `@types/react` and `@types/react-dom` from `^18.2.0` → `^19.0.0` |
| **Alert `sizes` defined but unused** | Added `size` prop to `AlertProps` and wired `alertStyles.sizes[size]` + `alertStyles.iconSizes[size]` in component |

### 11.2 Accepted Design Decisions

| Item | Rationale |
|------|-----------|
| **Checkbox not using Radix** | Native `<input type="checkbox">` is simpler and sufficient |
| **`useCallbackRef` duplicated** | Inline version in `use-controllable-state.ts` is a private helper, not exported |
| **`utils` has React peer dep** | `createContext` and `composeRefs` use React - marked as optional peer |
| **`feedback` depends on `primitives`** | Used by Toast component - acceptable cross-package dependency |
| **`TEXT_SIZE_CLASSES` has `md` AND `base`** | Intentional - `md` is the standard scale name, `base` is an alias |

### 11.3 Test Coverage

| Package | Components WITH tests | Remaining gaps |
|---------|----------------------|----------------|
| `primitives` (15) | button, badge, avatar, icon-button, link, link-overlay, **heading**, **text** | blockquote, code, divider, kbd, list, mark |
| `feedback` (9) | alert, circular-progress, loading, progress, skeleton, status, toast, **empty-state** | - |
| `forms` (17) | checkbox, file-upload, form-control, input, number-input, pin-input, radio-group, select, slider, switch, textarea, **field** | form-group, form-label, form-message, hidden-field, input-group |
| `layout` (10) | - | ALL (thin wrappers - P2 priority) |
| `overlays` (5) | drawer, dropdown-menu, modal, popover, tooltip | - |
| `navigation` (5) | accordion, pagination, stepper, tabs, **breadcrumbs** | - |
| `data-display` (7) | calendar, data-table, tree, **card**, **table** | stat, timeline |
| `utils` (6) | cn, compose-refs, create-context | compose-handlers, dom, keyboard |

**Total: 54 test files. All P0 components covered. Remaining gaps are P1/P2 priority.**
