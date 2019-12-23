import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const state = {
  count:1
}

const getters = {}

const mutations = {
  add(state){
    console.log('+1')
    state.count +=1
  }
}

const actions = {}

const modules = {}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules
})
