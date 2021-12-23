"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8584],{7214:(t,e,n)=>{n.d(e,{Z:()=>o});var r=n(3645),a=n.n(r)()((function(t){return t[1]}));a.push([t.id,"svg[data-v-3e43005c]{display:inline-block;height:80px;position:absolute;right:0;top:0;width:80px}",""]);const o=a},3645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var a={};if(r)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(a[i]=!0)}for(var s=0;s<t.length;s++){var c=[].concat(t[s]);r&&a[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),e.push(c))}},e}},3379:(t,e,n)=>{var r,a=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),i=[];function s(t){for(var e=-1,n=0;n<i.length;n++)if(i[n].identifier===t){e=n;break}return e}function c(t,e){for(var n={},r=[],a=0;a<t.length;a++){var o=t[a],c=e.base?o[0]+e.base:o[0],l=n[c]||0,u="".concat(c," ").concat(l);n[c]=l+1;var d=s(u),f={css:o[1],media:o[2],sourceMap:o[3]};-1!==d?(i[d].references++,i[d].updater(f)):i.push({identifier:u,updater:m(f,e),references:1}),r.push(u)}return r}function l(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var a=n.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var i=o(t.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var u,d=(u=[],function(t,e){return u[t]=e,u.filter(Boolean).join("\n")});function f(t,e,n,r){var a=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=d(e,a);else{var o=document.createTextNode(a),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(o,i[e]):t.appendChild(o)}}function v(t,e,n){var r=n.css,a=n.media,o=n.sourceMap;if(a?t.setAttribute("media",a):t.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var p=null,h=0;function m(t,e){var n,r,a;if(e.singleton){var o=h++;n=p||(p=l(e)),r=f.bind(null,n,o,!1),a=f.bind(null,n,o,!0)}else n=l(e),r=v.bind(null,n,e),a=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else a()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=a());var n=c(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<n.length;r++){var a=s(n[r]);i[a].references--}for(var o=c(t,e),l=0;l<n.length;l++){var u=s(n[l]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}n=o}}}},75:(t,e,n)=>{n.d(e,{Z:()=>s});var r=n(3379),a=n.n(r),o=n(7214),i={insert:"head",singleton:!1};a()(o.Z,i);o.Z.locals;const s=(0,n(1900).Z)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"loader-svg"},[e("svg",{attrs:{version:"1.1",id:"L9",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 100 100","enable-background":"new 0 0 0 0","xml:space":"preserve"}},[e("path",{attrs:{fill:"rgb(130, 138, 159)",d:"M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"}},[e("animateTransform",{attrs:{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"1s",from:"0 50 50",to:"360 50 50",repeatCount:"indefinite"}})],1)])])}),[],!1,null,"3e43005c",null).exports},8584:(t,e,n)=>{n.r(e),n.d(e,{default:()=>i});var r=n(629),a=n(75);n(1580);const o={data:function(){return{}},computed:(0,r.rn)({data:function(t){return t.tops.data},button_loading:function(t){return t.tops.button_loading},spinner_loading:function(t){return t.tops.spinner_loading}}),components:{Loader:a.Z},created:function(){this.$store.dispatch("GET_TOPS")},methods:{DELETE:function(t,e){var n=this;swal({title:"Are you sure to delete ?",icon:"warning",buttons:!0,dangerMode:!0}).then((function(r){r&&n.$store.dispatch("DELETE_TOP",{id:t,key:e})}))}}};const i=(0,n(1900).Z)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.spinner_loading?n("div",{staticClass:"spinner-load"},[n("Loader")],1):t._e(),t._v(" "),t.spinner_loading?t._e():n("div",{staticClass:"k1_manage_table"},[n("h5",{staticClass:"title p-2"},[t._v("Top")]),t._v(" "),null!==t.data.top?n("div",{staticClass:"table-responsive mt-2"},[n("div",{staticClass:"table table-hover"},[t._m(0),t._v(" "),n("tbody",t._l(t.data.top,(function(e,r){return n("tr",{key:r},["local"==e.cloud?n("td",[n("img",{attrs:{src:"/storage/posters/300_"+e.poster,alt:e.name,width:"40"}})]):t._e(),t._v(" "),"aws"==e.cloud?n("td",[n("img",{attrs:{src:t.sm_poster+e.poster,alt:e.name,width:"40"}})]):t._e(),t._v(" "),n("td",[t._v(t._s(e.name))]),t._v(" "),n("td",[t._v(t._s(e.created_at))]),n("td",[n("div",{staticClass:"btn-group",attrs:{role:"group"}},[n("button",{staticClass:"btn btn-sm btn-danger btn-sm mr-2",attrs:{id:e.id},on:{click:function(n){return t.DELETE(e.id,r)}}},[t._v("\n                            Delete\n                        ")])])])])})),0)])]):n("div",{staticClass:"text-center"},[n("h4",[t._v("No result were found")])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("th",[t._v("Cover")]),t._v(" "),n("th",[t._v("Name")]),t._v(" "),n("th",[t._v("Created date")]),t._v(" "),n("th",[t._v("Control")])])}],!1,null,null,null).exports}}]);