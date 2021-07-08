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
  },
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        ...currentUser,
      };
      state.isAuthenticated = true;
    },
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
          Likes
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
      } catch (error) {
        console.log("error", error);
        console.error("無法取得當前使用者");
      }
    },
  },
  modules: {},
});
