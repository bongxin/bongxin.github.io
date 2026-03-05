# OpenVPN服务

## 配置 VPN 服务器可以通过以下步骤来实现，以 OpenVPN 为例：

### 1. 安装 OpenVPN 和 Easy-RSA

首先，在你的服务器上安装 OpenVPN 和 Easy-RSA：

```bash
sudo apt update
sudo apt install openvpn easy-rsa
```

### 2. 设置 Easy-RSA PKI 目录

创建并进入 Easy-RSA 的工作目录：

```bash
make-cadir ~/openvpn-ca
cd ~/openvpn-ca
```

初始化 PKI 目录：

```bash
./easyrsa init-pki
```

### 3. 生成 CA 证书

生成 CA 证书（根证书）：

```bash
./easyrsa build-ca
```

过程中会提示输入通用名称（Common Name），你可以为你的 CA 选择一个名称。

### 4. 生成服务器证书、密钥和 Diffie-Hellman 参数

生成服务器的密钥和证书请求（CSR）：

```bash
./easyrsa gen-req server nopass
```

签署服务器证书：

```bash
./easyrsa sign-req server server
```

生成 Diffie-Hellman 参数：

```bash
./easyrsa gen-dh
```

生成 HMAC 密钥（用于增强安全性）：

```bash
openvpn --genkey secret ta.key
```
::: warning
旧版本用的是这个`--secret`
```bash
openvpn --genkey --secret ta.key
```bash
:::

### 5. 配置 OpenVPN 服务器

复制示例配置文件到 OpenVPN 目录：

```bash
sudo cp /usr/share/doc/openvpn/examples/sample-config-files/server.conf.gz /etc/openvpn/
sudo gunzip /etc/openvpn/server.conf.gz
```

编辑 `server.conf` 文件：

```bash
sudo nano /etc/openvpn/server.conf
```

修改以下参数：

- `ca`, `cert`, `key`, `dh`：指定 CA 证书、服务器证书、服务器密钥、Diffie-Hellman 参数的路径，例如：

  ```bash
  ca /etc/openvpn/ca.crt
  cert /etc/openvpn/server.crt
  key /etc/openvpn/server.key
  dh /etc/openvpn/dh.pem
  ```

- `server`：指定虚拟IP地址范围，例如：

  ```bash
  server 10.8.0.0 255.255.255.0
  ```

- 启用 `tls-auth` 并指定 HMAC 密钥：

  ```bash
  tls-auth /etc/openvpn/ta.key 0
  ```

- 确保 `client-to-client` 行未被注释，以允许客户端之间通信：

  ```bash
  client-to-client
  ```

### 6. 配置 IP 转发和防火墙

启用 IP 转发：

```bash
sudo nano /etc/sysctl.conf
```

找到并取消 `net.ipv4.ip_forward=1` 前的注释，保存退出，然后使更改生效：

```bash
sudo sysctl -p
```

设置防火墙规则：

```bash
sudo iptables -t nat -A POSTROUTING -s 10.8.0.0/24 -o eth0 -j MASQUERADE
```

确保防火墙允许 OpenVPN 端口（默认是 UDP 1194）：

```bash
sudo ufw allow 1194/udp
```

### 7. 启动 OpenVPN 服务

启动并使 OpenVPN 在开机时自动启动：

```bash
sudo systemctl start openvpn@server
sudo systemctl enable openvpn@server
```

### 8. 配置客户端文件

在服务器上生成客户端证书和密钥：

```bash
cd ~/openvpn-ca
./easyrsa gen-req client1 nopass
./easyrsa sign-req client client1
```

将生成的客户端证书、密钥、`ca.crt`、`ta.key` 复制到客户端设备上。

为客户端创建 OpenVPN 配置文件 `client1.ovpn`，并将其分发到客户端：

```bash
client
dev tun
proto udp
remote YOUR_SERVER_IP 1194
resolv-retry infinite
nobind
persist-key
persist-tun
ca ca.crt
cert client1.crt
key client1.key
remote-cert-tls server
tls-auth ta.key 1
cipher AES-256-CBC
verb 3
```

### 9. 连接客户端

在客户端设备上使用 OpenVPN 连接：

```bash
openvpn --config client1.ovpn
```

连接成功后，客户端就可以通过 VPN 访问内网服务器了。

### 10. 验证配置

通过客户端连接 VPN 后，检查是否可以访问内网服务器。如果无法访问，检查以下几点：

- 防火墙配置是否正确。
- 是否正确配置了 IP 转发。
- 检查 OpenVPN 服务日志 (`/var/log/openvpn.log`) 以诊断潜在问题。

通过这些步骤，您将成功配置并运行一个 OpenVPN 服务器，使客户端能够通过 VPN 访问内网资源。





