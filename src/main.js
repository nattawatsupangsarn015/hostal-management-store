import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueCookie from './plugins/cookie-vue';
import Vuex from 'vuex';
import {router} from './router'
import {store} from './store';

Vue.use(Vuex)

Vue.config.productionTip = false

new Vue({
  vuetify,
  VueCookie,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
