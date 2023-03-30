import{_ as n,p as s,q as a,a1 as t}from"./framework-f3fd2962.js";const p="/assets/timecalc202010152012-efefbd39.gif",e={},o=t(`<h2 id="_1-math" tabindex="-1"><a class="header-anchor" href="#_1-math" aria-hidden="true">#</a> 1 Math</h2><h3 id="_1-floor-地板" tabindex="-1"><a class="header-anchor" href="#_1-floor-地板" aria-hidden="true">#</a> 1. floor 地板</h3><h3 id="_2-ceil-天花板" tabindex="-1"><a class="header-anchor" href="#_2-ceil-天花板" aria-hidden="true">#</a> 2. ceil 天花板</h3><h3 id="_3-random" tabindex="-1"><a class="header-anchor" href="#_3-random" aria-hidden="true">#</a> 3. random</h3><h3 id="_4-玩法-产生指定范围随机数" tabindex="-1"><a class="header-anchor" href="#_4-玩法-产生指定范围随机数" aria-hidden="true">#</a> 4. 玩法：产生指定范围随机数</h3><blockquote><p>产生[2-8]</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

<span class="token keyword">while</span> <span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">7</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 产生[2,8]的随机数</span>
    <span class="token keyword">let</span> num <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">7</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 7,8,5,3,4,2,6</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-date" tabindex="-1"><a class="header-anchor" href="#_2-date" aria-hidden="true">#</a> 2 Date</h2><h3 id="_2-1-getfullyear" tabindex="-1"><a class="header-anchor" href="#_2-1-getfullyear" aria-hidden="true">#</a> 2.1 getFullYear</h3><h3 id="_2-2-getmonth" tabindex="-1"><a class="header-anchor" href="#_2-2-getmonth" aria-hidden="true">#</a> 2.2 getMonth</h3><h4 id="_2-2-1-值为0到11" tabindex="-1"><a class="header-anchor" href="#_2-2-1-值为0到11" aria-hidden="true">#</a> 2.2.1 值为0到11</h4><h4 id="_2-2-2-0表示1月份" tabindex="-1"><a class="header-anchor" href="#_2-2-2-0表示1月份" aria-hidden="true">#</a> 2.2.2 0表示1月份</h4><h3 id="_2-3-getdate-获取日" tabindex="-1"><a class="header-anchor" href="#_2-3-getdate-获取日" aria-hidden="true">#</a> 2.3 getDate 获取日</h3><h3 id="_2-4-gethours" tabindex="-1"><a class="header-anchor" href="#_2-4-gethours" aria-hidden="true">#</a> 2.4 getHours</h3><h3 id="_2-6-getminutes" tabindex="-1"><a class="header-anchor" href="#_2-6-getminutes" aria-hidden="true">#</a> 2.6 getMinutes</h3><h3 id="_2-7-getseconds" tabindex="-1"><a class="header-anchor" href="#_2-7-getseconds" aria-hidden="true">#</a> 2.7 getSeconds</h3><h3 id="_2-8-getday-获取星期" tabindex="-1"><a class="header-anchor" href="#_2-8-getday-获取星期" aria-hidden="true">#</a> 2.8 getDay 获取星期</h3><h4 id="_2-8-1-值为0到6" tabindex="-1"><a class="header-anchor" href="#_2-8-1-值为0到6" aria-hidden="true">#</a> 2.8.1 值为0到6</h4><h4 id="_2-8-2-0为星期日" tabindex="-1"><a class="header-anchor" href="#_2-8-2-0为星期日" aria-hidden="true">#</a> 2.8.2 0为星期日</h4><h3 id="_2-9-玩法-拼接成指定时间格式⭐⭐" tabindex="-1"><a class="header-anchor" href="#_2-9-玩法-拼接成指定时间格式⭐⭐" aria-hidden="true">#</a> 2.9 玩法：拼接成指定时间格式⭐⭐</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> date <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">let</span> year <span class="token operator">=</span> date<span class="token punctuation">.</span><span class="token function">getFullYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//月份为0-11，加一处理</span>
<span class="token keyword">let</span> month <span class="token operator">=</span> date<span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> day <span class="token operator">=</span> date<span class="token punctuation">.</span><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> hours <span class="token operator">=</span> date<span class="token punctuation">.</span><span class="token function">getHours</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> minutes <span class="token operator">=</span> date<span class="token punctuation">.</span><span class="token function">getMinutes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> seconds <span class="token operator">=</span> date<span class="token punctuation">.</span><span class="token function">getSeconds</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 星期0-6,0表示星期日</span>
<span class="token keyword">let</span> weeks <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;星期日&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;星期一&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;星期二&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;星期三&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;星期四&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;星期五&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;星期六&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> week <span class="token operator">=</span> weeks<span class="token punctuation">[</span>date<span class="token punctuation">.</span><span class="token function">getDay</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// (&quot;0&quot;+hours).slice(-2) 主要是转化为两位数，7-&gt;07</span>
<span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>year<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">年</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>month<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">月</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>day<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">日 </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token punctuation">(</span><span class="token string">&quot;0&quot;</span> <span class="token operator">+</span> hours<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">::</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token punctuation">(</span><span class="token string">&quot;0&quot;</span> <span class="token operator">+</span> minutes<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">::</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token punctuation">(</span><span class="token string">&quot;0&quot;</span> <span class="token operator">+</span> seconds<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>week<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
<span class="token comment">// 2020年10月15日 19::14::01 星期四</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-10-字符串到日期" tabindex="-1"><a class="header-anchor" href="#_2-10-字符串到日期" aria-hidden="true">#</a> 2.10 字符串到日期</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> d <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">&quot;2019/12/12&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-11-玩法-秒杀倒计时⭐⭐" tabindex="-1"><a class="header-anchor" href="#_2-11-玩法-秒杀倒计时⭐⭐" aria-hidden="true">#</a> 2.11 玩法：秒杀倒计时⭐⭐</h3><p><img src="`+p+`" alt=""></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 截至时间</span>
<span class="token keyword">let</span> endTime <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">&quot;2020/11/11 00:00:00&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">calcTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> d <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;box&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 当前时间</span>
    <span class="token keyword">let</span> nowTime <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 转化为相差得秒数</span>
    <span class="token keyword">let</span> diff <span class="token operator">=</span> <span class="token punctuation">(</span>endTime<span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> nowTime<span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">1000</span><span class="token punctuation">;</span>

    <span class="token comment">// 剩余的天</span>
    <span class="token keyword">let</span> day <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>diff <span class="token operator">/</span> <span class="token punctuation">(</span><span class="token number">24</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> minutes <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token punctuation">(</span>diff <span class="token operator">%</span> <span class="token punctuation">(</span><span class="token number">24</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">3600</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> seconds <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>diff <span class="token operator">%</span> <span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">距离2020/11/11 还剩</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>day<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">天</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>minutes<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">分</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>seconds<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">秒</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>d<span class="token punctuation">,</span> result<span class="token punctuation">)</span>
    d<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> result
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">setInterval</span><span class="token punctuation">(</span>calcTime<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-12-计算年龄" tabindex="-1"><a class="header-anchor" href="#_2-12-计算年龄" aria-hidden="true">#</a> 2.12 计算年龄</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">calculateAge</span><span class="token punctuation">(</span><span class="token parameter">birthDay</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">const</span> diff <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> birthDay<span class="token punctuation">;</span>
    <span class="token keyword">const</span> ageDate <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>diff<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>ageDate<span class="token punctuation">.</span><span class="token function">getUTCFullYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1970</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28),c=[o];function i(l,u){return s(),a("div",null,c)}const k=n(e,[["render",i],["__file","06 Math与Date.html.vue"]]);export{k as default};
