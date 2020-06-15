/* eslint-disable */
import Vue from 'vue';

// Font-Awesome
import './plugins/fontAwesome';

import App from './App.vue';
import router from './router';
import store from './store';

// Global CSS
import './assets/css/main.styl';
import './assets/css/responsive.styl';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  methods: {
    // Nuestra función
    init() {
        
      //store.dispatch('oauth/getToken');
    },
  },
  // Hook created
  created() {
    this.init();
  },
  render: (h) => h(App),
}).$mount('#app');
