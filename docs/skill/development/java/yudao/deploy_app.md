---
outline: "deep"
---

# 部署

## 部署后端服务


### 修改配置


（1）修改 `yudao\ruoyi-vue-pro\yudao-server\target\classes` 目录下的 `application-dev.yaml`，主要是修改ip地址

``` yaml
···
datasource:
master:
    url: jdbc:mysql://bongxin.cn:33306/ruoyi-vue-pro?useSSL=false&serverTimezone=Asia/Shanghai&allowPublicKeyRetrieval=true&nullCatalogMeansCurrent=true # MySQL Connector/J 8.X 连接的示例
    username: root
    password: 123456
slave: # 模拟从库，可根据自己需要修改 # 模拟从库，可根据自己需要修改
    lazy: true # 开启懒加载，保证启动速度
    url: jdbc:mysql://bongxin.cn:33306/ruoyi-vue-pro?useSSL=false&serverTimezone=Asia/Shanghai&allowPublicKeyRetrieval=true&nullCatalogMeansCurrent=true # MySQL Connector/J 8.X 连接的示例
    username: root
    password: 123456
···          
```


（2）修改 `yudao\ruoyi-vue-pro\yudao-server\target\classes` 目录下的 `application-dev.yaml`，主要是修改host地址

``` yaml
···  
# Redis 配置。Redisson 默认的配置足够使用，一般不需要进行调优
data:
redis:
    host: bongxin.cn # 地址
    port: 36379 # 端口
    database: 1 # 数据库索引
···
```

（3）修改 `yudao\ruoyi-vue-pro\yudao-server\target\classes` 目录下的 `application-dev.yaml`，主要是修改为 `demo: false`

``` yaml
# 芋道配置项，设置当前项目所有自定义的配置
yudao:
  captcha:
    enable: false # 本地环境，暂时关闭图片验证码，方便登录等接口的测试；
  security:
    mock-enable: true
  pay:
    order-notify-url: http://yunai.natapp1.cc/admin-api/pay/notify/order # 支付渠道的【支付】回调地址
    refund-notify-url: http://yunai.natapp1.cc/admin-api/pay/notify/refund # 支付渠道的【退款】回调地址
  access-log: # 访问日志的配置项
    enable: false
  demo: false # 关闭演示模式
``` 

（4）修改 `yudao\ruoyi-vue-pro\yudao-server\target\classes` 目录下的 `application-dev.yaml`，主要是补充 `captcha.enable: false`
```
···
# 芋道配置项，设置当前项目所有自定义的配置
yudao:
  captcha:
    enable: false # 本地环境，暂时关闭图片验证码，方便登录等接口的测试；
  pay:
    order-notify-url: http://yunai.natapp1.cc/admin-api/pay/notify/order # 支付渠道的【支付】回调地址
    refund-notify-url: http://yunai.natapp1.cc/admin-api/pay/notify/refund # 支付渠道的【退款】回调地址
  demo: false # 开启演示模式
  tencent-lbs-key: TVDBZ-TDILD-4ON4B-PFDZA-RNLKH-VVF6E # QQ 地图的密钥 https://lbs.qq.com/service/staticV2/staticGuide/staticDoc
···
```

（5）修改 `application.yaml` 配置，将 `active: local` 改成 `dev`

``` yaml
spring:
  application:
    name: yudao-server

  profiles:
    active: local

  main:
    allow-circular-references: true # 允许循环依赖，因为项目是三层架构，无法避免这个情况。
···
```

### 编译代码

使用 IDEA 自带的 Maven 插件，进行项目的编译

maven终端执行 `mvn clean install package -Dmaven.test.skip=true`

### 上传jar包

打包生成的jar包在 `yudao\ruoyi-vue-pro\yudao-server\target` 目录下

在 Linux 服务器上创建 `/work/projects/yudao-server` 目录，使用 scp 命令或者 FTP 工具，将 `yudao-server.jar` 上传到该目录下


### 构建镜像

(1) 在 `/work/projects/yudao-server` 目录下，新建 `Dockerfile` 文件，用于制作后端项目的 Docker 镜像。编写内容如下：


::: warning
根据打包编辑的jdk版本，选择合适的jdk镜像
:::

