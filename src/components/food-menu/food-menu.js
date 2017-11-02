/* eslint-disable no-console */
import List from '@/components/list/list';

export default {
  name: 'FoodMenu',
  props: ['rows'],

  extends: List,

  data() {
    return {
      showFoodCart: false,
      selectedItems: [],
    };
  },

  methods: {
    // 发布今日菜单
    publish() {
      console.log('DEBUG publish food menu');
    },

    // 加到菜篮子
    addToCart(item) {
      console.log('DEBUG add to cart');
      // checkRow 是从 List 组件继承的方法
      this.checkRow(this.rows, item);
    },
  },
};
