(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24107b9a"],{2375:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"spinner"},[a("div",{staticClass:"bouncing-loader"},[a("div"),a("div"),a("div")])])}],n=(a("4010"),a("2877")),i={},c=Object(n["a"])(i,r,s,!1,null,"da50595c",null);t["a"]=c.exports},4010:function(e,t,a){"use strict";a("8227")},7156:function(e,t,a){var r=a("861d"),s=a("d2bb");e.exports=function(e,t,a){var n,i;return s&&"function"==typeof(n=t.constructor)&&n!==a&&r(i=n.prototype)&&i!==a.prototype&&s(e,i),e}},8227:function(e,t,a){},"8f8e":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[e.isLoading?a("Spinner"):e._l(e.tweets,(function(t){return a("div",{key:t.TweetId,staticClass:"tweet-reply"},[a("div",{staticClass:"reply-avatar"},[a("img",{staticClass:"avatar-img",attrs:{src:t.User.avatar,alt:""},on:{click:function(a){return e.redirectToProfile(t.User.id)}}})]),a("div",{staticClass:"reply-user-info",on:{click:function(a){return e.redirectToTweet(t.TweetId)}}},[a("div",{staticClass:"reply-user"},[a("h3",{staticClass:"reply-user-name"},[e._v(e._s(t.User.name))]),a("h3",{staticClass:"reply-user-account"},[e._v(e._s(t.User.account)+"．")]),e._v(" "+e._s(e._f("fromNow")(t.createdAt))+" ")]),a("div",{staticClass:"tweet-content"},[a("h3",{staticClass:"content"},[e._v(" "+e._s(t.description)+" ")])]),a("div",{staticClass:"reply-detail"},[a("div",{staticClass:"reply"},[a("div",{staticClass:"reply-icon-wrapper",on:{click:function(a){return a.stopPropagation(),a.preventDefault(),e.showModal(t)}}},[a("svg",{staticClass:"reply-icon",attrs:{width:"21",height:"21",viewBox:"0 0 13 13",fill:"transparent",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{staticClass:"reply-icon",attrs:{d:"M7.77881 0.40127L5.18631 0.39502H5.18506C2.45131 0.39502 0.310059 2.53689 0.310059 5.27127C0.310059 7.83252 2.30131 9.77502 4.97568 9.87752V12.27C4.97568 12.3375 5.00318 12.4488 5.05068 12.5219C5.13943 12.6625 5.29068 12.7388 5.44568 12.7388C5.53193 12.7388 5.61881 12.715 5.69693 12.665C5.86193 12.56 9.74256 10.0775 10.7519 9.22377C11.9407 8.21752 12.6519 6.74252 12.6538 5.27877V5.26814C12.6501 2.53877 10.5101 0.401269 7.77881 0.400644V0.40127ZM10.1457 8.50877C9.43693 9.10877 7.10693 10.6369 5.91318 11.4106V9.41877C5.91318 9.16002 5.70381 8.95002 5.44443 8.95002H5.19693C2.90943 8.95002 1.24818 7.40252 1.24818 5.27127C1.24818 3.06252 2.97818 1.33252 5.18568 1.33252L7.77756 1.33877H7.77881C9.98631 1.33877 11.7163 3.06752 11.7176 5.27377C11.7157 6.46752 11.1288 7.67627 10.1463 8.50877H10.1457Z",fill:"#657786"}})])]),a("div",{staticClass:"reply-count"},[e._v(e._s(t.RepliesCount))])]),a("div",{staticClass:"like"},[a("div",{staticClass:"heart-icon-wrapper"},[t.isLike?a("img",{staticClass:"heart-icon",attrs:{src:"heartSmallRed.svg",alt:""},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),e.unlike(t)}}}):a("svg",{staticClass:"heart-icon",attrs:{width:"20",height:"20",viewBox:"0 0 13 13",fill:"transparent",xmlns:"http://www.w3.org/2000/svg"},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),e.like(t)}}},[a("path",{staticClass:"heart-icon",attrs:{d:"M6.5 12.5239H6.49125C4.87687 12.4939 0.21875 8.28514 0.21875 4.29889C0.21875 2.38389 1.79687 0.702637 3.59562 0.702637C5.02687 0.702637 5.98937 1.69014 6.49937 2.40889C7.00812 1.69139 7.97062 0.702637 9.4025 0.702637C11.2025 0.702637 12.78 2.38389 12.78 4.29951C12.78 8.28451 8.12125 12.4933 6.50687 12.5226H6.5V12.5239ZM3.59625 1.64076C2.29625 1.64076 1.15687 2.88326 1.15687 4.30014C1.15687 7.88764 5.55312 11.5476 6.50062 11.5864C7.44937 11.5476 11.8444 7.88826 11.8444 4.30014C11.8444 2.88326 10.705 1.64076 9.405 1.64076C7.825 1.64076 6.9425 3.47576 6.935 3.49389C6.79125 3.84514 6.2125 3.84514 6.06812 3.49389C6.05937 3.47514 5.1775 1.64076 3.59687 1.64076H3.59625Z",fill:"#657786"}})])]),a("div",{staticClass:"like-count"},[e._v(e._s(t.LikesCount))])])])])])})),a("div",{directives:[{name:"show",rawName:"v-show",value:e.isShowModal,expression:"isShowModal"}],staticClass:"reply-modal"},[a("div",{staticClass:"modal-container"},[a("div",{staticClass:"modal-header"},[a("div",{staticClass:"close-btn",on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.closeModal.apply(null,arguments)}}},[a("img",{attrs:{src:"cross.svg",alt:""}})])]),a("div",{staticClass:"replied-tweet"},[a("div",{staticClass:"reply-avatar"},[a("img",{staticClass:"avatar-img",attrs:{src:e.nowModal.User.avatar,alt:""}}),a("div",{staticClass:"line"})]),a("div",{staticClass:"replied-content"},[a("div",{staticClass:"reply-user-info"},[a("div",{staticClass:"reply-user"},[a("h3",{staticClass:"reply-user-name"},[e._v(e._s(e.nowModal.User.name))]),a("h3",{staticClass:"reply-user-account"},[e._v(" "+e._s(e.nowModal.User.account)+"． ")]),e._v(" "+e._s(e._f("fromNow")(e.nowModal.createdAt))+" ")]),a("div",{staticClass:"tweet-content"},[a("h3",{staticClass:"content"},[e._v(" "+e._s(e.nowModal.description)+" ")])])]),a("div",{staticClass:"replied-author"},[a("h3",{staticClass:"reply-text"},[e._v("回覆給 ")]),a("h3",{staticClass:"replid-author-name"},[e._v(e._s(e.nowModal.User.account))])])])]),a("div",{staticClass:"modal-content"},[a("div",{staticClass:"avatar"},[a("img",{staticClass:"avatar-img",attrs:{src:e.currentUser.avatar,alt:""}})]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.comment,expression:"comment"}],staticClass:"twitter-text",attrs:{placeholder:"推你的回覆",maxlength:"200"},domProps:{value:e.comment},on:{input:function(t){t.target.composing||(e.comment=t.target.value)}}})]),a("button",{staticClass:"main-btn post-btn",on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.replyTweet.apply(null,arguments)}}},[e._v(" 回覆 ")])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.isShowModal,expression:"isShowModal"}],staticClass:"cover",on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.closeModal.apply(null,arguments)}}})],2)},s=[],n=a("5530"),i=a("1da1"),c=(a("96cf"),a("a9e3"),a("498a"),a("b0c0"),a("2375")),o=a("1602"),l=a("7482"),u=a("c968"),d=a("2f62"),p=a("2708"),f={name:"UserTweets",mixins:[p["a"]],components:{Spinner:c["a"]},props:{Switch:{type:Boolean,default:!1},NavbarSwitch:{type:Boolean,default:!1},updateId:{type:Number,default:-1}},data:function(){return{tweets:[],isShowModal:!1,nowPage:"main",nowPageId:-1,nowModal:{TweetId:-1,createdAt:"",description:"",LikesCount:-1,RepliesCount:-1,isLike:"false",User:{id:-1,name:"",account:"",avatar:""}},comment:"",isLoading:!0}},methods:{showModal:function(e){this.nowModal=e,this.isShowModal=!0},closeModal:function(){this.isShowModal=!1},fetchData:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a,r,s,n,i,c,d,p;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,"user-main"!==e.nowPage){t.next=9;break}return t.next=4,l["a"].getTweets();case 4:a=t.sent,r=a.data,e.tweets=r,t.next=25;break;case 9:if("user-other-tweet"!==e.nowPage){t.next=18;break}return s=e.nowPageId,t.next=13,o["a"].getSingleUserTweets({userId:s});case 13:n=t.sent,i=n.data,e.tweets=i,t.next=25;break;case 18:if("user-self-tweet"!=e.nowPage){t.next=25;break}return c=e.currentUser.id,t.next=22,o["a"].getSingleUserTweets({userId:c});case 22:d=t.sent,p=d.data,e.tweets=p;case 25:e.isLoading=!1,t.next=33;break;case 28:t.prev=28,t.t0=t["catch"](0),console.log(t.t0),u["a"].fire({icon:"warning",title:"無法取得推文，請稍後再試"}),e.isLoading=!1;case 33:case"end":return t.stop()}}),t,null,[[0,28]])})))()},fetchOtherUser:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var r,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,t.isLoading=!0,a.next=4,o["a"].getSingleUserTweets({userId:e});case 4:r=a.sent,s=r.data,t.tweets=s,t.isLoading=!1,a.next=15;break;case 10:a.prev=10,a.t0=a["catch"](0),console.log(a.t0),u["a"].fire({icon:"warning",title:"無法取得推文，請稍後再試"}),t.isLoading=!1;case 15:case"end":return a.stop()}}),a,null,[[0,10]])})))()},replyTweet:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a,r,s,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.comment.trim()){t.next=5;break}return u["b"].fire({icon:"warning",title:"尚未輸入內容"}),t.abrupt("return");case 5:if(!(e.comment.length>140)){t.next=8;break}return u["b"].fire({icon:"warning",title:"內容超過字數限制！"}),t.abrupt("return");case 8:return t.prev=8,a=e.nowModal.TweetId,r=e.comment,t.next=13,l["a"].replySingleTweet({tweet_id:a,comment:r});case 13:if(s=t.sent,n=s.data,"success"===n.status){t.next=17;break}throw new Error(n.message);case 17:"other-user"===e.$route.name?e.fetchOtherUser(e.$route.params.id):"main"===e.$route.name&&e.fetchData(),e.comment="",e.isShowModal=!1,t.next=26;break;case 22:t.prev=22,t.t0=t["catch"](8),console.log(t.t0),u["a"].fire({icon:"warning",title:"無法回覆推文，請稍後再試"});case 26:case"end":return t.stop()}}),t,null,[[8,22]])})))()},redirectToProfile:function(e){e===this.currentUser.id?this.$router.push("/user/self"):this.$router.push({path:"/user/other/".concat(e)})},redirectToTweet:function(e){console.log(e),this.$router.push({path:"/reply_list/".concat(e)})},like:function(e){return Object(i["a"])(regeneratorRuntime.mark((function t(){var a,r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,a=e.TweetId,t.next=4,l["a"].likeSingleTweet({TweetId:a});case 4:if(r=t.sent,s=r.data,e.isLike=!0,e.LikesCount+=1,"success"===s.status){t.next=10;break}throw new Error(s.message);case 10:t.next=16;break;case 12:t.prev=12,t.t0=t["catch"](0),console.log(t.t0),u["a"].fire({icon:"warning",title:"無法喜歡推文，請稍後再試"});case 16:case"end":return t.stop()}}),t,null,[[0,12]])})))()},unlike:function(e){return Object(i["a"])(regeneratorRuntime.mark((function t(){var a,r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,a=e.TweetId,t.next=4,l["a"].unlikeSingleTweet({TweetId:a});case 4:if(r=t.sent,s=r.data,e.isLike=!1,"success"===s.status){t.next=9;break}throw new Error(s.message);case 9:e.LikesCount-=1,t.next=16;break;case 12:t.prev=12,t.t0=t["catch"](0),console.log(t.t0),u["a"].fire({icon:"warning",title:"無法取消喜歡，請稍後再試"});case 16:case"end":return t.stop()}}),t,null,[[0,12]])})))()}},computed:Object(n["a"])({},Object(d["b"])(["currentUser"])),watch:{nowModal:function(){this.$forceUpdate()},Switch:{handler:function(){this.fetchData()},deep:!0},NavbarSwitch:{handler:function(){this.fetchData()},deep:!0},updateId:function(){this.fetchOtherUser(this.updateId)}},created:function(){this.nowPage=this.$route.name,this.$route.params.id&&(this.nowPageId=this.$route.params.id),this.fetchData()}},w=f,h=(a("dc09"),a("2877")),v=Object(h["a"])(w,r,s,!1,null,"5b90d1f9",null);t["default"]=v.exports},a9e3:function(e,t,a){"use strict";var r=a("83ab"),s=a("da84"),n=a("94ca"),i=a("6eeb"),c=a("5135"),o=a("c6b6"),l=a("7156"),u=a("c04e"),d=a("d039"),p=a("7c73"),f=a("241c").f,w=a("06cf").f,h=a("9bf2").f,v=a("58a8").trim,m="Number",g=s[m],C=g.prototype,b=o(p(C))==m,k=function(e){var t,a,r,s,n,i,c,o,l=u(e,!1);if("string"==typeof l&&l.length>2)if(l=v(l),t=l.charCodeAt(0),43===t||45===t){if(a=l.charCodeAt(2),88===a||120===a)return NaN}else if(48===t){switch(l.charCodeAt(1)){case 66:case 98:r=2,s=49;break;case 79:case 111:r=8,s=55;break;default:return+l}for(n=l.slice(2),i=n.length,c=0;c<i;c++)if(o=n.charCodeAt(c),o<48||o>s)return NaN;return parseInt(n,r)}return+l};if(n(m,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var _,x=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof x&&(b?d((function(){C.valueOf.call(a)})):o(a)!=m)?l(new g(k(t)),a,x):k(t)},y=r?f(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),I=0;y.length>I;I++)c(g,_=y[I])&&!c(x,_)&&h(x,_,w(g,_));x.prototype=C,C.constructor=x,i(s,m,x)}},b806:function(e,t,a){},dc09:function(e,t,a){"use strict";a("b806")}}]);
//# sourceMappingURL=chunk-24107b9a.f50d993c.js.map