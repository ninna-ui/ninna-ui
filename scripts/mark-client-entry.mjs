// tsup's optional Rollup pass removes module directives, including banners.
// Restore the boundary after bundling, keeping generated source-map lines aligned.
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

export function markClientEntry() {
  const manifest = JSON.parse(readFileSync('package.json', 'utf8'));
  const entry = resolve(manifest.exports['.'].import);
  const source = readFileSync(entry, 'utf8');
  if (!/^\s*(["'])use client\1;/.test(source)) {
    const mapPath = `${entry}.map`;
    const map = JSON.parse(readFileSync(mapPath, 'utf8'));
    // One extra generated line; original source locations and names are unchanged.
    map.mappings = `;${map.mappings}`;
    writeFileSync(mapPath, JSON.stringify(map));
    writeFileSync(entry, `"use client";\n${source}`);
  }
}
