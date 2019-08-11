import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import {router} from '../router'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    showMenu: false,
    showLoader: false,
    auth: null,
    accessToken: "",
    products: [],
    product: {}
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
            router.push('/')
          }, 500);
        }
      }
      catch (err) {
        setTimeout(() => {
          state.showLoader = false
          alert(err.response.data)
        }, 500);
      }
    },

    async FETCH_PRODUCTS(state) {
      try {
        const res = await axios.get('http://localhost:8080/api/backend/product')
        if(res.status === 200) {
          state.products = res.data
        }
      }
      catch(err) {
        setTimeout(() => {
          alert(err.response.data)
        }, 500);
      }
    },

    async FETCH_SINGLE_PRODUCT(state, options = {}) {
      try {
        const res = await axios.get('http://localhost:8080/api/backend/product/' + options.id)
        if(res.status === 200) {
          state.product = res.data
        }
      }
      catch(err) {
        setTimeout(() => {
          alert(err.response.data)
          router.push('/')
        }, 500);
      }
    },

    async FETCH_SEARCH_PRODUCT(state, options = {}) {
      state.showLoader = true
      try {
        const res = await axios.get('http://localhost:8080/api/backend/product/search/' + options.id)
        if(res.status === 200){
          setTimeout(() => {
            state.products = res.data
            state.showLoader = false
          }, 500);
        }
      }
      catch(err) {
        setTimeout(() => {
          alert(err.response.data)
          state.showLoader = false
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