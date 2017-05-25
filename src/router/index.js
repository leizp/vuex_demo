import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: index
    }, {
      path: '/actionsheet',
      name: 'ActionSheet',
      component: resolve => require(['@/components/actionsheet/detailList.vue'], resolve)
    },
    {path: '/', redirect: '/index'}
  ]
})
