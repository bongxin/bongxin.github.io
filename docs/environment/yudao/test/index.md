---
permalink: /environment/yudao/test/
title: 测试环境
---

芋道测试环境。主机为 PVE LXC **`test-yudao`**（VMID `104`），自 `tpl-yudao` 链接克隆；应用栈待部署。

## 服务器（SSH）

- 地址：`192.168.31.104:22`
- 账号：`root` / `<your-password>`
- 状态：CT 已建；Docker / Compose 待装

## 数据库（MySQL）

- 地址：`192.168.31.104:3306`（规划）
- 账号：`root` / `<your-password>`

## 缓存（Redis）

- 地址：`192.168.31.104:6379`（规划）
- 口令：`<your-password>`

## 应用访问（HTTP）

- 地址：<http://192.168.31.104:8080>（规划，当前不可达）
- 账号：`admin` / `<your-password>`；租户编号 `1`

## 接口地址（Knife4j）

- 接口文档：<http://192.168.31.104:48080/doc.html>（规划）
- API 根：<http://192.168.31.104:48080>（规划）
