import CommonApi from '@/api/commonApis';
import CtrPropDict from '@/api/ctrpropdict';
class CtrPropFunc {
  // 处理返回值中采购与库存属性的函数
  handlePurchaseAndStoreInfos = (purchaseAndStoreInfos) => {
    var result = {};
    var valueList = purchaseAndStoreInfos.map(ele => ele.propertyValue);
    var keyList = CommonApi.getArrOfKeyOrValue(CtrPropDict.purchaseAndStoreDict, 0);
    var nameList = CommonApi.keysToValues(CtrPropDict.purchaseAndStoreDict, keyList);
    for (let element in nameList) {
      result[nameList[element]] = valueList[element];
      if (nameList[element] === 'isBatchManage' ||
        nameList[element] === 'isPurchasePriceCtr' ||
        nameList[element] === 'isSingleManage') {
        result[nameList[element]] = valueList[element] === 'true' ? true : false;
      }
      if (nameList[element] === 'cycleCountCode') {
        result[nameList[element]] = parseInt(valueList[element]);
      }
    }
    return result;
  };
  // 处理返回值中计划类属性的函数
  handlePlanInfos = (planInfos) => {
    var result = {};
    var valueList = planInfos.map(ele => ele.propertyValue);
    var keyList = CommonApi.getArrOfKeyOrValue(CtrPropDict.planDict, 0);
    var nameList = CommonApi.keysToValues(CtrPropDict.planDict, keyList);
    for (let element in nameList) {
      result[nameList[element]] = valueList[element];
      if (nameList[element] === 'isIndependenceNeed') {
        result[nameList[element]] = valueList[element] === 'true' ? true : false;
      }
      if (nameList[element] === 'orderLeadTime' ||
        nameList[element] === 'replenishCycle' ||
        nameList[element] === 'maxInventory' ||
        nameList[element] === 'safeInventory' ||
        nameList[element] === 'batchCycle') {
        result[nameList[element]] = parseInt(valueList[element]);
      }
    }
    return result;
  };
  // 处理返回值中销售类属性的函数
  handleSalesInfos = (salesInfos) => {
    var result = {};
    var valueList = salesInfos.map(ele => ele.propertyValue);
    var keyList = CommonApi.getArrOfKeyOrValue(CtrPropDict.salesDict, 0);
    var nameList = CommonApi.keysToValues(CtrPropDict.salesDict, keyList);
    for (let element in nameList) {
      result[nameList[element]] = valueList[element];
      if (nameList[element] === 'isPriceCtr') {
        result[nameList[element]] = valueList[element] === 'true' ? true : false;
      }
      if (nameList[element] === 'planPrice' ||
        nameList[element] === 'priceLowerLimitRate') {
        result[nameList[element]] = parseInt(valueList[element]);
      }
    }
    return result;
  };
  // 处理返回值中质量类属性的函数
  handleQualityInfos = (qualityInfos) => {
    var result = {};
    var valueList = qualityInfos.map(ele => ele.propertyValue);
    var keyList = CommonApi.getArrOfKeyOrValue(CtrPropDict.qualityDict, 0);
    var nameList = CommonApi.keysToValues(CtrPropDict.qualityDict, keyList);
    for (let element in nameList) {
      result[nameList[element]] = valueList[element];
    }
    return result;
  };
  // 处理返回值中财务类属性的函数
  handleFinanceInfos = (financeInfos) => {
    var result = {};
    var valueList = financeInfos.map(ele => ele.propertyValue);
    var keyList = CommonApi.getArrOfKeyOrValue(CtrPropDict.financeDict, 0);
    var nameList = CommonApi.keysToValues(CtrPropDict.financeDict, keyList);
    for (let element in nameList) {
      result[nameList[element]] = valueList[element];
    }
    return result;
  };
  collectCtrProps = (_ctrProps) => {
    let ctrProps = Object.assign([], _ctrProps);
    let resultArr = [];
    for (let key in ctrProps) {
      resultArr.push(ctrProps[key].toString());
    }
    return resultArr;
  };
  collectCtrPropsWithType = (_ctrProps, type) => {
    let ctrProps = Object.assign([], _ctrProps);
    ctrProps = this.collectCtrProps(ctrProps);
    var keyList = [];
    var result = {
      propertyType: type,
      ctrPropList: [],
    };
    switch (type) {
      case 5:
        keyList = CommonApi.getArrOfKeyOrValue(CtrPropDict.purchaseAndStoreDict, 1);
        keyList = CommonApi.valuesToKeys(CtrPropDict.purchaseAndStoreDict, keyList);
        break;
      case 6:
        keyList = CommonApi.getArrOfKeyOrValue(CtrPropDict.planDict, 1);
        keyList = CommonApi.valuesToKeys(CtrPropDict.planDict, keyList);
        break;
      case 7:
        keyList = CommonApi.getArrOfKeyOrValue(CtrPropDict.salesDict, 1);
        keyList = CommonApi.valuesToKeys(CtrPropDict.salesDict, keyList);
        break;
      case 8:
        keyList = CommonApi.getArrOfKeyOrValue(CtrPropDict.qualityDict, 1);
        keyList = CommonApi.valuesToKeys(CtrPropDict.qualityDict, keyList);
        break;
      case 9:
        keyList = CommonApi.getArrOfKeyOrValue(CtrPropDict.financeDict, 1);
        keyList = CommonApi.valuesToKeys(CtrPropDict.financeDict, keyList);
        break;
      default:
        break;
    };
    for (let index in ctrProps) {
      result.ctrPropList.push({
        name: keyList[index],
        value: ctrProps[index].toString(),
      });
    }
    return result;
  };
  collectCtrPropsWithTypeForBase = (_ctrProps, type) => {
    let ctrProps = Object.assign([], _ctrProps);
    let result = [];
    let ctrPropType = this.collectCtrPropsWithType(ctrProps, type);
    result = result.concat(ctrPropType.ctrPropList);
    return result;
  };
}
export default new CtrPropFunc();
