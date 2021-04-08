import Vue from 'vue'
import Router from 'vue-router'
import Products from '@/components/Products'
import ProductPage from '@/components/ProductPage'
import Login from '@/components/Login'
import Register from '@/components/Register'
import ForgetPassword from '@/components/ForgetPassword'
import userCreate from '@/pages/users/userCreate'
import userList from '@/pages/users/userList'
import userEdit from '@/pages/users/userEdit'
import ticketCreate from '@/pages/tickets/ticketCreate'
import ticketList from '@/pages/tickets/ticketList'
import deviceCreate from '@/pages/device/deviceCreate'
import deviceList from '@/pages/device/deviceList'
import categoriesCreate from '@/pages/categories/categoriesCreate'
import categoriesList from '@/pages/categories/categoriesList'
import Introduction from '@/pages/Introduction'
import Dashboard from '@/pages/dashboard'

import eventCreate from '@/pages/event/eventCreate'
import eventList from '@/pages/event/eventList'

import store from '@/store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/eventlist',
      name: 'eventlist',
      component: eventList
    },
    {
      path: '/introduction',
      name: 'introduction_page',
      component: Introduction
    },
    {
      path: '/eventcreate',
      name: 'eventcreate',
      component: eventCreate
    },
    {
      path: '/eventedit/:id',
      name: 'eventedit',
      component: eventCreate
    },
    {
      path: '/categorieslist',
      name: 'categorieslist',
      component: categoriesList
    },
    {
      path: '/categoriescreate',
      name: 'categoriescreate',
      component: categoriesCreate
    },
    {
      path: '/categoryedit/:id',
      name: 'category_Edit',
      component: categoriesCreate
    },
    {
      path: '/useredit/:id',
      name: 'useredit',
      component: userEdit
    },
    {
      path: '/usercreate',
      name: 'usercreate',
      component: userCreate
    },
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/userlist',
      name: 'userlist',
      component: userList
    },
    {
      path: '/ticketcreate',
      name: 'ticketcreate',
      component: ticketCreate
    },
    {
      path: '/ticketlist',
      name: 'ticketlist',
      component: ticketList
    },
    {
      path: '/ticketedit/:id',
      name: 'ticketedit',
      component: ticketCreate
    },
    {
      path: '/devicecreate',
      name: 'devicecreate',
      component: deviceCreate
    },
    {
      path: '/devicelist',
      name: 'devicelist',
      component: deviceList
    },
    {
      path: '/deviceedit/:id',
      name: 'deviceedit',
      component: deviceCreate
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.name === 'login' || to.name === 'register') {
    store.commit('LOGINUNSUCCESS')
    if (this.a.app.$session.exists()) {
      next({ name: 'dashboard' })
    }
    next({ name: 'dashboard' })
  } else if (to.name === 'introduction_page') {
    store.commit('LOGINUNSUCCESS')
  } else {
    store.dispatch(
      'ALREADYLOGGEDINFROMSESSIONS',
      this.a.app.$session.get('user')
    )
  }
  next()
})

export default router
