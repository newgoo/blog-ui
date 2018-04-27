import API from '../../util/api';
import { get } from '../../util/rest';
import { formatString } from '../../util/string-utils';

const state = {
  classList: {},
  classListCount: 1,
  classBlogList: {},
  classBlogListCount: 1
};

const getters = {
  GetClasslist(state) {
    return state.classList;
  },
  GetClasslistCount(state) {
    return state.classListCount;
  },
  GetClassBlogList(state) {
    return state.classBlogList;
  },
  GetClassBlogListCount(state) {
    return state.classBlogListCount;
  }
};

const mutations = {
  SetClassList(state, classList) {
    state.classList = classList;
  },
  SetClassListCount(state, count) {
    state.classListCount = count;
  },
  SetClassBlogList(state, classBlogList) {
    state.classBlogList = classBlogList;
  },
  SetClassBlogListCount(state, classBlogListCount) {
    state.classBlogListCount = classBlogListCount;
  }
};

const actions = {
  GetClassListAPI({ commit }) {
    return new Promise((resolve, reject) => {
      get(API.ClassList).then((response) => {
        commit('SetClassList', response.body.body.data);
        commit('SetClassListCount', response.body.body.count);
        resolve();
      }).catch((error) => {
        reject(error);
      });
    });
  },
  GetClassBlogListAPI({ commit }, classid) {
    return new Promise((resolve, reject) => {
      get(formatString(API.BlogClassList, classid)).then((response) => {
        commit('SetClassBlogList', response.body.body.data);
        commit('SetClassBlogListCount', response.body.body.count);
        resolve();
      }).catch((error) => {
        reject(error);
      });
    });
  }
};

export const blogclass = {
  state,
  getters,
  mutations,
  actions
};
