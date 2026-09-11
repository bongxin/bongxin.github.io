---
name: vuepress_plume_dev_memory
description: bongxin.github.io 已从 VitePress 迁到 VuePress 2 + Plume，记录结构、命令与构建坑点
---
## 开发要点
- 仓库：https://github.com/bongxin/bongxin.github.io.git ，本地 `E:\Code\bongxin\bongxin.github.io`（与仓库同名；`E:\Code\bongxin` 为组织目录），当前开发分支 `plume`（尚未推远程）
- **文档正文以 `origin/base` 为准**，不要再从 `main` 取内容；`main` 是旧结构（system/skill/...），`base` 是现行结构（dev/design/ai/ops/...）
- 站点已切换为 **VuePress 2 + vuepress-theme-plume**，文档源目录仍是 `docs/`
- 需要 **Node >= 22.18.0**（本机可用 `nvm use 22.18.0`；nvm-windows 安装目录 `D:\nvm\v22.18.0`；PowerShell 若找不到 node，可临时 `$env:Path = "D:\nvm\v22.18.0;" + $env:Path`）
- 本地：`npm install` 后 `npm run docs:dev`；构建：`npm run docs:build`；清缓存：`npm run docs:clean-dev`
- 构建产物：`docs/.vuepress/dist`；CI 部署该目录到 `gh-pages`
- 主题配置拆分：`docs/.vuepress/config.ts`（bundler/插件）+ `plume.config.ts`（navbar/collections，支持热更新）
- 导航/集合对齐 `base` 的板块结构；已移除「前端生态 / Vue 3 全家桶」（原 `docs/dev/web`）、「CSMM」（原 `docs/mgmt/csmm`）、「WSL2」（原 `docs/ops/wsl2`）
- 首页用 `docs/README.md`（`doc-hero` + `features`）；头像用 `/logo.svg`；桌面端压缩间距一屏展示；不要同时保留根级 `docs/index.md`
- 静态资源在 `docs/.vuepress/public/`（不要再用 `docs/public`）
- `autoFrontmatter: false`，避免改写现有 Markdown
- Vite 8/rolldown 下必须给 `@vitejs/plugin-vue` 传入 `script.fs`，否则主题 SFC 的 `defineProps<ImportedType>()` 会报 `No fs option provided to compileScript`
- 首页不加 `effect`（已去掉 prism 动态背景）；若再启用 prism 需依赖 `ogl`
- hostname / 备案信息沿用 `base`：`https://docs.bongxin.com.cn`，footer 含粤 ICP
- 主题色对齐原 VitePress `base`：黑品牌色 `#000000` / 辅助 `#3c3c43`；暗色模式品牌色为白。样式在 `docs/.vuepress/styles/index.css`，由 `client.ts` 引入
- 只保留 npm 锁文件；不要再混用 yarn/pnpm lock

## 改动涉及的文件
- package.json
- .nvmrc
- .gitignore
- .github/workflows/deploy.yml
- docs/.vuepress/config.ts
- docs/.vuepress/client.ts
- docs/.vuepress/styles/index.css
- docs/.vuepress/plume.config.ts
- docs/.vuepress/navbar.ts
- docs/.vuepress/collections.ts
- docs/README.md
- docs/.vuepress/public/*
- docs/{about,ai,design,dev,mgmt,music,operation,ops,others,write}/**（来自 origin/base）
