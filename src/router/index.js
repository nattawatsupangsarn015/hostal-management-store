import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '@/components/index'
import Login from '@/components/Login/Login'
import Register from '@/components/Register/Register'
import Booking from '@/components/Booking/Booking'
import Product from '@/components/Product/Product'

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
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/booking',
      name: 'Booking',
      component: Booking
    },
    {
      path: '/product',
      name: 'Product',
      component: Product
    },
    {
      path: '/product/:id',
      name: 'Product',
      component: Product
    }
  ]
})