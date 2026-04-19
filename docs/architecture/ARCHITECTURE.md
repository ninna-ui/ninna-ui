# Ninna UI Architecture

> **Complete system architecture for the Ninna UI monorepo** - 12 packages, 69 components, Tailwind CSS v4 theme system, Radix isolation layer, canonical component patterns, and build infrastructure. This is the definitive technical reference for understanding how everything fits together.
>
> **Version:** 0.6.0 · **Last Updated:** April 2026 · **Audit Status:** Full monorepo audit completed

## Design Philosophy

Chakra/Mantine-level component quality combined with DaisyUI-simple theming. 100% WCAG 2.1 AA accessibility. Radix primitives powering complex interactive components via an internal engine isolation layer. Zero `'use client'` directives - every component works in React Server Components. Zero `dark:` prefixes in component styles - all theming via CSS custom properties with automatic dark mode.

### Core Principles

1. **DaisyUI-style theming** - One CSS import, instant theme. No JS config files.
2. **shadcn-level quality** - `forwardRef`, `displayName`, `data-slot`, `cn()` on every component.
3. **Radix isolation** - Radix lives in `react-internal`, never leaks to public API.
4. **Token-driven** - All colors are semantic (`primary`, `danger`), never hardcoded (`text-red-500`).
5. **Tree-shakeable** - Named exports, `sideEffects: false`, ESM-only distribution.

---

## Monorepo Structure

```
ninna-ui/
├─ apps/
│  ├─ docs/                  # Storybook 10 documentation (54 story files)
│  └─ playground/            # React Router v7 developer sandbox (SPA mode, 69 component views)
│
├─ packages/
│  ├─ core/                  # Types, tokens, Tailwind class mappings, CSS presets (NO JSX)
│  ├─ utils/                 # cn(), composeRefs, createContext (React optional peer dep)
│  ├─ react-internal/        # 11 Radix engine wrappers + Slot (published, Radix bundled)
│  ├─ primitives/            # 14 simple components (NO Radix)
│  ├─ feedback/              # 8 feedback components + useToast
│  ├─ layout/                # 10 layout components
│  ├─ forms/                 # 17 form components (Radix via react-internal)
│  ├─ overlays/              # 5 overlay components (Radix via react-internal)
│  ├─ navigation/            # 5 navigation components (2 Radix + 3 custom)
│  ├─ data-display/          # 7 data display components (NO Radix)
│  ├─ code-block/            # Syntax-highlighted code block (regex tokenizer)
│  └─ cli/                   # Project scaffolding CLI (commander + prompts)
│
├─ templates/
│  ├─ vite-react/            # Vite 7 + React 19 + @tailwindcss/vite
│  ├─ nextjs/                # Next.js 15 App Router + @tailwindcss/postcss
│  └─ react-router/          # React Router v7 + Vite + @tailwindcss/vite
│
├─ tooling/
│  ├─ eslint-config/         # Shared ESLint config
│  └─ tsconfig/              # Shared TypeScript configs (app.json, library.json)
│
├─ tasks/                    # Phase tracking markdown files (historical)
├─ vitest.config.ts          # Root test config (jsdom, react plugin)
├─ vitest.setup.ts           # jest-dom + vitest-axe matchers
├─ pnpm-workspace.yaml
└─ turbo.json
```

---

## Package Dependency Graph

```
                    ┌─────────────────────────────────────────┐
                    │                  core                     │  (types, class maps, CSS)
                    └──────────┬──────────────────────────────┘
                               │
                    ┌──────────▼──────────┐
                    │       utils          │  (cn, composeRefs, createContext)
                    └──────────┬──────────┘
                               │
          ┌────────────────────┼────────────────────────┐
          │                    │                        │
   ┌──────▼──────┐  ┌─────────▼─────────┐   ┌──────────▼──────────┐
   │ primitives  │  │  react-internal   │   │ feedback, layout,   │
   │             │  │  (Radix engines)  │   │ data-display,       │
   └─────────────┘  └─────────┬─────────┘   │ code-block          │
                              │              └─────────────────────┘
                   ┌──────────┼──────────┐
                   │          │          │
                ┌──▼──┐   ┌──▼───┐  ┌───▼────┐
                │forms│   │over- │  │navi-   │
                │     │   │lays  │  │gation  │
                └─────┘   └──────┘  └────────┘
```

