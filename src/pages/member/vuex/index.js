import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

import Address from 'js/addressService.js'

const store = new Vuex.Store({
  state: {
    lists: null
  },
  mutations: {
    init(state, lists){
      state.lists = lists
    },
    add(state, instance) {
      state.lists.push(instance)
    },
    update(state, instance) {
      let lists = JSON.parse(JSON.stringify(state.lists))
      let index = lists.findIndex(item => {
        return item.id == instance.id
      })
      lists[index] = instance
      state.lists = lists
    },
    remove(state, id) {
      let lists = state.lists
      let index = lists.findIndex(item => {
        return item.id == id
      })
      
     lists.splice(index, 1)
    },
    setDefault(state, id) {
      let lists = state.lists
      lists.forEach(item => {
        item.isDefault = item.id == id ? true　: false
      })
    }
  },
  actions: {
    getLists({commit}) {
      Address.list().then(res => {
        commit('init', res.data.lists)
      })
    },
    addAction({commit}, instance){
      Address.add(instance).then(res => {
        commit('add', instance)
      })
    },
    updateAction({commit}, instance) {
      Address.update(instance).then(res => {
        commit('update', instance)
      })
    },
    removeAction({commit}, id) {
      Address.remove(id).then(res => {
        commit('remove', id)
      })
    },
    setDefaultAction({commit}, id) {
      Address.setDefault(id).then(res => {
        commit('setDefault', id)
      })
    }
  }
})

export default store