---
"@ninna-ui/forms": patch
"@ninna-ui/overlays": patch
---

Improved semantic structure and accessibility integration for interactive primitives. 

- Refactored Checkbox, Switch, and RadioGroup to remove redundant nested labels.
- Integrated all interactive form primitives with FormControl for automatic state inheritance (invalid, disabled, required).
- Unified ARIA attribute mapping across the forms package.
- Removed redundant placeholder titles in Modal to prevent duplicate screen reader announcements.
