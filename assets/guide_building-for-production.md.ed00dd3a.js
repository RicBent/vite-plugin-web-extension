import{_ as s,o as a,c as n,d as o}from"./app.8e35e134.js";const D=JSON.parse('{"title":"Building for Production","description":"","frontmatter":{"lang":"en-US","title":"Building for Production"},"headers":[{"level":2,"title":"Overview","slug":"overview","link":"#overview","children":[]},{"level":2,"title":"Zipping","slug":"zipping","link":"#zipping","children":[]}],"relativePath":"guide/building-for-production.md"}'),e={name:"guide/building-for-production.md"},t=o(`<h1 id="building-for-production" tabindex="-1">Building for Production <a class="header-anchor" href="#building-for-production" aria-hidden="true">#</a></h1><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-hidden="true">#</a></h2><p>Like with a regular Vite project, just run the build command:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">vite</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">build</span></span>
<span class="line"></span></code></pre></div><p>Then look in your <code>dist/</code> directory. You should find a fully functioning browser extension! You can load it into Chrome or Firefox as an unpacked extension.</p><h2 id="zipping" tabindex="-1">Zipping <a class="header-anchor" href="#zipping" aria-hidden="true">#</a></h2><p>To publish your extension to the store, you simply need to zip up the files inside your output directory. You can do this manually, or use a package like <a href="https://www.npmjs.com/package/zip-a-folder" target="_blank" rel="noreferrer"><code>zip-a-folder</code></a> to automate it.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">zip</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">zip-a-folder</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">zip</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">dist</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">extension.zip</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div>`,8),l=[t];function i(p,r,c,d,u,y){return a(),n("div",null,l)}const F=s(e,[["render",i]]);export{D as __pageData,F as default};
