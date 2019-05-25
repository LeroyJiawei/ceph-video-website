import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import createLogger from 'vuex/dist/logger';
import infolist from './modules/infolist';
import categorymodify from './modules/categorymodify';
import purandstoreprop from './modules/purandstoreprop';
import planprop from './modules/planprop';
import salesprop from './modules/salesprop';
import qualityprop from './modules/qualityprop';
import financeprop from './modules/financeprop';
import baseinfo from './modules/baseinfo';
import unit from './modules/unit';
import materialinfo from './modules/materialinfo';
import skuinfo from './modules/skuinfo';

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

// store可以理解为一个容器，包含着应用中的state等
export default new Vuex.Store({
  state: {},
  getters,
  actions: actions,
  modules: {
    infolist,
    baseinfo,
    unit,
    materialinfo,
    skuinfo,
    categorymodify,
    purandstoreprop,
    planprop,
    salesprop,
    qualityprop,
    financeprop,
  },
  // strict: debug,
  plugins: [createLogger()]
})
