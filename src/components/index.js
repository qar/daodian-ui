import Vue from 'vue';

import Sidebar from '@/components/sidebar/sidebar';
import FoodMenu from '@/components/food-menu/food-menu.vue';
import StatusBar from '@/components/status-bar/status-bar.vue';

const components = {
  FoodMenu,
  Sidebar,
  StatusBar,
};

const registeredComponents = {};

Object.keys(components).forEach((key) => {
  registeredComponents[key] = Vue.component(key, components[key]);
});

export default registeredComponents;
