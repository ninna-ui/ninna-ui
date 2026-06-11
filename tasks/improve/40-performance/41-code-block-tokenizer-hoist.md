# 41 — CodeBlock: hoist TOKEN_REGEX to module scope

Status: TODO
Phase: 3 · Priority: Low · Size: XS

## Context

Audit correction: tokenization in `packages/code-block/src/code-block/code-block.tsx`
is ALREADY memoized via `useMemo` keyed on `[code, shouldHighlight]` (lines ~115-118) —
no change needed there.

The remaining (minor) inefficiency: `tokenizeTsx` constructs `TOKEN_REGEX` via
`new RegExp(...)` on **every invocation** (lines ~17-34). The pattern is fully static,
so it can be built once at module scope.

Caveat: the regex uses the `g` flag and is consumed via `line.matchAll(...)` inside a
loop. `String.prototype.matchAll` does not mutate `lastIndex` of its argument (it clones
internally per the spec), so hoisting is safe — but the executor must verify no other
call site uses `.exec()`/`.test()` on the shared instance.

## Constraints

- Zero behavior change: highlighted output must be byte-identical for all existing tests.
- No public API changes.

## Files to touch

- `packages/code-block/src/code-block/code-block.tsx`

## Steps

1. Move the `new RegExp([...].join("|"), "g")` expression from inside `tokenizeTsx`
   to a module-level `const TOKEN_REGEX = ...` directly above the function.
2. Grep the file for any other use of `TOKEN_REGEX` — only `matchAll` may consume it.
3. Run the code-block test suite; visually verify a story
   (`apps/docs/src/stories/primitives/CodeBlock.stories.tsx`) if convenient.

## Acceptance criteria

- [ ] Regex constructed once at module load.
- [ ] All existing code-block tests pass unchanged.

## Verification

```bash
pnpm --filter @ninna-ui/code-block test
pnpm --filter @ninna-ui/code-block build
```

## Sync checklist

- N/A (internal optimization, no API/visual change).
