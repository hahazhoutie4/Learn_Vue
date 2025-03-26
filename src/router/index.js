import Vue from 'vue'
import VueRouter from 'vue-router'
import LaborView from "@/views/engineer/LaborView.vue";
import FileView from "@/views/engineer/FileView.vue";
import MaterialView from "@/views/engineer/MaterialView.vue";
import ProServiceView from "@/views/engineer/ProServiceView.vue";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: LaborView
  },
  {
    path: '/labor',
    name: 'labor',
    component: LaborView
  },
  {
    path: '/proService',
    name: 'proService',
    component: ProServiceView
  },
  {
    path: '/material',
    name: 'material',
    component: MaterialView
  },
  {
    path: '/fileUpload',
    name: 'fileUpload',
    component: FileView
  }
]

const router = new VueRouter({
  routes
})

export default router
