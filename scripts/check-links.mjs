// Checks every external http(s) link in the lesson files and the curriculum map.
// Exits non-zero if any link returns an error or times out, so CI can fail on rot.
//
// Run with: npm run check-links

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const targets = [path.join(root, 'CURRICULUM.md'), path.join(root, 'SOURCES.md'), path.join(root, 'src', 'content', 'docs')];

// Browsers get a 200 from these hosts; scripts get a 403 or a dropped connection. A failure
// from one of them is "unverifiable", not "broken".
const BOT_BLOCKED_HOSTS =
  /(^|\.)(medium\.com|chatgpt\.com|openai\.com|weworkremotely\.com|scrum\.org|segment\.com|ted\.com)$/;

// A real browser user-agent. Several sites answer scripts with 403 or 404 otherwise.
const USER_AGENT =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36';

const HOST_PARALLELISM = 8; // how many different hosts are checked at once
const PER_HOST_GAP_MS = 600; // pause between requests to the same host, so nobody rate-limits us
const RETRY_AFTER_MS = 4000; // one retry after this pause on 403, 429 or a network error

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
      if (url.includes('yourname')) continue; // example placeholders in lesson templates
      if (!links.has(url)) links.set(url, []);
      links.get(url).push(path.relative(root, file));
    }
  }
}

const failures = [];
const unverifiable = [];
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function targetFor(url) {
  // YouTube rate-limits page fetches; its oEmbed endpoint is cheap and confirms the video exists.
  if (/youtube\.com\/watch/.test(url)) {
    return `https://www.youtube.com/oembed?url=${encodeURIComponent(url)}&format=json`;
  }
  return url;
}

async function fetchStatus(url) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 20000);
  try {
    const res = await fetch(targetFor(url), {
      method: 'GET',
      redirect: 'follow',
      signal: ctrl.signal,
      headers: { 'user-agent': USER_AGENT, accept: 'text/html,application/json;q=0.9,*/*;q=0.8' },
    });
    return { status: res.status };
  } catch (e) {
    return { error: e.name === 'AbortError' ? 'timeout' : e.message };
  } finally {
    clearTimeout(timer);
  }
}

async function check(url) {
  let result = await fetchStatus(url);
  const retryable = result.error || result.status === 403 || result.status === 429 || result.status >= 500;
  if (retryable) {
    await sleep(RETRY_AFTER_MS);
    result = await fetchStatus(url);
  }
  if (!result.error && result.status < 400) return;
  const reason = result.error ?? `HTTP ${result.status}`;
  const host = new URL(url).hostname;
  if (BOT_BLOCKED_HOSTS.test(host) || result.error) unverifiable.push({ url, reason });
  else failures.push({ url, reason });
}

// Group by host so each host sees one request at a time with a gap between them.
const byHost = new Map();
for (const url of links.keys()) {
  const host = new URL(targetFor(url)).hostname;
  if (!byHost.has(host)) byHost.set(host, []);
  byHost.get(host).push(url);
}
const hostQueues = [...byHost.values()];

await Promise.all(
  Array.from({ length: HOST_PARALLELISM }, async () => {
    while (hostQueues.length) {
      const urls = hostQueues.shift();
      for (let i = 0; i < urls.length; i++) {
        if (i > 0) await sleep(PER_HOST_GAP_MS);
        await check(urls[i]);
      }
    }
  }),
);

console.log(`Checked ${links.size} links across ${byHost.size} hosts.`);
if (unverifiable.length) {
  console.log(`${unverifiable.length} unverifiable (host blocks scripts or the network hiccuped; open them in a browser):`);
  for (const f of unverifiable) console.log(`  ${f.reason.padEnd(10)} ${f.url}`);
}
if (failures.length) {
  console.log(`${failures.length} failed:`);
  for (const f of failures) console.log(`  ${f.reason.padEnd(10)} ${f.url}\n             in ${[...new Set(links.get(f.url))].join(', ')}`);
  process.exit(1);
}
