import API from '../../util/api';
import {get} from '../../util/rest';
import {formatString} from '../../util/string-utils';

const state = {
  TagList: {},
  TagCount: 0,
  TagBlogLs: {},
  TagBlogCount: 0
};

const getters = {

  /**
   * @return {number}
   */
  GetTagCount(state) {
    return state.TagCount;
  },

  GetTagLs(state) {
    return state.TagList;
  },

  /**
   * @return {number}
   */
  GetTagBlogCount() {
    return state.TagBlogCount;
  },

  GetTagBlogLs() {
    return state.TagBlogLs;
  }
};

const mutations = {
  setTagLs(state, tagLs) {
    state.TagList = tagLs;
  },
  setTagCount(state, tagCount) {
    state.TagCount = tagCount;
  },
  setTagBlogCount(state, count) {
    state.TagBlogCount = count;
  },
  setTagBlogLs(state, ls) {
    state.TagBlogLs = ls;
  }
};

const actions = {
  GetTagLsAction({commit}) {
    return new Promise((resolve, reject) => {
      get(API.TagList).then((response) => {
        commit('setTagCount', response.body.body.count);
        commit('setTagLs', response.body.body.data);
        resolve();
      }).catch((error) => {
        reject(error);
      });
    });
  },
  GetTagBlog({commit}, tagId) {
    return new Promise((resolve, reject) => {
      get(formatString(API.BlogTagList, tagId)).then((response) => {
        commit('setTagBlogCount', response.body.body.count);
        commit('setTagBlogLs', response.body.body.data);
        resolve();
      }).catch((error) => {
        reject(error);
      });
    });
  }
};

export const blogtag = {
  state,
  getters,
  mutations,
  actions
};
