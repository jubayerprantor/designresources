import { defineConfig } from 'vitepress'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

function getRoundedResourceCount(step = 50) {
  try {
    const docsDir = path.resolve(__dirname, '..')
    const files = fs.readdirSync(docsDir).filter(f => f.endsWith('.md') && !['index.md', 'contributing.md', 'credits.md', 'sources.md'].includes(f))
    let total = 0
    for (const f of files) {
      const lines = fs.readFileSync(path.join(docsDir, f), 'utf8').split('\n')
      for (const l of lines) {
        const trimmed = l.trim()
        if (trimmed.startsWith('|') && trimmed.endsWith('|') && !trimmed.includes(':---') && !trimmed.toLowerCase().includes('| resource |') && !trimmed.toLowerCase().includes('| name |')) {
          total++
        }
      }
    }
    const rounded = Math.floor(total / step) * step
    return `${rounded.toLocaleString()}+`
  } catch {
    return '3,900+'
  }
}

const dynamicCount = getRoundedResourceCount(50)

export default defineConfig({
  title: "Design Resources",
  base: '/designresources/',
  description: `A curated collection of ${dynamicCount} hand-picked design resources, assets, and frameworks for graphic designers, UI/UX designers, developers, and creatives.`,
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
    ['meta', { property: 'og:description', content: `Curated collection of ${dynamicCount} hand-picked design tools, assets, and frameworks for creatives.` }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'Design Resources Hub | GiveBack2People' }],
    ['meta', { name: 'twitter:description', content: `Curated collection of ${dynamicCount} hand-picked design tools, assets, and frameworks for creatives.` }],
    ['meta', { name: 'twitter:image', content: 'https://giveback2people.github.io/designresources/og-image.png' }]
  ],
  transformPageData(pageData) {
    if (pageData.relativePath === 'index.md' && pageData.frontmatter?.hero) {
      pageData.frontmatter.hero.tagline = `${dynamicCount} hand-picked tools, assets, and references for designers and developers — all in one place.`
    }
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Top Hubs', link: '/top-hubs' },
      { text: 'Marketplaces', link: '/marketplaces' },
      { text: 'Contribute', link: '/contributing' },
      { text: 'Feedback', link: 'https://github.com/GiveBack2People/designresources/issues' }
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
      message: 'A curated collection of design resources powered by <a href="https://giveback2people.github.io/" target="_blank" rel="noreferrer">GiveBack2People</a>. Open to contributions.',
      copyright: 'Copyright © 2026-present <a href="https://github.com/GiveBack2People" target="_blank" rel="noreferrer">GiveBack2People</a> & Contributors'
    }
  }
})
