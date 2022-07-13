import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    page: 4
  },
  mutations: {
    setPage(state, pageNumber) {
      state.page = pageNumber
    }
  },
  actions: {
    updatePage({commit}, pageNumber) {
      commit('setPage', pageNumber)
    },
  }
})
