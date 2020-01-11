import  Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router);
const home = () => import('views/home/home');
const cart = () => import('views/cart/cart');
const category = () => import('views/category/category');
const profile = () => import('views/profile/profile');
import  test from '../components/test'

const routes=[
  {path:'/test',component:test},
  {path:'/home',component:home},
  {path:'/cart',component:cart},
  {path:'/profile',component:profile},
  {path:'/category',component:category},

]
const router =new Router({
  routes,
  mode:'history'
})

export  default  router

