import $http from '@/utils/http';

// 获取历史菜单
function getMenus() {
  return $http.get('/api/menus').then(res => res.data);
}

export default {
  getMenus,
};
