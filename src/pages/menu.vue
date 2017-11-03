<template>
  <food-menu class="dao-table-container"
             @request-refresh="getFoods"
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
    this.getFoods();
  },

  methods: {
    getFoods() {
      foodsApi.getFoodsList()
        .then(foods => {
          this.items = foods;
        });
    }
  },
};
</script>
