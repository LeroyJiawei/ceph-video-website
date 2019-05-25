import * as types from '../mutation-types'

const state = {
  skuInfos: [],
};

const getters = {
  skuInfos: state => state.skuInfos,
};

const actions = {
  // 清空sku定义信息
  clearSkuInfos ({commit}) {
    commit(types.INFO_SKU, []);
  }
};

const mutations = {
  [types.INFO_SKU] (state, skuInfos) {
    state.skuInfos = skuInfos;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
