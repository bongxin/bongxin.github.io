// docs/.vitepress/sidebar.config.js

export const sidebarConfigs = [
  // --- 1. 业务 (Business) ---
  // 对应导航栏：业务技能
  {
    documentRootPath: '/docs',
    // 扫描整个 business 目录，插件会自动识别子文件夹
    scanStartPath: 'business',
    resolvePath: '/business/',
    collapsed: false,
    capitalizeFirst: false,
    useTitleFromFrontmatter: true,
    useFolderTitleFromIndexFile: true,
    useFolderLinkFromIndexFile: true,
  },

  // --- 2. 开发 (Development) 【核心变化点】 ---
  // 对应导航栏：开发技能 (包含 Java, Vue, PHP, NPM 等所有子项)
  // 策略：不再为每个技术栈单独写配置，而是扫描整个 development 目录
  {
    documentRootPath: '/docs',
    // 👇 关键：直接扫描到 development 层级
    // 插件会自动遍历其下的 java/, vue/, php/ 等子文件夹并生成树状结构
    scanStartPath: 'dev',
    // 👇 关键：URL 前缀也对应到 development
    // 只要 URL 以 /dev/ 开头，都使用这个侧边栏配置
    resolvePath: '/dev/',
    collapsed: false,       // 默认展开，方便查看子技术栈
    capitalizeFirst: false,
    useTitleFromFrontmatter: true,
    useFolderTitleFromIndexFile: true,
    useFolderLinkFromIndexFile: true,
  },

  // --- 3. 设计 (Design) ---
  // 对应导航栏：设计技能 (包含 Figma, UML 等)
  {
    documentRootPath: '/docs',
    scanStartPath: 'design',
    resolvePath: '/design/',
    collapsed: false,
    capitalizeFirst: false,
    useTitleFromFrontmatter: true,
    useFolderTitleFromIndexFile: true,
    useFolderLinkFromIndexFile: true,
  },

  // --- 4. 管理 (Management) ---
  {
    documentRootPath: '/docs',
    scanStartPath: 'mgmt',
    resolvePath: '/mgmt/',
    collapsed: false,
    capitalizeFirst: false,
    useTitleFromFrontmatter: true,
    useFolderTitleFromIndexFile: true,
    useFolderLinkFromIndexFile: true,
  },

  // --- 5. 运维 (DevOps) ---
  // 对应导航栏：运维技能
  {
    documentRootPath: '/docs',
    scanStartPath: 'ops',
    resolvePath: '/ops/',
    collapsed: false,
    capitalizeFirst: false,
    useTitleFromFrontmatter: true,
    useFolderTitleFromIndexFile: true,
    useFolderLinkFromIndexFile: true,
  },

  // --- 6. 音乐 (Music) ---
  // 对应导航栏：音乐空间
  {
    documentRootPath: '/docs',
    scanStartPath: 'music',
    resolvePath: '/music/',
    collapsed: false,
    capitalizeFirst: false,
    useTitleFromFrontmatter: true,
    useFolderTitleFromIndexFile: true,
    useFolderLinkFromIndexFile: true,
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