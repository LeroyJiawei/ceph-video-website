/**
 * Actions
 */
import * as types from './mutation-types'

const actions = {
  // 清空物料信息修改页面所有信息
  clearAllInfoInModify ({dispatch}) {
    dispatch('clearMatInfos');
    dispatch('clearCtrlProps');
  },
  // 清空物料分类信息修改页面所有信息
  clearAllInfoInType ({dispatch}) {
    dispatch('clearCtrlProps');
    dispatch('categorymodify/clearBasePropList');
  },
  // 清空物料信息
  clearMatInfos ({dispatch}) {
    // 物料基本信息
    dispatch('baseinfo/clearBaseInfo');
    // 物料信息
    dispatch('materialinfo/clearBaseInfo');
    // sku信息
    dispatch('skuinfo/clearSkuInfos');
  },
  // 清空控制属性
  clearCtrlProps ({dispatch}) {
    // 采购与库存
    dispatch('purandstoreprop/clearPurchaseAndStoreInfos');
    // 计划
    dispatch('planprop/clearPlanInfos');
    // 销售
    dispatch('salesprop/clearSalesInfos');
    // 质量
    dispatch('qualityprop/clearQualifyInfos');
    // 财务
    dispatch('financeprop/clearFinanceInfos');
  },
};

export default actions;
