import {get} from '../../util/rest';
import API from '../../util/api';

const state = {
  list: {}
};

const getters = {
  getCollection(state) {
    return state.list;
  }
};

const mutations = {
  SetCollection(state, list) {
    state.list = list;
  }
};

const actions = {
  GetCollectionListAPI({commit}) {
    return new Promise((resolve, reject) => {
      get(API.Collection).then((response) => {
        commit('SetCollection', response.body.body.data);
        resolve();
      }).catch((error) => {
        reject(error);
      });
    });
  }
};

export const collection = {
  state,
  getters,
  mutations,
  actions
};
