<template>
  <food-menu class="dao-table-container"
             :rows="items">
  </food-menu>
</template>

<script>
/* eslint-disable */
const foodItem = {
  img: '',
  name: '',
  desc: '',
  rating: '',
};

import foodsApi from '@/apis/food';

export default {
  name: 'MenuPage',
  data() {
    return {
      items: [foodItem, foodItem, foodItem, foodItem, foodItem, foodItem, foodItem, foodItem, foodItem, foodItem, foodItem, foodItem, foodItem, foodItem, foodItem, foodItem, foodItem, foodItem, foodItem, foodItem, foodItem, foodItem, foodItem, foodItem, foodItem, foodItem, foodItem, foodItem, foodItem, foodItem, foodItem, foodItem, foodItem, foodItem, foodItem, foodItem, foodItem, foodItem, foodItem, foodItem ],
    };
  },

  created() {
    console.log('DEBUG on created event');
    foodsApi.getFoodsList()
      .then(foods => {
        console.log('DEBUG got foods', foods);
      });
  },
};
</script>
