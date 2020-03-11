import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/pages/Login'
import Dashbd from '@/components/Dashbd'
import Products from '@/components/pages/Products'

Vue.use(Router)

export default new Router({

  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/admin',
      name: 'Dashbd',
      component: Dashbd,
      meta: { requiresAuth: true },
      children: [
        {
          path: 'products',
          name: 'Products',
          component: Products,
          meta: { requiresAuth: true }
        }
      ]
    },
  ]
})
