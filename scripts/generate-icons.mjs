/**
 * Generates PNG icons matching logo.svg exactly.
 * Logo spec: viewBox 0 0 32 32, rect rx=8, fill=#7c3aed, N path fill=white
 * N path: M9 24V8h2.8l8.8 11.2V8H23v16h-2.8L11.4 12.8V24H9z
 */
import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { deflateSync } from 'zlib';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC = join(__dirname, '../apps/playground/public');

const BG = [124, 58, 237]; // #7c3aed brand purple
const FG = [255, 255, 255]; // white N

//  PNG encoder (RGBA) 
function crc32(buf) {
  const t = new Uint32Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let j = 0; j < 8; j++) c = (c & 1) ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[i] = c;
  }
  let crc = 0xffffffff;
  for (const b of buf) crc = t[(crc ^ b) & 0xff] ^ (crc >>> 8);
  return (crc ^ 0xffffffff) >>> 0;
}

function pngChunk(type, data) {
  const tb = Buffer.from(type, 'ascii');
  const lb = Buffer.alloc(4); lb.writeUInt32BE(data.length);
  const cb = Buffer.alloc(4); cb.writeUInt32BE(crc32(Buffer.concat([tb, data])));
  return Buffer.concat([lb, tb, data, cb]);
}

function encodePNG(w, h, rgba) {
  const SIG = Buffer.from([137,80,78,71,13,10,26,10]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(w, 0); ihdr.writeUInt32BE(h, 4);
  ihdr[8] = 8; ihdr[9] = 6; // 8-bit RGBA
  const raw = Buffer.alloc(h * (1 + w * 4));
  for (let y = 0; y < h; y++) {
    raw[y * (1 + w * 4)] = 0; // filter none
    for (let x = 0; x < w; x++) {
      const s = (y * w + x) * 4;
      const d = y * (1 + w * 4) + 1 + x * 4;
      raw[d] = rgba[s]; raw[d+1] = rgba[s+1]; raw[d+2] = rgba[s+2]; raw[d+3] = rgba[s+3];
    }
  }
  return Buffer.concat([SIG, pngChunk('IHDR', ihdr), pngChunk('IDAT', deflateSync(raw, {level:9})), pngChunk('IEND', Buffer.alloc(0))]);
}

//  Geometry 

/** Signed distance to rounded rect (negative = inside) */
function sdRRect(px, py, cx, cy, hw, hh, r) {
  const qx = Math.abs(px - cx) - hw + r;
  const qy = Math.abs(py - cy) - hh + r;
  return Math.hypot(Math.max(qx, 0), Math.max(qy, 0)) + Math.min(Math.max(qx, qy), 0) - r;
}

/**
 * Test if pixel (px,py) is inside the N path, given logo origin (ox,oy) and scale.
 * Path decomposed:
 *   Left bar:  x in [9, 11.8], y in [8, 24]
 *   Right bar: x in [20.2, 23], y in [8, 24]
 *   Diagonal stroke: line from (11.8,8) to (20.2,24), half-width 1.4 SVG units
 */
function inN(px, py, scale, ox, oy) {
  const x = (px - ox) / scale;
  const y = (py - oy) / scale;
  if (x < 8.5 || x > 23.5 || y < 7.5 || y > 24.5) return false;
  // Left bar
  if (x >= 9 && x <= 11.8 && y >= 8 && y <= 24) return true;
  // Right bar
  if (x >= 20.2 && x <= 23 && y >= 8 && y <= 24) return true;
  // Diagonal: from (11.8,8) to (20.2,24)
  if (x >= 11.5 && x <= 20.5 && y >= 7.5 && y <= 24.5) {
    const dx = 20.2 - 11.8, dy = 24 - 8; // (8.4, 16)
    const len = Math.hypot(dx, dy);
    const t = ((x - 11.8) * dx + (y - 8) * dy) / (len * len);
    if (t >= 0 && t <= 1) {
      const dist = Math.abs((x - 11.8) * dy - (y - 8) * dx) / len;
      if (dist <= 1.5) return true;
    }
  }
  return false;
}

//  Icon renderer 
function renderIcon(size, maskable = false) {
  const rgba = new Uint8Array(size * size * 4);
  // Maskable: logo fills 80% (safe zone), transparent outside
  // Regular: logo fills 100%
  const logoSize = maskable ? size * 0.8 : size;
  const ox = (size - logoSize) / 2;
  const oy = (size - logoSize) / 2;
  const scale = logoSize / 32;
  const rx = 8 * scale; // rx=8 from SVG
  const cx = ox + logoSize / 2;
  const cy = oy + logoSize / 2;
  const hw = logoSize / 2;
  const hh = logoSize / 2;

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const idx = (y * size + x) * 4;
      const d = sdRRect(x + 0.5, y + 0.5, cx, cy, hw, hh, rx);
      const alpha = Math.max(0, Math.min(1, 0.5 - d));
      if (alpha > 0) {
        const isN = inN(x + 0.5, y + 0.5, scale, ox, oy);
        const [r, g, b] = isN ? FG : BG;
        rgba[idx]   = r;
        rgba[idx+1] = g;
        rgba[idx+2] = b;
        rgba[idx+3] = Math.round(alpha * 255);
      }
    }
  }
  return encodePNG(size, size, rgba);
}

