// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import daoStyle from 'dao-style-package-vue';

import Noty from 'noty';
import 'noty/lib/noty.css';

import App from './App';
import router from './router';
import './components';

Noty.overrideDefaults({
  layout: 'topCenter',
  theme: 'relax',
  type: 'success',
  progressBar: false,
  closeWith: ['click', 'button'],
  animation: {
    open: 'animated fadeInDown',
    close: 'animated fadeOutUp',
  },
  timeout: 5000,
});
window.Noty = Noty;


Vue.config.productionTip = false;

Vue.use(daoStyle);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
