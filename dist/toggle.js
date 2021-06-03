import{toRefs as e,computed as l,openBlock as a,createBlock as n,withKeys as t,withDirectives as r,createVNode as u,vShow as d,renderSlot as i,createCommentVNode as c}from"vue";function o(e,l){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);l&&(n=n.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),a.push.apply(a,n)}return a}function s(e,l,a){return l in e?Object.defineProperty(e,l,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[l]=a,e}function f(a,n,t){var r=e(a),u=r.disabled.value,d=function(e){for(var l=1;l<arguments.length;l++){var a=null!=arguments[l]?arguments[l]:{};l%2?o(Object(a),!0).forEach((function(l){s(e,l,a[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(a,l))}))}return e}({container:"toggle-container",toggle:"toggle",toggleOn:"toggle-on",toggleOff:"toggle-off",toggleOnDisabled:"toggle-on-disabled",toggleOffDisabled:"toggle-off-disabled",handle:"toggle-handle",handleOn:"toggle-handle-on",handleOff:"toggle-handle-off",handleOnDisabled:"toggle-handle-on-disabled",handleOffDisabled:"toggle-handle-off-disabled",label:"toggle-label"},r.classes.value),i=t.checked;return{classList:l((function(){return{container:d.container,toggle:[d.toggle,u?i.value?d.toggleOnDisabled:d.toggleOffDisabled:i.value?d.toggleOn:d.toggleOff],handle:[d.handle,u?i.value?d.handleOnDisabled:d.handleOffDisabled:i.value?d.handleOn:d.handleOff],label:d.label}}))}}var b={name:"Toggle",emits:["input","update:modelValue","change"],props:{...{value:{validator:function(e){return e=>-1!==["number","string","boolean"].indexOf(typeof e)||null==e},required:!1},modelValue:{validator:function(e){return e=>-1!==["number","string","boolean"].indexOf(typeof e)||null==e},required:!1}},id:{type:[String,Number],required:!1,default:"toggle"},name:{type:[String,Number],required:!1,default:"toggle"},disabled:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},falseValue:{type:[String,Number,Boolean],required:!1,default:!1},trueValue:{type:[String,Number,Boolean],required:!1,default:!0},onLabel:{type:[String,Object],required:!1,default:""},offLabel:{type:[String,Object],required:!1,default:""},classes:{type:Object,required:!1,default:()=>({})},labelledby:{type:String,required:!1},describedby:{type:String,required:!1}},setup(a,n){const t=function(a,n,t){var r=e(a),u=r.value,d=r.modelValue,i=r.falseValue,c=r.trueValue,o=r.disabled,s=void 0!==n.expose?d:u,f=l((function(){return s.value===c.value})),b=function(e){n.emit("input",e),n.emit("update:modelValue",e),n.emit("change",e)},g=function(){b(c.value)},h=function(){b(i.value)};return-1!==[null,void 0,!1,0,"0","off"].indexOf(s.value)&&s.value!==i.value&&h(),-1!==[!0,1,"1","on"].indexOf(s.value)&&s.value!==c.value&&g(),{externalValue:s,checked:f,update:b,check:g,uncheck:h,handleInput:function(e){b(e.target.checked?c.value:i.value)},handleClick:function(){o.value||(f.value?h():g())}}}(a,n),r=function(a,n,t){var r=e(a),u=r.trueValue,d=r.falseValue,i=r.onLabel,c=r.offLabel,o=t.checked,s=t.update;return{label:l((function(){var e=o.value?i.value:c.value;return e||(e="&nbsp;"),e})),toggle:function(){s(o.value?d.value:u.value)},on:function(){s(u.value)},off:function(){s(d.value)}}}(a,0,{checked:t.checked,update:t.update}),u=f(a,0,{checked:t.checked}),d=(i={check:t.check,uncheck:t.uncheck,checked:t.checked},c=i.check,o=i.uncheck,s=i.checked,{handleSpace:function(){s.value?o():c()}});var i,c,o,s;return{...t,...u,...r,...d}}};b.render=function(e,l,o,s,f,b){return a(),n("div",{class:e.classList.container,tabindex:o.disabled?-1:0,"aria-checked":e.checked,"aria-describedby":o.describedby,"aria-labelledby":o.labelledby,role:"switch",onKeyup:l[2]||(l[2]=t(((...l)=>e.handleSpace&&e.handleSpace(...l)),["space"]))},[r(u("input",{type:"checkbox",id:o.id,name:o.name,value:o.trueValue,checked:e.checked,disabled:o.disabled},null,8,["id","name","value","checked","disabled"]),[[d,!1]]),u("div",{class:e.classList.toggle,onClick:l[1]||(l[1]=(...l)=>e.handleClick&&e.handleClick(...l))},[u("span",{class:e.classList.handle},null,2),i(e.$slots,"label",{checked:e.checked,classList:e.classList},(()=>[u("span",{class:e.classList.label,innerHTML:e.label},null,10,["innerHTML"])])),o.required?(a(),n("input",{key:0,type:"checkbox",style:{appearance:"none",height:"1px",margin:"0",padding:"0",fontSize:"0",background:"transparent",position:"absolute",width:"100%",bottom:"0",outline:"none"},checked:e.checked,"aria-hidden":"true",tabindex:"-1",required:""},null,8,["checked"])):c("v-if",!0)],2)],42,["tabindex","aria-checked","aria-describedby","aria-labelledby"])},b.__file="src/Toggle.vue";export default b;
