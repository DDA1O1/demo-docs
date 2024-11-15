// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import vercel from '@astrojs/vercel/serverless';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    starlight({
      title: 'My Docs',    
      customCss: [
        './src/styles/custom.css',
      ],
      social: {
        github: 'https://github.com/DDA1O1',
        twitter: 'https://twitter.com/withastro',
      },
      editLink: {
        baseUrl: 'https://github.com/DDA1O1/docs/tree/main/',
      },
      sidebar: [
        {
          label: 'Guides',
          // autogenerate: { directory: 'guides' },
          items: [
            
            { label: 'Writing Docs', slug: 'guides/ab' },
            { label: 'Example Guide', slug: 'guides/example' },

          ],
        },
        {
          label: 'animation',
          autogenerate: { directory: 'animation' },
        },
        {
          label: 'Stars',
          items: [
            {
              slug: 'stars/persei',
              badge: 'Supergiant',
            },
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
            {
              label: 'NASA',
              link: 'https://www.nasa.gov/',
              attrs: { target: '_blank', style: 'font-style: italic' },
            },
          ],
        },
      ],
    }),
  ],
  output: 'server',
  adapter: vercel({
    webAnalytics: { enabled: true },
    speedInsights: { enabled: true },
  }),
});
