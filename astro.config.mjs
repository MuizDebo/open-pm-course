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
      customCss: ['./src/styles/custom.css'],
    }),
  ],
});
