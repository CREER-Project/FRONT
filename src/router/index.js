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
    path: '/lives/:id',
    name: 'lives',
    component: function () {
      return import('../views/LiveView.vue')
    }
  },
  {
    path: '/studio',
    name: 'studio',
    component: function () {
      return import('../views/StudioView.vue')
    }
  },
  {
    path: '/create',
    name: 'create',
    component: function () {
      return import('../views/CreateView.vue')
    }
  },
  {
    path: '/manage',
    name: 'manage',
    component: function () {
      return import('../views/ManageView.vue')
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
