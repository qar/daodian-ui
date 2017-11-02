import Vue from 'vue';
import Router from 'vue-router';
import MenuPage from '@/pages/menu';
import NewItemPage from '@/pages/new';
import DailyPublishPage from '@/pages/daily';

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
      path: '/today',
      name: 'dailyPublish',
      component: DailyPublishPage,
    },

    {
      path: '*',
      redirect: {
        name: 'menu',
      },
    },
  ],
});
