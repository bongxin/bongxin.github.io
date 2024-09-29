---
outline: "deep"
---

# 部署

## Docker部署

::: tip 小贴士
镜像加速：[DaoCloud / public-image-mirror](https://github.com/DaoCloud/public-image-mirror)
:::

### MySQL

#### 创建挂载目录

```
mkdir /work/mysql
```

#### 创建Docker容器

```
docker run -v /work/mysql/:/var/lib/mysql \
-p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 \
--restart=always --name mysql -d mysql
```

#### 创建数据库

* 数据库名：`ruoyi-vue-pro`
* sql脚本：`ruoyi-vue-pro\sql\mysql\ruoyi-vue-pro.sql`
* 数据库图形化工具：[Navicat Premium 17](https://navicat.com.cn/download/direct-download?product=navicat17_premium_cs_x64.exe&location=1)

::: tip 小贴士
Navicat Premium 17 补丁
* 链接:https://pan.baidu.com/s/19s4_35KQMd_gywgtqIulaQ 
* 提取码:9gm3
:::

### MinIO
```
docker run -p 9000:9000 -p 9001:9001 \
           --name yudao-minio \
           -e MINIO_ACCESS_KEY=admin \
           -e MINIO_SECRET_KEY=password \
           -v /Users/yunai/minio:/data \
           minio/minio server /data --console-address ":9001"
```

### nginx
```
docker run -d \
           --name nginx-yudao \
           --restart always \
           -p 80:80 \
           -p 443:443 \
           -e TZ=Asia/Shanghai \
           -v /work/nginx/nginx.conf:/etc/nginx/nginx.conf \
           -v /work/nginx/conf.d:/etc/nginx/conf.d \
           -v /work/nginx/logs:/var/log/nginx \
           -v /work/nginx/cert:/etc/nginx/cert \
           -v /work/nginx/html:/usr/share/nginx/html \
           c919045c4c2b
```