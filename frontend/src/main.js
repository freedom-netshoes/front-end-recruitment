import Vue from 'vue'
import App from './App'
import VueAxios from 'vue-axios'
import axios from 'axios'
import store from './store/store'
import '../static/css/reset.css'
import '../static/css/hover-min.css'
import '../static/css/animate.css'

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  render: h => h(App)
})
