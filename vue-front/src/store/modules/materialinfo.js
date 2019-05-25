import * as types from '../mutation-types'

const state = {
  materialInfos: [],
  materialInfoColumns: [
    {
      label: "规格1",
      prop: 'format1',
    },
    {
      label: "规格2",
      prop: 'format2',
    },
  ],
  materialCodeOptions: []
};

const getters = {
  materialInfos: state => state.materialInfos,
  materialInfoColumns: state => state.materialInfoColumns,
  materialCodeOptions: state => state.materialCodeOptions,
};

const actions = {
  // 使materialInfos设为初始值
  clearBaseInfo ({commit}) {
    commit(types.INFO_MATERIAL, []);
    commit(types.INFO_MATERIAL_COLS, []);
    commit(types.INFO_MAT_OPT_ARR, []);
  }
};

const mutations = {
  [types.INFO_MATERIAL] (state, materialInfos) {
    state.materialInfos = materialInfos;
  },
  [types.INFO_MATERIAL_COLS] (state, materialInfoColumns) {
    state.materialInfoColumns = materialInfoColumns;
  },
  [types.INFO_MAT_OPT_ARR] (state, materialCodeOptions) {
    state.materialCodeOptions = materialCodeOptions;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
