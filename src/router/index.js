import Vue from 'vue';
import Router from 'vue-router';
import MenuPage from '@/pages/menu';
import NewItemPage from '@/pages/new';
import DailyPublishPage from '@/pages/daily';
import TodayMenuPage from '@/pages/today-menu';
import MenuDetailPage from '@/pages/menu-detail';
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

    { // 今日菜单
      path: '/today-menu',
      name: 'todayMenu',
      component: TodayMenuPage,
    },

    { // 菜单详情
      path: '/menu-detail/:id',
      name: 'menuDetail',
      component: MenuDetailPage,
    },

    {
      path: '*',
      redirect: {
        name: 'menu',
      },
    },
  ],
});