//  OG Image renderer 
function renderOGImage(w, h) {
  const rgba = new Uint8Array(w * h * 4);
  // Dark background gradient
  for (let y = 0; y < h; y++) {
    const t = y / h;
    const r = Math.round(8  + 12 * (1 - Math.abs(t - 0.5) * 2));
    const g = Math.round(4  + 6  * (1 - Math.abs(t - 0.5) * 2));
    const b = Math.round(18 + 22 * (1 - Math.abs(t - 0.5) * 2));
    for (let x = 0; x < w; x++) {
      const i = (y * w + x) * 4;
      rgba[i] = r; rgba[i+1] = g; rgba[i+2] = b; rgba[i+3] = 255;
    }
  }

  // Draw logo icon (left-center, ~55% of height)
  const iconSize = Math.round(h * 0.55);
  const ox = Math.round(h * 0.18);
  const oy = Math.round((h - iconSize) / 2);
  const scale = iconSize / 32;
  const rx = 8 * scale;
  const cx = ox + iconSize / 2;
  const cy = oy + iconSize / 2;
  const hw = iconSize / 2;
  const hh = iconSize / 2;

  for (let y = Math.max(0, oy - 2); y < Math.min(h, oy + iconSize + 2); y++) {
    for (let x = Math.max(0, ox - 2); x < Math.min(w, ox + iconSize + 2); x++) {
      const d = sdRRect(x + 0.5, y + 0.5, cx, cy, hw, hh, rx);
      const alpha = Math.max(0, Math.min(1, 0.5 - d));
      if (alpha > 0) {
        const isN = inN(x + 0.5, y + 0.5, scale, ox, oy);
        const [fr, fg, fb] = isN ? FG : BG;
        const idx = (y * w + x) * 4;
        rgba[idx]   = Math.round(fr * alpha + rgba[idx]   * (1 - alpha));
        rgba[idx+1] = Math.round(fg * alpha + rgba[idx+1] * (1 - alpha));
        rgba[idx+2] = Math.round(fb * alpha + rgba[idx+2] * (1 - alpha));
        rgba[idx+3] = 255;
      }
    }
  }

  // Subtle purple glow behind icon
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const dist = Math.hypot(x - cx, y - cy);
      const glow = Math.max(0, 1 - dist / (iconSize * 0.9));
      if (glow > 0) {
        const g2 = glow * glow * 0.18;
        const idx = (y * w + x) * 4;
        rgba[idx]   = Math.min(255, Math.round(rgba[idx]   + BG[0] * g2));
        rgba[idx+1] = Math.min(255, Math.round(rgba[idx+1] + BG[1] * g2));
        rgba[idx+2] = Math.min(255, Math.round(rgba[idx+2] + BG[2] * g2));
      }
    }
  }

  // Right-side accent bar (purple, 3px tall)
  const barY = Math.round(h * 0.5);
  const barX1 = Math.round(w * 0.42);
  const barX2 = Math.round(w * 0.88);
  for (let x = barX1; x < barX2; x++) {
    for (let dy = 0; dy < 3; dy++) {
      const idx = ((barY + dy) * w + x) * 4;
      rgba[idx] = BG[0]; rgba[idx+1] = BG[1]; rgba[idx+2] = BG[2]; rgba[idx+3] = 200;
    }
  }

  return encodePNG(w, h, rgba);
}

//  Generate 
const files = [
  { name: 'icon-192.png',          fn: () => renderIcon(192, false) },
  { name: 'icon-512.png',          fn: () => renderIcon(512, false) },
  { name: 'icon-maskable-512.png', fn: () => renderIcon(512, true)  },
  { name: 'apple-touch-icon.png',  fn: () => renderIcon(180, false) },
  { name: 'og-image.png',          fn: () => renderOGImage(1200, 630) },
];

for (const { name, fn } of files) {
  const buf = fn();
  writeFileSync(join(PUBLIC, name), buf);
  console.log(` ${name} (${buf.length} bytes)`);
}
console.log('\nAll icons generated successfully.');
