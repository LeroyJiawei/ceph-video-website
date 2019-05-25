import * as types from '../mutation-types'

const state = {
  baseInfos: {
    // spu编码
    spuCode: '',
    // spu名称
    spuName: '',
    // 物料类型
    type: '',
    // 物料分类
    materialCatId: 1,
    // 来源
    // source: '',
    // 用途
    usage: '',
    // 设计图号
    designCode: '',
    // 设计版次
    designVersion: '',
    // 助记码
    mnemonic: '',
    // 物料描述
    description: '',
    // 备注
    note: '',
  },
  catOptions: [],
  unitOptions: [],
};

const getters = {
  baseInfos: state => state.baseInfos,
  catOptions: state => state.catOptions,
  unitOptions: state => state.unitOptions,
};

const actions = {
  // 使baseInfo设为初始值
  clearBaseInfo ({commit}) {
    var param = {
      spuCode: '',
      spuName: '',
      type: '',
      materialCatId: 1,
      // source: '',
      usage: '',
      designCode: '',
      designVersion: '',
      mnemonic: '',
      description: '',
      note: '',
    };
    commit(types.INFO_BASE_INFO_MODIFY, param);
  }
};

const mutations = {
  [types.INFO_BASE_INFO_MODIFY] (state, baseInfos) {
    state.baseInfos = baseInfos;
  },
  [types.INFO_UNIT_OPT_ARR] (state, unitOptions) {
    state.unitOptions = unitOptions;
  },
  [types.INFO_CAT_OPT_ARR] (state, catOptions) {
    state.catOptions = catOptions;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
