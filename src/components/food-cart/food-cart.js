/* eslint-disable no-console */
import List from '@/components/list/list';

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
    publish() {
      console.log('DEBUG publish food menu');
    },

    removeFromCart(item) {
      this.$emit('remove', item);
    },
  },
};
