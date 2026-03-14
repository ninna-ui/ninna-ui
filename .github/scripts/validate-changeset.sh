#!/bin/bash
set -e

echo "🔍 Checking for public package changes..."

# Check if any public packages were modified
PUBLIC_PACKAGES="core|utils|react-internal|primitives|cli|code-block|data-display|feedback|forms|layout|navigation|overlays"
CHANGED_PUBLIC=$(git diff --name-only origin/main...HEAD | grep -E "^packages/($PUBLIC_PACKAGES)/" || true)

# Check if only private packages/docs were changed
PRIVATE_ONLY=$(git diff --name-only origin/main...HEAD | grep -E "^packages/(eslint-config|test-config|tsconfig)/" || true)
DOCS_ONLY=$(git diff --name-only origin/main...HEAD | grep -E "^docs/|README\.md|\.md$" || true)

if [ -n "$CHANGED_PUBLIC" ]; then
  echo "📦 Public packages were modified:"
  echo "$CHANGED_PUBLIC"
  echo ""
  
  # Check if changeset exists
  CHANGESET_FILES=$(git diff --name-only origin/main...HEAD | grep '.changeset/' || true)
  if [ -z "$CHANGESET_FILES" ]; then
    echo "❌ CHANGES REQUIRED: Public package changes detected but no changeset found!"
    echo ""
    cat .github/scripts/changeset-error-message.txt
    exit 1
  else
    echo "✅ Changeset found: $CHANGESET_FILES"
  fi
else
  if [ -n "$PRIVATE_ONLY" ] && [ -z "$DOCS_ONLY" ]; then
    echo "🔧 Only private packages modified - no changeset required"
  elif [ -n "$DOCS_ONLY" ] && [ -z "$CHANGED_PUBLIC" ]; then
    echo "📚 Only documentation changes - no changeset required"
  else
    echo "✅ No public package changes detected"
  fi
fi
