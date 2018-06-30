// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import Router from 'vue-router';
import ElementUI from 'element-ui';
import iView from 'iview';
import Vuex from 'vuex';
import store from './vuex/store';
import {} from 'highlight.js/styles/default.css';
// import { } from 'font-awesome/css/font-awesome.css';
import Highlight from 'vue-markdown-highlight';
// import VueMarkdown from 'vue-markdown';

Vue.config.productionTip = false;

Vue.use(Router);
Vue.use(ElementUI);
Vue.use(iView);
Vue.use(Vuex);
Vue.use(Highlight);
// Vue.use(VueMarkdown);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router: router,
  template: '<App/>',
  components: {
    App
  }
});
