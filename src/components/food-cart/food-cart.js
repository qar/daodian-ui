/* eslint-disable no-console */
import List from '@/components/list/list';
import foodsApi from '@/apis/food';

export default {
  name: 'FoodMenu',
  extends: List,

  created() {}, // 重置 List 组件的 created hook

  props: {
    rows: {
      type: Array,
      default: [],
    },
  },

  methods: {
    // 发布今日菜单
    addMenu() {
      foodsApi.addMenu({
        deadline: '2017-11-03',
        description: '',
        food_ids: this.rows.map(f => f.id).join(','),
      });
    },

    removeFromCart(item) {
      this.$emit('remove', item);
    },
  },
};
