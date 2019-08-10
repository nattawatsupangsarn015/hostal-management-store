import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    showMenu: false,
    showLoader: false,
    auth: null,
    accessToken: ""
  },
  
  mutations: {
    setAuth(state, auth) {
      state.auth = auth
    },

    SHOW_MENU(state, options = {}) {
      if(options.show === 'show'){
        state.showMenu = true
      }
      else {
        state.showMenu = false
      }
    },

    LOGOUT_USER(state) {
      state.showLoader = true
      setTimeout(() => { 
        state.showLoader = false
        state.showMenu = false
        state.accessToken = ""
        alert('Logout success!')
      }, 500);
    },

    async LOGIN_USER(state, options = {}) {
      state.showLoader = true
      try {
        const res = await axios.post('http://localhost:8080/api/backend/login', options.data)
        if(res.status === 200) {
          setTimeout(() => { 
            state.showLoader = false 
            state.showMenu = false
            state.accessToken = res.data
            alert('Login success!')
          }, 500);
        }
      }
      catch (err) {
        setTimeout(() => { 
          alert("Your username or password is incorrect")
          state.showLoader = false 
        }, 500);
      }
    },

    async REGISTER_USER(state, options = {}) {
      state.showLoader = true
      try {
        const res = await axios.post('http://localhost:8080/api/backend/register', options)
        if(res.status === 201) {
          setTimeout(() => { 
            state.showLoader = false
            alert('Register success!')
            $router.go(-1)
          }, 500);
        }
      }
      catch (err) {
        setTimeout(() => {
          state.showLoader = false
          alert(err.response.data)
        }, 500);
      }
    }
  },

  actions: {
    setAuth({ commit }, auth) {
      if(auth){
        commit('setAuth', auth)
      }
      else {
        commit('setAuth', null)
      }
    }
  },
})