import Vue from 'vue'
import Router from 'vue-router'

import usersPage from '../pages/users.vue'
import homePage from '../pages/home.vue'
import schedulesPage from '../components/scheduleList.vue'

Vue.use(Router)

const router = new Router ({
  root: '/home',
  routes: 
  [
    {
      path: '/users',
      name: 'users',
      component: usersPage
    },
    {
      path: '/home',
      name: 'home',
      component: homePage
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/schedules',
      name: 'schedules',
      component: schedulesPage
    }
  ]
})

export default router