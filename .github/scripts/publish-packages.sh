#!/usr/bin/env bash
set -euo pipefail

# npm exchanges the GitHub job identity for a short-lived package credential.
# Every package must trust ninna-ui/ninna-ui's release.yml workflow on npm.
if [[ "${GITHUB_ACTIONS:-}" != "true" || -z "${ACTIONS_ID_TOKEN_REQUEST_URL:-}" || -z "${ACTIONS_ID_TOKEN_REQUEST_TOKEN:-}" ]]; then
  echo "::error::Publishing requires the GitHub Actions OIDC identity. Run the Release workflow with id-token: write and configure each npm package's trusted publisher for ninna-ui/ninna-ui and release.yml."
  exit 1
fi

pnpm changeset publish
