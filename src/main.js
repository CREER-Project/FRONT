import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

Vue.config.productionTip = false
Vue.use(axios)

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
