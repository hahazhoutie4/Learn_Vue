import Vue from 'vue'
import App from './App.vue'
// 引入element ui
import ElementUI from 'element-ui'
import { Table,TableColumn } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
// 导入router路由
import router from './router'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Table)
Vue.use(TableColumn)

Vue.prototype.originhref = window.location.origin

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')