# Ninna UI Development Rules

> **Enforced conventions and patterns for the Ninna UI codebase** - naming, file structure, Radix isolation, Tailwind CSS rules, data attributes, and accessibility requirements. These rules MUST be followed by all contributors.

---

## 1. Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| **Exported constants** | `SCREAMING_SNAKE_CASE` | `BUTTON_SIZES`, `INPUT_COLORS` |
| **Style objects** | `camelCase` | `buttonStyles`, `inputStyles` |
| **Types / Interfaces** | `PascalCase` | `Size`, `Color`, `ButtonProps` |
| **Component names** | `PascalCase` | `Button`, `RadioGroup` |
| **File names** | `kebab-case` | `radio-group.styles.ts` |

---

## 2. Component Implementation Rules

### 2.1 Canonical 4-File Structure

```
component-name/
├── index.ts                    # Barrel: component + types only (NO styles)
├── component-name.tsx          # Implementation
├── component-name.types.ts     # Props interface with JSDoc
└── component-name.styles.ts    # ALL styles, sizes, colors, variants
```

- **No** separate `.sizes.ts`, `.colors.ts`, `.tokens.ts`, `.class-maps.ts`
- **No** `'use client'` directives in library code
- **No** style exports from barrel `index.ts`

### 2.2 Universal Rules

1. `forwardRef` + `displayName` on every exported component
2. `className` prop always accepted, applied last via `cn()`
3. Import order: `react` → `@ninna-ui/*` → local `./`
4. JSDoc on exported props interfaces
5. Default prop values documented in JSDoc and set in destructuring
6. No deprecated props - remove immediately
7. Accessibility: `focus-visible` ring, ARIA attributes, keyboard navigation

### 2.3 Props Design

```typescript
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style variant */
  variant?: 'solid' | 'soft' | 'outline' | 'ghost' | 'text';
  /** Color theme */
  color?: Color;
  /** Size of the button */
  size?: Size;
  /** Whether the button is in a loading state */
  loading?: boolean;
}
```

---

## 3. Styles Organization

All styles live in a single `.styles.ts` per component:

```typescript
// button.styles.ts
export const buttonStyles = {
  base: [
    "relative isolate inline-flex items-center justify-center gap-2",
    "font-medium transition-all duration-200",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "disabled:opacity-50 disabled:pointer-events-none",
  ],
  sizes: { xs: "h-7 px-2 text-xs", sm: "h-8 px-3 text-sm", ... },
  variants: { solid: { primary: "...", ... }, ... },
};
```

### Token Rules

| Token type | Location | Example |
|-----------|----------|---------|
| **Shared across packages** | `@ninna-ui/core` | `Color`, `Size`, `BG_COLORS`, `RADIUS_CLASSES` |
| **Component-specific** | `.styles.ts` in component folder | `CHECKBOX_COLORS`, `INPUT_SIZES` |

---

## 4. Data Attributes

### `data-slot`
Every component root and meaningful sub-element MUST have a `data-slot` attribute for CSS targeting and component introspection:

```tsx
// Root element
<button data-slot="button" ...>
  <span data-slot="icon">{leftIcon}</span>
  {children}
</button>
```

| Guideline | Rule |
|-----------|------|
| **Root element** | `data-slot="component-name"` (kebab-case) |
| **Sub-elements** | Descriptive name: `icon`, `content`, `title`, `indicator`, `track`, `thumb` |
| **Hidden inputs** | Skip (not visible, no CSS targeting needed) |
| **Compound children** | Each gets its own root slot (e.g., `list-item` inside `list`) |

### `data-state`, `data-disabled`, `data-loading`, `data-invalid`
- `data-disabled={disabled || undefined}` - only when true
- `data-loading={loading || undefined}` - only when true
- `data-invalid={invalid || undefined}` - only when true
- Radix engines provide `data-state` automatically

---

## 5. Accessibility Rules

### All Components
- `forwardRef` always
- `className` always supported
- `disabled` + `aria-disabled` for disabled state
- `aria-busy` + `data-loading` for loading state

### Interactive Components
- `focus-visible:ring-2 focus-visible:ring-offset-2`
- Keyboard navigation (`onKeyDown`)
- `aria-label` / `aria-labelledby`
- Form components: `aria-invalid`, `aria-describedby`, `aria-required`

---

## 6. Radix Usage Rules

