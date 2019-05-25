import * as types from '../mutation-types';

const state = {
  // 销售属性数据
  salesInfos: {
    // 销售计划价格
    planPrice: '10',
    // 计价货币
    currency: '0',
    // 是否售价控制
    isPriceCtr: false,
    // 销售价格策略
    priceStrategy: "保守策略",
    // 销价下限率
    priceLowerLimitRate: "25",
    // 销售成本科目
    costSubject: "科目一",
    // 默认客户
    defaultClient: "波司登",
    // 销售地
    location: "中国",
    // 默认业务员
    defaultSalesman: "张三",
    // 默认销售单位
    defaultUnit: '0',
  },
  defaultSalesInfos: {
    planPrice: '0',
    currency: '0',
    isPriceCtr: false,
    priceStrategy: "保守策略",
    priceLowerLimitRate: "0",
    costSubject: "默认科目",
    defaultClient: "默认客户",
    location: "默认销售地",
    defaultSalesman: "默认业务员",
    defaultUnit: '0',
  },
};

const getters = {
  salesInfos: state => state.salesInfos,
  defaultSalesInfos: state => state.defaultSalesInfos,
};

const actions = {
  // 清空销售类属性
  clearSalesInfos ({commit}) {
    var params = {
      planPrice: '0',
      currency: '0',
      isPriceCtr: false,
      priceStrategy: "保守策略",
      priceLowerLimitRate: "0",
      costSubject: "默认科目",
      defaultClient: "默认客户",
      location: "默认销售地",
      defaultSalesman: "默认业务员",
      defaultUnit: '0',
    }
    commit(types.SALES, params);
  }
};

const mutations = {
  [types.SALES](state, salesInfos) {
    state.salesInfos = salesInfos;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
