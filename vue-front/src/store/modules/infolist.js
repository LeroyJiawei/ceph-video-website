import * as types from '../mutation-types'
import CommonApi from '@/api/commonApis.js'

const state = {
  baseInfoData: [],
  baseInfoDataAll: [],
  curBaseInfo: {
    spuCode: '',
    isNew: false,
  },
  pageSize: 10,
  pageNum: 1,
};

const getters = {
  baseInfoData: state => state.baseInfoData,
  baseInfoDataAll: state => state.baseInfoDataAll,
  curBaseInfo: state => state.curBaseInfo,
  pageSize: state => state.pageSize,
  pageNum: state => state.pageNum,
};

const actions = {
  generateBaseInfoData ({commit}, {resp}) {
    var baseInfoArr = [];
    for (let idx in resp.baseResult) {
      var param = {
        spuCode: resp.baseResult[idx].spuCode,
        spuName: resp.baseResult[idx].spuName,
        materialCat: resp.catResult[idx].name,
        designCode: resp.baseResult[idx].designCode,
        designVersion: resp.baseResult[idx].designVersion,
        source: resp.baseResult[idx].source,
        defaultUnit: resp.unitResult[idx].name,
        description: resp.baseResult[idx].description,
        note: resp.baseResult[idx].note,
      }
      baseInfoArr.push(param);
    }
    commit('list-table', baseInfoArr);
    commit('list-table-all', baseInfoArr);
  },
  getAllBaseInfoData ({dispatch}, {axios, main}) {
    axios
      .get(`${window.$config.HOST}/materialmanagement/getAllBaseInfo`)
      .then(response => {
        let resp = response.data;
        if (resp.errCode === -1) {
          main.$message({
            message: '获取物料信息列表时发生错误！',
            type: 'error',
            showClose: true,
          });
        } else {
          main.$message({
            message: '获取物料信息列表成功！',
            type: 'success',
            showClose: true,
          });
          dispatch('generateBaseInfoData', {
            resp: resp.result,
          });
        }
      })
      .catch(error => {
        CommonApi.handleError(error, main, '在获取物料信息列表时发生错误，错误为：');
      })
  },
  getBaseInfoDataWithParams ({dispatch}, {axios, main, param}) {
    axios
      .get(`${window.$config.HOST}/materialmanagement/getBaseInfo`,
        {
          params: param,
          paramsSerializer: CommonApi.paramsSerializer,
        }
      )
      .then(response => {
        let resp = response.data;
        if (resp.errCode === -1) {
          main.$message({
            message: '获取物料信息列表时发生错误！',
            type: 'error',
            showClose: true,
          });
        } else {
          main.$message({
            message: '获取物料信息列表成功！',
            type: 'success',
            showClose: true,
          });
          dispatch('generateBaseInfoData', {
            resp: resp.result,
          });
        }
      })
      .catch(error => {
        CommonApi.handleError(error, main, '在获取物料信息列表时发生错误，错误为：');
      })
  },
  setBaseInfoWithPages ({commit}, {pageSize, pageNum}) {
    var baseInfo = Object.assign([], state.baseInfoDataAll);
    baseInfo = baseInfo.slice(pageSize * (pageNum - 1), pageSize * pageNum);
    commit('list-table', baseInfo);
  }
};

const mutations = {
  [types.LIST_TABLE](state, baseInfoData) {
    state.baseInfoData = baseInfoData;
  },
  [types.LIST_CUR_INFO] (state, curBaseInfo) {
    state.curBaseInfo = curBaseInfo;
  },
  [types.LIST_TABLE_ALL] (state, baseInfoDataAll) {
    state.baseInfoDataAll = baseInfoDataAll;
  },
  [types.LIST_PAGE_SIZE] (state, pageSize) {
    state.pageSize = pageSize;
  },
  [types.LIST_PAGE_NUM] (state, pageNum) {
    state.pageNum = pageNum;
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
