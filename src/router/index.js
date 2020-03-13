import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/iview/album'
import Detail from '@/iview/detail'

Vue.use(Router)
export default new Router({
  mode: "hash",
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
  ]
})
