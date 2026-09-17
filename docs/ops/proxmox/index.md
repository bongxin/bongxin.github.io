---
title: Proxmox VE
description: PVE 上虚拟机与 LXC 创建实操
aside: true
outline: [2, 3]
---

宿主机：Beelink SER6 · 管理入口 [Proxmox VE](https://192.168.31.2:8006/)（见 [快捷入口](/shortcuts/)）。当前为 **PVE 9.2**。

存储约定：

| 存储 | 用途 |
|------|------|
| `local` | ISO、CT 模板、备份等静态文件 |
| `local-zfs`（`rpool`） | 虚拟机 / CT 磁盘（块设备 zvol；格式固定为 **raw**） |
| `nas-data` | 数据盘池（GW560 等，按需挂载） |

## IP 约定

| 类型 | 规则 | 现状 |
|------|------|------|
| LXC | 内网末段 = **VMID** | 已落实：`102`→`.102` · `103`→`.103` · `104`→`.104` |
| KVM | 目标同样末段 = VMID | 飞牛 / Ubuntu 仍为 DHCP 实装地址（见下表），待改静态后对齐 |

## 客户机一览

| VMID | 名称 | 类型 | 系统 | 内网（实装） | 文档 |
|------|------|------|------|--------------|------|
| 100 | fnOS | KVM | 飞牛 fnOS | `192.168.31.186` | [创建飞牛 fnOS](/ops/proxmox/fnos/) |
| 101 | Ubuntu-Server | KVM | Ubuntu Server 26.04 | `192.168.31.129` | [创建 Ubuntu Server](/ops/proxmox/ubuntu-server/) |
| — | wireguard | LXC（TurnKey） | WireGuard | `192.168.31.101` | [创建 WireGuard](/ops/proxmox/wireguard/) |
| 102 | tpl-yudao | LXC 模板 | Ubuntu | `192.168.31.102` | Nesting；供链接克隆 |
| 103 | dev-yudao | LXC | Ubuntu | `192.168.31.103` | [创建 / 实装](/ops/proxmox/dev-yudao/) |
| 104 | test-yudao | LXC | Ubuntu | `192.168.31.104` | 自 `tpl-yudao` 链接克隆；待装 Docker / 部署 |

## 芋道部署规划

| 环境 | 形态 | 实装 / 规划 | 用途 |
|------|------|-------------|------|
| 模板 | LXC `102` | 2 核 / 4GB / 15GB · Nesting | 链接克隆母本 |
| 开发 | LXC `103` | 同上；IP `.103` | 源码 / Compose 调试 · [环境页](/environment/yudao/) |
| 测试 | LXC `104` | 同上；IP `.104` | 集成测试（容器已建，应用待部署） |
| 生产 · 应用 | KVM | 建议 ≥4 核 / 8GB | 前后端（待建） |
| 生产 · 数据 | KVM | 建议 ≥4 核 / 16GB | MySQL / Redis / MinIO（待建） |

拓扑与其它节点见 [家庭网络](/ops/network/)。

## 基建顺序（备忘）

| 优先级 | 项 | 状态 |
|--------|-----|------|
| 1 | WireGuard 外网回家 | 见 [WireGuard](/ops/proxmox/wireguard/) |
| 2 | 内网反代（Nginx Proxy Manager） | 待建 CT `npm` |
| 3 | VPS 中继（公网域名给外人） | 待做 |
| 4 | Headscale | 须在反代 + HTTPS 之后 |

反代解决的是子域名入口与证书集中，不是「多台 VM 抢同一操作系统的 80 端口」（每台本就有独立 IP）。

