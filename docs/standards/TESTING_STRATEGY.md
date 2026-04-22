# Ninna UI Testing Strategy

> **700+ automated tests across 51 test files** - priority-based coverage, @sa11y/vitest accessibility audits, co-located test files, and clear guidelines on what to test and what to skip. This document defines the testing philosophy and requirements for every Ninna UI component.
>
> **Version:** 0.6.0 · **Last Updated:** April 2026

---

## 1. Test Infrastructure

| Tool | Purpose |
|------|---------|
| **Vitest 4.x** | Test runner (jsdom environment, globals enabled) |
| **@testing-library/react 16.x** | Component rendering and interaction |
| **@testing-library/user-event 14.x** | Realistic user interaction simulation |
| **@testing-library/jest-dom** | DOM assertion matchers (`toBeInTheDocument`, `toHaveClass`, etc.) |
| **@sa11y/vitest ^8.0.27** | Automated accessibility auditing (axe-core) - chosen for its Salesforce-backed stability and native support for Vite 8+ environment. |

### Configuration

- **Root config:** `vitest.config.ts` - jsdom, react plugin, css: true
- **Setup file:** `vitest.setup.ts` - jest-dom matchers + sa11y matchers + afterEach cleanup
- **Type augmentation:** `vitest.d.ts` - Sa11yMatchers on Vitest Assertion interface
- **Include patterns:** `packages/**/__tests__/**/*.test.{ts,tsx}` + `packages/**/src/**/*.test.{ts,tsx}`

---

## 2. Test Placement

### 2.1 Component Tests - Co-located

Component tests live **inside the component folder**, next to the implementation:

```
packages/primitives/src/button/
├── index.ts
├── button.tsx
├── button.types.ts
├── button.styles.ts
└── button.test.tsx          ← HERE
```

**Rationale:** Co-location makes it obvious which components have tests and which don't. When you delete a component, the test goes with it.

### 2.2 Utility Tests - `__tests__/` folder

Same pattern for utilities:

```
packages/utils/
├── __tests__/
│   ├── cn.test.ts
│   ├── compose-refs.test.ts
│   └── create-context.test.tsx
└── src/
    └── ...
```

### 2.4 Naming Convention

| Type | Pattern | Example |
|------|---------|---------|
| Component test | `component-name.test.tsx` | `button.test.tsx` |
| Utility test | `utility-name.test.ts` | `cn.test.ts` |

Always `.tsx` for components (JSX needed), `.ts` for utils (no JSX).

---

## 3. What MUST Be Tested

### 3.1 Every Component - Mandatory Tests

| Test Category | What to Assert | Example |
|---------------|----------------|---------|
| **Renders** | Component mounts without crashing | `render(<Button>Click</Button>)` |
| **displayName** | Correct displayName set | `expect(Button.displayName).toBe('Button')` |
| **data-slot** | Root element has correct data-slot | `expect(el).toHaveAttribute('data-slot', 'button')` |
| **className merge** | Custom className is applied | `render(<Button className="custom" />)` → element has "custom" |
| **Ref forwarding** | ref is forwarded to root DOM element | `const ref = createRef(); render(<Button ref={ref} />)` |
| **Default rendering** | Correct HTML element and default classes | Check tag name, default variant classes |

### 3.2 Interactive Components - Additional Tests

| Test Category | What to Assert |
|---------------|----------------|
| **Disabled state** | `disabled` attr, `aria-disabled`, visual class, click handler not called |
| **Loading state** | `aria-busy`, `data-loading`, spinner visible, pointer-events disabled |
| **Keyboard** | Enter/Space triggers action, Escape closes overlay, Arrow keys navigate |
| **Focus** | `focus-visible` ring appears on keyboard focus |

### 3.3 Form Components - Additional Tests

| Test Category | What to Assert |
|---------------|----------------|
| **Controlled mode** | Value reflects prop, onChange fires with new value |
| **Uncontrolled mode** | Internal state updates, defaultValue respected |
| **Invalid state** | `aria-invalid`, `data-invalid`, error styling |
| **Required** | `aria-required` or `required` attribute |
| **Label association** | `htmlFor`/`id` pairing or `aria-label` |

### 3.4 Variant/Color/Size - Parametric Tests

Use `it.each` for exhaustive variant coverage:

```typescript
const variants = ['solid', 'soft', 'outline'] as const;
const colors = ['primary', 'secondary', 'danger'] as const;

it.each(variants)('renders %s variant', (variant) => {
  render(<Badge variant={variant}>Test</Badge>);
  // assert variant-specific classes
});

it.each(colors)('renders %s color', (color) => {
  render(<Badge color={color}>Test</Badge>);
  // assert color-specific classes
});
```

### 3.5 Accessibility - axe Audit

Every component MUST have at least one axe audit:

```typescript
it('passes axe accessibility audit', async () => {
  const { container } = render(<Button>Click me</Button>);
  await expect(container).toBeAccessible();
});
```

### 3.7 Utilities - Mandatory Tests

