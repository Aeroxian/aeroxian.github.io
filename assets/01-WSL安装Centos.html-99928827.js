import{_ as p,M as l,p as o,q as c,R as s,t as a,N as e,a1 as t}from"./framework-f3fd2962.js";const i={},r=t(`<div class="custom-container tip"><p class="custom-container-title">TIP</p><p>win11下安装了DockerDesktop来通过docker到处centos的版本，从而通过wsl来安装</p></div><h2 id="wsl安装centos" tabindex="-1"><a class="header-anchor" href="#wsl安装centos" aria-hidden="true">#</a> wsl安装centos</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull centos:centos7.9.2009

C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span><span class="token number">1193</span><span class="token operator"><span class="token file-descriptor important">0</span>&gt;</span>docker images
REPOSITORY   TAG              IMAGE ID       CREATED         SIZE
mysql        <span class="token number">8.0</span>.32           cdf3aa69f5f0   <span class="token number">33</span> hours ago    517MB
redis        latest           7614ae9453d1   <span class="token number">13</span> months ago   113MB
centos       centos7.9.2009   eeb6ee3f44bd   <span class="token number">16</span> months ago   204MB

<span class="token comment"># 创建并启动容器</span>
C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span><span class="token number">1193</span><span class="token operator"><span class="token file-descriptor important">0</span>&gt;</span>docker run <span class="token parameter variable">-d</span> <span class="token parameter variable">-i</span> <span class="token parameter variable">-t</span> eeb6ee3f44bd /bin/bash
8ef3409d696fe20bff062ddf082929c4882bf2148f6cfe71f57daa47e5383617
<span class="token comment"># ===========================到这里就可以到进入容器centos中了========================</span>
C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span><span class="token number">1193</span><span class="token operator"><span class="token file-descriptor important">0</span>&gt;</span>docker <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> 8ef3409d696 <span class="token function">bash</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在已经启动了centos容器了，接下来到处这个容器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 到处容器到当前文件夹中 docker export containerID -o 文件名</span>
E:<span class="token punctuation">\\</span>wsl<span class="token punctuation">\\</span>centos7<span class="token punctuation">\\</span>first<span class="token operator">&gt;</span>docker <span class="token builtin class-name">export</span> 8ef3409d696fe20bff062ddf082929c4882bf2148f6cfe71f57daa47e5383617 <span class="token parameter variable">-o</span> centos.tar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>以上部分就是从docker中导出centos容器，接下使用wsl导入这个centos子系统</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>E:<span class="token punctuation">\\</span>wsl<span class="token punctuation">\\</span>centos7<span class="token punctuation">\\</span>first<span class="token operator">&gt;</span>wsl <span class="token parameter variable">--import</span> centos7.9.2009 <span class="token string">&quot;E:\\wsl<span class="token entity" title="\\c">\\c</span>entos7<span class="token entity" title="\\f">\\f</span>irst&quot;</span> <span class="token string">&quot;E:\\wsl<span class="token entity" title="\\c">\\c</span>entos7<span class="token entity" title="\\f">\\f</span>irst<span class="token entity" title="\\c">\\c</span>entos.tar&quot;</span> <span class="token parameter variable">--version</span> <span class="token number">2</span>
正在导入，这可能需要几分钟时间。
操作成功完成。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看导入成功</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>E:<span class="token punctuation">\\</span>wsl<span class="token punctuation">\\</span>centos7<span class="token punctuation">\\</span>first<span class="token operator">&gt;</span>wsl <span class="token parameter variable">-l</span> <span class="token parameter variable">-v</span>
  NAME                   STATE           VERSION
* docker-desktop         Running         <span class="token number">2</span>
  docker-desktop-data    Running         <span class="token number">2</span>
  centos7.9.2009         Stopped         <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="进入centos❤️" tabindex="-1"><a class="header-anchor" href="#进入centos❤️" aria-hidden="true">#</a> 进入centos❤️</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>wsl -d centos7.9.2009
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="停止" tabindex="-1"><a class="header-anchor" href="#停止" aria-hidden="true">#</a> 停止</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>wsl <span class="token parameter variable">--terminate</span> centos7.9.2009
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="配置工作" tabindex="-1"><a class="header-anchor" href="#配置工作" aria-hidden="true">#</a> 配置工作</h2><h3 id="dns配置" tabindex="-1"><a class="header-anchor" href="#dns配置" aria-hidden="true">#</a> DNS配置</h3><ol><li>ping www.baidu.com域名不通，但是ping 183.232.231.174 IP地址是通的。</li></ol>`,16),d={href:"https://www.jianshu.com/p/ba2cf239ebe0",target:"_blank",rel:"noopener noreferrer"},u=t(`<p>创建/etc/wsl.conf文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>network<span class="token punctuation">]</span>
generateResolvConf <span class="token operator">=</span> <span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>删除/etc/resolv.conf文件（这是一个软连接）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@hzz etc<span class="token punctuation">]</span><span class="token comment"># rm resolv.conf</span>
rm: remove symbolic <span class="token function">link</span> ‘resolv.conf’? y
<span class="token punctuation">[</span>root@hzz etc<span class="token punctuation">]</span><span class="token comment"># touch resolv.conf</span>
<span class="token punctuation">[</span>root@hzz etc<span class="token punctuation">]</span><span class="token comment"># vi resolv.conf</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>nameserver 114.114.114.114
nameserver 223.5.5.5
nameserver 8.8.8.8
nameserver 8.8.4.4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试：成功</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@hzz etc<span class="token punctuation">]</span><span class="token comment"># ping www.baidu.com</span>
PING www.baidu.com <span class="token punctuation">(</span><span class="token number">183.232</span>.231.174<span class="token punctuation">)</span> <span class="token number">56</span><span class="token punctuation">(</span><span class="token number">84</span><span class="token punctuation">)</span> bytes of data.
<span class="token number">64</span> bytes from <span class="token number">183.232</span>.231.174 <span class="token punctuation">(</span><span class="token number">183.232</span>.231.174<span class="token punctuation">)</span>: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">54</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">26.2</span> ms
<span class="token number">64</span> bytes from <span class="token number">183.232</span>.231.174 <span class="token punctuation">(</span><span class="token number">183.232</span>.231.174<span class="token punctuation">)</span>: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">2</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">54</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">25.3</span> ms
<span class="token number">64</span> bytes from <span class="token number">183.232</span>.231.174 <span class="token punctuation">(</span><span class="token number">183.232</span>.231.174<span class="token punctuation">)</span>: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">3</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">54</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">26.1</span> ms
<span class="token number">64</span> bytes from <span class="token number">183.232</span>.231.174 <span class="token punctuation">(</span><span class="token number">183.232</span>.231.174<span class="token punctuation">)</span>: <span class="token assign-left variable">icmp_seq</span><span class="token operator">=</span><span class="token number">4</span> <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token number">54</span> <span class="token assign-left variable">time</span><span class="token operator">=</span><span class="token number">25.9</span> ms
^C
--- www.baidu.com <span class="token function">ping</span> statistics ---
<span class="token number">4</span> packets transmitted, <span class="token number">4</span> received, <span class="token number">0</span>% packet loss, <span class="token function">time</span> 7075ms
rtt min/avg/max/mdev <span class="token operator">=</span> <span class="token number">25.385</span>/25.941/26.288/0.356 ms
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装网络工具" tabindex="-1"><a class="header-anchor" href="#安装网络工具" aria-hidden="true">#</a> 安装网络工具</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 更新</span>
yum update <span class="token parameter variable">-y</span>
<span class="token comment"># 安装工具</span>
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> net-tools
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>172.18.110.175</p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,11),m={href:"https://learn.microsoft.com/zh-cn/windows/wsl/use-custom-distro",target:"_blank",rel:"noopener noreferrer"},b={href:"https://learn.microsoft.com/zh-cn/windows/wsl/networking",target:"_blank",rel:"noopener noreferrer"};function v(k,h){const n=l("ExternalLinkIcon");return o(),c("div",null,[r,s("p",null,[s("a",d,[a("WSL2 网络异常排查 ping 不通、网络地址异常、缺少默认路由、被宿主机防火墙拦截 "),e(n)])]),u,s("p",null,[s("a",m,[a("导入要与 WSL 一起使用的任何 Linux 发行版 | Microsoft Learn"),e(n)])]),s("p",null,[s("a",b,[a("使用 WSL 访问网络应用程序 | Microsoft Learn"),e(n)])])])}const g=p(i,[["render",v],["__file","01-WSL安装Centos.html.vue"]]);export{g as default};
