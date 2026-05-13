import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Design Resources",
  description: "A curated collection of design resources for graphic designers, UI/UX designers, developers, and creatives.",
  lang: 'en-US',
  cleanUrls: true,
  head: [
    ['meta', { property: 'og:image', content: '/logo.png' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Design Resources' }],
    ['meta', { property: 'og:description', content: '3,500+ hand-picked tools, assets, and references for designers and developers.' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: '/logo.png' }]
  ],
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'GitHub', link: 'https://github.com/jubayerprantor/designresources' },
      { text: 'Contribute', link: '/contributing' },
      { text: 'Sources', link: '/sources' }
    ],
    search: {
      provider: 'local'
    },
    sidebar: [
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
      { icon: 'github', link: 'https://github.com/jubayerprantor/designresources' }
    ],
    footer: {
      message: 'A personal collection of design resources. Open to contributions.',
      copyright: 'Copyright © 2026-present Jubayer Prantor & Contributors'
    }
  }
})
