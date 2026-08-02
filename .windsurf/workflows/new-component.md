---
description: Scaffold and implement a new Ninna UI component to the canonical standard
---

Follow the `ninna-component-authoring` skill at `.claude/skills/ninna-component-authoring/SKILL.md`. Summary:

1. Read `.claude/skills/ninna-component-authoring/SKILL.md` and `docs/standards/COMPONENT_STANDARD.md`.
2. Pick the correct package (`packages/<pkg>/src`) using the package table in the skill.
3. Copy the stubs from `.claude/skills/ninna-component-authoring/templates/component/` into `packages/<pkg>/src/<kebab-name>/` and rename files + `MyThing` to the real name.
4. Implement: `forwardRef` + `displayName`, spread `...props`, forward `ref`, `data-slot` on root/sub-parts, `cn(variants(...), className)`.
5. Put ALL styling in `.styles.ts` via `cva` using semantic tokens only (no hardcoded colors). Use `compoundVariants` for color×variant.
6. Types extend the right DOM attrs and reuse `Color`/`Size` from `@ninna-ui/core`; JSDoc every prop.
7. Barrel exports component+types only. Add one alphabetical line to `packages/<pkg>/src/index.ts`.
8. Write the co-located test (see `/audit-a11y` and the `ninna-component-testing` skill).
   // turbo
9. Verify: `pnpm --filter @ninna-ui/<pkg> test`, then `pnpm typecheck` and `pnpm build`.
