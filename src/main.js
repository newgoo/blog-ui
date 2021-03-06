// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
// import Router from 'vue-router';
// import iView from 'iView';
// import Vuex from 'vuex';
import store from './vuex/store';
// import Highlight from 'vue-markdown-highlight';
import {} from '../static/css/markdown.css';
import {} from '../static/css/github.css';

Vue.config.productionTip = false;

// Vue.use(Router);
// Vue.use(iView);
// Vue.use(Vuex);
// Vue.use(Highlight);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router: router,
  template: '<App/>',
  render (h) {
    return h('App');
  },
  components: {
    App
  }
});
