import { get } from '../../util/rest';
import API from '../../util/api';

const state = {
  hotlist: {}
};

const getters = {
  getHotlist(state) {
    return state.hotlist;
  }
};

const mutations = {
  SetHotList(state, hotlist) {
    state.hotlist = hotlist;
  }
};

const actions = {
  GetHotListAPI({ commit }) {
    return new Promise((resolve, reject) => {
      get(API.HotList).then((response) => {
        commit('SetHotList', response.body.body.data);
        resolve();
      }).catch((error) => {
        reject(error);
      });
    });
  }
};

export const hot = {
  state,
  getters,
  mutations,
  actions
};
