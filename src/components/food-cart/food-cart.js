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
      }).then(() => {
        new Noty({
          text: '菜单创建成功',
          type: 'error',
        }).show();
      }).catch((err) => {
        let errMsg = err.response.data.message;
        if (err.response.data.id === 'already_exist') {
          errMsg = '今日菜单已经存在';
        }
        new Noty({
          text: errMsg,
          type: 'error',
        }).show();
      });
    },

    removeFromCart(item) {
      this.$emit('remove', item);
    },
  },
};
