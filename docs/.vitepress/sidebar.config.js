// docs/.vitepress/sidebar.config.js

export const sidebarConfigs = [
  // --- 1. 业务 (Business) ---

  // --- 2. 开发 (Development)：按子模块使用不同侧边栏 ---
  // 更具体的 resolvePath 放前面，优先匹配
  {
    documentRootPath: '/docs',
    scanStartPath: 'dev/web/vue',
    resolvePath: '/dev/web/vue/',
    collapsed: null,
    capitalizeFirst: false,
    useTitleFromFileHeading: true, // 从文件的标题中获取标题
    useFolderTitleFromIndexFile: true,
    useFolderLinkFromIndexFile: true,
    sortMenusByFrontmatterOrder: true,
    frontmatterOrderDefaultValue: 999, // 未设置 order 的项排到后面，保证 Vue 3 根 index 排第一
    includeRootIndexFile: true, // 把 Vue 根目录 index 也显示为侧边栏一项
  },
  {
    documentRootPath: '/docs',
    scanStartPath: 'dev/java',
    resolvePath: '/dev/java/',
    collapsed: null,
    capitalizeFirst: false,
    useTitleFromFileHeading: true,
    useFolderTitleFromIndexFile: true,
    useFolderLinkFromIndexFile: true,
    sortMenusByFrontmatterOrder: true,
  },
  {
    documentRootPath: '/docs',
    scanStartPath: 'dev/php',
    resolvePath: '/dev/php/',
    collapsed: null,
    capitalizeFirst: false,
    useTitleFromFileHeading: true,
    useFolderTitleFromIndexFile: true,
    useFolderLinkFromIndexFile: true,
    sortMenusByFrontmatterOrder: true, //按照frontmatter的order排序
  },
  {
    documentRootPath: '/docs',
    scanStartPath: 'dev/framework',
    resolvePath: '/dev/framework/',
    collapsed: null,
    capitalizeFirst: false,
    useTitleFromFileHeading: true,
    useFolderTitleFromIndexFile: true,
    useFolderLinkFromIndexFile: true,
    sortMenusByFrontmatterOrder: true,
  },
  {
    documentRootPath: '/docs',
    scanStartPath: 'dev/npm',
    resolvePath: '/dev/npm/',
    collapsed: null,
    capitalizeFirst: false,
    useTitleFromFileHeading: true,
    useFolderTitleFromIndexFile: true,
    useFolderLinkFromIndexFile: true,
    sortMenusByFrontmatterOrder: true,
  },

  // 兜底：dev 下其他路径（如 npm）仍用整棵 dev 树
  {
    documentRootPath: '/docs',
    scanStartPath: 'dev',
    resolvePath: '/dev/',
    collapsed: null,
    capitalizeFirst: false,
    useTitleFromFileHeading: true,
    useFolderTitleFromIndexFile: true,
    useFolderLinkFromIndexFile: true,
    sortMenusByFrontmatterOrder: true,
  },

  // --- 3. 设计 (Design) ---
  // 对应导航栏：设计技能 (包含 Figma, UML 等)
  {
    documentRootPath: '/docs',
    scanStartPath: 'design/figma',
    resolvePath: '/design/figma/',
    collapsed: null,
    capitalizeFirst: false,
    useTitleFromFileHeading: true,
    useFolderTitleFromIndexFile: true,
    useFolderLinkFromIndexFile: true,
    sortMenusByFrontmatterOrder: true,
    includeRootIndexFile: true, // 把 Figma 根目录 index 也显示为侧边栏一项
  },
  {
    documentRootPath: '/docs',
    scanStartPath: 'design/uml',
    resolvePath: '/design/uml/',
    collapsed: null,
    capitalizeFirst: false,
    useTitleFromFileHeading: true,
    useFolderTitleFromIndexFile: true,
    useFolderLinkFromIndexFile: true,
    sortMenusByFrontmatterOrder: true,
  },
  {
    documentRootPath: '/docs',
    scanStartPath: 'design',
    resolvePath: '/design/',
    collapsed: null,
    capitalizeFirst: false,
    useTitleFromFileHeading: true,
    useFolderTitleFromIndexFile: true,
    useFolderLinkFromIndexFile: true,
    sortMenusByFrontmatterOrder: true,
  },

  // --- 4. 管理 (Management) ---
  {
    documentRootPath: '/docs',
    scanStartPath: 'mgmt',
    resolvePath: '/mgmt/',
    collapsed: null,
    capitalizeFirst: false,
    useTitleFromFileHeading: true,
    useFolderTitleFromIndexFile: true,
    useFolderLinkFromIndexFile: true,
    sortMenusByFrontmatterOrder: true,
    includeRootIndexFile: true, //
  },
  {
    documentRootPath: '/docs',
    scanStartPath: 'mgmt/pmp',
    resolvePath: '/mgmt/pmp/',
    collapsed: null,
    capitalizeFirst: false,
    useTitleFromFileHeading: true,
    useFolderTitleFromIndexFile: true,
    useFolderLinkFromIndexFile: true,
    sortMenusByFrontmatterOrder: true,
    includeRootIndexFile: true, //
  },
  {
    documentRootPath: '/docs',
    scanStartPath: 'mgmt/csmm',
    resolvePath: '/mgmt/csmm/',
    collapsed: null,
    capitalizeFirst: false,
    useTitleFromFileHeading: true,
    useFolderTitleFromIndexFile: true,
    useFolderLinkFromIndexFile: true,
    sortMenusByFrontmatterOrder: true,
    includeRootIndexFile: true, //
  },
  {
    documentRootPath: '/docs',
    scanStartPath: 'mgmt/ispm',
    resolvePath: '/mgmt/ispm/',
    collapsed: null,
    capitalizeFirst: false,
    useTitleFromFileHeading: true,
    useFolderTitleFromIndexFile: true,
    useFolderLinkFromIndexFile: true,
    sortMenusByFrontmatterOrder: true,
    includeRootIndexFile: true, //
  },

  // --- 5. 运维 (DevOps) ---
  // 对应导航栏：运维技能
  {
    documentRootPath: '/docs',
    scanStartPath: 'ops/linux',
    resolvePath: '/ops/linux/',
    collapsed: null,
    capitalizeFirst: false,
    useTitleFromFileHeading: true,
    useFolderTitleFromIndexFile: true,
    useFolderLinkFromIndexFile: true,
    sortMenusByFrontmatterOrder: true,
  },
  {
    documentRootPath: '/docs',
    scanStartPath: 'ops/docker',
    resolvePath: '/ops/docker/',
    collapsed: null,
    capitalizeFirst: false,
    useTitleFromFileHeading: true,
    useFolderTitleFromIndexFile: true,
    useFolderLinkFromIndexFile: true,
    sortMenusByFrontmatterOrder: true,
  },
  {
    documentRootPath: '/docs',
    scanStartPath: 'ops/openwrt',
    resolvePath: '/ops/openwrt/',
    collapsed: null,
    capitalizeFirst: false,
    useTitleFromFileHeading: true,
    useFolderTitleFromIndexFile: true,
    useFolderLinkFromIndexFile: true,
    sortMenusByFrontmatterOrder: true,
  },
  {
    documentRootPath: '/docs',
    scanStartPath: 'ops/dsm',
    resolvePath: '/ops/dsm/',
    collapsed: null,
    capitalizeFirst: false,
    useTitleFromFileHeading: true,
    useFolderTitleFromIndexFile: true,
    useFolderLinkFromIndexFile: true,
    sortMenusByFrontmatterOrder: true,
  },
  {
    documentRootPath: '/docs',
    scanStartPath: 'ops/raspberry-pi',
    resolvePath: '/ops/raspberry-pi/',
    collapsed: null,
    capitalizeFirst: false,
    useTitleFromFileHeading: true,
    useFolderTitleFromIndexFile: true,
    useFolderLinkFromIndexFile: true,
    sortMenusByFrontmatterOrder: true,
  },

  // --- 6. 音乐 (Music) ---
  // 对应导航栏：音乐空间
  {
    documentRootPath: '/docs',
    scanStartPath: 'music',
    resolvePath: '/music/',
    collapsed: null,
    capitalizeFirst: false,
    useTitleFromFileHeading: true,
    useFolderTitleFromIndexFile: true,
    useFolderLinkFromIndexFile: true,
    sortMenusByFrontmatterOrder: true,
  },
  
  // --- 6. 其他 (Others) ---
  // 如果有其他散落在根目录的文档，可以加一个通配或特定路径
  // {
  //   documentRootPath: '/docs',
  //   scanStartPath: 'others',
  //   resolvePath: '/others/',
  //   ...
  // },
];
