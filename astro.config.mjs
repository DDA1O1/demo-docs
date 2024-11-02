// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import vercel from '@astrojs/vercel/serverless';
import speedInsights from '@vercel/speed-insights/astro';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'My Docs',
      logo: {
        src: './src/assets/9.png',
        // replacesTitle: true,
      },
      customCss: [
        './src/styles/custom.css',
      ],
      social: {
        github: 'https://github.com/DDA1O1',
        twitter: 'https://twitter.com/withastro',
      },
      editLink: {
        baseUrl: 'https://github.com/DDA101/docs/',
      },
      // Configure the sidebar.
      sidebar: [
        {
          label: 'Guides',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Example Guide', slug: 'guides/example' },
          ],
        },
        {
          label: 'Stars',
          items: [
            // A link with a "Supergiant" badge.
            {
              slug: 'stars/persei',
              badge: 'Supergiant',
            },
            // A link with a yellow "Stub" badge.
            {
              slug: 'stars/sirius',
              badge: { text: 'Stub', variant: 'caution' },
            },
            {
              slug: 'stars/anime',
              badge: { text: 'Stub', variant: 'caution' },
            },
          ],
        },
        {
          label: 'Moons',
          badge: 'Outdated',
          autogenerate: { directory: 'moons' },
        },
        {
          label: 'reference',
          autogenerate: { directory: 'reference' },
        },
        {
          label: 'code blocks',
          autogenerate: { directory: 'code blocks' },
        },
        {
          label: 'Resources',
          items: [
            // An external link to the NASA website opening in a new tab.
            {
              label: 'NASA',
              link: 'https://www.nasa.gov/',
              attrs: { target: '_blank', style: 'font-style: italic' },
            },
          ],
        },
      ],
    }),
    speedInsights(),
  ],
  output: 'server',
  adapter: vercel({
    webAnalytics: { enabled: true },
    speedInsights: { enabled: true },  // Enable Speed Insights explicitly
  }),
});