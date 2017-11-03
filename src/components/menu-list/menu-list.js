/* eslint-disable no-console */
import List from '@/components/list/list';
import foodsApi from '@/apis/food';

export default {
  name: 'MenuList',
  props: ['rows'],

  extends: List,

  data() {
    return {
      showFoodCart: false,
      cart: [],
      todayMenu: null,
    };
  },

  created() {
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
    // 获取今日菜单
    getTodayMenu() {
      foodsApi.todayMenu().then((res) => {
        this.todayMenu = res;
      });
    },

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

    // 页面跳转 state is like { name: 'menu' } or /menu
    routeTo(state) {
      this.$router.push(state);
    },
  },
};
