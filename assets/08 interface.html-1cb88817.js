import{_ as c,M as p,p as l,q as i,N as a,V as e,R as n,t as s,a1 as u}from"./framework-f3fd2962.js";const r={},k=n("h2",{id:"interface",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#interface","aria-hidden":"true"},"#"),s(" interface")],-1),d=n("div",{class:"custom-container tip"},[n("p",{class:"custom-container-title"},"TIP"),n("p",null,"接口定义规范结构")],-1),b=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"interface"),s(),n("span",{class:"token class-name"},"Person"),s(),n("span",{class:"token punctuation"},"{"),s(`
  name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},";"),s(`
  score`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"number"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token function"},"greet"),n("span",{class:"token punctuation"},"("),s("phrase"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token keyword"},"void"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),m=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"let"),s(" user1"),n("span",{class:"token operator"},":"),s(" Person "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
  name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Aeroxian"'),n("span",{class:"token punctuation"},","),s(`
  score`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token function"},"greet"),n("span",{class:"token punctuation"},"("),s("phrase"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Greet: "'),s(),n("span",{class:"token operator"},"+"),s(" phrase"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),v=n("h2",{id:"class-实现-interface",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#class-实现-interface","aria-hidden":"true"},"#"),s(" class 实现 interface")],-1),h=n("div",{class:"custom-container tip"},[n("p",{class:"custom-container-title"},"TIP"),n("p",null,"接口中可以使用readonly修饰")],-1),g=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"interface"),s(),n("span",{class:"token class-name"},"Greetable"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"readonly"),s(" name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token function"},"greet"),n("span",{class:"token punctuation"},"("),s("phrase"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token keyword"},"void"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"Person"),s(),n("span",{class:"token keyword"},"implements"),s(),n("span",{class:"token class-name"},"Greetable"),s(),n("span",{class:"token punctuation"},"{"),s(`
  name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},";"),s(`
  score`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"number"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token function"},"constructor"),n("span",{class:"token punctuation"},"("),s("n"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("name "),n("span",{class:"token operator"},"="),s(" n"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  `),n("span",{class:"token function"},"greet"),n("span",{class:"token punctuation"},"("),s("phrase"),n("span",{class:"token operator"},":"),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),s("phrase"),n("span",{class:"token operator"},"+"),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("name"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"let"),s(" user1"),n("span",{class:"token operator"},":"),s(" Greetable "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Person"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Aeroxian"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
user1`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"greet"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Hi there,I\\'m '"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("div",{class:"highlight-line"}," "),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=u(`<hr><h2 id="interface-as-function-type" tabindex="-1"><a class="header-anchor" href="#interface-as-function-type" aria-hidden="true">#</a> Interface as Function Type⭐</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// type AddFn = (number1:number,number2:number)=&gt;number;</span>
<span class="token keyword">interface</span> <span class="token class-name">AddFn</span><span class="token punctuation">{</span>
    <span class="token punctuation">(</span>number1<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">,</span>number2<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> add<span class="token operator">:</span>AddFn<span class="token punctuation">;</span>
<span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token punctuation">(</span>number1<span class="token punctuation">,</span>number2<span class="token punctuation">)</span><span class="token operator">=&gt;</span>number1<span class="token operator">+</span>number2<span class="token punctuation">;</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="optional-properties-and-paramter" tabindex="-1"><a class="header-anchor" href="#optional-properties-and-paramter" aria-hidden="true">#</a> optional properties and paramter ⭐</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Greetable</span> <span class="token punctuation">{</span>
  <span class="token keyword">readonly</span> name<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token function">greet</span><span class="token punctuation">(</span>phrase<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token keyword">implements</span> <span class="token class-name">Greetable</span> <span class="token punctuation">{</span>
  name<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>n<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> n<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token function">greet</span><span class="token punctuation">(</span>phrase<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>phrase<span class="token operator">+</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Hi!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> user1<span class="token operator">:</span> Greetable <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
user1<span class="token punctuation">.</span><span class="token function">greet</span><span class="token punctuation">(</span><span class="token string">&#39;Hi there,I\\&#39;m &#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出： Hi!</span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line"> </div><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function w(x,G){const t=p("CodeGroupItem"),o=p("CodeGroup");return l(),i("div",null,[k,d,a(o,null,{default:e(()=>[a(t,{title:"接口规范"},{default:e(()=>[b]),_:1}),a(t,{title:"实现"},{default:e(()=>[m]),_:1})]),_:1}),v,h,a(o,null,{default:e(()=>[a(t,{title:"接口规范"},{default:e(()=>[g]),_:1}),a(t,{title:"实现"},{default:e(()=>[f]),_:1}),a(t,{title:"使用"},{default:e(()=>[y]),_:1})]),_:1}),_])}const I=c(r,[["render",w],["__file","08 interface.html.vue"]]);export{I as default};