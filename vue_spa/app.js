import Vue from 'vue'
import VueRouter  from 'vue-router'
import store from './store'
import routes from './route'
import App from './app.vue'
import './assets/scss/common.scss'

Vue.use(VueRouter)

new Vue({
  el: "#app",
  store,
  router: new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
    }
  }),
  render: h => h(App)
})
