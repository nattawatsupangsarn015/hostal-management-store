import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    showMenu: false
  },
  actions: {
    // 
  },
  mutations: {
    SHOW_MENU(state, options = {}) {
      if(options.show === 'show'){
        state.showMenu = true
      }
      else {
        state.showMenu = false
      }
    }
  }
})