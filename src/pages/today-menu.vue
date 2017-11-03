<template>
  <menu-detail v-if="todayMenu" :menu="todayMenu"></menu-detail>
</template>

<script>
/* eslint-disable */
import foodsApi from '@/apis/food';

export default {
  name: 'MenuPage',
  data() {
    return {
      todayMenu: null,
    };
  },

  created() {
    foodsApi.todayMenu()
      .then(todayMenu => {
        this.todayMenu = todayMenu;
        console.log('DEBUG got today\' menu ', this.todayMenu);
      });
  },
};
</script>
