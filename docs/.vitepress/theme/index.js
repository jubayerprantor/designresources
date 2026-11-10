import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import CustomHero from './components/CustomHero.vue'
import ResourceTableFilter from './components/ResourceTableFilter.vue'
import BanglaFontShowcase from './components/BanglaFontShowcase.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-hero-image': () => h(CustomHero),
      'doc-before': () => h(ResourceTableFilter)
    })
  },
  enhanceApp({ app }) {
    app.component('BanglaFontShowcase', BanglaFontShowcase)
  }
}
