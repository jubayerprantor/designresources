import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Design Resources",
  base: '/designresources/',
  description: "A curated collection of 4,000+ hand-picked design resources, assets, and frameworks for graphic designers, UI/UX designers, developers, and creatives.",
  lang: 'en-US',
  cleanUrls: true,
  appearance: 'dark',
  sitemap: {
    hostname: 'https://giveback2people.github.io/designresources/'
  },
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/designresources/logo.svg' }],
    ['link', { rel: 'alternate icon', href: '/designresources/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#8b5cf6' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en_US' }],
    ['meta', { property: 'og:title', content: 'Design Resources Hub | GiveBack2People' }],
    ['meta', { property: 'og:site_name', content: 'Design Resources Hub' }],
    ['meta', { property: 'og:image', content: 'https://giveback2people.github.io/designresources/og-image.png' }],
    ['meta', { property: 'og:url', content: 'https://giveback2people.github.io/designresources/' }],
    ['meta', { property: 'og:description', content: 'Curated collection of 4,000+ hand-picked design tools, assets, and frameworks for creatives.' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'Design Resources Hub | GiveBack2People' }],
    ['meta', { name: 'twitter:description', content: 'Curated collection of 4,000+ hand-picked design tools, assets, and frameworks for creatives.' }],
    ['meta', { name: 'twitter:image', content: 'https://giveback2people.github.io/designresources/og-image.png' }]
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Top Hubs', link: '/top-hubs' },
      { text: 'Marketplaces', link: '/marketplaces' },
      { text: 'Contribute', link: '/contributing' },
      { text: 'Contact', link: 'mailto:contact@designresources.eu.cc' }
    ],
    search: {
      provider: 'local'
    },
    sidebar: [
      {
        text: 'Featured',
        collapsed: false,
        items: [
          { text: 'Top Global Hubs', link: '/top-hubs' },
          { text: 'Creative Marketplaces', link: '/marketplaces' },
        ]
      },
      {
        text: 'Inspiration',
        collapsed: false,
        items: [
          { text: 'Design Inspiration', link: '/design-inspiration' },
        ]
      },
      {
        text: 'Assets & Media',
        collapsed: false,
        items: [
          { text: 'Stock Photos',             link: '/stock-photos' },
          { text: 'Stock Video & Music',      link: '/stock-video-music' },
          { text: 'Vectors & Illustrations',  link: '/vectors-illustrations' },
          { text: 'Icons, Logos & Animations',link: '/icons-logos' },
          { text: 'Mockups & Frames',         link: '/mockups' },
          { text: 'Design Add-ons',           link: '/design-addons' },
          { text: '3D, Architecture & Motion',link: '/3d-architecture' },
        ]
      },
      {
        text: 'Design',
        collapsed: false,
        items: [
          { text: 'Typography & Fonts',       link: '/typography' },
          { text: 'Colors & Gradients',       link: '/colors-gradients' },
          { text: 'Design Tools & AI',        link: '/design-tools-ai' },
        ]
      },
      {
        text: 'Development',
        collapsed: false,
        items: [
          { text: 'Code & Frameworks',        link: '/code-frameworks' },
        ]
      },
      {
        text: 'Community',
        collapsed: false,
        items: [
          { text: 'Learning & Community',     link: '/learning-community' },
        ]
      },
      {
        text: 'About',
        collapsed: false,
        items: [
          { text: 'How to Contribute',       link: '/contributing' },
          { text: 'Sources & Attribution',   link: '/sources' },
          { text: 'Credits & Design',        link: '/credits' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/GiveBack2People/designresources' }
    ],
    footer: {
      message: 'A curated collection of design resources powered by GiveBack2People. Open to contributions.',
      copyright: 'Copyright © 2026-present GiveBack2People & Contributors'
    }
  }
})
