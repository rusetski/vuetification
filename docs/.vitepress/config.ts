import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Vuetification',
  description: 'Vuetification',
  base: '/vuetification/',
  themeConfig: {
    logo: '/images/logo.svg',
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Docs',
        items: [
          { text: 'Getting Started', link: '/start/introduction' },
          { text: 'Components', link: '/composables/use-interval' },
          { text: 'Directives', link: '/composables/use-interval' },
          { text: 'Composables', link: '/composables/use-interval' }
        ]
      }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        collapsed: true,
        items: [{ text: 'Introduction', link: '/start/introduction' }]
      },
      {
        text: 'Components',
        collapsed: true,
        items: [{ text: 'Toggle', link: '/components/toggle' }]
      },
      {
        text: 'Directives',
        collapsed: true,
        items: []
      },
      {
        text: 'Composables',
        collapsed: true,
        items: []
      }
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/rusetski/vuetification' }]
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
    ru: {
      label: 'Русский',
      lang: 'ru'
    }
  },
  outDir: '../../rusetski.github.io/vuetification'
});
