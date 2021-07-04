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
    component: () => import("../views/UserSetting.vue"),
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
  },
  {
    path: "/user/self/follower",
    name: "user-self-follower",
    component: () => import("../views/UserSelfFollower.vue"),
  },
  {
    path: "/user/self/following",
    name: "user-self-following",
    component: () => import("../views/UserSelfFollowing.vue"),
  },
  {
    path: "/user/other/:id",
    name: "user-other",
    component: () => import("../views/OtherUser.vue"),
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
