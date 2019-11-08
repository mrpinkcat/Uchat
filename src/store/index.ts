import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    logged: false,
  },
  getters: {
    getUserLoggedStatus: (store):boolean => store.logged,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
