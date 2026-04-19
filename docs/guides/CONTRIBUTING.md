# Contributing to Ninna UI

> **Everything you need to contribute to the Ninna UI monorepo** - from your first PR to publishing packages on npm. Fork, build, add components, ship.
>
> **Version:** 0.6.0 · **Last Updated:** April 2026

---

## Getting Started

```bash
# 1. Fork & clone
git clone https://github.com/YOUR_USERNAME/ninna-ui.git
cd ninna-ui

# 2. Install (requires pnpm 9+ and Node 20+)
pnpm install

# 3. Build all packages
pnpm build

# 4. Create a branch
git checkout -b feature/your-feature
```

## Publishing

### Automated Release Workflow

We have a fully automated release system using GitHub Actions and Changesets:

#### 1. Create Changeset (Required for PR)

**🚨 MANDATORY**: Any PR that modifies public packages **must** include a changeset file.

```bash
pnpm changeset
```

**Important:** When prompted for packages, **exclude private packages**:

**Public Packages (✓ include):**
- @ninna-ui/core
- @ninna-ui/utils
- @ninna-ui/react-internal
- @ninna-ui/primitives  
- @ninna-ui/cli
- @ninna-ui/code-block
- @ninna-ui/data-display
- @ninna-ui/feedback
- @ninna-ui/forms
- @ninna-ui/layout
- @ninna-ui/navigation
- @ninna-ui/overlays

**Private Packages (❌ exclude):**
- @ninna-ui/eslint-config
- @ninna-ui/test-config
- @ninna-ui/tsconfig

**What happens if you skip changeset?**
- ❌ CI will **automatically fail** with "Public package changed but no changeset found"
- ❌ PR **cannot be merged** until changeset is added
- ❌ Release process will be blocked

**Exceptions (no changeset needed):**
- Only private packages modified
- Only documentation changes
- Only test files updated
- Only README/MD files updated

#### 2. Automated Process

**When you create a PR:**
- **CI Workflow** validates:
  - Build, lint, test, typecheck pass
  - Changeset exists if public packages changed
  - Package exports are valid

**When PR is merged to main:**
- **Release Workflow** automatically:
  - Creates a "Version Packages" PR
  - Updates all package versions
  - Updates internal dependencies (`workspace:*` → `^0.6.0`)

**When Version PR is merged:**
- **Release Workflow** automatically:
  - Builds all packages
  - Publishes to npm
  - Creates GitHub release
  - Updates CHANGELOG.md

#### 3. Version Types

Choose based on your changes:
- **minor**: New features, initial releases
- **patch**: Bug fixes
- **major**: Breaking changes

#### 4. Required Permissions

- **NPM_TOKEN**: Configured in repository secrets
- **Repository access**: For maintainers only
- **Final approval**: Version PR merge requires maintainer approval

### Important: Private Packages

Private packages are automatically excluded from publishing:
- Only used in development (`devDependencies`)
- Not published to npm (`private: true`)
- Internal workspace tools
- npm automatically excludes `devDependencies` from published packages

### Troubleshooting

#### CI Fails - No Changeset
If CI fails with "Public package changed but no changeset found":
```bash
pnpm changeset  # Create changeset for your changes
git add .changeset/*.md
git commit -m "chore: add changeset"
git push
```

#### Release Fails
Check that:
- All packages build: `pnpm build`
- All tests pass: `pnpm vitest run`
- NPM_TOKEN is configured in repository secrets

## Development Workflow

```bash
pnpm install                       # Install dependencies
pnpm build                         # Build all packages (turbo)
pnpm dev                           # Start all dev watchers
pnpm typecheck                     # Type check all packages (tsc --noEmit)
pnpm vitest run                    # Run all tests
pnpm vitest run --coverage         # Run tests with coverage

# Run specific apps
pnpm --filter @ninna-ui/playground dev   # Developer sandbox SPA (port 3000)
pnpm --filter @ninna-ui/docs dev         # Storybook (port 6006)
```

---

## Reference Documents

| Document | Purpose |
|----------|---------|
| [architecture/ARCHITECTURE.md](../architecture/ARCHITECTURE.md) | System mental model, package graph, theme system |
| [standards/COMPONENT_STANDARD.md](../standards/COMPONENT_STANDARD.md) | File structure, naming, props, accessibility rules |
| [standards/TESTING_STRATEGY.md](../standards/TESTING_STRATEGY.md) | What to test, what not to test, test placement |
| [brand/PRODUCT_BRAND.md](../brand/PRODUCT_BRAND.md) | Target audience, differentiation, positioning |
| [DEVELOPMENT_RULES.md](./DEVELOPMENT_RULES.md) | Development rules (naming, styles, Radix, git) |

---

## Package Boundaries

Every package has strict dependency rules. See [architecture/ARCHITECTURE.md](../architecture/ARCHITECTURE.md) for the full dependency graph.

| Package | Can Import From | MUST NOT Import |
|---------|-----------------|-----------------|
| `core` | Nothing | React, JSX, Radix |
| `utils` | `clsx`, `tailwind-merge` | React (peer only), core |
| `react-internal` | `core`, `utils`, Radix | Never published to npm |
| `primitives` | `core`, `utils` | Radix, react-internal |
| `feedback` | `core`, `utils` | Radix, react-internal, primitives |
| `layout` | `core`, `utils` | Radix, react-internal |
| `forms` | `core`, `utils`, `react-internal` | Radix directly |
| `overlays` | `core`, `utils`, `react-internal` | Radix directly |
| `navigation` | `core`, `utils`, `react-internal` | Radix directly |
| `data-display` | `core`, `utils` | Radix, react-internal |
| `code-block` | `core`, `utils` | Radix, react-internal |

