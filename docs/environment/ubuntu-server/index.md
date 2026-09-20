---
permalink: /environment/ubuntu-server/
title: Ubuntu Server · 运行环境
---

PVE 上的 Ubuntu Server **26.04**（VMID **101**）。

## 主机信息

| 项 | 内容 |
|----|------|
| 系统 | Ubuntu Server 26.04 |
| PVE VMID | `101` |
| 内网地址（实装） | `192.168.31.129`（DHCP；目标对齐末段 = VMID 为 `.101`） |
| SSH 用户 | `bongxin` |
| SSH 口令 | `<your-password>`（本地自管，勿写入公开仓库） |
| 连接示例 | `ssh bongxin@192.168.31.129` |

## 用途

| 项 | 内容 |
|----|------|
| 角色 | 通用 Linux 服务 / 调试机（与芋道 LXC 分离） |
| 创建文档 | [PVE 创建 Ubuntu Server](/ops/proxmox/ubuntu-server/) |
| 相关拓扑 | 见 [家庭网络](/ops/network/) · [Proxmox VE](/ops/proxmox/) |

口令与密钥只放本机密码管理器；公开文档仅保留地址与用户名。
