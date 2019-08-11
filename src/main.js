import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueCookie from 'vue-cookie';
import Vuex from 'vuex';
import * as VueGoogleMaps from "vue2-google-maps";
import {router} from './router'
import {store} from './store';

Vue.use(Vuex)
Vue.use(VueCookie);
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyAxmY0Fhvq33tHM53f9ouS9ehJB08Fe7HM"
  }
});

Vue.config.productionTip = false

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
