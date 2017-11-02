import $http from '@/utils/http';

function getFoodsList() {
  return $http.get('/api/foods').then(res => res.data);
}

function uploadFoodPic() {
  return $http.post('/api/upload').then(res => res.data);
}

export default {
  getFoodsList,
  uploadFoodPic,
};