``` Dockerfile
## AdoptOpenJDK 停止发布 OpenJDK 二进制，而 Eclipse Temurin 是它的延伸，提供更好的稳定性
## 感谢复旦核博士的建议！灰子哥，牛皮！
FROM openjdk:17-jdk-alpine AS builder
# FROM m.daocloud.io/docker.io/eclipse-temurin:8-jre

## 创建目录，并使用它作为工作目录
RUN mkdir -p /yudao-server
WORKDIR /yudao-server
## 将后端项目的 Jar 文件，复制到镜像中
COPY yudao-server.jar app.jar

## 设置 TZ 时区
## 设置 JAVA_OPTS 环境变量，可通过 docker run -e "JAVA_OPTS=" 进行覆盖
ENV TZ=Asia/Shanghai JAVA_OPTS="-Xms512m -Xmx512m"

## 暴露后端项目的 48080 端口
EXPOSE 48080

## 启动后端项目
ENTRYPOINT java ${JAVA_OPTS} -Djava.security.egd=file:/dev/./urandom -jar app.jar

```

(2) 执行如下命令，构建名字为 `yudao-server` 的 Docker 镜像。

``` sh
cd /work/projects/yudao-server
docker build -t yudao-server .

```

(3) 在 `/work/projects/yudao-server` 目录下，新建 Shell 脚本 `deploy.sh`，使用 Docker 启动后端项目。编写内容如下：

``` sh
#!/bin/bash
set -e

## 第一步：删除可能启动的老 yudao-server 容器
echo "开始删除 yudao-server 容器"
docker stop yudao-server || true
docker rm yudao-server || true
echo "完成删除 yudao-server 容器"

## 第二步：启动新的 yudao-server 容器 \
echo "开始启动 yudao-server 容器"
docker run -d \
--name yudao-server \
-p 48080:48080 \
-e "SPRING_PROFILES_ACTIVE=dev" \
-v /work/projects/yudao-server:/root/logs/ \
yudao-server
echo "正在启动 yudao-server 容器中，需要等待 60 秒左右"

```

应用日志文件，挂载到服务器的的 /work/projects/yudao-server 目录下

通过 SPRING_PROFILES_ACTIVE 设置为 dev 开发环境

### 启动后端

(1) 执行 `sh deploy.sh` 命令，使用 Docker 启动后端项目。日志如下：

``` sh
开始删除 yudao-server 容器
yudao-server
yudao-server
完成删除 yudao-server 容器
开始启动 yudao-server 容器
0dfd3dc409a53ae6b5e7c5662602cf5dcb52fd4d7f673bd74af7d21da8ead9d5
正在启动 yudao-server 容器中，需要等待 60 秒左右

```

(2) 执行 docker logs yudao-server 命令，查看启动日志。


## 部署前端应用

### 修改配置

前端 dev 开发环境对应的是 `.env.dev` 配置文件，主要是修改 `VITE_BASE_URL` 为你的后端项目的访问地址。

``` json
# 开发环境：本地只启动前端项目，依赖开发环境（后端、APP）
NODE_ENV=production

VITE_DEV=true

# 请求路径
VITE_BASE_URL='https://bongxin.com.cn'

# 文件上传类型：server - 后端上传， client - 前端直连上传，仅支持S3服务
VITE_UPLOAD_TYPE=server
# 上传路径
VITE_UPLOAD_URL='https://bongxin.com.cn/admin-api/infra/file/upload'

# 接口地址
VITE_API_URL=/admin-api

# 是否删除debugger
VITE_DROP_DEBUGGER=false

# 是否删除console.log
VITE_DROP_CONSOLE=false

# 是否sourcemap
VITE_SOURCEMAP=true

# 打包路径
VITE_BASE_PATH=/

# 输出路径
VITE_OUT_DIR=dist

# 商城H5会员端域名
VITE_MALL_H5_DOMAIN='https://mall.bongxin.com.cn'

# 验证码的开关
VITE_APP_CAPTCHA_ENABLE=true

```

### 编译代码

在前端项目的根目录下，执行 `npm run build:dev` 命令，编译前端项目，构建出它的 `dist` 文件

### 上传 dist 文件

在 Linux 服务器上创建 `/work/projects/yudao-ui-admin` 目录，使用 scp 命令或者 FTP 工具，将 dist 上传到该目录

#### 打包压缩包

进入 `dist` 文件夹，使用 `7zip` 将文件打包压缩包 `dist.tar`

#### 上传压缩包

使用 `MobaXterm` 上传 `dist.tar` 到服务器 `/work/projects/yudao-ui-admin` 目录

#### 解压压缩包

``` sh
tar -xf dist.tar
```

### 配置 Nginx 转发

