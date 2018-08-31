import Vue from 'vue'
import App from './App.vue'
import Router from "./router.config";
import SRC from "./directives/src"

import './css/font.css'
import './css/normalize.css'
import './css/base.css'
import 'element-ui/lib/theme-chalk/index.css'

//注入v-src指令
Vue.use(SRC, {
  lazy: true
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: Router
}).$mount('#app')
