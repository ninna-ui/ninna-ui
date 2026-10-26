#!/usr/bin/env bash
set -euo pipefail

# Check the configured publishing credential before attempting twelve uploads.
# With no token, npm can use an explicitly configured trusted publisher instead.
if [[ -n "${NPM_TOKEN:-}" || -n "${NODE_AUTH_TOKEN:-}" ]]; then
  if ! npm whoami --registry=https://registry.npmjs.org/ >/dev/null; then
    echo "::error::npm rejected the publishing credential. Refresh the repository NPM_TOKEN secret with a valid credential authorized to publish @ninna-ui packages, then rerun Release. Do not change package versions."
    exit 1
  fi
fi

pnpm changeset publish
