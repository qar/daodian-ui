import Vue from 'vue';

import LeftNav from '@/components/left-nav/left-nav.vue';
import FoodMenu from '@/components/food-menu/food-menu.vue';
import FoodCart from '@/components/food-cart/food-cart.vue';
import DailyFoodMenu from '@/components/daily-menu/daily-menu.vue';
import StatusBar from '@/components/status-bar/status-bar.vue';
import SlideablePanel from '@/components/slideable-panel/slideable-panel';

const components = {
  DailyFoodMenu,
  FoodMenu,
  FoodCart,
  LeftNav,
  StatusBar,
  SlideablePanel,
};

const registeredComponents = {};

Object.keys(components).forEach((key) => {
  registeredComponents[key] = Vue.component(key, components[key]);
});

export default registeredComponents;
