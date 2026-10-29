// Generates the lesson skeleton and sidebar from CURRICULUM.md.
//
// - Creates one Markdown file per lesson or project under src/content/docs/.
//   Existing files are never overwritten, so written lessons survive re-runs.
// - Rewrites src/sidebar.generated.mjs from scratch every run.
//
// Run with: npm run scaffold

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const docsDir = path.join(root, 'src', 'content', 'docs');
const sidebarFile = path.join(root, 'src', 'sidebar.generated.mjs');
const mapFile = path.join(docsDir, 'map.md');
const BASE = '/open-pm-course'; // must match `base` in astro.config.mjs

const SOURCE_NAMES = {
  PH: 'ProductHired/open-product-management',
  DEND: 'dend/awesome-product-management',
  CT: 'cornelltech/product-management',
  AG: 'aakashg/awesome-ai-pm',
  AZA: 'aza-ali/awesome-ai-product-management',
  OMB: 'ombharatiya/AI-for-Product-Managers',
  DP: 'deanpeters/Product-Manager-Skills',
  EVALS: 'productfoundry101/ai-evals-bootcamp',
  FR: 'ferminrp/pm-interview-questions',
  PS: 'product-school/Product-Management-Interview-Checklist',
  RVD: 'rianvdm/pm-resources',
  OWN: 'original writing',
};

const slug = (s) =>
  s
    .toLowerCase()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

// ---------- parse CURRICULUM.md ----------

const md = fs.readFileSync(path.join(root, 'CURRICULUM.md'), 'utf8');
const courses = [];
let course = null;
let section = null;

