import {get} from '../../util/rest';

const state = {
  data: {},
  count: {}
};

const getters = {
  getDatas(state) {
    return state.data;
  },
  getCount(state) {
    return state.count;
  }
};

const mutations = {
  SetData(state, data) {
    state.data = data;
  },
  SetCount(state, count) {
    state.count = count;
  }

};

const actions = {
  GetBlogList({commit}) {
    return new Promise((resolve, reject) => {
      let url = '/blog/list';
      get(url).then((response) => {
        commit('SetData', response.body.body.data);
        commit('SetCount', response.body.body.count);
        resolve();
      }).catch((error) => {
        reject(error);
      });
    });
  }
};

export const index = {
  state,
  getters,
  mutations,
  actions
};
