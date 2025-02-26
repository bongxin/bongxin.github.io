# 认识Docker Compose

Docker Compose 是一个用于定义和运行多容器 Docker 应用程序的工具。通过一个 docker-compose.yml 文件，你可以配置应用程序的服务、网络和卷等，然后使用一条命令启动所有服务。

## Nginx

### 运行一个Nginx容器

### 创建挂载目录和复制挂载文件

#### 创建挂载目录
> 本地的挂载目录：/data/docker/nginx

需要创建的挂载目录如下：
- /data/docker/nginx/conf/cert
- /data/docker/nginx/conf/conf.d
- /data/docker/nginx/html
- /data/docker/nginx/logs

#### 复制挂载文件

需要复制的文件有以下三个：
- /etc/nginx/nginx.conf
- /etc/nginx/conf.d/default.conf
- /usr/share/nginx/html

``` sh
cp silly_wozniak:/etc/nginx/nginx.conf ./conf
```

``` sh
docker cp silly_wozniak:/etc/nginx/conf.d/default.conf ./conf/conf.d
```

``` sh
docker cp silly_wozniak:/usr/share/nginx/html/ ./
```

### 准备docker-compose文件
``` yml
services:
  nginx:
    restart: always
    container_name: nginx
    image: nginx
    ports:
      - "80:80"
      - "443:443"
    volumes:
      # 挂载主配置文件
      - E:/data/docker/nginx/conf/nginx.conf:/etc/nginx/nginx.conf
      # 挂载自定义配置目录
      - E:/data/docker/nginx/conf/conf.d:/etc/nginx/conf.d
      # 挂载日志目录
      - E:/data/docker/nginx/logs:/var/log/nginx
      # 挂载静态资源目录
      - E:/data/docker/nginx/html:/usr/share/nginx/html
      # 挂载证书目录
      - E:/data/docker/nginx/conf/cert:/etc/nginx/cert
    environment:
      - NGINX_PORT=80
      - TZ=Asia/Shanghai
    privileged: true
``` 

> 本地的挂载目录：/data/docker/docker-compose.yml

### 创建和启动容器

``` sh
docker-compose up -d
···