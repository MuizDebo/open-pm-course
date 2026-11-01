// Turns references to other parts of the course into links, at build time.
//
//   "lesson 5.3.2", "project 3.1.4", "pack 9.2", "lesson 6.4"   -> that lesson's page
//   "section 7.3"                                               -> that section on the course map
//   "Course 7", "Courses 4 to 7"                                -> that course on the course map
//   a bare three-part number such as "3.1.4"                    -> that lesson's page
//
// Lists after a keyword are linked too: "lessons 6.2 and 6.4", "projects 3.1.4, 3.2.5 and 3.3.4".
// Two-part numbers are only linked after a keyword, so "2.5 hours" stays plain text.
// Headings, existing links, code and the page's own number are never linked.
// The lesson numbers come from the generated sidebar, which comes from CURRICULUM.md.

import path from 'node:path';

const SKIP = new Set(['link', 'linkReference', 'heading', 'inlineCode', 'code', 'html', 'definition', 'yaml', 'toml']);

// Same rules as the heading-id slugger: lower case, drop punctuation, spaces to hyphens.
const headingId = (text) =>
  text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s-]/gu, '')
    .replace(/\s/g, '-');

function buildIndex(sidebar, base) {
  const lessons = new Map(); // "3.1.4" -> { href, slug, title }
  const sections = new Map(); // "7.3" -> href
  const courses = new Map(); // "7" -> href
  const mapHref = `${base}/map/`;

  const walk = (items) => {
    for (const item of items) {
      const num = item.label.match(/^(\d+(?:\.\d+)*)\s/)?.[1];
      if (item.slug && num) {
        lessons.set(num, { href: `${base}/${item.slug}/`, slug: item.slug, title: item.label.slice(num.length + 1) });
      } else if (item.items) {
        const course = item.label.match(/^(\d+) · /)?.[1];
        if (course) courses.set(course, `${mapHref}#${headingId(item.label)}`);
        else if (num) sections.set(num, `${mapHref}#${headingId(item.label)}`);
        walk(item.items);
      }
    }
  };
  walk(sidebar);
  return { lessons, sections, courses };
}

// A keyword, then one or more numbers joined by commas, "and", "or" or "to".
const NUM = String.raw`\d+(?:\.\d+){0,2}`;
const LIST_RE = new RegExp(
  String.raw`\b(lessons?|projects?|sections?|packs?|courses?)\s+(${NUM}(?:(?:\s*,\s*(?:and\s+|or\s+)?|\s+(?:and|or|to)\s+)${NUM})*)`,
  'gi',
);
const BARE_RE = /(?<![\d.])\d\.\d\.\d(?![\d]|\.\d)/g;

export default function remarkCrossrefs({ sidebar, base, skipSlugs = [] }) {
  const index = buildIndex(sidebar, base);

  const resolve = (keyword, num) => {
    const k = keyword?.toLowerCase().replace(/s$/, '');
    if (k === 'course') return /^\d+$/.test(num) ? index.courses.get(num) && { href: index.courses.get(num) } : null;
    if (k === 'section') return index.sections.has(num) ? { href: index.sections.get(num) } : index.lessons.get(num) ?? null;
    if (k) return index.lessons.get(num) ?? (index.sections.has(num) ? { href: index.sections.get(num) } : null);
    return /^\d\.\d\.\d$/.test(num) ? index.lessons.get(num) ?? null : null;
  };

  return (tree, file) => {
    const docsRoot = path.join(file.cwd ?? process.cwd(), 'src', 'content', 'docs');
    const rel = file.path ? path.relative(docsRoot, file.path).replace(/\\/g, '/').replace(/\.mdx?$/, '') : '';
    if (skipSlugs.includes(rel)) return;

    const splitText = (value) => {
      // Collect [start, end, target] spans to link, without overlaps.
      const spans = [];
      for (const m of value.matchAll(LIST_RE)) {
        const listStart = m.index + m[0].length - m[2].length;
        let first = true;
        for (const n of m[2].matchAll(new RegExp(NUM, 'g'))) {
          const target = resolve(m[1], n[0]);
          // The first link in a list carries its keyword ("Course 7", "lesson 3.2.4") so the
          // click target is a phrase, not a lone digit.
          if (target) spans.push([first ? m.index : listStart + n.index, listStart + n.index + n[0].length, target]);
          first = false;
        }
      }
      for (const n of value.matchAll(BARE_RE)) {
        if (spans.some(([s, e]) => n.index < e && n.index + n[0].length > s)) continue;
        const target = resolve(null, n[0]);
        if (target) spans.push([n.index, n.index + n[0].length, target]);
      }
      if (!spans.length) return null;
      spans.sort((a, b) => a[0] - b[0]);

      const out = [];
      let at = 0;
      for (const [s, e, target] of spans) {
        if (s < at) continue;
        if (target.slug && target.slug === rel) continue; // never link a page to itself
        if (s > at) out.push({ type: 'text', value: value.slice(at, s) });
        out.push({
          type: 'link',
          url: target.href,
          title: target.title ?? null,
          data: { hProperties: { className: ['xref'] } },
          children: [{ type: 'text', value: value.slice(s, e) }],
        });
        at = e;
      }
      if (!out.length) return null;
      if (at < value.length) out.push({ type: 'text', value: value.slice(at) });
      return out;
    };

    const visit = (node) => {
      if (!node.children || SKIP.has(node.type)) return;
      const next = [];
      for (const child of node.children) {
        if (child.type === 'text') {
          const replaced = splitText(child.value);
          if (replaced) next.push(...replaced);
          else next.push(child);
        } else {
          visit(child);
          next.push(child);
        }
      }
      node.children = next;
    };
    visit(tree);
  };
}
