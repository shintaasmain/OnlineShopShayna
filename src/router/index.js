import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView from '../views/ProductView.vue'
import ShoppingCart from '../views/ShoppingCart.vue'
import SuccessPage from '../views/SuccessPage.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  // Register untuk halaman product
  {
    path: '/product',
    name: 'ProductView',
    component: ProductView
  },
  // Register untuk halaman Shopping Cart
  {
    path: '/cart',
    name: 'ShoppingCart',
    component: ShoppingCart
  },
  // Register untuk halaman Shopping Cart
  {
    path: '/success',
    name: 'SuccessPage',
    component: SuccessPage
  },
]

const router = new VueRouter({
  routes
})

export default router
