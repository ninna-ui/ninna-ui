# 22 — Toolchain version alignment (pnpm, vite, tailwind)

Status: TODO
Phase: 1 · Priority: Medium · Size: S

## Context

The monorepo and the docs-site repo have drifted toolchains:

| Tool | `ninna-ui` (monorepo) | `ninna-ui-web` |
|------|----------------------|----------------|
| pnpm (`packageManager`) | `pnpm@9.15.4` | `pnpm@10.28.2` |
| vite | `^8.0.5` (root devDep) | `^7.3.2` |
| tailwindcss | (per-package) | `^4.2.2` |

Memory of past work indicates the monorepo intentionally pins some things, but the pnpm
major-version split causes contributors to hit lockfile-format mismatches when switching
between repos.

## Constraints

- **Conservative**: do not perform major upgrades blindly. Each bump must build + test green.
- If an alignment is intentionally impossible (e.g. vite 8 needed by vitest 4 in the
  monorepo but react-router pins vite 7 in web), DOCUMENT the reason instead of forcing it.

## Files to touch

- `package.json` (monorepo root) — `packageManager` field
- `d:\projects\ninna-ui\ninna-ui-web\package.json` — possibly nothing
- `docs/guides/CONTRIBUTING.md` — toolchain note
- `.github/workflows/*.yml` — any hardcoded pnpm versions (inspect first)

## Steps

1. Decide target pnpm: latest 10.x (matches web). Update monorepo root
   `"packageManager": "pnpm@10.x.y"` and `engines.pnpm` to `>=10.0.0`.
2. Grep `.github/workflows/` for `pnpm` version pins (`version:` under
   `pnpm/action-setup` or similar) and align them.
3. Run a full install + build + test in the monorepo with the new pnpm. If lockfile
   churn is excessive or failures appear, REVERT and instead document the split in
   `CONTRIBUTING.md` ("monorepo uses pnpm 9, web uses pnpm 10 — use corepack").
4. Check vite versions: monorepo root vite is only a devDep for vitest. Confirm
   `pnpm why vite` rationale; do not change unless mismatch causes an actual issue.
5. Add a short "Toolchain" section to `docs/guides/CONTRIBUTING.md`: required node,
   pnpm (corepack enable), and the reason for any remaining version splits.

## Acceptance criteria

- [ ] Either: both repos on the same pnpm major, or the split is documented with rationale.
- [ ] CI workflows use the same pnpm version as `packageManager`.
- [ ] Full monorepo build/test/lint green after any change.

## Verification

```bash
pnpm install
pnpm build && pnpm test && pnpm lint
# and in d:\projects\ninna-ui\ninna-ui-web:
pnpm install && pnpm build && pnpm typecheck && pnpm lint
```

## Sync checklist

- N/A.
