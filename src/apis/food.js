import $http from '@/utils/http';

function getFoodsList() {
  return $http.get('/api/foods').then(res => res.data);
}

function addFood(params) {
  return $http.post('/api/foods', params).then(res => res.data);
}

// 添加一个菜单
function addMenu(params) {
  return $http.post('/api/menus', params).then(res => res.data);
}

function uploadFoodPic(file) {
  return $http.request({
    method: 'POST',
    url: '/api/upload',
    data: file,
  });
}

export default {
  getFoodsList,
  uploadFoodPic,
  addFood,
  addMenu,
};
