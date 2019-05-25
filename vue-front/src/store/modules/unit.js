import * as types from '../mutation-types'

const state = {
  units: {
    // 默认计量单位id
    defaultUnitId: 1,
    // 单位信息数据
    unitLists: [],
  }
};

const getters = {
  defaultUnitId: state => state.units.defaultUnitId,
  unitLists: state => state.units.unitLists,
  units: state => state.units,
};

const actions = {};

const mutations = {
  [types.INFO_DEF_UNIT_ID] (state, defaultUnitId) {
    state.units.defaultUnitId = defaultUnitId;
  },
  [types.INFO_UNIT_ARR] (state, unitLists) {
    state.units.unitLists = unitLists;
  },
  [types.INFO_UNIT] (state, units) {
    state.units = units;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
