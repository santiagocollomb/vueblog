import Vue from "vue";
import Vuex from "vuex";

import oauth from "./modules/oauth";
import loading from "./modules/loading";
import posts from "./modules/posts";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    oauth,
    loading,
    posts
  }
});
