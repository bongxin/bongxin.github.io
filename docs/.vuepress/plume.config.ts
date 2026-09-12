import { defineThemeConfig } from 'vuepress-theme-plume'
import collections from './collections'
import navbar from './navbar'

export default defineThemeConfig({
  logo: '/logo.svg',
  // https://theme-plume.vuejs.press/config/theme/ — 深色导航栏用白色 logo
  logoDark: '/logo-dark.svg',
  appearance: true,
  profile: {
    avatar: '/logo.svg',
    name: 'BongXin',
    description: '个人的知识库',
    circle: true,
  },
  navbar,
  collections,
  social: [
    { icon: 'github', link: 'https://github.com/bongxin/bongxin.github.io' },
  ],
  navbarSocialInclude: ['github'],
  footer: {
    message:
      '<a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">粤ICP备2022129905号-1</a>',
    copyright: `版权所有 © 2019-${new Date().getFullYear()} BongXin`,
  },
  editLinkText: '在 GitHub 上编辑此页',
  prevPageText: '上一篇',
  nextPageText: '下一篇',
  outline: [2, 3],
})
