import Vue from "vue"
import VueRouter from "vue-router"
import UserLogin from "../views/UserLogin.vue";
import store from "./../store";

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
    redirect: "/user/self/tweet",
    children: [
      {
        path: "tweet",
        name: "user-self-tweet",
        component: () => import("../components/UserTweets.vue"),
      },
      {
        path: "reply",
        name: "user-self-reply",
        component: () => import("../components/UserReplies.vue"),
      },
      {
        path: "like",
        name: "user-self-like",
        component: () => import("../components/UserLikes.vue"),
      },
    ],
  },
  {
    path: "/user/self/follow/:id",
    name: "user-self-follow",
    component: () => import("../views/UserSelfFollow.vue"),
    redirect: "/user/self/follow/follower",
    children: [
      {
        path: "follower",
        name: "user-self-follow-follower",
        component: () => import("../components/UserFollowerList.vue"),
      },
      {
        path: "following",
        name: "user-self-follow-following",
        component: () => import("../components/UserFollowingList.vue"),
      },
    ],
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
        component: () => import("../components/UserLikes.vue"),
      },
    ],
  },
  {
    path: "/user/other/follow/:id",
    name: "user-other-follow",
    component: () => import("../views/UserSelfFollow.vue"),
    redirect: "/user/other/follow/follower",
    children: [
      {
        path: "follower",
        name: "user-other-follow-follower",
        component: () => import("../components/UserFollowerList.vue"),
      },
      {
        path: "following",
        name: "user-other-follow-following",
        component: () => import("../components/UserFollowingList.vue"),
      },
    ],
  },
  {
    path: "/chat_public",
    name: "chat-room",
    component: () => import("../views/ChatRoom.vue"),
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
  {
    path: "*",
    name: "not-found",
    component: () => import("../views/NotFound.vue"),
  },
];

const router = new VueRouter({
  routes,
  linkExactActiveClass: "active",
});

router.beforeEach(async (to, from, next) => {
  const token = localStorage.getItem("token")
  let isAuthenticated = false
  // let role = store.state.currentUser.role

  if (token) {
    isAuthenticated = await store.dispatch("fetchCurrentUser")
  }

  const pathsWithoutAuthentication = ["user-login", "register", "admin-login"];

  if (!isAuthenticated && !pathsWithoutAuthentication.includes(to.name)) {
    next("/login")
    return
  }

  if (isAuthenticated && pathsWithoutAuthentication.includes(to.name)) {
    next("/main");
    return
  } 

  if (isAuthenticated && pathsWithoutAuthentication.includes(to.name)) {
    next("/main");
    return;
  } 


  next()
});

export default router
