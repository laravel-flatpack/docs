import{_ as n,h as s}from"./app.41ec88e4.js";const a={},t=s(`<h1 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h1><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>You can publish the configuration file with <code>php artisan vendor:publish</code> command.</p></div><p>Flatpack configuration file is published in <code>/config/flatpack.php</code>. This is an example of the configuration file:</p><div class="language-php ext-php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

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

        <span class="token string single-quoted-string">&#39;save&#39;</span> <span class="token operator">=&gt;</span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\\</span>Flatpack<span class="token punctuation">\\</span>Actions<span class="token punctuation">\\</span>Save</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span>

        <span class="token string single-quoted-string">&#39;upload&#39;</span> <span class="token operator">=&gt;</span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\\</span>Flatpack<span class="token punctuation">\\</span>Actions<span class="token punctuation">\\</span>Upload</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span>

        <span class="token string single-quoted-string">&#39;delete&#39;</span> <span class="token operator">=&gt;</span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\\</span>Flatpack<span class="token punctuation">\\</span>Actions<span class="token punctuation">\\</span>Delete</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span>

        <span class="token string single-quoted-string">&#39;restore&#39;</span> <span class="token operator">=&gt;</span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\\</span>Flatpack<span class="token punctuation">\\</span>Actions<span class="token punctuation">\\</span>Restore</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span>

        <span class="token string single-quoted-string">&#39;empty-trash&#39;</span> <span class="token operator">=&gt;</span> <span class="token class-name class-name-fully-qualified static-context"><span class="token punctuation">\\</span>Flatpack<span class="token punctuation">\\</span>Actions<span class="token punctuation">\\</span>EmptyTrash</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">/*
    |--------------------------------------------------------------------------
    | Branding
    |--------------------------------------------------------------------------
    |
    | The image and text to be displayed as the top element of the sidebar.
    | Logo should be an absolute url or a relative path to the public directory.
    |
    */</span>
    <span class="token string single-quoted-string">&#39;brand&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>

        <span class="token string single-quoted-string">&#39;name&#39;</span> <span class="token operator">=&gt;</span> <span class="token function">env</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;APP_NAME&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;Flatpack&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

        <span class="token string single-quoted-string">&#39;logo&#39;</span> <span class="token operator">=&gt;</span> <span class="token function">env</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;FLATPACK_LOGO&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;flatpack/images/logo.svg&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">/*
    |--------------------------------------------------------------------------
    | Directory
    |--------------------------------------------------------------------------
    |
    | The directory where the Flatpack templates are stored, relative to
    | the application root.
    |
    */</span>
    <span class="token string single-quoted-string">&#39;directory&#39;</span> <span class="token operator">=&gt;</span> <span class="token function">env</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;FLATPACK_DIRECTORY&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;flatpack&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

    <span class="token comment">/*
    |--------------------------------------------------------------------------
    | Route Prefix
    |--------------------------------------------------------------------------
    |
    | Flatpack route prefix.
    | Example: http://localhost/backend
    |
    */</span>
    <span class="token string single-quoted-string">&#39;prefix&#39;</span> <span class="token operator">=&gt;</span> <span class="token function">env</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;FLATPACK_PREFIX&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;backend&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

    <span class="token comment">/*
    |--------------------------------------------------------------------------
    | Middleware
    |--------------------------------------------------------------------------
    |
    | Middleware to be applied to all Flatpack routes.
    |
    */</span>
    <span class="token string single-quoted-string">&#39;middleware&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>

        <span class="token string single-quoted-string">&#39;before&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
            <span class="token comment">// Middleware to be applied before FlatpackMiddleware.</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>

        <span class="token string single-quoted-string">&#39;after&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>
            <span class="token comment">// Middleware to be applied after FlatpackMiddleware.</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>

    <span class="token comment">/*
    |--------------------------------------------------------------------------
    | File Storage
    |--------------------------------------------------------------------------
    |
    | By default, Flatpack will use the default Laravel file storage.
    | You can override this by setting your own file storage.
    |
    */</span>
    <span class="token string single-quoted-string">&#39;storage&#39;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>

        <span class="token string single-quoted-string">&#39;disk&#39;</span> <span class="token operator">=&gt;</span>  <span class="token function">env</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;FLATPACK_STORAGE_DISK&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;public&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

        <span class="token string single-quoted-string">&#39;path&#39;</span> <span class="token operator">=&gt;</span>  <span class="token function">env</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;FLATPACK_STORAGE_PATH&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;uploads&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>

<span class="token punctuation">]</span><span class="token punctuation">;</span>
</span></code></pre></div>`,4);function p(e,o){return t}var l=n(a,[["render",p],["__file","configuration.html.vue"]]);export{l as default};
