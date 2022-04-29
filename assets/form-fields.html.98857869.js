import{_ as l,r as o,o as i,a as p,b as e,d as n,F as r,h as s,i as a}from"./app.41ec88e4.js";const d={},c=s(`<h1 id="forms" tabindex="-1"><a class="header-anchor" href="#forms" aria-hidden="true">#</a> Forms</h1><p>Display a form with fields mapped to model attributes, define custom actions, validations, etc.</p><details class="custom-container details"><summary>View form.yaml example</summary><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token comment"># /flatpack/posts/form.yaml</span>

<span class="token key atrule">header</span><span class="token punctuation">:</span>
  <span class="token key atrule">title</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> heading
    <span class="token key atrule">size</span><span class="token punctuation">:</span> large

<span class="token key atrule">toolbar</span><span class="token punctuation">:</span>
  <span class="token key atrule">save</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> button
    <span class="token key atrule">label</span><span class="token punctuation">:</span> Save
    <span class="token key atrule">action</span><span class="token punctuation">:</span> save
    <span class="token key atrule">shortcut</span><span class="token punctuation">:</span> s

<span class="token key atrule">main</span><span class="token punctuation">:</span>
  <span class="token key atrule">title</span><span class="token punctuation">:</span>
    <span class="token key atrule">label</span><span class="token punctuation">:</span> Title
    <span class="token key atrule">placeholder</span><span class="token punctuation">:</span> Post title
    <span class="token key atrule">rules</span><span class="token punctuation">:</span> required<span class="token punctuation">|</span>string

  <span class="token key atrule">slug</span><span class="token punctuation">:</span>
    <span class="token key atrule">label</span><span class="token punctuation">:</span> Slug
    <span class="token key atrule">placeholder</span><span class="token punctuation">:</span> Post title slug
    <span class="token key atrule">span</span><span class="token punctuation">:</span> <span class="token number">1</span>

  <span class="token key atrule">category</span><span class="token punctuation">:</span>
    <span class="token key atrule">label</span><span class="token punctuation">:</span> Category
    <span class="token key atrule">type</span><span class="token punctuation">:</span> relation
    <span class="token key atrule">relation</span><span class="token punctuation">:</span>
      <span class="token key atrule">name</span><span class="token punctuation">:</span> category
      <span class="token key atrule">display</span><span class="token punctuation">:</span> name
    <span class="token key atrule">span</span><span class="token punctuation">:</span> <span class="token number">1</span>

  <span class="token key atrule">body</span><span class="token punctuation">:</span>
    <span class="token key atrule">label</span><span class="token punctuation">:</span> Post body
    <span class="token key atrule">type</span><span class="token punctuation">:</span> textarea
    <span class="token key atrule">group</span><span class="token punctuation">:</span> more

<span class="token key atrule">sidebar</span><span class="token punctuation">:</span>
  <span class="token key atrule">created_at</span><span class="token punctuation">:</span>
    <span class="token key atrule">label</span><span class="token punctuation">:</span> Created
    <span class="token key atrule">type</span><span class="token punctuation">:</span> datetimepicker
    <span class="token key atrule">span</span><span class="token punctuation">:</span> <span class="token number">1</span>
    <span class="token key atrule">group</span><span class="token punctuation">:</span> Info

  <span class="token key atrule">updated_at</span><span class="token punctuation">:</span>
    <span class="token key atrule">label</span><span class="token punctuation">:</span> Updated
    <span class="token key atrule">type</span><span class="token punctuation">:</span> datetimepicker
    <span class="token key atrule">span</span><span class="token punctuation">:</span> <span class="token number">1</span>
    <span class="token key atrule">group</span><span class="token punctuation">:</span> Info
</code></pre></div></details><h2 id="content-slots" tabindex="-1"><a class="header-anchor" href="#content-slots" aria-hidden="true">#</a> Content slots</h2><p>By default, if you don&#39;t want (or don&#39;t need) to use content slots, you can simply put all your fields under the same <strong>fields</strong> definition.</p><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token comment"># /flatpack/posts/form.yaml</span>

<span class="token key atrule">fields</span><span class="token punctuation">:</span>
  <span class="token comment"># All form fields in one boxed fieldset</span>
</code></pre></div><p>Alternatively, an advanced version of <code>form.yaml</code> composition can be defined using form content slots.</p><table><thead><tr><th style="text-align:left;">Slot</th><th style="text-align:left;">Description</th><th style="text-align:left;">Allowed field types</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>header</strong></td><td style="text-align:left;">Heading fields</td><td style="text-align:left;"><code>heading</code> or <code>editable</code></td></tr><tr><td style="text-align:left;"><strong>toolbar</strong></td><td style="text-align:left;">Action buttons</td><td style="text-align:left;"><code>button</code> or <code>link</code></td></tr><tr><td style="text-align:left;"><strong>main</strong></td><td style="text-align:left;">Main field set</td><td style="text-align:left;">Any <a href="#form-fields">form field</a> type</td></tr><tr><td style="text-align:left;"><strong>sidebar</strong></td><td style="text-align:left;">Sidebar fields</td><td style="text-align:left;">Any <a href="#form-fields">form field</a> type</td></tr></tbody></table><p>Example:</p><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token comment"># /flatpack/posts/form.yaml</span>

<span class="token key atrule">header</span><span class="token punctuation">:</span>
  <span class="token comment"># Heading fields</span>

<span class="token key atrule">toolbar</span><span class="token punctuation">:</span>
  <span class="token comment"># Action buttons</span>

<span class="token key atrule">main</span><span class="token punctuation">:</span>
  <span class="token comment"># Main field set</span>

<span class="token key atrule">sidebar</span><span class="token punctuation">:</span>
  <span class="token comment"># Sidebar fields</span>
</code></pre></div><h2 id="form-fields" tabindex="-1"><a class="header-anchor" href="#form-fields" aria-hidden="true">#</a> Form Fields</h2><h3 id="field-options" tabindex="-1"><a class="header-anchor" href="#field-options" aria-hidden="true">#</a> Field options</h3>`,12),u=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},"Option"),e("th",{style:{"text-align":"left"}},"Description")])],-1),h=e("tr",null,[e("td",{style:{"text-align":"left"}},"type"),e("td",{style:{"text-align":"left"}},[a("Form field type (see "),e("a",{href:"#field-types"},"Field Types"),a(")")])],-1),k=e("tr",null,[e("td",{style:{"text-align":"left"}},"label"),e("td",{style:{"text-align":"left"}},"Field label text.")],-1),f=e("tr",null,[e("td",{style:{"text-align":"left"}},"placeholder"),e("td",{style:{"text-align":"left"}},"Input placeholder text.")],-1),y=e("tr",null,[e("td",{style:{"text-align":"left"}},"group"),e("td",{style:{"text-align":"left"}},"Name of the grouping box to include the field within.")],-1),m=e("tr",null,[e("td",{style:{"text-align":"left"}},"span"),e("td",{style:{"text-align":"left"}},[e("code",null,"half"),a(" for 50% width, "),e("code",null,"full"),a(" for 100% width.")])],-1),g=e("td",{style:{"text-align":"left"}},"rules",-1),b={style:{"text-align":"left"}},x=a("String of validation rules (uses "),_={href:"https://laravel.com/docs/8.x/validation#available-validation-rules",target:"_blank",rel:"noopener noreferrer"},v=a("Laravel Validation rules"),E=a(")"),F=s('<h3 id="field-types" tabindex="-1"><a class="header-anchor" href="#field-types" aria-hidden="true">#</a> Field types</h3><div class="columns"><div class="column"><ul><li><a href="#text-input">Text</a></li><li><a href="#email-input">Email</a></li><li><a href="#textarea-input">Textarea</a></li><li><a href="#editor">Editor</a></li><li><a href="#block-editor">Block editor</a></li></ul></div><div class="column"><ul><li><a href="#date-picker">Date Picker</a></li><li><a href="#datetime-picker">Datetime Picker</a></li><li><a href="#editable">Editable</a></li><li><a href="#heading">Heading</a></li></ul></div><div class="column"><ul><li><a href="#button">Button</a></li><li><a href="#relation">Relation</a></li><li><a href="#taginput">Tag Input</a></li></ul></div></div><h3 id="text-input" tabindex="-1"><a class="header-anchor" href="#text-input" aria-hidden="true">#</a> Text input</h3><p><code>text</code> - renders a single line text input box. This is the <strong>default type</strong> used if none is specified.</p><h3 id="email-input" tabindex="-1"><a class="header-anchor" href="#email-input" aria-hidden="true">#</a> Email input</h3><p><code>email</code> - renders a single line email input box.</p><h3 id="textarea-input" tabindex="-1"><a class="header-anchor" href="#textarea-input" aria-hidden="true">#</a> Textarea input</h3><p><code>textarea</code> - renders a textarea input box.</p><h3 id="datetime-picker" tabindex="-1"><a class="header-anchor" href="#datetime-picker" aria-hidden="true">#</a> Datetime picker</h3><p><code>datetime-picker</code> - renders a datetime picker input box.</p><h3 id="editor" tabindex="-1"><a class="header-anchor" href="#editor" aria-hidden="true">#</a> Editor</h3>',11),T=e("code",null,"editor",-1),V=a(" - renders a WYSIWYG text editor using "),w={href:"https://ckeditor.com/",target:"_blank",rel:"noopener noreferrer"},B=a("CkEditor"),S=e("h3",{id:"block-editor",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#block-editor","aria-hidden":"true"},"#"),a(" Block editor")],-1),A=e("code",null,"block-editor",-1),I=a(" - renders a next generation block styled editor using "),D={href:"https://editorjs.io/",target:"_blank",rel:"noopener noreferrer"},C=a("Editor.js"),N=s('<h3 id="heading" tabindex="-1"><a class="header-anchor" href="#heading" aria-hidden="true">#</a> Heading</h3><p><code>heading</code> - renders a read-only heading field.</p><h3 id="editable" tabindex="-1"><a class="header-anchor" href="#editable" aria-hidden="true">#</a> Editable</h3><p><code>editable</code> - renders a label (or heading) that becomes a <a href="#text-input">text input</a> on click.</p><h3 id="relation" tabindex="-1"><a class="header-anchor" href="#relation" aria-hidden="true">#</a> Relation</h3><p><code>relation</code> - renders a list of checkboxes.</p><h3 id="tag-input" tabindex="-1"><a class="header-anchor" href="#tag-input" aria-hidden="true">#</a> Tag input</h3><p><code>taginput</code> - renders a field with tags for related records.</p><h3 id="button" tabindex="-1"><a class="header-anchor" href="#button" aria-hidden="true">#</a> Button</h3><p><code>button</code> - renders a button.</p><h2 id="form-validation" tabindex="-1"><a class="header-anchor" href="#form-validation" aria-hidden="true">#</a> Form Validation</h2>',11),P=a("Validation rules can be applied to each form field by defining the "),H=e("code",null,"rules",-1),L=a(" option. This option accepts all the available "),j={href:"https://laravel.com/docs/9.x/validation#available-validation-rules",target:"_blank",rel:"noopener noreferrer"},M=a("Validation rules"),R=a(" provided by Laravel.");function W(Y,q){const t=o("ExternalLinkIcon");return i(),p(r,null,[c,e("table",null,[u,e("tbody",null,[h,k,f,y,m,e("tr",null,[g,e("td",b,[x,e("a",_,[v,n(t)]),E])])])]),F,e("p",null,[T,V,e("a",w,[B,n(t)])]),S,e("p",null,[A,I,e("a",D,[C,n(t)])]),N,e("p",null,[P,H,L,e("a",j,[M,n(t)]),R])],64)}var G=l(d,[["render",W],["__file","form-fields.html.vue"]]);export{G as default};
