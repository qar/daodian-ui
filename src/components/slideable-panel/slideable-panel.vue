<template src="./slideable-panel.html"></template>
<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: false,
    },
    withCloseBtn: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    close() {
      this.$emit('update:active', false);
    },
  },
};
</script>
<style lang="scss" scoped src="./slideable-panel.scss"></style>
