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

// 获取今日菜单
function todayMenu() {
  return $http.get('/api/menus/today').then(res => res.data);
}

function uploadFoodPic(file) {
  const data = new FormData();
  data.append('picture', file);

  return $http.request({
    method: 'POST',
    url: '/api/upload',
    headers: { 'Content-Type': 'multipart/form-data',
    },
    data,
  }).then(res => res.data);
}

export default {
  getFoodsList,
  uploadFoodPic,
  addFood,
  addMenu,
  todayMenu,
};
