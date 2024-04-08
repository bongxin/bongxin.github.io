import{_ as s,c as i,o as a,a2 as n}from"./chunks/framework.ODoktiSX.js";const c=JSON.parse('{"title":"npm","description":"","frontmatter":{},"headers":[],"relativePath":"skill/development/npm/npm.md","filePath":"skill/development/npm/npm.md","lastUpdated":1712594578000}'),p={name:"skill/development/npm/npm.md"},l=n(`<h1 id="npm" tabindex="-1">npm <a class="header-anchor" href="#npm" aria-label="Permalink to &quot;npm&quot;">​</a></h1><p><a href="https://www.npmjs.com/" target="_blank" rel="noreferrer">npm</a>，全名 node package manger。<br> 简单来说，npm就是JavaScript的包管理工具，类似Java语法当中的Maven, Gradle, Python的pip。</p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><p>npm 在按照 <a href="https://nodejs.org/en/download/" target="_blank" rel="noreferrer">Node.js</a> 时会连带被安装。但有可能不是最新版本，需要 <code>npm install npm@latest -g</code> 升级到最新版本。</p><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><h3 id="npm-install" tabindex="-1"><code>npm install</code> <a class="header-anchor" href="#npm-install" aria-label="Permalink to &quot;\`npm install\`&quot;">​</a></h3><p>npm install命令可以安装对应的包，并创建一个node_modules的文件夹,然后把需要安装的安装包下载到里面。</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [package </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">name]</span></span></code></pre></div><h3 id="npm-update" tabindex="-1"><code>npm update</code> <a class="header-anchor" href="#npm-update" aria-label="Permalink to &quot;\`npm update\`&quot;">​</a></h3><p>npm update命令可以更新本地安装的模块</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 升级当前项目的指定模块</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [package </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">name]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 升级全局安装的模块</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [package </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">name]</span></span></code></pre></div><h3 id="npm-uninstall" tabindex="-1"><code>npm uninstall</code> <a class="header-anchor" href="#npm-uninstall" aria-label="Permalink to &quot;\`npm uninstall\`&quot;">​</a></h3><p>npm uninstall命令可以卸载已安装的模块</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 卸载当前项目的指定模块</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> uninstall</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [package </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">name]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 卸载全局模块</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> uninstall</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [package </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">name]</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span></span></code></pre></div><h2 id="常用命令" tabindex="-1">常用命令 <a class="header-anchor" href="#常用命令" aria-label="Permalink to &quot;常用命令&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">     //</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 安装模块</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> uninstall</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   //</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 卸载模块</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      //</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 更新模块</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ls</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          //</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 查看安装的模块</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        //</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 在项目中引导创建一个</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> package.json</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      //</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 管理npm的配置路径</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> publish</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">     //</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 发布模块</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> version</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">     //</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 查看模块版本</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> help</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        //</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 查看某条命令的详细帮助</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> root</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        //</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 查看包的安装路径</span></span></code></pre></div>`,16),h=[l];function t(e,k,d,F,r,o){return a(),i("div",null,h)}const m=s(p,[["render",t]]);export{c as __pageData,m as default};
