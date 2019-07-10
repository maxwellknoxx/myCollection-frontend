import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import VueLogger from 'vuejs-logger';
import login from './components/login'
import main from './components/main'
import signup from './components/signup'
import forgotPassword from './components/forgotPassword'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)

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

  { path: '/login', component: login },
  { path: '/main', component: main },
  { path: '/signup', component: signup },
  { path: '/forgotPassword', component: forgotPassword }

]


const router = new VueRouter({
  routes,
  mode: 'history'
})


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
