---
title: Fast Note Sync
---

[Fast Note Sync](https://github.com/haierkeys/obsidian-fast-note-sync) 是 Obsidian 的多端实时同步插件，需配合自托管后端 [Fast Note Sync Service](https://github.com/haierkeys/fast-note-sync-service) 使用，支持笔记、附件与配置的跨设备同步。

## 前置条件

插件本身只负责客户端同步，需先部署 **Fast Note Sync Service** 服务端：

1. 使用 Docker 等方式部署后端（可参考 [fast-note-sync-service](https://github.com/haierkeys/fast-note-sync-service) 或 [Zeabur 模板](https://zeabur.com/zh-CN/templates/CSBIG1)）。
2. 浏览器访问服务端 Web 管理面板（如 `http://localhost:9000` 或部署后的域名）。
3. 注册账号，在「Note Vaults」中创建笔记库，并获取**远端服务配置**字符串。

## 安装插件

任选一种方式：

- **BRAT（推荐，支持手机）**：在社区插件中安装 [BRAT](https://github.com/TfTHacker/obsidian42-brat)，在 BRAT 设置里 **Add plugin**，粘贴 `https://github.com/haierkeys/obsidian-fast-note-sync`。
- **手动安装**：从 [Releases](https://github.com/haierkeys/obsidian-fast-note-sync/releases) 下载，解压到仓库的 `.obsidian/plugins/` 目录。

::: tip
插件尚未上架 Obsidian 官方社区商店，需通过 BRAT 或手动安装。
:::

## 使用步骤

### 1. 连接服务端

**方式 A：一键授权（桌面端）**

1. 在服务端 Web 面板左侧选择 **Note Vaults**。
2. 点击 **「一键授权 Obsidian」**，系统会唤起 Obsidian 并完成授权信息传递。

**方式 B：粘贴远端配置**

1. 在服务端复制**远端服务配置**字符串。
2. 打开 Obsidian → 设置 → **Fast Note Sync** → 点击 **「粘贴远端配置」**，将配置粘贴到输入框并保存。

### 2. 开始同步

1. 在 Obsidian 设置中**启用** Fast Note Sync 插件。
2. 确认插件设置中监听已开启（`isWatchEnabled` 为 true）。
3. 新建或修改笔记，插件会自动监听 Vault 内笔记的创建、更新与删除，并通过 WebSocket 实时同步。

### 3. 手动全量同步

若需主动拉取远端全部笔记：

1. 打开插件设置页。
2. 点击 **「手动同步」**（Manual Sync）。
3. 在同步日志中查看进度，等待「同步完成」提示。

## 主要功能

- **笔记实时同步**：自动同步 Vault 内所有 `.md` 的增删改
- **配置同步**：多端 Obsidian 配置可同步，无需手动拷贝配置文件（需插件 v1.4+、服务端 v1.0+）
- **离线删除补全**：离线期间的删除/变更，下次连接时与服务端对齐
- **附件云预览**：附件可在线预览，减少本地占用
- **同步日志**：便于排查每次同步的详细情况

## 参考

- [obsidian-fast-note-sync（插件）](https://github.com/haierkeys/obsidian-fast-note-sync)
- [fast-note-sync-service（服务端）](https://github.com/haierkeys/fast-note-sync-service)
- [插件中文说明](https://github.com/haierkeys/obsidian-fast-note-sync/blob/master/docs/README.zh-TW.md)
