(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5da51db0"],{"13b7":function(t,e,s){},2375:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"spinner"},[s("div",{staticClass:"bouncing-loader"},[s("div"),s("div"),s("div")])])}],i=(s("4010"),s("2877")),r={},c=Object(i["a"])(r,a,n,!1,null,"da50595c",null);e["a"]=c.exports},"2b65":function(t,e,s){"use strict";s("13b7")},"2f6d":function(t,e,s){},4010:function(t,e,s){"use strict";s("8227")},"4c90":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"wrapper"},[s("div",{staticClass:"admin-navbar"},[s("AdminNavbar")],1),s("div",{staticClass:"admin-tweets-list"},[s("AdminTweetsList")],1)])])},n=[],i=s("7d03"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[t._m(0),t.isLoading?s("Spinner"):s("div",{staticClass:"tweets-list"},t._l(t.adminTweets,(function(e){return s("div",{key:e.id,staticClass:"tweet-card"},[s("div",{staticClass:"avatar"},[s("img",{attrs:{src:e.User.avatar,alt:""}})]),s("div",{staticClass:"tweet-content"},[s("div",{staticClass:"user-info"},[s("div",{staticClass:"user-name"},[s("a",{attrs:{href:"#"}},[t._v(t._s(e.User.name))])]),s("div",{staticClass:"user-account"},[s("a",{attrs:{href:"#"}},[t._v(t._s(e.User.account)+" · 3小時")])])]),s("div",{staticClass:"tweet-comment"},[t._v(" "+t._s(e.description)+" ")])]),s("div",{staticClass:"delete-btn",on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.deleteTweet(e.id)}}},[t._v(" x ")])])})),0)],1)},c=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"header"},[s("div",{staticClass:"tweets-title"},[t._v("推文清單")])])}],o=s("1da1"),l=(s("4de4"),s("96cf"),s("be6c")),d=s("c968"),u=s("2375"),v={name:"AdminTweetsList",components:{Spinner:u["a"]},data:function(){return{adminTweets:[],isLoading:!0}},created:function(){this.fetchTweets()},methods:{fetchTweets:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var s,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l["a"].tweets();case 3:s=e.sent,a=s.data,t.adminTweets=a,t.isLoading=!1,e.next=13;break;case 9:e.prev=9,e.t0=e["catch"](0),t.isLoading=!1,console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))()},deleteTweet:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function s(){var a,n;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,l["a"].deleteTweet({tweetId:t});case 3:if(a=s.sent,n=a.data,"success"===n.status){s.next=7;break}throw new Error(n.message);case 7:e.adminTweets=e.adminTweets.filter((function(e){return e.id!==t})),s.next=13;break;case 10:s.prev=10,s.t0=s["catch"](0),d["a"].fire({icon:"warning",title:"無法刪除資料，請稍後再試"});case 13:case"end":return s.stop()}}),s,null,[[0,10]])})))()}}},f=v,m=(s("bfa4"),s("2877")),w=Object(m["a"])(f,r,c,!1,null,"138a4cdb",null),h=w.exports,p={name:"AdminMain",components:{AdminNavbar:i["a"],AdminTweetsList:h}},g=p,C=(s("6377"),Object(m["a"])(g,a,n,!1,null,"161945a4",null));e["default"]=C.exports},6377:function(t,e,s){"use strict";s("2f6d")},"7d03":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"navbar"},[s("div",{staticClass:"twitter-logo"},[s("router-link",{attrs:{to:"/admin_main"}},[s("svg",{attrs:{width:"50",height:"50",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M30.7 23.47s-7.467 12.108-13.59 12.108c-10.707 0-.728-23.065 7.082-23.065 5.449 0 6.508 10.958 6.508 10.958z",fill:"#F60"}}),s("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M39.572 38.697a19.997 19.997 0 01-31.81-3.557c1.77 2.408 4.772 4.013 9.041 4.013 10.517 0 16.487-8.173 16.487-8.173s.516 6.46 6.27 7.717h.012zM42.722 15.745a19.98 19.98 0 01-.481 19.395 5.947 5.947 0 01-2.803-3.531l-2.282-6.837 5.566-9.027zM25.003 5.017a19.96 19.96 0 0113.537 5.28l-3.788 6.112c-1.37-3.566-4.156-7.136-9.575-7.136-11.099 0-19.325 12.116-19.325 19.712-.002.982.123 1.96.373 2.91a20 20 0 019.53-24.628A20.008 20.008 0 0125.002 5v.017z",fill:"#F60"}})])])],1),s("div",{staticClass:"nav-list"},[s("router-link",{attrs:{to:"/admin_main"}},[s("div",{staticClass:"logo-wrapper home"},[s("i",{staticClass:"logo home-logo"},[s("svg",{attrs:{width:"24",height:"22",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{staticClass:"home-logo-path",class:{"nav-list-logo-choosed":"admin-main"===t.nowPage},attrs:{d:"M22.58 6.35L12.475.897a1 1 0 00-.95 0L1.425 6.35A1.002 1.002 0 001.9 8.23c.16 0 .324-.037.475-.12l.734-.395 1.59 11.25c.216 1.214 1.31 2.062 2.66 2.062h9.282c1.35 0 2.444-.848 2.662-2.088l1.588-11.225.737.398a1 1 0 00.95-1.759l.002-.003zM12 14.435a3.25 3.25 0 110-6.5 3.25 3.25 0 010 6.5z",fill:"#1C1C1C"}})])]),s("h2",{staticClass:"home-title",class:{"list-title-choosed":"admin-main"===t.nowPage,"list-title":"admin-main"!==t.nowPage}},[t._v("推文清單")])])]),s("router-link",{attrs:{to:"/admin_users"}},[s("div",{staticClass:"logo-wrapper selfinfo"},[s("i",{staticClass:"logo selfinfo-logo"},[s("svg",{attrs:{width:"18",height:"21",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{staticClass:"selfinfo-logo-path",class:{"nav-list-logo-choosed":"admin-users"===t.nowPage},attrs:{d:"M9 10.816c1.355 0 2.872-.15 3.84-1.256.814-.93 1.078-2.368.806-4.392C13.266 2.343 11.529.656 9 .656S4.734 2.343 4.354 5.17c-.272 2.022-.008 3.46.806 4.39.968 1.107 2.485 1.256 3.84 1.256zM5.84 5.368c.162-1.2.787-3.212 3.16-3.212s2.998 2.013 3.16 3.212c.207 1.55.057 2.627-.45 3.205-.455.52-1.266.743-2.71.743s-2.255-.223-2.71-.743c-.507-.578-.657-1.656-.45-3.205zm11.44 12.868c-.877-3.526-4.282-5.99-8.28-5.99-3.998 0-7.403 2.464-8.28 5.99-.172.692-.028 1.4.395 1.94.408.52 1.04.82 1.733.82h12.304c.693 0 1.325-.3 1.733-.82.424-.54.567-1.247.394-1.94h.001zm-1.576 1.016c-.126.16-.316.246-.552.246H2.848c-.235 0-.426-.085-.552-.246a.753.753 0 01-.12-.654c.71-2.855 3.517-4.85 6.824-4.85s6.114 1.994 6.824 4.85c.06.242.017.48-.12.654z",fill:"#000"}})])]),s("h2",{staticClass:"selfinfo-title",class:{"list-title-choosed":"admin-users"===t.nowPage,"list-title":"admin-users"!==t.nowPage}},[t._v("使用者列表")])])])],1),s("div",{staticClass:"logout",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.logout.apply(null,arguments)}}},[s("svg",{attrs:{width:"20",height:"18",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M9 13L5 9m0 0l4-4M5 9h14m-5 4v1a3 3 0 01-3 3H4a3 3 0 01-3-3V4a3 3 0 013-3h7a3 3 0 013 3v1",stroke:"#000","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})]),s("div",{staticClass:"logout-text",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.logout.apply(null,arguments)}}},[t._v("登出")])])])])},n=[],i=(s("b0c0"),{name:"AdminNavbar",data:function(){return{nowPage:""}},methods:{logout:function(){this.$store.commit("revokeAuthentication"),this.$router.push("/login")}},created:function(){this.nowPage=this.$route.name}}),r=i,c=(s("2b65"),s("2877")),o=Object(c["a"])(r,a,n,!1,null,"512d70ab",null);e["a"]=o.exports},8227:function(t,e,s){},be6c:function(t,e,s){"use strict";s("b0c0");var a=s("c968");e["a"]={login:function(t){var e=t.email,s=t.password;return a["c"].post("/admin/signin",{email:e,password:s})},signUp:function(t){var e=t.account,s=t.name,n=t.email,i=t.password,r=t.checkPassword;return a["c"].post("/users",{account:e,name:s,email:n,password:i,checkPassword:r})},tweets:function(){return a["c"].get("/admin/tweets")},getUsers:function(){return a["c"].get("/admin/users")},deleteTweet:function(t){var e=t.tweetId;return a["c"].delete("/admin/tweets/".concat(e))}}},bfa4:function(t,e,s){"use strict";s("fa63")},fa63:function(t,e,s){}}]);
//# sourceMappingURL=chunk-5da51db0.7db4c8c4.js.map