### Dependency Rules (Enforced)

| Package | Can Depend On | MUST NOT Depend On |
|---------|---------------|-------------------|
| `core` | Nothing | React, JSX, Radix |
| `utils` | `clsx`, `tailwind-merge` | React (peer only), core |
| `react-internal` | `core`, `utils`, Radix | Radix type leakage |
| `primitives` | `core`, `utils` | Radix, react-internal |
| `feedback` | `core`, `utils` | Radix, react-internal, primitives |
| `layout` | `core`, `utils` | Radix, react-internal |
| `forms` | `core`, `utils`, `react-internal` | Radix directly |
| `overlays` | `core`, `utils`, `react-internal` | Radix directly |
| `navigation` | `core`, `utils`, `react-internal` | Radix directly |
| `data-display` | `core`, `utils` | Radix, react-internal |
| `code-block` | `core`, `utils` | Radix, react-internal |
| `cli` | `commander`, `prompts`, `fs-extra` | Any @ninna-ui package at runtime |

**Verified:** All `@radix-ui/*` imports exist only in `packages/react-internal/src/engines/` (11 files). Zero leakage.

---

## Tailwind CSS v4.1 Theme System

All styling uses **Tailwind CSS v4.1 CSS-first configuration**. No `tailwind.config.ts` anywhere.

### Architecture

```
core/src/theme/
├── tailwind.css              # @theme inline (31 CSS variables) + keyframes + animation utilities
└── presets/
    ├── default.css           # @import "../tailwind.css" + light/dark variable definitions
    ├── ocean.css
    ├── sunset.css
    ├── forest.css
    └── minimal.css
```

Each preset imports `tailwind.css` (no duplication of `@theme inline`). Presets define:
- **Light mode:** `[data-theme="preset-name"]` - activates when `data-theme` matches
- **Explicit dark:** `.dark [data-theme="preset-name"], [data-theme="preset-name"].dark` - `.dark` class on `<html>` or ancestor
- **System dark:** `@media (prefers-color-scheme: dark) { [data-theme="preset-name"]:not(.light):not(.dark) }` - OS preference, no class set

The `data-theme` attribute is always required on `<html>` (or an ancestor element) for theme variables to activate.

### CSS Variable Contract (31 variables)

| Category | Variables |
|----------|-----------|
| **Semantic colors** | `--color-{primary,secondary,accent,neutral,success,danger,warning,info}` |
| **Content colors** | `--color-{primary,secondary,...}-content` (guaranteed WCAG AA contrast) |
| **Base surfaces** | `--color-base-{50,100,200,300,400,500,600,700,800,900}` |
| **Base text** | `--color-base-content` |
| **Borders** | `--color-border`, `--color-border-{hover,active,disabled}` |

### Color Strategy (oklch)

- **Primary/Secondary/Neutral:** Dark in light mode (L≈0.49-0.52) → white content text
- **Accent/Status colors:** Bright (L≈0.71-0.84) → dark content text
- **Chroma:** 0.18-0.31 (DaisyUI-level vibrancy, sRGB-safe)

### For App CSS

```css
/* Internal monorepo apps */
@import "tailwindcss";
@import "@ninna-ui/core/theme/presets/default.css";
@source "../../../packages/*/src/**/*.{ts,tsx}";

/* External consumers */
@import "tailwindcss";
@import "@ninna-ui/core/theme/presets/default.css";
```

---

## Canonical Component Structure

Every component follows a strict **4-file pattern**:

```
component-name/
├── index.ts                    # Barrel: component + types only (NO styles)
├── component-name.tsx          # Implementation (forwardRef, displayName, data-slot)
├── component-name.types.ts     # Props interface with JSDoc
└── component-name.styles.ts    # ALL styles: base, sizes, colors, variants
```

