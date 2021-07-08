import Vue from 'vue'
import VueRouter from 'vue-router'
import UserLogin from "../views/UserLogin.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "root",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "user-login",
    component: UserLogin,
  },
  {
    path: "/regist",
    name: "register",
    component: () => import("../views/Register.vue"),
  },
  {
    path: "/setting",
    name: "setting",
    component: () => import("../views/UserSetting.vue"),
  },
  {
    path: "/main",
    name: "user-main",
    component: () => import("../views/UserMainPage.vue"),
  },
  {
    path: "/reply_list/:id",
    name: "reply-list",
    component: () => import("../views/ReplyList.vue"),
  },
  {
    path: "/user/self",
    name: "user-self",
    component: () => import("../views/User.vue"),
    redirect: '/user/self/tweet',
    children: [
      {
        path: 'tweet',
        name: 'user-self-tweet',
        component: () => import('../components/UserTweets.vue')
      },
      {
        path: "reply",
        name: "use-self-reply",
        component: () => import("../components/UserReplies.vue"),
      },
      {
        path: "like",
        name: "user-self-like",
        component: () => import("../components/UserTweets.vue"),
      },
    ]
  },
  {
    path: "/user/self/follow",
    name: "user-self-follow",
    component: () => import("../views/UserSelfFollow.vue"),
    redirect: '/user/self/follow/follower',
    children: [
      {
        path: 'follower',
        name: 'user-follower-list',
        component: () => import('../components/UserFollowerList.vue')
      },
      {
        path: 'following',
        name: 'user-following-list',
        component: () => import('../components/UserFollowingList.vue')
      }
    ]
  },
  {
    path: "/user/other/:id",
    name: "user-other",
    component: () => import("../views/OtherUser.vue"),
    redirect: "/user/other/:id/tweet",
    children: [
      {
        path: "tweet",
        name: "user-other-tweet",
        component: () => import("../components/UserTweets.vue"),
      },
      {
        path: "reply",
        name: "user-other-reply",
        component: () => import("../components/UserReplies.vue"),
      },
      {
        path: "like",
        name: "user-other-like",
        component: () => import("../components/UserTweets.vue"),
      },
    ],
  },
  {
    path: "/admin",
    name: "admin-login",
    component: () => import("../views/AdminLogin.vue"),
  },
  {
    path: "/admin_main",
    name: "admin-main",
    component: () => import("../views/AdminMain.vue"),
  },
  {
    path: "/admin_users",
    name: "admin-users",
    component: () => import("../views/AdminUsers.vue"),
  },
];

const router = new VueRouter({
  routes
})

export default router
