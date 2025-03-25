import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/labor',
    name: 'labor',
    component: () => import(/* webpackChunkName: "about" */ '@/views/engineer/LaborView.vue')
  },
  {
    path: '/proService',
    name: 'proService',
    component: () => import(/* webpackChunkName: "about" */ '@/views/engineer/ProServiceView.vue')
  },
  {
    path: '/material',
    name: 'material',
    component: () => import(/* webpackChunkName: "about" */ '@/views/engineer/MaterialView.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
