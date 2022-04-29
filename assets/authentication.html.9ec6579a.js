import{_ as n,h as a}from"./app.41ec88e4.js";const s={},t=a(`<h1 id="authentication" tabindex="-1"><a class="header-anchor" href="#authentication" aria-hidden="true">#</a> Authentication</h1><p>By default, all users can access Flatpack in local environment. However, in other environments, it is important to take an extra step to ensure that only the correct users have access to it.</p><h2 id="authorizing-access-to-users" tabindex="-1"><a class="header-anchor" href="#authorizing-access-to-users" aria-hidden="true">#</a> Authorizing access to users</h2><p>For non-local environments (e.g. Production), the <code>FlatpackUser</code> contract must be implemented in your <code>App/Model/User</code> model to grant access to Flatpack. The <code>isFlatpackAdmin()</code> method should return true or false depending on whether the user is allowed to access Flatpack.</p><div class="language-php ext-php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Models</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Flatpack<span class="token punctuation">\\</span>Contracts<span class="token punctuation">\\</span>FlatpackUser</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Illuminate<span class="token punctuation">\\</span>Foundation<span class="token punctuation">\\</span>Auth<span class="token punctuation">\\</span>User</span> <span class="token keyword">as</span> Authenticatable<span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">User</span> <span class="token keyword">extends</span> <span class="token class-name">Authenticatable</span> <span class="token keyword">implements</span> <span class="token class-name">FlatpackUser</span>
<span class="token punctuation">{</span>
    <span class="token comment">// ...</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">isFlatpackAdmin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">bool</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">in_array</span><span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">email</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;admin@yourdomain.com&#39;</span>
        <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre></div><p>In this example, the <code>isFlatpackAdmin()</code> method is configured to return true if the user&#39;s email address is in an array of whitelisted addresses.</p>`,6);function e(p,o){return t}var i=n(s,[["render",e],["__file","authentication.html.vue"]]);export{i as default};
