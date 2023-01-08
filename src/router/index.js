import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ExperienceView from '../views/ExperienceView.vue'
import WorkView from '../views/WorkView.vue'
import WatchView from '../views/WatchView.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/experience',
    name: 'experience',
    component: ExperienceView,
  },
  {
    path: '/work',
    name: 'work',
    component: WorkView,
  },
  {
    path: '/watch',
    name: 'watch',
    component: WatchView,
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
