## Description

<!-- Briefly describe what this PR does and why. -->

## Type of Change

- [ ] `feat` — New feature or component
- [ ] `fix` — Bug fix
- [ ] `docs` — Documentation only
- [ ] `refactor` — Code change that neither fixes a bug nor adds a feature
- [ ] `perf` — Performance improvement
- [ ] `test` — Adding or updating tests
- [ ] `chore` — Build process, tooling, or dependency changes

## Related Issues

<!-- Link to related issues: Fixes #123, Closes #456 -->

## Breaking Changes

<!-- Does this PR introduce any breaking changes? If yes, describe what breaks and the migration path. -->
- [ ] No breaking changes
- [ ] Yes — described below:

## Packages Affected

<!-- Check all packages modified by this PR -->
- [ ] `@ninna-ui/core`
- [ ] `@ninna-ui/primitives`
- [ ] `@ninna-ui/feedback`
- [ ] `@ninna-ui/forms`
- [ ] `@ninna-ui/layout`
- [ ] `@ninna-ui/overlays`
- [ ] `@ninna-ui/navigation`
- [ ] `@ninna-ui/data-display`
- [ ] `@ninna-ui/code-block`
- [ ] `@ninna-ui/cli`
- [ ] `apps/playground`
- [ ] `apps/docs`
- [ ] `tooling/*`

## Checklist

- [ ] PR title follows conventional commit format (`feat:`, `fix:`, `docs:`, etc.)
- [ ] Code follows the [component standards](./docs/standards/COMPONENT_STANDARD.md)
- [ ] Tests added/updated for changes (`pnpm vitest run`)
- [ ] TypeScript compiles without errors (`pnpm typecheck`)
- [ ] ESLint passes (`pnpm lint`)
- [ ] **Changeset added for public package changes** (`pnpm changeset`) ⚠️ **REQUIRED**
- [ ] Accessibility: WCAG 2.1 AA, keyboard navigation, ARIA attributes
- [ ] `data-slot` attributes added for new components
- [ ] All 8 semantic colors supported (if applicable)
- [ ] Dark mode verified (if applicable)
- [ ] Documentation updated (if applicable)

## 🚨 Changeset Requirement

**If you modified any public packages**, you **must** create a changeset:

```bash
pnpm changeset
```

**Public Packages (require changeset):**
- `@ninna-ui/core`, `@ninna-ui/primitives`, `@ninna-ui/cli`, `@ninna-ui/code-block`
- `@ninna-ui/data-display`, `@ninna-ui/feedback`, `@ninna-ui/forms`, `@ninna-ui/layout`
- `@ninna-ui/navigation`, `@ninna-ui/overlays`

**Private Packages (no changeset needed):**
- `@ninna-ui/utils`, `@ninna-ui/react-internal`, `@ninna-ui/eslint-config`
- `@ninna-ui/test-config`, `@ninna-ui/tsconfig`

> **CI will automatically fail** if public packages are changed but no changeset is found.

## Screenshots / Videos

<!-- If applicable, add screenshots or screen recordings showing the change. -->

## Reviewer Notes

<!-- Anything specific reviewers should focus on or test? -->