**Key rule:** No `@radix-ui/*` imports anywhere except `packages/react-internal/src/engines/`. Components that need Radix use engine wrappers from `react-internal`.

---

## Adding a New Component

### Step 1: Create the component folder

```
packages/<package>/src/component-name/
├── index.ts                    # Barrel: component + types only (NO styles)
├── component-name.tsx          # Implementation (forwardRef + displayName)
├── component-name.types.ts     # Props interface with JSDoc
├── component-name.styles.ts    # ALL styles: base, sizes, colors, variants
└── component-name.test.tsx     # Co-located test file
```

### Step 2: Implementation checklist

- [ ] Uses `forwardRef` with `displayName`
- [ ] Accepts and applies `className` prop (via `cn()` from `@ninna-ui/utils`)
- [ ] Has `data-slot` attribute on root and meaningful sub-elements
- [ ] Supports `data-disabled`, `data-loading`, `data-invalid` where applicable
- [ ] Has `focus-visible` ring styles for keyboard users
- [ ] Has proper ARIA attributes (`aria-label`, `aria-describedby`, etc.)
- [ ] Has keyboard navigation where applicable
- [ ] Uses design tokens from `@ninna-ui/core` (no hardcoded colors like `text-red-500`)
- [ ] No `dark:` prefixes - CSS variables handle dark mode
- [ ] No `'use client'` directive
- [ ] Props documented with JSDoc
- [ ] Default values set in destructuring

### Step 3: Export from package index

```typescript
// packages/<package>/src/index.ts
export { MyComponent } from './my-component';
export type { MyComponentProps } from './my-component';
```

### Step 4: Add tests

See [standards/TESTING_STRATEGY.md](../standards/TESTING_STRATEGY.md) for what must be tested.

```typescript
// my-component.test.tsx
import { render, screen } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { MyComponent } from './my-component';

describe('MyComponent', () => {
  it('renders', () => {
    render(<MyComponent>Content</MyComponent>);
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('has correct data-slot', () => {
    render(<MyComponent>Content</MyComponent>);
    expect(screen.getByText('Content').closest('[data-slot]'))
      .toHaveAttribute('data-slot', 'my-component');
  });

  it('has correct displayName', () => {
    expect(MyComponent.displayName).toBe('MyComponent');
  });

  it('passes axe audit', async () => {
    const { container } = render(<MyComponent>Content</MyComponent>);
    expect(await axe(container)).toHaveNoViolations();
  });
});
```

### Step 5: Add Storybook story

```typescript
// apps/docs/src/stories/<category>/MyComponent.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { MyComponent } from '@ninna-ui/<package>';

const meta: Meta<typeof MyComponent> = {
  title: '<Category>/MyComponent',
  component: MyComponent,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['solid', 'soft', 'outline'] },
    color: { control: 'select', options: ['primary', 'secondary', 'accent', 'neutral', 'success', 'danger', 'warning', 'info'] },
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { children: 'Example' } };
```

### Step 6: Add playground view

Create a view file in `apps/playground/app/views/<category>/` with ComponentHeader, Usage, Examples, PropsTable, and Accessibility sections.

### Step 7: Verify

```bash
pnpm build          # Must pass
pnpm typecheck      # Must pass with zero errors
pnpm vitest run     # Must pass
```

---

## Pull Request Process

1. Ensure your code follows the existing style (see [DEVELOPMENT_RULES.md](./DEVELOPMENT_RULES.md))
2. **PR title must follow conventional commit format** (automatically enforced):
   - `feat: add Button component`
   - `fix: correct checkbox focus ring`
   - `docs: update installation guide`
   - `refactor: merge class-maps into styles`
   - `chore: update dependencies`
   - `perf: optimize re-renders`
   - `test: add alert accessibility tests`
3. Add a changeset: `pnpm changeset`
4. Update documentation (Storybook story + playground view)
5. Ensure `pnpm build`, `pnpm typecheck`, and `pnpm vitest run` pass with zero errors
6. Open PR with clear description

> **Note:** CI will automatically fail if your PR title doesn't follow the format above. The check runs on PR open, edit, and synchronize.

## Changeset Guidelines

- **patch** - Bug fixes, documentation updates
- **minor** - New features, new components
- **major** - Breaking changes (prop renames, removed exports, type changes)

## Code Style

- TypeScript strict mode - no `any` in public APIs
- Semantic tokens only - no hardcoded Tailwind palette colors (`text-gray-500`)
- Tailwind CSS utility classes only - no CSS-in-JS, no inline styles (except oklch values in CSS presets)
- Import order: `react` → `@ninna-ui/*` → local `./`
- `cn()` from `@ninna-ui/utils` exclusively - no local utility
- Named exports only - no default exports
- `satisfies Record<Size, string>` on size/color maps for type safety

## Git Commit Format

```
FORMAT: <type>(<scope>): <description>

TYPES: feat, fix, docs, style, refactor, test, chore

EXAMPLES:
  feat(primitives): add Button component
  fix(forms): correct checkbox focus ring
  refactor(layout): merge class-maps into styles
  test(feedback): add alert accessibility tests
  docs(architecture): update dependency graph
```

## Documentation Website

The public documentation website lives in a **separate standalone repository**: `ninna-ui-web`.
It is NOT part of this pnpm workspace.

- Website: **[ninna-ui.dev](https://ninna-ui.dev)**
- GitHub: [github.com/ninna-ui/ninna-ui](https://github.com/ninna-ui/ninna-ui)
- npm: [npmjs.com/org/ninna-ui](https://www.npmjs.com/org/ninna-ui)

To update component documentation on the website, edit the corresponding view file in `ninna-ui-web/app/views/`.

---

## Questions?

Open an issue or start a discussion at [github.com/ninna-ui/ninna-ui](https://github.com/ninna-ui/ninna-ui)!
