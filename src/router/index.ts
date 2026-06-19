import { createRouter, createWebHashHistory } from 'vue-router'
import { gamesRoutes } from './gamesRoutes'
import { appsRoutes } from './appsRoutes'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import DataDeletionRequestView from '../views/DataDeletionRequestView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    ...gamesRoutes,
    ...appsRoutes,
    {
      path: '/data-deletion-request',
      name: 'data-deletion-request',
      component: DataDeletionRequestView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    }
  ]
})

export default router
