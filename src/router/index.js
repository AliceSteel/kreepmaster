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

function wait(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration))
}

async function tryScrollToAnchor(hash, timeout = 1000, delay = 100) {
  while (timeout > 0) {
    const el = document.querySelector(hash)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      break
    }
    await wait(delay)
    timeout = timeout - delay
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: 'text-green-400',
  // eslint-disable-next-line no-unused-vars
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      tryScrollToAnchor(to.hash, 1000, 100)
      /* return {
        // el: document.getElementById('main'):
        el: to.hash,
        behavior: 'smooth'
      }*/
    } else {
      return {
        top: 0,
        behavior: 'smooth'
      }
    }
  }
})

export default router
