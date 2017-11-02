import Vue from 'vue';

import LeftNav from '@/components/left-nav/left-nav.vue';
import FoodMenu from '@/components/food-menu/food-menu.vue';
import StatusBar from '@/components/status-bar/status-bar.vue';

const components = {
  FoodMenu,
  LeftNav,
  StatusBar,
};

const registeredComponents = {};

Object.keys(components).forEach((key) => {
  registeredComponents[key] = Vue.component(key, components[key]);
});

export default registeredComponents;
