---
permalink: /environment/yudao/dev/
title: 开发环境
---

芋道开发环境。主机为 PVE LXC **`dev-yudao`**（VMID `103`）；创建说明见 [创建 dev-yudao](/ops/proxmox/dev-yudao/)。

## 服务器（SSH）

- 地址：`192.168.31.103:22`
- 账号：`root` / `<your-password>`
- 部署目录：`/opt/yudao-ct-deploy`（Docker Compose）

## 数据库（MySQL）

- 地址：`192.168.31.103:3306`
- 账号：`root` / `<your-password>`（Compose 内自管，勿写入公开仓）

## 缓存（Redis）

- 地址：`192.168.31.103:6379`
- 口令：`<your-password>`（Compose 内自管）

## 应用访问（HTTP）

- 管理后台：<http://192.168.31.103:8080>（Vben5 `web-antd`，`yudao-admin`）
- 移动管理：<http://192.168.31.103:8081>（`yudao-ui-admin-uniapp` H5）
- 商城：<http://192.168.31.103:8082>（`yudao-mall-uniapp` H5）
- 账号：`admin` / `<your-password>`；租户编号 `1`（移动管理预填同一账号；商城为会员端）
- 其它入口见顶栏「应用访问」

## 接口地址（Knife4j）

- 接口文档：<http://192.168.31.103:48080/doc.html>
- 管理端反代：<http://192.168.31.103:8080/admin-api/doc.html>
- API 根：<http://192.168.31.103:48080>

## 服务端口

| 服务 | 端口 | 状态 |
|------|------|------|
| 管理后台 | `8080` | 已部署 |
| 移动管理 | `8081` | 已部署 |
| 商城 | `8082` | 已部署 |
| 后端 API | `48080` | 已部署 |
| MySQL | `3306` | 已部署 |
| Redis | `6379` | 已部署 |
