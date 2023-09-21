import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      props: {
        banner: {
          title: 'Find, connect, shape your Victoria',
          content: `
            Access grants and services, find out what's on in Victoria and have your say
            on government decisions.
          `
        }
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      props: {
        banner: {
          title: 'Here is a simple sub page',
          content: `
            Access grants and services, find out what's on in Victoria and have your say
            on government decisions.
          `
        }
      }
    }
  ]
})

export default router
