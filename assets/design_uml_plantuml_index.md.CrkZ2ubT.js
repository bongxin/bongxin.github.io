import{_ as s,o as n,c as t,aQ as p}from"./chunks/framework.C8WmN7-d.js";const u=JSON.parse('{"title":"PlantUML","description":"","frontmatter":{"aside":"right","order":0},"headers":[],"relativePath":"design/uml/plantuml/index.md","filePath":"design/uml/plantuml/index.md","lastUpdated":1773046209000}'),e={name:"design/uml/plantuml/index.md"};function l(o,a,i,c,r,h){return n(),t("div",null,[...a[0]||(a[0]=[p(`<h1 id="plantuml" tabindex="-1">PlantUML <a class="header-anchor" href="#plantuml" aria-label="Permalink to &quot;PlantUML&quot;">​</a></h1><p>官网地址：<a href="https://plantuml.com/zh/" target="_blank" rel="noreferrer">https://plantuml.com/zh/</a></p><p>PlantUML 是一款用文本描述生成 UML 图的工具，支持序列图、用例图、类图、活动图、状态图等。语法简洁，可与多种文档/维基/博客集成，也可通过官方或第三方服务生成图片链接嵌入页面。</p><p>在线服务器：<a href="https://www.plantuml.com/plantuml" target="_blank" rel="noreferrer">https://www.plantuml.com/plantuml</a>（将源码编码后放入 <code>/svg/</code> 或 <code>/png/</code> 路径即可生成图片）</p><h2 id="示例1-官方-svg-链接-markdown-图片语法" tabindex="-1">示例1：官方 SVG 链接（Markdown 图片语法） <a class="header-anchor" href="#示例1-官方-svg-链接-markdown-图片语法" aria-label="Permalink to &quot;示例1：官方 SVG 链接（Markdown 图片语法）&quot;">​</a></h2><h3 id="效果" tabindex="-1">效果 <a class="header-anchor" href="#效果" aria-label="Permalink to &quot;效果&quot;">​</a></h3><p><img src="https://www.plantuml.com/plantuml/svg/SoWkIImgAStDuNBAJrBGjLDmpCbCJbMmKiX8pSd9vt98pKi1IW80" alt=""></p><h3 id="代码" tabindex="-1">代码 <a class="header-anchor" href="#代码" aria-label="Permalink to &quot;代码&quot;">​</a></h3><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">![](</span><span style="--shiki-light:#24292E;--shiki-light-text-decoration:underline;--shiki-dark:#E1E4E8;--shiki-dark-text-decoration:underline;">https://www.plantuml.com/plantuml/svg/SoWkIImgAStDuNBAJrBGjLDmpCbCJbMmKiX8pSd9vt98pKi1IW80</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">说明</p><p>URL 中的长字符串是 PlantUML 源码的编码结果，可在 <a href="https://www.plantuml.com/plantuml/uml" target="_blank" rel="noreferrer">PlantUML 在线编辑器</a> 中编写源码并获取编码后的链接。</p></div><h2 id="示例2-官方-svg-链接-html-img-标签" tabindex="-1">示例2：官方 SVG 链接（HTML img 标签） <a class="header-anchor" href="#示例2-官方-svg-链接-html-img-标签" aria-label="Permalink to &quot;示例2：官方 SVG 链接（HTML img 标签）&quot;">​</a></h2><h3 id="效果-1" tabindex="-1">效果 <a class="header-anchor" href="#效果-1" aria-label="Permalink to &quot;效果&quot;">​</a></h3><img src="https://www.plantuml.com/plantuml/svg/RSx12O8n38RXUwV80bb0HFuwWXl4Dc2X9jga-nliGP2Uy_3cEynf-7psb7ih37Y1gzvFaAS_MBmLygO2DtvFDaznCwg0mRv-0-sbOfnMZwp-ag911z0-lVwV4V_rld-mr9Zz0G00"><h3 id="代码-1" tabindex="-1">代码 <a class="header-anchor" href="#代码-1" aria-label="Permalink to &quot;代码&quot;">​</a></h3><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">img</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;https://www.plantuml.com/plantuml/svg/RSx12O8n38RXUwV80bb0HFuwWXl4Dc2X9jga-nliGP2Uy_3cEynf-7psb7ih37Y1gzvFaAS_MBmLygO2DtvFDaznCwg0mRv-0-sbOfnMZwp-ag911z0-lVwV4V_rld-mr9Zz0G00&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="示例3-通过-gravizo-渲染-plantuml-源码" tabindex="-1">示例3：通过 Gravizo 渲染 PlantUML 源码 <a class="header-anchor" href="#示例3-通过-gravizo-渲染-plantuml-源码" aria-label="Permalink to &quot;示例3：通过 Gravizo 渲染 PlantUML 源码&quot;">​</a></h2><p><a href="https://www.gravizo.com/" target="_blank" rel="noreferrer">Gravizo</a> 支持在 URL 中直接携带 PlantUML 源码，适合在无法使用编码链接的场景下使用。</p><h3 id="_3-1-序列图-登录流程" tabindex="-1">3.1 序列图（登录流程） <a class="header-anchor" href="#_3-1-序列图-登录流程" aria-label="Permalink to &quot;3.1 序列图（登录流程）&quot;">​</a></h3><h4 id="效果-2" tabindex="-1">效果 <a class="header-anchor" href="#效果-2" aria-label="Permalink to &quot;效果&quot;">​</a></h4><p><img src="https://g.gravizo.com/svg?
@startuml;
participant User;
participant Application;
participant Database;
User -&gt; Application: 输入用户名和密码;
activate Application;
Application -&gt; Database: 验证用户名和密码;
activate Database;
Database --&gt; Application: 验证通过;
deactivate Database;
Application --&gt; User: 登录成功;
deactivate Application;
@enduml
"></p><h4 id="代码-2" tabindex="-1">代码 <a class="header-anchor" href="#代码-2" aria-label="Permalink to &quot;代码&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;img src=&#39;https://g.gravizo.com/svg?</span></span>
<span class="line"><span>@startuml;</span></span>
<span class="line"><span>participant User;</span></span>
<span class="line"><span>participant Application;</span></span>
<span class="line"><span>participant Database;</span></span>
<span class="line"><span>User -&gt; Application: 输入用户名和密码;</span></span>
<span class="line"><span>activate Application;</span></span>
<span class="line"><span>Application -&gt; Database: 验证用户名和密码;</span></span>
<span class="line"><span>activate Database;</span></span>
<span class="line"><span>Database --&gt; Application: 验证通过;</span></span>
<span class="line"><span>deactivate Database;</span></span>
<span class="line"><span>Application --&gt; User: 登录成功;</span></span>
<span class="line"><span>deactivate Application;</span></span>
<span class="line"><span>@enduml</span></span>
<span class="line"><span>&#39;&gt;</span></span></code></pre></div><h3 id="_3-2-序列图-参与者类型" tabindex="-1">3.2 序列图（参与者类型） <a class="header-anchor" href="#_3-2-序列图-参与者类型" aria-label="Permalink to &quot;3.2 序列图（参与者类型）&quot;">​</a></h3><h4 id="效果-3" tabindex="-1">效果 <a class="header-anchor" href="#效果-3" aria-label="Permalink to &quot;效果&quot;">​</a></h4><p><img src="https://g.gravizo.com/svg?
@startuml
participant Participant as Foo;
actor       Actor       as Foo1;
boundary    Boundary    as Foo2;
control     Control     as Foo3;
entity      Entity      as Foo4;
database    Database    as Foo5;
collections Collections as Foo6;
queue       Queue       as Foo7;
Foo -&gt; Foo1 : To actor;
Foo -&gt; Foo2 : To boundary;
Foo -&gt; Foo3 : To control;
Foo -&gt; Foo4 : To entity;
Foo -&gt; Foo5 : To database;
Foo -&gt; Foo6 : To collections;
Foo -&gt; Foo7: To queue;
@enduml
"></p><h4 id="代码-3" tabindex="-1">代码 <a class="header-anchor" href="#代码-3" aria-label="Permalink to &quot;代码&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;img src=&#39;https://g.gravizo.com/svg?</span></span>
<span class="line"><span>@startuml</span></span>
<span class="line"><span>participant Participant as Foo;</span></span>
<span class="line"><span>actor       Actor       as Foo1;</span></span>
<span class="line"><span>boundary    Boundary    as Foo2;</span></span>
<span class="line"><span>control     Control     as Foo3;</span></span>
<span class="line"><span>entity      Entity      as Foo4;</span></span>
<span class="line"><span>database    Database    as Foo5;</span></span>
<span class="line"><span>collections Collections as Foo6;</span></span>
<span class="line"><span>queue       Queue       as Foo7;</span></span>
<span class="line"><span>Foo -&gt; Foo1 : To actor;</span></span>
<span class="line"><span>Foo -&gt; Foo2 : To boundary;</span></span>
<span class="line"><span>Foo -&gt; Foo3 : To control;</span></span>
<span class="line"><span>Foo -&gt; Foo4 : To entity;</span></span>
<span class="line"><span>Foo -&gt; Foo5 : To database;</span></span>
<span class="line"><span>Foo -&gt; Foo6 : To collections;</span></span>
<span class="line"><span>Foo -&gt; Foo7: To queue;</span></span>
<span class="line"><span>@enduml</span></span>
<span class="line"><span>&#39;&gt;</span></span></code></pre></div><h3 id="_3-3-用例图" tabindex="-1">3.3 用例图 <a class="header-anchor" href="#_3-3-用例图" aria-label="Permalink to &quot;3.3 用例图&quot;">​</a></h3><h4 id="效果-4" tabindex="-1">效果 <a class="header-anchor" href="#效果-4" aria-label="Permalink to &quot;效果&quot;">​</a></h4><p><img src="https://g.gravizo.com/svg?
@startuml;
left to right direction;
actor &quot;管理用户&quot; as g;
package Professional {;
  actor Chef as c;
  actor &quot;Food Critic&quot; as fc;
};
package Restaurant {;
  usecase &quot;Eat Food&quot; as UC1;
  usecase &quot;Pay for Food&quot; as UC2;
  usecase &quot;Drink&quot; as UC3;
  usecase &quot;Review&quot; as UC4;
};
fc --&gt; UC4;
g --&gt; UC1;
g --&gt; UC2;
g --&gt; UC3;
@enduml;
"></p><h4 id="代码-4" tabindex="-1">代码 <a class="header-anchor" href="#代码-4" aria-label="Permalink to &quot;代码&quot;">​</a></h4><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;img src=&#39;https://g.gravizo.com/svg?</span></span>
<span class="line"><span>@startuml;</span></span>
<span class="line"><span>left to right direction;</span></span>
<span class="line"><span>actor &quot;管理用户&quot; as g;</span></span>
<span class="line"><span>package Professional {;</span></span>
<span class="line"><span>  actor Chef as c;</span></span>
<span class="line"><span>  actor &quot;Food Critic&quot; as fc;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>package Restaurant {;</span></span>
<span class="line"><span>  usecase &quot;Eat Food&quot; as UC1;</span></span>
<span class="line"><span>  usecase &quot;Pay for Food&quot; as UC2;</span></span>
<span class="line"><span>  usecase &quot;Drink&quot; as UC3;</span></span>
<span class="line"><span>  usecase &quot;Review&quot; as UC4;</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>fc --&gt; UC4;</span></span>
<span class="line"><span>g --&gt; UC1;</span></span>
<span class="line"><span>g --&gt; UC2;</span></span>
<span class="line"><span>g --&gt; UC3;</span></span>
<span class="line"><span>@enduml;</span></span>
<span class="line"><span>&#39;&gt;</span></span></code></pre></div>`,32)])])}const g=s(e,[["render",l]]);export{u as __pageData,g as default};
