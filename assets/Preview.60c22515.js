import{_ as c,o as t,a as o,b as e,e as d,p as l,f as _}from"./app.41ec88e4.js";const n={name:"Preview",props:{elements:{type:Object,required:!0}}},a=s=>(l("data-v-f6d7ee76"),s=s(),_(),s),r={class:"preview-window"},f={class:"preview-window__container"},m={class:"form"},p={class:"form-fieldset"},v={key:0,class:"form-field"},u=a(()=>e("div",{class:"form-field-elements"},[e("label",{class:"form-field__label",for:"fields-name"}," Name "),e("div",{class:"form-field__input"},[e("input",{type:"text",autocomplete:"off",class:"input",placeholder:"Enter a name",id:"fields-name",name:"fields.name"})])],-1)),h=[u],w={key:1,class:"form-field"},b=a(()=>e("div",{class:"form-field-elements"},[e("label",{class:"form-field__label",for:"field-description"}," Description "),e("div",{class:"form-field__input"},[e("textarea",{autocomplete:"off",rows:"4",class:"textarea",placeholder:"Enter a description",id:"field-description",name:"fields.description"})])],-1)),y=[b],x={key:2,class:"form-field"},k=a(()=>e("button",{type:"button",class:"button"},"Save",-1)),I=[k];function P(s,S,i,B,E,N){return t(),o("div",r,[e("div",f,[e("div",m,[e("div",p,[i.elements.name?(t(),o("div",v,h)):d("",!0),i.elements.description?(t(),o("div",w,y)):d("",!0),i.elements.save?(t(),o("div",x,I)):d("",!0)])])])])}var g=c(n,[["render",P],["__scopeId","data-v-f6d7ee76"],["__file","Preview.vue"]]);export{g as default};