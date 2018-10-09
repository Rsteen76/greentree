import Vue from 'vue'
import Router from 'vue-router'

import usersPage from '../pages/users.vue'
import adminPage from '../pages/admin.vue'
import homePage from '../pages/home.vue'
import greenTree from '../pages/greentree.vue'
import schedulesPage from '../components/scheduleList.vue'

Vue.use(Router)

const router = new Router ({
  root: '/',
  component: greenTree,
  routes: [

    { 
      path: '/admin',
      name: 'admin',
      component: adminPage,
    
    children: [
    {
      path: '/users',
      name: 'users',
      component: usersPage,
    },
    {
      path: '/home',
      name: 'home',
      component: homePage,
    },
    {
      path: '/schedules',
      name: 'schedules',
      component: schedulesPage
    }
  ]}

})

export default router