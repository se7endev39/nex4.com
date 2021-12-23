"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[716],{7214:(t,e,a)=>{a.d(e,{Z:()=>i});var n=a(3645),s=a.n(n)()((function(t){return t[1]}));s.push([t.id,"svg[data-v-3e43005c]{display:inline-block;height:80px;position:absolute;right:0;top:0;width:80px}",""]);const i=s},3645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var a=t(e);return e[2]?"@media ".concat(e[2]," {").concat(a,"}"):a})).join("")},e.i=function(t,a,n){"string"==typeof t&&(t=[[null,t,""]]);var s={};if(n)for(var i=0;i<this.length;i++){var r=this[i][0];null!=r&&(s[r]=!0)}for(var o=0;o<t.length;o++){var l=[].concat(t[o]);n&&s[l[0]]||(a&&(l[2]?l[2]="".concat(a," and ").concat(l[2]):l[2]=a),e.push(l))}},e}},3379:(t,e,a)=>{var n,s=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},i=function(){var t={};return function(e){if(void 0===t[e]){var a=document.querySelector(e);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(t){a=null}t[e]=a}return t[e]}}(),r=[];function o(t){for(var e=-1,a=0;a<r.length;a++)if(r[a].identifier===t){e=a;break}return e}function l(t,e){for(var a={},n=[],s=0;s<t.length;s++){var i=t[s],l=e.base?i[0]+e.base:i[0],c=a[l]||0,d="".concat(l," ").concat(c);a[l]=c+1;var u=o(d),_={css:i[1],media:i[2],sourceMap:i[3]};-1!==u?(r[u].references++,r[u].updater(_)):r.push({identifier:d,updater:b(_,e),references:1}),n.push(d)}return n}function c(t){var e=document.createElement("style"),n=t.attributes||{};if(void 0===n.nonce){var s=a.nc;s&&(n.nonce=s)}if(Object.keys(n).forEach((function(t){e.setAttribute(t,n[t])})),"function"==typeof t.insert)t.insert(e);else{var r=i(t.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}return e}var d,u=(d=[],function(t,e){return d[t]=e,d.filter(Boolean).join("\n")});function _(t,e,a,n){var s=a?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(t.styleSheet)t.styleSheet.cssText=u(e,s);else{var i=document.createTextNode(s),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(i,r[e]):t.appendChild(i)}}function v(t,e,a){var n=a.css,s=a.media,i=a.sourceMap;if(s?t.setAttribute("media",s):t.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var p=null,m=0;function b(t,e){var a,n,s;if(e.singleton){var i=m++;a=p||(p=c(e)),n=_.bind(null,a,i,!1),s=_.bind(null,a,i,!0)}else a=c(e),n=v.bind(null,a,e),s=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(a)};return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else s()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=s());var a=l(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var n=0;n<a.length;n++){var s=o(a[n]);r[s].references--}for(var i=l(t,e),c=0;c<a.length;c++){var d=o(a[c]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}a=i}}}},75:(t,e,a)=>{a.d(e,{Z:()=>o});var n=a(3379),s=a.n(n),i=a(7214),r={insert:"head",singleton:!1};s()(i.Z,r);i.Z.locals;const o=(0,a(1900).Z)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"loader-svg"},[e("svg",{attrs:{version:"1.1",id:"L9",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 100 100","enable-background":"new 0 0 0 0","xml:space":"preserve"}},[e("path",{attrs:{fill:"rgb(130, 138, 159)",d:"M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"}},[e("animateTransform",{attrs:{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"1s",from:"0 50 50",to:"360 50 50",repeatCount:"indefinite"}})],1)])])}),[],!1,null,"3e43005c",null).exports},716:(t,e,a)=>{a.r(e),a.d(e,{default:()=>r});var n=a(629),s=a(75);a(1580);const i={name:"users-manage",data:function(){return{date:new Date,search_query:null}},components:{Loader:s.Z},computed:(0,n.rn)({data:function(t){return t.users.data},invoices:function(t){return t.users.invoices},data_search:function(t){return t.users.data_search},button_loading:function(t){return t.users.button_loading},spinner_loading:function(t){return t.users.spinner_loading},invoice_spinner_loading:function(t){return t.users.invoice_spinner_loading}}),created:function(){this.$store.commit("CLEAN_SEARCH_USERS"),this.$store.dispatch("GET_ALL_USERS")},methods:{PAGINATION:function(t){this.$store.dispatch("GET_ALL_USERS_BY_PAGINATION",t)},DELETE:function(t,e){var a=this;swal({title:"Are you sure to delete ?",icon:"warning",buttons:!0,dangerMode:!0}).then((function(n){n&&a.$store.dispatch("DELETE_USER",{id:t,key:e})}))},ALL:function(){this.$store.dispatch("GET_ALL_USERS")},INACTIVITY:function(){this.$store.dispatch("GET_INACTIVITY_USERS")},ACTIVITY:function(){this.$store.dispatch("GET_ACTIVITY_USERS")},SEARCH:function(){this.$store.dispatch("GET_USERS_SEARCH",this.search_query)},BILLING:function(t){this.$store.dispatch("GET_USERS_BILLING",t)}}};const r=(0,a(1900).Z)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"k1_manage_table"},[a("h5",{staticClass:"title p-2"},[t._v("Users")]),t._v(" "),a("div",{staticClass:"col-12 row"},[a("div",{staticClass:"col-8"},[a("div",{staticClass:"group-btn"},[a("button",{staticClass:"btn btn-sm btn-warning",on:{click:t.ALL}},[t._v("All")]),t._v(" "),a("button",{staticClass:"btn btn-sm btn-success",on:{click:t.ACTIVITY}},[t._v("Activity")]),t._v(" "),a("button",{staticClass:"btn btn-sm btn-danger",on:{click:t.INACTIVITY}},[t._v("Inactivity")]),t._v(" "),a("router-link",{staticClass:"btn btn-sm btn-warning mr-3",attrs:{role:"button",to:{name:"create-user"}}},[t._v("Create New User")])],1)]),t._v(" "),a("div",{staticClass:"col-4 pull-right"},[a("div",{staticClass:"pull-right",attrs:{id:"search"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.search_query,expression:"search_query"}],staticClass:"form-control mr-sm-2",attrs:{type:"text",placeholder:"Search"},domProps:{value:t.search_query},on:{keyup:t.SEARCH,input:function(e){e.target.composing||(t.search_query=e.target.value)}}})])])]),t._v(" "),t.spinner_loading?a("div",{staticClass:"spinner-load"},[a("Loader")],1):t._e(),t._v(" "),t.spinner_loading?t._e():a("div",{staticClass:"m-2"},[a("div",{staticClass:"modal fade",attrs:{id:"CreateUserModal",tabindex:"-1",role:"dialog","aria-labelledby":"CreateUserModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-body"},[t.invoice_spinner_loading?a("div",{staticClass:"spinner-load"},[a("Loader")],1):t._e(),t._v(" "),null===t.invoices||t.invoice_spinner_loading?t._e():a("div",[a("div",{staticClass:"form-group"},[a("div",{staticClass:"col-12"},[a("small",[t._v("Next plan")]),t._v(" "),"Monthly"===t.invoices.name?a("h6",[t._v(t._s(t.invoices.name)+" for\n                                                $"+t._s(t.invoices.amount)+"/mo")]):t._e(),t._v(" "),"Yearly"===t.invoices.name?a("h6",[t._v(" "+t._s(t.invoices.name)+" for\n                                                $"+t._s(t.invoices.amount)+"/y")]):t._e(),t._v(" "),a("hr")])]),t._v(" "),a("table",{staticClass:"table table-hover"},[t._m(0),t._v(" "),a("tbody",t._l(t.invoices.invoices,(function(e,n){return a("tr",{key:n},[a("td",[t._v("Cinemarine service")]),t._v(" "),a("td",[t._v(t._s(e.start))]),t._v(" "),a("td",[t._v(t._s(e.end))]),t._v(" "),a("td",[t._v("$"+t._s(e.total/100))])])})),0)])])]),t._v(" "),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-sm btn-warning",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(e){t.invoices=null}}},[t._v("Close\n                            ")])])])])]),t._v(" "),null===t.data.users?a("div",{staticClass:"text-center"},[a("h4",[t._v("No result were found")])]):a("div",[Object.keys(t.data_search).length>0&&null!==t.data_search.users?a("div",[a("div",{staticClass:"table-responsive mt-2",attrs:{id:"users-manage"}},[a("div",{staticClass:"table table-hover"},[t._m(1),t._v(" "),a("tbody",t._l(t.data_search.users,(function(e,n){return a("tr",{key:n},[a("td",[t._v(t._s(e.id))]),t._v(" "),a("td",[t._v(t._s(e.name))]),t._v(" "),a("td",[t._v("\n                                            "+t._s(e.email)+"\n                                        ")]),t._v(" "),a("td",[0===e.confirmed?a("span",{staticClass:"badge badge-warning"},[t._v("Unconfirmed mail")]):t._e(),t._v(" "),new Date(e.period_end)>new Date?a("span",{staticClass:"badge badge-success"},[t._v("Activity")]):t._e(),t._v(" "),new Date(e.period_end)<new Date?a("span",{staticClass:"badge badge-danger"},[t._v("Inactivity")]):t._e()]),t._v(" "),a("td",[t._v(t._s(e.created_at))]),t._v(" "),a("td",[t._v(t._s(e.updated_at))]),t._v(" "),a("td",[a("div",{staticClass:"btn-group",attrs:{role:"group"}},[a("router-link",{staticClass:"btn btn-sm btn-warning btn-sm mr-2",attrs:{role:"button",to:{name:"edit-user",params:{id:e.id}}}},[t._v("Edit\n                                                ")]),t._v(" "),a("button",{staticClass:"btn btn-sm btn-danger btn-sm mr-2",on:{click:function(a){return t.DELETE(e.id,n)}}},[t._v("Delete\n                                        ")]),t._v(" "),null!=e.braintree_id&&null!=e.card_brand?a("button",{staticClass:"btn btn-sm btn-danger btn-sm mr-2",attrs:{"data-toggle":"modal","data-target":"#CreateUserModal"},on:{click:function(a){return t.BILLING(e.id)}}},[t._v("Billing\n                                        ")]):t._e()],1)])])})),0)])])]):t._e(),t._v(" "),null===t.data_search.users||0===Object.keys(t.data_search).length?a("div",[a("div",{staticClass:"table-responsive mt-2",attrs:{id:"users-manage"}},[a("div",{staticClass:"table table-hover"},[t._m(2),t._v(" "),a("tbody",t._l(t.data.users.data,(function(e,n){return a("tr",{key:n},[a("td",[t._v(t._s(e.id))]),t._v(" "),a("td",[t._v(t._s(e.name))]),t._v(" "),a("td",[t._v("\n                                            "+t._s(e.email)+"\n                                        ")]),t._v(" "),a("td",[0===e.confirmed?a("span",{staticClass:"badge badge-warning"},[t._v("Unconfirmed mail")]):t._e(),t._v(" "),null==e.period_end?a("span",[a("span",{staticClass:"badge badge-success"},[t._v("Active (non-payment)")])]):a("span",[new Date(e.period_end)>new Date?a("span",{staticClass:"badge badge-success"},[t._v("Active")]):t._e(),t._v(" "),new Date(e.period_end)<new Date?a("span",{staticClass:"badge badge-danger"},[t._v("Inactive")]):t._e()])]),t._v(" "),a("td",[t._v(t._s(e.created_at))]),t._v(" "),a("td",[t._v(t._s(e.updated_at))]),t._v(" "),a("td",[a("div",{staticClass:"btn-group",attrs:{role:"group"}},[a("router-link",{staticClass:"btn btn-sm btn-warning btn-sm mr-2",attrs:{role:"button",to:{name:"edit-user",params:{id:e.id}}}},[t._v("Edit\n                                                ")]),t._v(" "),a("button",{staticClass:"btn btn-sm btn-danger btn-sm mr-2",attrs:{id:e.id},on:{click:function(a){return t.DELETE(e.id,n)}}},[t._v("Delete\n                                        ")]),t._v(" "),null!=e.braintree_id&&null!=e.card_brand?a("button",{staticClass:"btn btn-sm btn-danger mr-2",attrs:{"data-toggle":"modal","data-target":"#CreateUserModal"},on:{click:function(a){return t.BILLING(e.id)}}},[t._v("Billing\n                                        ")]):t._e(),t._v(" "),null==e.braintree_id&&null==e.card_brand?a("button",{staticClass:"btn btn-sm btn-secondary mr-2",attrs:{"data-toggle":"tooltip","data-placement":"top",title:"The user have not billing because the payment gateway is disabled",disabled:""}},[t._v("Billing\n                                        ")]):t._e()],1)])])})),0)])]),t._v(" "),a("nav",{staticClass:"m-4 p-1",attrs:{"aria-label":"pagination"}},[a("ul",{staticClass:"pagination "},[a("li",{staticClass:"page-item",attrs:{id:"end"}},[a("a",{staticClass:"page-link",on:{click:function(e){return t.PAGINATION("/api/admin/get/users")}}},[t._v("Begin")])]),t._v(" "),a("li",{staticClass:"page-item",class:{disabled:null===t.data.users.prev_page_url},attrs:{id:"prev"}},[a("a",{staticClass:"page-link",on:{click:function(e){return t.PAGINATION(t.data.users.prev_page_url)}}},[t._v("Previous")])]),t._v(" "),a("li",{staticClass:"page-item"},[a("a",{staticClass:"page-link"},[t._v(t._s(t.data.users.current_page)+"/"+t._s(t.data.users.last_page))])]),t._v(" "),a("li",{staticClass:"page-item",class:{disabled:null===t.data.users.next_page_url},attrs:{id:"next"}},[a("a",{staticClass:"page-link",on:{click:function(e){return t.PAGINATION(t.data.users.next_page_url)}}},[t._v("Next")])]),t._v(" "),a("li",{staticClass:"page-item",attrs:{id:"end"}},[a("a",{staticClass:"page-link",on:{click:function(e){return t.PAGINATION("/api/admin/get/users?page="+t.data.users.last_page)}}},[t._v("End")])])])])]):t._e()])])])])}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Start period")]),t._v(" "),a("th",[t._v("End period")]),t._v(" "),a("th",[t._v("Total")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("th",[t._v("#ID")]),t._v(" "),a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Email")]),t._v(" "),a("th",[t._v("Status")]),t._v(" "),a("th",[t._v("Created")]),t._v(" "),a("th",[t._v("Updated")]),t._v(" "),a("th",[t._v("Control")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("th",[t._v("#ID")]),t._v(" "),a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Email")]),t._v(" "),a("th",[t._v("Status")]),t._v(" "),a("th",[t._v("Created")]),t._v(" "),a("th",[t._v("Updated")]),t._v(" "),a("th",[t._v("Control")])])}],!1,null,null,null).exports}}]);