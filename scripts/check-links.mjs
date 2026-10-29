// Checks every external http(s) link in the lesson files and the curriculum map.
// Exits non-zero if any link returns an error or times out, so CI can fail on rot.
//
// Run with: npm run check-links

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const targets = [path.join(root, 'CURRICULUM.md'), path.join(root, 'SOURCES.md'), path.join(root, 'src', 'content', 'docs')];

function* walk(p) {
  const st = fs.statSync(p);
  if (st.isDirectory()) {
    for (const f of fs.readdirSync(p)) yield* walk(path.join(p, f));
  } else if (/\.(md|mdx)$/.test(p)) {
    yield p;
  }
}

const links = new Map(); // url -> [files]
for (const t of targets) {
  if (!fs.existsSync(t)) continue;
  for (const file of walk(t)) {
    const text = fs.readFileSync(file, 'utf8');
    for (const m of text.matchAll(/https?:\/\/[^\s)>"'\]]+/g)) {
      const url = m[0].replace(/[.,;:]+$/, '');
      if (!links.has(url)) links.set(url, []);
      links.get(url).push(path.relative(root, file));
    }
  }
}

const CONCURRENCY = 8;
const queue = [...links.keys()];
const failures = [];

async function check(url) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 15000);
  try {
    let res = await fetch(url, { method: 'HEAD', redirect: 'follow', signal: ctrl.signal, headers: { 'user-agent': 'open-pm-course-link-check' } });
    if (res.status === 405 || res.status === 403) {
      res = await fetch(url, { method: 'GET', redirect: 'follow', signal: ctrl.signal, headers: { 'user-agent': 'open-pm-course-link-check' } });
    }
    if (res.status >= 400) failures.push({ url, reason: `HTTP ${res.status}` });
  } catch (e) {
    failures.push({ url, reason: e.name === 'AbortError' ? 'timeout' : e.message });
  } finally {
    clearTimeout(timer);
  }
}

await Promise.all(
  Array.from({ length: CONCURRENCY }, async () => {
    while (queue.length) await check(queue.shift());
  }),
);

console.log(`Checked ${links.size} links.`);
if (failures.length) {
  console.log(`${failures.length} failed:`);
  for (const f of failures) console.log(`  ${f.reason.padEnd(10)} ${f.url}\n             in ${[...new Set(links.get(f.url))].join(', ')}`);
  process.exit(1);
}
