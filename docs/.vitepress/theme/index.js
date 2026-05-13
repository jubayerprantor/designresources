import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import CustomHero from './components/CustomHero.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-hero-image': () => h(CustomHero)
    })
  }
}
