# Ninna UI Product & Brand

> **Product identity, competitive positioning, and brand guidelines** - defines what Ninna UI is, who it's for, and how it stands apart from shadcn/ui, Chakra UI, Mantine, and DaisyUI.
>
> **Version:** 1.0.0 · **Last Updated:** February 2026

---

## 1. Product Identity

### What Is Ninna UI?

Ninna UI is a **full React UI library with zero runtime styling and native Tailwind CSS v4 support**. It combines the component quality and accessibility of shadcn/Chakra UI/Mantine with the theming simplicity of DaisyUI - shipping 69+ production-ready, accessible components across 12 packages, with 5 built-in theme presets, oklch perceptual colors, and zero JavaScript theming overhead.

### One-Line Pitch

> Full React UI library with zero runtime styling and native Tailwind support - one CSS import, instant design system.

### Tagline Options

- "Component quality meets theming simplicity."
- "Chakra-level quality. DaisyUI-simple theming. Zero runtime overhead."
- "The React component library that themes like DaisyUI and builds like shadcn."

---

## 2. Target Audience

### Primary: Solo developers & small teams (1-5 devs)

- Building SaaS dashboards, internal tools, marketing sites
- Want production-ready components without building from scratch
- Don't want to spend days configuring a design system
- Value: "I import one CSS file and everything looks good"

### Secondary: Design system teams at mid-size companies

- Need a foundation to build a branded design system on top of
- Value the token architecture and theme preset system
- Want to customize colors without touching component code

### Anti-Audience (NOT for)

- Teams that need CSS-in-JS (styled-components, Emotion)
- Projects that can't use Tailwind CSS
- React Native projects
- Teams that need IE11 support

---

## 3. Competitive Positioning

### Comparison Matrix

| Feature | Ninna-UI | shadcn/ui | Chakra UI | Mantine | DaisyUI |
|---------|----------|-----------|-----------|---------|---------|
| **Install model** | npm package | Copy-paste | npm package | npm package | npm package |
| **Theming** | 1 CSS import | Manual | JS theme object | JS theme object | 1 CSS import |
| **Dark mode** | CSS variables (auto) | Manual class | ColorModeProvider | ColorSchemeProvider | CSS variables (auto) |
| **Accessibility** | Radix-powered | Radix-powered | Built-in | Built-in | None |
| **Component count** | 69+ | ~40 | ~60 | ~100 | ~50 (CSS only) |
| **Tailwind** | v4.1 native | v3/v4 | No | No | v3/v4 |
| **Bundle** | Tree-shakeable | Zero bundle | Full runtime | Full runtime | CSS only |
| **React version** | 19+ | 18+ | 18+ | 18+ | Any (CSS) |

### Key Differentiators

1. **DaisyUI-level theming simplicity** - One `@import` line. No ThemeProvider, no JS config, no context wrappers. Change themes by swapping one CSS import.

2. **shadcn-level component quality** - Every component has `forwardRef`, `displayName`, `data-slot`, `cn()`, ARIA attributes, keyboard navigation. Not CSS-only like DaisyUI.

3. **Radix without Radix** - Complex components (Select, Modal, Tabs, Accordion) use Radix internally via engine wrappers, but consumers never see or import Radix. No Radix types leak into your code.

4. **Tailwind CSS v4.1 native** - CSS-first configuration. No `tailwind.config.ts`. Uses `@theme inline` and CSS custom properties. Works with `@tailwindcss/vite` and `@tailwindcss/postcss`.

5. **oklch color system** - All theme colors use oklch for perceptually uniform color spaces. WCAG AA contrast guaranteed between semantic colors and their `-content` counterparts.

---

## 4. Brand Identity

### Name

**ninna-ui** (lowercase in text, `@ninna-ui` as npm scope)

### Logo

- Monochrome rounded square with "N" letterform
- Uses `fill-base-content` / `fill-base-100` - adapts to any theme automatically
- Inline SVG (not img tag) - inherits theme colors
- Favicon: Black `#111` square with white N

### Typography

- Logo text: `"ninna"` in `text-[15px] font-semibold tracking-tight` + `"ui"` dimmed
- Documentation: System font stack (no custom fonts, no Google Fonts)

### Color

- No fixed brand color - the brand adapts to whichever theme preset is active
- Default preset: Electric purple primary (`oklch(0.49 0.31 275)`)
- The brand IS the theming system itself

### Visual Style

- **Minimalist** - shadcn/Radix aesthetic
- **Clean** - No gradients on components, no shadows by default
- **Vibrant** - High-chroma oklch colors (C=0.18-0.31)
- **Adaptive** - Everything responds to theme changes instantly

---

## 5. Package Naming & Scope

### npm Scope: `@ninna-ui`

