---
"@ninna-ui/forms": patch
---

**`<Checkbox>`, `<Radio>` (`<CheckboxGroup>` / `<RadioGroup>`), `<Switch>`**: fix two long-standing layout issues reported in Sizes demos:

1. **Row alignment**: the wrapper used `items-start` + `min-h-[44px]` unconditionally, which pushed the control to the top of a tall empty row while the label sat at its natural text baseline lower down — visually the control and its label did not share a line. The `min-h-[44px]` is also an anti-pattern for touch-targets: it makes the row 44px tall but the empty vertical space isn't clickable (the `<label>` is). The wrapper now uses `items-center` by default so the control sits on the same visual line as its label, and falls back to `items-start` only when a `description` is stacked below the label (so the control aligns with the first line of the block).
2. **Size readability**: the size variants already applied distinct `w-4/w-5/w-6` utilities to the indicator, but the label text stayed the same size for all three sizes, so the 4-px box-size step between `sm`/`md`/`lg` was hard to perceive at a glance. Labels now scale with the control: `text-sm` / `text-base` / `text-lg` for `sm` / `md` / `lg` respectively.

Regression tests added for `Checkbox` that lock in:
- distinct `w-4`/`w-5`/`w-6` indicator classes per size,
- size-scaled label typography,
- `items-center` by default (no `min-h-[44px]`),
- `items-start` when a description is present.