- Radix is **ONLY** imported in `@ninna-ui/react-internal`
- Components needing Radix import engines: `CheckboxEngine`, `SwitchEngine`, `RadioEngine`, `SelectEngine`, `SliderEngine`, `DialogEngine`, `DropdownEngine`, `PopoverEngine`, `TooltipEngine`, `TabsEngine`, `AccordionEngine`
- Radix types are **NEVER** exposed in public APIs
- No `@radix-ui/*` imports anywhere except `packages/react-internal/src/`

---

## 7. Package-Specific Rules

### `@ninna-ui/core`
- ✅ Pure TypeScript types, Tailwind class maps, theme CSS presets
- ❌ NO JSX, NO React, NO Radix

### `@ninna-ui/utils`
- ✅ Pure functions: `cn()`, `KEYS`, `canUseDOM`; React-aware: `composeRefs`, `createContext`
- ✅ React is an optional peer dependency (for `createContext`, `composeRefs`)
- ❌ NO DOM APIs, NO @ninna-ui imports

### `@ninna-ui/react-internal`
- ✅ Radix engine wrappers only (Radix is bundled, not a consumer dependency)
- ❌ NEVER imported by apps directly - only `@ninna-ui/*` packages may import this

### `@ninna-ui/primitives`
- ✅ Simple, stateless components
- ❌ NO Radix, NO react-internal

### `@ninna-ui/feedback`
- ✅ User feedback components
- ❌ NO direct Radix imports, NO primitives

### `@ninna-ui/layout`
- ✅ Structural layout components
- ❌ NO Radix, NO react-internal

### `@ninna-ui/forms`
- ✅ Form inputs and controls
- ✅ May import `@ninna-ui/react-internal` engines
- ❌ NO direct `@radix-ui/*` imports

### `@ninna-ui/overlays`
- ✅ Overlay/portal components: Modal, Drawer, Popover, Tooltip, DropdownMenu
- ✅ May import `@ninna-ui/react-internal` engines (DialogEngine, PopoverEngine, TooltipEngine, DropdownEngine)
- ❌ NO direct `@radix-ui/*` imports
- Portal rendering via engine, backdrop blur/overlay, focus trap, scroll lock
- `z-index` layering: tooltip > dropdown > popover > modal/drawer
- Escape key closes, click-outside closes (configurable)

### `@ninna-ui/navigation`
- ✅ Navigation components: Tabs, Accordion, Breadcrumbs, Pagination, Stepper
- ✅ Tabs/Accordion may import `@ninna-ui/react-internal` engines (TabsEngine, AccordionEngine)
- ✅ Breadcrumbs/Pagination/Stepper are custom - no Radix needed
- ❌ NO direct `@radix-ui/*` imports
- Arrow key navigation where applicable (Tabs, Accordion)
- Semantic HTML: `<nav>`, `<ol>`, `role="tablist"`, `aria-current`

### `@ninna-ui/data-display`
- ✅ Data display components: Card, Stat, Table, DataTable, Timeline, Tree, Calendar
- ❌ NO Radix, NO react-internal
- Semantic HTML: `<table>`, `<th scope>`, `<caption>`, `role="grid"`, `role="tree"`
- Tree/Calendar: custom keyboard navigation (arrow keys, `aria-expanded`)

---

## 8. Tailwind CSS Rules

- **Tailwind CSS v4.1 CSS-first only** - no `tailwind.config.ts` anywhere
- Theme via CSS presets in `packages/core/src/theme/presets/`
- `@source` directives for tree-shaking in each app CSS
- `@variant dark (&:is(.dark *))` for dark mode

---

## 9. Storybook Sync Rules

When updating any component:

1. `argTypes` match actual props with correct controls:
   - `select` for union types (`variant`, `color`, `size`)
   - `boolean` for booleans (`loading`, `disabled`)
   - `text` for strings (`children`, `label`)
2. `tags: ['autodocs']` on meta
3. Default story with sensible defaults
4. Per-variant and per-size stories where applicable
5. `AllVariants` showcase story showing all color × variant combinations

---

## 10. Playground Sync Rules

For each component view:

1. Sections: ComponentHeader → Usage → Examples → API Reference → Accessibility
2. `PropsTable` data matches actual component props exactly
3. `componentSections` array matches rendered sections (for TOC)
4. Demo components cover every variant, size, color, and state
5. `CodePreview` shows correct importable source
6. Uses `cn` from `@ninna-ui/utils` exclusively (no local utility)

---

## 11. Git Commit Rules

```
FORMAT: <type>(<scope>): <description>

TYPES: feat, fix, docs, style, refactor, test, chore

EXAMPLES:
  feat(primitives): add Button component
  fix(forms): correct checkbox focus ring
  refactor(layout): merge class-maps into styles
```
