# Ninna UI Accessibility Standards

> **WCAG 2.1 Level AA compliance for every component** - ARIA patterns, keyboard navigation, focus management, color contrast, and screen reader compatibility. Accessibility is not optional in Ninna UI - it's a core quality gate enforced by automated vitest-axe audits on every PR.
>
> **Version:** 0.6.0 · **Last Updated:** April 2026

---

## Overview

All Ninna UI components MUST meet WCAG 2.1 Level AA standards. Accessibility is not optional - it's a core requirement for every component, enforced by automated testing and code review.

## Testing

All components are tested with `vitest-axe` to catch common accessibility violations. Manual testing with screen readers is recommended for complex components.

---

## 1. All Components

### 1.1 Required Patterns

- ✅ **`forwardRef` always** - Consumers must be able to attach refs for focus management
- ✅ **`className` always supported** - Consumers need styling flexibility
- ✅ **Semantic HTML elements** - Use `<button>`, `<nav>`, `<table>`, not `<div>` with `role`

### 1.2 Why Semantic HTML?

```tsx
// ❌ WRONG - div with role
<div role="button" onClick={handleClick}>Click me</div>

// ✅ CORRECT - native button
<button onClick={handleClick}>Click me</button>
```

Native elements provide:
- Built-in keyboard support (Enter, Space)
- Screen reader announcements
- Focus management
- Form submission behavior

---

## 2. Interactive Components

All interactive components (buttons, links, inputs, etc.) MUST implement these patterns:

| Requirement | Implementation | Example |
|-------------|---------------|---------|
| **Focus ring** | Visible focus indicator | `focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary` |
| **Disabled state** | Both HTML and ARIA | `disabled` + `aria-disabled={true}` + `disabled:opacity-50 disabled:pointer-events-none` |
| **Loading state** | ARIA busy + visual indicator | `aria-busy={loading}` + `data-loading={loading}` + spinner with `aria-hidden="true"` |
| **Invalid state** | ARIA invalid + visual feedback | `aria-invalid={invalid}` + `data-invalid={invalid}` |
| **Labels** | All interactive elements labeled | `aria-label` or `aria-labelledby` |
| **Descriptions** | Help text linked | `aria-describedby` for help text / error messages |
| **Keyboard navigation** | Standard patterns | Arrow keys for lists/tabs, Escape for overlays, Enter/Space for buttons |

### 2.1 Focus Management

**Focus rings MUST be visible:**

```tsx
// ✅ CORRECT - visible focus ring
className={cn(
  "focus:outline-none",
  "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
)}

// ❌ WRONG - no focus indicator
className="focus:outline-none"
```

**Focus-visible vs focus:**
- Use `focus-visible:` for keyboard focus only
- Avoids focus rings on mouse clicks
- Better UX for mouse users, essential for keyboard users

### 2.2 Disabled State

**Always use both HTML and ARIA:**

```tsx
<button
  disabled={disabled}
  aria-disabled={disabled}
  className={cn(
    "disabled:opacity-50 disabled:pointer-events-none"
  )}
>
  {children}
</button>
```

Why both?
- `disabled` prevents interaction (HTML)
- `aria-disabled` announces state to screen readers
- CSS handles visual feedback

### 2.3 Loading State

**Announce loading to screen readers:**

```tsx
<button aria-busy={loading} data-loading={loading}>
  {loading && <Spinner aria-hidden="true" />}
  {children}
</button>
```

- `aria-busy` announces loading state
- `aria-hidden="true"` on spinner (decorative only)
- Visual loading indicator for sighted users

---

## 3. Form Components

### 3.1 Labels (MANDATORY)

**All inputs MUST have an associated label:**

```tsx
// ✅ CORRECT - explicit label
<label htmlFor="email">Email</label>
<input id="email" type="email" />

// ✅ CORRECT - aria-label
<input type="email" aria-label="Email address" />

// ❌ WRONG - no label
<input type="email" placeholder="Email" />
```

Placeholders are NOT labels:
- Disappear when typing
- Low contrast
- Not announced by all screen readers

### 3.2 Error Messages

**Link errors via `aria-describedby`:**

```tsx
<input
  id="email"
  aria-invalid={invalid}
  aria-describedby={invalid ? "email-error" : undefined}
/>
{invalid && (
  <span id="email-error" role="alert">
    Invalid email address
  </span>
)}
```

- `aria-invalid` announces invalid state
- `aria-describedby` links to error message
- `role="alert"` announces errors immediately

### 3.3 Required Fields

**Mark required fields explicitly:**

```tsx
<input
  required
  aria-required="true"
  aria-label="Email (required)"
/>
```

- `required` for HTML5 validation
- `aria-required` for screen readers
- Visual indicator (asterisk, label text)

### 3.4 FormControl Context

**Use FormControl for automatic ARIA wiring:**

```tsx
<FormControl invalid={invalid} required>
  <FormLabel>Email</FormLabel>
  <Input type="email" />
  <FormMessage>Invalid email address</FormMessage>
</FormControl>
```

FormControl automatically:
- Links label via `htmlFor` / `id`
- Links error message via `aria-describedby`
- Sets `aria-invalid` on input
- Sets `aria-required` on input

