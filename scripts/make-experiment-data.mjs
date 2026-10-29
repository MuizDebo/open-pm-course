// Generates the mock A/B test dataset used by project 6.8 Experiment analysis.
// Deterministic (seeded), so re-running produces the same file.
//
// Scenario: a mobile-money app tested a redesigned onboarding flow. Users were assigned
// 50/50 to control (old flow) or treatment (new flow) at sign-up over four weeks.
// Outcomes measured over the following 30 days.
//
// Hidden truths the analysis should uncover:
// - Treatment lifts activation overall by about two points.
// - On mobile (80 percent of users) the lift is real; on desktop treatment is slightly worse.
// - Revenue per activated user is unchanged; the revenue lift comes only from activation.
// - Kenya was added to the test in week 3 only, so a naive country comparison misleads.
//
// Run with: node scripts/make-experiment-data.mjs

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const out = path.join(root, 'public', 'data', 'experiment-6-8.csv');

let seed = 20261029;
const rand = () => {
  seed = (seed * 1664525 + 1013904223) % 4294967296;
  return seed / 4294967296;
};
const pick = (weights) => {
  const r = rand();
  let acc = 0;
  for (const [value, w] of weights) {
    acc += w;
    if (r < acc) return value;
  }
  return weights[weights.length - 1][0];
};

const rows = [['user_id', 'assigned_at', 'week', 'variant', 'device', 'country', 'activated', 'orders_30d', 'revenue_30d']];
const start = new Date('2026-09-07');
const N = 6000;

for (let i = 1; i <= N; i++) {
  const week = pick([[1, 0.25], [2, 0.25], [3, 0.25], [4, 0.25]]);
  const day = (week - 1) * 7 + Math.floor(rand() * 7);
  const date = new Date(start.getTime() + day * 86400000).toISOString().slice(0, 10);
  const variant = rand() < 0.5 ? 'control' : 'treatment';
  const device = rand() < 0.8 ? 'mobile' : 'desktop';
  const country =
    week >= 3
      ? pick([['NG', 0.55], ['GH', 0.15], ['KE', 0.2], ['ZA', 0.1]])
      : pick([['NG', 0.65], ['GH', 0.2], ['ZA', 0.15]]);

  let pActivate = device === 'mobile' ? 0.2 : 0.3;
  if (variant === 'treatment') pActivate += device === 'mobile' ? 0.03 : -0.02;
  if (country === 'KE') pActivate += 0.04;
  const activated = rand() < pActivate ? 1 : 0;

  let orders = 0;
  let revenue = 0;
  if (activated) {
    orders = 1 + Math.floor(rand() * 4);
    for (let o = 0; o < orders; o++) revenue += 400 + Math.floor(rand() * 2200);
    if (device === 'desktop') revenue = Math.round(revenue * 1.25);
  }
  rows.push([`u${String(i).padStart(5, '0')}`, date, week, variant, device, country, activated, orders, revenue]);
}

fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, rows.map((r) => r.join(',')).join('\n') + '\n', 'utf8');

const summary = {};
for (const r of rows.slice(1)) {
  const k = r[3];
  summary[k] ??= { n: 0, activated: 0, revenue: 0 };
  summary[k].n++;
  summary[k].activated += r[6];
  summary[k].revenue += r[8];
}
for (const [k, v] of Object.entries(summary)) {
  console.log(`${k}: n=${v.n} activation=${((100 * v.activated) / v.n).toFixed(1)}% revenue/user=${(v.revenue / v.n).toFixed(0)}`);
}
console.log('wrote', path.relative(root, out));
