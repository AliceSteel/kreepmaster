import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    name: 'home',
    path: '/',
    component: HomeView
  },
  {
    name: 'about',
    path: '/about',
    component: () => import(/* webpackChunkName: "Music" */ '@/views/AboutView.vue')
  },
  {
    name: 'music',
    path: '/music',
    component: () => import(/* webpackChunkName: "Music" */ '@/views/MusicView.vue')
  },
  {
    path: '/:catchAll(.*)*',
    name: '404Page',
    component: () => import(/* webpackChunkName: "404" */ '@/views/404Page.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: 'text-green-400',
  // eslint-disable-next-line no-unused-vars
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        // el: document.getElementById('main'):
        el: to.hash,
        behavior: 'smooth'
      }
    } else {
      return {
        top: 0,
        behavior: 'smooth'
      }
    }
  }
})

export default router
