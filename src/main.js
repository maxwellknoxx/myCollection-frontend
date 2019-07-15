import Vue from 'vue'
import Vuex from 'vuex'
import VeeValidate from 'vee-validate'
import VueLogger from 'vuejs-logger'
import { store } from './_store';
import { routesFile } from './_helpers'
import login from './components/login'
import home from './components/home'
import categories from './components/categories'
import signup from './components/signup'
import forgotPassword from './components/forgotPassword'
import resetPassword from './components/resetPassword'
import VueRouter from 'vue-router'
import App from './app/App';

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'main', component: home },
  {
    path: '/login', name: 'login', component: login,
    meta: {
      public: true,
      onlyWhenLoggedOut: true
    }
  },
  { path: '/home', name: 'home', component: home },
  { path: '/categories', name: 'categories', component: categories },
  { path: '/signup', name: 'signup', component: signup },
  { path: '/forgotPassword', name: 'forgotPassword', component: forgotPassword },
  { path: '/resetPassword', name: 'resetPassword', component: resetPassword },

  // otherwise redirect to home
  { path: '*', redirect: '/' }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

Vue.use(VeeValidate)

const options = {
  isEnabled: true,
  stringifyArguments: false,
  showLogLevel: true,
  showMethodName: true,
  separator: '|',
  showConsoleColors: true
};

Vue.use(VueLogger, options)

new Vue({
  render: h => h(App),
  el: '#app',
  router,
  routesFile,
  store,
}).$mount('#app')
