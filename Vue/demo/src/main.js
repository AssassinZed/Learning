// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/layout'
import IndexPage from './pages/index'
import DetailPage from './pages/detail'
import DetailCouPage from './pages/detail/count'
import DetailForPage from './pages/detail/forecast'
import DetailAnaPage from './pages/detail/analysis'
import DetailPubPage from './pages/detail/publish'

import VRouter from 'vue-router'
Vue.use(VRouter)
let router = new VRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: IndexPage,
    },
    {
      path: '/detail',
      component: DetailPage,
      redirect: './detail/count',
      children: [
        {
          path: 'count',
          component: DetailCouPage,
        },
        {
          path: 'forecast',
          component: DetailForPage,
        },
        {
          path: 'analysis',
          component: DetailAnaPage,
        },
        {
          path: 'publish',
          component: DetailPubPage,
        }        
      ]
    }
  ]
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { Layout },
  template: '<Layout/>'
})


