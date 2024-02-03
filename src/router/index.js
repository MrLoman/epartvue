import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SingleProductView from '../views/SingleProductView.vue'
import WinkelmandView from '../views/WinkelmandView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/product/:id',
    name: 'Single',
    component: SingleProductView,
    props:true,
  },
  {
    path: '/winkelmand',
    name: 'winkelmand',
    component: WinkelmandView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
