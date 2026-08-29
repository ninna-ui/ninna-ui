---
name: ninna-theming-tokens
description: Use when styling Ninna UI components, adding or editing theme presets, or choosing colors. Covers the oklch semantic token system in @ninna-ui/core, the exact token names, dark-mode strategy, the data-slot CSS customization API, and the "no tailwind.config" rule. Apply whenever a className uses a color, a new preset is created, or zero-runtime theming needs to be preserved.
---

# Ninna UI — Theming & Tokens

Ninna UI does **zero-runtime theming**: there is no JS theme provider and no `tailwind.config.ts`. Themes are pure CSS custom properties in oklch, exposed to Tailwind v4 via `@theme inline`.

Source of truth: `packages/core/src/theme/tailwind.css` (token → utility bridge) and `packages/core/src/theme/presets/*.css` (the 5 presets: default, forest, minimal, ocean, sunset).

## When to use this skill

- Writing any `className` that includes color, background, border, or ring.
- Creating or editing a theme preset.
- Auditing a component/block for hardcoded colors.
- Explaining Ninna UI's theming model on docs pages.

## The golden rule: semantic tokens only

**Never** hardcode hex, rgb, oklch literals, or Tailwind palette colors (`bg-blue-500`, `text-gray-700`) in component or block code. Always use the semantic tokens below. This is what lets a single CSS import retheme the entire library and keep WCAG AA contrast.

## Required consumer setup

```css
@import "tailwindcss";
@import "@ninna-ui/core/theme/presets/default.css";
@variant dark (&:is(.dark *));
```

That is the entire theme setup. There is **no** `tailwind.config.ts`.

## The exact token set (from `tailwind.css` `@theme inline`)

Each semantic color is a **pair**: the color + its `-content` (guaranteed AA-contrasting foreground).

| Token (utility form)                                         | Use for                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| `primary` / `primary-content`                                | Primary CTAs, active states                                  |
| `secondary` / `secondary-content`                            | Secondary emphasis                                           |
| `accent` / `accent-content`                                  | Accent highlights                                            |
| `neutral` / `neutral-content`                                | Neutral solid surfaces                                       |
| `success` / `success-content`                                | Positive status                                              |
| `danger` / `danger-content`                                  | Destructive/error                                            |
| `warning` / `warning-content`                                | Caution                                                      |
| `info` / `info-content`                                      | Informational                                                |
| `base-50` … `base-900`                                       | Surface scale (50 = lightest in light mode, inverts in dark) |
| `base-content`                                               | Default text on base surfaces                                |
| `border`, `border-hover`, `border-active`, `border-disabled` | Border states                                                |

Utility examples: `bg-primary text-primary-content`, `bg-base-100`, `text-base-content`, `border border-base-200`, `ring-primary`, `hover:bg-primary/90`, `bg-primary/10` (soft tints via opacity).

### Pairing rule

Whenever you set a solid background token, set its matching `-content` for the foreground:

```tsx
// correct — contrast is guaranteed across all presets and dark mode
<div className="bg-primary text-primary-content">…</div>
<div className="bg-success text-success-content">…</div>
// wrong — text color won't adapt; may fail contrast
<div className="bg-primary text-white">…</div>
```

For soft/tinted variants, use opacity on the same token: `bg-primary/10 text-primary`.

## Surfaces & elevation

- Page background: `bg-base-50`. Card/raised surface: `bg-base-100` / `bg-base-200`.
- Text hierarchy: `text-base-content` (primary), `text-base-content/70` (muted), `text-base-content/50` (subtle).
- Borders: `border-base-200` (default), `border-base-300` (stronger). Base scale **auto-inverts** in dark mode, so the same classes work in both themes — do not write `dark:` color overrides for base surfaces.

## Dark mode

Presets ship three dark paths automatically:

- Forced dark: `<html class="dark" data-theme="default">`
- Forced light: `<html class="light" data-theme="default">`
- System: omit the class — `@media (prefers-color-scheme: dark)` applies.

Because tokens flip inside the preset, component code is theme-agnostic: avoid `dark:bg-*` for semantic colors. Only reach for `dark:` when doing something a token genuinely cannot express.

## The `data-slot` CSS customization API

Every component renders `data-slot="<name>"` on its root and meaningful parts. Consumers retheme without forking source:

```css
/* App-level override targeting a Ninna slot */
[data-slot="button"] {
  border-radius: 9999px;
}
[data-slot="card"] {
  box-shadow: var(--shadow-lg);
}
```

When authoring components, add `data-slot` to every part a user might want to target (see `ninna-component-authoring`). This is a key advantage over libraries where deep customization means ejecting/copying source.

## Creating or editing a preset

1. Copy `packages/core/src/theme/presets/default.css` to `<name>.css`.
2. Keep `@import "../tailwind.css";` at the top.
3. Define all tokens under `[data-theme="<name>"]` (light), the `.dark` block, AND the `@media (prefers-color-scheme: dark)` block — the dark values MUST be duplicated in both (pure CSS has no mixins; there is a SYNC comment noting this).
4. Use **oklch** for every color: `oklch(L C H)` — L = lightness 0–1, C = chroma, H = hue. oklch gives perceptually even scales, so generating accessible steps is predictable.
5. Verify every `*-content` hits ≥ 4.5:1 against its base color in both light and dark.

## oklch quick reference

```css
--color-primary: oklch(0.49 0.31 275); /* deep electric purple */
--color-primary-content: oklch(0.9 0.06 275); /* light text on it */
/* Lighten for dark mode (raise L, often lower C slightly) */
```

## Why this approach (technical rationale)

- **No JS theme provider** in the bundle: no context re-renders, no SSR theme-flash. Theme switching = swapping a CSS attribute.
- **oklch** (perceptually uniform) for predictable lightness/chroma math across light and dark.
- **Tokens ship as a versioned package** (update via npm), not copied into the consumer repo.
- **Deep customization via `data-slot` CSS**, so consumers restyle without editing component source.

## Definition of done

- [ ] No hardcoded colors anywhere — only semantic tokens.
- [ ] Every solid background paired with its `-content` foreground.
- [ ] Base surfaces rely on auto-inverting `base-*` (no `dark:` color hacks).
- [ ] New presets define light + `.dark` + `prefers-color-scheme` blocks in sync, all oklch, all AA-contrasting.
- [ ] Components expose `data-slot` for customization.
