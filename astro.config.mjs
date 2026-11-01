// @ts-check
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sidebar from './src/sidebar.generated.mjs';
import remarkCrossrefs from './src/plugins/remark-crossrefs.mjs';
import rehypeNewTab from './src/plugins/rehype-new-tab.mjs';
import remarkIllustrations from './src/plugins/remark-illustrations.mjs';

// Change this once to your GitHub username. Everything else derives from it.
const GITHUB_USER = 'MuizDebo';
const REPO = 'open-pm-course';
const REPO_URL = `https://github.com/${GITHUB_USER}/${REPO}`;

// Analytics: paste your GoatCounter code here (the part before .goatcounter.com) to switch it on.
// Empty means no analytics script is loaded at all. See src/content/docs/privacy.md.
const GOATCOUNTER_CODE = 'open-pm-course';

// Pages that are navigation, not lessons: no auto cross-links, links open in the same tab.
const NAV_PAGES = ['map', 'index'];

export default defineConfig({
  site: `https://${GITHUB_USER}.github.io`,
  base: `/${REPO}`,
  markdown: {
    remarkPlugins: [
      [remarkIllustrations, { dir: fileURLToPath(new URL('./src/illustrations/', import.meta.url)) }],
      [remarkCrossrefs, { sidebar, base: `/${REPO}`, skipSlugs: NAV_PAGES }],
    ],
    rehypePlugins: [[rehypeNewTab, { skipSlugs: NAV_PAGES }]],
  },
  integrations: [
    starlight({
      title: 'Open PM Course',
      description:
        'A free, open-source product management curriculum, from first principles to AI product management.',
      social: [{ icon: 'github', label: 'GitHub', href: REPO_URL }],
      editLink: { baseUrl: `${REPO_URL}/edit/main/` },
      head: GOATCOUNTER_CODE
        ? [
            {
              tag: 'script',
              attrs: { 'data-goatcounter': `https://${GOATCOUNTER_CODE}.goatcounter.com/count`, async: true, src: '//gc.zgo.at/count.js' },
            },
            { tag: 'script', attrs: { src: `/${REPO}/analytics.js`, defer: true } },
          ]
        : [],
      lastUpdated: true,
      pagination: true,
      sidebar,
      components: {
        // Sidebar is a closed-by-default drawer showing only the current course.
        PageFrame: './src/components/PageFrame.astro',
        Sidebar: './src/components/Sidebar.astro',
        // Light mode by default; Light and Dark only, no system-follow option.
        ThemeProvider: './src/components/ThemeProvider.astro',
        ThemeSelect: './src/components/ThemeSelect.astro',
      },
      customCss: [
        // Inter, self-hosted. Weights used by body, emphasis, headings and buttons.
        '@fontsource/inter/400.css',
        '@fontsource/inter/500.css',
        '@fontsource/inter/600.css',
        '@fontsource/inter/700.css',
        './src/styles/custom.css',
      ],
    }),
  ],
});
