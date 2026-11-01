// Inlines course illustrations so they follow the site's light and dark themes.
//
// In a lesson, write an ordinary Markdown image whose path starts with "illustrations/":
//
//   ![Alt text describing the content](illustrations/I-01-four-kinds-of-work.svg "Caption.")
//
// The SVG file is read from src/illustrations/ and placed in the page as inline markup inside a
// <figure>, with the title as its caption and the alt text as its accessible label. Inline SVG
// can use the page's CSS variables (--ill-*, defined in src/styles/custom.css), which an <img>
// cannot, so the same drawing works in both themes.

import fs from 'node:fs';
import path from 'node:path';

const escapeHtml = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export default function remarkIllustrations({ dir }) {
  const cache = new Map();
  const load = (name) => {
    if (!cache.has(name)) {
      const file = path.join(dir, path.basename(name));
      if (!fs.existsSync(file)) throw new Error(`Illustration not found: ${file}`);
      cache.set(name, fs.readFileSync(file, 'utf8'));
    }
    return cache.get(name);
  };

  const render = (image) => {
    const alt = image.alt ?? '';
    let svg = load(image.url.replace(/^illustrations\//, ''))
      .replace(/<\?xml[^>]*>\s*/g, '')
      .replace(/<!--[\s\S]*?-->/g, '')
      .trim();
    // Size comes from CSS; the viewBox keeps the proportions.
    svg = svg.replace(/<svg\b([^>]*)>/, (_, attrs) => {
      const cleaned = attrs.replace(/\s(width|height|role|aria-label)="[^"]*"/g, '');
      return `<svg${cleaned} role="img" aria-label="${escapeHtml(alt)}" focusable="false">`;
    });
    const caption = image.title ? `<figcaption>${escapeHtml(image.title)}</figcaption>` : '';
    return `<figure class="illustration not-content">${svg}${caption}</figure>`;
  };

  return (tree) => {
    const visit = (node) => {
      if (!node.children) return;
      node.children = node.children.map((child) => {
        // A paragraph that holds only an illustration becomes the figure itself.
        if (
          child.type === 'paragraph' &&
          child.children.length === 1 &&
          child.children[0].type === 'image' &&
          child.children[0].url.startsWith('illustrations/')
        ) {
          return { type: 'html', value: render(child.children[0]) };
        }
        visit(child);
        return child;
      });
    };
    visit(tree);
  };
}
