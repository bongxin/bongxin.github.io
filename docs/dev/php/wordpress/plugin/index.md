# WordPress 插件

WordPress 插件用于扩展站点功能，可从后台安装官方/第三方插件，或自行开发。

## 安装

- **后台安装**：登录管理后台 → 「插件」→「安装插件」，搜索后点击「现在安装」并启用。
- **上传安装**：若为 zip 包，在「安装插件」页选择「上传插件」并选择文件安装。
- **手动安装**：将插件目录放到 `wp-content/plugins/` 下，在后台「插件」页启用。

## 参考

- [WordPress 插件手册（开发）](https://developer.wordpress.org/plugins/)
- [插件 API 参考](https://developer.wordpress.org/plugins/plugin-basics/)
- [WordPress 插件目录](https://wordpress.org/plugins/)

---

## 常用插件示例

### All-in-One WP Migration Unlimi

::: warning
更推荐使用宝塔面板部署后，使用宝塔的备份和恢复来实现项目迁移。
:::

### PDF Embedder Premium

在文章或页面中直接嵌入、展示 PDF，访客可在站内浏览而无需跳转下载。

**用途简述**

- 在正文中像插入图片一样嵌入 PDF，支持响应式与全屏、连续滚动。
- Premium 支持：禁止下载/打印、超链接、页码、全屏、下载与浏览统计，可去除品牌标识；可加水印（如用户邮箱）以限制截图传播。

**使用步骤**

1. 先安装并启用免费版 [PDF Embedder](https://wordpress.org/plugins/pdf-embedder/)（Premium 依赖该基础插件）。
2. 编辑文章或页面 → 「添加媒体」→ 上传 PDF 到媒体库，选择后插入。会生成短代码：`[pdf-embedder url='...']`，也可在编辑器中直接使用该短代码。
3. 在「设置」→「PDF Embedder」中配置宽度、工具栏位置、是否允许下载/打印等；Premium 需在插件设置中填写许可证密钥以激活高级功能。
