---
"@ninna-ui/forms": minor
---

**`<InputGroup>`**: decorative and interactive adornments now just work — no more `endElementPointerEvents="auto"` boilerplate for show/hide-password, clear, or send-inside-input patterns.

Internally the slot wrapper is still `pointer-events: none` so clicks fall through to the underlying input, but interactive descendants (`<button>`, `<a>`, `<input>`, `[role="button"]`) are re-enabled via a descendant selector rather than a React-level heuristic. This covers wrapped components (e.g. `<IconButton>` whose rendered element is a `<button>`) which the previous heuristic missed because `element.type` was a function, not the string `'button'`.

`startElementPointerEvents` and `endElementPointerEvents` are kept as optional overrides — set them to `'auto'` to force-enable or `'none'` to force-disable (including on interactive children).

**`<Input>` / `<Textarea>`**: fix a silent bug where `<FormControl>` context values (`disabled`, `required`, `aria-invalid`, `aria-describedby`, `id`…) were being clobbered by a redundant trailing `{...props}` spread. The components now correctly inherit all of these when wrapped in `<FormControl>`.

**`useFormControlProps`**: return type now includes the injected `FormControlDerivedProps` fields so consumers can read them without unsafe casts.
