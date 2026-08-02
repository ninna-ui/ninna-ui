---
name: ninna-component-authoring
description: Use when creating, editing, or refactoring a component inside the Ninna UI package monorepo (packages/*/src). Encodes the canonical 4-file pattern, cva variant matrix, data-slot API, forwardRef/displayName conventions, barrel/export wiring, and how to choose the correct package. Apply this whenever a new primitive, form control, overlay, layout, navigation, feedback, or data-display component is added so it matches the library's framework-quality standard.
---

# Ninna UI — Component Authoring

You are building components for **Ninna UI**, a tree-shakeable React component library (Tailwind CSS v4, zero-runtime theming via CSS variables, Radix-powered accessibility). Every component MUST be production-grade: typed, accessible, themeable through semantic tokens, and tree-shakeable.

Authoritative source of truth in this repo: `docs/standards/COMPONENT_STANDARD.md`. This skill is the operational summary — when in doubt, open that file.

## When to use this skill

- Adding a brand-new component to any package under `packages/*/src/`.
- Refactoring an existing component to match the standard.
- Reviewing a PR that adds/changes a component.

## Step 1 — Pick the correct package

Each component is exported from **exactly one** package. Place it where it belongs:

| Package                  | What goes here                                                                                      |
| ------------------------ | --------------------------------------------------------------------------------------------------- |
| `@ninna-ui/primitives`   | Buttons, badges, avatar, text, heading, link, code, list, kbd, divider, mark                        |
| `@ninna-ui/forms`        | Input, Select, Checkbox, Radio, Switch, Slider, Textarea, Field, NumberInput, PinInput, FileUpload  |
| `@ninna-ui/layout`       | Box, Stack, HStack, VStack, Flex, Grid, SimpleGrid, Container, Center, Wrap, AspectRatio, Separator |
| `@ninna-ui/overlays`     | Modal, Drawer, Popover, Tooltip, DropdownMenu (Radix-backed)                                        |
| `@ninna-ui/navigation`   | Accordion, Breadcrumbs, Pagination, Stepper, Tabs                                                   |
| `@ninna-ui/data-display` | Card, Table, DataTable, Stat, Calendar, Timeline, Tree                                              |
| `@ninna-ui/feedback`     | Alert, Progress, Skeleton, Loading, Status, EmptyState, toast/Toaster                               |
| `@ninna-ui/code-block`   | CodeBlock                                                                                           |

Never place app-facing components in `@ninna-ui/react-internal` or `@ninna-ui/utils` (internal only).

## Step 2 — Create the canonical 4-file pattern

Folder is `kebab-case`. For a component `MyThing` in `packages/<pkg>/src/my-thing/`:

```
my-thing/
├── index.ts              # Barrel: component + types ONLY (never styles)
├── my-thing.tsx          # Implementation (forwardRef + displayName)
├── my-thing.types.ts     # Props interface with JSDoc on every prop
├── my-thing.styles.ts    # ALL styling via cva (base, sizes, colors, variants)
└── my-thing.test.tsx     # Co-located vitest + RTL + axe test
```

Copy the stubs in `templates/component/` of this skill and rename. Exceptions exist (e.g. `box/` has no styles, `toast/` has extra files) — only deviate with a documented reason.

## Step 3 — Implementation rules (`my-thing.tsx`)

Required for every exported component:

- `import { forwardRef } from 'react';`
- `import { cn } from '@ninna-ui/utils';`
- Spread `...props` onto the root element; forward `ref`.
- Apply a `data-slot="my-thing"` attribute on the root (and on every internal sub-element that consumers may want to target via CSS).
- Merge classes with `cn(myThingVariants({ ... }), className)` so consumer `className` always wins.
- Set `Component.displayName = "MyThing";`
- Reflect state in data/aria attributes (e.g. `data-loading`, `aria-disabled`, `aria-busy`).

```tsx
import { forwardRef } from "react";
import { cn } from "@ninna-ui/utils";
import { myThingVariants } from "./my-thing.styles";
import type { MyThingProps } from "./my-thing.types";

export const MyThing = forwardRef<HTMLDivElement, MyThingProps>(
  (
    {
      variant = "solid",
      color = "primary",
      size = "md",
      className,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        data-slot="my-thing"
        className={cn(myThingVariants({ variant, color, size }), className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);

MyThing.displayName = "MyThing";
```

## Step 4 — Types (`my-thing.types.ts`)

- Extend the correct DOM attributes interface (e.g. `HTMLAttributes<HTMLDivElement>`, `ButtonHTMLAttributes<HTMLButtonElement>`).
- Reuse shared scale types from `@ninna-ui/core`: `Color`, `Size`, `Radius`, and variant unions. Do not redefine `'primary' | 'secondary' | ...` inline.
- JSDoc every prop — these power the docs site and editor hints.

```ts
import type { HTMLAttributes, ReactNode } from "react";
import type { Color, Size } from "@ninna-ui/core";

export interface MyThingProps extends HTMLAttributes<HTMLDivElement> {
  /** Visual style variant */
  variant?: "solid" | "soft" | "outline";
  /** Color theme */
  color?: Color;
  /** Size of the component */
  size?: Size;
  /** Content */
  children?: ReactNode;
}
```

## Step 5 — Styles (`my-thing.styles.ts`)

- ALL styling lives here via `cva` from `class-variance-authority`.
- Use **semantic tokens only**: `bg-primary`, `text-primary-content`, `bg-base-100`, `border-base-200`, `text-base-content`, `ring-primary`. Never hardcode hex or Tailwind palette colors (`bg-blue-500`). This is what keeps zero-runtime theming working across all 5 presets.
- Express color × variant combinations with `compoundVariants`, not by branching in TSX.
- Include focus-visible ring + disabled styling in the base string.

```ts
import { cva, type VariantProps } from "class-variance-authority";

export const myThingVariants = cva(
  "inline-flex items-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:opacity-50",
  {
    variants: {
      variant: { solid: "", soft: "", outline: "" },
      color: { primary: "", neutral: "" },
      size: {
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4 text-sm",
        lg: "h-11 px-5 text-base",
      },
    },
    compoundVariants: [
      {
        variant: "solid",
        color: "primary",
        class: "bg-primary text-primary-content hover:bg-primary/90",
      },
      {
        variant: "soft",
        color: "primary",
        class: "bg-primary/10 text-primary hover:bg-primary/20",
      },
      {
        variant: "outline",
        color: "primary",
        class: "border border-primary text-primary hover:bg-primary/10",
      },
    ],
    defaultVariants: { variant: "solid", color: "primary", size: "md" },
  },
);

export type MyThingVariantProps = VariantProps<typeof myThingVariants>;
```

## Step 6 — Compound components

For multi-part components (Card, Modal, Tabs) use `Object.assign`, and give each part its own `displayName` and `data-slot`:

```ts
const CardRoot = forwardRef<HTMLDivElement, CardProps>(/* ... */);
CardRoot.displayName = "Card";
const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(/* ... */);
CardHeader.displayName = "Card.Header";

export const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
});
```

Consumer usage: `<Card.Header>`. For accessible interactive overlays, build on Radix via `@ninna-ui/react-internal` (see the `ninna-accessibility-patterns` skill).

## Step 7 — Barrels & exports

Component barrel (`my-thing/index.ts`) exports component + types ONLY — never styles, never `export *`:

```ts
export { MyThing } from "./my-thing";
export type { MyThingProps } from "./my-thing.types";
```

Package barrel (`packages/<pkg>/src/index.ts`) — add one line, keep alphabetical with neighbors:

```ts
export { MyThing, type MyThingProps } from "./my-thing";
```

## Step 8 — Test, build, verify

- Write `my-thing.test.tsx` (see `ninna-component-testing` skill): render, every variant/color/size via `it.each`, `data-slot` presence, `displayName`, disabled/loading states, and a `vitest-axe` no-violations check.
- Run from repo root: `pnpm --filter @ninna-ui/<pkg> test` and `pnpm typecheck` and `pnpm build`.
- If the component is public, it will be picked up by the docs site's generator — keep the import map in `AGENTS.md` accurate.

## Definition of done (checklist)

- [ ] In the correct package; 4-file pattern; kebab folder, PascalCase component.
- [ ] `forwardRef` + `displayName` + spread `...props` + forwarded `ref`.
- [ ] `data-slot` on root and meaningful sub-parts.
- [ ] `cn(variants(...), className)` so consumer className wins.
- [ ] Styling only via `cva` + semantic tokens (no hardcoded colors).
- [ ] Shared scale types imported from `@ninna-ui/core`; every prop JSDoc'd.
- [ ] Barrel exports component+types only; package index updated.
- [ ] Tests cover variants + a11y; `pnpm typecheck`/`test`/`build` pass.

## Common mistakes to avoid

- Putting overlays in `primitives` (they belong in `@ninna-ui/overlays`).
- Hardcoding colors instead of semantic tokens (breaks theming).
- Branching styles in TSX instead of `compoundVariants`.
- Exporting styles from a barrel, or using `export *`.
- Forgetting `data-slot` (breaks the CSS customization API consumers rely on).
- Redefining `Color`/`Size` unions locally instead of importing from `@ninna-ui/core`.
- Adding `tailwind.config.ts` — there is none; Tailwind v4 is configured via CSS imports.
