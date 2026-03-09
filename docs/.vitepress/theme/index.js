import DefaultTheme from 'vitepress/theme';
import './style/custom.css';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import BilibiliPlayer from './components/BilibiliPlayer.vue';

import { inBrowser } from 'vitepress';
import busuanzi from 'busuanzi.pure.js'; // 引入不蒜子
import DataPanel from './components/DataPanel.vue';

import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import { useData, useRoute } from 'vitepress';
import { toRefs } from 'vue';

export default {
  ...DefaultTheme,
  enhanceApp({ app, router }) {
    app.use(ElementPlus);
    app.component('BilibiliPlayer', BilibiliPlayer);
    // === 🔥 不蒜子统计核心逻辑 start ===
    if (inBrowser) {
      // 1. 页面首次加载时执行
      busuanzi.fetch();

      // 2. 监听路由变化 (VitePress SPA 跳转)
      // 当路由改变后，重新请求统计接口
      router.onAfterRouteChanged = (to) => {
        // 延迟一点点执行，确保 DOM 已经更新，虽然 fetch 主要是发请求，但习惯上放在后面
        setTimeout(() => {
          busuanzi.fetch();
        }, 100);
      };
    }
    app.component('DataPanel', DataPanel);
  },
  setup() {
    // Get frontmatter and route
    const { frontmatter } = toRefs(useData());
    const route = useRoute();

    // Obtain configuration from: https://giscus.app/
    giscusTalk(
      {
        repo: 'bongxin/bongxin.github.io',
        repoId: 'MDEwOlJlcG9zaXRvcnkzNDM3MTg2Njg=',
        category: 'General', // default: `General`
        categoryId: 'DIC_kwDOFHy7DM4C4AYm',
        mapping: 'pathname', // default: `pathname`
        inputPosition: 'top', // default: `top`
        lang: 'zh-CN', // default: `zh-CN`
        // i18n setting (Note: This configuration will override the default language set by lang)
        // Configured as an object with key-value pairs inside:
        // [your i18n configuration name]: [corresponds to the language pack name in Giscus]
        locales: {
          'zh-Hans': 'zh-CN',
          'en-US': 'en',
        },
        homePageShowComment: false, // Whether to display the comment area on the homepage, the default is false
        lightTheme: 'light', // default: `light`
        darkTheme: 'transparent_dark', // default: `transparent_dark`
        // ...
      },
      {
        frontmatter,
        route,
      },
      // Whether to activate the comment area on all pages.
      // The default is true, which means enabled, this parameter can be ignored;
      // If it is false, it means it is not enabled.
      // You can use `comment: true` preface to enable it separately on the page.
      true,
    );
  },
};
