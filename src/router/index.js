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
        path: '/my',
        name: 'My',
        component: () => import('../views/main/My.vue'),
      },
    ],
  },
  {
    path: '/metrocard',
    name: 'MetroCard',
    component: () => import('../views/card/MetroCard.vue'),
  },
  {
    path: '/exam',
    name: 'Exam',
    component: () => import('../views/exam/Exam.vue'),
  },
  {
    path: '/base',
    name: 'Base',
    component: () => import('../views/person/Base.vue'),
  },
  {
    path: '/update',
    name: 'Update',
    component: () => import('../views/other/Update.vue'),
  },
  {
    path: '/gender',
    name: 'Gender',
    component: () => import('../views/other/Gender.vue'),
  },
  {
    path: '/address',
    name: 'Address',
    component: () => import('../views/other/Address.vue'),
  },
  {
    path: '/message',
    name: 'Message',
    component: () => import('../views/main/Message.vue'),
  },
]

const router = new VueRouter({
  routes,
})

export default router
