---
"@ninna-ui/forms": patch
"@ninna-ui/overlays": patch
---

Improved semantic structure and accessibility integration for interactive primitives. 

- Integrated all form primitives (`Input`, `Textarea`, `Select`, `Checkbox`, `RadioGroup`, `Switch`, `Slider`, `NumberInput`, `PinInput`) with `FormControl` for automatic state inheritance (invalid, disabled, required) and labeling synchronization.
- Added `title` prop to `Modal.Content` and `Drawer.Content` to support accessible labeling for headless overlays.
- Improved `aria-describedby` logic to merge internal descriptions with `FormControl` validation messages.
- Unified ARIA attribute mapping across the forms package.
- Removed redundant placeholder titles in Modal and Drawer to prevent duplicate screen reader announcements.
