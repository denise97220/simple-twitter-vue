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
        const { id, name, email, role } = data

        commit("setCurrentUser", {
          id,
          name,
          email,
          role
        });
      } catch (error) {
        console.log("error", error);
        console.error("can not fetch user information");
      }
    },
  },
  modules: {},
});
