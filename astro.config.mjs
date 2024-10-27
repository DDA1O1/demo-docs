// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  integrations: [
      starlight({
          title: 'My Docs',
          logo: {
              src: './src/assets/9.png',
              // replacesTitle: true,
          },
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
                  label: 'Reference',
                  autogenerate: { directory: 'reference' },
              },
          ],
      }),
	],

  output: 'server',
  adapter: vercel({
	webAnalytics: { enabled: true }
  }),
});