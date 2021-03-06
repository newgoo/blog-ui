import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import getters from './getters';
import {blog} from './modules/blog';
import {hot} from './modules/hot';
import {blogclass} from './modules/class';
import {blogtag} from './modules/tag';
import {timeline} from './modules/timeline';
import {collection} from './modules/collection';

Vue.use(Vuex);

const state = {
  view: 4
};
const mutations = {
  SetView(state) {
    state.view = state.view + 1;
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    blog,
    hot,
    blogclass,
    blogtag,
    timeline,
    collection
  }
});
