import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    page: 2,
    allData: {},
  },
  mutations: {
    setPage(state, pageNumber) {
      state.page = pageNumber
    },
    setData(state, data) {
      state.data = data
    }
  },
  actions: {
    updatePage({commit}, pageNumber) {
      commit('setPage', pageNumber)
    },
    updateAllData({commit}, data) {
      commit('setData', data)
    },
  }
})
