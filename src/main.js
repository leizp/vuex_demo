// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import index from './views/index'
import { AjaxPlugin } from 'vux'
import store from 'vuex'

Vue.use(VueRouter)
Vue.use(AjaxPlugin)

const routes = [{
  path: '/',
  component: index
}, {
  path: '/home',
  name: 'home',
  component: resolve => require(['@/views/home.vue'], resolve)
}, {
  path: '/other',
  name: 'other',
  component: resolve => require(['@/views/other.vue'], resolve)
}]

const router = new VueRouter({
  routes
})

router.afterEach(function (to) {
  if (window.ga) {
    window.ga('set', 'page', to.fullPath) // 你可能想根据请求参数添加其他参数，可以修改这里的 to.fullPath
    window.ga('send', 'pageview')
  }
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
