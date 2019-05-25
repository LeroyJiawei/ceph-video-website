import * as types from '../mutation-types';

const state = {
  // 计划属性数据
  planInfos: {
    // 是否独立需求
    isIndependenceNeed: true,
    // 订货提前期
    orderLeadTime: '100',
    // 补货政策
    replenishPolicy: '0',
    // 补货周期
    replenishCycle: '10',
    // 最大库存量
    maxInventory: '20',
    // 安全库存量
    safeInventory: '20',
    // 订货批量 = 最大库存量 - 安全库存量
    orderQuantity: '0',
    // 批量政策
    batchPolicy: '0',
    // 批量周期
    batchCycle: '20',
    // 默认计划单位
    defaultPlanUnit: '天',
  },
  defaultPlanInfos: {
    isIndependenceNeed: false,
    orderLeadTime: '0',
    replenishPolicy: '0',
    replenishCycle: '0',
    maxInventory: '0',
    safeInventory: '0',
    orderQuantity: '0',
    batchPolicy: '0',
    batchCycle: '0',
    defaultPlanUnit: '天',
  },
};

const getters = {
  planInfos: state => state.planInfos,
  maxInventory: state => state.planInfos.maxInventory,
  safeInventory: state => state.planInfos.safeInventory,
  orderQuantity: state => state.planInfos.orderQuantity,
  defaultPlanInfos: state => state.defaultPlanInfos,
};

const actions = {
  updateOrderQuantity ({commit}, {url, value}) {
    commit(url, value);
    var maxInv = state.planInfos.maxInventory == null ? 0 : state.planInfos.maxInventory;
    var safeInv = state.planInfos.safeInventory == null ? 0 : state.planInfos.safeInventory;
    commit('order-quanlity', maxInv - safeInv);
  },
  // 清空计划属性
  clearPlanInfos ({commit}) {
    var params = {
      isIndependenceNeed: false,
      orderLeadTime: '0',
      replenishPolicy: '0',
      replenishCycle: '0',
      maxInventory: '0',
      safeInventory: '0',
      orderQuantity: '0',
      batchPolicy: '0',
      batchCycle: '0',
      defaultPlanUnit: '天',
    };
    commit(types.PLANS, params);
  }
};

const mutations = {
  [types.PLANS](state, planInfos) {
    state.planInfos = planInfos;
  },
  ['max-inv'](state, maxInventory) {
    state.planInfos.maxInventory = maxInventory;
  },
  ['safe-inv'](state, safeInventory) {
    state.planInfos.safeInventory = safeInventory;
  },
  ['order-quanlity'](state, orderQuantity) {
    state.planInfos.orderQuantity = orderQuantity;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
