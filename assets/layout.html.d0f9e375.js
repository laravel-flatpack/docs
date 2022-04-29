import{_ as s,r as e,o,a as l,b as n,d as c,F as p,i as t,h as i}from"./app.41ec88e4.js";const u={},r=n("h1",{id:"layout",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#layout","aria-hidden":"true"},"#"),t(" Layout")],-1),k=n("p",null,[t("In order to customize the general layout, such as the navigation bar of your admin area, you need to create a new configuration file in "),n("code",null,"/flatpack/layout.yaml")],-1),d=n("h2",{id:"sidebar",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#sidebar","aria-hidden":"true"},"#"),t(" Sidebar")],-1),h=n("p",null,"Sidebar navigation menu can be customized by defining the following options for each menu item:",-1),y=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"left"}},"Option"),n("th",{style:{"text-align":"left"}},"Description"),n("th",{style:{"text-align":"left"}},"Required")])],-1),_=n("tr",null,[n("td",{style:{"text-align":"left"}},[n("strong",null,"url")]),n("td",{style:{"text-align":"left"}},"absolute url of the link item"),n("td",{style:{"text-align":"left"}},"Yes")],-1),g=n("tr",null,[n("td",{style:{"text-align":"left"}},[n("strong",null,"title")]),n("td",{style:{"text-align":"left"}},"text of the link item"),n("td",{style:{"text-align":"left"}},"Yes")],-1),f=n("td",{style:{"text-align":"left"}},[n("strong",null,"icon")],-1),m={style:{"text-align":"left"}},b=t("icon name (check out "),x={href:"https://heroicons.com/",target:"_blank",rel:"noopener noreferrer"},v=t("Heroicons"),N=t(" for the full list)"),T=n("td",{style:{"text-align":"left"}},"Yes",-1),V=i(`<p>The following sample illustrates a blog&#39;s backend menu, including tabs for Posts, Categories, Tags and Users.</p><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token comment"># flatpack/layout.yaml</span>
<span class="token key atrule">sidebar</span><span class="token punctuation">:</span>
  <span class="token key atrule">posts</span><span class="token punctuation">:</span>
    <span class="token key atrule">url</span><span class="token punctuation">:</span> /backend/posts
    <span class="token key atrule">title</span><span class="token punctuation">:</span> Posts
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> book<span class="token punctuation">-</span>open

  <span class="token key atrule">categories</span><span class="token punctuation">:</span>
    <span class="token key atrule">url</span><span class="token punctuation">:</span> /backend/categories
    <span class="token key atrule">title</span><span class="token punctuation">:</span> Categories
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> tag

  <span class="token key atrule">tags</span><span class="token punctuation">:</span>
    <span class="token key atrule">url</span><span class="token punctuation">:</span> /backend/tags
    <span class="token key atrule">title</span><span class="token punctuation">:</span> Tags
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> hashtag

  <span class="token key atrule">users</span><span class="token punctuation">:</span>
    <span class="token key atrule">url</span><span class="token punctuation">:</span> /backend/users
    <span class="token key atrule">title</span><span class="token punctuation">:</span> Users
    <span class="token key atrule">icon</span><span class="token punctuation">:</span> user<span class="token punctuation">-</span>group
</code></pre></div>`,2);function w(B,C){const a=e("ExternalLinkIcon");return o(),l(p,null,[r,k,d,h,n("table",null,[y,n("tbody",null,[_,g,n("tr",null,[f,n("td",m,[b,n("a",x,[v,c(a)]),N]),T])])]),V],64)}var I=s(u,[["render",w],["__file","layout.html.vue"]]);export{I as default};
