import API from '../../util/api';
import {get} from '../../util/rest';

const state = {
  TimeLineLs: {}
};

const getters = {
  GetTimeLine(state) {
    return state.TimeLineLs;
  }
};

const mutations = {
  setTimeLine(state, timeLine) {
    state.TimeLineLs = timeLine;
  }
};

const actions = {
  GetTimeLineAPI({commit}) {
    return new Promise((resolve, reject) => {
      get(API.TimeLine).then((response) => {
        commit('setTimeLine', response.body.body.data);
        resolve();
      }).catch((error) => {
        reject(error);
      });
    });
  }
};

export const timeline = {
  state,
  getters,
  mutations,
  actions
};
