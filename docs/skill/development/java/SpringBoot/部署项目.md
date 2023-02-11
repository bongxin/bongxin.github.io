# 部署项目

## 修改配置文件

### application-druid.yml

修改数据库连接信息

```yml
# 数据源配置
spring:
    datasource:
        type: com.alibaba.druid.pool.DruidDataSource
        driverClassName: com.mysql.cj.jdbc.Driver
        druid:
            # 主库数据源
            master:
                # 开发环境
                # url: jdbc:mysql://localhost:3306/ry-vue?useUnicode=true&characterEncoding=utf8&zeroDateTimeBehavior=convertToNull&useSSL=true&serverTimezone=GMT%2B8
                # username: root
                # password: 123456
                # 测试环境
                url: jdbc:mysql://192.168.3.119:3306/ruoyi-vue?useUnicode=true&characterEncoding=utf8&zeroDateTimeBehavior=convertToNull&useSSL=true&serverTimezone=GMT%2B8
                username: ruoyi-vue
                password: 123456
            # 从库数据源
            slave:
            ...
```

### application.yml

修改 Redis 连接信息

```yml
  # redis 配置
  redis:
    # 开发环境
    # 地址
    # host: localhost
    # 端口，默认为6379
    # port: 6379
    # 数据库索引
    # database: 0
    # 密码
    # password:

    # 测试环境
    # 地址
    host: 192.168.3.119
    # 端口，默认为6379
    port: 6379
    # 数据库索引
    database: 0
    # 密码
    password: 123456
    # 连接超时时间
    timeout: 10s
    ...
```

## 打包

打包类型包括`.jar`和`.war`两种类型，可通过`pom.xml`文件的`<packaging>`配置项修改

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <parent>
        <artifactId>ruoyi</artifactId>
        <groupId>com.ruoyi</groupId>
        <version>3.8.5</version>
    </parent>
    <modelVersion>4.0.0</modelVersion>
    <packaging>jar</packaging>
    <artifactId>ruoyi-admin</artifactId>
```

## 运行

将打包好的包，通过 XFTP 或者宝塔面板上传到服务器任意目录，例如`/www/wwwroot/`

> 前提是安装了 java 运行环境，推荐 JDK8

### 方法一

```sh
java -jar xxx.jar &
```

& 表示后台运行，ssh 窗口不被锁定，但是关闭窗口时，程序还是会退出。

### 方法二

```sh
nohup java -jar xxx.jar &
```

nohup 表示不挂断运行命令行，当账号退出或关闭终端时，程序仍然运行。

当用 nohup 命令执行作业时，该作业的所有输出被重定向到 nohup.out 的文件中，除非另外指定了输出文件。

### 方法三

```sh
nohup java -jar xxx.jar >/usr/local/temp.txt &
```

nohup java -jar xxx.jar >/usr/local/temp.txt &

## 脚本运行

书写一个 shell 脚本

```sh
#!/bin/bash
#这里可替换为你自己的执行程序，其他代码无需更改
APP_NAME=test_jar-1.0-SNAPSHOT.jar


#使用说明，用来提示输入参数
usage() {
    echo "Usage: sh 脚本名.sh [start|stop|restart|status]"
    exit 1
}

#检查程序是否在运行
is_exist(){
  pid=`ps -ef|grep $APP_NAME|grep -v grep|awk '{print $2}' `
  #如果不存在返回1，存在返回0
  if [ -z "${pid}" ]; then
   return 1
  else
    return 0
  fi
}

#启动方法
start(){
  is_exist
  if [ $? -eq "0" ]; then
    echo "${APP_NAME} is already running. pid=${pid} ."
  else
    nohup java -Xmx512m -Xms512m -jar $APP_NAME  > test2.txt 2>&1 &
    echo "${APP_NAME} start success"
  fi
}

#停止方法
stop(){
  is_exist
  if [ $? -eq "0" ]; then
    kill -9 $pid
  else
    echo "${APP_NAME} is not running"
  fi
}

#输出运行状态
status(){
  is_exist
  if [ $? -eq "0" ]; then
    echo "${APP_NAME} is running. Pid is ${pid}"
  else
    echo "${APP_NAME} is NOT running."
  fi
}

#重启
restart(){
  stop
  start
}

#根据输入参数，选择执行对应方法，不输入则执行使用说明
case "$1" in
  "start")
    start
    ;;
  "stop")
    stop
    ;;
  "status")
    status
    ;;
  "restart")
    restart
    ;;
  *)
    usage
    ;;
esac

```

## 停止 jar

### 方法一

根据端口号查询进程编号，在根据进程编号关闭。

```sh
netstat -lnp|grep 端口号
```

通过`kill -9` 进程编号关闭

```sh
kill -9 进程编号
```

### 方法二

直接使用 jps 列出所有启动的 Java 线程，然后使用 kill -9 进程号关闭。

### 方法三

ps -ef|grep XXX.jar

```sh
ps -ef|grep XXX.jar
```

使用 kill -9 进程号关闭
