import{_ as a,c as s,o as n,aS as e}from"./chunks/framework.Cuoppmxr.js";const q=JSON.parse('{"title":"认识Gravizo","description":"","frontmatter":{"aside":"right"},"headers":[],"relativePath":"skill/design/uml/gravizo/Gravizo/认识Gravizo.md","filePath":"skill/design/uml/gravizo/Gravizo/认识Gravizo.md","lastUpdated":1720887620000}'),t={name:"skill/design/uml/gravizo/Gravizo/认识Gravizo.md"},p=e(`<h1 id="认识gravizo" tabindex="-1">认识Gravizo <a class="header-anchor" href="#认识gravizo" aria-label="Permalink to &quot;认识Gravizo&quot;">​</a></h1><p>官网地址：<a href="https://www.gravizo.com/" target="_blank" rel="noreferrer">https://www.gravizo.com/</a></p><p>Gravizo 是一个绘图引擎，只需要用 Url 包含 PlantUML 代码放到一个 img 标签中，就可以在线实时的绘制出我们需要的 UML 图。</p><h2 id="示例1-支持plantuml语法" tabindex="-1">示例1：支持PlantUML语法 <a class="header-anchor" href="#示例1-支持plantuml语法" aria-label="Permalink to &quot;示例1：支持PlantUML语法&quot;">​</a></h2><h3 id="效果" tabindex="-1">效果 <a class="header-anchor" href="#效果" aria-label="Permalink to &quot;效果&quot;">​</a></h3><p><img src="https://g.gravizo.com/svg?
@startuml;
actor User;
participant &quot;First Class&quot; as A;
participant &quot;Second Class&quot; as B;
participant &quot;Last Class&quot; as C;
User -&gt; A: DoWork;
activate A;
A -&gt; B: Create Request;
activate B;
B -&gt; C: DoWork;
activate C;
C --&gt; B: WorkDone;
destroy C;
B --&gt; A: Request Created;
deactivate B;
A --&gt; User: Done;
deactivate A;
@enduml
"></p><h3 id="代码" tabindex="-1">代码 <a class="header-anchor" href="#代码" aria-label="Permalink to &quot;代码&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;img src=&#39;https://g.gravizo.com/svg?</span></span>
<span class="line"><span>@startuml;</span></span>
<span class="line"><span>actor User;</span></span>
<span class="line"><span>participant &quot;First Class&quot; as A;</span></span>
<span class="line"><span>participant &quot;Second Class&quot; as B;</span></span>
<span class="line"><span>participant &quot;Last Class&quot; as C;</span></span>
<span class="line"><span>User -&gt; A: DoWork;</span></span>
<span class="line"><span>activate A;</span></span>
<span class="line"><span>A -&gt; B: Create Request;</span></span>
<span class="line"><span>activate B;</span></span>
<span class="line"><span>B -&gt; C: DoWork;</span></span>
<span class="line"><span>activate C;</span></span>
<span class="line"><span>C --&gt; B: WorkDone;</span></span>
<span class="line"><span>destroy C;</span></span>
<span class="line"><span>B --&gt; A: Request Created;</span></span>
<span class="line"><span>deactivate B;</span></span>
<span class="line"><span>A --&gt; User: Done;</span></span>
<span class="line"><span>deactivate A;</span></span>
<span class="line"><span>@enduml</span></span>
<span class="line"><span>&#39;&gt;</span></span></code></pre></div><h2 id="示例2-支持graphviz语法" tabindex="-1">示例2：支持Graphviz语法 <a class="header-anchor" href="#示例2-支持graphviz语法" aria-label="Permalink to &quot;示例2：支持Graphviz语法&quot;">​</a></h2><h3 id="效果-1" tabindex="-1">效果 <a class="header-anchor" href="#效果-1" aria-label="Permalink to &quot;效果&quot;">​</a></h3><p><img src="https://g.gravizo.com/svg?
digraph G {Hello-&gt;World}
"></p><h3 id="代码-1" tabindex="-1">代码 <a class="header-anchor" href="#代码-1" aria-label="Permalink to &quot;代码&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;img src=&#39;https://g.gravizo.com/svg?</span></span>
<span class="line"><span>digraph G {Hello-&gt;World}</span></span>
<span class="line"><span>&#39;&gt;</span></span></code></pre></div><h2 id="示例3-不支持mermaid语法" tabindex="-1">示例3：不支持Mermaid语法 <a class="header-anchor" href="#示例3-不支持mermaid语法" aria-label="Permalink to &quot;示例3：不支持Mermaid语法&quot;">​</a></h2><h3 id="效果-2" tabindex="-1">效果 <a class="header-anchor" href="#效果-2" aria-label="Permalink to &quot;效果&quot;">​</a></h3><p><img src="https://g.gravizo.com/svg?
sequenceDiagram
    Alice-&gt;&gt;John: Hello John, how are you?
    John--&gt;&gt;Alice: Great!
    Alice-)John: See you later!
"></p><h3 id="代码-2" tabindex="-1">代码 <a class="header-anchor" href="#代码-2" aria-label="Permalink to &quot;代码&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;img src=&#39;https://g.gravizo.com/svg?</span></span>
<span class="line"><span>sequenceDiagram</span></span>
<span class="line"><span>    Alice-&gt;&gt;John: Hello John, how are you?</span></span>
<span class="line"><span>    John--&gt;&gt;Alice: Great!</span></span>
<span class="line"><span>    Alice-)John: See you later!</span></span>
<span class="line"><span>&#39;&gt;</span></span></code></pre></div><h2 id="示例4-支持graphviz-dot语法" tabindex="-1">示例4：支持Graphviz DOT语法 <a class="header-anchor" href="#示例4-支持graphviz-dot语法" aria-label="Permalink to &quot;示例4：支持Graphviz DOT语法&quot;">​</a></h2><h3 id="效果-3" tabindex="-1">效果 <a class="header-anchor" href="#效果-3" aria-label="Permalink to &quot;效果&quot;">​</a></h3><p><img src="https://g.gravizo.com/svg?
digraph WaterCycle {
  layout=neato;
  overlap=false;
  node [shape=rectangle];
  0 [label=&quot;大气中的水蒸气&quot;];
  1 [label=&quot;凝结成云&quot;];
  2 [label=&quot;形成降水&quot;];
  3 [label=&quot;降水到地面&quot;];
  4 [label=&quot;形成地表水&quot;];
  5 [label=&quot;流入河流&quot;];
  6 [label=&quot;进入地下水&quot;];
  7 [label=&quot;蒸发&quot;];
  8 [label=&quot;回到大气中的水蒸气&quot;];
  0 -&gt; 1;
  1 -&gt; 2;
  2 -&gt; 3;
  3 -&gt; 4;
  4 -&gt; 5;
  4 -&gt; 6;
  5 -&gt; 7;
  6 -&gt; 7;
  7 -&gt; 8;
  8 -&gt; 0;
}
"></p><h3 id="代码-3" tabindex="-1">代码 <a class="header-anchor" href="#代码-3" aria-label="Permalink to &quot;代码&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>digraph WaterCycle {</span></span>
<span class="line"><span>  layout=neato;</span></span>
<span class="line"><span>  overlap=false;</span></span>
<span class="line"><span>  node [shape=rectangle];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  0 [label=&quot;大气中的水蒸气&quot;];</span></span>
<span class="line"><span>  1 [label=&quot;凝结成云&quot;];</span></span>
<span class="line"><span>  2 [label=&quot;形成降水&quot;];</span></span>
<span class="line"><span>  3 [label=&quot;降水到地面&quot;];</span></span>
<span class="line"><span>  4 [label=&quot;形成地表水&quot;];</span></span>
<span class="line"><span>  5 [label=&quot;流入河流&quot;];</span></span>
<span class="line"><span>  6 [label=&quot;进入地下水&quot;];</span></span>
<span class="line"><span>  7 [label=&quot;蒸发&quot;];</span></span>
<span class="line"><span>  8 [label=&quot;回到大气中的水蒸气&quot;];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  0 -&gt; 1;</span></span>
<span class="line"><span>  1 -&gt; 2;</span></span>
<span class="line"><span>  2 -&gt; 3;</span></span>
<span class="line"><span>  3 -&gt; 4;</span></span>
<span class="line"><span>  4 -&gt; 5;</span></span>
<span class="line"><span>  4 -&gt; 6;</span></span>
<span class="line"><span>  5 -&gt; 7;</span></span>
<span class="line"><span>  6 -&gt; 7;</span></span>
<span class="line"><span>  7 -&gt; 8;</span></span>
<span class="line"><span>  8 -&gt; 0;</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,23),l=[p];function i(o,r,c,h,g,u){return n(),s("div",null,l)}const v=a(t,[["render",i]]);export{q as __pageData,v as default};
