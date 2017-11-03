<template>
  <menu-list class="dao-table-container"
             :rows="items"
             v-if="items">
  </menu-list>
</template>

<script>
/* eslint-disable */
import menusApi from '@/apis/menu';

export default {
  name: 'MenuPage',
  data() {
    return {
      items: null,
    };
  },

  created() {
    menusApi.getMenus()
      .then((menus) => {
        this.items = menus;
      });
  },
};
</script>
