# Changelog

All notable changes to this project will be documented in this file.

This project uses [Changesets](https://github.com/changesets/changesets) for versioning. Each package maintains its own `CHANGELOG.md` which is automatically updated when running `pnpm changeset version`.

See individual package changelogs:

- [`@ninna-ui/core`](./packages/core/CHANGELOG.md)
- [`@ninna-ui/primitives`](./packages/primitives/CHANGELOG.md)
- [`@ninna-ui/feedback`](./packages/feedback/CHANGELOG.md)
- [`@ninna-ui/layout`](./packages/layout/CHANGELOG.md)
- [`@ninna-ui/forms`](./packages/forms/CHANGELOG.md)
- [`@ninna-ui/overlays`](./packages/overlays/CHANGELOG.md)
- [`@ninna-ui/navigation`](./packages/navigation/CHANGELOG.md)
- [`@ninna-ui/data-display`](./packages/data-display/CHANGELOG.md)
- [`@ninna-ui/code-block`](./packages/code-block/CHANGELOG.md)
- [`@ninna-ui/cli`](./packages/cli/CHANGELOG.md)

## [0.3.0] - 2026-03-08

### Bug Fixes

- **Tabs**: Fix vertical tabs - orientation now propagates via context to CVA variants; line variant renders `border-r` when vertical
- **Input/Textarea/Select**: Fix focus border - remove browser default outline with `outline-none focus:outline-none focus-visible:outline-none`; compound variants own the full focus ring
- **Toast**: Fix viewport blocking clicks - add `pointer-events-none` to viewport container
- **Loading dots**: Fix dots appearing as vertical lines - use `inline-flex` wrapper, proper `size-*` classes for round dots, `gap-1.5` spacing
- **CVA regressions**: Fix 11 defaultVariants regressions and 4 styling regressions across all component packages

### Improvements

- **Loading dots**: Increased dot sizes across all breakpoints for better visibility
- **Textarea**: Fix unused `fullWidth` lint error
- **CLI templates**: Update all template package versions to 0.3.0
- **Documentation**: Update all meta version references to 0.3.0

---

## [0.1.0] - 2026-02-27

### Initial Release

#### Packages

- **`@ninna-ui/core`** - Design tokens, CSS variables, 5 theme presets (default, ocean, sunset, forest, minimal), oklch color space, zero-config dark mode
- **`@ninna-ui/primitives`** - Button, Badge, Avatar, Heading, Text, Link, LinkOverlay, Kbd, Code, Blockquote, Mark, Separator, AspectRatio, VisuallyHidden (14 components)
- **`@ninna-ui/feedback`** - Alert, Toast, Progress, CircularProgress, Skeleton, Loading, Status, EmptyState (8 components)
- **`@ninna-ui/layout`** - Box, Flex, Grid, SimpleGrid, Stack, HStack, VStack, Wrap, Center, Container (10 components)
- **`@ninna-ui/forms`** - Input, Textarea, Select, Checkbox, CheckboxGroup, RadioGroup, Switch, Slider, NumberInput, PinInput, FileUpload, Field, FormControl, FormGroup, InputGroup, FormLabel, FormHelperText, FormErrorMessage (18 components)
- **`@ninna-ui/overlays`** - Modal, Drawer, Popover, Tooltip, DropdownMenu (5 components)
- **`@ninna-ui/navigation`** - Tabs, Accordion, Breadcrumbs, Pagination, Stepper (5 components)
- **`@ninna-ui/data-display`** - Card, DataTable, Calendar, Tree, Timeline, Stat, Table (7 components)
- **`@ninna-ui/code-block`** - CodeBlock with TSX syntax highlighting, line numbers, copy button (1 component)
- **`@ninna-ui/cli`** - `ninna-ui init` scaffolding tool with 3 starter templates

#### Highlights

- **69 accessible React components** across 10 published packages
- **5 built-in theme presets** with DaisyUI-level vibrancy (oklch, C=0.20-0.27)
- **Zero-config dark mode** via CSS custom properties - no `dark:` Tailwind classes in library code
- **`data-slot` API** with 98+ named slots for granular component styling
- **Tailwind CSS v4** integration with `@tailwindcss/vite` and `@tailwindcss/postcss`
- **Radix primitives** for complex form components (Select, Checkbox, RadioGroup, Slider)
- **ESM-only distribution** with `sideEffects: false` on all packages for optimal tree-shaking
- **WCAG 2.1 AA compliance** - all components pass @sa11y/vitest audits; `aria-label` props exposed on Stepper, Calendar, DataTable, Tree, Breadcrumbs, Pagination
- **Stepper** refactored to context-based step index (no `cloneElement`)
- **708 tests** across 51 test files with vitest + @testing-library/react + @sa11y/vitest
- **CLI** with template path fix, `workspace:*` → `latest` swap, and tsup-based build with template copy
- **pnpm 9.15.4**, React 19.2, TypeScript 5.4, Vitest 4

#### Breaking Changes

None - this is the initial public release.
