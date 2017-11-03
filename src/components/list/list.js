/* eslint-disable no-console */
import * as _ from 'lodash';

export default {
  name: 'List',
  props: ['rows'],
  data() {
    return {
      tableName: '',
      keyword: '',
      selectedRows: [],
      searchRange: [],
      limit: 5,
      page: 0,
    };
  },

  computed: {
    currentRows() {
      return this.search(this.rows);
    },
    isAllChecked() {
      return this.currentRows.length > 0 && _.every(this.chunks[this.page], row => row.checked);
    },
    chunks() {
      return _.chunk(this.currentRows, this.limit) || [];
    },
  },

  created() {
    this.clear();
  },

  methods: {
    // 清除表格的状态
    clear() {
      this.selectedRows = [];
      _.forEach(this.rows, (row) => {
        this.$set(row, 'checked', false);
      });
      this.page = 0;
    },
    search(rows) {
      // TODO: 这里不一定是 name 的，不是所有数据都有 name
      if (this.searchRange.length === 0) {
        return _.filter(rows, (row) => {
          if (row.name) {
            return row.name.includes(this.keyword);
          }
          return true;
        });
      }
      return _.filter(rows, (row) => {
        let match = false;
        _.forEach(this.searchRange, (func) => {
          const sample = func(row);
          if (sample && sample.toString().indexOf(this.keyword) > -1) {
            match = true;
            return false;
          }
          return true;
        });
        return match;
      });
    },
    // 选中一行
    checkRow(row, target) {
      // 修改行的选中状态
      this.$set(row, 'checked', target);
      if (row.checked && !this.selectedRows.includes(row)) {
        // 如果这行被选中的话，就添加到选中的行数组里
        this.selectedRows.push(row);
      } else if (!row.checked) {
        // 如果取消选中就移除掉
        _.remove(this.selectedRows, row);
      }

      console.log('###### ', row, this.selectedRows);
    },
    // 点击某一行的事件
    click(row, event) {
      if (event.target.nodeName === 'use' ||
        event.target.nodeName === 'svg' ||
        event.target.nodeName === 'SPAN' ||
        event.target.nodeName === 'A' ||
        event.target.nodeName === 'BUTTON' ||
        // 当其点在 popover 绑定元素上面也不能选中列表
        event.path.some(node => node.classList && node.classList.contains('dao-popover'))
      ) {
        return;
      }
      this.checkRow(row, !row.checked);
    },

    // 点击全选框
    checkAll() {
      const target = !this.isAllChecked;
      _.forEach(this.chunks[this.page], (row) => {
        this.checkRow(row, target);
      });
    },

    repeat(action) {
      const promises = [];
      _.forEach(this.selectedRows, (row) => {
        const promise = this[action](row, true);
        promises.push(promise.then(() => true).catch(() => false));
      });
      const preNoty = new Noty({
        text: '批量操作执行中，请稍候',
      }).show();
      return Promise.all(promises)
        .then((res) => {
          preNoty.close();
          const successLen = _.countBy(res).true || 0;
          if (successLen > 0) {
            new Noty({
              text: 'xxx',
              type: successLen ? 'success' : 'error',
            }).show();
          } else {
            new Noty({
              text: '',
              type: 'error',
            }).show();
          }
          this.clear();
        })
        .catch(() => {
          preNoty.close();
          new Noty({
            text: '',
            type: 'error',
          }).show();
          this.clear();
        });
    },
    next() {
      this.page = this.page + 1;
      // 当切换页面的时候要把所有的行变成不选中
      _.forEach(this.currentRows, (row) => {
        this.checkRow(row, false);
      });
    },
    prev() {
      this.page = this.page - 1;
      // 当切换页面的时候要把所有的行变成不选中
      _.forEach(this.currentRows, (row) => {
        this.checkRow(row, false);
      });
    },
  },
  watch: {
    keyword() {
      this.page = 0;
    },
    rows() {
      this.clear();
    },
  },
};
