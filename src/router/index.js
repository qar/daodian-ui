import Vue from 'vue';
import Router from 'vue-router';
import MenuPage from '@/pages/menu';
import NewItemPage from '@/pages/new';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/menu',
      name: 'menu',
      component: MenuPage,
    },

    {
      path: '/new',
      name: 'newItem',
      component: NewItemPage,
    },

    {
      path: '*',
      redirect: {
        name: 'menu',
      },
    },
  ],
});
