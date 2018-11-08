import Vue from 'vue'
import Vuex from 'vuex'

import user from './module/user'
import app from './module/app'
import ConsultGrid from './module/consult-grid'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //
  },
  mutations: {
    //
  },
  actions: {
    //
  },
  modules: {
    user,
    app,
    ConsultGrid
  }
})
