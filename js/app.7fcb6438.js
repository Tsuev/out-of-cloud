(function(t){function e(e){for(var i,s,a=e[0],c=e[1],l=e[2],p=0,d=[];p<a.length;p++)s=a[p],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&d.push(o[s][0]),o[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(i=!1)}i&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var i={},o={app:0},r=[];function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"17de":function(t,e,n){},"1c91":function(t,e,n){"use strict";n("17de")},"21bb":function(t,e,n){"use strict";n("2dad")},"28db":function(t,e,n){t.exports=n.p+"img/image5.7970aff1.png"},"2dad":function(t,e,n){},"410b":function(t,e,n){t.exports=n.p+"img/image1.ae30014d.png"},"4c00":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-view")},r=[],s=n("2877"),a={},c=Object(s["a"])(a,o,r,!1,null,null,null),l=c.exports,u=n("8c4f"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid p-0 d-flex justify-content-center align-items-center"},[n("div",{staticClass:"wrapper"},[n("Carousel"),n("div",{staticClass:"row justify-content-center"},[n("ButtonPopUp")],1)],1),n("PopUp")],1)},d=[],f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"carousel d-flex align-items-center justify-content-center"},[n("Arrow",{on:{leaf:t.prev}}),n("div",{staticClass:"cour"},t._l(t.slides,(function(e,i){return n("CorouselSlide",{key:e.id,attrs:{index:i,photoPath:e.path,activeSlide:t.activeSlide,direction:t.direction}})})),1),n("Arrow",{attrs:{rotateActive:!0},on:{leaf:t.next}})],1)},m=[],h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:t.direction,mode:"out-in"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.activeSlide===t.index,expression:"activeSlide === index"}],staticClass:"slide"},[i("div",{staticClass:"d-flex flex-column h-100 justify-content-center"},[i("img",{staticClass:"mx-auto d-block",attrs:{src:n("bb6e")("./"+t.photoPath),alt:""}}),i("div",{staticClass:"number position-absolute bg-white"},[t._v(" "+t._s(t.index+1)+" ")]),i("div",{staticClass:"text-block text-center"},[i("h5",[t._v("Привезём точно по списку")]),i("p",[t._v(" Сборщик берëт с собой наручный терминал, на котором он видит весь список покупок для каждого заказа. ")])])])])])},v=[],b={props:["photoPath","activeSlide","index","direction"]},g=b,w=(n("7414"),Object(s["a"])(g,h,v,!1,null,"ca9b603a",null)),x=w.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"arrow mx-4",class:{rotate:t.rotateActive},on:{click:t.leaf}},[n("svg",{attrs:{width:"24",height:"44",viewBox:"0 0 24 44",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M22 2L2 22L22 42",stroke:"#D0D5CD","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"}})])])},_=[],j={props:["rotateActive"],methods:{leaf:function(){this.$emit("leaf")}}},O=j,S=(n("6261"),Object(s["a"])(O,y,_,!1,null,null,null)),C=S.exports,P={data:function(){return{slides:[{id:0,path:"image1.png"},{id:1,path:"image3.png"},{id:2,path:"image5.png"},{id:3,path:"image6.png"}],activeSlide:0,direction:""}},methods:{next:function(){this.activeSlide>=this.slides.length-1?this.activeSlide=0:this.activeSlide++,this.direction="slide-left"},prev:function(){this.activeSlide<=0?this.activeSlide=this.slides.length-1:this.activeSlide--,this.direction="slide-right"}},components:{CorouselSlide:x,Arrow:C}},k=P,U=(n("1c91"),Object(s["a"])(k,f,m,!1,null,null,null)),E=U.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{on:{click:t.showPopUp}},[t._v(" К покупкам ")])},$=[],A=n("5530"),D=n("2f62"),N={methods:Object(A["a"])({},Object(D["b"])(["showPopUp"]))},T=N,B=(n("8781"),Object(s["a"])(T,M,$,!1,null,"2d9736e6",null)),L=B.exports,J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"backdrop"},[n("div",{staticClass:"form-wrapper p-2 position-absolute"},[n("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[n("label",{staticClass:"mb-2",attrs:{for:"inp"}},[t._v("Email")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control mb-4",attrs:{id:"inp",type:"email",placeholder:"Введите email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),n("transition",{attrs:{name:"fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.showMessage,expression:"showMessage"}],staticClass:"message mb-3"},[t._v("Спасибо!")])]),n("div",{staticClass:"d-flex justify-content-end"},[n("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:t.showPopUp}},[t._v("Закрыть")]),n("button",{staticClass:"btn btn-primary ms-2",attrs:{type:"submit"}},[t._v("Отправить")])])],1)])])])},R=[],F=n("1da1"),H=(n("96cf"),n("d3b7"),{data:function(){return{email:"",showMessage:!1}},computed:Object(D["c"])(["isShow"]),methods:Object(A["a"])(Object(A["a"])({},Object(D["b"])(["showPopUp"])),{},{onSubmit:function(){var t=this;return Object(F["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST"});case 2:n=e.sent,n.ok&&(console.log(t.email),t.showMessage=!0);case 4:case"end":return e.stop()}}),e)})))()}})}),q=H,z=(n("6350"),Object(s["a"])(q,J,R,!1,null,"13d47669",null)),G=z.exports,I={components:{Carousel:E,ButtonPopUp:L,PopUp:G}},K=I,Q=(n("21bb"),Object(s["a"])(K,p,d,!1,null,null,null)),V=Q.exports;i["default"].use(u["a"]);var W=[{path:"/",name:"Home",component:V}],X=new u["a"]({mode:"history",base:"/",routes:W}),Y=X;i["default"].use(D["a"]);var Z=new D["a"].Store({state:{isShow:!1},mutations:{showPopUp:function(t){t.isShow=!t.isShow}}}),tt=n("5f5b");n("f9e3"),n("2dd8"),n("6a2c");i["default"].config.productionTip=!1,i["default"].use(tt["a"]),new i["default"]({router:Y,store:Z,render:function(t){return t(l)}}).$mount("#app")},6261:function(t,e,n){"use strict";n("4c00")},"633f":function(t,e,n){t.exports=n.p+"img/image6.e913a2f7.png"},6350:function(t,e,n){"use strict";n("fd49")},7414:function(t,e,n){"use strict";n("a528")},8781:function(t,e,n){"use strict";n("c300")},a528:function(t,e,n){},bb6e:function(t,e,n){var i={"./image1.png":"410b","./image3.png":"ce0e","./image5.png":"28db","./image6.png":"633f"};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}o.keys=function(){return Object.keys(i)},o.resolve=r,t.exports=o,o.id="bb6e"},c300:function(t,e,n){},ce0e:function(t,e,n){t.exports=n.p+"img/image3.5c5cc1e3.png"},fd49:function(t,e,n){}});
//# sourceMappingURL=app.7fcb6438.js.map