两种 Nginx 的配置，分别满足服务器 IP、独立域名的不同场景。

::: warning
Nginx配置必须加上这三行，不然访问会报404错误

``` sh
location = /index.html {
    root   /usr/share/nginx/html/yudao-ui-admin;
}
```
:::

#### 方式一：服务器 IP 访问

::: tip
公网IP动态变化，因此不建议`服务器 IP 访问`的方式
:::

(1) 在 `/work/nginx/conf.d` 目录下，创建 `ruoyi-vue-pro.conf`，内容如下：

``` sh
server {
    listen       80;
    server_name  8.138.22.121; ## 重要！！！修改成你的外网 IP/域名

    location / { ## 前端项目
        root   /usr/share/nginx/html/yudao-ui-admin;
        index  index.html index.htm;
        try_files $uri $uri/ /index.html;
    }

    location = /index.html {
        root   /usr/share/nginx/html/yudao-ui-admin;
    }

    location /admin-api/ { ## 后端项目 - 管理后台
        proxy_pass http://172.25.142.160:48080/admin-api/; ## 重要！！！proxy_pass 需要设置为后端项目所在服务器的 IP
        proxy_set_header Host $http_host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header REMOTE-HOST $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }

    location /app-api/ { ## 后端项目 - 用户 App
        proxy_pass http://172.25.142.160:48080/app-api/; ## 重要！！！proxy_pass 需要设置为后端项目所在服务器的 IP
        proxy_set_header Host $http_host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header REMOTE-HOST $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }

}

```

(2) 执行 `docker exec yudao-nginx nginx -s reload` 命令，重新加载 Nginx 配置。


(3) 执行 `curl http://8.138.22.121/admin-api/` 命令，成功访问后端项目的内网地址，返回结果如下：

```
{"code":401,"data":null,"msg":"账号未登录"}

```

(4) 请求 `http://8.138.22.121` 地址，成功访问前端项目的外网地址


#### 方式二：独立域名访问（推荐）

(1) 在 `/work/nginx/conf.d` 目录下，创建 `ruoyi-vue-pro2.conf`，内容如下：

``` sh
server {
    listen       443 ssl; # 监听 HTTPS 端口
    server_name  bongxin.com.cn; # 您的域名

    ssl_certificate /etc/nginx/cert/bongxin.com.cn_bundle.crt; # 使用 bundle.crt 文件
    ssl_certificate_key /etc/nginx/cert/bongxin.com.cn.key; # 私钥文件

    # SSL 相关配置
    ssl_session_timeout 1d;
    ssl_session_cache shared:SSL:50m;
    ssl_protocols TLSv1.2 TLSv1.3; # 使用最新的加密协议
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;

    # OCSP Stapling 配置
    ssl_stapling on;
    ssl_stapling_verify on;
    resolver 8.8.8.8 valid=300s;
    resolver_timeout 5s;

    location / { ## 前端项目
        root   /usr/share/nginx/html/yudao-ui-admin;
        index  index.html index.htm;
        try_files $uri $uri/ /index.html;
    }

    location = /index.html {
        root   /usr/share/nginx/html/yudao-ui-admin;
    }

    # 配置反向代理到 HTTP 服务器
    location /yudaoyuanma/ {
        proxy_pass http://bongxin.cn:39000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    location /admin-api/ { ## 后端项目 - 管理后台
        proxy_pass http://172.25.142.160:48080/admin-api/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }

    location /app-api/ { ## 后端项目 - 用户 App
        proxy_pass http://172.25.142.160:48080/app-api/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}

server {
    listen       80;
    server_name  bongxin.com.cn; ## 重要！！！修改成你的外网 IP/域名

    # 将所有 HTTP 请求重定向到 HTTPS
    if ($scheme != "https") {
        return 301 https://$host$request_uri;
    }

    location / { ## 前端项目
        root   /usr/share/nginx/html/yudao-ui-admin;
        index  index.html index.htm;
        try_files $uri $uri/ /index.html;
    }

    location = /index.html {
        root   /usr/share/nginx/html/yudao-ui-admin;
    }

    location /admin-api/ { ## 后端项目 - 管理后台
        proxy_pass http://172.25.142.160:48080/admin-api/; ## 重要！！！proxy_pass 需要设置为后端项目所在服务器的 IP
        proxy_set_header Host $http_host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header REMOTE-HOST $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }

    location /app-api/ { ## 后端项目 - 用户 App
        proxy_pass http://172.25.142.160:48080/app-api/; ## 重要！！！proxy_pass 需要设置为后端项目所在服务器的 IP
        proxy_set_header Host $http_host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header REMOTE-HOST $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }

    # 配置反向代理到 MinIO 服务器
    location /yudaoyuanma/ {
        proxy_pass http://bongxin.cn:39000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}

```

