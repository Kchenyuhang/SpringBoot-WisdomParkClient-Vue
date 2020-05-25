import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Layout from '../views/Layout.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/feedback',
    name: 'Feedback',
    component: () => import('../views/person/Feedback.vue'),
  },
  {
    path: '/layout',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'Index',
        component: () => import('../views/main/Index.vue'),
      },
      {
        path: '/index',
        name: 'Index',
        component: () => import('../views/main/Index.vue'),
      },
      {
        path: '/addressbook',
        name: 'AddressBook',
        component: () => import('../views/main/AddressBook.vue'),
      },
      {
        path: '/information',
        name: 'Information',
        component: () => import('../views/main/Information.vue'),
      },
      {
        path: '/message',
        name: 'Message',
        component: () => import('../views/main/Message.vue'),
      },
      {
        path: '/my',
        name: 'My',
        component: () => import('../views/main/My.vue')
      }
    ]
  },
  {
    path: '/forget',
    name: 'Forget',
    component: () => import('../views/Forget.vue')
  }
]

const router = new VueRouter({
  routes,
})

export default router
