import Vue from 'vue'
import App from './App.vue'
import login from './components/login'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)

const routes = [

  {path: '/login', components: login}

]


const router = new VueRouter({
  routes,
  mode: 'history'
})


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
