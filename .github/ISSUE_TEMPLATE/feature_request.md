---
name: Feature request
about: Suggest a new component, feature, or improvement for Ninna UI
title: '[Feature]: '
labels: enhancement
assignees: ''
---

## Feature Request

### Summary
<!-- One-sentence description of the feature. -->

### Package
<!-- Which package does this belong to? -->
- [ ] `@ninna-ui/primitives` — Basic components
- [ ] `@ninna-ui/feedback` — Feedback components
- [ ] `@ninna-ui/forms` — Form components
- [ ] `@ninna-ui/layout` — Layout components
- [ ] `@ninna-ui/overlays` — Overlay components
- [ ] `@ninna-ui/navigation` — Navigation components
- [ ] `@ninna-ui/data-display` — Data display components
- [ ] `@ninna-ui/code-block` — Code block
- [ ] `@ninna-ui/core` — Design tokens / themes
- [ ] `@ninna-ui/cli` — CLI tooling
- [ ] New package / unsure

### Use Case
<!-- What problem does this solve? Who benefits from it? -->

### Proposed API
```tsx
// How you'd like to use this feature
import { NewComponent } from "@ninna-ui/primitives";

<NewComponent variant="solid" color="primary" size="md">
  Content
</NewComponent>
```

### Design Considerations
<!-- Check all that apply -->
- [ ] Must support all 8 semantic colors
- [ ] Must support all 5 variants (solid, soft, outline, ghost, text)
- [ ] Must support 3 sizes (sm, md, lg)
- [ ] Must support dark mode
- [ ] Must be accessible (WCAG 2.1 AA)
- [ ] Must support `data-slot` for CSS targeting
- [ ] Must work with `react-hook-form`
- [ ] Needs Radix primitive underneath

### Alternatives Considered
<!-- Have you considered any alternative solutions or workarounds? -->

### References
<!-- Links to similar implementations in other libraries, mockups, or design specs. -->

### Checklist
- [ ] I have searched existing issues and this is not a duplicate
- [ ] I have checked the [roadmap](../../docs/release/RELEASE.md) for planned features