| Test Category | What to Assert |
|---------------|----------------|
| **Happy path** | Correct output for standard input |
| **Edge cases** | Empty input, null, undefined |
| **Type safety** | TypeScript types match runtime behavior |

---

## 4. What SHOULD NOT Be Tested

### 4.1 Do NOT Test

- **Tailwind class strings** - Don't assert exact class names like `"bg-primary text-primary-content"`. These are implementation details that change frequently. Test behavior and attributes instead.
- **Internal state** - Don't reach into component internals. Test through the public API (props, events, DOM output).
- **Style objects** - Don't unit test `.styles.ts` files in isolation. They're tested implicitly through component tests.
- **Third-party libraries** - Don't test that Radix works. Test that YOUR wrapper passes the right props.
- **Storybook stories** - Stories are documentation, not tests. Don't use stories as test substitutes.
- **Layout components** - Box, Flex, Grid, Stack, etc. are thin wrappers around `<div>` with className. A basic render + className merge test is sufficient. Don't over-test.
- **CSS rendering** - jsdom doesn't render CSS. Don't assert visual appearance.

### 4.2 Over-Testing Indicators

- Testing every single prop value when only a few are meaningfully different
- Testing that `cn()` merges classes correctly (that's cn's job, tested in utils)
- Snapshot tests of entire component trees (brittle, low value)
- Testing internal helper functions that aren't exported

---

## 5. Test Priority Matrix

### 5.1 MUST Test (P0)

| Package | Components |
|---------|------------|
| `primitives` | Button, IconButton, Link, Avatar |
| `feedback` | Alert, Toast/Toaster, Progress |
| `forms` | ALL - Input, Checkbox, Switch, RadioGroup, Select, Slider, Textarea, NumberInput, PinInput, FileUpload, Field, FormControl |
| `overlays` | Modal, Drawer, Tooltip, Popover, DropdownMenu |
| `navigation` | Tabs, Accordion, Pagination |
| `utils` | cn, createContext, composeRefs |

### 5.2 SHOULD Test (P1)

| Package | Components |
|---------|------------|
| `primitives` | Badge, Heading, Text, Code, Kbd, Blockquote, List, Mark, Divider |
| `feedback` | Loading, Skeleton, CircularProgress, Status, EmptyState |
| `navigation` | Breadcrumbs, Stepper |
| `data-display` | Card, Table, DataTable, Calendar, Timeline, Tree, Stat |
| `utils` | composeEventHandlers, dom utilities |

### 5.3 MAY Skip (P2)

| Package | Components | Reason |
|---------|------------|--------|
| `layout` | Box, Flex, Grid, Stack, Center, Container, Wrap, SimpleGrid, AspectRatio, Separator | Thin wrappers - basic render test sufficient |
| `forms` | FormGroup, FormLabel, FormMessage, HiddenField, InputGroup | Infrastructure components - tested implicitly through Field/FormControl tests |

---

## 6. Current Coverage Report

### 6.1 Test File Inventory (51 files, 708 tests)

| Package | Test Files | Tests | Coverage |
|---------|------------|-------|----------|
| `primitives` | 8 | ~120 | button, badge, avatar, icon-button, link, link-overlay, heading, text |
| `feedback` | 8 | ~130 | alert, circular-progress, loading, progress, skeleton, status, toast, empty-state |
| `forms` | 12 | ~200 | checkbox, file-upload, form-control, input, number-input, pin-input, radio-group, select, slider, switch, textarea, field |
| `layout` | 1 | 54 | All 10 components: Box, Container, Stack, HStack, VStack, Flex, Grid, Center, Wrap, SimpleGrid, AspectRatio, Separator |
| `overlays` | 5 | ~80 | drawer, dropdown-menu (expanded), modal, popover (expanded), tooltip |
| `navigation` | 6 | ~55 | accordion, breadcrumbs, pagination, stepper, tabs + full suite in `__tests__/` |
| `data-display` | 6 | ~55 | calendar, data-table, tree, card, table + full suite in `__tests__/` (stat, timeline added) |
| `code-block` | 1 | 17 | render, syntax highlighting, copy-to-clipboard |
| `utils` | 3 | ~15 | cn, compose-refs, create-context |
| `core` | 1 | 1 | index exports |

### 6.2 Remaining Gaps

All P0 and P1 gaps have been resolved. Remaining P2 gaps:

| Missing Test | Priority | Reason |
|-------------|----------|--------|
| `forms/input-group` | P2 | Infrastructure component - tested implicitly through Field/FormControl |
| `navigation/stepper` axe audit | P2 | Stepper uses custom list pattern, axe audit would add confidence |

---

## 7. Running Tests

```bash
# Run all tests
pnpm vitest run

# Run tests in watch mode
pnpm vitest

# Run tests for a specific package
pnpm vitest run packages/primitives

# Run a specific test file
pnpm vitest run packages/primitives/src/button/button.test.tsx

# Run with coverage
pnpm vitest run --coverage

# Run only accessibility tests (filter by test name)
pnpm vitest run -t "axe"
```
