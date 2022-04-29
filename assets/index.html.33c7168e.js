import{_ as c,r as p,o as i,a as r,b as e,d as n,w as t,F as u,i as a,h as o}from"./app.41ec88e4.js";const d={},k=e("h1",{id:"introduction",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#introduction","aria-hidden":"true"},"#"),a(" Introduction")],-1),h=e("p",null,"Flatpack is probably the quickest and simplest solution to create fast multi-purpose administration panels for your Laravel app.",-1),m=e("p",null,"Out of the box, it provides a rich stack of crafted components, ready to assemble.",-1),f=e("p",null,"With Flatpack you can:",-1),_=a("Quickly create CRUD (Create, Read, Update, Delete) interfaces for your "),y={href:"https://laravel.com/docs/8.x/eloquent",target:"_blank",rel:"noopener noreferrer"},b=a("Eloquent models"),g=a("."),x=a("Customise UI and components with simple and declarative "),v={href:"https://yaml.org/",target:"_blank",rel:"noopener noreferrer"},w=a("YAML"),q=a(" files."),L=e("li",null,"Build a complete administration panel for your site in seconds.",-1),F=o(`<h2 id="requirements" tabindex="-1"><a class="header-anchor" href="#requirements" aria-hidden="true">#</a> Requirements</h2><ul><li>PHP 8.x</li><li>Composer</li><li>Laravel 9.x</li></ul><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2><p>Install the package via composer:</p><div class="language-text ext-text"><pre class="language-text"><code>composer require flatpack/flatpack
</code></pre></div><p>Publish the configuration file and the compiled assets.</p><div class="language-text ext-text"><pre class="language-text"><code>php artisan vendor:publish --tag=&quot;flatpack&quot;
</code></pre></div><p>Flatpack is now ready.</p><p>Start by generating the template files for an Eloquent model. <a href="#generating-flatpack-files">See how</a></p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><h3 id="generating-flatpack-files" tabindex="-1"><a class="header-anchor" href="#generating-flatpack-files" aria-hidden="true">#</a> Generating Flatpack files</h3><p>In this example, we are going to generate the templates for <code>App\\Models\\Post</code> model.</p><div class="language-bash ext-sh"><pre class="language-bash"><code>php artisan make:flatpack Post
</code></pre></div><p>This command generates two files into the <code>/flatpack</code> directory:</p><ul><li>A <a href="#form-composition">form</a> template <code>/flatpack/posts/form.yaml</code>, that defines the composition of your posts form.</li><li>A <a href="#list-composition">list</a> template <code>/flatpack/posts/list.yaml</code>, that defines the layout composition of your posts table with pagination.</li></ul><p>Let&#39;s check the result: <code>/backend/posts</code></p><h3 id="customizing-form-and-list-views" tabindex="-1"><a class="header-anchor" href="#customizing-form-and-list-views" aria-hidden="true">#</a> Customizing form and list views</h3>`,17),C=a("Now that Flatpack is up and running, we can start the assembling. The generated "),T=e("code",null,"form.yaml",-1),E=a(" and "),I=e("code",null,"list.yaml",-1),P=a(" can be "),U=a("customized"),N=a(" by defining "),R=e("strong",null,"fields",-1),z=a(" or "),A=e("strong",null,"columns",-1),B=a(" of your views."),D=o('<p>Each one will map your Eloquent model attribute (if present) to a pre-made component with different options and capabilities (text editors, date pickers, handling relations, etc.).</p><p>Learn more about all the different types of <a href="/reference/form-fields">Form fields</a> and <a href="/reference/table-columns">List columns</a> and their options.</p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>The following examples illustrate a <code>form.yaml</code> and <code>list.yaml</code> for a hypothetical Post model.</p><h3 id="form-composition" tabindex="-1"><a class="header-anchor" href="#form-composition" aria-hidden="true">#</a> Form composition</h3>',5),V=a("This form has different input types ("),H=e("em",null,"e.g.",-1),S=a(),Y=a("text"),M=a(", "),G=a("textarea"),O=a(" and "),Q=a("date pickers"),W=a(") with individual options and validation rules."),j=o(`<div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token comment"># /flatpack/posts/form.yaml</span>

<span class="token key atrule">fields</span><span class="token punctuation">:</span>
  <span class="token key atrule">title</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> text
    <span class="token key atrule">label</span><span class="token punctuation">:</span> Title
    <span class="token key atrule">placeholder</span><span class="token punctuation">:</span> Post Title
    <span class="token key atrule">rules</span><span class="token punctuation">:</span> required<span class="token punctuation">|</span>string

  <span class="token key atrule">description</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> textarea
    <span class="token key atrule">label</span><span class="token punctuation">:</span> Description

  <span class="token key atrule">created_at</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> datetimepicker
    <span class="token key atrule">label</span><span class="token punctuation">:</span> Created
    <span class="token key atrule">readonly</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">span</span><span class="token punctuation">:</span> <span class="token number">1</span>

  <span class="token key atrule">updated_at</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> datetimepicker
    <span class="token key atrule">label</span><span class="token punctuation">:</span> Updated
    <span class="token key atrule">readonly</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">span</span><span class="token punctuation">:</span> <span class="token number">1</span>
</code></pre></div><p>Learn more: <a href="/reference/form-fields">Form reference</a></p><h3 id="list-composition" tabindex="-1"><a class="header-anchor" href="#list-composition" aria-hidden="true">#</a> List composition</h3>`,3),J=a("The paginated table rendered has some "),K=a("searchable"),X=a(" and "),Z=a("sortable"),$=a(" columns."),aa=o(`<div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token comment"># /flatpack/posts/list.yaml</span>

<span class="token key atrule">columns</span><span class="token punctuation">:</span>
  <span class="token key atrule">id</span><span class="token punctuation">:</span>
    <span class="token key atrule">label</span><span class="token punctuation">:</span> ID
    <span class="token key atrule">sortable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">searchable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

  <span class="token key atrule">title</span><span class="token punctuation">:</span>
    <span class="token key atrule">label</span><span class="token punctuation">:</span> Post Title
    <span class="token key atrule">sortable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">searchable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

  <span class="token key atrule">created_at</span><span class="token punctuation">:</span>
    <span class="token key atrule">label</span><span class="token punctuation">:</span> Created
    <span class="token key atrule">type</span><span class="token punctuation">:</span> datetime
    <span class="token key atrule">format</span><span class="token punctuation">:</span> <span class="token string">&quot;Y-m-d H:i:s&quot;</span>
    <span class="token key atrule">sortable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

  <span class="token key atrule">updated_at</span><span class="token punctuation">:</span>
    <span class="token key atrule">label</span><span class="token punctuation">:</span> Updated
    <span class="token key atrule">type</span><span class="token punctuation">:</span> datetime
    <span class="token key atrule">format</span><span class="token punctuation">:</span> <span class="token string">&quot;Y-m-d H:i:s&quot;</span>
    <span class="token key atrule">sortable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre></div><p>Learn more: <a href="/reference/table-columns">List reference</a></p>`,2);function ea(na,sa){const l=p("ExternalLinkIcon"),s=p("RouterLink");return i(),r(u,null,[k,h,m,f,e("ul",null,[e("li",null,[_,e("a",y,[b,n(l)]),g]),e("li",null,[x,e("a",v,[w,n(l)]),q]),L]),F,e("p",null,[C,T,E,I,P,n(s,{to:"/reference/"},{default:t(()=>[U]),_:1}),N,R,z,A,B]),D,e("p",null,[V,H,S,n(s,{to:"/reference/form-fields.html#text-input"},{default:t(()=>[Y]),_:1}),M,n(s,{to:"/reference/form-fields.html#textarea-input"},{default:t(()=>[G]),_:1}),O,n(s,{to:"/reference/form-fields.html#datetime-picker"},{default:t(()=>[Q]),_:1}),W]),j,e("p",null,[J,n(s,{to:"/reference/table-columns.html#column-options"},{default:t(()=>[K]),_:1}),X,n(s,{to:"/reference/table-columns.html#column-options"},{default:t(()=>[Z]),_:1}),$]),aa],64)}var oa=c(d,[["render",ea],["__file","index.html.vue"]]);export{oa as default};
