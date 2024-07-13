import DefaultTheme from 'vitepress/theme'
import './custom.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import BilibiliPlayer from './components/BilibiliPlayer.vue';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(ElementPlus)
    app.component('BilibiliPlayer', BilibiliPlayer)
  }
}