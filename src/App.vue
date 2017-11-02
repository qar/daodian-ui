<template>
  <div id="app">
    <div class="layout">
      <sidebar></sidebar>
      <div class="layout-content">
        <status-bar></status-bar>
        <router-view class="content"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="scss">
  @import '~@/assets/common.scss';
  @import '~daoColor';

  body {
    margin: 0; // TODO move to reset.scss
  }

  #app {
    height: 100%;
    display: flex !important;
    flex-direction: column;
  }
  #warning-bar {
    padding: 10px 14px;
    background-color: $red;
    font-size: 16px;
    color: #fff;
    line-height: 1;
    flex: none;
    z-index: 1;
    text-decoration: none;
    .hover-line {
      position: relative;
      cursor: pointer;
      &:after {
        transition: width .2s ease;
        width: 100%;
        content: '';
        position: absolute;
        bottom: -2px;
        right: 0;
        border-bottom: 1px solid #ffffff;
      }
    }
  }
  .layout {
    display: flex;
    flex: 1 1 auto;
    height: 100%;
    .layout-content {
      position: relative;
      flex: 1;
      display: flex;
      flex-direction: column;
      background: $white-dark-lighter;
      overflow: auto;
      &>.dao-status-bar {
        flex: 0 0 auto;
      }
      &> .dao-table-container, .node-list-container {
        flex: 1 1 auto;
        margin: 20px 40px;
      }
      &> .content {
        flex-grow: 1;
        flex-shrink: 0;
      }
    }
  }
</style>
