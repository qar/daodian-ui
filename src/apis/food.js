import $http from '@/utils/http';

function getFoodsList() {
  return $http.get('/api/foods')
    .then(res => res.data);
}

export default {
  getFoodsList,
};
