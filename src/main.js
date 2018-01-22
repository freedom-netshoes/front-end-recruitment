import Vue from 'vue'
import App from './App'
import storeConfig from './store'
import Vuex from 'vuex'
import Notifications from 'vue-notification'

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
