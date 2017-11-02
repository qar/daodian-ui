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

export default {
  name: 'MenuPage',
  data() {
    return {
      items: [foodItem, foodItem, foodItem, foodItem, foodItem, foodItem, foodItem, foodItem, foodItem, foodItem, foodItem, foodItem, foodItem, foodItem, foodItem, foodItem, foodItem, foodItem, foodItem, foodItem, foodItem, foodItem, foodItem, foodItem, foodItem, foodItem, foodItem, foodItem, foodItem, foodItem, foodItem, foodItem, foodItem, foodItem, foodItem, foodItem, foodItem, foodItem, foodItem, foodItem ],
    };
  },
};
</script>
