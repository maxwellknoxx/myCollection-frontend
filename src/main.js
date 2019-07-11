import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import VeeValidate from 'vee-validate'
import VueLogger from 'vuejs-logger'
import login from './components/login'
import home from './components/home'
import categories from './components/categories'
import signup from './components/signup'
import forgotPassword from './components/forgotPassword'
import resetPassword from './components/resetPassword'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(VeeValidate);

const options = {
  isEnabled: true,
  stringifyArguments: false,
  showLogLevel: true,
  showMethodName: true,
  separator: '|',
  showConsoleColors: true
};

Vue.use(VueLogger, options)

const routes = [

  { path: '/', component: home },
  { path: '/login', component: login },
  { path: '/home', component: home },
  { path: '/categories', component: categories },
  { path: '/signup', component: signup },
  { path: '/forgotPassword', component: forgotPassword },
  { path: '/resetPassword', component: resetPassword }

]


const router = new VueRouter({
  routes,
  mode: 'history'
})


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
