import{_ as t,r as e,o as p,a as o,b as s,d as c,w as l,F as i,i as n,h as r}from"./app.41ec88e4.js";const u={},k=s("h1",{id:"custom-actions",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#custom-actions","aria-hidden":"true"},"#"),n(" Custom actions")],-1),d=n("In addition to the "),h=n("Flatpack standard actions"),g=n(", you can also create your own custom actions or extend existing ones."),m=r(`<h2 id="generate-an-action-class" tabindex="-1"><a class="header-anchor" href="#generate-an-action-class" aria-hidden="true">#</a> Generate an action class</h2><p>To generate a custom action, you may use the <code>flatpack:action</code> Artisan command:</p><div class="language-bash ext-sh"><pre class="language-bash"><code>php artisan flatpack:action custom-action
</code></pre></div><p>This command generates a file under the <code>App\\Actions\\Flatpack</code> namespace:</p><div class="language-php ext-php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Actions<span class="token punctuation">\\</span>Flatpack</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Flatpack<span class="token punctuation">\\</span>Actions<span class="token punctuation">\\</span>FlatpackAction</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Flatpack<span class="token punctuation">\\</span>Contracts<span class="token punctuation">\\</span>FlatpackAction</span> <span class="token keyword">as</span> FlatpackActionContract<span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">CustomAction</span> <span class="token keyword">extends</span> <span class="token class-name">FlatpackAction</span> <span class="token keyword">implements</span> <span class="token class-name">FlatpackActionContract</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * Action authorization.
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">bool</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">authorize</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token constant boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * Handle action.
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">void</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// Do something...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre></div><p>The action class extends <code>Flatpack\\Actions\\FlatpackAction</code> and must implement the <code>Flatpack\\Actions\\Action</code> interface.</p><h2 id="registering-the-action" tabindex="-1"><a class="header-anchor" href="#registering-the-action" aria-hidden="true">#</a> Registering the action</h2><p>In order to use the action, you must register it in the <code>flatpack.php</code> configuration file:</p><div class="language-php ext-php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">return</span> <span class="token punctuation">[</span>

    <span class="token comment">/*
    |--------------------------------------------------------------------------
    | Actions
    |--------------------------------------------------------------------------
    |
    | Flatpack form or list actions. You can add your own actions here.
    |
    */</span>
    <span class="token string single-quoted-string">&#39;actions&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;custom-action&#39;</span> <span class="token operator">=&gt;</span> <span class="token class-name class-name-fully-qualified static-context">App<span class="token punctuation">\\</span>Actions<span class="token punctuation">\\</span>CustomAction</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span>

        <span class="token comment">// ...</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
</span></code></pre></div><p>Now the action is ready to be used in the form or list composition.</p><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token key atrule">custom-action</span><span class="token punctuation">:</span>
  <span class="token key atrule">type</span><span class="token punctuation">:</span> button
  <span class="token key atrule">label</span><span class="token punctuation">:</span> Click me
  <span class="token key atrule">action</span><span class="token punctuation">:</span> custom<span class="token punctuation">-</span>action <span class="token comment"># The action name</span>
</code></pre></div><h2 id="handling-the-action" tabindex="-1"><a class="header-anchor" href="#handling-the-action" aria-hidden="true">#</a> Handling the action</h2><p>When an action is triggered, the action class will be initialised and the <code>handle</code> method will be called.</p><p>Inside the <code>handle</code> method, you may use the following properties:</p><table><thead><tr><th style="text-align:left;">Property name</th><th style="text-align:left;">Description</th><th style="text-align:left;">Notes</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>entity</strong></td><td style="text-align:left;">The entity name (plural)</td><td style="text-align:left;"><em>e.g.</em> &quot;users&quot;</td></tr><tr><td style="text-align:left;"><strong>model</strong></td><td style="text-align:left;">The eloquent model class name</td><td style="text-align:left;"><em>e.g.</em> &quot;App\\Models\\User&quot;</td></tr><tr><td style="text-align:left;"><strong>entry</strong></td><td style="text-align:left;">The current eloquent active record</td><td style="text-align:left;">Available on forms only</td></tr><tr><td style="text-align:left;"><strong>fields</strong></td><td style="text-align:left;">The form field current values</td><td style="text-align:left;">Available on forms only</td></tr><tr><td style="text-align:left;"><strong>files</strong></td><td style="text-align:left;">The temporary files attached to the form</td><td style="text-align:left;">Available on forms only</td></tr><tr><td style="text-align:left;"><strong>selected</strong></td><td style="text-align:left;">Array of ids of the selected records</td><td style="text-align:left;">Available on lists only</td></tr><tr><td style="text-align:left;"><strong>user</strong></td><td style="text-align:left;">The currently logged in user</td><td style="text-align:left;"></td></tr></tbody></table><h3 id="utility-methods" tabindex="-1"><a class="header-anchor" href="#utility-methods" aria-hidden="true">#</a> Utility methods</h3><p>The action class instance exposes the following methods you can use:</p><table><thead><tr><th style="text-align:left;">Method</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>entityName</strong></td><td style="text-align:left;">Returns the entity name. The <code>$plural</code> attribute can be set to <code>true</code> to get the plural form.</td></tr><tr><td style="text-align:left;"><strong>isBulk</strong></td><td style="text-align:left;">Returns <code>true</code> if bulk action is performed (Lists only)</td></tr></tbody></table><h3 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h3><p>In the example below, we will override the <code>foo</code> attribute of the active record <code>$this-&gt;entry</code> and save the changes to the database using Eloquent model&#39;s <code>save</code> method.</p><p>The method <code>getMessage</code>, if defined, will be called to retrieve the action&#39;s success message.</p><div class="language-php ext-php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Actions<span class="token punctuation">\\</span>Flatpack</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Flatpack<span class="token punctuation">\\</span>Actions<span class="token punctuation">\\</span>FlatpackAction</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Flatpack<span class="token punctuation">\\</span>Contracts<span class="token punctuation">\\</span>FlatpackAction</span> <span class="token keyword">as</span> FlatpackActionContract<span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">CustomAction</span> <span class="token keyword">extends</span> <span class="token class-name">FlatpackAction</span> <span class="token keyword">implements</span> <span class="token class-name">FlatpackActionContract</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * Model instance.
     *
     * <span class="token keyword">@var</span> <span class="token class-name"><span class="token punctuation">\\</span>Illuminate<span class="token punctuation">\\</span>Database<span class="token punctuation">\\</span>Eloquent<span class="token punctuation">\\</span>Model</span>
     */</span>
    <span class="token keyword">public</span> <span class="token variable">$entry</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Get success message.
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">string</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">__</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;:entity has been updated.&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
            <span class="token string single-quoted-string">&#39;entity&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">entityName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * Handle action.
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">void</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">entry</span><span class="token operator">-&gt;</span><span class="token property">foo</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;bar&#39;</span><span class="token punctuation">;</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">entry</span><span class="token operator">-&gt;</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre></div><h2 id="extending-actions" tabindex="-1"><a class="header-anchor" href="#extending-actions" aria-hidden="true">#</a> Extending actions</h2><p>You can extend existing actions by generating a new action that extends the original action.</p><p>In this example, we will extend the &quot;save&quot; action.</p><p>Generate a new custom action, using the <code>flatpack:action</code> Artisan command:</p><div class="language-bash ext-sh"><pre class="language-bash"><code>php artisan flatpack:action custom-save
</code></pre></div><p>The generated file will be placed under the <code>App\\Actions\\Flatpack</code> namespace.</p><p>The action class will extend the <code>Flatpack\\Actions\\Save</code> class, overriding the <code>authorize</code> method logic to check if the current user has the required permissions to perform the action.</p><div class="language-php ext-php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">namespace</span> <span class="token package">App<span class="token punctuation">\\</span>Actions<span class="token punctuation">\\</span>Flatpack</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token package">Flatpack<span class="token punctuation">\\</span>Actions<span class="token punctuation">\\</span>Save</span><span class="token punctuation">;</span>
<span class="token keyword">use</span> <span class="token package">Flatpack<span class="token punctuation">\\</span>Contracts<span class="token punctuation">\\</span>FlatpackAction</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">CustomSave</span> <span class="token keyword">extends</span> <span class="token class-name">Save</span> <span class="token keyword">implements</span> <span class="token class-name">FlatpackAction</span>
<span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * Action authorization.
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">bool</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">authorize</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">isOwner</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">hasPermissions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * Determine if the user is the owner of the entry.
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">bool</span></span>
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">function</span> <span class="token function-definition function">isOwner</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">entry</span><span class="token operator">-&gt;</span><span class="token property">user_id</span> <span class="token operator">===</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">user</span><span class="token operator">-&gt;</span><span class="token property">id</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * Determine if the user has the permission to create or update the entry.
     *
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">bool</span></span>
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">function</span> <span class="token function-definition function">hasPermissions</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">in_array</span><span class="token punctuation">(</span><span class="token constant boolean">true</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
            <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">user</span><span class="token operator">-&gt;</span><span class="token function">can</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;create&#39;</span><span class="token punctuation">,</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">model</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">user</span><span class="token operator">-&gt;</span><span class="token function">can</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;update&#39;</span><span class="token punctuation">,</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">model</span><span class="token punctuation">)</span>
        <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre></div><p>We now have to register the action in the <code>config/flatpack.php</code> configuration file. Since the <code>Save</code> action is already registered, we can simply replace it with the new action:</p><div class="language-php ext-php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">return</span> <span class="token punctuation">[</span>

    <span class="token string single-quoted-string">&#39;actions&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
        <span class="token string single-quoted-string">&#39;save&#39;</span> <span class="token operator">=&gt;</span> <span class="token class-name class-name-fully-qualified static-context">App<span class="token punctuation">\\</span>Actions<span class="token punctuation">\\</span>CustomSave</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span>

        <span class="token comment">// ...</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
</span></code></pre><div class="highlight-lines"><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br></div></div><p>Finally, the extended action is ready to be used:</p><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token key atrule">save</span><span class="token punctuation">:</span>
  <span class="token key atrule">type</span><span class="token punctuation">:</span> button
  <span class="token key atrule">label</span><span class="token punctuation">:</span> Click me
  <span class="token key atrule">action</span><span class="token punctuation">:</span> save <span class="token comment"># The action name</span>
</code></pre></div>`,34);function y(f,w){const a=e("RouterLink");return p(),o(i,null,[k,s("p",null,[d,c(a,{to:"/reference/"},{default:l(()=>[h]),_:1}),g]),m],64)}var x=t(u,[["render",y],["__file","custom-actions.html.vue"]]);export{x as default};
