import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'

import Header from '@/components/Header.vue'
import Content from "@/components/Content.vue"
import Contact from "@/components/Contact.vue"

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home, Header, Content, Contact
    },
    // {
    //   path: '/contact',
    //   name: 'contact',
    //   component: Contact
    // }
  ]
})
