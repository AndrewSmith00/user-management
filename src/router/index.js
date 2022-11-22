import Vue from 'vue'
import VueRouter from 'vue-router'
import UsersList from '../views/UsersList.vue'
import User from '../views/SingleUser.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'UsersList',
    component: UsersList
  },
  {
    path: '/add',
    name: 'about',
    component: () => import('../views/AddUser.vue')
  },
  {
    path: '/:id', 
    component: User
  },
  {
    path: "*",
    component: { render: (h) => h("div", ["404! Page Not Found!"]) },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
