# Changeset Workflow

## Adding Changes
```bash
pnpm changeset add
```
- Creates a changeset file (e.g., `few-worms-rest.md`)
- Follow prompts to select packages and change type
- Write clear description of what changed

## Versioning Packages
```bash
pnpm changeset version
```
- Updates package versions based on changesets
- Generates changelog entries
- Removes processed changeset files

## Publishing
```bash
pnpm release
```
- Builds all packages
- Publishes to npm
- Creates GitHub release

## Version Types
- **patch**: Bug fixes, documentation
- **minor**: New features (pre-1.0: may include breaking changes)
- **major**: Breaking changes (post-1.0 only)

## Best Practices
- One changeset per logical change
- Use semantic versioning
- Write clear, concise descriptions
- Review changeset files before versioning
