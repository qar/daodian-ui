<template>
  <food-menu class="dao-table-container"
             :rows="items">
  </food-menu>
</template>

<script>
/* eslint-disable */

const foods = [
  {
      "add_time": "2017-11-02 15:20:07",
      "description": "好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃好吃",
      "id": 1,
      "last_mod": "2017-11-02 15:20:07",
      "name": "青椒土豆丝",
      "picture": "/static/sample.jpg",
      "rate": 4.5,
      "rater_count": 100
  }
];

import foodsApi from '@/apis/food';

export default {
  name: 'MenuPage',
  data() {
    return {
      items: foods,
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
