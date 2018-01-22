// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import storeConfig from './store'
import Vuex from 'vuex'
import Notifications from 'vue-notification'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(Notifications)

const store = new Vuex.Store(storeConfig)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>'
})
