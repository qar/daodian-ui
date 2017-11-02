import Vue from 'vue';
import Router from 'vue-router';
import MenuPage from '@/pages/menu';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/menu',
      name: 'menu',
      component: MenuPage,
    },

    {
      path: '*',
      redirect: {
        name: 'menu',
      },
    },
  ],
});
