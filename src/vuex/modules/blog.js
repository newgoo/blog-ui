import { formatString } from '../../util/string-utils';
import { get } from '../../util/rest';

const state = {
  data: {}
};

const getters = {
  getData(state) {
    console.log('2');
    return state.data;
  }
};

const mutations = {
  SetData(state, data) {
    console.log('1');
    state.data = data;
  }
};

const actions = {
  SetOneBlog({ commit }, id) {
    return new Promise((resolve, reject) => {
      let url = '/blog/detail?id=$1';
      url = formatString(url, id);
      get(url).then((response) => {
        commit('SetData', response.body.body.data);
        resolve();
      }).catch((error) => {
        reject(error);
      });
    });
  }
};

export const blog = {
  state,
  getters,
  mutations,
  actions
};
