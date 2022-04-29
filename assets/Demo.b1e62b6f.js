import{c as ae,g as be,_ as Ee,r as _e,o as se,a as le,b as P,d as xe,e as Ae,p as Te,f as Se,h as ce,i as ue}from"./app.41ec88e4.js";var de={exports:{}};(function(A,k){(function(R,E){A.exports=E()})(typeof self!="undefined"?self:ae,function(){return(()=>{var R={75:function(p){(function(){var i,y,F,C,H,S;typeof performance!="undefined"&&performance!==null&&performance.now?p.exports=function(){return performance.now()}:typeof process!="undefined"&&process!==null&&process.hrtime?(p.exports=function(){return(i()-H)/1e6},y=process.hrtime,C=(i=function(){var D;return 1e9*(D=y())[0]+D[1]})(),S=1e9*process.uptime(),H=C-S):Date.now?(p.exports=function(){return Date.now()-F},F=Date.now()):(p.exports=function(){return new Date().getTime()-F},F=new Date().getTime())}).call(this)},4087:(p,i,y)=>{for(var F=y(75),C=typeof window=="undefined"?y.g:window,H=["moz","webkit"],S="AnimationFrame",D=C["request"+S],M=C["cancel"+S]||C["cancelRequest"+S],I=0;!D&&I<H.length;I++)D=C[H[I]+"Request"+S],M=C[H[I]+"Cancel"+S]||C[H[I]+"CancelRequest"+S];if(!D||!M){var q=0,$=0,n=[];D=function(t){if(n.length===0){var r=F(),a=Math.max(0,16.666666666666668-(r-q));q=a+r,setTimeout(function(){var o=n.slice(0);n.length=0;for(var l=0;l<o.length;l++)if(!o[l].cancelled)try{o[l].callback(q)}catch(g){setTimeout(function(){throw g},0)}},Math.round(a))}return n.push({handle:++$,callback:t,cancelled:!1}),$},M=function(t){for(var r=0;r<n.length;r++)n[r].handle===t&&(n[r].cancelled=!0)}}p.exports=function(t){return D.call(C,t)},p.exports.cancel=function(){M.apply(C,arguments)},p.exports.polyfill=function(t){t||(t=C),t.requestAnimationFrame=D,t.cancelAnimationFrame=M}}},E={};function T(p){var i=E[p];if(i!==void 0)return i.exports;var y=E[p]={exports:{}};return R[p].call(y.exports,y,y.exports,T),y.exports}T.n=p=>{var i=p&&p.__esModule?()=>p.default:()=>p;return T.d(i,{a:i}),i},T.d=(p,i)=>{for(var y in i)T.o(i,y)&&!T.o(p,y)&&Object.defineProperty(p,y,{enumerable:!0,get:i[y]})},T.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),T.o=(p,i)=>Object.prototype.hasOwnProperty.call(p,i);var Q={};return(()=>{T.d(Q,{default:()=>Y});var p=T(4087),i=T.n(p);const y=function(v){return new RegExp(/<[a-z][\s\S]*>/i).test(v)},F=function(v){var c=document.createElement("div");return c.innerHTML=v,c.childNodes},C=function(v,c){return Math.floor(Math.random()*(c-v+1))+v};var H="TYPE_CHARACTER",S="REMOVE_CHARACTER",D="REMOVE_ALL",M="REMOVE_LAST_VISIBLE_NODE",I="PAUSE_FOR",q="CALL_FUNCTION",$="ADD_HTML_TAG_ELEMENT",n="CHANGE_DELETE_SPEED",t="CHANGE_DELAY",r="CHANGE_CURSOR",a="PASTE_STRING",o="HTML_TAG";function l(v,c){var w=Object.keys(v);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(v);c&&(d=d.filter(function(_){return Object.getOwnPropertyDescriptor(v,_).enumerable})),w.push.apply(w,d)}return w}function g(v){for(var c=1;c<arguments.length;c++){var w=arguments[c]!=null?arguments[c]:{};c%2?l(Object(w),!0).forEach(function(d){h(v,d,w[d])}):Object.getOwnPropertyDescriptors?Object.defineProperties(v,Object.getOwnPropertyDescriptors(w)):l(Object(w)).forEach(function(d){Object.defineProperty(v,d,Object.getOwnPropertyDescriptor(w,d))})}return v}function u(v){return function(c){if(Array.isArray(c))return x(c)}(v)||function(c){if(typeof Symbol!="undefined"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}(v)||function(c,w){if(c){if(typeof c=="string")return x(c,w);var d=Object.prototype.toString.call(c).slice(8,-1);return d==="Object"&&c.constructor&&(d=c.constructor.name),d==="Map"||d==="Set"?Array.from(c):d==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d)?x(c,w):void 0}}(v)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function x(v,c){(c==null||c>v.length)&&(c=v.length);for(var w=0,d=new Array(c);w<c;w++)d[w]=v[w];return d}function N(v,c){for(var w=0;w<c.length;w++){var d=c[w];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(v,d.key,d)}}function h(v,c,w){return c in v?Object.defineProperty(v,c,{value:w,enumerable:!0,configurable:!0,writable:!0}):v[c]=w,v}const Y=function(){function v(d,_){var e=this;if(function(s,f){if(!(s instanceof f))throw new TypeError("Cannot call a class as a function")}(this,v),h(this,"state",{cursorAnimation:null,lastFrameTime:null,pauseUntil:null,eventQueue:[],eventLoop:null,eventLoopPaused:!1,reverseCalledEvents:[],calledEvents:[],visibleNodes:[],initialOptions:null,elements:{container:null,wrapper:document.createElement("span"),cursor:document.createElement("span")}}),h(this,"options",{strings:null,cursor:"|",delay:"natural",pauseFor:1500,deleteSpeed:"natural",loop:!1,autoStart:!1,devMode:!1,skipAddStyles:!1,wrapperClassName:"Typewriter__wrapper",cursorClassName:"Typewriter__cursor",stringSplitter:null,onCreateTextNode:null,onRemoveNode:null}),h(this,"setupWrapperElement",function(){e.state.elements.container&&(e.state.elements.wrapper.className=e.options.wrapperClassName,e.state.elements.cursor.className=e.options.cursorClassName,e.state.elements.cursor.innerHTML=e.options.cursor,e.state.elements.container.innerHTML="",e.state.elements.container.appendChild(e.state.elements.wrapper),e.state.elements.container.appendChild(e.state.elements.cursor))}),h(this,"start",function(){return e.state.eventLoopPaused=!1,e.runEventLoop(),e}),h(this,"pause",function(){return e.state.eventLoopPaused=!0,e}),h(this,"stop",function(){return e.state.eventLoop&&((0,p.cancel)(e.state.eventLoop),e.state.eventLoop=null),e}),h(this,"pauseFor",function(s){return e.addEventToQueue(I,{ms:s}),e}),h(this,"typeOutAllStrings",function(){return typeof e.options.strings=="string"?(e.typeString(e.options.strings).pauseFor(e.options.pauseFor),e):(e.options.strings.forEach(function(s){e.typeString(s).pauseFor(e.options.pauseFor).deleteAll(e.options.deleteSpeed)}),e)}),h(this,"typeString",function(s){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(y(s))return e.typeOutHTMLString(s,f);if(s){var L=e.options||{},b=L.stringSplitter,m=typeof b=="function"?b(s):s.split("");e.typeCharacters(m,f)}return e}),h(this,"pasteString",function(s){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return y(s)?e.typeOutHTMLString(s,f,!0):(s&&e.addEventToQueue(a,{character:s,node:f}),e)}),h(this,"typeOutHTMLString",function(s){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,L=arguments.length>2?arguments[2]:void 0,b=F(s);if(b.length>0)for(var m=0;m<b.length;m++){var O=b[m],j=O.innerHTML;O&&O.nodeType!==3?(O.innerHTML="",e.addEventToQueue($,{node:O,parentNode:f}),L?e.pasteString(j,O):e.typeString(j,O)):O.textContent&&(L?e.pasteString(O.textContent,f):e.typeString(O.textContent,f))}return e}),h(this,"deleteAll",function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"natural";return e.addEventToQueue(D,{speed:s}),e}),h(this,"changeDeleteSpeed",function(s){if(!s)throw new Error("Must provide new delete speed");return e.addEventToQueue(n,{speed:s}),e}),h(this,"changeDelay",function(s){if(!s)throw new Error("Must provide new delay");return e.addEventToQueue(t,{delay:s}),e}),h(this,"changeCursor",function(s){if(!s)throw new Error("Must provide new cursor");return e.addEventToQueue(r,{cursor:s}),e}),h(this,"deleteChars",function(s){if(!s)throw new Error("Must provide amount of characters to delete");for(var f=0;f<s;f++)e.addEventToQueue(S);return e}),h(this,"callFunction",function(s,f){if(!s||typeof s!="function")throw new Error("Callbak must be a function");return e.addEventToQueue(q,{cb:s,thisArg:f}),e}),h(this,"typeCharacters",function(s){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!s||!Array.isArray(s))throw new Error("Characters must be an array");return s.forEach(function(L){e.addEventToQueue(H,{character:L,node:f})}),e}),h(this,"removeCharacters",function(s){if(!s||!Array.isArray(s))throw new Error("Characters must be an array");return s.forEach(function(){e.addEventToQueue(S)}),e}),h(this,"addEventToQueue",function(s,f){var L=arguments.length>2&&arguments[2]!==void 0&&arguments[2];return e.addEventToStateProperty(s,f,L,"eventQueue")}),h(this,"addReverseCalledEvent",function(s,f){var L=arguments.length>2&&arguments[2]!==void 0&&arguments[2],b=e.options.loop;return b?e.addEventToStateProperty(s,f,L,"reverseCalledEvents"):e}),h(this,"addEventToStateProperty",function(s,f){var L=arguments.length>2&&arguments[2]!==void 0&&arguments[2],b=arguments.length>3?arguments[3]:void 0,m={eventName:s,eventArgs:f||{}};return e.state[b]=L?[m].concat(u(e.state[b])):[].concat(u(e.state[b]),[m]),e}),h(this,"runEventLoop",function(){e.state.lastFrameTime||(e.state.lastFrameTime=Date.now());var s=Date.now(),f=s-e.state.lastFrameTime;if(!e.state.eventQueue.length){if(!e.options.loop)return;e.state.eventQueue=u(e.state.calledEvents),e.state.calledEvents=[],e.options=g({},e.state.initialOptions)}if(e.state.eventLoop=i()(e.runEventLoop),!e.state.eventLoopPaused){if(e.state.pauseUntil){if(s<e.state.pauseUntil)return;e.state.pauseUntil=null}var L,b=u(e.state.eventQueue),m=b.shift();if(!(f<=(L=m.eventName===M||m.eventName===S?e.options.deleteSpeed==="natural"?C(40,80):e.options.deleteSpeed:e.options.delay==="natural"?C(120,160):e.options.delay))){var O=m.eventName,j=m.eventArgs;switch(e.logInDevMode({currentEvent:m,state:e.state,delay:L}),O){case a:case H:var U=j.character,B=j.node,z=document.createTextNode(U),W=z;e.options.onCreateTextNode&&typeof e.options.onCreateTextNode=="function"&&(W=e.options.onCreateTextNode(U,z)),W&&(B?B.appendChild(W):e.state.elements.wrapper.appendChild(W)),e.state.visibleNodes=[].concat(u(e.state.visibleNodes),[{type:"TEXT_NODE",character:U,node:W}]);break;case S:b.unshift({eventName:M,eventArgs:{removingCharacterNode:!0}});break;case I:var X=m.eventArgs.ms;e.state.pauseUntil=Date.now()+parseInt(X);break;case q:var G=m.eventArgs,fe=G.cb,ve=G.thisArg;fe.call(ve,{elements:e.state.elements});break;case $:var oe=m.eventArgs,ee=oe.node,te=oe.parentNode;te?te.appendChild(ee):e.state.elements.wrapper.appendChild(ee),e.state.visibleNodes=[].concat(u(e.state.visibleNodes),[{type:o,node:ee,parentNode:te||e.state.elements.wrapper}]);break;case D:var ge=e.state.visibleNodes,ne=j.speed,J=[];ne&&J.push({eventName:n,eventArgs:{speed:ne,temp:!0}});for(var ie=0,he=ge.length;ie<he;ie++)J.push({eventName:M,eventArgs:{removingCharacterNode:!1}});ne&&J.push({eventName:n,eventArgs:{speed:e.options.deleteSpeed,temp:!0}}),b.unshift.apply(b,J);break;case M:var me=m.eventArgs.removingCharacterNode;if(e.state.visibleNodes.length){var re=e.state.visibleNodes.pop(),ye=re.type,Z=re.node,we=re.character;e.options.onRemoveNode&&typeof e.options.onRemoveNode=="function"&&e.options.onRemoveNode({node:Z,character:we}),Z&&Z.parentNode.removeChild(Z),ye===o&&me&&b.unshift({eventName:M,eventArgs:{}})}break;case n:e.options.deleteSpeed=m.eventArgs.speed;break;case t:e.options.delay=m.eventArgs.delay;break;case r:e.options.cursor=m.eventArgs.cursor,e.state.elements.cursor.innerHTML=m.eventArgs.cursor}e.options.loop&&(m.eventName===M||m.eventArgs&&m.eventArgs.temp||(e.state.calledEvents=[].concat(u(e.state.calledEvents),[m]))),e.state.eventQueue=b,e.state.lastFrameTime=s}}}),d)if(typeof d=="string"){var V=document.querySelector(d);if(!V)throw new Error("Could not find container element");this.state.elements.container=V}else this.state.elements.container=d;_&&(this.options=g(g({},this.options),_)),this.state.initialOptions=g({},this.options),this.init()}var c,w;return c=v,(w=[{key:"init",value:function(){var d,_;this.setupWrapperElement(),this.addEventToQueue(r,{cursor:this.options.cursor},!0),this.addEventToQueue(D,null,!0),!window||window.___TYPEWRITER_JS_STYLES_ADDED___||this.options.skipAddStyles||(d=".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}",(_=document.createElement("style")).appendChild(document.createTextNode(d)),document.head.appendChild(_),window.___TYPEWRITER_JS_STYLES_ADDED___=!0),this.options.autoStart===!0&&this.options.strings&&this.typeOutAllStrings().start()}},{key:"logInDevMode",value:function(d){this.options.devMode&&console.log(d)}}])&&N(c.prototype,w),v}()})(),Q.default})()})})(de);var Ce=be(de.exports),pe={exports:{}};(function(A){var k=typeof window!="undefined"?window:typeof WorkerGlobalScope!="undefined"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var R=function(E){var T=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,Q=0,p={},i={manual:E.Prism&&E.Prism.manual,disableWorkerMessageHandler:E.Prism&&E.Prism.disableWorkerMessageHandler,util:{encode:function n(t){return t instanceof y?new y(t.type,n(t.content),t.alias):Array.isArray(t)?t.map(n):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(n){return Object.prototype.toString.call(n).slice(8,-1)},objId:function(n){return n.__id||Object.defineProperty(n,"__id",{value:++Q}),n.__id},clone:function n(t,r){r=r||{};var a,o;switch(i.util.type(t)){case"Object":if(o=i.util.objId(t),r[o])return r[o];a={},r[o]=a;for(var l in t)t.hasOwnProperty(l)&&(a[l]=n(t[l],r));return a;case"Array":return o=i.util.objId(t),r[o]?r[o]:(a=[],r[o]=a,t.forEach(function(g,u){a[u]=n(g,r)}),a);default:return t}},getLanguage:function(n){for(;n;){var t=T.exec(n.className);if(t)return t[1].toLowerCase();n=n.parentElement}return"none"},setLanguage:function(n,t){n.className=n.className.replace(RegExp(T,"gi"),""),n.classList.add("language-"+t)},currentScript:function(){if(typeof document=="undefined")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(a){var n=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(a.stack)||[])[1];if(n){var t=document.getElementsByTagName("script");for(var r in t)if(t[r].src==n)return t[r]}return null}},isActive:function(n,t,r){for(var a="no-"+t;n;){var o=n.classList;if(o.contains(t))return!0;if(o.contains(a))return!1;n=n.parentElement}return!!r}},languages:{plain:p,plaintext:p,text:p,txt:p,extend:function(n,t){var r=i.util.clone(i.languages[n]);for(var a in t)r[a]=t[a];return r},insertBefore:function(n,t,r,a){a=a||i.languages;var o=a[n],l={};for(var g in o)if(o.hasOwnProperty(g)){if(g==t)for(var u in r)r.hasOwnProperty(u)&&(l[u]=r[u]);r.hasOwnProperty(g)||(l[g]=o[g])}var x=a[n];return a[n]=l,i.languages.DFS(i.languages,function(N,h){h===x&&N!=n&&(this[N]=l)}),l},DFS:function n(t,r,a,o){o=o||{};var l=i.util.objId;for(var g in t)if(t.hasOwnProperty(g)){r.call(t,g,t[g],a||g);var u=t[g],x=i.util.type(u);x==="Object"&&!o[l(u)]?(o[l(u)]=!0,n(u,r,null,o)):x==="Array"&&!o[l(u)]&&(o[l(u)]=!0,n(u,r,g,o))}}},plugins:{},highlightAll:function(n,t){i.highlightAllUnder(document,n,t)},highlightAllUnder:function(n,t,r){var a={callback:r,container:n,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};i.hooks.run("before-highlightall",a),a.elements=Array.prototype.slice.apply(a.container.querySelectorAll(a.selector)),i.hooks.run("before-all-elements-highlight",a);for(var o=0,l;l=a.elements[o++];)i.highlightElement(l,t===!0,a.callback)},highlightElement:function(n,t,r){var a=i.util.getLanguage(n),o=i.languages[a];i.util.setLanguage(n,a);var l=n.parentElement;l&&l.nodeName.toLowerCase()==="pre"&&i.util.setLanguage(l,a);var g=n.textContent,u={element:n,language:a,grammar:o,code:g};function x(h){u.highlightedCode=h,i.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,i.hooks.run("after-highlight",u),i.hooks.run("complete",u),r&&r.call(u.element)}if(i.hooks.run("before-sanity-check",u),l=u.element.parentElement,l&&l.nodeName.toLowerCase()==="pre"&&!l.hasAttribute("tabindex")&&l.setAttribute("tabindex","0"),!u.code){i.hooks.run("complete",u),r&&r.call(u.element);return}if(i.hooks.run("before-highlight",u),!u.grammar){x(i.util.encode(u.code));return}if(t&&E.Worker){var N=new Worker(i.filename);N.onmessage=function(h){x(h.data)},N.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else x(i.highlight(u.code,u.grammar,u.language))},highlight:function(n,t,r){var a={code:n,grammar:t,language:r};if(i.hooks.run("before-tokenize",a),!a.grammar)throw new Error('The language "'+a.language+'" has no grammar.');return a.tokens=i.tokenize(a.code,a.grammar),i.hooks.run("after-tokenize",a),y.stringify(i.util.encode(a.tokens),a.language)},tokenize:function(n,t){var r=t.rest;if(r){for(var a in r)t[a]=r[a];delete t.rest}var o=new H;return S(o,o.head,n),C(n,o,t,o.head,0),M(o)},hooks:{all:{},add:function(n,t){var r=i.hooks.all;r[n]=r[n]||[],r[n].push(t)},run:function(n,t){var r=i.hooks.all[n];if(!(!r||!r.length))for(var a=0,o;o=r[a++];)o(t)}},Token:y};E.Prism=i;function y(n,t,r,a){this.type=n,this.content=t,this.alias=r,this.length=(a||"").length|0}y.stringify=function n(t,r){if(typeof t=="string")return t;if(Array.isArray(t)){var a="";return t.forEach(function(x){a+=n(x,r)}),a}var o={type:t.type,content:n(t.content,r),tag:"span",classes:["token",t.type],attributes:{},language:r},l=t.alias;l&&(Array.isArray(l)?Array.prototype.push.apply(o.classes,l):o.classes.push(l)),i.hooks.run("wrap",o);var g="";for(var u in o.attributes)g+=" "+u+'="'+(o.attributes[u]||"").replace(/"/g,"&quot;")+'"';return"<"+o.tag+' class="'+o.classes.join(" ")+'"'+g+">"+o.content+"</"+o.tag+">"};function F(n,t,r,a){n.lastIndex=t;var o=n.exec(r);if(o&&a&&o[1]){var l=o[1].length;o.index+=l,o[0]=o[0].slice(l)}return o}function C(n,t,r,a,o,l){for(var g in r)if(!(!r.hasOwnProperty(g)||!r[g])){var u=r[g];u=Array.isArray(u)?u:[u];for(var x=0;x<u.length;++x){if(l&&l.cause==g+","+x)return;var N=u[x],h=N.inside,Y=!!N.lookbehind,v=!!N.greedy,c=N.alias;if(v&&!N.pattern.global){var w=N.pattern.toString().match(/[imsuy]*$/)[0];N.pattern=RegExp(N.pattern.source,w+"g")}for(var d=N.pattern||N,_=a.next,e=o;_!==t.tail&&!(l&&e>=l.reach);e+=_.value.length,_=_.next){var V=_.value;if(t.length>n.length)return;if(!(V instanceof y)){var s=1,f;if(v){if(f=F(d,e,n,Y),!f||f.index>=n.length)break;var O=f.index,L=f.index+f[0].length,b=e;for(b+=_.value.length;O>=b;)_=_.next,b+=_.value.length;if(b-=_.value.length,e=b,_.value instanceof y)continue;for(var m=_;m!==t.tail&&(b<L||typeof m.value=="string");m=m.next)s++,b+=m.value.length;s--,V=n.slice(e,b),f.index-=e}else if(f=F(d,0,V,Y),!f)continue;var O=f.index,j=f[0],U=V.slice(0,O),B=V.slice(O+j.length),z=e+V.length;l&&z>l.reach&&(l.reach=z);var W=_.prev;U&&(W=S(t,W,U),e+=U.length),D(t,W,s);var X=new y(g,h?i.tokenize(j,h):j,c,j);if(_=S(t,W,X),B&&S(t,_,B),s>1){var G={cause:g+","+x,reach:z};C(n,t,r,_.prev,e,G),l&&G.reach>l.reach&&(l.reach=G.reach)}}}}}}function H(){var n={value:null,prev:null,next:null},t={value:null,prev:n,next:null};n.next=t,this.head=n,this.tail=t,this.length=0}function S(n,t,r){var a=t.next,o={value:r,prev:t,next:a};return t.next=o,a.prev=o,n.length++,o}function D(n,t,r){for(var a=t.next,o=0;o<r&&a!==n.tail;o++)a=a.next;t.next=a,a.prev=t,n.length-=o}function M(n){for(var t=[],r=n.head.next;r!==n.tail;)t.push(r.value),r=r.next;return t}if(!E.document)return E.addEventListener&&(i.disableWorkerMessageHandler||E.addEventListener("message",function(n){var t=JSON.parse(n.data),r=t.language,a=t.code,o=t.immediateClose;E.postMessage(i.highlight(a,i.languages[r],r)),o&&E.close()},!1)),i;var I=i.util.currentScript();I&&(i.filename=I.src,I.hasAttribute("data-manual")&&(i.manual=!0));function q(){i.manual||i.highlightAll()}if(!i.manual){var $=document.readyState;$==="loading"||$==="interactive"&&I&&I.defer?document.addEventListener("DOMContentLoaded",q):window.requestAnimationFrame?window.requestAnimationFrame(q):window.setTimeout(q,16)}return i}(k);A.exports&&(A.exports=R),typeof ae!="undefined"&&(ae.Prism=R)})(pe);var K=pe.exports;(function(A){var k=/[*&][^\s[\]{},]+/,R=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,E="(?:"+R.source+"(?:[ 	]+"+k.source+")?|"+k.source+"(?:[ 	]+"+R.source+")?)",T=/(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g,function(){return/[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source}),Q=/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;function p(i,y){y=(y||"").replace(/m/g,"")+"m";var F=/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g,function(){return E}).replace(/<<value>>/g,function(){return i});return RegExp(F,y)}A.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,function(){return E})),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g,function(){return E}).replace(/<<key>>/g,function(){return"(?:"+T+"|"+Q+")"})),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:p(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:p(/false|true/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:p(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:p(Q),lookbehind:!0,greedy:!0},number:{pattern:p(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:R,important:k,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},A.languages.yml=A.languages.yaml})(Prism);const Ne={name:"Demo",data(){return{blocks:[{code:`name:
    label: Name
    placeholder: Enter a name
    type: text`,element:"name",delay:6},{code:`description:
    label: Description
    placeholder: Enter a description
    type: textarea`,element:"description",delay:14},{code:`save:
    type: button
    label: Save
    action: save`,element:"save",delay:19}],visibleElements:{name:!1,description:!1,save:!1},typewriter:null,observer:null,playing:!1,completed:!1}},mounted(){const A=this.$refs.code;this.observer=new IntersectionObserver((k,R)=>{var E;(E=k==null?void 0:k[0])!=null&&E.isIntersecting&&this.handle()}),this.observer.observe(A)},methods:{showElement(A){this.visibleElements[A]=!0},restart(){this.playing=!1,this.completed=!1,this.visibleElements={name:!1,description:!1,save:!1},this.handle()},handle(){this.playing||this.completed||(this.typewriter=new Ce(this.$refs.code,{loop:!1,delay:30,typeSpeed:150}),this.playing=!0,this.completed=!1,this.typewriter.typeString(K.highlight(`fields:
`,K.languages.yaml)).pauseFor(100),this.blocks.map(({element:A,code:k},R)=>{this.typewriter.typeString(`
  `).typeString(K.highlight(k,K.languages.yaml)).start().callFunction(()=>this.showElement(A)).typeString(`
`).pauseFor(1e3).callFunction(()=>{this.completed=R===this.blocks.length-1})}))}}},Le=A=>(Te("data-v-46e48a4b"),A=A(),Se(),A),Oe={class:"demo"},Pe=Le(()=>P("div",{class:"demo-title"},[P("h2",null,[ue("Create your own"),P("br"),P("span",null,"admin panel"),ue(" in no time")]),P("p",null," Assemble pre-built components with simple and declarative Yaml files. ")],-1)),ke={class:"windows-wrapper"},De={class:"editor-window-wrapper"},Me={class:"editor-window"},Ie={class:"editor-window__container"},Re={class:"editor-window__frame"},Fe=ce('<div class="editor-window__top-bar" data-v-46e48a4b><div class="editor-window__top-bar__items" data-v-46e48a4b><div class="button" data-v-46e48a4b></div><div class="button" data-v-46e48a4b></div><div class="button" data-v-46e48a4b></div></div></div>',1),He={class:"editor-window__contents"},je={class:"editor-window__code-wrapper"},Qe={class:"editor-window__code"},qe={ref:"code",id:"code"},We={class:"preview-window-wrapper"},Ve={class:"replay-wrapper"},$e=ce('<svg height="20px" version="1.1" viewBox="0 0 16 20" width="16px" xmlns="http://www.w3.org/2000/svg" data-v-46e48a4b><g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1" data-v-46e48a4b><g fill="#ffffff" transform="translate(-2.000000, -127.000000)" data-v-46e48a4b><g transform="translate(2.000000, 127.000000)" data-v-46e48a4b><path d="M8,4 L8,0 L3,5 L8,10 L8,6 C11.3,6 14,8.7 14,12 C14,15.3 11.3,18 8,18 C4.7,18 2,15.3 2,12 L0,12 C0,16.4 3.6,20 8,20 C12.4,20 16,16.4 16,12 C16,7.6 12.4,4 8,4 L8,4 Z" data-v-46e48a4b></path></g></g></g></svg>',1),Ue=[$e];function ze(A,k,R,E,T,Q){const p=_e("Preview");return se(),le("section",Oe,[Pe,P("div",ke,[P("div",De,[P("div",Me,[P("div",Ie,[P("div",Re,[Fe,P("div",He,[P("div",je,[P("div",Qe,[P("pre",qe,null,512)])])])])])])]),P("div",We,[xe(p,{elements:T.visibleElements},null,8,["elements"])])]),P("div",Ve,[T.completed?(se(),le("button",{key:0,onClick:k[0]||(k[0]=(...i)=>Q.restart&&Q.restart(...i)),class:"button-replay"},Ue)):Ae("",!0)])])}var Be=Ee(Ne,[["render",ze],["__scopeId","data-v-46e48a4b"],["__file","Demo.vue"]]);export{Be as default};
