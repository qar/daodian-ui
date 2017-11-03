/* eslint-disable no-console */
import List from '@/components/list/list';

export default {
  name: 'FoodMenu',
  props: ['rows'],

  extends: List,

  data() {
    return {
      showFoodCart: false,
      cart: [],
    };
  },

  computed: {
    cartCount() {
      return this.cart.length;
    },

    selected() {
      return this.rows.filter(row => this.cart.indexOf(row.id) >= 0);
    },
  },

  methods: {
    // 发布今日菜单
    publish() {
      console.log('DEBUG publish food menu');
    },

    removeFromCart(item) {
      this.cart = this.cart.splice(item.id);
    },

    // 加到菜篮子
    addToCart(item) {
      // checkRow 是从 List 组件继承的方法
      this.checkRow(item, true);
      this.cart.push(item.id);
    },
  },
};
