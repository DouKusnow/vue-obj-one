import Vue from 'vue'
import VueRouter from 'vue-router'


const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/category')
const Cart = () => import('../views/cart/cart')
const Profile = () => import('../views/profile/profile')

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
    {
    path:'',
    redirect:'/home'
    },
    {
    path:'/category',
    name:'Category',
    component:Category
    },{
    path:'/cart',
    name:'Cart',
    component:Cart
    },{
    path:'/profile',
    name:'Profile',
    component:Profile
    }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
