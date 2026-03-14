---
"@ninna-ui/core": patch
---

Fixes critical modal centering issue on ninna-ui.dev production site. The modal was not properly centered due to missing negative translate CSS classes in the safelist.

**Changes:**
- Added missing negative translate classes: `-translate-x-1/2`, `-translate-y-1/2`, `sm:-translate-x-1/2`, `sm:-translate-y-1/2`
- Fixed generator logic to properly categorize negative translate classes with variant prefixes
- Manual safelist update applied due to generator priority bug
- Rebuilt core package with updated CSS safelist

**Impact:**
- Modals now properly centered on both playground and production documentation
- Resolves visual inconsistency between development and production environments
