(function(t){function e(e){for(var o,i,s=e[0],l=e[1],c=e[2],v=0,p=[];v<s.length;v++)i=s[v],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);d&&d(e);while(p.length)p.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],o=!0,s=1;s<a.length;s++){var l=a[s];0!==r[l]&&(o=!1)}o&&(n.splice(e--,1),t=i(i.s=a[0]))}return t}var o={},r={post_detail:0},n=[];function i(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=o,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(a,o,function(e){return t[e]}.bind(null,o));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var d=l;n.push([2,"chunk-vendors"]),a()})({"017b":function(t,e,a){},2:function(t,e,a){t.exports=a("815f")},"402c":function(t,e,a){"use strict";var o=a("2b0e"),r=a("f309");o["a"].use(r["a"]),e["a"]=new r["a"]({})},4891:function(t,e,a){"use strict";a("017b")},"815f":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"inspire"}},[a("MainMenu"),a("v-main",[a("PostDetail")],1),a("v-footer",{attrs:{app:""}},[a("span",[t._v("© 2022")])])],1)},n=[],i=a("add6"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"12",lg:"10"}},[a("h1",[t._v(t._s(t.post.title))]),a("p",[t._v(t._s(t.post.modify_dt)+", 작성자 : "+t._s(t.post.owner))])])],1),a("v-row",{attrs:{align:"start",justify:"center"}},[a("v-col",{attrs:{cols:"12",sm:"8",lg:"7"}},[a("v-card",{staticClass:"pa-2",attrs:{outlined:"",tile:""}},[a("p",{staticStyle:{"white-space":"pre-wrap"}},[t._v(t._s(t.post.content))]),a("div",[a("strong",[t._v("TAGs: ")]),t._l(t.post.tags,(function(e,o){return a("v-chip",{key:o,staticClass:"ma-2 my-hover",attrs:{color:"",outlined:""},on:{click:function(a){return t.serverPage(e)}}},[t._v(" "+t._s(e)+" ")])}))],2)])],1),a("v-col",{attrs:{cols:"12",sm:"4",lg:"3"}},[a("v-card",{staticClass:"pa-2 mb-5",attrs:{tile:""}},[a("p",[t._v("prev post")]),t.post.prev?a("h2",{staticClass:"my-hover",on:{click:function(e){return t.fetchPostDetail(t.post.prev.id)}}},[t._v(" "+t._s(t.post.prev.title)+" ")]):t._e()]),a("v-card",{staticClass:"pa-2 mb-5",attrs:{tile:""}},[a("p",[t._v("next post")]),t.post.next?a("h2",{staticClass:"my-hover",on:{click:function(e){return t.fetchPostDetail(t.post.next.id)}}},[t._v(" "+t._s(t.post.next.title)+" ")]):t._e()]),a("v-card",{staticClass:"pa-2 mb-5",attrs:{tile:""}},[a("h2",[t._v("Tag cloud")]),t._l(t.tagCloud,(function(e,o){return a("v-chip",{key:o,staticClass:"ma-2 my-hover",attrs:{color:e.color,"text-color":"white"},on:{click:function(a){return t.serverPage(e.name)}}},[a("v-avatar",{class:e.color+" darken-4",attrs:{left:""}},[t._v(t._s(e.count))]),t._v(t._s(e.name)+" ")],1)}))],2)],1)],1)],1)},l=[],c=(a("ac1f"),a("1276"),a("d3b7"),a("159b"),a("bc3a")),d=a.n(c),v={name:"HelloWorld",data:function(){return{post:{},tagCloud:{}}},created:function(){console.log("created()...");var t=location.pathname.split("/")[3]||2;this.fetchPostDetail(t),this.fetchTagCloud()},methods:{fetchPostDetail:function(t){var e=this;console.log("fetchPostDetail()...",t),d.a.get("/api/post/".concat(t,"/")).then((function(t){console.log("POST DETAIL GET RES",t),e.post=t.data})).catch((function(t){console.log("POST DETAIL GET ERR>.RESPONSE",t.response),alert(t.response.status+" "+t.response.statusText)}))},fetchTagCloud:function(){var t=this;console.log("fetchTagCloud()..."),d.a.get("/api/tag/cloud/").then((function(e){console.log("TAG CLOUD GET RES",e),t.tagCloud=e.data,t.tagCloud.forEach((function(t){5===t.weight?t.color="purple":4===t.weight?t.color="blue":3===t.weight?t.color="green":2===t.weight?t.color="blue-grey":1===t.weight&&(t.color="grey")}))})).catch((function(t){console.log("TAG CLOUD GET ERR>.RESPONSE",t.response),alert(t.response.status+" "+t.response.statusText)}))},serverPage:function(t){console.log("serverPage()...",t),location.href="/blog/post/list/?tagname=".concat(t)}}},p=v,u=(a("4891"),a("2877")),g=a("6544"),f=a.n(g),m=a("8212"),h=a("b0af"),b=a("cc20"),_=a("62ad"),w=a("a523"),x=a("0fd9"),y=Object(u["a"])(p,s,l,!1,null,"1c894bd6",null),k=y.exports;f()(y,{VAvatar:m["a"],VCard:h["a"],VChip:b["a"],VCol:_["a"],VContainer:w["a"],VRow:x["a"]});var P={components:{MainMenu:i["a"],PostDetail:k},data:function(){return{}}},C=P,T=a("7496"),O=a("553a"),V=a("f6c4"),E=Object(u["a"])(C,r,n,!1,null,null,null),S=E.exports;f()(E,{VApp:T["a"],VFooter:O["a"],VMain:V["a"]});var D=a("402c");o["a"].config.productionTip=!1,new o["a"]({vuetify:D["a"],render:function(t){return t(S)}}).$mount("#app")},add6:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-navigation-drawer",{attrs:{app:"",clipped:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{attrs:{dense:"",nav:""}},t._l(t.items,(function(e){return a("v-list-item",{key:e.title,attrs:{link:""}},[a("v-list-item-icon",[a("v-icon",[t._v(t._s(e.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),1)],1),a("v-app-bar",{attrs:{app:"","clipped-left":"",color:"indigo",dark:""}},[a("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!t.drawer}}}),a("v-toolbar-title",[t._v("Vue.js + Django CRUD Board")]),a("v-spacer"),a("v-btn",{attrs:{text:"",href:"/"}},[t._v("HOME")]),a("v-btn",{attrs:{text:"",href:"/blog/post/list"}},[t._v("Blog")]),a("v-btn",{attrs:{text:"",href:"/admin"}},[t._v("Admin")]),a("v-btn",{attrs:{text:"",href:"/post_list.html"}},[t._v("POST LIST")]),a("v-btn",{attrs:{text:"",href:"/post_detail.html"}},[t._v("POST Detail")]),a("v-spacer"),a("v-menu",{attrs:{"offset-y":"",left:"",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,r=e.attrs;return[a("v-btn",t._g(t._b({attrs:{text:""}},"v-btn",r,!1),o),[a("v-icon",[t._v("mdi-account")]),t._v(" Annoymous "),a("v-icon",[t._v("mdi-dots-vertical")])],1)]}}])},[a("v-list",[a("v-list-item",{on:{click:function(e){t.dialog.login=!0}}},[a("v-list-item-title",[t._v("Login")])],1),a("v-list-item",{on:{click:function(e){t.dialog.register=!0}}},[a("v-list-item-title",[t._v("Register")])],1),a("v-list-item",[a("v-list-item-title",[t._v("Logout")])],1),a("v-list-item",{on:{click:function(e){t.dialog.pwdchg=!0}}},[a("v-list-item-title",[t._v("Password change")])],1)],1)],1)],1),a("v-dialog",{attrs:{"max-width":"600"},model:{value:t.dialog.login,callback:function(e){t.$set(t.dialog,"login",e)},expression:"dialog.login"}},[a("v-card",{staticClass:"elevation-12"},[a("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[a("v-toolbar-title",[t._v("Login form")]),a("v-spacer")],1),a("v-card-text",[a("v-form",{attrs:{id:"login-form"}},[a("v-text-field",{attrs:{"prepend-icon":"mdi-account",name:"username",label:"Username",type:"text"}}),a("v-text-field",{attrs:{"prepend-icon":"mdi-lock",name:"password",label:"Password",type:"password"}})],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"grey"},on:{click:function(e){return t.cancel("login")}}},[t._v("Cancel")]),a("v-btn",{staticClass:"mr-5",attrs:{color:"primary"},on:{click:function(e){t.save("login)")}}},[t._v("Login")])],1)],1)],1),a("v-dialog",{attrs:{"max-width":"600"},model:{value:t.dialog.register,callback:function(e){t.$set(t.dialog,"register",e)},expression:"dialog.register"}},[a("v-card",{staticClass:"elevation-12"},[a("v-toolbar",{attrs:{color:"success",dark:"",flat:""}},[a("v-toolbar-title",[t._v("Register form")]),a("v-spacer")],1),a("v-card-text",[a("v-form",[a("v-text-field",{attrs:{"prepend-icon":"mdi-account",name:"username1",label:"Username",type:"text"}}),a("v-text-field",{attrs:{"prepend-icon":"mdi-lock",name:"password1",label:"Password",type:"password"}}),a("v-text-field",{attrs:{"prepend-icon":"mdi-lock",name:"password2",label:"Password agian",type:"password"}})],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"grey"},on:{click:function(e){t.dialog.register=!1}}},[t._v("Cancel")]),a("v-btn",{staticClass:"mr-5",attrs:{color:"success"},on:{click:function(e){t.dialog.register=!1}}},[t._v("Register")])],1)],1)],1),a("v-dialog",{attrs:{"max-width":"600"},model:{value:t.dialog.pwdchg,callback:function(e){t.$set(t.dialog,"pwdchg",e)},expression:"dialog.pwdchg"}},[a("v-card",{staticClass:"elevation-12"},[a("v-toolbar",{attrs:{color:"warning",dark:"",flat:""}},[a("v-toolbar-title",[t._v("Password change form")]),a("v-spacer")],1),a("v-card-text",[a("v-form",[a("v-text-field",{attrs:{"prepend-icon":"mdi-lock",name:"old_password",label:"Old_Password",type:"password"}}),a("v-text-field",{attrs:{"prepend-icon":"mdi-lock",name:"new_password1",label:"New_Password1",type:"password"}}),a("v-text-field",{attrs:{"prepend-icon":"mdi-lock",name:"new_password2",label:"New_Password2",type:"password"}})],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"grey"},on:{click:function(e){t.dialog.pwdchg=!1}}},[t._v("Cancel")]),a("v-btn",{staticClass:"mr-5",attrs:{color:"warning"},on:{click:function(e){t.dialog.pwdchg=!1}}},[t._v("Password change")])],1)],1)],1)],1)},r=[],n=a("bc3a"),i=a.n(n),s={data:function(){return{drawer:null,dialog:{login:!1,register:!1,pwdchg:!1},me:{},items:[{title:"Dashboard",icon:"mdi-view-dashboard"},{title:"Photos",icon:"mdi-image"},{title:"About",icon:"mdi-help-box"}]}},methods:{cancel:function(t){console.log("cancel()...",t),"login"===t?this.dialog.login=!1:"register"===t?this.dialog.register=!1:"pwdchg"===t&&(this.dialog.pwdchg=!1)},save:function(t){console.log("save()...",t),"login"===t?(this.login(),this.dialog.login=!1):"register"===t?(this.register(),this.dialog.register=!1):"pwdchg"===t&&(this.pwdchg(),this.dialog.pwdchg=!1)},login:function(){var t=this;console.log("login()...");var e=new FormData(document.getElementById("login-form"));i.a.post("/api/login/",e).then((function(e){console.log("LOGIN POST RES",e),alert("user ".concat(e.data.username," login OK")),t.me=e.data})).catch((function(t){console.log("LOGIN POST ERR.RESPONSE",t.response),alert("login error")}))}}},l=s,c=a("2877"),d=a("6544"),v=a.n(d),p=a("40dc"),u=a("5bc1"),g=a("8336"),f=a("b0af"),m=a("99d9"),h=a("169a"),b=a("4bd4"),_=a("132d"),w=a("8860"),x=a("da13"),y=a("5d23"),k=a("34c3"),P=a("e449"),C=a("f774"),T=a("2fa4"),O=a("8654"),V=a("71d9"),E=a("2a7f"),S=Object(c["a"])(l,o,r,!1,null,null,null);e["a"]=S.exports;v()(S,{VAppBar:p["a"],VAppBarNavIcon:u["a"],VBtn:g["a"],VCard:f["a"],VCardActions:m["a"],VCardText:m["b"],VDialog:h["a"],VForm:b["a"],VIcon:_["a"],VList:w["a"],VListItem:x["a"],VListItemContent:y["a"],VListItemIcon:k["a"],VListItemTitle:y["b"],VMenu:P["a"],VNavigationDrawer:C["a"],VSpacer:T["a"],VTextField:O["a"],VToolbar:V["a"],VToolbarTitle:E["a"]})}});
//# sourceMappingURL=post_detail.282f425b.js.map