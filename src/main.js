import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import i18n from './i18n'
import vSelect from 'vue-select'
import store from './store/store'

Vue.config.productionTip = false

Vue.component('v-select', vSelect)

Vue.use(Vuex)

new Vue({
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')