**Exceptions (acceptable):**
- `toast/` has 4 files: `toast.tsx`, `toaster.tsx`, `use-toast.tsx`, `toast.types.ts` - compound component
- `hidden-field/` has 2 files: no `.styles.ts` or `.types.ts` needed (trivial wrapper)
- Compound components (Card, Modal, Tabs, etc.) use `Object.assign(Root, { Sub1, Sub2 })` pattern

**Rules:**
- **No** separate `.sizes.ts`, `.colors.ts`, `.tokens.ts`, `.class-maps.ts`
- **No** `'use client'` directives in library code (verified: zero instances)
- **No** style exports from barrel `index.ts`
- **No** `dark:` prefixes in `.styles.ts` files (verified: zero instances, one comment only)

---

## Package Inventory

### `@ninna-ui/core` - Types, Tokens & Theme CSS

| Layer | Contents |
|-------|----------|
| `tokens/` | `Color`, `Size`, `CompactSize`, `SpinnerSize`, `Radius`, `TextSize`, `TextWeight`, `HeadingLevel`, `ColorVariant`, `ButtonVariant`, `InputVariant` |
| `classes/` | `BG_COLORS`, `TEXT_COLORS`, `BORDER_COLORS`, `RING_COLORS`, `STROKE_COLORS`, `SOFT_BG_COLORS`, `MUTED_BG_COLORS`, `MUTED_BORDER_COLORS`, `HOVER_TEXT_COLORS`, `MARKER_COLORS`, `SOLID_VARIANTS`, `SOFT_VARIANTS`, `OUTLINE_VARIANTS`, `GHOST_VARIANTS`, `TEXT_VARIANTS`, `RADIUS_CLASSES`, `TEXT_SIZE_CLASSES`, `TEXT_WEIGHT_CLASSES`, `FOCUS_RING_COLORS`, `FOCUS_BORDER_COLORS`, `INPUT_FOCUS_COLORS`, `CHECKED_BG_COLORS`, `CHECKED_BORDER_COLORS`, `PEER_CHECKED_BG_COLORS`, `PEER_CHECKED_BORDER_COLORS`, `FOCUS_VISIBLE_RING_COLORS`, `PEER_FOCUS_VISIBLE_RING_COLORS` |
| `theme/` | `tailwind.css` + 5 preset CSS files |

**No JSX, no React.** Pure TypeScript + CSS.

### `@ninna-ui/utils` - Utility Functions

`cn()` (clsx + tailwind-merge), `composeRefs`, `composeEventHandlers`, `createContext`, `KEYS` (keyboard constants), `canUseDOM`, `isBrowser`, `getOwnerDocument`, `getOwnerWindow`, plus utility types (`Nullable`, `PropsOf`, `PolymorphicProps`, `Prettify`, `Merge`, etc.).

### `@ninna-ui/react-internal` - Radix Engines (Private)

11 engine wrappers: `CheckboxEngine`, `SwitchEngine`, `RadioEngine`, `SelectEngine`, `SliderEngine`, `DialogEngine`, `DropdownEngine`, `PopoverEngine`, `TooltipEngine`, `TabsEngine`, `AccordionEngine`. Plus `Slot` + `Slottable` for polymorphic rendering.

### `@ninna-ui/primitives` - 15 Components

Avatar (+AvatarGroup), Badge, Blockquote, Button, Code, Divider, Heading, IconButton, Kbd, Link, LinkOverlay (+LinkBox), List (+ListItem), Mark, Text.

### `@ninna-ui/feedback` - 9 Components + useToast

Alert, CircularProgress, EmptyState, Loading, Progress, Skeleton (+SkeletonCircle, +SkeletonText), Status, Toast, Toaster (+toast function, +ToastProvider, +useToast).

### `@ninna-ui/layout` - 10 Components

AspectRatio, Box, Center, Container, Flex, Grid, Separator, SimpleGrid, Stack (+HStack, +VStack), Wrap.

### `@ninna-ui/forms` - 17 Components

Checkbox (+CheckboxGroup, +CheckboxGroupItem), Field, FileUpload (+FileUploadItem), FormControl (+useFormControl, +useFormControlProps), FormGroup, FormLabel, FormMessage, HiddenField, Input, InputGroup (+InputAddon), NumberInput, PinInput, RadioGroup (+RadioGroupItem, +RadioCard), Select (+SelectItem, +SelectGroup, +SelectSeparator), Slider, Switch, Textarea.

