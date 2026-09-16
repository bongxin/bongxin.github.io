---
title: PVE 创建 Ubuntu Server
aside: true
outline: [2, 3]
---

在 Proxmox VE 上创建 Ubuntu Server 虚拟机。管理入口：[PVE](https://192.168.31.2:8006/) · 环境页：[Ubuntu Server](/environment/ubuntu-server/)。

## 上传 ISO 到 local

1. 下载 Server 版 ISO（实装为 **26.04**）。国内可用 [清华 TUNA ubuntu-releases](https://mirrors.tuna.tsinghua.edu.cn/ubuntu-releases/)。
2. PVE → **local (pve)** → **ISO 镜像** → **上传**。

## 创建虚拟机

右上角 **创建虚拟机**，建议参数：

| 步骤 | 建议 |
|------|------|
| 常规 | 名称如 `Ubuntu-Server` |
| 操作系统 | 使用 CD/DVD；**local** + Ubuntu ISO；类型 Linux · 6.x - 2.6 Kernel |
| 系统 | 机型 **q35**；BIOS **OVMF (UEFI)**；SCSI **VirtIO SCSI single**；勾选 **QEMU 代理** |
| 磁盘 | SCSI；**local-zfs**；约 **40GB**；勾选 Discard、IO thread；格式 **raw**（ZFS 正常） |
| CPU | 类别 **host**；2–4 核 |
| 内存 | **4096 MB** |
| 网络 | VirtIO · **vmbr0** |

确认页关注点：

- `bios: ovmf` + `efidisk0`
- `scsi0: local-zfs:40,discard=on,iothread=on`
- `cpu: host`、`agent: 1`

点 **完成** → **启动** → **控制台**。

## 安装要点

| 步骤 | 建议 |
|------|------|
| 语言 | English（减少路径 / 终端编码问题） |
| 键盘 | English (US) |
| 安装类型 | Ubuntu Server（非 minimized）；勿勾第三方驱动搜索 |
| 代理 | 留空 |
| 镜像源 | 能自动选到 TUNA 即可；否则手动国内源 |
| 磁盘 | Use an entire disk；可保留 LVM；不必开 LUKS |
| 用户 | Your name 为显示名；**username** 为登录名（如 `bongxin`），二者不同 |
| SSH | **勾选 Install OpenSSH server**；可保留密码登录 |
| 附加 Snap 软件 | 全部不选，装完再按需安装 |

安装结束出现 `Please remove the installation medium` 时：

1. 先到 PVE **硬件** → **CD/DVD** → **不使用任何介质**。
2. 再回控制台按 Enter 重启。

## 装后基础配置

SSH 登录后：

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y qemu-guest-agent curl wget vim git htop net-tools
sudo systemctl enable --now qemu-guest-agent
```

Guest Agent 启用后，PVE 概览更容易显示 IP，并支持较优雅的关机。

## 实装记录

| 项 | 内容 |
|----|------|
| 内网 IP | `192.168.31.129` |
| SSH | `ssh bongxin@192.168.31.129` |
| 口令 | 仅本地保管，文档写 `<your-password>` |

总览见 [Proxmox VE](/ops/proxmox/)。
