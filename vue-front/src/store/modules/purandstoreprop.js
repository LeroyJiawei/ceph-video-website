import * as types from '../mutation-types';

const state = {
  // 采购和库存属性数据
  purchaseAndStoreInfos: {
    // 物料制购类型
    matPurchaseType: '0',
    // ABC分类
    abcType: 'A',
    // 循环盘点编码
    cycleCountCode: '1001',
    // 是否批次管理
    isBatchManage: true,
    // 是否单件管理
    isSingleManage: true,
    // 是否进价控制
    isPurchasePriceCtr: true,
    // 默认供应商
    defaultSupplier: '李宁',
    // 默认采购部门
    defaultPurchaseDept: '采购一部',
    // 默认仓库
    defaultWarehouse: '苏州一仓库',
    // 默认采购单位
    defaultPurchaseCompany: '江阴布料厂',
    // 默认库存单位
    defaultStoreUnit: '0',
    // 默认库位
    defaultStoreLocation: '库位一',
  },
  defaultPurchaseAndStoreInfos: {
    matPurchaseType: '0',
    abcType: 'A',
    cycleCountCode: '0',
    isBatchManage: false,
    isSingleManage: false,
    isPurchasePriceCtr: false,
    defaultSupplier: '默认供应商',
    defaultPurchaseDept: '采购部',
    defaultWarehouse: '默认仓库',
    defaultPurchaseCompany: '默认采购单位',
    defaultStoreUnit: '0',
    defaultStoreLocation: '默认库位',
  },
};

const getters = {
  purchaseAndStoreInfos: state => state.purchaseAndStoreInfos,
  defaultPurchaseAndStoreInfos: state => state.defaultPurchaseAndStoreInfos,
};

const actions = {
  clearPurchaseAndStoreInfos ({commit}) {
    var params = {
      matPurchaseType: '0',
      abcType: 'A',
      cycleCountCode: '0',
      isBatchManage: false,
      isSingleManage: false,
      isPurchasePriceCtr: false,
      defaultSupplier: '默认供应商',
      defaultPurchaseDept: '采购部',
      defaultWarehouse: '默认仓库',
      defaultPurchaseCompany: '默认采购单位',
      defaultStoreUnit: '0',
      defaultStoreLocation: '默认库位',
    }
    commit(types.PUR_AND_STORE, params);
  }
};

const mutations = {
  [types.PUR_AND_STORE](state, purchaseAndStoreInfos) {
    state.purchaseAndStoreInfos = purchaseAndStoreInfos;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
