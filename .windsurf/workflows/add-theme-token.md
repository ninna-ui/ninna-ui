---
description: Add or edit a Ninna UI theme token or preset (oklch, zero-runtime)
---

Follow the `ninna-theming-tokens` skill at `.claude/skills/ninna-theming-tokens/SKILL.md`. Summary:

1. Read `.claude/skills/ninna-theming-tokens/SKILL.md`.
2. To add a token: declare it in every preset under `packages/core/src/theme/presets/*.css` (light block, `.dark` block, AND the `@media (prefers-color-scheme: dark)` block — keep dark values in sync), then bridge it to a Tailwind utility in `packages/core/src/theme/tailwind.css` under `@theme inline`.
3. To add a preset: copy `presets/default.css` to `<name>.css`, keep `@import "../tailwind.css";`, and define all tokens in the three blocks.
4. Use oklch for every color: `oklch(L C H)`. Provide a `-content` pair for each semantic color and verify ≥ 4.5:1 contrast in light and dark.
5. Never introduce a `tailwind.config.ts`. Never hardcode colors in component code — only semantic tokens.
   // turbo
6. Verify: `pnpm build` (core) and visually check a component in light + dark.
