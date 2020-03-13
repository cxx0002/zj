// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/style/base.css'
import Bridge from "@/utils/bridge.js";
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// import 'lib-flexible/flexible'
Vue.use(MintUI)
Vue.prototype.$bridge = Bridge
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
