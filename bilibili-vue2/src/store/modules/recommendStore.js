import {
  recommendApi
} from '../../api';
import * as TYPE from '../actionType';

const state = {
  recommendInit: [],
  recommendBreak: [],
  recommendMore: []
};

const getters = {
  recommendInit: state => state.recommendInit,
  recommendBreak: state => state.recommendBreak,
  recommendMore: state => state.recommendMore
};

const actions = {
  recommendInit({
    commit,
    state,
    rootState
  }) {
    rootState.requesting = true;
    commit(TYPE.recommendInit.RECOMMEND_INIT_REQUEST);
    recommendApi.init().then((response) => {
      rootState.requesting = false;
      commit(TYPE.recommendInit.RECOMMEND_INIT_SUCCESS, response);
    }, (error) => {
      console.log(error);
      commit(TYPE.recommendInit.RECOMMEND_INIT_FAILURE);
    });
  },
  recommendBreak({
    commit,
    state,
    rootState
  }) {
    rootState.requesting = true;
    commit(TYPE.recommendBreak.RECOMMEND_BREAK_REQUEST);
    recommendApi.break().then((response) => {
      rootState.requesting = false;
      commit(TYPE.recommendBreak.RECOMMEND_BREAK_SUCCESS, response);
    }, (error) => {
      console.log(error);
      commit(TYPE.recommendBreak.RECOMMEND_BREAK_FAILURE);
    });
  },
  recommendMore({
    commit,
    state,
    rootState
  }) {
    rootState.requesting = true;
    commit(TYPE.recommendMore.RECOMMEND_MORE_REQUEST);
    recommendApi.more().then((response) => {
      rootState.requesting = false;
      commit(TYPE.recommendMore.RECOMMEND_MORE_SUCCESS, response);
    }, (error) => {
      console.log(error);
      commit(TYPE.recommendMore.RECOMMEND_MORE_FAILURE);
    });
  }
};

const mutations = {
  [TYPE.recommendInit.RECOMMEND_INIT_REQUEST](state) {

  },
  [TYPE.recommendInit.RECOMMEND_INIT_SUCCESS](state, res) {
    state.recommendInit = res.data;
  },
  [TYPE.recommendInit.RECOMMEND_INIT_FAILURE](state) {

  },
  [TYPE.recommendBreak.RECOMMEND_BREAK_REQUEST](state) {

  },
  [TYPE.recommendBreak.RECOMMEND_BREAK_SUCCESS](state, res) {
    state.recommendBreak = res.data;
  },
  [TYPE.recommendBreak.RECOMMEND_BREAK_FAILURE](state) {

  },
  [TYPE.recommendMore.RECOMMEND_MORE_REQUEST](state) {

  },
  [TYPE.recommendMore.RECOMMEND_MORE_SUCCESS](state, res) {
    state.recommendMore = res.data;
  },
  [TYPE.recommendMore.RECOMMEND_MORE_FAILURE](state) {

  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
