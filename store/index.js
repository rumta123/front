// В файле store.js

import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default () =>new Vuex.Store({
  state:()=> {
    username: ''
  },
  mutations: {
    setUsername(state, username) {
      state.username = username;
    }
  },
  actions: {
    updateUsername({ commit }, username) {
      commit('setUsername', username);
    }
  },
  getters: {
    getUsername(state) {
      return state.username;
    }
  }
});


