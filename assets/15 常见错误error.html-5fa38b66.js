import{_ as a,M as t,p as o,q as r,R as s,t as c,N as p,a1 as e}from"./framework-f3fd2962.js";const i={},l=e(`<h2 id="ts-1109" tabindex="-1"><a class="header-anchor" href="#ts-1109" aria-hidden="true">#</a> ts(1109)</h2><p>Expression expected Error in TypeScript</p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token comment">// error</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">const</span> <span class="token constant">RAND_USER_API</span> <span class="token operator">=</span> <span class="token string">&quot;https://randomuser.me/api?results=50&quot;</span>

<span class="token comment">// correct</span>
<span class="token keyword">const</span> <span class="token constant">RAND_USER_API</span> <span class="token operator">=</span> <span class="token string">&quot;https://randomuser.me/api?results=50&quot;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token constant">RAND_USER_API</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),d={href:"https://bobbyhadz.com/blog/typescript-expression-expected-error",target:"_blank",rel:"noopener noreferrer"},u=e(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>export default function xxx(){}???
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>https://bobbyhadz.com/blog/typescript-instanceof-only-refers-to-type-but-is-being-used-as-value</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">IconPack</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>key<span class="token operator">:</span> string<span class="token punctuation">]</span><span class="token operator">:</span> IconDefinition<span class="token punctuation">;</span> <span class="token comment">//这是啥意思？</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>https://bobbyhadz.com/blog/typescript-key-string-string</p>`,4);function k(m,v){const n=t("ExternalLinkIcon");return o(),r("div",null,[l,s("p",null,[s("a",d,[c("Solve - Expression expected Error in TypeScript | bobbyhadz"),p(n)])]),u])}const _=a(i,[["render",k],["__file","15 常见错误error.html.vue"]]);export{_ as default};
