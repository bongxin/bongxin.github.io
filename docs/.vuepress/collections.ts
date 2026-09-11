import { defineCollections } from 'vuepress-theme-plume'

export default defineCollections([
  { type: 'doc', dir: 'dev', title: '开发', sidebar: 'auto', autoFrontmatter: false },
  { type: 'doc', dir: 'design', title: '设计', sidebar: 'auto', autoFrontmatter: false },
  { type: 'doc', dir: 'ai', title: 'AI', sidebar: 'auto', autoFrontmatter: false },
  { type: 'doc', dir: 'mgmt', title: '管理', sidebar: 'auto', autoFrontmatter: false },
  { type: 'doc', dir: 'ops', title: '运维', sidebar: 'auto', autoFrontmatter: false },
  { type: 'doc', dir: 'operation', title: '运营', sidebar: 'auto', autoFrontmatter: false },
  { type: 'doc', dir: 'music', title: '音乐', sidebar: 'auto', autoFrontmatter: false },
  { type: 'doc', dir: 'others', title: '其他', sidebar: 'auto', autoFrontmatter: false },
  { type: 'doc', dir: 'about', title: '关于', sidebar: 'auto', autoFrontmatter: false },
  { type: 'doc', dir: 'write', title: '写作', sidebar: 'auto', autoFrontmatter: false },
])
