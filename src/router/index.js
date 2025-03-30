import Vue from 'vue'
import VueRouter from 'vue-router'
import LaborView from "@/views/engineer/Multi/LaborView.vue";
import FileView from "@/views/engineer/Multi/FileView.vue";
import MaterialView from "@/views/engineer/Multi/MaterialView.vue";
import ProServiceView from "@/views/engineer/Multi/ProServiceView.vue";
import LoginView from "@/views/login/LoginView.vue";
import EmpView from "@/views/engineer/EmpView.vue";
import QrcodeView from "@/views/engineer/Multi/QrcodeView.vue";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },{
    path: '/emp',
    name: 'emp',
    component: EmpView,
    children:[
      {
        path: 'labor',
        name: 'labor',
        component: LaborView
      },
      {
        path: 'proService',
        name: 'proService',
        component: ProServiceView
      },
      {
        path: 'material',
        name: 'material',
        component: MaterialView
      },
      {
        path: 'fileUpload',
        name: 'fileUpload',
        component: FileView
      },
      {
        path: 'qrcode',
        name: 'qrcode',
        component: QrcodeView
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
