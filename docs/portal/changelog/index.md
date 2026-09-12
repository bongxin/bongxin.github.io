---
permalink: /changelog/
title: 更新日志
description: 本站结构与能力变更记录
aside: true
outline: [2, 3]
readingTime: false
comments: false
contributors: false
lastUpdated: false
editLink: false
---

## v1.3.0

### 约定上站 · 以 main 发布

本版概要（2026-09-13）：

- 站点约定页与 Cursor 规则双写；commit/push 时同步写更新日志。
- 发布分支改为 `main`；GitHub Actions 仅在 `main` 推送时构建部署。

### 🚀 新增

- 【新增】站点约定 `/conventions/`（顶栏版本下拉与更新日志同级）
- 【新增】`.cursor/rules/`：Plume 优先、忌套话、自动重启、信息架构、规则双写、commit 写日志

### 🔨 优化

- 【优化】门户页去掉实现说明类套话
- 【优化】更新日志拆为 v1.2.0 / v1.1.0 / v1.0.0，标题不用 `【】`
- 【优化】CI：`on.push.branches: [main]`，产物目录 `docs/.vuepress/dist`

### 🐞 修复

- 【修复】避免 `base` / 其它分支 push 误触发线上部署

---

## v1.2.0

### 体验打磨 · Plume 约定收口

本版概要（2026-09-13）：

- 深色主题、首页、LinkCard 使用范围与配置拆分收口。
- 补齐更新日志页与顶栏版本入口。

### 🚀 新增

- 【新增】更新日志 `/changelog/`（本页）；顶栏版本号 + badge「新」
- 【新增】首页两组 features（日常入口 / 知识文档），Iconify 与顶栏同系

### 🔨 优化

- 【优化】`LinkCard` 仅用于网站链接与音乐曲目；应用访问 / 快捷入口改为 Markdown 列表；站点导航只留 Markmap
- 【优化】自定义样式只保留品牌色等 CSS 变量；去掉首页布局硬改
- 【优化】markdown 只写在 `config.ts`；bilibili / table 双写 `markdownPower`
- 【优化】`ai`、`operation` 侧栏 `auto`；文章正文从 `##` 起、去掉重复 H1
- 【优化】logo + logoDark；深色 brand 按钮黑字

### 🐞 修复

- 【修复】深色主题字色被 `:root` 覆盖、首页 brand 按钮看不清
- 【修复】运维页残留 `<BilibiliPlayer>`、无效 `aside: 'right'`
- 【修复】`@[bilibili]` / Markmap 缓存导致不渲染（清缓存并重启）

---

## v1.1.0

### 门户与日常入口

本版概要（2026-09-13）：

- 顶栏改为日常入口，知识库从站点导航进入。
- 补齐链接、资产、相册、应用 / 快捷拆分等门户能力。

### 🚀 新增

- 【新增】顶栏：站点导航 · 运行环境 · 应用访问 · 快捷入口 · 网站链接 · 设备资产
- 【新增】站点导航 `/map/`：Plume Markmap
- 【新增】网站链接 `/links/`：`LinkCard` + `VPCardGrid`（3 列）及收藏录入
- 【新增】设备资产 `/assets/`：总表 + 明细，`::: table full-width`
- 【新增】相册 `/photos/`：`::: card-masonry`
- 【新增】应用访问 BERNSINE；快捷入口 Fast-Note-Sync、ImmortalWrt
- 【新增】运行环境占位：芋道 / WordPress（地址待补）

### 🔨 优化

- 【优化】应用访问与快捷入口拆成两个一级顶栏
- 【优化】日常浏览页统一左侧侧栏 + 右侧 outline
- 【优化】音乐页艺人 `ImageCard`、曲目 `LinkCard`；视频 `@[bilibili]`
- 【优化】门户收拢 `docs/portal/`，对外短 permalink
- 【优化】去掉运营「水印」空壳；关于不进顶栏

### 🐞 修复

- 【修复】permalink / 顶栏变更后 HMR 不刷新导致 `/map/` 等 404
- 【修复】链接页图标与收藏 URL 录入问题

---

## v1.0.0

### VuePress 2 + Plume 迁移

本版概要（2026-09-12）：

- 文档站从 VitePress 迁到 VuePress 2 + [vuepress-theme-plume](https://theme-plume.vuejs.press/)。
- 文档源仍为 `docs/`，开发分支 `plume`。

### 🚀 新增

- 【新增】主题切换为 vuepress-theme-plume；Node ≥ 22.18
- 【新增】启用 Mermaid、Bilibili 等 Plume markdown 能力
- 【新增】首页 `doc-hero` + features 基础结构

### 🔨 优化

- 【优化】运维侧栏按主机 / 容器 / 网络 / 存储等场景重梳（正文路径未大挪，避免断链）
- 【优化】删除无用 npm 文档壳、`.vitepress` 残留目录

### 🐞 修复

- 【修复】构建与 Vite 8 / rolldown 下主题 SFC 需传入 `script.fs`
