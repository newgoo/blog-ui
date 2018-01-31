import { get } from '../../util/rest';
import { formatString } from '../../util/string-utils';

const state = {
  blogList: {},
  hotlist: {},
  blogCount: {},
  blogDetail: {}
};

const getters = {
  getBlogList(state) {
    return state.blogList;
  },
  getBLogCount(state) {
    return state.blogCount;
  },
  getHotlist(state) {
    return state.hotlist;
  },
  getBlogDetail(state) {
    return state.blogDetail;
  }
};

const mutations = {
  SetBlogList(state, data) {
    state.blogList = data;
  },
  SetBlogCount(state, count) {
    state.blogCount = count;
  },
  SetHotList(state, hotlist) {
    state.hotlist = hotlist;
  },
  SetBlogDetail(state, data) {
    state.blogDetail = data;
  }
};

const actions = {
  GetBlogList({ commit }) {
    return new Promise((resolve, reject) => {
      let url = '/blog/list';
      get(url).then((response) => {
        commit('SetBlogList', response.body.body.data);
        commit('SetBlogCount', response.body.body.count);
        resolve();
      }).catch((error) => {
        reject(error);
      });
    });
  },
  GetHotlist({ commit }) {
    return new Promise((resolve, reject) => {
      let url = '/blog/hot';
      get(url).then((response) => {
        commit('SetHotList', response.body.body.data);
        resolve();
      }).catch((error) => {
        reject(error);
      });
    });
  },
  SetOneBlog({ commit }, id) {
    return new Promise((resolve, reject) => {
      let url = '/blog/detail?id=$1';
      url = formatString(url, id);
      get(url).then((response) => {
        commit('SetBlogDetail', response.body.body.data);
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
