/*
  路由器配置对象
 */

import Vue from 'vue'
import VueRouter from 'vue-router'

import MSite from '../pages/MSite/MSite'
import Search from '../pages/Search/Search'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'
import Login from '../pages/Login/Login'

//声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
  //所有路由
  routes: [
    {
      path: '/msite',
      component: MSite,
      meta: {
        showFooterGuide: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooterGuide: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooterGuide: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooterGuide: true
      }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      redirect: '/msite'
    }
  ]
})
