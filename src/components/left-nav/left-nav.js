export default {
  name: 'Sidebar',

  computed: {
    isActive() {
      return true;
    },
  },

  methods: {
    // 页面跳转 state is like { name: 'menu' } or /menu
    routeTo(state) {
      this.$router.push(state);
    },
  },
};
