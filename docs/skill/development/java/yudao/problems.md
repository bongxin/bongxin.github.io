# 常见问题

## 502 Bad Gateway

使用过程中，有时会无法访问文件资源。通常是有nginx导致，目前的解决办法是重启nginx容器。
``` sh
docker restart yudao-nginx
```