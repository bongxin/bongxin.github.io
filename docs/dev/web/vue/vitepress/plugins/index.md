# Vitepress插件

## VitePress Sidebar

### 安装

```
npm i -D vitepress-sidebar
```

VitePress自动侧边栏插件,可自动创建一个简单的配置

``` js
export const sidebarConfigs = [
  // --- 1. 业务 (Business) ---
  // 对应导航栏：业务技能
  {
    documentRootPath: '/docs',
    // 扫描整个 business 目录，插件会自动识别子文件夹
    scanStartPath: 'business',
    resolvePath: '/business/',
    collapsed: null,
    capitalizeFirst: false,
    useTitleFromFileHeading: true,
    useFolderTitleFromIndexFile: true,
    useFolderLinkFromIndexFile: true,
  },

  // --- 2. 开发 (Development)：按子模块使用不同侧边栏 ---
  // 更具体的 resolvePath 放前面，优先匹配
  {
    documentRootPath: '/docs',
    scanStartPath: 'dev/web/vue',
    resolvePath: '/dev/web/vue/',
    collapsed: null,
    capitalizeFirst: false,
    useTitleFromFileHeading: true, // 从文件的标题中获取标题
    useFolderTitleFromIndexFile: true, // 使用当前文件夹的 index.md 文件中的信息来获取菜单名称。如果不存在 index.md 文件，则使用文件夹名称。
    useFolderLinkFromIndexFile: true, // 指定一个指向文件夹的链接，以便您可以导航到当前文件夹中的 index.md 文件。如果 index.md 文件不存在，则不会创建链接。
  },
  ...
]
```

## Mermaid

### 安装

```
npm i vitepress-plugin-mermaid mermaid -D
```