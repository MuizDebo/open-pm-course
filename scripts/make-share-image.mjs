// Renders the link-preview image (public/og.png, 1200x630) shown when the site is shared on
// LinkedIn, X, WhatsApp and Slack. Run with: node scripts/make-share-image.mjs
// Uses system fonts (Segoe UI, then Arial) because the SVG renderer cannot load web fonts.

import sharp from 'sharp';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const out = path.join(root, 'public', 'og.png');

const NAVY = '#0D0630';
const SURFACE = '#171047';
const LINE = '#4F4A7C';
const INK = '#F7FBFE';
const MUTED = '#9A96B8';
const SKY = '#BBDEF0';
const CORAL = '#DD614A';
const YELLOW = '#FFF689';
const FONT = "'Segoe UI', Arial, sans-serif";

// A small version of the four-kinds-of-work cycle from lesson 1.1.1.
const box = (x, y, label, hot) => `
  <rect x="${x}" y="${y}" width="130" height="64" rx="14" fill="${hot ? CORAL : SURFACE}" stroke="${hot ? CORAL : LINE}" stroke-width="2"/>
  <text x="${x + 65}" y="${y + 40}" text-anchor="middle" font-family="${FONT}" font-size="22" font-weight="600" fill="${hot ? NAVY : INK}">${label}</text>`;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <marker id="a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
      <path d="M0,0 L10,5 L0,10 z" fill="${MUTED}"/>
    </marker>
  </defs>
  <rect width="1200" height="630" fill="${NAVY}"/>
  <rect x="0" y="0" width="1200" height="8" fill="${CORAL}"/>

  <rect x="80" y="84" width="118" height="44" rx="22" fill="${YELLOW}"/>
  <text x="139" y="114" text-anchor="middle" font-family="${FONT}" font-size="24" font-weight="700" fill="${NAVY}" letter-spacing="1">TOPM</text>

  <text font-family="${FONT}" font-size="62" font-weight="700" fill="${INK}">
    <tspan x="80" y="222">The Open Product</tspan>
    <tspan x="80" y="302">Management Course</tspan>
  </text>

  <text font-family="${FONT}" font-size="30" fill="${SKY}">
    <tspan x="80" y="372">Free and open source. From first principles</tspan>
    <tspan x="80" y="414">to AI product management.</tspan>
  </text>

  <text x="80" y="490" font-family="${FONT}" font-size="28" font-weight="600" fill="${CORAL}">10 courses · 108 lessons · 29 projects</text>
  <text x="80" y="560" font-family="${FONT}" font-size="24" fill="${MUTED}">muizdebo.github.io/open-pm-course</text>

  ${box(930, 150, 'Discover', false)}
  ${box(1050, 270, 'Decide', false)}
  ${box(930, 390, 'Define', false)}
  ${box(800, 270, 'Deliver', true)}
  <path d="M1062,182 C1100,190 1115,220 1115,262" fill="none" stroke="${MUTED}" stroke-width="2.5" marker-end="url(#a)"/>
  <path d="M1115,342 C1115,385 1095,415 1068,422" fill="none" stroke="${MUTED}" stroke-width="2.5" marker-end="url(#a)"/>
  <path d="M930,422 C890,415 865,385 865,344" fill="none" stroke="${MUTED}" stroke-width="2.5" marker-end="url(#a)"/>
  <path d="M865,270 C865,220 885,190 922,182" fill="none" stroke="${MUTED}" stroke-width="2.5" marker-end="url(#a)"/>
</svg>`;

await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(out);
const meta = await sharp(out).metadata();
console.log(`wrote ${path.relative(root, out)} ${meta.width}x${meta.height}`);
