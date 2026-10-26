# Publishing Ninna UI

> Current release: 0.7.0. Use Node.js 24 LTS and pnpm 10.28.2 for repository validation.

## Prepare a change

Start from current main on a dedicated branch. Public package changes require a Changeset listing only affected public packages with an accurate patch, minor, or major summary. Apps and private tooling do not need release entries. Do not edit public package versions manually.

Run relevant tests, type checks, lint, builds, package export checks, and CLI starter checks before merging. Public packages use a fixed Changesets version group; a minor CLI release can advance all twelve packages together.

## Validate the release candidate

After source PRs merge, the Release workflow builds and tests main, then creates or updates chore: version packages. Changesets consumes pending entries, updates manifests and changelogs, and resolves internal workspace dependency versions for publishing.

Check the exact current release PR head. Bot commits can leave normal PR workflows awaiting approval or without new runs. Approve standard runs where required, or explicitly dispatch CI and CLI starters against changeset-release/main. Both workflows support workflow_dispatch. Verify their recorded commit matches the current candidate; an earlier passing run is insufficient.

Require successful build, lint, type checks, tests, packed starter installs/builds, package checks, CodeQL, and deployment checks before merging the release PR.

## Publish and verify

Merging the release PR triggers Release on main. Its Changesets publish step uses the configured npm credential and GitHub Actions provenance permissions. Keep credentials in repository secrets; do not copy them into local files or logs.

Confirm the publish job succeeds and each of the twelve public packages has the intended version and npm latest tag: core, utils, react-internal, primitives, feedback, layout, forms, overlays, navigation, data-display, code-block, and cli.

Test the actual published CLI in an isolated directory, including all four framework starters, dependency installation, type checking, production builds, theme behavior, and browser hydration/interactions. See [CLI starter validation](../cli-starter-validation.md).

Only after npm verification, update ninna-ui-web dependencies, installation guides, changelog, and generated SEO/AI references. Version labels follow the installed core package. Validate and merge its PR, then verify the live deployment.

If publishing fails, inspect the failing step and registry state before retrying. Published versions cannot be overwritten; Changesets skips versions already present. Fix the underlying problem through a focused PR and rerun the authorized workflow rather than changing versions or unpublishing packages to hide the failure.
