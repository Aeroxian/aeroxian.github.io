import{_ as n,p as s,q as a,a1 as t}from"./framework-f3fd2962.js";const e={},p=t(`<h2 id="泛型" tabindex="-1"><a class="header-anchor" href="#泛型" aria-hidden="true">#</a> 泛型</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>定义的时候，不关心具体的类型</p><p>在使用的时候，TypeScript的type system能够更加有效的检查，帮助开发者知道类型</p></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> names<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> promise<span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Promise</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&quot;success:)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

promise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  data<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="highlight-lines"><div class="highlight-line"> </div><br><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="function泛型" tabindex="-1"><a class="header-anchor" href="#function泛型" aria-hidden="true">#</a> Function泛型</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>tsc会自动推断，可以让我们不用写多余的代码，如方法的返回值，调用方法时传入具体的类型</p></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">merge</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">U</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>objA<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> objB<span class="token operator">:</span> <span class="token constant">U</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// return 的类型会推断为 T &amp; U</span>
  <span class="token keyword">return</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>objA<span class="token punctuation">,</span> objB<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// merge&lt;{name: string;hobbies: string[];}, {score: number;}&gt;(参数。..)</span>
<span class="token keyword">const</span> mergedObj <span class="token operator">=</span> <span class="token function">merge</span><span class="token punctuation">(</span>
  <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&quot;Aeroxian&quot;</span><span class="token punctuation">,</span> hobbies<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Codeing&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Reading&quot;</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> score<span class="token operator">:</span> <span class="token number">100</span> <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>mergedObj<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="constraints约束" tabindex="-1"><a class="header-anchor" href="#constraints约束" aria-hidden="true">#</a> Constraints约束</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>improve function</p></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">merge</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">U</span> <span class="token keyword">extends</span> object<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>objA<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> objB<span class="token operator">:</span> <span class="token constant">U</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>objA<span class="token punctuation">,</span> objB<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// error will not work</span>
<span class="token comment">//const mergedObj = merge({ name: &quot;Aeroxian&quot;, hobbies: [&quot;Codeing&quot;, &quot;Reading&quot;] }, &quot;&quot;);</span>
</code></pre><div class="highlight-lines"><div class="highlight-line"> </div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="extends-interface" tabindex="-1"><a class="header-anchor" href="#extends-interface" aria-hidden="true">#</a> extends interface⭐</h3><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>约束接口，方法的内容操作聚焦接口规范</p></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Lengthy</span> <span class="token punctuation">{</span>
  length<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">countAndDescribe</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> Lengthy<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>element<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> descriptionText <span class="token operator">=</span> <span class="token string">&quot;Got no value.&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>element<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    descriptionText <span class="token operator">=</span> <span class="token string">&quot;Got 1 element.&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>element<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    descriptionText <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Got </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>element<span class="token punctuation">.</span>length<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> elements.</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span>element<span class="token punctuation">,</span> descriptionText<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">countAndDescribe</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;Coding&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Reading&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="keyof" tabindex="-1"><a class="header-anchor" href="#keyof" aria-hidden="true">#</a> keyof⭐</h3><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>在泛型中加强泛型之间的约束</p></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">extractAndConvert</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> object<span class="token punctuation">,</span> <span class="token constant">U</span> <span class="token keyword">extends</span> <span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>
  obj<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span>
  key<span class="token operator">:</span> <span class="token constant">U</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">&quot;Value: &quot;</span> <span class="token operator">+</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// error</span>
<span class="token comment">// extractAndConvert({ name: &quot;Aeroxian&quot; }, &quot;age&quot;);</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">extractAndConvert</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&quot;Aeroxian&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><div class="highlight-line"> </div><br><br><br><br><br><br><br><div class="highlight-line"> </div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="generic-class" tabindex="-1"><a class="header-anchor" href="#generic-class" aria-hidden="true">#</a> Generic class</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">DataStorage<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">boolean</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> data<span class="token operator">:</span><span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token function">addItem</span><span class="token punctuation">(</span>item<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">removeItem</span><span class="token punctuation">(</span>item<span class="token operator">:</span><span class="token constant">T</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> index <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>index <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">getItems</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> textStorage <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DataStorage<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="generic-utils-type" tabindex="-1"><a class="header-anchor" href="#generic-utils-type" aria-hidden="true">#</a> Generic utils type</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>TypeScript中集成了许多内置的泛型类用于开发使用</p></div><h3 id="readonly" tabindex="-1"><a class="header-anchor" href="#readonly" aria-hidden="true">#</a> ReadOnly</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> cities<span class="token operator">:</span> Readonly<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;BeiJing&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;GuiLin&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// error</span>
<span class="token comment">//cities.pop();</span>
</code></pre><div class="highlight-lines"><div class="highlight-line"> </div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="partial" tabindex="-1"><a class="header-anchor" href="#partial" aria-hidden="true">#</a> partial</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">createCourseGoal</span><span class="token punctuation">(</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  description<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  completeUtil<span class="token operator">:</span> Date
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Partial的作用Make all properties in T optional</span>
  <span class="token comment">//let courseGoal: CourseGoal = {};</span>
  <span class="token keyword">let</span> courseGoal<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>CourseGoal<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  courseGoal<span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
  courseGoal<span class="token punctuation">.</span>description <span class="token operator">=</span> description<span class="token punctuation">;</span>
  courseGoal<span class="token punctuation">.</span>completeUtil <span class="token operator">=</span> completeUtil<span class="token punctuation">;</span>
  <span class="token keyword">return</span> courseGoal <span class="token keyword">as</span> CourseGoal<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","11 泛型.html.vue"]]);export{r as default};
