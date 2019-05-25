import * as types from '../mutation-types';

const state = {
  // 质量属性数据
  qualifyInfos: {
    // 检验方式
    testMethod: '1',
    // 检验水准
    testLevel: '0',
    // 检验程度
    testDegree: '0',
    // 默认检验部门
    defaultTestDep: '0',
    // 检验工时
    testHour: '10',
    // 存储期限
    storageLimit: '10',
    // 默认检验员
    defaultTester: '李小四',
    // 检验标准文件
    testStandFile: 'FileA',
  },
  defaultQualifyInfos: {
    testMethod: '0',
    testLevel: '0',
    testDegree: '0',
    defaultTestDep: '0',
    testHour: '0',
    storageLimit: '0',
    defaultTester: '默认建研院',
    testStandFile: '默认文件',
  },
};

const getters = {
  qualifyInfos: state => state.qualifyInfos,
  defaultQualifyInfos: state => state.defaultQualifyInfos,
};

const actions = {
  // 清空财务属性
  clearQualifyInfos ({commit}) {
    var params = {
      testMethod: '0',
      testLevel: '0',
      testDegree: '0',
      defaultTestDep: '0',
      testHour: '0',
      storageLimit: '0',
      defaultTester: '默认建研院',
      testStandFile: '默认文件',
    }
    commit(types.QUALITY, params);
  }
};

const mutations = {
  [types.QUALITY](state, qualifyInfos) {
    state.qualifyInfos = qualifyInfos;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