for (const line of md.split(/\r?\n/)) {
  if (line.startsWith('## Summary')) break;
  let m;
  if ((m = line.match(/^## Course (\d+) · (.+?)(?: \(.*\))?\s*$/))) {
    course = { num: Number(m[1]), title: m[2].trim(), sections: [], items: [] };
    courses.push(course);
    section = null;
    continue;
  }
  if ((m = line.match(/^### Section (\d+\.\d+) · (.+?)\s*$/))) {
    section = { num: m[1], title: m[2].trim(), items: [] };
    course.sections.push(section);
    continue;
  }
  if ((m = line.match(/^\| ([\d.]+) \| (Lesson|Project) \| (.+?) \| (.*) \|\s*$/))) {
    const item = { num: m[1], type: m[2], title: m[3].trim(), notes: m[4].trim() };
    (section ?? course).items.push(item);
  }
}

if (courses.length === 0) throw new Error('No courses parsed from CURRICULUM.md');

// ---------- write lesson files ----------

const cleanNotes = (notes) => notes.replace(/`\[[A-Z]+\]`/g, '').replace(/\s{2,}/g, ' ').trim();
const sourceKeys = (notes) => [...notes.matchAll(/`\[([A-Z]+)\]`/g)].map((x) => x[1]);

function lessonBody(item) {
  const notes = cleanNotes(item.notes);
  const keys = sourceKeys(item.notes);
  const sources = keys.length
    ? keys.map((k) => `- \`${k}\` ${SOURCE_NAMES[k] ?? k}`).join('\n')
    : '- none listed yet';

  if (item.type === 'Project') {
    return `## Introduction

:::caution[Draft]
This project has not been written yet. Scope from the curriculum map: ${notes || 'to be defined.'}
:::

## Assignment

<div class="assignment">

1. To be written.

#### Extra credit

- To be written.

</div>

## Submitting your work

Post a link to your artifact in this project's thread in [GitHub Discussions](https://github.com/MuizDebo/open-pm-course/discussions). Review at least two other submissions while you are there.
`;
  }

  return `## Introduction

:::caution[Draft]
This lesson has not been written yet. Scope from the curriculum map: ${notes || 'to be defined.'}
:::

## Lesson overview

This section contains a general overview of topics that you will learn in this lesson.

- To be written.

## Assignment

<div class="assignment">

1. To be written.

</div>

## Additional resources

- To be written.

## Sources this lesson draws on

${sources}
`;
}

function frontmatter(item) {
  const description = cleanNotes(item.notes).replace(/"/g, '\\"').slice(0, 160) || `${item.type}: ${item.title}`;
  return `---
title: "${item.num} ${item.title.replace(/"/g, '\\"')}"
description: "${description}"
---

`;
}

let created = 0;
let kept = 0;
const sidebar = [];

for (const c of courses) {
  const courseDir = `${String(c.num).padStart(2, '0')}-${slug(c.title)}`;
  const group = { label: `${c.num} · ${c.title}`, items: [] };

  const emit = (items, dirParts) => {
    const out = [];
    for (const item of items) {
      const file = `${item.num.replace(/\./g, '-')}-${slug(item.title)}.md`;
      const rel = [...dirParts, file].join('/');
      const abs = path.join(docsDir, ...dirParts, file);
      fs.mkdirSync(path.dirname(abs), { recursive: true });
      // A written lesson may have been converted to .mdx to embed a component. Respect it.
      const existing = [abs, abs.replace(/.md$/, '.mdx')].find((p) => fs.existsSync(p));
      if (existing) {
        kept++;
      } else {
        fs.writeFileSync(abs, frontmatter(item) + lessonBody(item), 'utf8');
        created++;
      }
      const isDraft = fs.readFileSync(existing ?? abs, 'utf8').includes(':::caution[Draft]');
      item.slug = rel.replace(/.md$/, '');
      item.isDraft = isDraft;
      out.push({
        label: `${item.num} ${item.title}`,
        slug: rel.replace(/\.md$/, ''),
        ...(item.type === 'Project' ? { attrs: { 'data-type': 'project' } } : {}),
        ...(isDraft ? { badge: { text: 'Draft', variant: 'caution' } } : {}),
      });
    }
    return out;
  };

  group.items.push(...emit(c.items, [courseDir]));
  for (const s of c.sections) {
    const sectionDir = `${s.num.replace('.', '-')}-${slug(s.title)}`;
    group.items.push({
      label: `${s.num} ${s.title}`,
      collapsed: true,
      items: emit(s.items, [courseDir, sectionDir]),
    });
  }
  sidebar.push(group);
}

const header = `// GENERATED by scripts/scaffold-from-curriculum.mjs from CURRICULUM.md. Do not edit by hand.\n`;
fs.writeFileSync(sidebarFile, header + `export default ${JSON.stringify(sidebar, null, 2)};\n`, 'utf8');

// ---------- course map page ----------

const mapLines = [
  '---',
  'title: Course map',
  'description: Every course, section, lesson and project in the path, on one page.',
  'tableOfContents: false',
  '---',
  '',
  '<!-- GENERATED by scripts/scaffold-from-curriculum.mjs from CURRICULUM.md. Do not edit by hand. -->',
  '',
  'The whole path, in order. Lessons are reading; **projects** are artifacts you make and submit.',
  'Items marked *draft* are outlined but not yet written. Pick one up in',
  '[the contributing guide](https://github.com/MuizDebo/open-pm-course/blob/main/CONTRIBUTING.md) if you can help.',
  '',
];
const mapItem = (item) =>
  `- [${item.num} ${item.title}](${BASE}/${item.slug}/)` +
  (item.type === 'Project' ? ' **Project**' : '') +
  (item.isDraft ? ' *draft*' : '');
for (const c of courses) {
  mapLines.push(`## ${c.num} · ${c.title}`, '');
  for (const item of c.items) mapLines.push(mapItem(item));
  if (c.items.length) mapLines.push('');
  for (const s of c.sections) {
    mapLines.push(`### ${s.num} ${s.title}`, '');
    for (const item of s.items) mapLines.push(mapItem(item));
    mapLines.push('');
  }
}
fs.writeFileSync(mapFile, mapLines.join('\n'), 'utf8');

const total = courses.reduce(
  (n, c) => n + c.items.length + c.sections.reduce((m, s) => m + s.items.length, 0),
  0,
);
console.log(`${courses.length} courses, ${total} lessons and projects. Created ${created}, kept ${kept}. Sidebar and course map written.`);
