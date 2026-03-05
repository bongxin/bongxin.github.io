# WSL2

## 简单命令

```sh 
# 查看版本
wsl -l -v

# 设置wsl2
wsl --set-default-version 2

# 查看安装的子系统
wsl --list --verbose

# 卸载安装的子系统
wsl --unregister Ubuntu-24.04

# 关闭wsl
wsl --shutdown

```

## 安装子系统

上微软应用商店搜索`wsl`

## 设置systemd

在 WSL 2 中安装的 Ubuntu 可能默认使用的是 SysVinit 而不是 systemd

在/etc目录新建wsl.conf文件，添加如下内容

```
[boot]
systemd=true
```

## 安装Docker(废弃)

### 0卸载
```
sudo apt-get remove -y docker docker-engine docker.io containerd runc
```

### 1更新软件包
```
sudo apt update
sudo apt upgrade
```

### 2安装docker依赖
```
sudo apt-get install ca-certificates curl gnupg lsb-release
```

### 3添加Docker官方GPG密钥
```
sudo curl -fsSL http://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo apt-key add -
```

### 4添加Docker软件源
```
sudo add-apt-repository "deb [arch=amd64] https://mirrors.aliyun.com/docker-ce/linux/ubuntu $(lsb_release -cs) stable"
```

### 5再次更新软件包
```
sudo apt update
sudo apt upgrade
```

### 6安装docker-ce
```
sudo apt-get install docker-ce
```

### 7配置用户组

默认情况下，只有root用户和docker组的用户才能运行Docker命令。我们可以将当前用户添加到docker组，以避免每次使用Docker时都需要使用sudo。

```
sudo usermod -aG docker $USER
```

### 8配置daemon.json
在/etc/docker下创建一个daemon.json：

```
{
  "registry-mirrors": ["https://xxxxxxxx.mirror.aliyuncs.com"]
}
```

### 9设置启动项和启动docker
```
sudo systemctl enable docker ; sudo systemctl start docker
```

## Ubuntu Docker安装
使用国内 daocloud 一键安装命令：
```
sudo curl -sSL https://get.daocloud.io/docker | sh

```