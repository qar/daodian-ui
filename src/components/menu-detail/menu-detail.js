/* eslint-disable no-console */
import foodsApi from '@/apis/food';

export default {
  name: 'MenuDetail',

  created() {
    this.getTodayMenu();
  },

  data() {
    return {
      todayMenu: null,

      content: 'foods',

      // side bar
      sidebar: [
        {
          foods: '菜品',
        },
      ],
    };
  },

  methods: {
    getTodayMenu() {
      foodsApi.todayMenu().then((res) => {
        this.todayMenu = res;
        console.log('####', res);
      });
    },
  },
};

