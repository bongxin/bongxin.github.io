---
title: Proxmox VE
description: PVE 上虚拟机与 LXC 创建实操
aside: true
outline: [2, 3]
---

宿主机管理入口：[Proxmox VE](https://192.168.31.2:8006/)（见 [快捷入口](/shortcuts/)）。

存储约定：

| 存储 | 用途 |
|------|------|
| `local` | ISO、CT 模板、备份等静态文件 |
| `local-zfs` | 虚拟机 / CT 磁盘（块设备 zvol；格式固定为 **raw**） |

## 客户机一览

| 名称 | 类型 | 系统 | 内网 | 文档 |
|------|------|------|------|------|
| fnOS | KVM | 飞牛 fnOS | `192.168.31.186` | [创建飞牛 fnOS](/ops/proxmox/fnos/) |
| Ubuntu-Server | KVM | Ubuntu Server 26.04 | `192.168.31.129` | [创建 Ubuntu Server](/ops/proxmox/ubuntu-server/) |
| dev-yudao | LXC | Ubuntu 26.04 | `192.168.31.101` | [创建 dev-yudao](/ops/proxmox/dev-yudao/) |

## 芋道部署规划（概要）

| 环境 | 形态 | 规划配置 | 用途 |
|------|------|----------|------|
| 开发 | LXC | 2 核 / 4GB | 源码调试；见 [dev-yudao](/ops/proxmox/dev-yudao/) |
| 测试 | LXC | 2 核 / 4GB | 集成测试（待建） |
| 生产 · 应用 | KVM | 建议 ≥4 核 / 8GB | 芋道前后端（待建） |
| 生产 · 数据 | KVM | 建议 ≥4 核 / 16GB | MySQL / Redis / MinIO（待建） |

拓扑与其它节点见 [家庭网络](/ops/network/)。
