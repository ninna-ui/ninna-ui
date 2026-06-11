# 21 — ninna-ui-web: remove committed debug artifacts

Status: TODO
Phase: 1 · Priority: High · Size: XS

## Context

The `ninna-ui-web` repo root contains committed debug/log artifacts that should never
be in version control:

- `build.log` (24 KB)
- `lint_output.txt` (7 KB)
- `type-errors.log`
- `type-errors2.log`

## Constraints

- Delete only these four files. Do not touch `build/`, `node_modules/`, or other folders.
- No git commits — just delete and update `.gitignore` in the working tree.

## Files to touch

- `d:\projects\ninna-ui\ninna-ui-web\build.log` (DELETE)
- `d:\projects\ninna-ui\ninna-ui-web\lint_output.txt` (DELETE)
- `d:\projects\ninna-ui\ninna-ui-web\type-errors.log` (DELETE)
- `d:\projects\ninna-ui\ninna-ui-web\type-errors2.log` (DELETE)
- `d:\projects\ninna-ui\ninna-ui-web\.gitignore` (EDIT)

## Steps

1. Delete the four files.
2. Append a "Local debug artifacts" block to `.gitignore`:
   ```
   # Local debug artifacts
   *.log
   lint_output.txt
   type-errors*.log
   ```
   First check `.gitignore` for an existing `*.log` rule to avoid duplication; note that
   `*.log` may already cover `build.log` — keep the block minimal accordingly.
3. Confirm nothing in `app/` or `scripts/` reads these files
   (`Select-String -Path app, scripts -Pattern "build.log|lint_output|type-errors" -Recurse`).

## Acceptance criteria

- [ ] Four artifact files removed from the working tree.
- [ ] `.gitignore` prevents recurrence.
- [ ] No source references the deleted files.

## Verification

```bash
# from d:\projects\ninna-ui\ninna-ui-web
pnpm typecheck && pnpm lint && pnpm build
```

## Sync checklist

- N/A.
