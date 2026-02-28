# Changesets

This folder contains changesets for version management.

## Adding a Changeset

```bash
pnpm changeset
```

Follow the prompts to:
1. Select packages that have changed
2. Choose version bump type (patch/minor/major)
3. Write a summary of changes

## Version Bumps

- **patch**: Bug fixes, documentation
- **minor**: New features (pre-1.0: may include breaking changes)
- **major**: Breaking changes (post-1.0 only)

## Publishing

```bash
pnpm version-packages  # Apply changesets
pnpm release           # Build and publish
```
