import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import CustomHero from './components/CustomHero.vue'
import './custom.css'

console.log("THEME_LOAD_LOG: Custom theme index.js executed!");

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-hero-image': () => h(CustomHero)
    })
  }
}
