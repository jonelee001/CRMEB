(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-58efb421"],{"52bc":function(t,e,n){},8472:function(t,e,n){"use strict";n("52bc")},"90e7":function(t,e,n){"use strict";n.d(e,"m",(function(){return i})),n.d(e,"g",(function(){return c})),n.d(e,"I",(function(){return o})),n.d(e,"H",(function(){return u})),n.d(e,"f",(function(){return a})),n.d(e,"y",(function(){return s})),n.d(e,"M",(function(){return d})),n.d(e,"a",(function(){return l})),n.d(e,"s",(function(){return f})),n.d(e,"x",(function(){return m})),n.d(e,"C",(function(){return g})),n.d(e,"B",(function(){return h})),n.d(e,"A",(function(){return p})),n.d(e,"z",(function(){return b})),n.d(e,"D",(function(){return O})),n.d(e,"F",(function(){return v})),n.d(e,"r",(function(){return j})),n.d(e,"G",(function(){return y})),n.d(e,"j",(function(){return w})),n.d(e,"h",(function(){return _})),n.d(e,"i",(function(){return x})),n.d(e,"k",(function(){return k})),n.d(e,"l",(function(){return C})),n.d(e,"v",(function(){return L})),n.d(e,"w",(function(){return P})),n.d(e,"t",(function(){return E})),n.d(e,"u",(function(){return $})),n.d(e,"q",(function(){return I})),n.d(e,"n",(function(){return M})),n.d(e,"p",(function(){return T})),n.d(e,"e",(function(){return B})),n.d(e,"b",(function(){return D})),n.d(e,"c",(function(){return F})),n.d(e,"J",(function(){return G})),n.d(e,"K",(function(){return R})),n.d(e,"L",(function(){return S})),n.d(e,"E",(function(){return W})),n.d(e,"d",(function(){return z}));var r=n("6b6c");function i(t){return Object(r["a"])({url:"setting/config/header_basics",method:"get",params:t})}function c(t,e){return Object(r["a"])({url:e,method:"get",params:t})}function o(t){return Object(r["a"])({url:t.url,method:"get",params:t.data})}function u(){return Object(r["a"])({url:"notify/sms/temp/create",method:"get"})}function a(t){return Object(r["a"])({url:"serve/login",method:"post",data:t})}function s(t){return Object(r["a"])({url:"serve/modify",method:"post",data:t})}function d(t){return Object(r["a"])({url:"serve/update_phone",method:"post",data:t})}function l(t){return Object(r["a"])({url:"serve/captcha",method:"post",data:t})}function f(t){return Object(r["a"])({url:"serve/register",method:"post",data:t})}function m(){return Object(r["a"])({url:"serve/info",method:"get"})}function g(t){return Object(r["a"])({url:"serve/sms/sign",method:"PUT",data:t})}function h(t){return Object(r["a"])({url:"serve/record",method:"get",params:t})}function p(t){return Object(r["a"])({url:"serve/open",method:"get",params:t})}function b(t){return Object(r["a"])({url:"serve/opn_express",method:"post",data:t})}function O(t){return Object(r["a"])({url:"serve/sms/open",method:"get",params:t})}function v(t){return Object(r["a"])({url:"serve/meal_list",method:"get",params:t})}function j(t){return Object(r["a"])({url:"serve/pay_meal",method:"post",data:t})}function y(t){return Object(r["a"])({url:"notify/sms/record",method:"get",params:t})}function w(t){return Object(r["a"])({url:"freight/express",method:"get",params:t})}function _(){return Object(r["a"])({url:"/freight/express/create",method:"get"})}function x(t){return Object(r["a"])({url:"freight/express/".concat(t,"/edit"),method:"get"})}function k(t){return Object(r["a"])({url:"freight/express/set_status/".concat(t.id,"/").concat(t.status),method:"PUT"})}function C(){return Object(r["a"])({url:"freight/express/sync_express",method:"get"})}function L(t){return Object(r["a"])({url:"setting/role",method:"GET",params:t})}function P(t){return Object(r["a"])({url:"setting/role/set_status/".concat(t.id,"/").concat(t.status),method:"PUT"})}function E(t){return Object(r["a"])({url:"setting/role/".concat(t.id),method:"post",data:t})}function $(t){return Object(r["a"])({url:"setting/role/".concat(t,"/edit"),method:"get"})}function I(){return Object(r["a"])({url:"setting/role/create",method:"get"})}function M(){return Object(r["a"])({url:"notify/sms/is_login",method:"GET"})}function T(){return Object(r["a"])({url:"notify/sms/logout",method:"GET"})}function B(t){return Object(r["a"])({url:"setting/city/list/".concat(t),method:"get"})}function D(t){return Object(r["a"])({url:"setting/city/add/".concat(t),method:"get"})}function F(t){return Object(r["a"])({url:"setting/city/".concat(t,"/edit"),method:"get"})}function G(t){return Object(r["a"])({url:"setting/shipping_templates/list",method:"get",params:t})}function R(t){return Object(r["a"])({url:"setting/shipping_templates/city_list",method:"get"})}function S(t,e){return Object(r["a"])({url:"setting/shipping_templates/save/".concat(t),method:"post",data:e})}function W(t){return Object(r["a"])({url:"setting/shipping_templates/".concat(t,"/edit"),method:"get"})}function z(){return Object(r["a"])({url:"setting/city/clean_cache",method:"get"})}},b252:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"i-layout-page-header"},[n("div",{staticClass:"i-layout-page-header"},[n("span",{staticClass:"ivu-page-header-title"},[t._v(t._s(t.$route.meta.title))])])]),n("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[n("div",{staticClass:"acea-row row-between-wrapper"},[n("Row",{attrs:{type:"flex"}},[n("Col",t._b({},"Col",t.grid,!1),[n("div",{staticClass:"button acea-row row-middle"},[0!==this.cityId?n("Button",{staticClass:"bnt mr15",attrs:{type:"primary"},on:{click:t.goBack}},[t._v("返回")]):t._e(),n("Button",{attrs:{type:"primary",icon:"md-add"},on:{click:t.add}},[t._v("添加城市")])],1)])],1),n("Row",{attrs:{type:"flex"}},[n("Col",t._b({},"Col",t.grid,!1),[n("Button",{attrs:{type:"primary"},on:{click:t.cleanCache}},[t._v("清除缓存")])],1)],1)],1),n("Table",{ref:"table",staticClass:"mt25",attrs:{columns:t.columns1,data:t.cityLists,loading:t.loading,"highlight-row":"","no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果"},scopedSlots:t._u([{key:"icons",fn:function(t){var e=t.row;t.index;return[n("div",{directives:[{name:"viewer",rawName:"v-viewer"}],staticClass:"tabBox_img"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.icon,expression:"row.icon"}]})])]}},{key:"region",fn:function(e){var r=e.row;e.index;return[n("div",{staticClass:"font-blue",on:{click:function(e){return t.lower(r.city_id)}}},[t._v(t._s(r.name))])]}},{key:"action",fn:function(e){var r=e.row,i=e.index;return[n("a",{on:{click:function(e){return t.edit(r.id)}}},[t._v("编辑")]),n("Divider",{attrs:{type:"vertical"}}),n("a",{on:{click:function(e){return t.del(r,"删除城市",i)}}},[t._v("删除")])]}}])})],1)],1)},i=[],c=(n("8e6e"),n("ac6a"),n("456d"),n("96cf"),n("1da1")),o=n("ade3"),u=n("2f62"),a=n("90e7");function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var l={name:"setting_dada",data:function(){return{grid:{xl:7,lg:7,md:12,sm:24,xs:24},loading:!1,columns1:[{title:"编号",key:"id",width:80},{title:"上级名称",key:"parent_id",minWidth:300},{title:"地区名称",slot:"region",minWidth:300},{title:"操作",slot:"action",fixed:"right",minWidth:120}],cityLists:[],cityId:0}},computed:d(d({},Object(u["e"])("media",["isMobile"])),{},{labelWidth:function(){return this.isMobile?void 0:75},labelPosition:function(){return this.isMobile?"top":"left"}}),created:function(){this.getList(0)},methods:{cleanCache:function(){var t=this;Object(a["d"])().then((function(e){t.$Message.success(e.msg)})).catch((function(e){t.$Message.success(e.msg)}))},add:function(){var t=this;this.$modalForm(Object(a["b"])(this.cityId)).then((function(){return t.getList(t.cityId)}))},lower:function(t){this.cityId=t,this.getList(t)},getList:function(t){var e=this;e.loading=!0,Object(a["e"])(t).then(function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.cityLists=n.data,e.loading=!1;case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.loading=!1,e.$Message.error(t.msg)}))},goBack:function(){this.cityId=0,this.getList(0)},edit:function(t){var e=this;this.$modalForm(Object(a["c"])(t)).then((function(){return e.getList(e.cityId)}))},del:function(t,e,n){var r=this,i={title:e,num:n,url:"setting/city/del/".concat(t.city_id),method:"DELETE",ids:""};this.$modalSure(i).then((function(t){console.log(t),r.$Message.success(t.msg),r.cityLists.splice(n,1),r.getList(r.cityId)})).catch((function(t){r.$Message.error(t.msg)}))}}},f=l,m=(n("8472"),n("2877")),g=Object(m["a"])(f,r,i,!1,null,"c59a593c",null);e["default"]=g.exports}}]);