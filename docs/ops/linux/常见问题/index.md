# 常见问题

以 **Ubuntu** 为主，汇总运维中常见报错与排查思路。

## 包管理与软件源

### apt update 报错：Release file has expired / 仓库没有 Release 文件

**原因**：系统时间不正确，或软件源地址不可用/过期。

**处理**：

1. 校对时间（NTP）：
   ```bash
   sudo timedatectl set-ntp true
   # 或安装 ntpdate 后：sudo ntpdate ntp.aliyun.com
   date
   ```
2. 更换为国内源（以 22.04 为例，编辑 `/etc/apt/sources.list`）：
   ```bash
   sudo sed -i 's|http://archive.ubuntu.com|https://mirrors.aliyun.com|g' /etc/apt/sources.list
   sudo sed -i 's|http://security.ubuntu.com|https://mirrors.aliyun.com|g' /etc/apt/sources.list
   sudo apt update
   ```
   也可选用清华、中科大等镜像，见 [Ubuntu 镜像站](https://mirrors.ubuntu.com/mirrors.txt)。

### E: Could not get lock /var/lib/dpkg/lock

**原因**：另一个 apt/dpkg 进程正在运行，或上次异常退出留下锁文件。

**处理**：

```bash
# 先看是否有 apt 进程
ps aux | grep -E 'apt|dpkg'
# 若有，等待其结束；若确认无其它进程在使用，再删锁并重建
sudo rm -f /var/lib/dpkg/lock /var/lib/dpkg/lock-frontend
sudo dpkg --configure -a
sudo apt update
```

---

## 网络

### 修改 Netplan 后不生效

**处理**：

```bash
sudo netplan apply
# 若仍异常，可尝试
sudo netplan --debug apply
```

确认 YAML 缩进正确（空格，不要用 Tab），网卡名与 `ip link` 一致（如 `enp0s3`）。

### ifconfig / netstat 命令找不到

**原因**：Ubuntu 默认未安装 `net-tools`。

**处理**：

```bash
sudo apt install net-tools
```

推荐优先使用 `ip`、`ss`（系统自带）：

```bash
ip addr
ip route
ss -tlnp
```

---

## 服务与进程

### 端口已被占用，但 lsof 查不到进程

可先用 `ss` 再配合 `/proc` 查进程名：

```bash
ss -tlnp | grep :8080
# 记下 pid，再查进程
ls -l /proc/<pid>/exe
cat /proc/<pid>/cmdline
```

若为短生命周期进程，可多次执行 `ss -tlnp` 或 `sudo lsof -i :8080` 观察。

### systemctl 启动服务失败：Failed to start ...

**排查**：

```bash
sudo systemctl status <服务名>
sudo journalctl -u <服务名> -n 50 --no-pager
```

根据日志中的 “Failed to …” 或 “error” 调整配置（路径、权限、依赖端口等），再执行：

```bash
sudo systemctl daemon-reload
sudo systemctl restart <服务名>
```

---

## 磁盘与权限

### 磁盘空间不足：No space left on device

**排查**：

```bash
df -h
du -sh /* 2>/dev/null | sort -hr | head -20
```

常见占用大户：`/var/log`、Docker 镜像与容器、大文件。可做日志轮转、清理 Docker、删除无用文件后重试。

### Permission denied 或 Operation not permitted

- 需 root 时加 `sudo`，或 `sudo -i` 切到 root。
- 若为 SELinux/AppArmor 导致，Ubuntu 上可查看 AppArmor 状态：`sudo aa-status`，再按需调整配置或临时关闭测试。

---

## Docker（Ubuntu 环境）

### Docker 拉取镜像很慢或超时

配置国内镜像加速，编辑 `/etc/docker/daemon.json`（若不存在则创建）：

```json
{
  "registry-mirrors": [
    "https://docker.mirrors.ustc.edu.cn",
    "https://docker.nju.edu.cn"
  ]
}
```

然后执行：

```bash
sudo systemctl daemon-reload
sudo systemctl restart docker
```

详见 [开发环境配置 - 安装 Docker](/ops/linux/基本配置/开发环境配置#安装docker)。

### 非 root 用户无法运行 docker

将用户加入 `docker` 组：

```bash
sudo usermod -aG docker $USER
# 重新登录后生效
```

---

## 其他

### 中文乱码

安装 locale 并生成：

```bash
sudo apt install language-pack-zh-hans
sudo locale-gen zh_CN.UTF-8
sudo update-locale LANG=zh_CN.UTF-8
```

重新登录或重启后生效。

### 忘记 root 密码

在 GRUB 菜单选中内核，按 `e` 编辑，在 `linux` 行末尾加 `init=/bin/bash`，按 Ctrl+X 启动后：

```bash
mount -o remount,rw /
passwd root
sync
exec /sbin/init
```

（具体行格式因版本略有差异，以当前 GRUB 为准。）

---

若你遇到未覆盖的问题，可结合 `journalctl`、`dmesg` 和具体报错信息进一步排查，或查阅 [Ubuntu Server 文档](https://ubuntu.com/server/docs)。
