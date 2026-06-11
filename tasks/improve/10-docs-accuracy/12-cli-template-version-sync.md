# 12 — CLI template version sync + drift guard

Status: DONE
Phase: 1 · Priority: High · Size: S

## Context

All publishable packages are at **0.6.0**, but the four CLI starter templates are pinned
at **0.5.0**:

- `packages/cli/templates/vite-react/package.json` → `"version": "0.5.0"`
- `packages/cli/templates/nextjs/package.json` → `"version": "0.5.0"`
- `packages/cli/templates/react-router/package.json` → `"version": "0.5.0"`
- `packages/cli/templates/astro/package.json` → `"version": "0.5.0"`

Also verify the `@ninna-ui/*` dependency versions inside each template's
`package.json` reference the current published versions (or `latest`).

This drift recurs on every release because nothing enforces it.

## Constraints

- Do not change template behavior — version fields and dependency pins only.
- Keep the CLI's `workspace:*` → `latest` swap logic intact (see `packages/cli/src/`).

## Files to touch

- `packages/cli/templates/*/package.json` (4 files)
- `scripts/check-template-versions.js` (NEW — drift guard)
- `package.json` (root — add `check-template-versions` script)
- `.github/workflows/release.yml` (add the check; inspect file first to find the right job)

## Steps

1. Bump each template's `"version"` field to match `packages/cli/package.json` version (0.6.0).
2. In each template, audit `dependencies` for `@ninna-ui/*` entries — pin to the current
   published version or `latest`, matching the existing convention used by the CLI swap logic.
3. Create `scripts/check-template-versions.js`:
   - Reads `packages/cli/package.json` version.
   - Reads each `packages/cli/templates/*/package.json` version.
   - Exits non-zero with a clear message if any template version differs.
   - Style-match the existing `scripts/check-pack.js` / `scripts/check-internal-deps.js`.
4. Add root script: `"check-template-versions": "node scripts/check-template-versions.js"`.
5. Wire the script into the release workflow (same place the safelist `git diff` check runs).

## Acceptance criteria

- [x] All 4 templates report version 0.6.0.
- [x] `node scripts/check-template-versions.js` exits 0 now, exits 1 if a template is stale.
- [x] Release workflow runs the check.

## Verification

```bash
node scripts/check-template-versions.js
pnpm --filter @ninna-ui/cli build
pnpm --filter @ninna-ui/cli test
```

## Sync checklist

- N/A (no component changes). Mention the new check in `docs/guides/PUBLISHING.md`
  release checklist if one exists there.
