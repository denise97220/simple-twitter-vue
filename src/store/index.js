import Vue from 'vue'
import Vuex from 'vuex'
import userAPI from './../apis/user';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: {
      id: -1,
      name: "",
      email: "",
      role: "",
    },
    isAuthenticated: false,
    userIsFollowed: false
  },
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        ...currentUser,
      };
      state.isAuthenticated = true;
    },
    revokeAuthentication(state) {
      state.currentUser = {}
      state.isAuthenticated = false
      localStorage.removeItem("token")
    },
    followed(state) {
      state.userIsFollowed = !state.userIsFollowed
    }
  },
  actions: {
    async fetchCurrentUser({ commit }) {
      try {
        const { data } = await userAPI.getCurrentUser();
        const {
          id,
          name,
          email,
          avatar,
          role,
          introduction,
          account,
          cover,
          createdAt,
          updatedAt,
          Followers,
          Followings,
          Likes,
        } = data;

        commit("setCurrentUser", {
          id,
          name,
          email,
          avatar,
          role,
          introduction,
          account,
          cover,
          createdAt,
          updatedAt,
          Followers,
          Followings,
          Likes,
        });

        return true
      } catch (error) {
        console.log("error", error);
        console.error("無法取得當前使用者")

        return false
      }
    },
  },
  modules: {},
});
