---
name: ninna-component-testing
description: Use when writing or reviewing tests for Ninna UI components or utilities. Covers the Vitest + Testing Library + @sa11y/vitest stack, co-located test placement, the mandatory test matrix (render, displayName, data-slot, className merge, ref forwarding, variants via it.each, a11y audit), interactive/form-specific cases, what NOT to test, and the exact commands to run. Apply whenever a *.test.tsx is added or a component lacks coverage.
---

# Ninna UI — Component Testing

Ninna UI has 700+ tests across the monorepo with priority-based coverage. Tests are co-located, behavior-focused, and every component ships an accessibility audit. Source of truth: `docs/standards/TESTING_STRATEGY.md`.

## Stack

- **Vitest 4.x** (jsdom, globals enabled) — `describe/it/expect` are global, no import needed but importing from `vitest` is fine.
- **@testing-library/react 16.x** — `render`, `screen`.
- **@testing-library/user-event 14.x** — realistic interaction.
- **@testing-library/jest-dom** — `toBeInTheDocument`, `toHaveClass`, `toHaveAttribute`.
- **@sa11y/vitest** — `await expect(container).toBeAccessible()`. Matcher is registered globally by `@ninna-ui/test-config/setup`; do NOT import it per file.

Each package's `vitest.config.ts` merges the shared `@ninna-ui/test-config` and just sets a `name`.

## Placement & naming

- Component tests are **co-located**: `packages/<pkg>/src/<comp>/<comp>.test.tsx`.
- Utility tests live in `packages/<pkg>/__tests__/<util>.test.ts`.
- `.tsx` for components (JSX), `.ts` for utils.

## Mandatory matrix — every component

| Test            | Assert                                                |
| --------------- | ----------------------------------------------------- |
| Renders         | mounts without crashing                               |
| displayName     | `expect(Comp.displayName).toBe('Comp')`               |
| data-slot       | root has `data-slot="comp"`                           |
| className merge | custom `className` is applied (consumer wins)         |
| ref forwarding  | `createRef()` is attached to the root DOM node        |
| Variants        | `it.each` over variant/color/size unions              |
| a11y            | `await expect(container).toBeAccessible()` (≥1 audit) |

```tsx
import { describe, it, expect } from "vitest";
import { createRef } from "react";
import { render, screen } from "@testing-library/react";
import { Button } from "./button";

describe("Button", () => {
  it("renders children", () => {
    render(<Button>Click</Button>);
    expect(screen.getByText("Click")).toBeInTheDocument();
  });

  it("has displayName", () => {
    expect(Button.displayName).toBe("Button");
  });

  it("sets data-slot", () => {
    render(<Button>x</Button>);
    expect(screen.getByText("x")).toHaveAttribute("data-slot", "button");
  });

  it("merges className", () => {
    render(<Button className="custom">x</Button>);
    expect(screen.getByText("x")).toHaveClass("custom");
  });

  it("forwards ref", () => {
    const ref = createRef<HTMLButtonElement>();
    render(<Button ref={ref}>x</Button>);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  it.each(["solid", "soft", "outline"] as const)(
    "renders %s variant",
    (variant) => {
      render(<Button variant={variant}>x</Button>);
      expect(screen.getByText("x")).toBeInTheDocument();
    },
  );

  it("passes axe audit", async () => {
    const { container } = render(<Button>Click me</Button>);
    await expect(container).toBeAccessible();
  });
});
```

## Interactive components — add

- **Disabled**: `disabled` attr + `aria-disabled` + click handler NOT called.
- **Loading**: `aria-busy` + `data-loading` + spinner visible + pointer-events disabled.
- **Keyboard**: Enter/Space triggers, Escape closes overlay, Arrows navigate (use `userEvent`).
- **Focus**: keyboard focus lands correctly (and restores after overlay close).

```tsx
import userEvent from "@testing-library/user-event";

it("does not fire onClick when disabled", async () => {
  const onClick = vi.fn();
  render(
    <Button disabled onClick={onClick}>
      x
    </Button>,
  );
  await userEvent.click(screen.getByText("x"));
  expect(onClick).not.toHaveBeenCalled();
});
```

## Form components — add

- Controlled (value reflects prop, `onCheckedChange`/`onValueChange` fires) AND uncontrolled (`defaultValue`).
- Invalid: `aria-invalid` + `data-invalid`.
- Required: `required`/`aria-required`.
- Label association: `htmlFor`/`id` or `aria-label`.

## Do NOT test

- Exact Tailwind class strings (implementation detail) — assert attributes/behavior instead.
- Internal state or unexported helpers.
- `.styles.ts` in isolation (covered implicitly).
- That Radix works — only that YOUR wrapper passes correct props.
- CSS visual rendering (jsdom doesn't render CSS).
- Over-testing layout wrappers (Box/Flex/Grid): a render + className test is enough.

## Priority

- **P0 (must):** Button, IconButton, Link, Avatar; all forms; all overlays; Tabs/Accordion/Pagination; Alert/Toast/Progress; utils cn/createContext/composeRefs.
- **P1 (should):** other primitives, feedback, data-display, Breadcrumbs/Stepper.
- **P2 (may skip):** thin layout wrappers, form infrastructure (FormGroup/Label/Message/InputGroup).

## Commands

```bash
pnpm vitest run                                   # all
pnpm vitest run packages/primitives               # one package
pnpm vitest run packages/primitives/src/button/button.test.tsx
pnpm vitest run -t "axe"                           # a11y only
pnpm vitest run --coverage
```

## Definition of done

- [ ] Co-located `<comp>.test.tsx`.
- [ ] Render + displayName + data-slot + className + ref + variant(`it.each`) + a11y audit.
- [ ] Interactive/form-specific cases added where relevant.
- [ ] No class-string/internal-state assertions.
- [ ] `pnpm vitest run packages/<pkg>` green.
