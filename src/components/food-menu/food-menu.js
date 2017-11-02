/* eslint-disable no-console */
import List from '@/components/list/list';

export default {
  name: 'FoodMenu',
  props: ['rows'],

  extends: List,

  methods: {
    // 发布今日菜单
    publish() {
      console.log('DEBUG publish food menu');
    },
  },
};
