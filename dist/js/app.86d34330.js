(function(t){function e(e){for(var n,o,a=e[0],l=e[1],c=e[2],u=0,h=[];u<a.length;u++)o=a[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&h.push(r[o][0]),r[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);d&&d(e);while(h.length)h.shift()();return s.push.apply(s,c||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],n=!0,a=1;a<i.length;a++){var l=i[a];0!==r[l]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=i[0]))}return t}var n={},r={app:0},s=[];function o(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=n,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(i,n,function(e){return t[e]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var d=l;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";i("85ec")},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),r=i("bc3a"),s=i.n(r),o=i("2106"),a=i.n(o),l=i("5f5b"),c=i("b1e0"),d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"center mt-5",attrs:{id:"app"}},[i("b-row",{staticClass:"table-header"},[i("b-col",{staticClass:"mt-3 float-left",attrs:{cols:"8"}},[t._v("Clients")]),i("b-col",{staticClass:"mt-3",attrs:{cols:"4"}},[i("b-button",{staticClass:" float-right",on:{click:function(e){return t.ShowDialog()}}},[t._v("New client")])],1)],1),i("table",[i("tr",[i("th",{staticClass:"header-button",on:{click:function(e){return t.fetchClients("name")}}},[t._v("Name")]),i("th",{staticClass:"header-button",on:{click:function(e){return t.fetchClients("email")}}},[t._v("Email")]),i("th",{staticClass:"header-button",on:{click:function(e){return t.fetchClients("phone")}}},[t._v("Phone")]),i("th",{staticClass:"header-button",on:{click:function(e){return t.fetchClients("providers")}}},[t._v("Providers")]),i("th",{staticClass:"header-button"})]),t._l(t.clients,(function(e){return i("tr",{key:e.id},[i("td",[t._v(t._s(e.name))]),i("td",[t._v(t._s(e.email))]),i("td",[t._v(t._s(e.phone))]),i("td",[t._v(t._s(e.providers.map((function(t){return t.name})).join(", ")))]),i("td",{staticClass:"text-center"},[i("b-link",{on:{click:function(i){return t.ShowDialog(e)}}},[t._v("Edit")])],1)])}))],2),i("b-modal",{attrs:{size:"lg",id:"modal-1",centered:"",title:t.editClient._id?"Edit Client":"New Client"},scopedSlots:t._u([{key:"modal-footer",fn:function(){return[i("div",{staticClass:"w-100"},[t.editClient&&t.editClient._id?i("b-button",{staticClass:"float-left",attrs:{size:"sm",variant:"danger"},on:{click:function(e){return t.deleteClient()}}},[t._v(" Delete Client ")]):t._e(),i("b-button",{staticClass:"float-right ml-3",attrs:{size:"sm"},on:{click:function(e){return t.saveClient()}}},[t._v(" "+t._s(t.editClient._id?"Save":"Add")+" Client ")]),i("b-button",{staticClass:"float-right",attrs:{size:"sm"},on:{click:function(e){return t.$bvModal.hide("modal-1")}}},[t._v(" Cancel ")])],1)]},proxy:!0}])},[i("b-row",{staticClass:"mb-4 center"},[i("b-col",{staticClass:"text-center center dialog-label",attrs:{cols:"2"}},[t._v("Name:")]),i("b-col",{staticClass:"mr-4 dialog-input"},[i("b-form-input",{attrs:{trim:""},model:{value:t.editClient.name,callback:function(e){t.$set(t.editClient,"name",e)},expression:"editClient.name"}})],1),i("b-col",{attrs:{cols:"2"}})],1),i("b-row",{staticClass:"mb-4 center"},[i("b-col",{staticClass:"text-center center dialog-label",attrs:{cols:"2"}},[t._v("Email:")]),i("b-col",{staticClass:"mr-4 dialog-input"},[i("b-form-input",{attrs:{trim:""},model:{value:t.editClient.email,callback:function(e){t.$set(t.editClient,"email",e)},expression:"editClient.email"}}),t.errors.includes("email")?i("span",{staticClass:"warning-text sm"},[t._v("email already exist")]):t._e()],1),i("b-col",{attrs:{cols:"2"}})],1),i("b-row",{staticClass:"mb-4 center"},[i("b-col",{staticClass:"text-center center dialog-label",attrs:{cols:"2"}},[t._v("Phone:")]),i("b-col",{staticClass:"mr-4 dialog-input"},[i("b-form-input",{attrs:{trim:""},model:{value:t.editClient.phone,callback:function(e){t.$set(t.editClient,"phone",e)},expression:"editClient.phone"}})],1),i("b-col",{attrs:{cols:"2"}})],1),i("b-row",{staticClass:"mb-4 center"},[i("b-col",{attrs:{cols:"1"}}),i("b-col",{staticClass:"text-center center",attrs:{cols:"2"}},[t._v("Providers:")]),i("b-col",{attrs:{cols:"4"}},[i("b-form-input",{attrs:{trim:""},model:{value:t.newProvider.name,callback:function(e){t.$set(t.newProvider,"name",e)},expression:"newProvider.name"}}),t.errors.includes("name")?i("span",{staticClass:"warning-text sm"},[t._v("provider already exist")]):t._e()],1),i("b-col",{staticClass:"center",attrs:{cols:"2"}},[i("b-button",{staticClass:"float-left small-text",attrs:{size:"sm"},on:{click:function(e){return t.addProvider()}}},[t._v(" "+t._s(t.newProvider.id?"Edit Provider":"Add Provider")+" ")])],1),i("b-col",{attrs:{cols:"2"}})],1),i("div",{staticClass:"provider-div center"},t._l(t.providers,(function(e,n){return i("b-form",{key:e._id,staticClass:"center",attrs:{inline:""}},[i("b-form-checkbox",{staticClass:"mr-4 mb-2",model:{value:t.editClient.hasProviders[n],callback:function(e){t.$set(t.editClient.hasProviders,n,e)},expression:"editClient.hasProviders[i]"}}),i("label",{staticClass:"mr-4 mb-2"},[t._v(t._s(e.name))]),i("b-icon",{staticClass:"mr-4 mb-2",attrs:{icon:"pencil-square"},on:{click:function(i){return t.editProvider(e)}}}),i("b-icon",{attrs:{icon:"trash-fill"},on:{click:function(i){return t.deleteProvider(e._id)}}})],1)})),1)],1)],1)},u=[],h=(i("99af"),i("b0c0"),i("159b"),i("7db0"),{name:"App",components:{},props:{},data:function(){return{clients:[],providers:[],editClient:{name:"",email:"",phone:"",providers:[]},showModal:!1,newProvider:{name:"",id:null},sort:1,errors:[]}},mounted:function(){this.fetchClients(),this.fetchProviders()},methods:{fetchClients:function(t){var e=this;this.errors=[];var i="";t&&(this.sort*=-1,i="?field=".concat(t,"&order=").concat(this.sort)),this.axios.get("/clients/get-all".concat(i)).then((function(t){t&&t.data&&(e.clients=t.data)}))},fetchProviders:function(){var t=this;this.errors=[],this.axios.get("/providers/get-all").then((function(e){e&&e.data&&(t.providers=e.data,t.generateHasProviders())}))},newClient:function(){this.editClient={name:"",email:"",phone:"",providers:[]},this.generateHasProviders()},saveClient:function(){for(var t=this,e={name:this.editClient.name,email:this.editClient.email,phone:this.editClient.phone,providers:[]},i=0;i<this.providers.length;i+=1)this.editClient.hasProviders[i]&&e.providers.push(this.providers[i]._id);this.editClient._id?this.axios.patch("/clients/update/".concat(this.editClient._id),e).then((function(){t.fetchClients(),t.$bvModal.hide("modal-1")})).catch((function(){t.errors.push("email")})):this.axios.post("/clients/new/",e).then((function(){t.fetchClients(),t.$bvModal.hide("modal-1")})).catch((function(){t.errors.push("email")}))},deleteClient:function(){var t=this;this.editClient&&this.editClient._id&&this.axios.delete("/clients/delete/".concat(this.editClient._id)).then((function(){t.fetchClients(),t.$bvModal.hide("modal-1")}))},addProvider:function(){var t=this;(this.newProvider.name||""!==this.newProvider.name)&&(this.newProvider.id?this.axios.patch("/providers/update/".concat(this.newProvider.id),{name:this.newProvider.name}).then((function(){t.fetchProviders(),t.fetchClients(),t.newProvider={name:"",id:null}})).catch((function(){t.errors.push("name")})):this.axios.post("/providers/new/",{name:this.newProvider.name}).then((function(){t.fetchProviders(),t.newProvider={name:"",id:null}})).catch((function(){t.errors.push("name")})))},editProvider:function(t){this.newProvider={name:t.name,id:t._id}},deleteProvider:function(t){var e=this;t&&""!==t&&this.axios.delete("/providers/delete/".concat(t)).then((function(){e.fetchProviders(),e.fetchClients()}))},ShowDialog:function(t){t?(this.editClient=t,this.generateHasProviders()):this.newClient(),this.$bvModal.show("modal-1")},generateHasProviders:function(){var t=this;this.editClient&&this.editClient.providers&&(this.editClient.hasProviders=[],this.providers.forEach((function(e){t.editClient.providers.find((function(t){return t._id===e._id}))?t.editClient.hasProviders.push(!0):t.editClient.hasProviders.push(!1)})))}}}),f=h,v=(i("034f"),i("2877")),p=Object(v["a"])(f,d,u,!1,null,null,null),m=p.exports;i("f9e3"),i("2dd8");n["default"].use(l["a"]),n["default"].use(c["a"]),n["default"].use(a.a,s.a),s.a.defaults.baseURL="http://localhost:3000/",n["default"].config.productionTip=!1,new n["default"]({render:function(t){return t(m)}}).$mount("#app")},"85ec":function(t,e,i){}});
//# sourceMappingURL=app.86d34330.js.map