| Package | Published | Description |
|---------|-----------|-------------|
| `@ninna-ui/core` | Yes | Types, tokens, CSS theme presets |
| `@ninna-ui/utils` | **No** | Utility functions - bundled into each package |
| `@ninna-ui/primitives` | Yes | Basic components (Button, Badge, Text, etc.) |
| `@ninna-ui/feedback` | Yes | Feedback components (Alert, Toast, Progress, etc.) |
| `@ninna-ui/layout` | Yes | Layout components (Stack, Grid, Container, etc.) |
| `@ninna-ui/forms` | Yes | Form components (Input, Checkbox, Select, etc.) |
| `@ninna-ui/overlays` | Yes | Overlay components (Modal, Drawer, Tooltip, etc.) |
| `@ninna-ui/navigation` | Yes | Navigation components (Tabs, Accordion, etc.) |
| `@ninna-ui/data-display` | Yes | Data display components (Card, Table, Calendar, etc.) |
| `@ninna-ui/code-block` | Yes | Syntax-highlighted code block |
| `@ninna-ui/cli` | Yes | Project scaffolding CLI |
| `@ninna-ui/react-internal` | **No** | Internal Radix wrappers (private) |
| `@ninna-ui/docs` | **No** | Storybook (private) |
| `@ninna-ui/playground` | **No** | React Router playground (private) |

---

## 6. Documentation Strategy

### Three Documentation Surfaces

| Surface | URL | Purpose | Audience |
|---------|-----|---------|----------|
| **Website** (`ninna-ui-web`) | `https://ninna-ui.dev` | Public documentation, SEO-optimized, full component reference | End users installing and using Ninna UI |
| **Storybook** (`apps/docs`) | local `:6006` | Component API reference, interactive props playground, variant showcase | Developers exploring the API |
| **Playground** (`apps/playground`) | local `:3000` | Internal developer sandbox - live component preview for contributors | Library contributors and maintainers |

### Website / Playground Structure

9 categories in sidebar:
1. **Getting Started** - Introduction, Installation
2. **Primitives** - Button, Badge, Avatar, Text, Heading, etc.
3. **Feedback** - Alert, Toast, Progress, Loading, etc.
4. **Forms** - Input, Checkbox, Select, RadioGroup, etc.
5. **Layout** - Stack, Grid, Container, Flex, etc.
6. **Navigation** - Tabs, Accordion, Breadcrumbs, etc.
7. **Overlays** - Modal, Drawer, Tooltip, Popover, etc.
8. **Data Display** - Card, Table, Calendar, Timeline, etc.
9. **Code Block** - CodeBlock component

Each component view has:
- **ComponentHeader** - Name, description, import path
- **Usage** - Basic usage with code example
- **Examples** - Variants, sizes, colors, states
- **API Reference** - PropsTable with all props
- **Accessibility** - ARIA attributes, keyboard navigation

### Mandatory Documentation Sections (per component)

| Section | Required | Content |
|---------|----------|---------|
| **Purpose** | Yes | What the component does and when to use it |
| **API** | Yes | Props table with types, defaults, descriptions |
| **Usage** | Yes | Basic code example with import |
| **Accessibility** | Yes | ARIA roles, keyboard navigation, screen reader behavior |
| **Do / Don't** | Recommended | Common mistakes and best practices |
| **Design Intent** | Recommended | Why the component exists, what problem it solves |

---

## 7. Versioning & Release

### Semantic Versioning

- All packages share the same version number
- Managed via [Changesets](https://github.com/changesets/changesets)
- `pnpm changeset` to create a changeset
- `pnpm changeset version` to bump versions
- `pnpm changeset publish` to publish

### Version Policy

| Change Type | Version Bump | Example |
|-------------|-------------|---------|
| Bug fix | patch | Fix checkbox focus ring color |
| New component | minor | Add DatePicker component |
| New prop on existing component | minor | Add `truncate` prop to Text |
| Prop rename | major | Rename `full` to `fullWidth` |
| Removed export | major | Remove deprecated `Spinner` |
| Theme variable rename | major | Rename `--color-error` to `--color-danger` |

---

## 8. Quality Standards

### Build Requirements

- `pnpm build` - All packages build successfully (ESM + DTS)
- `pnpm typecheck` - Zero TypeScript errors (`tsc --noEmit`)
- `pnpm vitest run` - All tests pass
- Zero `dark:` prefixes in component styles
- Zero `'use client'` directives in library code
- Zero `@radix-ui/*` imports outside `react-internal`
- Zero hardcoded Tailwind palette colors in component styles

### Peer Dependencies

All component packages require:
```json
{
  "react": ">=19.0.0",
  "react-dom": ">=19.0.0"
}
```

### Browser Support

- https://tailwindcss.com/docs/compatibility#browser-support

### Accessibility Target

- WCAG 2.1 AA compliance
- All interactive components keyboard-navigable
- All form components have proper ARIA attributes
- Color contrast ratios meet AA minimums (4.5:1 normal text, 3:1 large text)
- Screen reader tested (VoiceOver, NVDA)
