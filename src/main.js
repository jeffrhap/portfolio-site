import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import AOS from 'aos'
import 'aos/dist/aos.css'

import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/scss/main.scss'

// https://www.npmjs.com/package/vue-axios
Vue.use(VueAxios, axios)
Vue.use(AOS);
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
