import * as types from '../mutation-types';

const state = {
  // 财务属性数据
  financeInfos: {
    // 财务类别
    typeId: '0',
    // 记账本位币
    recordCurrency: '人民币',
    // 会计科目
    accountName: '资产类',
    // 增值税代码
    vatCode: '1001',
    // 存货计价方法
    invCostMethod: '0',
    // 成本计算方法
    costingMethod: '0',
    // 开票类型
    billingType: '0',
  },
  defaultFinanceInfos: {
    typeId: '0',
    recordCurrency: '人民币',
    accountName: '资产类',
    vatCode: '0',
    invCostMethod: '0',
    costingMethod: '0',
    billingType: '0',
  },
};

const getters = {
  financeInfos: state => state.financeInfos,
  defaultFinanceInfos: state => state.defaultFinanceInfos,
};

const actions = {
  // 清空财务属性
  clearFinanceInfos ({commit}) {
    // 财务属性默认数据
    var financeInfos = {
      // 财务类别
      typeId: '0',
      recordCurrency: '人民币',
      accountName: '资产类',
      vatCode: '0',
      invCostMethod: '0',
      costingMethod: '0',
      billingType: '0',
    };
    commit(types.FINANCE, financeInfos);
  }

};

const mutations = {
  [types.FINANCE](state, financeInfos) {
    state.financeInfos = financeInfos;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
