/* eslint-disable no-console, no-new */
import List from '@/components/list/list';
import foodsApi from '@/apis/food';

export default {
  name: 'FoodMenu',
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
    this.getTodayMenu();
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

    deleteFood(item) {
      foodsApi.deleteFood(item.id).then(() => {
        new Noty({
          text: '菜品已删除',
          type: 'success',
        }).show();
        this.$emit('request-refresh');
      }).catch((err) => {
        new Noty({
          text: `删除失败 ${err.response.message}`,
          type: 'error',
        }).show();
      });
    },

    // 页面跳转 state is like { name: 'menu' } or /menu
    routeTo(state) {
      this.$router.push(state);
    },
  },
};
