---
aside: true
title: Linux 运维
---

本系列以 **Ubuntu**（含 Ubuntu Server LTS）为主要环境，记录日常运维中的基本配置、常见操作与问题排查。

## 为什么选 Ubuntu

- **LTS 长期支持**：每两年发布一版，支持周期 5 年，适合服务器与长期运行环境。
- **包管理简单**：`apt` 命令统一，软件源丰富，文档和社区成熟。
- **云与生态**：多数云厂商提供 Ubuntu 镜像，Docker、K8s 等文档常以 Ubuntu 为例。

::: tip 版本说明
文中未特别说明时，默认以 **Ubuntu 22.04 LTS (Jammy)** 为准；部分命令在 20.04、24.04 上同样适用。
:::

## 内容结构

| 模块 | 说明 |
|------|------|
| [基本配置](/ops/linux/基本配置/基本配置.html) | 网络（Netplan）、静态 IP、UFW 防火墙等 |
| [开发环境配置](/ops/linux/基本配置/开发环境配置.html) | Java、MySQL、Docker、GitLab 等安装与配置 |
| [OpenVPN 服务](/ops/linux/基本配置/OpenVPN服务.html) | Ubuntu 上搭建 OpenVPN（亦收入 [VPN](/ops/vpn/) 导航） |
| [常见操作](/ops/linux/常见操作/) | 端口、包管理、服务管理等常用命令 |
| [常见问题](/ops/linux/常见问题/) | 常见报错与排查思路 |

## 快速参考

| 场景 | 命令示例（Ubuntu） |
|------|---------------------|
| 更新软件源 | `sudo apt update` |
| 安装软件 | `sudo apt install <包名>` |
| 查看服务状态 | `sudo systemctl status <服务名>` |
| 重启服务 | `sudo systemctl restart <服务名>` |
| 查看端口占用 | `ss -tlnp` 或 `sudo lsof -i :端口` |
| 防火墙放行端口 | `sudo ufw allow 端口` |

更多细节请从左侧目录进入对应章节。
