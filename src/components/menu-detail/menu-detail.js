/* eslint-disable no-console */
export default {
  name: 'MenuDetail',
  props: {
    menu: {
      type: Object,
      default: null,
    },
  },

  created() {
    console.log('%$%%$%$$$ ', this.menuDetail, this.menu);
  },

  data() {
    return {
      menuDetail: this.menu,

      content: 'foods',

      // side bar
      sidebar: [
        {
          foods: '菜品',
        },
      ],
    };
  },

  watch: {
    menu(newV) {
      this.menuDetail = newV;
    },
  },

  methods: {
    // jgetTodayMenu() {
    // j  foodsApi.todayMenu().then((res) => {
    // j    this.todayMenu = res;
    // j    console.log('####', res);
    // j  });
    // j},
  },
};

