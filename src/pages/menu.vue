<template>
  <food-menu class="dao-table-container"
             :rows="items" v-if="items">
  </food-menu>
</template>

<script>
/* eslint-disable */
import foodsApi from '@/apis/food';

export default {
  name: 'MenuPage',
  data() {
    return {
      items: null,
    };
  },

  created() {
    foodsApi.getFoodsList()
      .then(foods => {
        this.items = foods;
        console.debug('Got foods list', this.items);
      });
  },
};
</script>