(2) 执行 `docker exec yudao-nginx nginx -s reload` 命令，重新加载 Nginx 配置。


(3) 执行 `curl http://bongxin.com.cn/admin-api/` 命令，成功访问后端项目的内网地址，返回结果如下：

```
{"code":401,"data":null,"msg":"账号未登录"}

```

(4) 请求 `http://bongxin.com.cn` 地址，成功访问前端项目的外网地址


## MinIO配置

（1） 访问 `http://bongxin.cn:39001/`

（2） 配置 `Buckets`，创建名为 `yudaoyuanma`

（3） 配置 `yudaoyuanma` 的 `Anonymous`, 点击 `Add Access Rule +`

* Prefix: `/`
* Access: `readonly`

### 验证

（1）上传图片 `tmp_db206877393365b29ccf8c960b1b0d9b.jpg`

（2）访问 `http://bongxin.cn:39000/yudaoyuanma/tmp_db206877393365b29ccf8c960b1b0d9b.jpg`

### 获取Access Key

（1） 配置 `Access Keys`， 点击 `Add Access Rule +`

* Access Key: `******`
* Secret Key: `******`

### 修改Nginx配置

::: danger 重点
解决浏览器自动转https导致minio无法访问问题
:::

```
···
# 配置反向代理到 HTTP 服务器
location /yudaoyuanma/ {
    proxy_pass http://bongxin.cn:39000;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
}
···
```
完整nginx配置，见[配置Nginx转发方法二：独立域名访问（推荐）](#方式二-独立域名访问-推荐)

### 配置系统文件配置

菜单项：`文件管理-文件配置`

* 配置名: `MinIO存储`
* 存储器: `S3 对象存储`
* 节点地址: `http://bongxin.cn:39000`
* 节点地址: `yudaoyuanma`
* accessKey: `******`
* accessSecret: `******`


## 部署商城应用（H5）

::: tip 前置准备

① 克隆 [https://github.com/yudaocode/yudao-mall-uniapp](https://github.com/yudaocode/yudao-mall-uniapp) 项目。

② 下载 `HBuilder` 工具，并进行安装。

③ 点击 HBuilder 的 [文件 -> 导入 -> 从本地项目导入...] 菜单，选择克隆的 `yudao-mall-uniapp` 目录

:::

### 安装依赖

``` sh 
npm i
```

### 修改配置

``` json
# 版本号
SHOPRO_VERSION = v1.8.3

# 后端接口 - 正式环境（通过 process.env.NODE_ENV 非 development）
SHOPRO_BASE_URL = http://api-dashboard.yudao.iocoder.cn

# 后端接口 - 测试环境（通过 process.env.NODE_ENV = development）
SHOPRO_DEV_BASE_URL = http://bongxin.com.cn:48080
### SHOPRO_DEV_BASE_URL = http://yunai.natapp1.cc

# 后端接口前缀（一般不建议调整）
SHOPRO_API_PATH = /app-api

# 后端 websocket 接口前缀
SHOPRO_WEBSOCKET_PATH = /infra/ws

# 开发环境运行端口
SHOPRO_DEV_PORT = 3000

# 客户端静态资源地址 空=默认使用服务端指定的CDN资源地址前缀 | local=本地  |  http(s)://xxx.xxx=自定义静态资源地址前缀
SHOPRO_STATIC_URL = https://file.sheepjs.com

# 是否开启直播  1 开启直播 | 0 关闭直播 (小程序官方后台未审核开通直播权限时请勿开启)
SHOPRO_MPLIVE_ON = 0

# 租户ID 默认 1
SHOPRO_TENANT_ID = 1
```

### 打包项目

1. HBuilder 打开 `uni-app项目 -> 发行 -> 网站 -> PC Web或手机H5` 

2. 点完之后会弹出一个框, 填写 `网站标题` 和 `网站域名` 之后点 `发行`

3.  点完之后控制台会显示正在编译中... , 稍等一会

4. 打包成功, 生成了unpackage文件夹, 打包好的文件存放在里面 `yudao-mall-uniapp\unpackage\dist\build\web`


### 上传 web 文件

在 Linux 服务器上创建 `/work/projects/yudao-ui-mall` 目录，使用 scp 命令或者 FTP 工具，将 web 上传到该目录

#### 打包压缩包

进入 `web` 文件夹，使用 `7zip` 将文件打包压缩包 `web.tar`

#### 上传压缩包

使用 `MobaXterm` 上传 `web.tar` 到服务器 `/work/projects/yudao-ui-mall` 目录

#### 解压压缩包

``` sh
tar -xf web.tar
```

### 配置 Nginx 转发


::: tip 提示
复制服务器 `/work/projects/yudao-ui-mall` 目录到 `/work/nginx/html/yudao-ui-mall`
``` sh
mkdir /work/nginx/html/yudao-ui-mall
cp /work/projects/yudao-ui-mall/* /work/nginx/html/yudao-ui-mall
```
:::

#### 独立域名访问（推荐）（未验证）

(1) 在 `/work/nginx/conf.d` 目录下，创建 `ruoyi-vue-pro3.conf`，内容如下：

``` sh
# 二级域名配置
server {
    listen       443 ssl; # 监听 HTTPS 端口
    server_name  mall.bongxin.com.cn; # 二级域名

    # 配置 SSL 证书
    ssl_certificate /etc/nginx/cert/bongxin.com.cn_bundle.crt; # 使用 bundle.crt 文件
    ssl_certificate_key /etc/nginx/cert/bongxin.com.cn.key; # 私钥文件

    # SSL 相关配置
    ssl_session_timeout 1d;
    ssl_session_cache shared:SSL:50m;
    ssl_protocols TLSv1.2 TLSv1.3; # 使用最新的加密协议
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;

    # OCSP Stapling 配置
    ssl_stapling on;
    ssl_stapling_verify on;
    resolver 8.8.8.8 valid=300s;
    resolver_timeout 5s;

    # HTTP 重定向到 HTTPS
    if ($scheme != "https") {
        return 301 https://$host$request_uri;
    }

    location / {
        proxy_pass http://172.25.142.160:3000; ## 将请求转发到本地主机的 3000 端口
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }

    # 错误页面配置
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }
}

server {
    listen       80;
    server_name  mall.bongxin.com.cn; ## 二级域名

    location / {
        proxy_pass http://localhost:3000; ## 将请求转发到本地主机的 3000 端口
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }

    # 错误页面配置
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }
}

# 3000 端口上的前端项目配置
server {
    listen       3000;

    location / { ## 前端项目
        root   /usr/share/nginx/html/yudao-ui-mall;
        index  index.html index.htm;
        try_files $uri $uri/ /index.html;
    }

    location = /index.html {
        root   /usr/share/nginx/html/yudao-ui-mall;
    }
}
```

``` sh

# HTTPS 服务器块
server {
    listen       443 ssl; # 监听 HTTPS 端口
    server_name  mall.bongxin.com.cn; # 二级域名

    # 配置 SSL 证书
    ssl_certificate /etc/nginx/cert/bongxin.com.cn_bundle.crt; # 使用 bundle.crt 文件
    ssl_certificate_key /etc/nginx/cert/bongxin.com.cn.key; # 私钥文件

    # SSL 相关配置
    ssl_session_timeout 1d;
    ssl_session_cache shared:SSL:50m;
    ssl_protocols TLSv1.2 TLSv1.3; # 使用最新的加密协议
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;

    # OCSP Stapling 配置
    ssl_stapling on;
    ssl_stapling_verify on;
    resolver 8.8.8.8 valid=300s;
    resolver_timeout 5s;

    # HTTP 重定向到 HTTPS
    if ($scheme != "https") {
        return 301 https://$host$request_uri;
    }

    location / {
        proxy_pass http://172.25.142.160:3000; ## 将请求转发到目标服务器的 3000 端口
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }

    # 错误页面配置
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }
}

# 3000 端口上的前端项目配置
server {
    listen       3000;

    location / { ## 前端项目
        root   /usr/share/nginx/html/yudao-ui-mall;
        index  index.html index.htm;
        try_files $uri $uri/ /index.html;
    }

    location = /index.html {
        root   /usr/share/nginx/html/yudao-ui-mall;
    }
}

```

(2) 执行 `docker exec yudao-nginx nginx -s reload` 命令，重新加载 Nginx 配置。


(3) 请求 `http://mall.bongxin.com.cn` 地址，成功访问商城项目的外网地址
