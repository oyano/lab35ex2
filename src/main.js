import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueResourceEsm from "vue-resource";

Vue.use(VueResourceEsm)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
