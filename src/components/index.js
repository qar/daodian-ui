import Vue from 'vue';

import EmptyState from '@/components/empty-state/empty-state';
import LeftNav from '@/components/left-nav/left-nav.vue';
import FoodMenu from '@/components/food-menu/food-menu.vue';
import FoodCart from '@/components/food-cart/food-cart.vue';
import DailyFoodMenu from '@/components/daily-menu/daily-menu.vue';
import MenuDetail from '@/components/menu-detail/menu-detail.vue';
import MenuList from '@/components/menu-list/menu-list.vue';
import StatusBar from '@/components/status-bar/status-bar.vue';
import SlideablePanel from '@/components/slideable-panel/slideable-panel';

const components = {
  EmptyState,
  DailyFoodMenu,
  FoodMenu,
  FoodCart,
  LeftNav,
  MenuDetail,
  MenuList,
  StatusBar,
  SlideablePanel,
};

const registeredComponents = {};

Object.keys(components).forEach((key) => {
  registeredComponents[key] = Vue.component(key, components[key]);
});

export default registeredComponents;
