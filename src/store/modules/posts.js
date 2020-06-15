import * as posts from "@/api/posts";

export default {
  namespaced: true,
  state: {
    currentIndex: 0,
    posts: []
  },
  getters: {
    currentIndex: state => {
      return state.currentIndex;
    },
    posts: state => {
      return state.posts;
    }
  },
  mutations: {
    SET_POSTS(state, payload) {
      state.posts = payload;
    },
    NEXT_INDEX(state) {
      if (state.currentIndex < state.posts.length - 1) state.currentIndex++;
    },
    PREV_INDEX(state) {
      if (state.currentIndex > 0) state.currentIndex--;
    }
  },
  actions: {
    getPosts({ commit }) {
      commit("loading/SET_LOADING", true, { root: true });
      posts
        .getPosts()
        .then(({ data }) => {
          commit("SET_POSTS", data);
        })
        .catch(err => {
          commit("SET_POSTS", []);
          console.log(err);
        })
        .finally(() => {
          commit("loading/SET_LOADING", false, { root: true });
        });
    }
  }
};
