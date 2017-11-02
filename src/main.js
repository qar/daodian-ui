// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import daoStyle from 'dao-style-package-vue';

import App from './App';
import Sidebar from './components/Sidebar';
import FoodMenu from './components/food-menu/food-menu.vue';
import StatusBar from './components/status-bar/status-bar.vue';
import router from './router';

Vue.component('Sidebar', Sidebar);
Vue.component('FoodMenu', FoodMenu);
Vue.component('StatusBar', StatusBar);

Vue.config.productionTip = false;

Vue.use(daoStyle);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App, Sidebar },
});
