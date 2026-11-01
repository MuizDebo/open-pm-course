// Makes links inside lesson content open in a new tab, so a learner can follow a reading or a
// cross-reference and come straight back to the lesson. Site navigation (sidebar, previous and
// next, header) is not lesson content and is not touched. In-page anchors are left alone, and
// pages listed in skipSlugs (the course map, which is navigation) keep same-tab links.
// Each new-tab link gets visually hidden text so screen-reader users know what will happen.

import path from 'node:path';

export default function rehypeNewTab({ skipSlugs = [] } = {}) {
  return (tree, file) => {
    const docsRoot = path.join(file.cwd ?? process.cwd(), 'src', 'content', 'docs');
    const rel = file.path ? path.relative(docsRoot, file.path).replace(/\\/g, '/').replace(/\.mdx?$/, '') : '';
    if (skipSlugs.includes(rel)) return;

    const visit = (node) => {
      if (node.type === 'element' && node.tagName === 'a') {
        const href = String(node.properties?.href ?? '');
        if (href && !href.startsWith('#') && !href.startsWith('mailto:')) {
          node.properties.target = '_blank';
          node.properties.rel = ['noopener', 'noreferrer'];
          node.children = [
            ...(node.children ?? []),
            {
              type: 'element',
              tagName: 'span',
              properties: { className: ['sr-only'] },
              children: [{ type: 'text', value: ' (opens in a new tab)' }],
            },
          ];
        }
      }
      for (const child of node.children ?? []) visit(child);
    };
    visit(tree);
  };
}
