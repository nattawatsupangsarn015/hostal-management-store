import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '@/components/index'
import Login from '@/components/Login/Login'

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
      }
  ]
})