---

## 4. Overlay Components

Overlays (Modal, Drawer, Popover, Tooltip, DropdownMenu) have special accessibility requirements.

### 4.1 Focus Management

**Focus trap (via Radix):**
- Focus moves into overlay when opened
- Tab cycles through focusable elements inside overlay
- Focus cannot escape overlay while open
- Focus returns to trigger when closed

### 4.2 Scroll Lock

**Prevent body scroll (via Radix):**
- Body scroll locked when overlay open
- Overlay content scrollable if needed
- Scroll position restored when closed

### 4.3 Keyboard Interaction

| Key | Action | Configurable |
|-----|--------|--------------|
| **Escape** | Close overlay | `closeOnEscape` prop |
| **Click outside** | Close overlay | `closeOnOverlayClick` prop |
| **Tab** | Cycle focus within overlay | Always enabled |

### 4.4 ARIA Attributes

**Modal/Drawer:**
```tsx
<div role="dialog" aria-modal="true" aria-labelledby="modal-title">
  <h2 id="modal-title">Modal Title</h2>
  {/* content */}
</div>
```

**Popover:**
```tsx
<button aria-haspopup="dialog" aria-expanded={open}>
  Open Popover
</button>
<div role="dialog" aria-labelledby="popover-title">
  {/* content */}
</div>
```

**Tooltip:**
```tsx
<button aria-describedby="tooltip-1">
  Hover me
</button>
<div role="tooltip" id="tooltip-1">
  Tooltip content
</div>
```

---

## 5. Keyboard Navigation Patterns

### 5.1 Standard Patterns

| Component | Keys | Behavior |
|-----------|------|----------|
| **Button** | Enter, Space | Activate |
| **Link** | Enter | Navigate |
| **Tabs** | Arrow Left/Right, Home, End | Switch tabs |
| **Accordion** | Arrow Up/Down, Home, End | Navigate items |
| **DropdownMenu** | Arrow Up/Down, Home, End, Escape | Navigate items, close |
| **Modal** | Escape | Close (if `closeOnEscape`) |
| **Select** | Arrow Up/Down, Enter, Escape | Navigate options, select, close |

### 5.2 Implementation

Keyboard navigation is handled by:
- Native HTML elements (button, input, etc.)
- Radix engines (for complex components)
- `onKeyDown` handlers for custom keyboard interactions

---

## 6. Color Contrast

### 6.1 WCAG AA Requirements

- **Normal text (< 18px)**: 4.5:1 contrast ratio
- **Large text (≥ 18px or ≥ 14px bold)**: 3:1 contrast ratio
- **UI components**: 3:1 contrast ratio

### 6.2 Our Implementation

All semantic color tokens meet WCAG AA:
- `primary`, `secondary`, `accent` → white/light content text
- `success`, `danger`, `warning`, `info` → dark content text
- `neutral` → white content text

Verified via:
- Manual testing with contrast checkers
- vitest-axe automated tests
- Visual inspection in light/dark modes

---

## 7. Screen Reader Testing

### 7.1 Recommended Tools

- **NVDA** (Windows, free)
- **JAWS** (Windows, paid)
- **VoiceOver** (macOS/iOS, built-in)
- **TalkBack** (Android, built-in)

### 7.2 Testing Checklist

For each component:
- [ ] All interactive elements announced correctly
- [ ] Labels and descriptions read in correct order
- [ ] State changes announced (loading, invalid, etc.)
- [ ] Error messages announced immediately
- [ ] Focus order is logical
- [ ] No focus traps (except intentional overlays)

---

## 8. Common Pitfalls

### ❌ Don't Do This

```tsx
// Missing label
<input placeholder="Search" />

// Div button without keyboard support
<div onClick={handleClick}>Click me</div>

// Focus ring removed
<button className="focus:outline-none">Click</button>

// Decorative icon not hidden
<button>
  <Icon name="check" />
  Save
</button>

// Error not linked
<input aria-invalid={true} />
<span>Error message</span>
```

### ✅ Do This Instead

```tsx
// Proper label
<input aria-label="Search" placeholder="Search" />

// Native button
<button onClick={handleClick}>Click me</button>

// Visible focus ring
<button className="focus:outline-none focus-visible:ring-2">
  Click
</button>

// Icon hidden from screen readers
<button>
  <Icon name="check" aria-hidden="true" />
  Save
</button>

// Error linked via aria-describedby
<input aria-invalid={true} aria-describedby="error-1" />
<span id="error-1" role="alert">Error message</span>
```

---

## 9. Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)
- [Radix UI Accessibility](https://www.radix-ui.com/primitives/docs/overview/accessibility)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [axe DevTools Browser Extension](https://www.deque.com/axe/devtools/)

---

## 10. Related Documents

- [COMPONENT_STANDARD.md](./COMPONENT_STANDARD.md) - Component implementation patterns
- [TESTING_STRATEGY.md](./TESTING_STRATEGY.md) - vitest-axe integration
- [Architecture](../architecture/ARCHITECTURE.md) - Radix engine strategy and package isolation
