---
description: Audit a Ninna UI component for WCAG 2.1 AA accessibility compliance
---

Follow the `ninna-accessibility-patterns` skill at `.claude/skills/ninna-accessibility-patterns/SKILL.md`. Summary:

1. Read `.claude/skills/ninna-accessibility-patterns/SKILL.md` and `docs/standards/ACCESSIBILITY.md`.
2. Identify the component file(s) under review.
3. Check universal rules: `forwardRef`, `className` support, semantic HTML (no `div`+role).
4. Check interactive states: `focus-visible` ring; disabled (`disabled` + `aria-disabled`); loading (`aria-busy` + `data-loading` + hidden spinner); invalid (`aria-invalid`); labels (`aria-label`/`aria-labelledby`); descriptions (`aria-describedby`); keyboard (Arrows/Escape/Enter/Space).
5. For complex widgets, confirm it builds on Radix via `@ninna-ui/react-internal`, no Radix types leak, and app code never imports react-internal.
6. Ensure no color-only meaning; `*-content` token pairs used for contrast.
7. Add/confirm a `@sa11y/vitest` audit: `await expect(container).toBeAccessible()` plus keyboard interaction tests.
   // turbo
8. Run the a11y tests: `pnpm vitest run -t "axe"` (or the specific test file).
9. Produce a Pass/Needs-work report using the skill's audit checklist with file:line references.
