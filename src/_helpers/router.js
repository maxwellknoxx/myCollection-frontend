import Vue from 'vue';
import Router from 'vue-router';

import login from '../components/login'
import home from '../components/home'
import categories from '../components/categories'
import category from '../components/category'
import item from '../components/item'
import publish from '../components/publish'
import signup from '../components/signup'
import forgotPassword from '../components/forgotPassword'
import resetPassword from '../components/resetPassword'

Vue.use(Router);

export const router = new Router({
    mode: 'history',
    routes: [
        { path: '/', name: 'main', component: home },
        { path: '/login', name: 'login', component: login },
        { path: '/home', name: 'home', component: home },
        { path: '/categories', name: 'categories', component: categories },
        { path: '/category/:data', name: 'category', component: category },
        { path: '/item/:data', name: 'item', component: item },
        { path: '/publish', name: 'publish', component: publish },
        { path: '/signup', name: 'signup', component: signup },
        { path: '/forgotPassword', name: 'forgotPassword', component: forgotPassword },
        { path: '/resetPassword', name: 'resetPassword', component: resetPassword },

        // otherwise redirect to home
        { path: '*', redirect: '/' }
    ]
});

router.beforeEach((to, from, next) => {
    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ['/login', '/signup', '/forgotPassword', '/', '/home'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');
  
    if (authRequired && !loggedIn) {
      return next('/login');
    }
  
    next();
  })