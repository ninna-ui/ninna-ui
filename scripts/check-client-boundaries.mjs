// Run after the package build. Bundlers must preserve the React client boundary
// in published JS; checking source directives alone misses stripped directives.
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const components = ['primitives', 'feedback', 'forms', 'layout', 'overlays', 'navigation', 'data-display', 'code-block', 'react-internal'];
for (const name of components) {
  const directory = new URL(`../packages/${name}/`, import.meta.url);
  const manifest = JSON.parse(readFileSync(new URL('package.json', directory), 'utf8'));
  const entry = new URL(manifest.exports['.'].import, directory);
  const source = readFileSync(entry, 'utf8');
  assert.ok(/^\s*(["'])use client\1;/.test(source), `${manifest.name}: published entry must start with a client directive`);
}

// These shared foundations must not force their server consumers into a boundary.
for (const name of ['core', 'utils']) {
  const source = readFileSync(new URL(`../packages/${name}/dist/index.js`, import.meta.url), 'utf8');
  assert.doesNotMatch(source, /^\s*(["'])use client\1;/, `${name}: keep the shared entry usable on the server`);
}
console.log(`Client boundaries: ${components.length} built React entry points verified; core and utils remain unmarked.`);