### `@ninna-ui/overlays` - 5 Components

Modal (.Trigger, .Content, .Header, .Body, .Footer, .Close), Drawer (.Trigger, .Content, .Header, .Body, .Footer, .Close), Popover (.Trigger, .Content, .Close), Tooltip (.Trigger, .Content), DropdownMenu (.Trigger, .Content, .Item, .CheckboxItem, .RadioItem, .Sub, .SubTrigger, .SubContent, .Separator, .Label, .Group).

### `@ninna-ui/navigation` - 5 Components

Tabs (.List, .Trigger, .Content), Accordion (.Item, .Trigger, .Content), Breadcrumbs (.Item, .Link, .Separator, .Ellipsis), Pagination (.Content, .Item, .Link, .Previous, .Next, .Ellipsis), Stepper (.Step, .Indicator, .Separator).

### `@ninna-ui/data-display` - 7 Components

Card (.Header, .Body, .Footer, .Title, .Description), Stat (.Label, .Value, .HelpText, .Trend, .Icon), Table (.Header, .Body, .Footer, .Row, .Head, .Cell, .Caption), DataTable (sortable, loading, empty state), Timeline (.Item, .Indicator, .Content, .Connector, .Heading, .Description, .Time), Tree (keyboard navigation, expand/collapse), Calendar (date selection, month navigation).

### `@ninna-ui/code-block` - 1 Component

CodeBlock with regex-based TSX/CSS/bash syntax highlighting, copy-to-clipboard, optional line numbers. No Prism/Shiki dependency.

### `@ninna-ui/cli` - Scaffolding Tool

`npx @ninna-ui/cli init [name]` - interactive project scaffolding with 3 framework templates and 5 theme presets.

---

## Apps

### Storybook (`apps/docs`)

- **65 story files** organized by category (data-display, feedback, forms, layout, navigation, overlays, primitives)
- Storybook 10 + `@storybook/react-vite` + `@tailwindcss/vite`
- Theme preset toolbar (5 presets via `withThemeByDataAttribute`) + dark mode toggle (via `withThemeByClassName`)
- Stories with `tags: ['autodocs']` get auto-generated docs pages
- `@source` directives for Tailwind tree-shaking

### Playground (`apps/playground`)

- React Router v7 in **SPA mode** (`ssr: false`) + Vite + Tailwind CSS v4.1
- 69 component view files with: ComponentHeader, Usage, Examples, PropsTable, Accessibility
- Theme switching across all 5 presets + dark mode
- Uses `@ninna-ui/utils` `cn()` exclusively
- `react-hook-form` included for form integration demos
- **Internal developer sandbox only** - not the public documentation site
- Public documentation website: **https://ninna-ui.dev** (separate `ninna-ui-web` project)

---

## Build & Test Infrastructure

| Tool | Version | Purpose |
|------|---------|---------|
| **pnpm** | 9.x | Package manager (workspaces) |
| **Turborepo** | 2.x | Build orchestration (`turbo run build`) |
| **tsup** | 8.x | Package bundling (ESM + DTS) |
| **TypeScript** | 5.4+ | Type checking (`tsc --noEmit`) |
| **Vitest** | 4.x | Unit testing (jsdom environment) |
| **@testing-library/react** | 16.x | Component testing |
| **vitest-axe** | 1.0.0-pre.5 | Accessibility testing |
| **Storybook** | 10.x | Component documentation |
| **Changesets** | 2.27+ | Version management |

### Test Configuration

- Root `vitest.config.ts` includes both `packages/**/__tests__/**/*.test.{ts,tsx}` and `packages/**/src/**/*.test.{ts,tsx}`
- Setup: `@testing-library/jest-dom/vitest` + `vitest-axe` matchers
- **51 test files, 708 tests** - all packages covered including layout, navigation, data-display, code-block, overlays
- Coverage: v8 provider, excludes stories/tests/index files
