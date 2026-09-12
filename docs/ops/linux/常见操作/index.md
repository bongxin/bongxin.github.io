---
title: 常见操作
---

以 **Ubuntu** 为主，记录日常高频命令。

## 包管理（apt）

Ubuntu 使用 `apt` 管理软件包。

### 更新与安装
```bash
sudo apt update                    # 更新软件源索引
sudo apt upgrade                   # 升级已安装的包
sudo apt install <包名>            # 安装软件
sudo apt install -y <包名>         # 安装且不询问确认
sudo apt remove <包名>             # 卸载（保留配置）
sudo apt purge <包名>              # 卸载并删除配置
```

### 查询与清理
```bash
apt search <关键词>                # 搜索包
apt show <包名>                    # 查看包信息
apt list --installed               # 已安装包列表
sudo apt autoremove                # 删除不再需要的依赖
sudo apt clean                    # 清理已下载的 deb 缓存
```

---

## 服务管理（systemd）

Ubuntu 使用 **systemd** 管理服务。

```bash
sudo systemctl start <服务名>      # 启动
sudo systemctl stop <服务名>       # 停止
sudo systemctl restart <服务名>   # 重启
sudo systemctl reload <服务名>    # 重新加载配置（若支持）
sudo systemctl status <服务名>    # 查看状态
sudo systemctl enable <服务名>    # 开机自启
sudo systemctl disable <服务名>   # 关闭开机自启
```

查看日志：
```bash
sudo journalctl -u <服务名> -f    # 实时查看该服务日志
sudo journalctl -u <服务名> -n 100  # 最近 100 行
```

---

## 查看端口占用及关闭

### 方法一：ss（推荐，系统自带）

```bash
ss -tlnp        # 监听中的 TCP 端口及进程
ss -tunlp       # TCP + UDP 监听
ss -tlnp | grep 8080
```

### 方法二：lsof

```bash
sudo lsof -i :8080    # 指定端口
sudo lsof -i          # 所有网络连接
```

### 方法三：netstat

::: tip 说明
Ubuntu 默认未安装 `net-tools`，需先执行 `sudo apt install net-tools`。
:::

```bash
netstat -tlnp         # 监听中的 TCP 及进程
netstat -tunlp        # TCP + UDP
netstat -tunlp | grep 8080
```

### 结束占用端口的进程

```bash
# 先查到 PID，再结束
kill -9 <PID>
# 或按端口一键结束（慎用）
sudo kill -9 $(sudo lsof -t -i :8080)
```

---

## 网络与防火墙

### 查看 IP、路由

```bash
ip addr
ip route
# 若已安装 net-tools
ifconfig
```

### UFW 常用命令（Ubuntu 默认防火墙）

```bash
sudo ufw status
sudo ufw allow 22
sudo ufw allow 8080/tcp
sudo ufw deny 3306
sudo ufw enable
sudo ufw reload
```

更多见 [基本配置 - UFW](/ops/linux/基本配置/基本配置#配置防火墙ufwuncomplicated-firewall)。

---

## 磁盘与内存

```bash
df -h              # 磁盘空间
du -sh <目录>      # 目录占用
free -h            # 内存与 swap
```

---

## 进程与系统

```bash
ps aux | grep <关键词>
top                # 实时进程（按 q 退出）
htop               # 需安装：sudo apt install htop
uname -a           # 内核与系统信息
hostnamectl        # 主机名与系统概览
```
