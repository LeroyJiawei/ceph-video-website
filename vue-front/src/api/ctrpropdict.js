class CtrPropDict {
  // 用于转化采购与库存属性名与属性值的字典
  purchaseAndStoreDict = {
    '物料制购类型': 'matPurchaseType',
    'ABC分类': 'abcType',
    '循环盘点编码': 'cycleCountCode',
    '是否批次管理': 'isBatchManage',
    '是否单件管理': 'isSingleManage',
    '是否进价控制': 'isPurchasePriceCtr',
    '默认供应商': 'defaultSupplier',
    '默认采购部门': 'defaultPurchaseDept',
    '默认仓库': 'defaultWarehouse',
    '默认采购单位': 'defaultPurchaseCompany',
    '默认库存单位': 'defaultStoreUnit',
    '默认库位': 'defaultStoreLocation',
  };
  // 用于转化计划类属性名与属性值的字典
  planDict = {
    '是否独立需求': 'isIndependenceNeed',
    '订货提前期（天）': 'orderLeadTime',
    '补货政策': 'replenishPolicy',
    '补货周期（天）': 'replenishCycle',
    '最大库存量': 'maxInventory',
    '安全库存量': 'safeInventory',
    '订货批量': 'orderQuantity',
    '批量政策': 'batchPolicy',
    '批量周期（天）': 'batchCycle',
    '默认计划单位': 'defaultPlanUnit',
  };
  // 用于转化销售类属性名与属性值的字典
  salesDict = {
    '销售计划价格': 'planPrice',
    '计价货币': 'currency',
    '是否售价控制': 'isPriceCtr',
    '销售价格策略': 'priceStrategy',
    '销价下限率（%）': 'priceLowerLimitRate',
    '销售成本科目': 'costSubject',
    '默认客户': 'defaultClient',
    '销售地': 'location',
    '默认业务员': 'defaultSalesman',
    '默认销售单位': 'defaultUnit',
  };
  // 用于转化质量类属性名与属性值的字典
  qualityDict = {
    '检验方式': 'testMethod',
    '检验水准': 'testLevel',
    '检验程度': 'testDegree',
    '默认检验部门': 'defaultTestDep',
    '检验工时（时）': 'testHour',
    '存储期限（天）': 'storageLimit',
    '默认检验员': 'defaultTester',
    '检验标准文件': 'testStandFile',
  };
  // 用于转化财务类属性名与属性值的字典
  financeDict = {
    '财务类别': 'typeId',
    '记账本位币': 'recordCurrency',
    '会计科目': 'accountName',
    '增值税代码': 'vatCode',
    '存货计价方法': 'invCostMethod',
    '成本计算方法': 'costingMethod',
    '开票类型': 'billingType',
  };
}

export default new CtrPropDict();
