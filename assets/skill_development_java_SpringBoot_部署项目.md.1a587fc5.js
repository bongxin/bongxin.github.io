import{_ as s,c as a,o as n,b as l}from"./app.2ef68240.js";const A=JSON.parse('{"title":"部署项目","description":"","frontmatter":{},"headers":[],"relativePath":"skill/development/java/SpringBoot/部署项目.md","lastUpdated":1681134237000}'),p={name:"skill/development/java/SpringBoot/部署项目.md"},o=l(`<h1 id="部署项目" tabindex="-1">部署项目 <a class="header-anchor" href="#部署项目" aria-hidden="true">#</a></h1><h2 id="修改配置文件" tabindex="-1">修改配置文件 <a class="header-anchor" href="#修改配置文件" aria-hidden="true">#</a></h2><h3 id="application-druid-yml" tabindex="-1">application-druid.yml <a class="header-anchor" href="#application-druid-yml" aria-hidden="true">#</a></h3><p>修改数据库连接信息</p><div class="language-yml"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 数据源配置</span></span>
<span class="line"><span style="color:#A6ACCD;">spring:</span></span>
<span class="line"><span style="color:#A6ACCD;">    datasource:</span></span>
<span class="line"><span style="color:#A6ACCD;">        type: com.alibaba.druid.pool.DruidDataSource</span></span>
<span class="line"><span style="color:#A6ACCD;">        driverClassName: com.mysql.cj.jdbc.Driver</span></span>
<span class="line"><span style="color:#A6ACCD;">        druid:</span></span>
<span class="line"><span style="color:#A6ACCD;">            # 主库数据源</span></span>
<span class="line"><span style="color:#A6ACCD;">            master:</span></span>
<span class="line"><span style="color:#A6ACCD;">                # 开发环境</span></span>
<span class="line"><span style="color:#A6ACCD;">                # url: jdbc:mysql://localhost:3306/ry-vue?useUnicode=true&amp;characterEncoding=utf8&amp;zeroDateTimeBehavior=convertToNull&amp;useSSL=true&amp;serverTimezone=GMT%2B8</span></span>
<span class="line"><span style="color:#A6ACCD;">                # username: root</span></span>
<span class="line"><span style="color:#A6ACCD;">                # password: 123456</span></span>
<span class="line"><span style="color:#A6ACCD;">                # 测试环境</span></span>
<span class="line"><span style="color:#A6ACCD;">                url: jdbc:mysql://192.168.3.119:3306/ruoyi-vue?useUnicode=true&amp;characterEncoding=utf8&amp;zeroDateTimeBehavior=convertToNull&amp;useSSL=true&amp;serverTimezone=GMT%2B8</span></span>
<span class="line"><span style="color:#A6ACCD;">                username: ruoyi-vue</span></span>
<span class="line"><span style="color:#A6ACCD;">                password: 123456</span></span>
<span class="line"><span style="color:#A6ACCD;">            # 从库数据源</span></span>
<span class="line"><span style="color:#A6ACCD;">            slave:</span></span>
<span class="line"><span style="color:#A6ACCD;">            ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="application-yml" tabindex="-1">application.yml <a class="header-anchor" href="#application-yml" aria-hidden="true">#</a></h3><p>修改 Redis 连接信息</p><div class="language-yml"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">  # redis 配置</span></span>
<span class="line"><span style="color:#A6ACCD;">  redis:</span></span>
<span class="line"><span style="color:#A6ACCD;">    # 开发环境</span></span>
<span class="line"><span style="color:#A6ACCD;">    # 地址</span></span>
<span class="line"><span style="color:#A6ACCD;">    # host: localhost</span></span>
<span class="line"><span style="color:#A6ACCD;">    # 端口，默认为6379</span></span>
<span class="line"><span style="color:#A6ACCD;">    # port: 6379</span></span>
<span class="line"><span style="color:#A6ACCD;">    # 数据库索引</span></span>
<span class="line"><span style="color:#A6ACCD;">    # database: 0</span></span>
<span class="line"><span style="color:#A6ACCD;">    # 密码</span></span>
<span class="line"><span style="color:#A6ACCD;">    # password:</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    # 测试环境</span></span>
<span class="line"><span style="color:#A6ACCD;">    # 地址</span></span>
<span class="line"><span style="color:#A6ACCD;">    host: 192.168.3.119</span></span>
<span class="line"><span style="color:#A6ACCD;">    # 端口，默认为6379</span></span>
<span class="line"><span style="color:#A6ACCD;">    port: 6379</span></span>
<span class="line"><span style="color:#A6ACCD;">    # 数据库索引</span></span>
<span class="line"><span style="color:#A6ACCD;">    database: 0</span></span>
<span class="line"><span style="color:#A6ACCD;">    # 密码</span></span>
<span class="line"><span style="color:#A6ACCD;">    password: 123456</span></span>
<span class="line"><span style="color:#A6ACCD;">    # 连接超时时间</span></span>
<span class="line"><span style="color:#A6ACCD;">    timeout: 10s</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="打包" tabindex="-1">打包 <a class="header-anchor" href="#打包" aria-hidden="true">#</a></h2><p>打包类型包括<code>.jar</code>和<code>.war</code>两种类型，可通过<code>pom.xml</code>文件的<code>&lt;packaging&gt;</code>配置项修改</p><div class="language-xml"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">project</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">xmlns</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://maven.apache.org/POM/4.0.0</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">         </span><span style="color:#C792EA;">xmlns</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">xsi</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://www.w3.org/2001/XMLSchema-instance</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">         </span><span style="color:#C792EA;">xsi</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">schemaLocation</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">parent</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">ruoyi</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">groupId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">com.ruoyi</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">groupId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">version</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">3.8.5</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">version</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">parent</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">modelVersion</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">4.0.0</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">modelVersion</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">packaging</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">jar</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">packaging</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">ruoyi-admin</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">artifactId</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="运行" tabindex="-1">运行 <a class="header-anchor" href="#运行" aria-hidden="true">#</a></h2><p>将打包好的包，通过 XFTP 或者宝塔面板上传到服务器任意目录，例如<code>/www/wwwroot/</code></p><blockquote><p>前提是安装了 java 运行环境，推荐 JDK8</p></blockquote><h3 id="方法一" tabindex="-1">方法一 <a class="header-anchor" href="#方法一" aria-hidden="true">#</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">java</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-jar</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">xxx.jar</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span></span>
<span class="line"></span></code></pre></div><p>&amp; 表示后台运行，ssh 窗口不被锁定，但是关闭窗口时，程序还是会退出。</p><h3 id="方法二" tabindex="-1">方法二 <a class="header-anchor" href="#方法二" aria-hidden="true">#</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">nohup</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">java</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-jar</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">xxx.jar</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span></span>
<span class="line"></span></code></pre></div><p>nohup 表示不挂断运行命令行，当账号退出或关闭终端时，程序仍然运行。</p><p>当用 nohup 命令执行作业时，该作业的所有输出被重定向到 nohup.out 的文件中，除非另外指定了输出文件。</p><h3 id="方法三" tabindex="-1">方法三 <a class="header-anchor" href="#方法三" aria-hidden="true">#</a></h3><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">nohup</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">java</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-jar</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">xxx.jar</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#C3E88D;">/usr/local/temp.txt</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span></span>
<span class="line"></span></code></pre></div><p>nohup java -jar xxx.jar &gt;/usr/local/temp.txt &amp;</p><h2 id="脚本运行" tabindex="-1">脚本运行 <a class="header-anchor" href="#脚本运行" aria-hidden="true">#</a></h2><p>书写一个 shell 脚本</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">#!/bin/bash</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#这里可替换为你自己的执行程序，其他代码无需更改</span></span>
<span class="line"><span style="color:#A6ACCD;">APP_NAME</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">test_jar-</span><span style="color:#F78C6C;">1.0</span><span style="color:#C3E88D;">-SNAPSHOT.jar</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#使用说明，用来提示输入参数</span></span>
<span class="line"><span style="color:#82AAFF;">usage</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Usage: sh 脚本名.sh [start|stop|restart|status]</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">exit</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#检查程序是否在运行</span></span>
<span class="line"><span style="color:#82AAFF;">is_exist</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#A6ACCD;">  pid</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">\`</span><span style="color:#FFCB6B;">ps</span><span style="color:#C3E88D;"> -ef</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">grep</span><span style="color:#C3E88D;"> </span><span style="color:#A6ACCD;">$APP_NAME</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">grep</span><span style="color:#C3E88D;"> -v grep</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">awk</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{print $2}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">#如果不存在返回1，存在返回0</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-z</span><span style="color:#89DDFF;"> &quot;\${</span><span style="color:#C3E88D;">pid</span><span style="color:#89DDFF;">}&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">];</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">then</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">else</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">fi</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#启动方法</span></span>
<span class="line"><span style="color:#82AAFF;">start</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">is_exist</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> $? </span><span style="color:#89DDFF;">-eq</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">];</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">then</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;\${</span><span style="color:#C3E88D;">APP_NAME</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;"> is already running. pid=</span><span style="color:#89DDFF;">\${</span><span style="color:#C3E88D;">pid</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;"> .</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">else</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">nohup</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">java</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-Xmx512m</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-Xms512m</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-jar</span><span style="color:#A6ACCD;"> $APP_NAME  </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">test2.txt</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">2&gt;&amp;1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;\${</span><span style="color:#C3E88D;">APP_NAME</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;"> start success</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">fi</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#停止方法</span></span>
<span class="line"><span style="color:#82AAFF;">stop</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">is_exist</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> $? </span><span style="color:#89DDFF;">-eq</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">];</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">then</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">kill</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-9</span><span style="color:#A6ACCD;"> $pid</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">else</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;\${</span><span style="color:#C3E88D;">APP_NAME</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;"> is not running</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">fi</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#输出运行状态</span></span>
<span class="line"><span style="color:#82AAFF;">status</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">is_exist</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> $? </span><span style="color:#89DDFF;">-eq</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">];</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">then</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;\${</span><span style="color:#C3E88D;">APP_NAME</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;"> is running. Pid is </span><span style="color:#89DDFF;">\${</span><span style="color:#C3E88D;">pid</span><span style="color:#89DDFF;">}&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">else</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;\${</span><span style="color:#C3E88D;">APP_NAME</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;"> is NOT running.</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">fi</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#重启</span></span>
<span class="line"><span style="color:#82AAFF;">restart</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">stop</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">start</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#根据输入参数，选择执行对应方法，不输入则执行使用说明</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">case</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#A6ACCD;font-style:italic;">$1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">in</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">start</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">start</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">stop</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">stop</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">status</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">status</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">restart</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">restart</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">*)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">usage</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">;;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">esac</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="停止-jar" tabindex="-1">停止 jar <a class="header-anchor" href="#停止-jar" aria-hidden="true">#</a></h2><h3 id="方法一-1" tabindex="-1">方法一 <a class="header-anchor" href="#方法一-1" aria-hidden="true">#</a></h3><p>根据端口号查询进程编号，在根据进程编号关闭。</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">netstat</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-lnp</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">grep</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">端口号</span></span>
<span class="line"></span></code></pre></div><p>通过<code>kill -9</code> 进程编号关闭</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#82AAFF;">kill</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-9</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">进程编号</span></span>
<span class="line"></span></code></pre></div><h3 id="方法二-1" tabindex="-1">方法二 <a class="header-anchor" href="#方法二-1" aria-hidden="true">#</a></h3><p>直接使用 jps 列出所有启动的 Java 线程，然后使用 kill -9 进程号关闭。</p><h3 id="方法三-1" tabindex="-1">方法三 <a class="header-anchor" href="#方法三-1" aria-hidden="true">#</a></h3><p>ps -ef|grep XXX.jar</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">ps</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-ef</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">grep</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">XXX.jar</span></span>
<span class="line"></span></code></pre></div><p>使用 kill -9 进程号关闭</p>`,39),e=[o];function t(c,r,D,y,i,C){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{A as __pageData,d as default};
