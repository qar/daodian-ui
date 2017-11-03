<template>
  <menu-detail v-if="menuDetail" :menu="menuDetail"></menu-detail>
</template>

<script>
/* eslint-disable */
import menusApi from '@/apis/menu';

export default {
  name: 'MenuDetailPage',
  data() {
    return {
      menuDetail: null,
    };
  },

  created() {
    menusApi.getMenuDetail(1)
      .then(menu => {
        this.menuDetail = menu;
      });
  },
};
</script>
