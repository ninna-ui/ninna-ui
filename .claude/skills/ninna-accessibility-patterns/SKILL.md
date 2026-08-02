---
name: ninna-accessibility-patterns
description: Use when building or reviewing any interactive Ninna UI component (buttons, inputs, overlays, menus, tabs, accordions) to guarantee WCAG 2.1 AA compliance. Covers semantic HTML, focus management, disabled/loading/invalid ARIA states, keyboard navigation, labeling, and how to build complex widgets on Radix via @ninna-ui/react-internal without leaking Radix types. Apply whenever accessibility correctness matters or an a11y audit is requested.
---

# Ninna UI — Accessibility Patterns

Accessibility is a non-negotiable quality gate in Ninna UI: every component MUST meet **WCAG 2.1 Level AA**, enforced by automated `@sa11y/vitest` / `vitest-axe` audits on every PR. Source of truth: `docs/standards/ACCESSIBILITY.md`.

## When to use this skill

- Implementing any interactive component or widget.
- Reviewing a component/block for a11y.
- Responding to an "audit accessibility" request.

## 1. Universal rules (every component)

- **`forwardRef` always** — consumers need refs for focus management.
- **Support `className` always** — styling flexibility.
- **Semantic HTML over ARIA roles** — use `<button>`, `<nav>`, `<table>`, `<ul>`, not `<div role="...">`. Native elements give free keyboard support, focus, and SR announcements.

```tsx
// wrong
<div role="button" onClick={handleClick}>Click me</div>
// correct
<button onClick={handleClick}>Click me</button>
```

## 2. Interactive component requirements

| Requirement  | Implementation                                                                                   |
| ------------ | ------------------------------------------------------------------------------------------------ |
| Focus ring   | `focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary` |
| Disabled     | `disabled` + `aria-disabled={disabled}` + `disabled:opacity-50 disabled:pointer-events-none`     |
| Loading      | `aria-busy={loading}` + `data-loading={loading}` + spinner with `aria-hidden="true"`             |
| Invalid      | `aria-invalid={invalid}` + `data-invalid={invalid}`                                              |
| Labels       | `aria-label` or `aria-labelledby` on every interactive element                                   |
| Descriptions | `aria-describedby` linking help text / error messages                                            |
| Keyboard     | Arrow keys for lists/tabs/menus, Escape for overlays, Enter/Space for buttons                    |

### Focus management

- Use `focus-visible:` (keyboard-only), not `focus:`, for rings — avoids rings on mouse click.
- Never remove the focus indicator without replacing it.

```tsx
className={cn("focus:outline-none", "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary")}
```

### Disabled / loading / invalid (always pair HTML + ARIA)

```tsx
<button
  disabled={isDisabled}
  aria-disabled={isDisabled}
  aria-busy={loading}
  data-loading={loading}
  className="disabled:opacity-50 disabled:pointer-events-none"
>
  {loading && <span className="animate-spin …" aria-hidden="true" />}
  {children}
</button>
```

## 3. Form components

- Every control has an associated label (`<Field label>` / `FormLabel` / `aria-label`).
- Link help and error text with `aria-describedby`; set `aria-invalid` on error.
- Required fields: `required` + visible indicator (not color alone).
- Use the callback APIs: Checkbox/Switch use `onCheckedChange` (not `onChange`); inputs put icons in `InputGroup` via `startElement`/`endElement`.

## 4. Complex widgets — build on Radix via `@ninna-ui/react-internal`

For dialogs, menus, popovers, tooltips, tabs, accordions, etc., do NOT hand-roll focus traps and ARIA. Use the Radix engine adapters in `@ninna-ui/react-internal`, which provide correct keyboard interaction, focus trapping/restoration, and ARIA wiring.

Critical constraints (from `react-internal`):

- **Never leak Radix types** into the public API. Wrap Radix props with Ninna's own typed props; consumers must never need to know Radix exists.
- `@ninna-ui/react-internal` may only import from other `@ninna-ui` packages.
- App code must NEVER import `@ninna-ui/react-internal` directly — it is internal. Overlays are consumed from `@ninna-ui/overlays`.

```tsx
// Inside @ninna-ui/overlays — wrap the engine, expose Ninna-typed compound API
import { DialogEngine } from "@ninna-ui/react-internal";

export const Modal = Object.assign(ModalRoot, {
  Trigger: ModalTrigger, // -> DialogEngine.Trigger, focus + ESC handled by Radix
  Content: ModalContent, // focus trap + restore + role="dialog" + aria-modal
});
```

## 5. Color & motion

- Contrast: rely on the semantic `*-content` token pairs (guaranteed AA). Never convey meaning by color alone — add text/icon.
- Motion: the theme already disables animation under `prefers-reduced-motion: reduce`; don't override it.

## 6. Testing a11y (see `ninna-component-testing`)

Every component test includes an axe audit via `@sa11y/vitest`. The `toBeAccessible()` matcher is registered globally by `@ninna-ui/test-config/setup` — no per-file import needed:

```tsx
it("has no accessibility violations", async () => {
  const { container } = render(<Component label="…" />);
  await expect(container).toBeAccessible();
});
```

For widgets, also assert keyboard behavior (Tab/Arrow/Escape/Enter) and focus restoration with `@testing-library/user-event`.

## Audit checklist

- [ ] Semantic element used (not `div`+role).
- [ ] `forwardRef` + `className` supported.
- [ ] Visible `focus-visible` ring on every interactive element.
- [ ] Disabled = `disabled` + `aria-disabled`; loading = `aria-busy` + hidden spinner; invalid = `aria-invalid`.
- [ ] Labels via `aria-label`/`aria-labelledby`; descriptions via `aria-describedby`.
- [ ] Keyboard: Arrows/Escape/Enter/Space as appropriate; focus trapped+restored for overlays.
- [ ] Complex widget built on `@ninna-ui/react-internal`; no Radix types leaked; app never imports react-internal.
- [ ] No color-only meaning; `*-content` pairs used for contrast.
- [ ] `vitest-axe` test passes; keyboard interactions tested.
