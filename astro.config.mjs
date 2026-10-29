// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sidebar from './src/sidebar.generated.mjs';

// Change this once to your GitHub username. Everything else derives from it.
const GITHUB_USER = 'MuizDebo';
const REPO = 'open-pm-course';
const REPO_URL = `https://github.com/${GITHUB_USER}/${REPO}`;

export default defineConfig({
  site: `https://${GITHUB_USER}.github.io`,
  base: `/${REPO}`,
  integrations: [
    starlight({
      title: 'Open PM Course',
      description:
        'A free, open-source product management curriculum, from first principles to AI product management.',
      social: [{ icon: 'github', label: 'GitHub', href: REPO_URL }],
      editLink: { baseUrl: `${REPO_URL}/edit/main/` },
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
