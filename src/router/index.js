import Vue from 'vue';
import Router from 'vue-router';
import MenuPage from '@/pages/menu';
import NewItemPage from '@/pages/new';
import DailyPublishPage from '@/pages/daily';
import TodayMenuPage from '@/pages/today-menu';
import HistoryMenuPage from '@/pages/history-menu';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/menu',
      name: 'menu',
      component: MenuPage,
    },

    {
      path: '/history',
      name: 'historyMenu',
      component: HistoryMenuPage,
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
      path: '/today-menu',
      name: 'todayMenu',
      component: TodayMenuPage,
    },

    {
      path: '*',
      redirect: {
        name: 'menu',
      },
    },
  ],
});
