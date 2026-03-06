# Figma 插件

Figma 插件用于扩展设计流程，例如图标库、自动排版、切图导出、标注、与开发/文档工具联动等，可从 Figma 内直接安装与运行。

## 使用

1. **查找插件**：在 Figma 中菜单栏选择「资源」→「插件」→「浏览社区中的插件」，或使用搜索框输入关键词（如 Icon、Export、Developer 等）。
2. **安装**：在插件详情页点击「安装」或「Try it out」，安装后会在「资源」→「插件」→「已安装」中列出。
3. **运行**：打开任意文件，在画布空白处右键选择「插件」→ 选择已安装的插件；或通过菜单「资源」→「插件」→ 选择插件运行。部分插件会要求先选中图层再运行。

## 参考

- [Figma 插件开发文档](https://www.figma.com/plugin-docs/)
- [Figma 社区 - 插件](https://www.figma.com/community/plugins) — 浏览与安装社区插件
- [Figma Plugin API](https://www.figma.com/plugin-docs/api/api-overview/) — 开发自定义插件

---

## Autoflow

[Autoflow](https://www.figma.com/community/plugin/733902567457995893/Autoflow) 用于在画布上的框架（Frame）之间自动绘制连接线，适合做界面流程图、页面跳转示意，线条会随框架移动而自动更新，无需手动画线或反复调整路径。

### 使用步骤

1. 在 Figma 中打开「资源」→「插件」→ 运行 **Autoflow**，打开插件面板。
2. 在面板中设置连接线的颜色、粗细，以及起点/终点的箭头等样式。
3. 先选中**起始框架**，再按住 **Shift** 点选**目标框架**，插件会自动在两者之间画出一条连接线。
4. 重复「选起始 → Shift + 选目标」即可快速连接多个框架。

### 自动追踪

面板保持打开时，移动任意已连接的框架，连接线会自动跟随更新。若关闭面板后再移动了框架，需重新运行一次 Autoflow，线条才会更新到新位置。

### 参考

- [Autoflow - Figma 社区](https://www.figma.com/community/plugin/733902567457995893/Autoflow)

---

## Remove BG

[Remove BG](https://www.figma.com/community/plugin/738806391534597558/remove-bg) 由 [remove.bg](https://www.remove.bg/) 提供，可在 Figma 内一键去除图片背景，适合人物、产品图抠图，无需切到其他软件。

### 使用前：设置 API Key

插件依赖 remove.bg 的接口，需先配置 API Key：

1. 在 [remove.bg](https://www.remove.bg/) 注册并登录，在控制台获取 **API Key**（有免费额度）。
2. 在 Figma 中右键画布 → **插件** → **Remove BG** → **Set API Key**，粘贴 Key 并保存。

只需设置一次，后续在同一环境中可直接使用。

### 使用步骤

1. 在画布上**选中**要去背景的图片（图片图层）。
2. 右键 → **插件** → **Remove BG** → **Run**，或通过「资源」→「插件」→ Remove BG 运行。
3. 插件会调用 remove.bg 接口处理，完成后当前图片会变为去背结果（背景透明）。

**快捷方式**：选中图片后按 **Cmd + P**（Mac）或 **Ctrl + P**（Win），输入 “remove bg”，选择对应命令回车即可快速去背。

### 参考

- [Remove BG - Figma 社区](https://www.figma.com/community/plugin/738806391534597558/remove-bg)
- [remove.bg 官网与 API](https://www.remove.bg/) — 注册、额度与定价说明

::: warning 其他选择
若只是偶尔给图片去背景且已有 **WPS 会员**，可直接用 WPS 图片的「AI 抠图」功能，无需配置 API，操作更简单。
:::
