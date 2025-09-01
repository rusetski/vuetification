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
          { text: 'Getting Started', link: '/start/quick-start' },
          { text: 'Components', link: '/components/toggle' },
          { text: 'Directives', link: '/directives/click-outside' },
          { text: 'Composables', link: '/composables/interval' }
        ]
      }
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        collapsed: true,
        items: [
          // { text: 'Introduction', link: '/start/introduction' },
          { text: 'Quick Start', link: '/start/quick-start' }
        ]
      },
      {
        text: 'Components',
        collapsed: true,
        items: [
          { text: 'Toggle', link: '/components/toggle' },
          { text: 'Notify', link: '/components/notify' },
          { text: 'Btn', link: '/components/btn' },
          { text: 'Tabs', link: '/components/tabs' }
        ]
      },
      {
        text: 'Directives',
        collapsed: true,
        items: [{ text: 'Click outside', link: '/directives/click-outside' }]
      },
      {
        text: 'Composables',
        collapsed: true,
        items: [
          { text: 'Interval', link: '/composables/interval' },
          { text: 'Keyboard', link: '/composables/keyboard' }
        ]
      }
      // {
      //   text: 'Examples',
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' }
      //   ]
      // }
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
