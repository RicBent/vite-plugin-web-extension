import{_ as e,o as n,c as a,d as s}from"./app.8e35e134.js";const f=JSON.parse('{"title":"Localization","description":"","frontmatter":{"lang":"en-US","title":"Localization"},"headers":[{"level":2,"title":"Overview","slug":"overview","link":"#overview","children":[]},{"level":2,"title":"Localizing the manfiest.json","slug":"localizing-the-manfiest-json","link":"#localizing-the-manfiest-json","children":[]},{"level":2,"title":"Localizing Text At Runtime","slug":"localizing-text-at-runtime","link":"#localizing-text-at-runtime","children":[]}],"relativePath":"guide/localization.md"}'),o={name:"guide/localization.md"},l=s(`<h1 id="localization" tabindex="-1">Localization <a class="header-anchor" href="#localization" aria-hidden="true">#</a></h1><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-hidden="true">#</a></h2><p>There are two places an extension will need localized:</p><ol><li>Fields in your <code>manifest.json</code></li><li>Text content at runtime (UIs, notifications, etc)</li></ol><h2 id="localizing-the-manfiest-json" tabindex="-1">Localizing the <code>manfiest.json</code> <a class="header-anchor" href="#localizing-the-manfiest-json" aria-hidden="true">#</a></h2><p>See <a href="https://developer.chrome.com/docs/extensions/reference/i18n/" target="_blank" rel="noreferrer">Chrome&#39;s documentation</a> about how to localize your <code>manifest.json</code>:</p><p>To accomplish this with <code>vite-plugin-web-extension</code>, just put the <code>_locales</code> directory in your <code>&lt;viteRoot&gt;/public</code> directory. When built, that folder will be copied to the base of your output directory, right where Chrome expects them to be!</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">&lt;viteRoot&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  dist/</span></span>
<span class="line"><span style="color:#A6ACCD;">    _locales/</span></span>
<span class="line"><span style="color:#A6ACCD;">      en/</span></span>
<span class="line"><span style="color:#A6ACCD;">        messages.json</span></span>
<span class="line"><span style="color:#A6ACCD;">      es/</span></span>
<span class="line"><span style="color:#A6ACCD;">        messages.json</span></span>
<span class="line"><span style="color:#A6ACCD;">      ...</span></span>
<span class="line"><span style="color:#A6ACCD;">  public/</span></span>
<span class="line"><span style="color:#A6ACCD;">    _locales/</span></span>
<span class="line"><span style="color:#A6ACCD;">      en/</span></span>
<span class="line"><span style="color:#A6ACCD;">        messages.json</span></span>
<span class="line"><span style="color:#A6ACCD;">      es/</span></span>
<span class="line"><span style="color:#A6ACCD;">        messages.json</span></span>
<span class="line"><span style="color:#A6ACCD;">      ...</span></span>
<span class="line"><span style="color:#A6ACCD;">  vite.config.ts</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="localizing-text-at-runtime" tabindex="-1">Localizing Text At Runtime <a class="header-anchor" href="#localizing-text-at-runtime" aria-hidden="true">#</a></h2><p>To localizing text at runtime, there are a few different options. For vanilla projects, you can use the <a href="https://developer.chrome.com/docs/extensions/reference/i18n/" target="_blank" rel="noreferrer"><code>browser.i18n</code> APIs</a> directly.</p><p>However, for Vue or React projects, you will likely want to use the framework&#39;s standard i18n library. For example, <code>vue-i18n</code>. These libraries will provide a much better developer experience when working with your framework of choice, and can <em>usually</em> be used outside of the UI for localizing system notifications or logs.</p><p>Files containing the localized text for each language can be placed anywhere in the project, follow your i18n library&#39;s recommendation.</p>`,12),t=[l];function i(c,r,p,d,h,u){return n(),a("div",null,t)}const g=e(o,[["render",i]]);export{f as __pageData,g as default};
