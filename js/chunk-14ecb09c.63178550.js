(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-14ecb09c"],{2960:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"rwd-container"},[a("div",{staticClass:"relpy-list-container"},[a("div",{staticClass:"navbar"},[a("Navbar")],1),a("div",{staticClass:"middle-container scrollbar"},[a("div",{staticClass:"user-profile"},[a("UserProfile",{attrs:{updateId:t.updateId,nowPage:t.nowPage,relatedFollowStatus:t.relatedFollowStatus},on:{"tap-follow-button":t.tapFollowButton}})],1),a("div",{staticClass:"user-tweets"},[a("UserNavtabs",{attrs:{nowPage:t.nowPage}})],1),a("router-view",{attrs:{updateId:t.updateId}})],1),a("div",{staticClass:"related-users"},[a("RelatedUsers",{attrs:{isFollowStatus:t.isFollowStatus},on:{updateUser:t.updateUser,"related-to-userFollow":t.relatedToUserFollow}})],1)])])},o=[],l=a("5530"),r=a("d178"),n=a("61f2"),d=a("03f8"),u=a("9f73"),i=a("2f62"),c={name:"OtherUser",components:{Navbar:r["a"],UserProfile:u["a"],UserNavtabs:d["a"],RelatedUsers:n["a"]},data:function(){return{nowPage:"other",id:-1,updateId:-1,isFollowStatus:{},relatedFollowStatus:{}}},watch:{relatedFollowStatus:function(t){this.relatedFollowStatus=t}},methods:{updateUser:function(t){this.updateId=t},tapFollowButton:function(t){this.isFollowStatus=t},relatedToUserFollow:function(t){this.relatedFollowStatus=t}},computed:Object(l["a"])({},Object(i["b"])(["currentUser"])),beforeRouteUpdate:function(t,e,a){var s=t.params.id;this.updateId=s,a()}},w=c,p=(a("4cae"),a("2877")),f=Object(p["a"])(w,s,o,!1,null,"64883de4",null);e["default"]=f.exports},"4cae":function(t,e,a){"use strict";a("549a")},"549a":function(t,e,a){}}]);
//# sourceMappingURL=chunk-14ecb09c.63178550.js.map