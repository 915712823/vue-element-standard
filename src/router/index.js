import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/Home',
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home,
    meta: {
      isFooterHide: false,
      isHeaderHide: false
    }
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import( /* webpackChunkName: "about" */ '@/views/Login.vue'),
    meta: {
      isFooterHide: true,
      isHeaderHide: true
    },
  }
]

const router = new VueRouter({
  routes
})

export default router
