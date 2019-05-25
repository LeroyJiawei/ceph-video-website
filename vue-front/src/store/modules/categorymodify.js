import * as types from '../mutation-types'

const state = {
  // 物料分类信息树
  categoryTree: [
    {
      label: '物料分类',
      children: [{
        label: '原料',
        children: [{
          label: '面料'
        },{
          label:'辅料'
        }],
      },
      {
          label:'包装材料',
          children: [{
          label: '包装材料1'
        },{
          label:'包装材料2'
        }]
      },
      {
          label:'成品',
          children: [{
          label: '成品1'
        },{
          label:'成品2'
        }]
      }]
    },
    {
      label: '一级 2',
      children: [{
        label: '二级 2-1',
        children: [{
        label: '三级 2-1-1'
        }]
      }, {
        label: '二级 2-2',
        children: [{
        label: '三级 2-2-1'
        }]
      }]
    },
  ],
  // 基本信息的数据
  catInfo: {
    // 分类编码
    code: '',
    // 分类名称
    name: '',
    // 物料类别
    type: 0,
    // 物料分类id
    id: 0,
    // 父节点id
    parentId: 0,
  },
  // 物料属性定义的数据
  basePropList: [
    {
      // 属性类别
      type: 1,
      // 属性标签
      label: '标签一',
      // 属性名
      name: '属性一',
      // 取值范围类型
      valueRangeType: 1,
      // 取值范围
      valueRange: {
        min: 10,
        max: 20,
      },
      // 排序号
      sort: 0,
    },
  ],
  // 当前标签页号
  curTab: 'basePropDefs',
  // 是否点击过分类树
  hasClickedTree: true,
};

const getters = {
  categoryTree: state => state.categoryTree,
  catInfo: state => state.catInfo,
  basePropList: state => state.basePropList,
  curTab: state => state.curTab,
  hasClickedTree: state => state.hasClickedTree,
};

const actions = {
  // 获取物料分类信息树的函数
  getCatTree ({commit}, {url, axios, type, main}) {
    axios
      .get(url)
      .then(response => {
        console.log(`getCategoryTree response`, response);
        commit(type, response.data);
      })
      .catch(error => {
        console.log(`getCategoryTree error`, error, error.response);
        if (error && error.response) {
          console.log('error.response.data', error.response.data);
          console.log('error.response.status', error.response.status);
          console.log('error.response.headers', error.response.headers);
          main.$message.error("在获取物料分类信息的过程中发生错误，错误为：" + error.status);
        } else {
          console.log(`error.request`, error.request);
          console.log('error.message', error.message);
          main.$message.error("在获取物料分类信息的过程中发生错误，错误为：" + error.message);
        }
        console.log(`error.config`, error.config);
      });
  },
  // 清空物料属性定义
  clearBasePropList ({commit}) {
    var param = [];
    commit(types.CAT_BASE_PROP, param);
  }
};

const mutations = {
  [types.CAT_TREE] (state, categoryTree) {
    state.categoryTree = categoryTree;
  },
  [types.CAT_INFO] (state, catInfo) {
    state.catInfo = catInfo;
  },
  [types.CAT_BASE_PROP] (state, basePropList) {
    state.basePropList = basePropList;
  },
  [types.CAT_CUR_TAB] (state, curTab) {
    state.curTab = curTab;
  },
  [types.CAT_HAS_CLICKED_TREE] (state, hasClickedTree) {
    state.hasClickedTree = hasClickedTree;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
